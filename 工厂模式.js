class Product{
  constructor(name){
    this.name = name
  }
  init(){alert('init')}
  fun1(){alert('fun1')}
  fun2(){alert('fun2')}
}

class Creator{
  create(name){
    return new Product(name)
  }
}

//test
let create = new Creator()
let p = create.create('p1')
p.init()
p.fun1()

//init
//fun1