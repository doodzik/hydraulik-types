jest.dontMock('../str')
jest.dontMock('../type')

describe('str', function() {
  var StrImport = require('../str'),
      Str       = StrImport.default,
      min       = StrImport.min,
      max       = StrImport.max
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

  it('#min', function() {
    @max(140)
    class Tweet extends Str {}
    var str = new Array(150).join('a')

    expect(new Tweet(str).validate()).toEqual('Tweet is too long')
  })

  it('#max', function() {
    @min(6)
    class Password extends Str {}

    expect(new Password('valid str').validate()).toEqual('')
    expect(new Password('').validate()).toEqual('Password is too short')
  })
})
