class ReadImg{
  constructor(fileName){
    this.fileName = fileName
    this.loadFromDisk()
  }
  display(){
    console.log('display...' + this.fileName)
  }
  loadFromDisk(){
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg{
  constructor(fileName){
    this.realImg = new ReadImg(fileName)
  }
  display(){
    this.realImg.display()
  }
}

//test
let proxyImg = new proxyImg('1.png')
proxyImg.display()





//明星和经纪人

//明星
let star = {
  name:'鞠婧祎',
  age:25,
  phone:'star : 13900001111'
}
//经纪人
let agent = new Proxy(star,{
  get:function (target,key) {
    if(key === 'phone'){
      //返回经纪人自己的电话
      return 'agent : 16899997777'
    }
    if(key === 'price'){
      //明星不报价，经纪人报价
      return 120000
    }
    return target[key]
  },
  set:function (target,key,val){
    if(key === 'customPrice'){
      if(val < 100000){
        //最低10w
        throw new Error('价格太低')
      }else{
        target[key] = val
        return true
      }
    }
  }
})

//test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 150000
console.log('agent.customPrice',agent.customPrice)
