!function() {
  function setRem() {
    let clientWidth =  document.body.clientWidth;
    let size = clientWidth / 3.75 + 'px';
    document.documentElement.style.fontSize = size;
  }
  setRem()
  window.onresize = function(){  
    setRem();
  }
}()