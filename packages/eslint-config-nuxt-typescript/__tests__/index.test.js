const fs = require('fs')
const resolve = require('path').resolve
const { ESLint } = require('eslint')
const config = require('../')

const load = (fileName) => {
  const filePath = resolve(__dirname, fileName)

  return {
    code: fs.readFileSync(filePath, 'utf-8'),
    filePath: fileName
  }
}

const validFiles = [
  'vue-valid.vue'
].map(load)

const invalidFiles = [
  'vue-invalid.vue'
].map(load)

const eslint = new ESLint({
  baseConfig: config
})

describe('flags no warnings with valid file', () => {
  /**
   * @type {ESLint.LintResult[]}
   */
  let result

  beforeEach(async () => {
    result = (
      await Promise.all(
        validFiles.map(
          file => eslint.lintText(file.code, {
            filePath: file.filePath
          })
        )
      )
    ).flat()
  })

  it('did not error', () => {
    const count = result.reduce((prev, item) => prev + item.errorCount, 0)

    return expect(count).toBe(0)
  })

  it('flags no warnings', () => {
    const count = result.reduce((prev, item) => prev + item.warningCount, 0)

    return expect(count).toBe(0)
  })
})

describe('flags warnings with invalid file', () => {
  /**
   * @type {ESLint.LintResult[]}
   */
  let result

  beforeEach(async () => {
    result = (
      await Promise.all(
        invalidFiles.map(
          file => eslint.lintText(file.code, {
            filePath: file.filePath
          })
        )
      )
    ).flat()
  })

  it('did error', () => {
    const count = result.reduce((prev, item) => prev + item.errorCount, 0)

    return expect(count).toBeGreaterThan(0)
  })

  it('flags three warnings', () => {
    const count = result.reduce((prev, item) => prev + item.warningCount, 0)

    return expect(count).toBe(3)
  })

  it('correct warning text', () => {
    return expect(result[0].messages[0].message).toBe(
      'Expected 1 line break after opening tag (`<div>`), but no line breaks found.'
    )
  })

  it('correct rule flagged', () => {
    return expect(result[0].messages[0].ruleId).toBe('vue/multiline-html-element-content-newline')
  })

  it('correct severity flagged', () => {
    return expect(result[0].messages[0].severity).toBe(1)
  })

  it('correct line number', () => {
    return expect(result[0].messages[0].line).toBe(2)
  })

  it('correct column number', () => {
    return expect(result[0].messages[0].column).toBe(8)
  })
})
