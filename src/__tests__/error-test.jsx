jest.dontMock('../error')
jest.dontMock('../type')

var StrError = require('../error')

describe('string', function() {
  it('#validate return no error', function() {
      expect(new StrError('').validate()).toEqual('')
  })

  it('#validate returns error', function() {
    expect(new StrError('a').validate()).toEqual('Error: value should be of length 0')
  })
})
