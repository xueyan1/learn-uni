
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-movable-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; height: ",[0,150],"; width: ",[0,150],"; background-color: #007AFF; color: #fff; }\nwx-movable-area { height: ",[0,300],"; width: 100%; background-color: #D8D8D8; overflow: hidden; }\n",],undefined,{path:"./pages/component/movable-view/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/movable-view/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      