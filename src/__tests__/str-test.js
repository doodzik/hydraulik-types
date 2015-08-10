jest.dontMock('../str')
jest.dontMock('../type')

describe('str', function() {
  var Str = require('../str').default

  it('#validate returns empty string', function() {
    var str = 'hello'
    expect(new Str(str).validate()).toEqual('')
  })

  it('#validate returns string string too long', function() {
    var str = new Array(130).join('a')
    var strInstance = new Str(str)
    strInstance.max = 120
    expect(strInstance.validate()).toEqual('Str is too long')
  })

  it('#validate returns string is too short', function() {
    var str = ''
    var strInstance = new Str(str)
    strInstance.min = 5
    expect(strInstance.validate()).toEqual('Str is too short')
  })
})
