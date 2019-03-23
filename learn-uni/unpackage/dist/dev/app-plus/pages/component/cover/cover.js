
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"page { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"video { position: relative; }\nwx-cover-view, wx-cover-image { display: inline-block; }\n.",[1],"img { position: absolute; width: ",[0,100],"; height: ",[0,100],"; top: 50%; margin-top: ",[0,-50],"; }\n.",[1],"controls-play { left: ",[0,50],"; }\n.",[1],"controls-pause { right: ",[0,50],"; }\n.",[1],"controls-title { width: 100%; text-align: center; color: #ffffff; }\n",],undefined,{path:"./pages/component/cover/cover.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/cover/cover.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      