(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"104":function(e,n,i){"use strict";i.r(n),i.d(n,"taro_audio_core",(function(){return r}));var o=i(45),r=function(){function t(e){Object(o.g)(this,e),this.onError=Object(o.c)(this,"error",7),this.onPlay=Object(o.c)(this,"play",7),this.onPause=Object(o.c)(this,"pause",7),this.onTimeUpdate=Object(o.c)(this,"timeupdate",7),this.onEnded=Object(o.c)(this,"ended",7),this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.nativeProps={}}return t.prototype.bindevent=function(){var e=this;this.audio.addEventListener("timeupdate",(function(n){e.onTimeUpdate.emit({"duration":n.srcElement.duration,"currentTime":n.srcElement.duration})})),this.audio.addEventListener("ended",(function(){e.onEnded.emit()})),this.audio.addEventListener("play",(function(){e.onPlay.emit()})),this.audio.addEventListener("pause",(function(n){e.onPause.emit(n)})),this.audio.addEventListener("error",(function(n){var i;e.onError.emit({"errMsg":null===(i=n.srcElement.error)||void 0===i?void 0:i.code})}))},t.prototype.componentDidLoad=function(){this.bindevent()},t.prototype.render=function(){var e=this,n=this,i=n.src,r=n.controls,s=n.autoplay,d=n.loop,a=n.muted,u=n.nativeProps;return Object(o.e)("audio",Object.assign({"src":i,"controls":r,"autoplay":s,"loop":d,"muted":a,"ref":function(n){e.audio=n}},u))},t}();r.style="audio{max-width:100%;outline:none}"}}]);