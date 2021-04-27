const fs = require('fs')
const resolve = require('path').resolve
const stylelint = require('stylelint')
const config = require('../')

const load = fileName => fs.readFileSync(resolve(__dirname, fileName), 'utf-8')

const validCss = load('scss-valid.scss')
const invalidCss = load('scss-invalid.scss')

describe('flags no warnings with valid css', () => {
  /**
   * @type {stylelint.LinterResult}
   */
  let result

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config
    })
  })

  it('did not error', () => {
    return expect(result.errored).toBeFalsy()
  })

  it('flags no warnings', () => {
    return expect(result.results[0].warnings).toHaveLength(0)
  })
})

describe('flags warnings with invalid css', () => {
  /**
   * @type {stylelint.LinterResult}
   */
  let result

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidCss,
      config
    })
  })

  it('did error', () => {
    return expect(result.errored).toBeTruthy()
  })

  it('flags two warnings', () => {
    return expect(result.results[0].warnings).toHaveLength(2)
  })

  it('correct warning text', () => {
    return expect(result.results[0].warnings[0].text).toBe(
      'Expected border to come before top (order/properties-alphabetical-order)'
    )
  })

  it('correct rule flagged', () => {
    return expect(result.results[0].warnings[0].rule).toBe('order/properties-alphabetical-order')
  })

  it('correct severity flagged', () => {
    return expect(result.results[0].warnings[0].severity).toBe('error')
  })

  it('correct line number', () => {
    return expect(result.results[0].warnings[0].line).toBe(3)
  })

  it('correct column number', () => {
    return expect(result.results[0].warnings[0].column).toBe(3)
  })
})
