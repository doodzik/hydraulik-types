import Type from './type'

export default class Error extends Type {
  constructor(...args){
    super(...args)
    this.length = this.value.length
  }

  validation(){
    if (this.length != 0)
      return 'Error: value should be of length 0'
  }
}
