//单例模式
let Singleton = function (name) {
  this.name = name
}
Singleton.prototype.getName = function () {
  return this.name
}
//获取实例对象
let getInstance = (function () {
  let instance = null
  return function (name) {
    if(!instance){
      instance = new Singleton(name)
    }
    return instance
  }
})()
//测试单例模式的实例
let a = getInstance('aa')
let b = getInstance('bb')

console.log(a === b)  //true
console.log(a.getName())  //aa
console.log(b.getName())  //aa





//模拟登录框
class LoginForm{
  constructor(){
    this.state = 'hide'
  }
  show(){
    if(this.state === 'show'){
      alert('已经显示')
      return 
    }
    this.state = 'show'
    console.log('登录框已显示')
  }
  hide(){
    if(this.state === 'hide'){
      alert('已经隐藏')
      return 
    }
    this.state = 'hide'
    console.log('登录框已隐藏')
  }
}
LoginForm.getInstance = (function () {
  let instance
  return function(){
    if(!instance){
      instance = new LoginForm()
    }
    return instance
  }
})()
//test
let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login2.hide()
console.log('login1 === login2',login1 === login2)