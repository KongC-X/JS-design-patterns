class Adaptee{
  specificRequest(){
    return '德国标准的插头'
  }
}
class Target{
  constructor(){
    this.adaptee = new Adaptee()
  }
  request(){
    let info = this.adaptee.specificRequest()
    return `${info} -> 转换器 -> 中国标准的插头`
  }
}
//text
let target = new Target()
target.request()



//封装旧接口
//自己封装的 ajax ，使用方式如下：
ajax({
  url:'/getData',
  type:'Post',
  dataType:'json',
  data:{
    id:"123"
  }
})
.done(function () {})

//但因为历史原因，代码中去都是
//$.ajax({...})

//做一层适配器
var $ = {
  ajax:function (options) {
    return this.ajax(options)
  }
}