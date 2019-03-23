
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"red, .",[1],"blue, .",[1],"green { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; height: ",[0,200],"; }\n.",[1],"red { background-color: red; }\n.",[1],"blue { background-color: blue; }\n.",[1],"green { background-color: green; }\n.",[1],"yellow { background-color: yellow; }\n.",[1],"scroll-y { height: ",[0,300],"; }\n.",[1],"scroll-view-item { height: ",[0,300],"; line-height: ",[0,300],"; text-align: center; font-size: ",[0,36],"; }\n.",[1],"scroll-x { white-space: nowrap; width: 100%; }\n.",[1],"scroll-x-item { display: inline-block; width: 100%; height: ",[0,300],"; line-height: ",[0,300],"; text-align: center; font-size: ",[0,36],"; }\n",],undefined,{path:"./pages/component/scroll-view/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/scroll-view/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      