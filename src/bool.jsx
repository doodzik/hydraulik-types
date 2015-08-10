import Type from './type'

export default class Bool extends Type {
  validation(){
    if (this.value !== true && this.value !== false)
        return `${this.value} isn't a boolean ${this.name}`
  }
}

