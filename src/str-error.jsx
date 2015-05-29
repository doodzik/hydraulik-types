import Type from './type'

export default class StrError extends Type {
  constructor(...args){
    super(...args)
    this.length = this.value.length
  }

  validation(){
    if (this.length != 0)
      return 'StrError: value should be of length 0'
  }
}
