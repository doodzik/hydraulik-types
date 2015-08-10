jest.dontMock('../decorators')

describe('decorators', function() {
  var decorators = require('../decorators'),
      min        = decorators.min,
      max        = decorators.max

  it('@min', function() {
    @max(140)
    class Tweet {}
    expect(new Tweet().max).toEqual(140)
  })

  it('@max', function() {
    @min(40)
    class Tweet {}
    expect(new Tweet().min).toEqual(40)
  })
})
