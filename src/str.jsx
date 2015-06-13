import Type from './type'

export default class Str extends Type {
  constructor(...args){
    super(...args)
    this.value  = this.value.toString()
    this.length = this.value.length
    this.min    = -1
    this.max    = -1
  }

  validation(){
    if (this.min > -1 && this.length < this.min)
        return `${this.name} is too short`
    if (this.max > -1 && this.length > this.max)
        return `${this.name} is too long`
  }
}
