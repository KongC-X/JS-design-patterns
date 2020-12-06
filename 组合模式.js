{/* <div id="div" class="container">
<p>123</p>
<p>456</p>
</div> */}

{
  tag:'div',
  attr:{
    id:'div1',
    className:'container'
  },
  children:{
    {
      tag:'p',
      attr:{},
      children:['123']
    },
    {
      tag:'p',
      attr:{},
      children:['456']
    }
  }
}