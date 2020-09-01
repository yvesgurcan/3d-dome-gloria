(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.66a","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=n(12),l=n(3),s=n(17),m=n(27),u=n.n(m),d=n(20),p=n.n(d),h=n(5),g=n(28),b=n.n(g),f=n(4);function E(){var e=b()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return E=function(){return e},e}var y=Object(f.a)(E()),w=(f.b.div.withConfig({displayName:"PermissionScreen",componentId:"sc-1svkdm1-0"})(["width:100vw;height:100vh;background:black;display:flex;justify-content:center;align-items:center;color:white;"]),n(9)),v=n.n(w),x=function(e){var t=Object(a.useRef)(),n=Object(h.e)().setDefaultCamera;return Object(a.useEffect)((function(){n(t.current)}),[]),Object(h.c)((function(){t.current.updateMatrixWorld()})),r.a.createElement("perspectiveCamera",v()({ref:t},e))},k=n(11),z=n.n(k),I=n(36);Object(h.b)({OrbitControls:I.a});var M=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,i=e.target,c=void 0===i?[1,.08,0]:i,l=z()(e,["autoRotate","delayRotation","target"]),s=Object(a.useRef)(),m=Object(h.e)(),u=m.camera,d=m.gl;return Object(h.c)((function(){o||s.current.update()})),r.a.createElement("orbitControls",v()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[u,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},l))},P=function(){return r.a.createElement(M,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},C=n(37);Object(h.b)({DeviceOrientationControls:C.a});var j=n(1),O=n(22),A=function(){var e=Object(a.useMemo)((function(){var e=new j.Mesh(new j.CylinderGeometry(6,6,20,60,4)),t=new j.Mesh(new j.CylinderGeometry(5,5,20,60,4)),n=new O.a(t),a=new O.a(e).subtract(n).toMesh();a.material=new j.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:j.FlatShading});var r=(new j.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return a.material.map=r,a.position.y=9.48,a}));return r.a.createElement("primitive",{object:e})},L=function(){return r.a.createElement("mesh",{position:[.5,-.35,0]},r.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},N=n(38);function R(e){var t=e.to,n=void 0===t?"/triforce":t,o=Object(a.useRef)(0),i=Object(h.d)(N.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return i.scene.scale.set(.007,.007,.007),Object(h.c)((function(){i.scene.rotation.y+=.02,0===o.current?o.current=200:(o.current>100?i.scene.position.y=i.scene.position.y-200/3e5:i.scene.position.y=i.scene.position.y+200/3e5,o.current=o.current-1)})),r.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},r.a.createElement("primitive",{object:i.scene,position:[0,0,.5]}))}var S,B=function(){return r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(R,null))},G=function(e){var t=e.to,n=void 0===t?"":t,a=(e.color,e.position),o=void 0===a?[0,0,0]:a,i=e.dimension,c=void 0===i?[0,0,0]:i,l=z()(e,["to","color","position","dimension"]);return r.a.createElement("mesh",v()({position:o},l,{onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}}),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:c}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},H=function(){return r.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},r.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:j.DoubleSide}))},T=function(){var e=Object(a.useState)(!1),t=p()(e,2),n=t[0],o=t[1],i=Object(a.useState)(!0),c=p()(i,2);c[0],c[1];return Object(a.useEffect)((function(){o(function(){if("localhost"===location.hostname)return console.info("This is localhost."),!0;return console.info("This is not localhost."),!1}())}),[]),r.a.createElement("span",null,r.a.createElement(y,null),r.a.createElement(h.a,{style:{background:"rgb(140, 140, 255)"}},r.a.createElement(x,{position:[0,0,0]}),n?r.a.createElement(M,null):r.a.createElement(P,null),r.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},r.a.createElement("ambientLight",{intensity:.85}),r.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),r.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),r.a.createElement(L,null),r.a.createElement(B,null),r.a.createElement(G,{to:"/inside/pin1",position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),r.a.createElement(G,{to:"/inside/pin2",position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),r.a.createElement(G,{to:"/inside/pin3",position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),r.a.createElement(G,{to:"/inside/pin4",position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),r.a.createElement(H,null),r.a.createElement(A,null))))},D=f.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),_=f.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),q=function(){return r.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","ios-src":"https://gloria-3d-assets.s3-us-west-2.amazonaws.com/triforce.usdz","ar-modes":"webxr scene-viewer quick-look",ar:!0,"auto-rotate":!0,"camera-controls":!0})},F=f.b.div.withConfig({displayName:"TriforceModal__CenteredViewer",componentId:"k0zb01-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),J=f.b.div.withConfig({displayName:"ToolOverlay",componentId:"sc-1dx71zy-0"})(["position:absolute;bottom:1rem;left:1rem;color:white;z-index:9999;"]),U=f.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-1ju6635-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),V=function(e){var t=e.color,n=void 0===t?"rgb(200, 200, 200)":t,a=e.x,o=void 0===a?0:a,i=e.y,c=void 0===i?0:i,l=e.z,s=void 0===l?0:l,m=e.length,u=void 0===m?0:m,d=e.width,p=void 0===d?0:d,h=e.depth,g=void 0===h?0:h,b=e.opacity,f=void 0===b?1:b,E=z()(e,["color","x","y","z","length","width","depth","opacity"]);return r.a.createElement("mesh",v()({position:[0+o,0+c,0+s]},E),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[g,p,u]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:n,roughness:.5,opacity:f,transparent:0!==f}))},Z=function(e){var t=e.to,n=void 0===t?"/":t,a=e.x,o=void 0===a?0:a,i=e.y,c=void 0===i?0:i,l=e.z,s=void 0===l?0:l,m=e.color,u=void 0===m?"rgb(150, 150, 150)":m,d=z()(e,["to","x","y","z","color"]);return r.a.createElement("mesh",v()({onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)},position:[0+o,0+c,0+s]},d),r.a.createElement("coneBufferGeometry",{attach:"geometry",args:[2,-5,2]}),r.a.createElement("shaderMaterial",{attach:"material",color:u,roughness:.3,uniforms:{texture:{value:"somevalue"}}}))},W=V,Y=V,$=function(e){var t=e.color,n=e.to;return r.a.createElement(U,{backgroundColor:"rgb(140, 140, 255)",zIndex:600},r.a.createElement(K,{to:"/"},"Back"),r.a.createElement(h.a,{camera:{position:new j.Vector3(-2,0,0)}},r.a.createElement("ambientLight",{intensity:.5}),r.a.createElement("hemisphereLight",{color:"rgb(100, 100, 100)",intensity:.5,position:[10,5,0]}),r.a.createElement(W,{color:t,x:-500,y:0,z:0,length:500,width:250}),r.a.createElement(W,{color:t,x:500,y:0,z:0,length:500,width:250}),r.a.createElement(W,{color:t,x:0,y:125,z:0,length:500,depth:1e3}),r.a.createElement(W,{color:t,x:15,y:-125,z:0,length:500,depth:1e3}),r.a.createElement(W,{color:t,x:0,y:0,z:250,depth:1e3,width:250}),r.a.createElement(W,{color:t,x:0,y:0,z:-250,depth:1e3,width:250}),r.a.createElement(Z,{to:"".concat(n,"/pin1"),x:23,y:-12,z:-18}),r.a.createElement(Z,{to:"".concat(n,"/pin2"),x:110,y:-27,z:15}),r.a.createElement(Z,{to:"".concat(n,"/pin3"),x:70,y:-27,z:50}),r.a.createElement(Y,{color:"rgb(50, 50, 50)",x:30,y:-12,z:-10,depth:5,width:5,length:5}),r.a.createElement(Y,{color:"rgb(50, 50, 50)",x:35,y:-12,z:0,depth:5,width:5,length:5}),r.a.createElement(Y,{color:"rgb(50, 50, 50)",x:30,y:-12,z:10,depth:5,width:5,length:5}),r.a.createElement(M,{enableZoom:!1,minAzimuthAngle:-Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2,maxPolarAngle:-Math.PI/2})))},K=Object(f.b)(c.b).withConfig({displayName:"Inside__BackLink",componentId:"brhz5m-0"})(["padding:2rem;position:absolute;z-index:610;"]),Q=function(e){var t=e.text,n=e.to;return r.a.createElement(D,{zIndex:800},r.a.createElement(_,{backgroundColor:"rgb(245, 0, 0, 0.75)"},r.a.createElement(c.b,{to:n},"Back"),r.a.createElement(X,null,t)))},X=f.b.div.withConfig({displayName:"PinModal__BigNumber",componentId:"sc-1giq03i-0"})(["font-size:120px;display:flex;justify-content:center;align-items:center;height:100%;"]),ee=document.getElementById("root");S=document.createElement("div"),document.body.appendChild(S),u.a.init({container:S,tool:["console","elements"]}),console.info(s.name,s.version),i.a.render(r.a.createElement(c.a,null,r.a.createElement(J,null,s.version," ",r.a.createElement("button",{onClick:function(){localStorage.removeItem("3d-dome-orientationPermission"),window.location.reload()}},"Reset permissions")),r.a.createElement(l.a,{component:function(e){var t=e.history;return window.appHistory=t,"/ar"===t.location.pathname?null:r.a.createElement(T,null)}}),r.a.createElement(l.a,{path:"/triforce",component:function(){return r.a.createElement(D,null,r.a.createElement(_,{backgroundColor:"rgb(0, 168, 224, 0.75)"},r.a.createElement(c.b,{to:"/"},"Back"),r.a.createElement(F,null,r.a.createElement(q,null))))}}),r.a.createElement(l.a,{path:"/ar",component:function(){return r.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","auto-rotate":!0,"camera-controls":!0,ar:!0,"ar-modes":"webxr scene-viewer quick-look","ar-scale":"auto","ios-src":"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz"})}}),r.a.createElement(l.a,{path:"/inside1",component:function(){return r.a.createElement($,{color:"orange",to:"/inside1"})}}),r.a.createElement(l.a,{path:"/inside2",component:function(){return r.a.createElement($,{color:"blue",to:"/inside2"})}}),r.a.createElement(l.a,{path:"/inside3",component:function(){return r.a.createElement($,{color:"green",to:"/inside3"})}}),r.a.createElement(l.a,{path:"/inside4",component:function(){return r.a.createElement($,{color:"yellow",to:"/inside4"})}}),r.a.createElement(l.a,{path:"/inside/pin1",render:function(){return r.a.createElement(Q,{to:"",text:"1"})}}),r.a.createElement(l.a,{path:"/inside/pin2",render:function(){return r.a.createElement(Q,{to:"",text:"2"})}}),r.a.createElement(l.a,{path:"/inside/pin3",render:function(){return r.a.createElement(Q,{to:"",text:"3"})}}),r.a.createElement(l.a,{path:"/inside/pin4",render:function(){return r.a.createElement(Q,{to:"",text:"4"})}}),r.a.createElement(l.a,{path:"/inside2/pin2",render:function(){return r.a.createElement(Q,{to:"/inside2",text:"B"})}}),r.a.createElement(l.a,{path:"/inside2/pin3",render:function(){return r.a.createElement(Q,{to:"/inside2",text:"C"})}}),r.a.createElement(l.a,{path:"/inside3/pin1",render:function(){return r.a.createElement(Q,{to:"/inside3",text:"I"})}}),r.a.createElement(l.a,{path:"/inside3/pin2",render:function(){return r.a.createElement(Q,{to:"/inside3",text:"II"})}}),r.a.createElement(l.a,{path:"/inside3/pin3",render:function(){return r.a.createElement(Q,{to:"/inside3",text:"II"})}}),r.a.createElement(l.a,{path:"/inside4/pin1",render:function(){return r.a.createElement(Q,{to:"/inside4",text:"a"})}}),r.a.createElement(l.a,{path:"/inside4/pin2",render:function(){return r.a.createElement(Q,{to:"/inside4",text:"b"})}}),r.a.createElement(l.a,{path:"/inside4/pin3",render:function(){return r.a.createElement(Q,{to:"/inside4",text:"c"})}})),ee)}},[[58,1,2]]]);