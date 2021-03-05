const fs = require('fs')
const resolve = require('path').resolve
const stylelint = require('stylelint')
const config = require('../')

const validCss = fs.readFileSync(resolve(__dirname, 'scss-valid.scss'), 'utf-8')
const invalidCss = fs.readFileSync(resolve(__dirname, 'scss-invalid.scss'), 'utf-8')

describe('flags no warnings with valid css', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config
    })
  })

  it('did not error', () => {
    return result.then(data => expect(data.errored).toBeFalsy())
  })

  it('flags no warnings', () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(0)
    )
  })
})

describe('flags warnings with invalid css', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config
    })
  })

  it('did error', () => {
    return result.then(data => expect(data.errored).toBeTruthy())
  })

  it('flags two warnings', () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(2)
    )
  })

  it('correct warning text', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].text).toBe(
        'Expected border to come before top (order/properties-alphabetical-order)'
      )
    )
  })

  it('correct rule flagged', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].rule).toBe('order/properties-alphabetical-order')
    )
  })

  it('correct severity flagged', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].severity).toBe('error')
    )
  })

  it('correct line number', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].line).toBe(3)
    )
  })

  it('correct column number', () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].column).toBe(3)
    )
  })
})
