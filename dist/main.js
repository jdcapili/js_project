!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.size=3,this.colorTicker=0,this.geometry=new THREE.SphereGeometry(this.size,20,20),this.material=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors}),this.sphereShape=new THREE.Mesh(this.geometry,this.material),this.sphereShape.dynamic=!0;for(var t=this.geometry.faces.length,n=0;n<t;n++){var i=this.geometry.faces[n],s=new THREE.Color(16777215),r=.36*Math.random()+.64,a=.36*Math.random()+.64,o=.36*Math.random()+.64;s.setRGB(r,a,o),i.color=s}this.geometry.elementsNeedUpdate=!0,this.sphereShape.position.y=2.5}var t,n,s;return t=e,(n=[{key:"colorSwitch",value:function(e){if(255===e)for(var t=this.geometry.faces.length,n=0;n<t;n++){var i=this.geometry.faces[n],s=new THREE.Color(16777215),r=.36*Math.random()+.64,a=.36*Math.random()+.64,o=.36*Math.random()+.64;s.setRGB(r,a,o),i.color=s}this.geometry.elementsNeedUpdate=!0}}])&&i(t.prototype,n),s&&i(t,s),e}();var r=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);for(var t=new THREE.Geometry,n=new THREE.LineBasicMaterial({color:"white"}),i=-15;i<=15;i+=1)t.vertices.push(new THREE.Vector3(-15,-.04,i)),t.vertices.push(new THREE.Vector3(15,-.04,i)),t.vertices.push(new THREE.Vector3(i,-.04,-15)),t.vertices.push(new THREE.Vector3(i,-.04,15));this.line=new THREE.Line(t,n,THREE.LineSegments)};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t,n,i,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.geometry=new THREE.SphereGeometry(.5,10,10),this.material=new THREE.MeshBasicMaterial({color:i}),this.sphereShape=new THREE.Mesh(this.geometry,this.material),this.sphereShape.name=s,this.sphereShape.position.x=n,this.sphereShape.position.z=4,this.moveForward=this.moveForward.bind(this)}var t,n,i;return t=e,(n=[{key:"moveForward",value:function(e){this.sphereShape.position.z>8?this.sphereShape.position.z=4:this.sphereShape.position.z+=e}}])&&a(t.prototype,n),i&&a(t,i),e}();var h=function(){var e=this;e.key1=[!1,0],e.key2=[!1,0],e.key3=!1,e.key4=!1,document.addEventListener("keydown",(function(t){"d"===t.key&&(e.key1[0]=!0,e.key1[1]+=1),"f"===t.key&&(e.key2[0]=!0,e.key2[1]+=1),"j"===t.key&&(e.key3[0]=!0,e.key3[1]+=1),"k"===t.key&&(e.key4[0]=!0,e.key4[1]+=1),32===t.which&&t.preventDefault()})),document.addEventListener("keyup",(function(t){"d"===t.key&&(e.key1=[!1,0]),"f"===t.key&&(e.key2=[!1,0]),"j"===t.key&&(e.key3=[!1,0]),"k"===t.key&&(e.key4=[!1,0])}))};var c=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=new THREE.FontLoader,i=this;n.load("assets/Dream MMA_Regular.typeface.json",(function(e){var n=new THREE.TextGeometry("vibe",{font:e,size:1,height:1,curveSegments:3}),s=[new THREE.MeshPhongMaterial({color:2527479,flatShading:!0}),new THREE.MeshPhongMaterial({color:413074})];i.titleRender=new THREE.Mesh(n,s),i.titleRender.name="title",i.titleRender.position.z=4,i.titleRender.position.x=-2.25,i.titleRender.position.y=5,t.add(i.titleRender);var r=new THREE.DirectionalLight(16777215);r.position.set(2,3,2),window.light=r,t.add(r)}));console.log(this.titleRender)};function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.score=n,this.playerInput=new h,this.canvas=t,this.scene=new THREE.Scene,this.controls=new c(this.scene),window.controls=this.controls,window.scene=this.scene,this.camera=new THREE.PerspectiveCamera(90,this.canvas.width/this.canvas.height,.1,1e3),this.container=document.getElementsByClassName("game-container")[0],this.renderer=new THREE.WebGLRenderer({canvas:this.canvas}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.line=new r,this.scene.add(this.line.line),this.keyspeed=.05,window.renderer=this.renderer,this.init(),this.animate=this.animate.bind(this),this.id,window.addEventListener("resize",this.onWindowResize,!1)}var t,n,i;return t=e,(n=[{key:"onWindowResize",value:function(){this.container=document.getElementsByClassName("game-container")[0],this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)}},{key:"animate",value:function(){var e=this,t=this.music.fetchNewFrequencies(),n=t.maxFreq,i=t.set2Ave,s=t.set3Ave,r=t.set4Ave;this.sphere.colorSwitch(n);for(var a=function(t){e.scene.children.some((function(a){a.name===t.toString()?a.position.z>=8?(a.position.z=4,e.scene.remove(a)):(1===t&&e.key1.moveForward(e.keyspeed),2===t&&e.key2.moveForward(e.keyspeed),3===t&&e.key3.moveForward(e.keyspeed),4===t&&e.key4.moveForward(e.keyspeed)):(255===n&&e.scene.add(e.key1.sphereShape),i>180&&e.scene.add(e.key2.sphereShape),s>150&&s<180&&e.scene.add(e.key3.sphereShape),r>120&&r<180&&e.scene.add(e.key4.sphereShape))}))},o=1;o<5;o++)a(o);this.speedUp(),this.keyCheck(),this.renderer.render(this.scene,this.camera),this.sphere.sphereShape.rotation.x+=.01,this.sphere.sphereShape.rotation.y+=.01,this.id=window.requestAnimationFrame(this.animate)}},{key:"speedUp",value:function(){var e=parseFloat(this.music.mediaElement.currentTime.toFixed(2));this.musicMarkers[0]<=e&&(this.keyspeed+=.01,this.musicMarkers.shift())}},{key:"keyCheck",value:function(){!0===this.playerInput.key1[0]&&this.key1.sphereShape.position.z>=7.4&&this.key1.sphereShape.position.z<=7.8&&1===this.playerInput.key1[1]&&(this.score+=20,m.scoreUpdate(this.score),this.key1.sphereShape.position.z=4,this.scene.remove(this.key1.sphereShape)),!0===this.playerInput.key2[0]&&this.key2.sphereShape.position.z>=7.4&&this.key2.sphereShape.position.z<=7.8&&1===this.playerInput.key2[1]&&(this.score+=20,m.scoreUpdate(this.score),this.key2.sphereShape.position.z=4,this.scene.remove(this.key2.sphereShape)),!0===this.playerInput.key3[0]&&this.key3.sphereShape.position.z>=7.4&&this.key3.sphereShape.position.z<=7.8&&1===this.playerInput.key3[1]&&(this.score+=20,m.scoreUpdate(this.score),this.key3.sphereShape.position.z=4,this.scene.remove(this.key3.sphereShape)),!0===this.playerInput.key4[0]&&this.key4.sphereShape.position.z>=7.4&&this.key4.sphereShape.position.z<=7.8&&1===this.playerInput.key4[1]&&(this.score+=20,m.scoreUpdate(this.score),this.key4.sphereShape.position.z=4,this.scene.remove(this.key4.sphereShape))}},{key:"init",value:function(){this.sphere=new s,this.scene.add(this.sphere.sphereShape),this.key1=new o(this.scene,-1.5,"red","1"),this.key2=new o(this.scene,-.5,"green","2"),this.key3=new o(this.scene,.5,"blue","3"),this.key4=new o(this.scene,1.5,"yellow","4"),this.camera.position.z=10,this.camera.position.y=2}},{key:"stopAnimation",value:function(){window.cancelAnimationFrame(this.id)}},{key:"renderFrame",value:function(e){this.music=e;var t=this.music.mediaElement.duration,n=parseFloat((t/4).toFixed(2));this.musicMarkers=[n,2*n,3*n],this.animate()}}])&&l(t.prototype,n),i&&l(t,i),e}();function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listener=new THREE.AudioListener,this.audio=new THREE.Audio(this.listener),window.audio=this.audio,this.mediaElement=new Audio("assets/".concat(t)),this.mediaElement.autoplay=!1,this.audio.setMediaElementSource(this.mediaElement),this.analyser=new THREE.AudioAnalyser(this.audio,1024),window.analyser=this.analyser}var t,n,i;return t=e,(n=[{key:"fetchNewFrequencies",value:function(){this.analyser.getFrequencyData(),this.analyser.needsUpdate=!0;var e=this.analyser.data.slice(0,16),t=this.analyser.data.slice(16,32),n=this.analyser.data.slice(32,48),i=this.analyser.data.slice(48,62),s=t.reduce((function(e,t){return e+t}),0)/t.length,r=n.reduce((function(e,t){return e+t}),0)/n.length,a=i.reduce((function(e,t){return e+t}),0)/i.length;return{maxFreq:e[2],set2Ave:s,set3Ave:r,set4Ave:a}}}])&&p(t.prototype,n),i&&p(t,i),e}();function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.getElementById("canvas"),this.stopButton=document.getElementById("stop-button"),this.audio=document.getElementById("audio"),this.score=0,document.getElementById("score-value").innerText=this.score,this.visualInit(),this.createSongList(),this.stopButton.onclick=function(){t.music.mediaElement.pause(),t.music.mediaElement.currentTime=0,t.visualizer.stopAnimation()}}var t,n,i;return t=e,i=[{key:"scoreUpdate",value:function(e){document.getElementById("score-value").innerText=e}}],(n=[{key:"createSongList",value:function(){var e=this,t=document.getElementById("song-list");["Dont Wanna Know.mp3","Feel So Close.mp3","If I Lose Myself.mp3","Sunday Morning.mp3"].forEach((function(n){var i=document.createElement("li");i.append(n),i.onclick=function(){return e.play(n)},t.append(i)}))}},{key:"visualInit",value:function(){this.visualizer=new u(this.canvas,this.score)}},{key:"play",value:function(e){this.music=new d(e),document.getElementsByClassName("song-selection")[0].classList.add("hide"),this.music.mediaElement.play(),window.visualizer=this.visualizer,this.visualizer.renderFrame(this.music)}}])&&y(t.prototype,n),i&&y(t,i),e}();n(0);window.addEventListener("DOMContentLoaded",(function(){new m}))}]);
//# sourceMappingURL=main.js.map