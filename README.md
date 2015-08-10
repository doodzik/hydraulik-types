# hydraulik-types

`$ npm i hydraulik-types --save`

```es6
import Str from 'hydraulik-types/lib/str'

// Type values shouldn't be reasigned.
new Str('hello world').validate
=> ''
new Str('hello world').isValid
=> true

```

## API

\#new value, [options]

\#isValid: bool

\#validate: string

returns the error message

\#validation: string/null

Only relevant if you use your 
holds the tests.

## Types

### Type

any value is accepted

### String - Str

anything that listens to toString is accepted
@min and @max decorators available for defining custom Types.
This is used to validate the string length.

### Boolean - Bool

Just True and False

### Error

empty strinsg is accepted

## Custom Types

```es6
import Str, { max } from 'hydraulik-types/lib/str'

@max(140)
class Tweet extends Str {
  constructor(...args){
    super(...args) // mandatory
    // access to options object through this.options
    // access to value through this.value
  }

  validation(){
    // The validation of the parent type is done before hand. no need to call super
    // Check out src/type.jsx to see how it is done
    // name is the name of the type, which can also be set througth options.name
    if (this.value.indexOf('i am being censored') > -1)
        return `${this.name} arn't censored` // return the error msg.
    // you don't have to specify a return value
  }
}
```
