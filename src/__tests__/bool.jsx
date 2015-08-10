jest.dontMock('../bool')
jest.dontMock('../type')

describe('Bool', function() {
  var Bool = require('../bool')

  it('#validate returns empty string if true or false', function() {
    expect(new Bool(true).validate()).toEqual('')
    expect(new Bool(false).validate()).toEqual('')
  })

  it('#validate returns string if isnt bool val', function() {
    expect(new Bool('xyz').validate()).toEqual("xyz isn't a boolean Bool")
  })
})

