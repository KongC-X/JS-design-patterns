function bindEvent(elem,type,selector,fn) {
  if(fn == null){
    fn = selector
    selector = null
  }

  // ******
}

//调用
bindEvent(elem,'click','#div',fn)
bindEvent(elem,'click',fn)