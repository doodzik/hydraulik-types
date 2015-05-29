import Type from './type'

export default class Str extends Type {
  constructor(...args){
    super(...args)
    this.length = this.value.length
    this.min = 1
    this.max = 128
  }

  validation(){
    if (this.length < this.min)
      return 'Str is too short'
    if (this.length > this.max)
      return 'Str is too long'
  }
}
