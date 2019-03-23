
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"swiper-item { height: ",[0,300],"; }\n",],undefined,{path:"./pages/component/swiper/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/swiper/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      