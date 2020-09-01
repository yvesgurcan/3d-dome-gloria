(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.66","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')},61:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(27),i=n.n(a),c=n(12),l=n(3),s=n(17),m=n(28),u=n.n(m),d=n(21),p=n.n(d),h=n(29),b=n.n(h),g=n(18),f=n.n(g),E=n(5),y=n(30),w=n.n(y),v=n(4);function x(){var e=w()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return x=function(){return e},e}var k=Object(v.a)(x()),I=v.b.div.withConfig({displayName:"PermissionScreen",componentId:"sc-1svkdm1-0"})(["width:100vw;height:100vh;background:black;display:flex;justify-content:center;align-items:center;color:white;"]),z=n(9),P=n.n(z),j=function(e){var t=Object(r.useRef)(),n=Object(E.e)().setDefaultCamera;return Object(r.useEffect)((function(){n(t.current)}),[]),Object(E.c)((function(){t.current.updateMatrixWorld()})),o.a.createElement("perspectiveCamera",P()({ref:t},e))},C=n(11),O=n.n(C),M=n(38);Object(E.b)({OrbitControls:M.a});var A=function(e){var t=e.autoRotate,n=void 0!==t&&t,a=e.delayRotation,i=e.target,c=void 0===i?[1,.08,0]:i,l=O()(e,["autoRotate","delayRotation","target"]),s=Object(r.useRef)(),m=Object(E.e)(),u=m.camera,d=m.gl;return Object(E.c)((function(){a||s.current.update()})),o.a.createElement("orbitControls",P()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[u,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},l))},S=function(){return o.a.createElement(A,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},L=n(39);Object(E.b)({DeviceOrientationControls:L.a});var R=function(){var e=Object(r.useRef)(),t=Object(E.e)().camera;return Object(r.useEffect)((function(){return e.current.connect(),function(){e.current.disconnect()}}),[]),Object(E.c)((function(n){var r=n.gl,o=n.scene;e.current.update(),r.render(o,t)})),o.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},N=n(1),B=n(23),G=function(){var e=Object(r.useMemo)((function(){var e=new N.Mesh(new N.CylinderGeometry(6,6,20,60,4)),t=new N.Mesh(new N.CylinderGeometry(5,5,20,60,4)),n=new B.a(t),r=new B.a(e).subtract(n).toMesh();r.material=new N.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:N.FlatShading});var o=(new N.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return r.material.map=o,r.position.y=9.48,r}));return o.a.createElement("primitive",{object:e})},D=function(){return o.a.createElement("mesh",{position:[.5,-.35,0]},o.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},H=n(40);function T(e){var t=e.to,n=void 0===t?"/triforce":t,a=Object(r.useRef)(0),i=Object(E.d)(H.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return i.scene.scale.set(.007,.007,.007),Object(E.c)((function(){i.scene.rotation.y+=.02,0===a.current?a.current=200:(a.current>100?i.scene.position.y=i.scene.position.y-200/3e5:i.scene.position.y=i.scene.position.y+200/3e5,a.current=a.current-1)})),o.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},o.a.createElement("primitive",{object:i.scene,position:[0,0,.5]}))}var q,_=function(){return o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(T,null))},F=function(e){var t=e.to,n=void 0===t?"":t,r=(e.color,e.position),a=void 0===r?[0,0,0]:r,i=e.dimension,c=void 0===i?[0,0,0]:i,l=O()(e,["to","color","position","dimension"]);return o.a.createElement("mesh",P()({position:a},l,{onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}}),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:c}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},J=function(){return o.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},o.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:N.DoubleSide}))},U=function(){var e=Object(r.useState)(!1),t=f()(e,2),n=t[0],a=t[1],i=Object(r.useState)(!0),c=f()(i,2),l=c[0],s=c[1],m=Object(r.useState)(),u=f()(m,2),d=u[0],h=u[1];function g(){return(g=b()(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n&&console.error("Device orientation permissions can not be set on localhost (not secure). Sorry!"),"function"==typeof R.requestPermission){e.next=8;break}if(!navigator.userAgent.toLowerCase().includes("android")){e.next=8;break}return console.info("Android device detected. Permission granted by default."),h("granted"),e.abrupt("return");case 8:return e.next=10,DeviceOrientationEvent.requestPermission();case 10:t=e.sent,console.info({permission:t}),h(t),localStorage.setItem("3d-dome-orientationPermission",t),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("An error occurred while setting device orientation permission. Permission denied."),console.error({error:e.t0}),h("denied"),localStorage.setItem("3d-dome-orientationPermission","denied");case 22:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e;(e=localStorage.getItem("3d-dome-orientationPermission"))&&h(e),s(!1)}),[]),Object(r.useEffect)((function(){a(function(){if("localhost"===location.hostname)return console.info("This is localhost."),!0;return console.info("This is not localhost."),!1}())}),[]),l?o.a.createElement(I,null,o.a.createElement(k,null),"Loading..."):d?o.a.createElement("span",null,o.a.createElement(k,null),o.a.createElement(E.a,{style:{background:"rgb(140, 140, 255)"}},o.a.createElement(j,{position:[0,0,0]}),"denied"!==d?null:n?o.a.createElement(A,null):o.a.createElement(S,null),"granted"===d&&o.a.createElement(R,null),o.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},o.a.createElement("ambientLight",{intensity:.85}),o.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),o.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),o.a.createElement(D,null),o.a.createElement(_,null),o.a.createElement(F,{to:"/inside1",position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),o.a.createElement(F,{to:"/inside2",position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),o.a.createElement(F,{to:"/inside3",position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),o.a.createElement(F,{to:"/inside4",position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),o.a.createElement(J,null),o.a.createElement(G,null)))):o.a.createElement(I,null,o.a.createElement(k,null),o.a.createElement("button",{onClick:function(){return g.apply(this,arguments)}},"Enable access device orientation"))},V=v.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),Z=v.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),W=function(){return o.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","ios-src":"https://gloria-3d-assets.s3-us-west-2.amazonaws.com/triforce.usdz","ar-modes":"webxr scene-viewer quick-look",ar:!0,"auto-rotate":!0,"camera-controls":!0})},Y=v.b.div.withConfig({displayName:"TriforceModal__CenteredViewer",componentId:"k0zb01-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),$=v.b.div.withConfig({displayName:"ToolOverlay",componentId:"sc-1dx71zy-0"})(["position:absolute;bottom:1rem;left:1rem;color:white;z-index:9999;"]),K=v.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-1ju6635-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),Q=function(e){var t=e.color,n=void 0===t?"rgb(200, 200, 200)":t,r=e.x,a=void 0===r?0:r,i=e.y,c=void 0===i?0:i,l=e.z,s=void 0===l?0:l,m=e.length,u=void 0===m?0:m,d=e.width,p=void 0===d?0:d,h=e.depth,b=void 0===h?0:h,g=e.opacity,f=void 0===g?1:g,E=O()(e,["color","x","y","z","length","width","depth","opacity"]);return o.a.createElement("mesh",P()({position:[0+a,0+c,0+s]},E),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[b,p,u]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:n,roughness:.5,opacity:f,transparent:0!==f}))},X=function(e){var t=e.to,n=void 0===t?"/":t,r=e.x,a=void 0===r?0:r,i=e.y,c=void 0===i?0:i,l=e.z,s=void 0===l?0:l,m=e.color,u=void 0===m?"rgb(150, 150, 150)":m,d=O()(e,["to","x","y","z","color"]);return o.a.createElement("mesh",P()({onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)},position:[0+a,0+c,0+s]},d),o.a.createElement("coneBufferGeometry",{attach:"geometry",args:[2,-5,2]}),o.a.createElement("shaderMaterial",{attach:"material",color:u,roughness:.3,uniforms:{texture:{value:"somevalue"}}}))},ee=Q,te=Q,ne=function(e){var t=e.color,n=e.to;return o.a.createElement(K,{backgroundColor:"rgb(140, 140, 255)",zIndex:600},o.a.createElement(re,{to:"/"},"Back"),o.a.createElement(E.a,{camera:{position:new N.Vector3(-2,0,0)}},o.a.createElement("ambientLight",{intensity:.5}),o.a.createElement("hemisphereLight",{color:"rgb(100, 100, 100)",intensity:.5,position:[10,5,0]}),o.a.createElement(ee,{color:t,x:-500,y:0,z:0,length:500,width:250}),o.a.createElement(ee,{color:t,x:500,y:0,z:0,length:500,width:250}),o.a.createElement(ee,{color:t,x:0,y:125,z:0,length:500,depth:1e3}),o.a.createElement(ee,{color:t,x:15,y:-125,z:0,length:500,depth:1e3}),o.a.createElement(ee,{color:t,x:0,y:0,z:250,depth:1e3,width:250}),o.a.createElement(ee,{color:t,x:0,y:0,z:-250,depth:1e3,width:250}),o.a.createElement(X,{to:"".concat(n,"/pin1"),x:23,y:-12,z:-18}),o.a.createElement(X,{to:"".concat(n,"/pin2"),x:110,y:-27,z:15}),o.a.createElement(X,{to:"".concat(n,"/pin3"),x:70,y:-27,z:50}),o.a.createElement(te,{color:"rgb(50, 50, 50)",x:30,y:-12,z:-10,depth:5,width:5,length:5}),o.a.createElement(te,{color:"rgb(50, 50, 50)",x:35,y:-12,z:0,depth:5,width:5,length:5}),o.a.createElement(te,{color:"rgb(50, 50, 50)",x:30,y:-12,z:10,depth:5,width:5,length:5}),o.a.createElement(A,{enableZoom:!1,minAzimuthAngle:-Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2,maxPolarAngle:-Math.PI/2})))},re=Object(v.b)(c.b).withConfig({displayName:"Inside__BackLink",componentId:"brhz5m-0"})(["padding:2rem;position:absolute;z-index:610;"]),oe=function(e){var t=e.text,n=e.to;return o.a.createElement(V,{zIndex:800},o.a.createElement(Z,{backgroundColor:"rgb(245, 0, 0, 0.75)"},o.a.createElement(c.b,{to:n},"Back"),o.a.createElement(ae,null,t)))},ae=v.b.div.withConfig({displayName:"PinModal__BigNumber",componentId:"sc-1giq03i-0"})(["font-size:120px;display:flex;justify-content:center;align-items:center;height:100%;"]),ie=document.getElementById("root");q=document.createElement("div"),document.body.appendChild(q),u.a.init({container:q,tool:["console","elements"]}),console.info(s.name,s.version),i.a.render(o.a.createElement(c.a,null,o.a.createElement($,null,s.version," ",o.a.createElement("button",{onClick:function(){localStorage.removeItem("3d-dome-orientationPermission"),window.location.reload()}},"Reset permissions")),o.a.createElement(l.a,{component:function(e){var t=e.history;return window.appHistory=t,"/ar"===t.location.pathname?null:o.a.createElement(U,null)}}),o.a.createElement(l.a,{path:"/triforce",component:function(){return o.a.createElement(V,null,o.a.createElement(Z,{backgroundColor:"rgb(0, 168, 224, 0.75)"},o.a.createElement(c.b,{to:"/"},"Back"),o.a.createElement(Y,null,o.a.createElement(W,null))))}}),o.a.createElement(l.a,{path:"/ar",component:function(){return o.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","auto-rotate":!0,"camera-controls":!0,ar:!0,"ar-modes":"webxr scene-viewer quick-look","ar-scale":"auto","ios-src":"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz"})}}),o.a.createElement(l.a,{path:"/inside1",component:function(){return o.a.createElement(ne,{color:"orange",to:"/inside1"})}}),o.a.createElement(l.a,{path:"/inside2",component:function(){return o.a.createElement(ne,{color:"blue",to:"/inside2"})}}),o.a.createElement(l.a,{path:"/inside3",component:function(){return o.a.createElement(ne,{color:"green",to:"/inside3"})}}),o.a.createElement(l.a,{path:"/inside4",component:function(){return o.a.createElement(ne,{color:"yellow",to:"/inside4"})}}),o.a.createElement(l.a,{path:"/inside1/pin1",render:function(){return o.a.createElement(oe,{to:"/inside1",text:"1"})}}),o.a.createElement(l.a,{path:"/inside1/pin2",render:function(){return o.a.createElement(oe,{to:"/inside1",text:"2"})}}),o.a.createElement(l.a,{path:"/inside1/pin3",render:function(){return o.a.createElement(oe,{to:"/inside1",text:"3"})}}),o.a.createElement(l.a,{path:"/inside2/pin1",render:function(){return o.a.createElement(oe,{to:"/inside2",text:"A"})}}),o.a.createElement(l.a,{path:"/inside2/pin2",render:function(){return o.a.createElement(oe,{to:"/inside2",text:"B"})}}),o.a.createElement(l.a,{path:"/inside2/pin3",render:function(){return o.a.createElement(oe,{to:"/inside2",text:"C"})}}),o.a.createElement(l.a,{path:"/inside3/pin1",render:function(){return o.a.createElement(oe,{to:"/inside3",text:"I"})}}),o.a.createElement(l.a,{path:"/inside3/pin2",render:function(){return o.a.createElement(oe,{to:"/inside3",text:"II"})}}),o.a.createElement(l.a,{path:"/inside3/pin3",render:function(){return o.a.createElement(oe,{to:"/inside3",text:"II"})}}),o.a.createElement(l.a,{path:"/inside4/pin1",render:function(){return o.a.createElement(oe,{to:"/inside4",text:"a"})}}),o.a.createElement(l.a,{path:"/inside4/pin2",render:function(){return o.a.createElement(oe,{to:"/inside4",text:"b"})}}),o.a.createElement(l.a,{path:"/inside4/pin3",render:function(){return o.a.createElement(oe,{to:"/inside4",text:"c"})}})),ie)}},[[61,1,2]]]);