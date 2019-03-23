
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"red, .",[1],"blue, .",[1],"green { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; height: ",[0,200],"; }\n.",[1],"red { background-color: red; }\n.",[1],"blue { background-color: blue; }\n.",[1],"green { background-color: green; }\n",],undefined,{path:"./pages/component/view/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/view/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      