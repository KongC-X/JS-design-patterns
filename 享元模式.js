//无限下拉列表，将事件代理到高层节点上
//如果都绑定到<a> 标签，对内存开销太大
let div1 = document.getElementById('div1')
div1.addEventListener('click',function (e) {
  let target = e.target
  if(e.nodeName === 'A'){
    alert(target.innerHTML)
  }
})