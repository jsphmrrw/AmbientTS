!function(){var t,p,c=function(){function t(t,e){this.name=t,this.file=e}return t}(),v=function(){function t(){this.textures={},this.sounds={},this._textures=new Array,this._sounds=new Array,this._steps=0,this._required=0}return t.prototype.AddTexture=function(t,e){this._textures.push(new c(t,e)),this._required++},t.prototype.AddSound=function(t,e){this._sounds.push(new c(t,e)),this._required++},t.prototype.Load=function(n,o){var s=this;this._steps=0,this._onUpdate=n,this._onComplete=o;for(var t=0;t<this._textures.length;t++){var e=new Image;e.onload=function(){return s.Step()},e.src=this._textures[t].file,this.textures[this._textures[t].name]=e}for(var t=0;t<this._sounds.length;t++){var i=new Audio(this._sounds[t].file);i.onloadeddata=function(){return s.Step()},i.src=this._sounds[t].file,this.sounds[this._sounds[t].name]=i}this._textures=new Array,this._sounds=new Array},t.prototype.Step=function(){this._steps++,this.percent=this._steps/this._required,null!=this._onUpdate&&this._onUpdate(this),this._steps==this._required&&(this.percent=1,null!=this._onComplete&&this._onComplete(this),this._required=0)},t}(),e=function(){function t(t,e){this.x=0,this.y=0,this.x=t,this.y=e}return t.prototype.Add=function(t){this.x+=t.x,this.y+=t.y},t.prototype.Subtract=function(t){this.x-=t.x,this.y-=t.y},t.prototype.Multiply=function(t){this.x*=t.x,this.y*=t.y},t.prototype.Length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.Normalize=function(){var t=this.Length();this.x/=t,this.y/=t},t.Add=function(e,i){return new t(e.x+i.x,e.y+i.y)},t.Subtract=function(e,i){return new t(e.x-i.x,e.y-i.y)},t.Multiply=function(e,i){return new t(e.x*i.x,e.y*i.y)},t.Length=function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},t.Zero=function(){return new t(0,0)},t.One=function(){return new t(1,1)},t}(),g=function(){function i(s){var i=this;this.position=new e(0,0),this.leftPressed=!1,this.leftReleased=!1,this.leftDown=!1,this.rightPressed=!1,this.rightReleased=!1,this.rightDown=!1,this.treatTouchAsMouse=!0,this.canvas=s,this.canvas.onmousedown=function(t){"which"in t&&3==t.which||"button"in t&&2==t.button?(i.rightPressed=!0,i.rightDown=!0):(i.leftPressed=!0,i.leftDown=!0)},this.canvas.onmouseup=function(t){"which"in t&&3==t.which||"button"in t&&2==t.button?(i.rightReleased=!0,i.rightDown=!1):(i.leftReleased=!0,i.leftDown=!1)},this.canvas.onmousemove=function(s){var n=t.GetViewportScale(),o=t.GetViewportOffset();i.position=new e((s.offsetX-o.x)/n+t.camera.x,(s.offsetY-o.y)/n+t.camera.y)},this.canvas.addEventListener("touchstart",function(){i.treatTouchAsMouse&&(i.leftPressed=!0,i.leftDown=!0)}),this.canvas.addEventListener("touchend",function(){i.treatTouchAsMouse&&(i.leftReleased=!0,i.leftDown=!1)}),this.canvas.addEventListener("touchmove",function(s){if(i.treatTouchAsMouse){var n=t.GetViewportScale(),o=t.GetViewportOffset();i.position=new e((s.changedTouches[0].pageX-o.x)/n+t.camera.x,(s.changedTouches[0].pageX-o.y)/n+t.camera.y)}})}return Object.defineProperty(i.prototype,"x",{get:function(){return this.position.x},set:function(t){this.position.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"y",{get:function(){return this.position.y},set:function(t){this.position.y=t},enumerable:!0,configurable:!0}),i.prototype.Clear=function(){this.leftPressed=!1,this.leftReleased=!1,this.rightPressed=!1,this.rightReleased=!1},i}(),x=function(){function t(){var t=this;this._pressed=new Array(256),this._released=new Array(256),this._down=new Array(256),window.onkeyup=function(e){t._released[e.keyCode]=!0,t._down[e.keyCode]=!1},window.onkeydown=function(e){t._down[e.keyCode]||(t._pressed[e.keyCode]=!0,t._down[e.keyCode]=!0)}}return t.prototype.Pressed=function(t){return this._pressed[t]},t.prototype.Released=function(t){return this._released[t]},t.prototype.Down=function(t){return this._down[t]},t.prototype.Clear=function(){this._pressed=new Array(256),this._released=new Array(256)},t}(),n=function(){function t(){}return t.BACKSPACE=8,t.TAB=9,t.ENTER=13,t.COMMAND=15,t.SHIFT=16,t.CONTROL=17,t.CAPS_LOCK=20,t.ESCAPE=27,t.SPACE=32,t.PAGE_UP=33,t.PAGE_DOWN=34,t.END=35,t.HOME=36,t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.INSERT=45,t.DELETE=46,t.A=65,t.B=66,t.C=67,t.D=68,t.E=69,t.F=70,t.G=71,t.H=72,t.I=73,t.J=74,t.K=75,t.L=76,t.M=77,t.N=78,t.O=79,t.P=80,t.Q=81,t.R=82,t.S=83,t.T=84,t.U=85,t.V=86,t.W=87,t.X=88,t.Y=89,t.Z=90,t.F1=112,t.F2=113,t.F3=114,t.F4=115,t.F5=116,t.F6=117,t.F7=118,t.F8=119,t.F9=120,t.F10=121,t.F11=122,t.F12=123,t.F13=124,t.F14=125,t.F15=126,t.DIGIT_0=48,t.DIGIT_1=49,t.DIGIT_2=50,t.DIGIT_3=51,t.DIGIT_4=52,t.DIGIT_5=53,t.DIGIT_6=54,t.DIGIT_7=55,t.DIGIT_8=56,t.DIGIT_9=57,t.LEFT_SQUARE_BRACKET=219,t.RIGHT_SQUARE_BRACKET=221,t}(),f=function(){function i(n,o,h,r,s){this.camera=new e(0,0),this.clear="#0e2129",this.keepPixelScale=!1,this.snapCameraToPixels=!1,this.smoothing=!1,this.elapsedTime=0,this._scale=1,this._scene=null,this._goto=null,this._fullscreen=!1,i.instance=this,t=this,this.name=n,this.width=o,this.height=h,this.fps=s,this.deltaTime=s/1e3,this._scale=r}return i.prototype.Run=function(){var t=this;window.onload=function(){document.head.title=t.name+" :: Ambient TS",document.body.style.backgroundColor="#222",t.container=document.createElement("div"),t.container.style.width=t.width*t.scale+"px",t.container.style.height=t.height*t.scale+"px",t.container.style.margin="auto",t.container.style.marginTop="80px",t.container.style.boxShadow="0px 0px 128px #444",t.container.style.border="1px solid #222",document.body.appendChild(t.container),t.canvasScaled=document.createElement("canvas"),t.canvasScaled.width=t.width*t.scale,t.canvasScaled.height=t.height*t.scale,t.container.appendChild(t.canvasScaled),t.canvas=document.createElement("canvas"),t.canvas.width=t.width+2,t.canvas.height=t.height+2,t.canvas.style.display="none",t.container.appendChild(t.canvas),t.contextScaled=t.canvasScaled.getContext("2d"),t.context=t.canvas.getContext("2d"),t.keyboard=new x(t.canvas),t.mouse=new g(t.canvasScaled),t.canvasScaled.oncontextmenu=function(t){t.preventDefault()},t._date=(new Date).getTime(),t._startDate=(new Date).getTime(),setInterval(function(){return t.Loop()},1e3/t.fps),window.onresize=function(){t._fullscreen&&(t.canvasScaled.width=document.documentElement.clientWidth,t.canvasScaled.height=document.documentElement.clientHeight)}}},Object.defineProperty(i.prototype,"scene",{get:function(){return null!=this._goto?this._goto:this._scene},set:function(t){this._goto=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scale",{get:function(){return this._scale},set:function(t){this._scale=t,this.container.style.width=this.width*this._scale+"px",this.container.style.height=this.height*this._scale+"px",this._fullscreen||(this.canvasScaled.width=this.width*this._scale,this.canvasScaled.height=this.height*this._scale)},enumerable:!0,configurable:!0}),i.prototype.ToggleFullscreen=function(){this._fullscreen?(this.canvasScaled.style.position="relative",this.canvasScaled.width=this.width*this.scale,this.canvasScaled.height=this.height*this.scale):(this.canvasScaled.style.position="absolute",this.canvasScaled.style.left="0px",this.canvasScaled.style.top="0px",this.canvasScaled.width=document.documentElement.clientWidth,this.canvasScaled.height=document.documentElement.clientHeight),this._fullscreen=!this._fullscreen},i.prototype.GetViewportScale=function(){var t=Math.min(this.canvasScaled.width/this.width,this.canvasScaled.height/this.height);return this.keepPixelScale&&(t=Math.floor(t)),t},i.prototype.GetViewportOffset=function(){var t=this.GetViewportScale();return new e((this.canvasScaled.width-this.width*t)/2,(this.canvasScaled.height-this.height*t)/2)},i.prototype.OnInterval=function(t){return Math.floor((this.elapsedTime-this.deltaTime)/t)<Math.floor(this.elapsedTime/t)},i.prototype.Loop=function(){var t=(new Date).getTime();this.deltaTime=(t-this._date)/1e3,this._date=t,this.elapsedTime=(t-this._startDate)/1e3,this.Update(),this.Render(),null!=this._goto&&(null!=this._scene&&this._scene.End(),this._scene=this._goto,this._goto=null,this._scene.Start()),this.keyboard.Clear(),this.mouse.Clear()},i.prototype.Update=function(){null!=this._scene&&this._scene.Update()},i.prototype.DisableSmoothing=function(t){t.msImageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t.mozImageSmoothingEnabled=!1},i.prototype.Render=function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.clear,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),t.context.save(),t.context.translate(-Math.floor(this.camera.x),-Math.floor(this.camera.y)),this.smoothing||t.DisableSmoothing(this.context),null!=this._scene&&this._scene.Render(),t.context.restore(),this.smoothing||this.DisableSmoothing(this.contextScaled),this.contextScaled.clearRect(0,0,this.canvasScaled.width,this.canvasScaled.height);var s=this.GetViewportScale(),i=this.GetViewportOffset(),n=this.snapCameraToPixels?new e(0,0):new e(Math.floor(this.camera.x%1*s),Math.floor(this.camera.y%1*s));this.contextScaled.drawImage(this.canvas,i.x-n.x,i.y-n.y,this.canvas.width*s,this.canvas.height*s),this.contextScaled.fillStyle="#000000",0!=i.x&&(this.contextScaled.fillRect(0,0,i.x,this.canvasScaled.height),this.contextScaled.fillRect(this.canvasScaled.width-i.x,0,i.x,this.canvasScaled.height)),0!=i.y&&(this.contextScaled.fillRect(0,0,this.canvasScaled.width,i.y),this.contextScaled.fillRect(0,this.canvasScaled.height-i.y,this.canvasScaled.width,i.y))},i}(),a=function(){function t(){this.active=!0,this.visible=!0,this.position=new e(0,0)}return Object.defineProperty(t.prototype,"x",{get:function(){return this.position.x},set:function(t){this.position.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.position.y},set:function(t){this.position.y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scenePosition",{get:function(){return null==this.entity?this.position:e.Add(this.position,this.entity.position)},set:function(t){this.position=null==this.entity?t:e.Subtract(t,this.entity.position)},enumerable:!0,configurable:!0}),t.prototype.Start=function(){},t.prototype.End=function(){},t.prototype.Update=function(){},t.prototype.Render=function(){},t}(),r=function(){function t(){this.position=new e(0,0),this.active=!0,this.visible=!0,this.depth=0,this.components=new Array,this._tags=new Array,this._totag=new Array,this.Tag("all")}return Object.defineProperty(t.prototype,"x",{get:function(){return this.position.x},set:function(t){this.position.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.position.y},set:function(t){this.position.y=t},enumerable:!0,configurable:!0}),t.prototype.Start=function(){for(var t=0;t<this._totag.length;t++)this._tags.push(this._totag[t]),this.scene.AddEntityTag(this,this._totag[t]);this._totag=new Array;for(var t=0;t<this.components.length;t++)this.components[t].entity=this,this.components[t].Start()},t.prototype.End=function(){for(var t=0;t<this._tags.length;t++)this._totag.push(this._tags[t]),this.scene.RemoveEntityTag(this,this._tags[t]);this._tags=new Array},t.prototype.Add=function(t){this.components.push(t),null!=this.scene&&(t.entity=this,t.Start())},t.prototype.Remove=function(e){for(var t=0;t<this.components.length;t++)if(this.components[t]==e){this.components.splice(t,1);break}e.End(),e.entity=null},t.prototype.Tag=function(t){null!=this.scene?(this._tags.push(t),this.scene.AddEntityTag(this,t)):this._totag.push(t)},t.prototype.Untag=function(e){if(null!=this.scene){for(var t=0;t<this._tags.length;t++)if(this._tags[t]==e){this._tags.splice(t,1),this.scene.RemoveEntityTag(this,e);break}}else for(var t=0;t<this._totag.length;t++)if(this._totag[t]==e){this._totag.splice(t,1);break}},t.prototype.Update=function(){for(var t=0;t<this.components.length;t++)this.components[t].active&&this.components[t].Update()},t.prototype.Render=function(){for(var t=0;t<this.components.length;t++)this.components[t].visible&&this.components[t].Render()},t}(),i=this.__extends||function(e,t){function s(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);s.prototype=t.prototype,e.prototype=new s};!function(t){t[t.Hitbox=0]="Hitbox",t[t.Grid=1]="Grid"}(p||(p={}));var l=function(e){function t(t){e.call(this),this._tag="",this._totag="",this.type=t,this.visible=!1}return i(t,e),t.prototype.GetTag=function(){return this._tag},t.prototype.Tag=function(t){null==this.entity||null==this.entity.scene?this._totag=t:(this.entity.scene.SetColliderTag(this,t,this._tag),this._tag=t)},t.prototype.UnTag=function(){null==this.entity||null==this.entity.scene?this._totag="":(this.entity.scene.SetColliderTag(this,this._tag,""),this._tag="")},t.prototype.Start=function(){e.prototype.Start.call(this),this._totag!=this._tag&&(this.entity.scene.SetColliderTag(this,this._tag,this._totag),this._tag=this._totag)},t.prototype.End=function(){this._totag=this._tag,this._tag="",this.entity.scene.SetColliderTag(this,this._totag,"")},t.prototype.Collide=function(o,t,e){"undefined"==typeof t&&(t=0),"undefined"==typeof e&&(e=0);var n=null;if(this.position.x+=t,this.position.y+=e,null!=this.entity&&null!=this.entity.scene)for(var s=this.entity.scene.colliders[o],i=0;i<s.length;i++)if(this.Overlaps(s[i])){n=s[i];break}return this.position.x-=t,this.position.y-=e,n},t.prototype.Check=function(t,e,i){return null!=this.Collide(t,e,i)},t.prototype.Overlaps=function(){return!1},t}(a),d=function(){function t(){this.entities=new Array,this.adding=new Array,this.removing=new Array,this.colliders={},this.taggedEntities={},this._entityInstanceId=0}return t.prototype.Start=function(){},t.prototype.End=function(){},t.prototype.Add=function(t){return t.id=this._entityInstanceId++,this.adding.push(t),t},t.prototype.Remove=function(t){return this.removing.push(t),t},t.prototype.SetColliderTag=function(n,s,t){if(""!=s){for(var e=this.colliders[s],i=0;i<e.length;i++)if(e[i]==n){e.splice(i,1);break}this.colliders[s]=e}""!=t&&(null==this.colliders[t]&&(this.colliders[t]=new Array),this.colliders[t].push(n))},t.prototype.AddEntityTag=function(e,t){null==this.taggedEntities[t]&&(this.taggedEntities[t]=new Array),this.taggedEntities[t].push(e)},t.prototype.RemoveEntityTag=function(s,i){for(var t=this.taggedEntities[i],e=0;e<t.length;e++)if(t[e]==s){t.splice(e,1);break}this.taggedEntities[i]=t},t.prototype.GetEntitiesByTag=function(t){return null!=this.taggedEntities[t]?this.taggedEntities[t]:new Array},t.prototype.GetEntitiesByTags=function(n){for(var o={},h=new Array,t=0;t<n.length;t++){var r=n[t],e=this.taggedEntities[r];if(null!=e)for(var i=0;i<e.length;i++){var s=e[i];1!=o[s.id]&&(o[s.id]=!0,h.push(s))}}return h},t.prototype.Update=function(){for(var t=0;t<this.removing.length;t++){for(var e=0;e<this.entities.length;e++)if(this.entities[e]==this.removing[t]){this.entities.splice(e,1);break}this.removing[t].End(),this.removing[t].scene=null}this.removing=new Array;for(var t=0;t<this.adding.length;t++)this.entities.push(this.adding[t]),this.adding[t].scene=this,this.adding[t].Start();this.adding=new Array,this.SortEntitiesByDepth(this.entities);for(var t=0;t<this.entities.length;t++)this.entities[t].active&&this.entities[t].Update()},t.prototype.Render=function(){for(var t=0;t<this.entities.length;t++)this.entities[t].visible&&this.entities[t].Render()},t.prototype.SortEntitiesByDepth=function(i){var s,e,t,n;for(t=3;t>0;){for(s=0;s<i.length;s++){for(e=s,n=i[s];e>=t&&i[e-t].depth<n.depth;)i[e]=i[e-t],e-=t;i[e]=n}t=0!=Math.floor(t/2)?Math.floor(t/2):1==Math.floor(t)?0:1}},t}(),R=function(n){function e(){n.call(this),this.percent=0,s.AddTexture("grass","textures/grass.png"),s.AddTexture("player","textures/player.png"),s.Load(null,null)}return i(e,n),e.prototype.Begin=function(){t.scene=new d,t.scene.Add(new M),t.scene.Add(new b)},e.prototype.Update=function(){this.percent<s.percent&&(this.percent+=t.deltaTime),this.percent>=s.percent&&s.percent>=1&&this.Begin()},e.prototype.Render=function(){t.context.fillStyle="#ffffff",t.context.fillRect(0,t.height/2-4,t.width*this.percent,8);for(var e=0;10>e;e++)t.context.globalAlpha=(1-e/10)/16,t.context.fillRect(0,t.height/2-4-e,t.width*this.percent,8+2*e);t.context.globalAlpha=1},e}(d),y=function(n){function s(t){"undefined"==typeof t&&(t=null),n.call(this),this.collider=null,this.speed=e.Zero(),this.movementRemainder=e.Zero(),this.solidTag="solid",this.collider=t,null!=this.collider&&this.Add(this.collider)}return i(s,n),s.prototype.Accelerate=function(e,i){this.speed.x+=e*t.deltaTime,this.speed.y+=i*t.deltaTime},s.prototype.Friction=function(s,n){var e=this.Sign(this.speed.x);this.speed.x-=e*s*t.deltaTime,this.Sign(this.speed.x)!=e&&(this.speed.x=0);var i=this.Sign(this.speed.y);this.speed.y-=i*n*t.deltaTime,this.Sign(this.speed.y)!=i&&(this.speed.y=0)},s.prototype.Maxspeed=function(t,e){Math.abs(this.speed.x)>t&&(this.speed.x=this.Sign(this.speed.x)*t),Math.abs(this.speed.y)>e&&(this.speed.y=this.Sign(this.speed.y)*e)},s.prototype.Move=function(){this.MoveX(this.speed.x),this.MoveY(this.speed.y)},s.prototype.MoveX=function(e){this.MoveAbsoluteX(e*t.deltaTime)},s.prototype.MoveY=function(e){this.MoveAbsoluteY(e*t.deltaTime)},s.prototype.MoveAbsoluteX=function(t){t+=this.movementRemainder.x,this.movementRemainder.x=t%1;var e=t>0?Math.floor(t):Math.ceil(t);if(null==this.collider)this.position.x+=e;else for(var i=this.Sign(e);0!=e;){if(this.collider.Check(this.solidTag,i,0)){this.OnCollideX();break}this.position.x+=i,e-=i}},s.prototype.MoveAbsoluteY=function(t){t+=this.movementRemainder.y,this.movementRemainder.y=t%1;var e=t>0?Math.floor(t):Math.ceil(t);if(null==this.collider)this.position.y+=e;else for(var i=this.Sign(e);0!=e;){if(this.collider.Check(this.solidTag,0,i)){this.OnCollideY();break}this.position.y+=i,e-=i}},s.prototype.OnCollideX=function(){this.speed.x=0},s.prototype.OnCollideY=function(){this.speed.y=0},s.prototype.Sign=function(t){return t>0?1:0>t?-1:0},s}(r),o=function(){function t(){}return t.HitboxToHitbox=function(i,s){var t=i.scenePosition,e=s.scenePosition;return t.x+i.width>e.x&&t.y+i.height>e.y&&t.x<e.x+s.width&&t.y<e.y+s.height},t.HitboxToGrid=function(s,t){for(var e=s.scenePosition,i=t.scenePosition,h=Math.floor((e.x-i.x)/t.tileWidth),r=Math.floor((e.y-i.y)/t.tileHeight),a=Math.ceil((e.x+s.width-i.x)/t.tileWidth),c=Math.ceil((e.y+s.height-i.y)/t.tileHeight),n=h;a>n;n++)for(var o=r;c>o;o++)if(t.Get(n,o))return!0;return!1},t.GridToGrid=function(){return!1},t}(),m=function(s){function t(t,i,n,o){s.call(this,0),this.position=new e(t,i),this.width=n,this.height=o}return i(t,s),t.prototype.Overlaps=function(t){return 0==t.type?o.HitboxToHitbox(this,t):1==t.type?o.HitboxToGrid(this,t):!1},t}(l),h=function(){function t(t,e,i,s){this.x=t,this.y=e,this.width=i,this.height=s}return t}(),u=function(n){function s(i,t){"undefined"==typeof t&&(t=null),n.call(this),this.scale=e.One(),this.origin=e.Zero(),this.texture=i,this.bounds=null==t?new h(0,0,i.width,i.height):t}return i(s,n),s.prototype.Update=function(){},s.prototype.Render=function(){t.context.save(),t.context.translate(this.scenePosition.x,this.scenePosition.y),t.context.scale(this.scale.x,this.scale.y),t.context.translate(-this.origin.x,-this.origin.y),t.context.drawImage(this.texture,this.bounds.x,this.bounds.y,this.bounds.width,this.bounds.height,0,0,this.bounds.width,this.bounds.height),t.context.restore()},s}(a),w=function(){function t(t,e,i,s){this.index=0,this.name=t,this.frames=e,this.speed=i,this.loop=s}return t}(),_=function(s){function e(i,t,e){s.call(this,i,new h(0,0,t,e)),this.animations={},this.frame=0,this._current=null,this._stopped=!0,this.frameWidth=t,this.frameHeight=e}return i(e,s),e.prototype.Add=function(t,e,i){this.animations[t]=new w(t,e,i,!0)},e.prototype.Play=function(t,e){this._stopped=!1,this._current=this.animations[t],e&&(this._current.index=0)},e.prototype.Current=function(){return this._current.name},e.prototype.Stop=function(){this._stopped=!0},e.prototype.Playing=function(){return!this._stopped},e.prototype.Stopped=function(){return this._stopped},e.prototype.Update=function(){if(s.prototype.Update.call(this),!this._stopped){for(this._current.index+=this._current.speed*t.deltaTime;this._current.index>this._current.frames.length;)this._current.index-=this._current.frames.length;this.frame=this._current.frames[Math.floor(this._current.index)]}},e.prototype.Render=function(){var t=Math.floor(this.texture.width/this.frameWidth),e=Math.floor(this.frame%t),i=Math.floor(this.frame/t);this.bounds=new h(e*this.frameWidth,i*this.frameHeight,this.frameWidth,this.frameHeight),s.prototype.Render.call(this)},e}(u),S=function(n){function s(){n.call(this)}return i(s,n),s.prototype.Define=function(t,i){this.x=t,this.y=i,this.timer=1,this.size=2+Math.ceil(2*Math.random()),this.speed=new e(-8+16*Math.random(),-8+16*Math.random()),this.color=Math.random()<.5?"#dddddd":"#eeeeee"},s.prototype.Update=function(){this.timer-=t.deltaTime,this.timer<=0?(t.scene.Remove(this),s.cache.push(this)):(this.x+=this.speed.x*t.deltaTime,this.y+=this.speed.y*t.deltaTime)},s.prototype.Render=function(){var e=Math.ceil(this.size*this.timer);t.context.fillStyle=this.color,t.context.fillRect(Math.round(this.x-e/2),Math.round(this.y-e/2),e,e)},s.Burst=function(o,h,e,r){for(var n=0;r>n;n++){var i;s.cache.length>0?(i=s.cache[0],s.cache.splice(0,1)):i=new s,i.Define(o-e+Math.random()*e*2,h-e+Math.random()*e*2),t.scene.Add(i)}},s.cache=new Array,s}(r),b=function(o){function h(){o.call(this,new m(-3,-8,6,8)),this.facing=1,this.accel=240,this.gravity=360,this.frictionGround=160,this.frictionAir=90,this.jumpForce=120,this.maxspeed=new e(48,224),this.position=new e(80,60),this.sprite=new _(s.textures.player,16,16),this.sprite.Add("idle",[0],0),this.sprite.Add("run",[0,1,0,2],10),this.sprite.Add("jump",[1],0),this.sprite.Play("idle",!0),this.sprite.origin.x=8,this.sprite.origin.y=16,this.Add(this.sprite),this.depth=5}return i(h,o),h.prototype.Update=function(){o.prototype.Update.call(this);var e=t.keyboard.Down(n.LEFT)?-1:t.keyboard.Down(n.RIGHT)?1:0;0!=e&&(this.facing=e),this.Accelerate(e*this.accel,0),0==e&&this.Friction(this.collider.Check("solid",0,1)?this.frictionGround:this.frictionAir,0),this.collider.Check("solid",0,1)||(t.keyboard.Down(n.UP)&&Math.abs(this.speed.y)<60?this.Accelerate(0,this.gravity/2):this.Accelerate(0,this.gravity)),t.keyboard.Pressed(n.UP)&&this.collider.Check("solid",0,1)&&(this.speed.y=-this.jumpForce),this.Maxspeed(this.maxspeed.x,this.maxspeed.y),this.Move(),this.collider.Check("solid",0,1)?0==e?this.sprite.Play("idle",!1):this.sprite.Play("run",!1):this.sprite.Play("jump",!1),t.camera.x+=(this.position.x-t.width/2-t.camera.x)/10,t.camera.x<0&&(t.camera.x=0),t.camera.x+t.width>320&&(t.camera.x=320-t.width),t.keyboard.Pressed(n.F)&&t.ToggleFullscreen(),t.keyboard.Pressed(n.P)&&(t.keepPixelScale=!t.keepPixelScale),this.sprite.scale.y<1?this.sprite.scale.y+=2*t.deltaTime:this.sprite.scale.y=1,this.sprite.scale.x=this.facing*Math.abs(this.sprite.scale.x),Math.abs(this.sprite.scale.x)>1?this.sprite.scale.x-=this.facing*t.deltaTime*2:this.sprite.scale.x=this.facing},h.prototype.OnCollideY=function(){this.speed.y>10&&(S.Burst(this.x,this.y,4,4),this.sprite.scale.x=1.25,this.sprite.scale.y=.75),o.prototype.OnCollideY.call(this)},h}(y),T=function(s){function e(c,i,n,o,r,t){"undefined"==typeof t&&(t=!0),s.call(this,c,new h(0,0,i,n)),this.tileWidth=i,this.tileHeight=n,this.columns=o,this.rows=r,this.stacking=t,this.data=new Array;for(var e=0;o>e;e++){this.data.push(new Array);for(var a=0;r>a;a++)this.data[e].push(new Array)}}return i(e,s),e.prototype.Set=function(t,e,i,s){t>=0&&e>=0&&t<this.columns&&e<this.rows&&(this.stacking||(this.data[t][e]=new Array),this.data[t][e].push(this.GetIndex(i,s)))},e.prototype.SetRect=function(i,s,n,o,h,r){for(var t=Math.max(0,i);t<Math.min(this.columns,i+n);t++)for(var e=Math.max(0,s);e<Math.min(this.rows,s+o);e++)this.stacking||(this.data[t][e]=new Array),this.data[t][e].push(this.GetIndex(h,r))},e.prototype.SeAll=function(n,o,i,s){for(var t=0;t<this.columns;t++)for(var e=0;e<this.rows;e++)this.stacking||(this.data[t][e]=new Array),this.data[t][e].push(this.GetIndex(i,s))},e.prototype.Clear=function(t,e){t>=0&&e>=0&&t<this.columns&&e<this.rows&&(this.data[t][e]=new Array)},e.prototype.ClearRect=function(i,s,n,o){for(var t=Math.max(0,i);t<Math.min(this.columns,i+n);t++)for(var e=Math.max(0,s);e<Math.min(this.rows,s+o);e++)this.data[t][e]=new Array},e.prototype.ClearAll=function(){for(var t=0;t<this.columns;t++)for(var e=0;e<this.rows;e++)this.data[t][e]=new Array},e.prototype.Get=function(t,e){return 0>t||0>e||t>=this.columns||e>=this.rows?-1:this.stacking?this.data[t][e]:this.data[t][e][0]},e.prototype.GetIndex=function(t,e){return e*this.columns+t},e.prototype.Render=function(){for(var e=0;e<this.columns;e++)for(var i=0;i<this.rows;i++)for(var s=0;s<this.data[e][i].length;s++){var n=this.data[e][i][s]%this.columns,o=Math.floor(this.data[e][i][s]/this.columns);t.context.drawImage(this.texture,n*this.tileWidth,o*this.tileHeight,this.tileWidth,this.tileHeight,this.scenePosition.x+e*this.tileWidth*this.scale.x,this.scenePosition.y+i*this.tileHeight*this.scale.y,this.tileWidth*this.scale.x,this.tileHeight*this.scale.y)}},e}(u),A=function(e){function t(o,h,i,s){e.call(this,1),this.outsideReturnValue=!0,this.columns=i,this.rows=s,this.tileWidth=o,this.tileHeight=h,this.solids=new Array;for(var t=0;i>t;t++){this.solids.push(new Array);for(var n=0;s>n;n++)this.solids[t].push(!1)}}return i(t,e),t.prototype.Set=function(t,e,i){t>=0&&e>=0&&t<this.columns&&e<this.rows&&(this.solids[t][e]=i)},t.prototype.SetRect=function(i,s,n,o,h){for(var t=Math.max(0,i);t<Math.min(this.columns,i+n);t++)for(var e=Math.max(0,s);e<Math.min(this.rows,s+o);e++)this.solids[t][e]=h},t.prototype.SetAll=function(i){for(var t=0;t<this.columns;t++)for(var e=0;e<this.rows;e++)this.solids[t][e]=i},t.prototype.Get=function(t,e){return 0>t||0>e||t>=this.columns||e>=this.rows?this.outsideReturnValue:this.solids[t][e]},t.prototype.Overlaps=function(t){return 0==t.type?o.HitboxToGrid(t,this):1==t.type?o.GridToGrid(this,t):!1},t}(l),M=function(o){function n(){o.call(this),this.tilemap=new T(s.textures.grass,8,8,40,15,!0),this.collider=new A(8,8,40,15),this.collider.Tag("solid"),this.collider.SetRect(0,0,2,15,!0),this.collider.SetRect(0,0,40,2,!0),this.collider.SetRect(0,13,40,2,!0),this.collider.SetRect(38,0,2,15,!0),this.collider.SetRect(8,10,5,15,!0),this.collider.SetRect(16,7,5,4,!0),this.Add(this.tilemap),this.Add(this.collider),this.GenerateTiles()}return i(n,o),n.prototype.Update=function(){if(o.prototype.Update.call(this),t.mouse.leftPressed||t.mouse.rightPressed){var i=new e(Math.floor(t.mouse.x/8),Math.floor(t.mouse.y/8));this.collider.Set(i.x,i.y,t.mouse.leftPressed),this.tilemap.ClearRect(i.x-1,i.y-1,3,3);for(var s=-1;2>s;s++)for(var n=-1;2>n;n++)this.GenerateTile(i.x+s,i.y+n)}},n.prototype.GenerateTiles=function(){for(var t=0;t<this.collider.columns;t++)for(var e=0;e<this.collider.rows;e++)this.GenerateTile(t,e)},n.prototype.GenerateTile=function(t,e){var i=this.collider.Get(t,e-1),s=this.collider.Get(t+1,e),n=this.collider.Get(t-1,e),o=this.collider.Get(t,e+1);this.collider.Get(t,e)?n&&i&&o&&s?this.tilemap.Set(t,e,2,2):n&&!i&&s&&o?this.tilemap.Set(t,e,2,1):n&&i&&s&&!o?this.tilemap.Set(t,e,2,3):!n&&i&&s&&o?this.tilemap.Set(t,e,1,2):n&&i&&!s&&o?this.tilemap.Set(t,e,3,2):!n&&!i&&s&&o?this.tilemap.Set(t,e,1,1):n&&!i&&!s&&o?this.tilemap.Set(t,e,3,1):!n&&i&&s&&!o?this.tilemap.Set(t,e,1,3):n&&i&&!s&&!o?this.tilemap.Set(t,e,3,3):!n&&i&&!s&&o?this.tilemap.Set(t,e,5,2):n&&!i&&s&&!o?this.tilemap.Set(t,e,2,5):n||i||s||!o?n||!i||s||o?n||i||!s||o?!n||i||s||o?n||i||s||o||this.tilemap.Set(t,e,5,5):this.tilemap.Set(t,e,3,5):this.tilemap.Set(t,e,1,5):this.tilemap.Set(t,e,5,3):this.tilemap.Set(t,e,5,1):(o&&this.tilemap.Set(t,e,1+Math.floor(3*Math.random()),0),s&&this.tilemap.Set(t,e,0,1+Math.floor(3*Math.random())),i&&this.tilemap.Set(t,e,1+Math.floor(3*Math.random()),4),n&&this.tilemap.Set(t,e,4,1+Math.floor(3*Math.random())))},n.prototype.Render=function(){o.prototype.Render.call(this),t.context.beginPath(),t.context.lineWidth=1,t.context.strokeStyle="#ff0000",t.context.rect(8*Math.floor(t.mouse.x/8),8*Math.floor(t.mouse.y/8),8,8),t.context.stroke()},n}(r),s=new v;new f("Ambient JS Game Test",160,120,4,60),t.Run(),t.scene=new R}();