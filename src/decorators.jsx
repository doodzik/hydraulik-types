export var min = function (count) {
   return function decorator(target) {
      target.prototype.min = count
      return target
   }
}

export var max = function (count) {
   return function decorator(target) {
      target.prototype.max = count
      return target
   }
}

