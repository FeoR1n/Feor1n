var ym=Object.defineProperty;var Tm=(r,e,t)=>e in r?ym(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var lt=(r,e,t)=>Tm(r,typeof e!="symbol"?e+"":e,t);import{c as bm,u as Am,r as Ei,a as wm,j as $e,L as wl,A as Rf}from"./index-CktOwmFH.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=bm("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);function Xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function fd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pa={duration:.5,overwrite:!1,delay:0},Nu,hn,Ct,ui=1e8,St=1/ui,Sc=Math.PI*2,Cm=Sc/4,Pm=0,hd=Math.sqrt,Dm=Math.cos,Lm=Math.sin,ln=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},Uu=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},On=function(e){return e!==!1},Fu=function(){return typeof window<"u"},ja=function(e){return zt(e)||ln(e)},dd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,Im=/random\([^)]+\)/g,Nm=/,\s*/g,Cf=/(?:-?\.?\d|\.)+/gi,pd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,md=/[+-]=-?[.\d]+/,Um=/[^,'"\[\]\s]+/gi,Fm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,bi,Mc,Ou,ni={},jo={},_d,gd=function(e){return(jo=ks(e,ni))&&Vn},Bu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Da=function(e,t){return!t&&console.warn(e)},xd=function(e,t){return e&&(ni[e]=t)&&jo&&(jo[e]=t)||ni},La=function(){return 0},Om={suppressEvents:!0,isStart:!0,kill:!1},Oo={suppressEvents:!0,kill:!1},Bm={suppressEvents:!0},zu={},Sr=[],Ec={},vd,Zn={},Cl={},Pf=30,Bo=[],ku="",Gu=function(e){var t=e[0],n,i;if(Fi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Bo.length;i--&&!Bo[i].targetTest(t););n=Bo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gd(e[i],n)))||e.splice(i,1);return e},Wr=function(e){return e._gsap||Gu(fi(e))[0]._gsap},Sd=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Uu(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},zm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},el=function(){var e=Sr.length,t=Sr.slice(0),n,i;for(Ec={},Sr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hu=function(e){return!!(e._initted||e._startAt||e.add)},Md=function(e,t,n,i){Sr.length&&!hn&&el(),e.render(t,n,!!(hn&&t<0&&Hu(e))),Sr.length&&!hn&&el()},Ed=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Um).length<2?t:ln(e)?e.trim():e},yd=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},km=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ks=function(e,t){for(var n in t)e[n]=t[n];return e},Df=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},tl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xa=function(e){var t=e.parent||It,n=e.keyframes?km(Tn(e.keyframes)):ii;if(On(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Gm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Td=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yc=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(Oo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vm=function r(e){return!e||e._ts&&r(e.parent)},Lf=function(e){return e._repeat?Gs(e._tTime,e=e.duration()+e._rDelay)*e:0},Gs=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},nl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ml=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ml(e),n._dirty||Xr(n,e)),e},bd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=nl(e.rawTime(),t),(!t._dur||Xa(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Ri=function(e,t,n,i){return t.parent&&br(t),t._start=Lt((ji(n)?n:!n&&il(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==It?ai(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Td(e,t,"_first","_last",e._sort?"_start":0),il(t)||(e._recent=t),i||bd(e,t),e._ts<0&&El(e,e._tTime),e},Ad=function(e,t){return(ni.ScrollTrigger||Bu("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},wd=function(e,t,n,i,s){if(Wu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vd!==Qn.frame)return Sr.push(e),e._lazy=[s,i],1},Wm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},il=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Xm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Wm(e)&&!(!e._initted&&il(e))||(e._ts<0||e._dp._ts<0)&&!il(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Xa(0,e._tDur,t),u=Gs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Gs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||hn||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&wd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&yc(e,t,n,!0),e._onUpdate&&!n&&jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&br(e,1),!n&&!hn&&(jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},qm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&El(e,e._tTime=e._tDur*o),e.parent&&Ml(e),n||Xr(e.parent,e),e},If=function(e){return e instanceof Nn?Xr(e):Hs(e,e._dur)},Ym={_start:0,endTime:La,totalDuration:La},ai=function r(e,t,n){var i=e.labels,s=e._recent||Ym,a=e.duration()>=ui?s.endTime(!1):e._dur,o,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},va=function(e,t,n){var i=ji(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;a.immediateRender=On(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},Pr=function(e,t){return e||e===0?t(e):t},Xa=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!ln(e)||!(t=Fm.exec(e))?"":t[1]},$m=function(e,t,n){return Pr(n,function(i){return Xa(e,t,i)})},Tc=[].slice,Rd=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==bi},Km=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||Rd(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):ln(e)&&!n&&(Mc||!Vs())?Tc.call((t||Ou).querySelectorAll(e),0):Tn(e)?Km(e,n):Rd(e)?Tc.call(e,0):e?[e]:[]},bc=function(e){return e=fi(e)[0]||Da("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?Da("Invalid scope")||Ou.createElement("div"):e)}},Cd=function(e){return e.sort(function(){return .5-Math.random()})},Pd=function(e){if(zt(e))return e;var t=Fi(e)?e:{each:e},n=qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return ln(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,m){var x=(m||t).length,p=a[x],_,S,b,v,T,A,g,y,P;if(!p){if(P=t.grid==="auto"?0:(t.grid||[1,ui])[1],!P){for(g=-ui;g<(g=m[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=a[x]=[],_=l?Math.min(P,x)*u-.5:i%P,S=P===ui?0:l?x*d/P-.5:i/P|0,g=0,y=ui,A=0;A<x;A++)b=A%P-_,v=S-(A/P|0),p[A]=T=c?Math.abs(c==="y"?v:b):hd(b*b+v*v),T>g&&(g=T),T<y&&(y=T);i==="random"&&Cd(p),p.max=g-y,p.min=y,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),p.b=x<0?s-x:s,p.u=En(t.amount||t.each)||0,n=n&&x<0?l_(n):n}return x=(p[h]-p.min)/p.max||0,Lt(p.b+(n?n(x):x)*p.v)+p.u}},Ac=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ji(n)?0:En(n))}},Dd=function(e,t){var n=Tn(e),i,s;return!n&&Fi(e)&&(i=n=e.radius||ui,e.values?(e=fi(e.values),(s=!ji(e[0]))&&(i*=i)):e=Ac(e.increment)),Pr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ui,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||ji(a)?u:u+En(a)}:Ac(e))},Ld=function(e,t,n,i){return Pr(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Zm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Jm=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},Qm=function(e,t,n){return Nd(e,t,0,1,n)},Id=function(e,t,n){return Pr(n,function(i){return e[~~t(i)]})},jm=function r(e,t,n){var i=t-e;return Tn(e)?Id(e,r(0,e.length),t):Pr(n,function(s){return(i+(s-e)%i)%i+e})},e_=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?Id(e,r(0,e.length-1),t):Pr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ia=function(e){return e.replace(Im,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Nm);return Ld(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Nd=function(e,t,n,i,s){var a=t-e,o=i-n;return Pr(s,function(l){return n+((l-e)/a*o||0)})},t_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=ln(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(m){m*=d;var x=Math.min(h,~~m);return u[x](m-x)},n=t}else i||(e=ks(Tn(e)?[]:{},e));if(!u){for(l in t)Vu.call(o,e,l,"get",t[l]);s=function(m){return Yu(m,o)||(a?e.p:e)}}}return Pr(n,s)},Nf=function(e,t,n){var i=e.labels,s=ui,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},jn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Sr.length&&el(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},ca=function(e){return br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&jn(e,"onInterrupt"),e},Rs,Ud=[],Fd=function(e){if(e)if(e=!e.name&&e.default||e,Fu()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:La,render:Yu,add:Vu,kill:x_,modifier:g_,rawVars:0},a={targetTest:0,get:0,getSetter:qu,aliases:{},register:0};if(Vs(),e!==i){if(Zn[t])return;ii(i,ii(tl(e,s),a)),ks(i.prototype,ks(s,tl(e,a))),Zn[i.prop=t]=i,e.targetTest&&(Bo.push(i),zu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xd(t,i),e.register&&e.register(Vn,i,zn)}else Ud.push(e)},bt=255,ua={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Od=function(e,t,n){var i=e?ji(e)?[e>>16,e>>8&bt,e&bt]:0:ua.black,s,a,o,l,c,u,d,h,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ua[e])i=ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Cf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Pl(l+1/3,s,a),i[1]=Pl(l,s,a),i[2]=Pl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(pd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cf)||ua.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Bd=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(s){var a=s.match(ws)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Uf=function(e,t,n){var i="",s=(e+i).match(Mr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Od(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Bd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Mr,"1").split(ws),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Mr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Mr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ua)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),n_=/hsl[a]?\(/,zd=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=n_.test(t),e[1]=Uf(e[1],n),e[0]=Uf(e[0],n,Bd(e[1])),!0},Na,Qn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,m=function x(p){var _=r()-i,S=p===!0,b,v,T,A;if((_>e||_<0)&&(n+=_-t),i+=_,T=i-n,b=T-a,(b>0||S)&&(A=++d.frame,h=T-d.time*1e3,d.time=T=T/1e3,a+=b+(b>=s?0:s-b),v=1),S||(l=c(x)),v)for(f=0;f<o.length;f++)o[f](T,h,A,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){_d&&(!Mc&&Fu()&&(bi=Mc=window,Ou=bi.document||{},ni.gsap=Vn,(bi.gsapVersions||(bi.gsapVersions=[])).push(Vn.version),gd(jo||bi.GreenSockGlobals||!bi.gsap&&bi||{}),Ud.forEach(Fd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Na=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=La},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,_,S){var b=_?function(v,T,A,g){p(v,T,A,g),d.remove(b)}:p;return d.remove(p),o[S?"unshift":"push"](b),Vs(),b},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},d})(),Vs=function(){return!Na&&Qn.wake()},rt={},i_=/^[\d.\-M][\d.\-,\s]/,r_=/["']/g,s_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(r_,"").trim():+c,i=l.substr(o+1).trim();return t},a_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},o_=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[s_(t[1])]:a_(e).split(",").map(Ed)):rt._CE&&i_.test(e)?rt._CE("",e):n},l_=function(e){return function(t){return 1-e(1-t)}},qr=function(e,t){return e&&(zt(e)?e:rt[e]||o_(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Bn(e,function(o){rt[o]=ni[o]=s,rt[a=o.toLowerCase()]=n;for(var l in s)rt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=s[l]}),s},kd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Sc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Lm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kd(o);return s=Sc/s,l.config=function(c,u){return r(e,c,u)},l},Ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kd(n);return i.config=function(s){return r(e,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;rs("Elastic",Dl("in"),Dl("out"),Dl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(hd(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-Dm(r*Cm)+1});rs("Back",Ll("in"),Ll("out"),Ll());rt.SteppedEase=rt.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-St;return function(o){return((i*Xa(0,a,o)|0)+s)*n}}};Pa.ease=rt["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ku+=r+","+r+"Params,"});var Gd=function(e,t){this.id=Pm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sd,this.set=t?t.getSetter:qu},Ua=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Na||Qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(El(this,n),!s._dp||s.parent||bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Md(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?nl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Xa(-Math.abs(this._delay),o,s),i!==!1),Ml(this),Hm(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Vs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==St,a;if(s)for(this._tTime-=St,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+St){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Bm);var i=hn;return hn=n,Hu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,If(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,If(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ai(this,n),On(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:yd,l=function(){var u=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ca(this)},r})();ii(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Nn=(function(r){fd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),It&&Ri(n.parent||It,Xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ad(Xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return va(0,arguments,this),this},t.from=function(i,s,a){return va(1,arguments,this),this},t.fromTo=function(i,s,a,o){return va(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,xa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,ai(this,a),1),this},t.call=function(i,s,a){return Ri(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,ai(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,xa(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,xa(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,m,x,p,_,S,b,v,T,A,g;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,b=this._ts,_=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Lt(u%p),u===l?(x=this._repeat,h=c):(T=Lt(u/p),x=~~T,x&&x===T&&(h=c,x--),h>c&&(h=c)),T=Gs(this._tTime,p),!o&&this._tTime&&T!==x&&this._tTime-T*p-this._dur<=0&&(T=x),A&&x&1&&(h=c-h,g=1),x!==T&&!this._lock){var y=A&&T&1,P=y===(A&&x&1);if(x<T&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(g?0:Lt(x*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1,T=x),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=qm(this,Lt(o),Lt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!T&&(jn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||h>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!_){S=0,m&&(u+=this._zTime=-St);break}}f=m}else{f=this._last;for(var R=i<0?i:h;f;){if(m=f._prev,(f._act||R<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||hn&&Hu(f)),h!==this._time||!this._ts&&!_){S=0,m&&(u+=this._zTime=R?-St:St);break}}f=m}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-St)._zTime=h>=o?1:-1,this._ts))return this._start=v,Ml(this),this.render(i,s,a);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&br(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ji(s)||(s=ai(this,s,i)),!(i instanceof Ua)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ln(i))return this.addLabel(i,s);if(zt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ui);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return ln(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&Sl(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ai(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||La,a);return o.data="isPause",this._hasPause=1,Ri(this,o,ai(this,i))},t.removePause=function(i){var s=this._first;for(i=ai(this,i);s;)s._start===i&&s.data==="isPause"&&br(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)dr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=fi(i),l=this._first,c=ji(s),u;l;)l instanceof Kt?zm(l._targets,o)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ai(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,m=Kt.to(a,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Hs(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,d||[])}},s));return h?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ii({startAt:{time:ai(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Nf(this,ai(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Nf(this,ai(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Xr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ui,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ri(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Hs(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(Md(It,nl(i,It)),vd=Qn.frame),Qn.frame>=Pf){Pf+=ti.autoSleep||120;var s=It._first;if((!s||!s._ts)&&ti.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},e})(Ua);ii(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var c_=function(e,t,n,i,s,a,o){var l=new zn(this._pt,e,t,0,1,qd,null,s),c=0,u=0,d,h,f,m,x,p,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ia(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),h=n.match(Rl)||[];d=Rl.exec(i);)m=d[0],x=i.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),m!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:p,c:m.charAt(1)==="="?Ds(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(md.test(i)||_)&&(l.e=0),this._pt=l,l},Vu=function(e,t,n,i,s,a,o,l,c,u){zt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=zt(d)?c?p_:Wd:Xu,m;if(ln(i)&&(~i.indexOf("random(")&&(i=Ia(i)),i.charAt(1)==="="&&(m=Ds(h,i)+(En(h)||0),(m||m===0)&&(i=m))),!u||h!==i||wc)return!isNaN(h*i)&&i!==""?(m=new zn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?__:Xd,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&Bu(t,i),c_.call(this,e,t,h,i,f,l||ti.stringFilter,c))},u_=function(e,t,n,i,s){if(zt(e)&&(e=Sa(e,s,t,n,i)),!Fi(e)||e.style&&e.nodeType||Tn(e)||dd(e))return ln(e)?Sa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Sa(e[o],s,t,n,i);return a},Hd=function(e,t,n,i,s,a){var o,l,c,u;if(Zn[e]&&(o=new Zn[e]).init(s,o.rawVars?t[e]:u_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new zn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},dr,wc,Wu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,m=e._dur,x=e._startAt,p=e._targets,_=e.parent,S=_&&_.data==="nested"?_.vars.targets:p,b=e._overwrite==="auto"&&!Nu,v=e.timeline,T=i.easeReverse||d,A,g,y,P,R,I,N,V,D,k,q,O,te;if(v&&(!h||!s)&&(s="none"),e._ease=qr(s,Pa.ease),e._rEase=T&&(qr(T)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||h&&!i.stagger){if(V=p[0]?Wr(p[0]).harness:0,O=V&&i[V.prop],A=tl(i,zu),x&&(x._zTime<0&&x.progress(1),t<0&&u&&o&&!f?x.render(-1,!0):x.revert(u&&m?Oo:Om),x._lazy=0),a){if(br(e._startAt=Kt.set(p,ii({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!o&&!f)&&e._startAt.revert(Oo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!x){if(t&&(o=!1),y=ii({overwrite:!1,data:"isFromStart",lazy:o&&!x&&On(l),immediateRender:o,stagger:0,parent:_},A),O&&(y[V.prop]=O),br(e._startAt=Kt.set(p,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(Oo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&On(l)||l&&!m,g=0;g<p.length;g++){if(R=p[g],N=R._gsap||Gu(p)[g]._gsap,e._ptLookup[g]=k={},Ec[N.id]&&Sr.length&&el(),q=S===p?g:S.indexOf(R),V&&(D=new V).init(R,O||A,e,q,S)!==!1&&(e._pt=P=new zn(e._pt,R,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(W){k[W]=P}),D.priority&&(I=1)),!V||O)for(y in A)Zn[y]&&(D=Hd(y,A,e,q,R,S))?D.priority&&(I=1):k[y]=P=Vu.call(e,R,y,"get",A[y],q,S,0,i.stringFilter);e._op&&e._op[g]&&e.kill(R,e._op[g]),b&&e._pt&&(dr=e,It.killTweensOf(R,k,e.globalTime(t)),te=!e.parent,dr=0),e._pt&&l&&(Ec[N.id]=1)}I&&Yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!te,h&&t<=0&&v.render(ui,!0,!0)},f_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return wc=1,e.vars[t]="+=0",Wu(e,o),wc=0,l?Da(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Gt(n)+En(d.e)),d.b&&(d.b=u.s+En(d.b))},h_=function(e,t){var n=e[0]?Wr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ks({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},d_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Sa=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?Ia(e):e},rl=ku+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vd={};Bn(rl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vd[r]=1});rl=rl.split(",");var Kt=(function(r){fd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:xa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,m=l.keyframes,x=l.defaults,p=l.scrollTrigger,_=i.parent||It,S=(Tn(n)||dd(n)?ji(n[0]):"length"in i)?[n]:fi(n),b,v,T,A,g,y,P,R;if(o._targets=S.length?Gu(S):Da("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||h||ja(c)||ja(u)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(b=o.timeline=new Nn({data:"nested",defaults:x||{},targets:_&&_.data==="nested"?_.vars.targets:S}),b.kill(),b.parent=b._dp=Xi(o),b._start=0,h||ja(c)||ja(u)){if(A=S.length,P=h&&Pd(h),Fi(h))for(g in h)~rl.indexOf(g)&&(R||(R={}),R[g]=h[g]);for(v=0;v<A;v++)T=tl(i,Vd),T.stagger=0,I&&(T.easeReverse=I),R&&ks(T,R),y=S[v],T.duration=+Sa(c,Xi(o),v,y,S),T.delay=(+Sa(u,Xi(o),v,y,S)||0)-o._delay,!h&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),b.to(y,T,P?P(v,y,S):0),b._ease=rt.none;b.duration()?c=u=0:o.timeline=0}else if(m){xa(ii(b.vars.defaults,{ease:"none"})),b._ease=qr(m.ease||i.ease||"none");var N=0,V,D,k;if(Tn(m))m.forEach(function(q){return b.to(S,q,">")}),b.duration();else{T={};for(g in m)g==="ease"||g==="easeEach"||d_(g,m[g],T,m.easeEach);for(g in T)for(V=T[g].sort(function(q,O){return q.t-O.t}),N=0,v=0;v<V.length;v++)D=V[v],k={ease:D.e,duration:(D.t-(v?V[v-1].t:0))/100*c},k[g]=D.v,b.to(S,k,N),N+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!Nu&&(dr=Xi(o),It.killTweensOf(S),dr=0),Ri(_,Xi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===Lt(_._time)&&On(d)&&Vm(Xi(o))&&_.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),p&&Ad(Xi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-St&&!u?l:i<St?0:i,h,f,m,x,p,_,S,b;if(!c)Xm(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,b=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,s,a);if(h=Lt(d%x),d===l?(m=this._repeat,h=c):(p=Lt(d/x),m=~~p,m&&m===p?(h=c,m--):h>c&&(h=c)),_=this._yoyo&&m&1,_&&(h=c-h),p=Gs(this._tTime,x),h===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==x&&this._initted&&(this._lock=a=1,this.render(Lt(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(wd(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=h<o;if(v!==this._inv){var T=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(jn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&yc(this,i,s,a),jn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&yc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&br(this,1),!s&&!(u&&!o)&&(d||o||_)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Na||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Wu(this,c),u=this._ease(c/this._dur),f_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(El(this,0),this.parent||Td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||ca(this),this.parent&&a!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?fi(i):o,c=this._ptLookup,u=this._pt,d,h,f,m,x,p,_;if((!s||s==="all")&&Gm(o,l))return s==="all"&&(this._pt=0),ca(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(x={},Bn(s,function(S){return x[S]=1}),s=x),s=h_(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(d[_]=s,m=h,f={}):(f=d[_]=d[_]||{},m=s);for(x in m)p=h&&h[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&Sl(this,p,"_pt"),delete h[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&u&&ca(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return va(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return va(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(Ua);ii(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Nn,t=Tc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Xu=function(e,t,n){return e[t]=n},Wd=function(e,t,n){return e[t](n)},p_=function(e,t,n,i){return e[t](i.fp,n)},m_=function(e,t,n){return e.setAttribute(t,n)},qu=function(e,t){return zt(e[t])?Wd:Uu(e[t])&&e.setAttribute?m_:Xu},Xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},__=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Yu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},g_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},x_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},v_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},zn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Xd,this.d=l||this,this.set=c||Xu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=v_,this.m=n,this.mt=s,this.tween=i},r})();Bn(ku+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return zu[r]=1});ni.TweenMax=ni.TweenLite=Kt;ni.TimelineLite=ni.TimelineMax=Nn;It=new Nn({sortChildren:!1,defaults:Pa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=zd;var Yr=[],zo={},S_=[],Ff=0,M_=0,Il=function(e){return(zo[e]||S_).map(function(t){return t()})},Fa=function(){var e=Date.now(),t=[];e-Ff>2&&(Il("matchMediaInit"),Yr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Il("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ff=e,Il("matchMedia"))},$d=(function(){function r(t,n){this.selector=n&&bc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=M_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=Ct,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=bc(s)),Ct=a,d=i.apply(a,arguments),zt(d)&&a._r.push(d),Ct=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Yr.length;a--;)Yr[a].id===this.id&&Yr.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Fa):o.removeEventListener("change",Fa)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),E_=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Fi(n)||(n={matches:n});var a=new $d(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(Yr.indexOf(a)<0&&Yr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fa):l.addEventListener("change",Fa),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fd(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=fi(e)[0]);var s=Wr(e||{}).get,a=n?yd:Ed;return n==="native"&&(n=""),e&&(t?a((Zn[t]&&Zn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Zn[o]&&Zn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Zn[t],o=Wr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Rs._pt=0,d.init(e,n?u+n:u,Rs,0,[e]),d.render(1,d),Rs._pt&&Yu(1,Rs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Vn.to(e,ii((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qr(e.ease,Pa.ease)),Df(Pa,e||{})},config:function(e){return Df(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Zn[o]&&!ni[o]&&Da(t+" effect requires "+o+" plugin.")}),Cl[t]=function(o,l,c){return n(fi(o),ii(l||{},s),c)},a&&(Nn.prototype[t]=function(o,l,c){return this.add(Cl[t](o,Fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=qr(t)},parseEase:function(e,t){return arguments.length?qr(e,t):rt},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,s;for(n.smoothChildTiming=On(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(It,n,0),n},context:function(e,t){return e?new $d(e,t):Ct},matchMedia:function(e){return new E_(e)},matchMediaRefresh:function(){return Yr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fa()},addEventListener:function(e,t){var n=zo[e]||(zo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=zo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:jm,wrapYoyo:e_,distribute:Pd,random:Ld,snap:Dd,normalize:Qm,getUnit:En,clamp:$m,splitColor:Od,toArray:fi,selector:bc,mapRange:Nd,pipe:Zm,unitize:Jm,interpolate:t_,shuffle:Cd},install:gd,effects:Cl,ticker:Qn,updateRoot:Nn.updateRoot,plugins:Zn,globalTimeline:It,core:{PropTween:zn,globals:xd,Tween:Kt,Timeline:Nn,Animation:Ua,getCache:Wr,_removeLinkedListItem:Sl,reverting:function(){return hn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return Nu=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sl[r]=Kt[r]});Qn.add(Nn.updateRoot);Rs=sl.to({},{duration:0});var y_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},T_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=y_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Nl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ln(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}T_(o,s)}}}},Vn=sl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nl("roundProps",Ac),Nl("modifiers"),Nl("snap",Dd))||sl;Kt.version=Nn.version=Vn.version="3.15.1";_d=1;Fu()&&Vs();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Of,pr,Ls,$u,Hr,Bf,Ku,b_=function(){return typeof window<"u"},er={},zr=180/Math.PI,Is=Math.PI/180,os=Math.atan2,zf=1e8,Zu=/([A-Z])/g,A_=/(left|right|width|margin|padding|x)/i,w_=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},R_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},C_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},P_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},D_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Kd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},L_=function(e,t,n){return e.style[t]=n},I_=function(e,t,n){return e.style.setProperty(t,n)},N_=function(e,t,n){return e._gsap[t]=n},U_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},F_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},O_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Nt="transform",kn=Nt+"Origin",B_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in er&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=qi(i,o)}):this.tfm[e]=a.x?a[e]:qi(i,e),e===kn&&(this.tfm.zOrigin=a.zOrigin);else return Ci.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Nt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},Jd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},z_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Zu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ku(),(!s||!s.isStart)&&!n[Nt]&&(Jd(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qd=function(e,t){var n={target:e,props:[],revert:z_,save:B_};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},jd,Cc=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},ei=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ws(t)||t,1)||""},kf="O,Moz,ms,Ms,Webkit".split(","),Ws=function(e,t,n){var i=t||Hr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(kf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?kf[a]:"")+e},Pc=function(){b_()&&window.document&&(Of=window,pr=Of.document,Ls=pr.documentElement,Hr=Cc("div")||{style:{}},Cc("div"),Nt=Ws(Nt),kn=Nt+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jd=!!Ws("perspective"),Ku=Vn.core.reverting,$u=1)},Gf=function(e){var t=e.ownerSVGElement,n=Cc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ls.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ls.removeChild(n),s},Hf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ep=function(e){var t,n;try{t=e.getBBox()}catch{t=Gf(e),n=1}return t&&(t.width||t.height)||n||(t=Gf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Hf(e,["x","cx","x1"])||0,y:+Hf(e,["y","cy","y1"])||0,width:0,height:0}:t},tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ep(e))},Ar=function(e,t){if(t){var n=e.style,i;t in er&&t!==kn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Zu,"-$1").toLowerCase())):n.removeAttribute(t)}},mr=function(e,t,n,i,s,a){var o=new zn(e._pt,t,n,0,1,a?Zd:Kd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Vf={deg:1,rad:1,turn:1},k_={grid:1,flex:1},wr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Hr.style,l=A_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",m,x,p,_;if(i===a||!s||Vf[i]||Vf[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&tp(e),(f||a==="%")&&(er[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[u],Gt(f?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(h?a:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===pr||!x.appendChild)&&(x=pr.body),p=x._gsap,p&&f&&p.width&&l&&p.time===Qn.time&&!p.uncache)return Gt(s/p.width*d);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,m=e[u],S?e.style[t]=S:Ar(e,t)}else(f||a==="%")&&!k_[ei(x,"display")]&&(o.position=ei(e,"position")),x===e&&(o.position="static"),x.appendChild(Hr),m=Hr[u],x.removeChild(Hr),o.position="absolute";return l&&f&&(p=Wr(x),p.time=Qn.time,p.width=x[u]),Gt(h?m*s/d:m&&s?d/m*s:0)},qi=function(e,t,n,i){var s;return $u||Pc(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),er[t]&&t!=="transform"?(s=Ba(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ol(ei(e,kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=al[t]&&al[t](e,t,n)||ei(e,t)||Sd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wr(e,t,s,n)+n:s},G_=function(e,t,n,i){if(!n||n==="none"){var s=Ws(t,e,1),a=s&&ei(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ei(e,"borderTopColor"))}var o=new zn(this._pt,e.style,t,0,1,qd),l=0,c=0,u,d,h,f,m,x,p,_,S,b,v,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ei(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=ei(e,t)||i,x?e.style[t]=x:Ar(e,t)),u=[n,i],zd(u),n=u[0],i=u[1],h=n.match(ws)||[],T=i.match(ws)||[],T.length){for(;d=ws.exec(i);)p=d[0],S=i.substring(l,d.index),m?m=(m+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(m=1),p!==(x=h[c++]||"")&&(f=parseFloat(x)||0,v=x.substr((f+"").length),p.charAt(1)==="="&&(p=Ds(f,p)+v),_=parseFloat(p),b=p.substr((_+"").length),l=ws.lastIndex-b.length,b||(b=b||ti.units[t]||v,l===i.length&&(i+=b,o.e+=b)),v!==b&&(f=wr(e,t,x,b)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:f,c:_-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Zd:Kd;return md.test(i)&&(o.e=0),this._pt=o,o},Wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},H_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wf[n]||n,t[1]=Wf[i]||i,t.join(" ")},V_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],er[o]&&(l=1,o=o==="transformOrigin"?kn:Nt),Ar(n,o);l&&(Ar(n,Nt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ba(n,1),a.uncache=1,Jd(i)))}},al={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new zn(e._pt,t,n,0,0,V_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Oa=[1,0,0,1,0,0],np={},ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xf=function(e){var t=ei(e,Nt);return ip(t)?Oa:t.substr(7).match(pd).map(Gt)},Ju=function(e,t){var n=e._gsap||Wr(e),i=e.style,s=Xf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oa:s):(s===Oa&&!e.offsetParent&&e!==Ls&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ls.appendChild(e)),s=Xf(e),l?i.display=l:Ar(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ls.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Ju(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],m=l[1],x=l[2],p=l[3],_=l[4],S=l[5],b=t.split(" "),v=parseFloat(b[0])||0,T=parseFloat(b[1])||0,A,g,y,P;n?l!==Oa&&(g=f*p-m*x)&&(y=v*(p/g)+T*(-x/g)+(x*S-p*_)/g,P=v*(-m/g)+T*(f/g)-(f*S-m*_)/g,v=y,T=P):(A=ep(e),v=A.x+(~b[0].indexOf("%")?v/100*A.width:v),T=A.y+(~(b[1]||b[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&o.smooth?(_=v-c,S=T-u,o.xOffset=d+(_*f+S*x)-_,o.yOffset=h+(_*m+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[kn]="0px 0px",a&&(mr(a,o,"xOrigin",c,v),mr(a,o,"yOrigin",u,T),mr(a,o,"xOffset",d,o.xOffset),mr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},Ba=function(e,t){var n=e._gsap||new Gd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ei(e,kn)||"0",u,d,h,f,m,x,p,_,S,b,v,T,A,g,y,P,R,I,N,V,D,k,q,O,te,W,C,ne,Me,Fe,K,ue;return u=d=h=x=p=_=S=b=v=0,f=m=1,n.svg=!!(e.getCTM&&tp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),g=Ju(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Dc(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,g)),T=n.xOrigin||0,A=n.yOrigin||0,g!==Oa&&(I=g[0],N=g[1],V=g[2],D=g[3],u=k=g[4],d=q=g[5],g.length===6?(f=Math.sqrt(I*I+N*N),m=Math.sqrt(D*D+V*V),x=I||N?os(N,I)*zr:0,S=V||D?os(V,D)*zr+x:0,S&&(m*=Math.abs(Math.cos(S*Is))),n.svg&&(u-=T-(T*I+A*V),d-=A-(T*N+A*D))):(ue=g[6],Fe=g[7],C=g[8],ne=g[9],Me=g[10],K=g[11],u=g[12],d=g[13],h=g[14],y=os(ue,Me),p=y*zr,y&&(P=Math.cos(-y),R=Math.sin(-y),O=k*P+C*R,te=q*P+ne*R,W=ue*P+Me*R,C=k*-R+C*P,ne=q*-R+ne*P,Me=ue*-R+Me*P,K=Fe*-R+K*P,k=O,q=te,ue=W),y=os(-V,Me),_=y*zr,y&&(P=Math.cos(-y),R=Math.sin(-y),O=I*P-C*R,te=N*P-ne*R,W=V*P-Me*R,K=D*R+K*P,I=O,N=te,V=W),y=os(N,I),x=y*zr,y&&(P=Math.cos(y),R=Math.sin(y),O=I*P+N*R,te=k*P+q*R,N=N*P-I*R,q=q*P-k*R,I=O,k=te),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,_=180-_),f=Gt(Math.sqrt(I*I+N*N+V*V)),m=Gt(Math.sqrt(q*q+ue*ue)),y=os(k,q),S=Math.abs(y)>2e-4?y*zr:0,v=K?1/(K<0?-K:K):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ip(ei(e,Nt)),O&&e.setAttribute("transform",O))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Gt(f),n.scaleY=Gt(m),n.rotation=Gt(x)+o,n.rotationX=Gt(p)+o,n.rotationY=Gt(_)+o,n.skewX=S+o,n.skewY=b+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[kn]=ol(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?X_:jd?rp:W_,n.uncache=0,n},ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ul=function(e,t,n){var i=En(t);return Gt(parseFloat(t)+parseFloat(wr(e,"x",n+"px",i)))+i},W_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rp(e,t)},Ir="0deg",ea="0px",Nr=") ",rp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,m=n.scaleX,x=n.scaleY,p=n.transformPerspective,_=n.force3D,S=n.target,b=n.zOrigin,v="",T=_==="auto"&&e&&e!==1||_===!0;if(b&&(d!==Ir||u!==Ir)){var A=parseFloat(u)*Is,g=Math.sin(A),y=Math.cos(A),P;A=parseFloat(d)*Is,P=Math.cos(A),a=Ul(S,a,g*P*-b),o=Ul(S,o,-Math.sin(A)*-b),l=Ul(S,l,y*P*-b+b)}p!==ea&&(v+="perspective("+p+Nr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(T||a!==ea||o!==ea||l!==ea)&&(v+=l!==ea||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Nr),c!==Ir&&(v+="rotate("+c+Nr),u!==Ir&&(v+="rotateY("+u+Nr),d!==Ir&&(v+="rotateX("+d+Nr),(h!==Ir||f!==Ir)&&(v+="skew("+h+", "+f+Nr),(m!==1||x!==1)&&(v+="scale("+m+", "+x+Nr),S.style[Nt]=v||"translate(0, 0)"},X_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,m=n.xOrigin,x=n.yOrigin,p=n.xOffset,_=n.yOffset,S=n.forceCSS,b=parseFloat(a),v=parseFloat(o),T,A,g,y,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Is,c*=Is,T=Math.cos(l)*d,A=Math.sin(l)*d,g=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=Is,P=Math.tan(c-u),P=Math.sqrt(1+P*P),g*=P,y*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),T*=P,A*=P)),T=Gt(T),A=Gt(A),g=Gt(g),y=Gt(y)):(T=d,y=h,A=g=0),(b&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(b=wr(f,"x",a,"px"),v=wr(f,"y",o,"px")),(m||x||p||_)&&(b=Gt(b+m-(m*T+x*g)+p),v=Gt(v+x-(m*A+x*y)+_)),(i||s)&&(P=f.getBBox(),b=Gt(b+i/100*P.width),v=Gt(v+s/100*P.height)),P="matrix("+T+","+A+","+g+","+y+","+b+","+v+")",f.setAttribute("transform",P),S&&(f.style[Nt]=P)},q_=function(e,t,n,i,s){var a=360,o=ln(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*zf)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*zf)%a-~~(c/a)*a)),e._pt=h=new zn(e._pt,t,n,i,c,R_),h.e=u,h.u="deg",e._props.push(n),h},qf=function(e,t){for(var n in t)e[n]=t[n];return e},Y_=function(e,t,n){var i=qf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Nt]=t,o=Ba(n,1),Ar(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],a[Nt]=t,o=Ba(n,1),a[Nt]=c);for(l in er)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=En(c),m=En(u),d=f!==m?wr(n,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new zn(e._pt,o,l,d,h-d,Rc),e._pt.u=m||0,e._props.push(l));qf(o,i)};Bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});al[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(m){return qi(o,m,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(m,x){return f[m]=h[x]=h[x]||h[(x-1)/2|0]}),o.init(l,f,d)}});var sp={name:"css",register:Pc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,m,x,p,_,S,b,v,T,A,g,y,P;$u||Pc(),this.styles=this.styles||Qd(e),y=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(u=t[x],!(Zn[x]&&Hd(x,t,n,i,e,s)))){if(f=typeof u,m=al[x],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ia(u)),m)m(this,e,x,u,n)&&(g=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),u+="",Mr.lastIndex=0,Mr.test(c)||(p=En(c),_=En(u),_?p!==_&&(c=wr(e,x,c,_)+_):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,x),a.push(x),y.push(x,0,o[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,s):l[x],ln(c)&&~c.indexOf("random(")&&(c=Ia(c)),En(c+"")||c==="auto"||(c+=ti.units[x]||En(qi(e,x))||""),(c+"").charAt(1)==="="&&(c=qi(e,x))):c=qi(e,x),h=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),x in Ci&&(x==="autoAlpha"&&(h===1&&qi(e,"visibility")==="hidden"&&d&&(h=0),y.push("visibility",0,o.visibility),mr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=Ci[x],~x.indexOf(",")&&(x=x.split(",")[0]))),b=x in er,b){if(this.styles.save(x),P=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=ei(e,"perspective"),R?e.style.perspective=R:Ar(e,"perspective")}d=parseFloat(u)}if(v||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ba(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new zn(this._pt,o,Nt,0,1,T.renderTransform,T,0,-1),v.dep=1),x==="scale")this._pt=new zn(this._pt,T,"scaleY",T.scaleY,(S?Ds(T.scaleY,S+d):d)-T.scaleY||0,Rc),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){y.push(kn,0,o[kn]),u=H_(u),T.svg?Dc(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==T.zOrigin&&mr(this,T,"zOrigin",T.zOrigin,_),mr(this,o,x,ol(c),ol(u)));continue}else if(x==="svgOrigin"){Dc(e,u,1,A,0,this);continue}else if(x in np){q_(this,T,x,h,S?Ds(h,S+u):u);continue}else if(x==="smoothOrigin"){mr(this,T,"smooth",T.smooth,u);continue}else if(x==="force3D"){T[x]=u;continue}else if(x==="transform"){Y_(this,u,e);continue}}else x in o||(x=Ws(x)||x);if(b||(d||d===0)&&(h||h===0)&&!w_.test(u)&&x in o)p=(c+"").substr((h+"").length),d||(d=0),_=En(u)||(x in ti.units?ti.units[x]:p),p!==_&&(h=wr(e,x,c,_)),this._pt=new zn(this._pt,b?T:o,x,h,(S?Ds(h,S+d):d)-h,!b&&(_==="px"||x==="zIndex")&&t.autoRound!==!1?D_:Rc),this._pt.u=_||0,b&&P!==u?(this._pt.b=c,this._pt.e=P,this._pt.r=P_):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=C_);else if(x in o)G_.call(this,e,x,c,S?S+u:u);else if(x in e)this.add(e,x,c||e[x],S?S+u:u,i,s);else if(x!=="parseTransform"){Bu(x,u);continue}b||(x in o?y.push(x,0,o[x]):typeof e[x]=="function"?y.push(x,2,e[x]()):y.push(x,1,c||e[x])),a.push(x)}}g&&Yd(this)},render:function(e,t){if(t.tween._time||!Ku())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qi,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in er&&t!==kn&&(e._gsap.x||qi(e,"x"))?n&&Bf===n?t==="scale"?U_:N_:(Bf=n||{})&&(t==="scale"?F_:O_):e.style&&!Uu(e.style[t])?L_:~t.indexOf("-")?I_:qu(e,t)},core:{_removeProperty:Ar,_getMatrix:Ju}};Vn.utils.checkPrefix=Ws;Vn.core.getStyleSaver=Qd;(function(r,e,t,n){var i=Bn(r+","+e+","+t,function(s){er[s]=1});Bn(e,function(s){ti.units[s]="deg",np[s]=1}),Ci[i[13]]=r+","+e,Bn(n,function(s){var a=s.split(":");Ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ti.units[r]="px"});Vn.registerPlugin(sp);var ap=Vn.registerPlugin(sp)||Vn;ap.core.Tween;function $_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function K_(r,e,t){return e&&$_(r.prototype,e),r}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un,ko,Un,_r,gr,Ns,op,kr,Us,lp,$i,gi,cp,up=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},fp=1,Cs=[],Ye=[],Ni=[],Ma=Date.now,Lc=function(e,t){return t},Z_=function(){var e=Us.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ye),i.push.apply(i,Ni),Ye=n,Ni=i,Lc=function(a,o){return t[a](o)}},Er=function(e,t){return~Ni.indexOf(e)&&Ni[Ni.indexOf(e)+1][t]},Ea=function(e){return!!~lp.indexOf(e)},wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},eo="scrollLeft",to="scrollTop",Ic=function(){return $i&&$i.isPressed||Ye.cache++},ll=function(e,t){var n=function i(s){if(s||s===0){fp&&Un.history.scrollRestoration!=="manual"&&(Un.history.scrollRestoration="manual");var a=$i&&$i.isPressed;s=i.v=Math.round(s)||($i&&$i.iOS?1:0),e(s),i.cacheID=Ye.cache,a&&Lc("ss",s)}else(t||Ye.cache!==i.cacheID||Lc("ref"))&&(i.cacheID=Ye.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Ln={s:eo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ll(function(r){return arguments.length?Un.scrollTo(r,en.sc()):Un.pageXOffset||_r[eo]||gr[eo]||Ns[eo]||0})},en={s:to,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:ll(function(r){return arguments.length?Un.scrollTo(Ln.sc(),r):Un.pageYOffset||_r[to]||gr[to]||Ns[to]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||un.utils.toArray)(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},J_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Rr=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=_r.scrollingElement||gr);var s=Ye.indexOf(e),a=i===en.sc?1:2;!~s&&(s=Ye.push(e)-1),Ye[s+a]||wn(e,"scroll",Ic);var o=Ye[s+a],l=o||(Ye[s+a]=ll(Er(e,n),!0)||(Ea(e)?i:ll(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),l},Nc=function(e,t,n){var i=e,s=e,a=Ma(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,x){var p=Ma();x||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(m){var x=o,p=s,_=Ma();return(m||m===0)&&m!==i&&u(m),a===o||_-o>c?0:(i+(n?p:-p))/((n?_:a)-x)*1e3};return{update:u,reset:d,getVelocity:h}},ta=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Yf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hp=function(){Us=un.core.globals().ScrollTrigger,Us&&Us.core&&Z_()},dp=function(e){return un=e||up(),!ko&&un&&typeof document<"u"&&document.body&&(Un=window,_r=document,gr=_r.documentElement,Ns=_r.body,lp=[Un,_r,gr,Ns],un.utils.clamp,cp=un.core.context||function(){},kr="onpointerenter"in Ns?"pointer":"mouse",op=Ht.isTouch=Un.matchMedia&&Un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Ht.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return fp=0},500),ko=1),Us||hp(),ko};Ln.op=en;Ye.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ko||dp(un)||console.warn("Please gsap.registerPlugin(Observer)"),Us||hp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,x=n.event,p=n.onDragStart,_=n.onDragEnd,S=n.onDrag,b=n.onPress,v=n.onRelease,T=n.onRight,A=n.onLeft,g=n.onUp,y=n.onDown,P=n.onChangeX,R=n.onChangeY,I=n.onChange,N=n.onToggleX,V=n.onToggleY,D=n.onHover,k=n.onHoverEnd,q=n.onMove,O=n.ignoreCheck,te=n.isNormalizer,W=n.onGestureStart,C=n.onGestureEnd,ne=n.onWheel,Me=n.onEnable,Fe=n.onDisable,K=n.onClick,ue=n.scrollSpeed,Se=n.capture,ye=n.allowClicks,me=n.lockAxis,Ie=n.onLockAxis;this.target=o=In(o)||gr,this.vars=n,f&&(f=un.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,ue=ue||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Un.getComputedStyle(Ns).lineHeight)||22);var gt,Ae,ke,De,Ue,ut,st,$=this,Ze=0,Vt=0,Mt=n.passive||!u&&n.passive!==!1,tt=Rr(o,Ln),Ut=Rr(o,en),kt=tt(),F=Ut(),dt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&gi[0]==="pointerdown",at=Ea(o),ze=o.ownerDocument||_r,fe=[0,0,0],ft=[0,0,0],Le=0,Oe=function(){return Le=Ma()},w=function(pe,re){return($.event=pe)&&f&&J_(pe.target,f)||re&&dt&&pe.pointerType!=="touch"||O&&O(pe,re)},M=function(){$._vx.reset(),$._vy.reset(),Ae.pause(),d&&d($)},z=function(){var pe=$.deltaX=Yf(fe),re=$.deltaY=Yf(ft),j=Math.abs(pe)>=i,ge=Math.abs(re)>=i;I&&(j||ge)&&I($,pe,re,fe,ft),j&&(T&&$.deltaX>0&&T($),A&&$.deltaX<0&&A($),P&&P($),N&&$.deltaX<0!=Ze<0&&N($),Ze=$.deltaX,fe[0]=fe[1]=fe[2]=0),ge&&(y&&$.deltaY>0&&y($),g&&$.deltaY<0&&g($),R&&R($),V&&$.deltaY<0!=Vt<0&&V($),Vt=$.deltaY,ft[0]=ft[1]=ft[2]=0),(De||ke)&&(q&&q($),ke&&(p&&ke===1&&p($),S&&S($),ke=0),De=!1),ut&&!(ut=!1)&&Ie&&Ie($),Ue&&(ne($),Ue=!1),gt=0},se=function(pe,re,j){fe[j]+=pe,ft[j]+=re,$._vx.update(pe),$._vy.update(re),c?gt||(gt=requestAnimationFrame(z)):z()},ie=function(pe,re){me&&!st&&($.axis=st=Math.abs(pe)>Math.abs(re)?"x":"y",ut=!0),st!=="y"&&(fe[2]+=pe,$._vx.update(pe,!0)),st!=="x"&&(ft[2]+=re,$._vy.update(re,!0)),c?gt||(gt=requestAnimationFrame(z)):z()},ce=function(pe){if(!w(pe,1)){pe=ta(pe,u);var re=pe.clientX,j=pe.clientY,ge=re-$.x,ee=j-$.y,Te=$.isDragging;$.x=re,$.y=j,(Te||(ge||ee)&&(Math.abs($.startX-re)>=s||Math.abs($.startY-j)>=s))&&(ke||(ke=Te?2:1),Te||($.isDragging=!0),ie(ge,ee))}},_e=$.onPress=function(ae){w(ae,1)||ae&&ae.button||($.axis=st=null,Ae.pause(),$.isPressed=!0,ae=ta(ae),Ze=Vt=0,$.startX=$.x=ae.clientX,$.startY=$.y=ae.clientY,$._vx.reset(),$._vy.reset(),wn(te?o:ze,gi[1],ce,Mt,!0),$.deltaX=$.deltaY=0,b&&b($))},G=$.onRelease=function(ae){if(!w(ae,1)){An(te?o:ze,gi[1],ce,!0);var pe=!isNaN($.y-$.startY),re=$.isDragging,j=re&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),ge=ta(ae);!j&&pe&&($._vx.reset(),$._vy.reset(),u&&ye&&un.delayedCall(.08,function(){if(Ma()-Le>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(ze.createEvent){var ee=ze.createEvent("MouseEvents");ee.initMouseEvent("click",!0,!0,Un,1,ge.screenX,ge.screenY,ge.clientX,ge.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(ee)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&re&&!te&&Ae.restart(!0),ke&&z(),_&&re&&_($),v&&v($,j)}},Q=function(pe){return pe.touches&&pe.touches.length>1&&($.isGesturing=!0)&&W(pe,$.isDragging)},le=function(){return($.isGesturing=!1)||C($)},L=function(pe){if(!w(pe)){var re=tt(),j=Ut();se((re-kt)*ue,(j-F)*ue,1),kt=re,F=j,d&&Ae.restart(!0)}},J=function(pe){if(!w(pe)){pe=ta(pe,u),ne&&(Ue=!0);var re=(pe.deltaMode===1?l:pe.deltaMode===2?Un.innerHeight:1)*m;se(pe.deltaX*re,pe.deltaY*re,0),d&&!te&&Ae.restart(!0)}},Z=function(pe){if(!w(pe)){var re=pe.clientX,j=pe.clientY,ge=re-$.x,ee=j-$.y;$.x=re,$.y=j,De=!0,d&&Ae.restart(!0),(ge||ee)&&ie(ge,ee)}},he=function(pe){$.event=pe,D($)},oe=function(pe){$.event=pe,k($)},de=function(pe){return w(pe)||ta(pe,u)&&K($)};Ae=$._dc=un.delayedCall(h||.25,M).pause(),$.deltaX=$.deltaY=0,$._vx=Nc(0,50,!0),$._vy=Nc(0,50,!0),$.scrollX=tt,$.scrollY=Ut,$.isDragging=$.isGesturing=$.isPressed=!1,cp(this),$.enable=function(ae){return $.isEnabled||(wn(at?ze:o,"scroll",Ic),a.indexOf("scroll")>=0&&wn(at?ze:o,"scroll",L,Mt,Se),a.indexOf("wheel")>=0&&wn(o,"wheel",J,Mt,Se),(a.indexOf("touch")>=0&&op||a.indexOf("pointer")>=0)&&(wn(o,gi[0],_e,Mt,Se),wn(ze,gi[2],G),wn(ze,gi[3],G),ye&&wn(o,"click",Oe,!0,!0),K&&wn(o,"click",de),W&&wn(ze,"gesturestart",Q),C&&wn(ze,"gestureend",le),D&&wn(o,kr+"enter",he),k&&wn(o,kr+"leave",oe),q&&wn(o,kr+"move",Z)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=De=ke=!1,$._vx.reset(),$._vy.reset(),kt=tt(),F=Ut(),ae&&ae.type&&_e(ae),Me&&Me($)),$},$.disable=function(){$.isEnabled&&(Cs.filter(function(ae){return ae!==$&&Ea(ae.target)}).length||An(at?ze:o,"scroll",Ic),$.isPressed&&($._vx.reset(),$._vy.reset(),An(te?o:ze,gi[1],ce,!0)),An(at?ze:o,"scroll",L,Se),An(o,"wheel",J,Se),An(o,gi[0],_e,Se),An(ze,gi[2],G),An(ze,gi[3],G),An(o,"click",Oe,!0),An(o,"click",de),An(ze,"gesturestart",Q),An(ze,"gestureend",le),An(o,kr+"enter",he),An(o,kr+"leave",oe),An(o,kr+"move",Z),$.isEnabled=$.isPressed=$.isDragging=!1,Fe&&Fe($))},$.kill=$.revert=function(){$.disable();var ae=Cs.indexOf($);ae>=0&&Cs.splice(ae,1),$i===$&&($i=0)},Cs.push($),te&&Ea(o)&&($i=$),$.enable(x)},K_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.15.1";Ht.create=function(r){return new Ht(r)};Ht.register=dp;Ht.getAll=function(){return Cs.slice()};Ht.getById=function(r){return Cs.filter(function(e){return e.vars.id===r})[0]};up()&&un.registerPlugin(Ht);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,Ts,qe,xt,Jn,_t,Qu,cl,za,ya,fa,no,vn,yl,Uc,Pn,$f,Kf,bs,pp,Fl,mp,Cn,Fc,_p,gp,ur,Oc,ju,Fs,ef,yr,Bc,Ol,io=1,Sn=Date.now,Bl=Sn(),hi=0,ha=0,Zf=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Jf=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Q_=function r(){return ha&&requestAnimationFrame(r)},Qf=function(){return yl=1},jf=function(){return yl=0},Ai=function(e){return e},da=function(e){return Math.round(e*1e5)/1e5||0},xp=function(){return typeof window<"u"},vp=function(){return we||xp()&&(we=window.gsap)&&we.registerPlugin&&we},Jr=function(e){return!!~Qu.indexOf(e)},Sp=function(e){return(e==="Height"?ef:qe["inner"+e])||Jn["client"+e]||_t["client"+e]},Mp=function(e){return Er(e,"getBoundingClientRect")||(Jr(e)?function(){return Xo.width=qe.innerWidth,Xo.height=ef,Xo}:function(){return Yi(e)})},j_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Er(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Sp(s):e["client"+s])||0}},eg=function(e,t){return!t||~Ni.indexOf(e)?Mp(e):function(){return Xo}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Er(e,n))?a()-Mp(e)()[s]:Jr(e)?(Jn[n]||_t[n])-Sp(i):e[n]-e["offset"+i])},ro=function(e,t){for(var n=0;n<bs.length;n+=3)(!t||~t.indexOf(bs[n+1]))&&e(bs[n],bs[n+1],bs[n+2])},Kn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},pa=function(e){return typeof e=="number"},Gr=function(e){return typeof e=="object"},na=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ls=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},cs=Math.abs,Ep="left",yp="top",tf="right",nf="bottom",$r="width",Kr="height",Ta="Right",ba="Left",Aa="Top",wa="Bottom",$t="padding",oi="margin",Xs="Width",rf="Height",jt="px",li=function(e){return qe.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},tg=function(e){var t=li(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},eh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yi=function(e,t){var n=t&&li(e)[Uc]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ul=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Tp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ng=function(e){return function(t){return we.utils.snap(Tp(e),t)}},sf=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},ig=function(e){return function(t,n){return sf(Tp(e))(t,n.direction)}},so=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ao=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},th={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},oo={toggleActions:"play",anticipatePin:0},fl={top:0,left:0,center:.5,bottom:1,right:1},Go=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fl?fl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,m=xt.createElement("div"),x=Jr(n)||Er(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=x?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,b=S?c:u,v="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(v+=(i===en?tf:nf)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=S,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+i.op.d2],Ho(m,0,i,S),m},Ho=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Xs]=1,s["border"+o+Xs]=0,s[n.p]=t+"px",we.set(e,s)},Xe=[],zc={},ka,nh=function(){return Sn()-hi>34&&(ka||(ka=requestAnimationFrame(Ki)))},us=function(){(!Cn||!Cn.isPressed||Cn.startX>_t.clientWidth)&&(Ye.cache++,Cn?ka||(ka=requestAnimationFrame(Ki)):Ki(),hi||jr("scrollStart"),hi=Sn())},zl=function(){gp=qe.innerWidth,_p=qe.innerHeight},ma=function(e){Ye.cache++,(e===!0||!vn&&!mp&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Fc||gp!==qe.innerWidth||Math.abs(qe.innerHeight-_p)>qe.innerHeight*.25))&&cl.restart(!0)},Qr={},rg=[],bp=function r(){return an(Ke,"scrollEnd",r)||Vr(!0)},jr=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||rg},$n=[],Ap=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},wp=function(){Ye.cache++,Ye.forEach(function(e){return yn(e)&&(e.rec=e())})},af=function(e,t){var n;for(Pn=0;Pn<Xe.length;Pn++)n=Xe[Pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yr=!0,t&&Ap(t),t||jr("revert")},Rp=function(e,t){Ye.cache++,(t||!Dn)&&Ye.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(ju=e,qe.history.scrollRestoration!==e&&(qe.history.scrollRestoration=e))},Dn,Zr=0,ih,sg=function(){if(ih!==Zr){var e=ih=Zr;requestAnimationFrame(function(){return e===Zr&&Vr(!0)})}},Cp=function(){_t.appendChild(Fs),ef=!Cn&&Fs.offsetHeight||qe.innerHeight,_t.removeChild(Fs)},rh=function(e){return za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Vr=function(e,t){if(Jn=xt.documentElement,_t=xt.body,Qu=[qe,xt,Jn,_t],hi&&!e&&!yr){on(Ke,"scrollEnd",bp);return}Cp(),Dn=Ke.isRefreshing=!0,yr||wp();var n=jr("refreshInit");pp&&Ke.sort(),t||af(),Ye.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Xe.slice(0).forEach(function(i){return i.refresh()}),yr=!1,Xe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Bc=1,rh(!0),Xe.forEach(function(i){var s=Pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),rh(!1),Bc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ye.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Rp(ju,1),cl.pause(),Zr++,Dn=2,Ki(2),Xe.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=Ke.isRefreshing=!1,jr("refresh")},kc=0,Vo=1,Ra,Ki=function(e){if(e===2||!Dn&&!yr){Ke.isUpdating=!0,Ra&&Ra.update(0);var t=Xe.length,n=Sn(),i=n-Bl>=50,s=t&&Xe[0].scroll();if(Vo=kc>s?-1:1,Dn||(kc=s),i&&(hi&&!yl&&n-hi>200&&(hi=0,jr("scrollEnd")),fa=Bl,Bl=n),Vo<0){for(Pn=t;Pn-- >0;)Xe[Pn]&&Xe[Pn].update(0,i);Vo=1}else for(Pn=0;Pn<t;Pn++)Xe[Pn]&&Xe[Pn].update(0,i);Ke.isUpdating=!1}ka=0},Gc=[Ep,yp,nf,tf,oi+wa,oi+Ta,oi+Aa,oi+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wo=Gc.concat([$r,Kr,"boxSizing","max"+Xs,"max"+rf,"position",oi,$t,$t+Aa,$t+Ta,$t+wa,$t+ba]),ag=function(e,t,n){Os(n);var i=e._gsap;if(i.spacerIsNative)Os(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},kl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Gc.length,a=t.style,o=e.style,l;s--;)l=Gc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[nf]=o[tf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[$r]=ul(e,Ln)+jt,a[Kr]=ul(e,en)+jt,a[$t]=o[oi]=o[yp]=o[Ep]="0",Os(i),o[$r]=o["max"+Xs]=n[$r],o[Kr]=o["max"+rf]=n[Kr],o[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},og=/([A-Z])/g,Os=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(og,"-$1").toLowerCase())}},co=function(e){for(var t=Wo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Wo[s],n[Wo[s]]);return i.t=e,i},lg=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Xo={left:0,top:0},sh=function(e,t,n,i,s,a,o,l,c,u,d,h,f,m){yn(e)&&(e=e(l)),Kn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Go("0"+e.substr(3),n):0));var x=f?f.time():0,p,_,S;if(f&&f.seek(0),isNaN(e)||(e=+e),pa(e))f&&(e=we.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Ho(o,n,i,!0);else{yn(t)&&(t=t(l));var b=(e||"0").split(" "),v,T,A,g;S=In(t,l)||_t,v=Yi(S)||{},(!v||!v.left&&!v.top)&&li(S).display==="none"&&(g=S.style.display,S.style.display="block",v=Yi(S),g?S.style.display=g:S.style.removeProperty("display")),T=Go(b[0],v[i.d]),A=Go(b[1]||"0",n),e=v[i.p]-c[i.p]-u+T+s-A,o&&Ho(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var y=e+n,P=a._isStart;p="scroll"+i.d2,Ho(a,y,i,P&&y>20||!P&&(d?Math.max(_t[p],Jn[p]):a.parentNode[p])<=y+1),d&&(c=Yi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+jt))}return f&&S&&(p=Yi(S),f.seek(h),_=Yi(S),f._caScrollDist=p[i.p]-_[i.p],e=e/f._caScrollDist*h),f&&f.seek(x),f?e:Math.round(e)},cg=/(webkit|moz|length|cssText|inset)/i,ah=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=li(e);for(a in o)!+a&&!cg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Pp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},uo=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},oh=function(e,t){var n=Rr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,m={};c=c||n();var x=Pp(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return x(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){Ye.cache++,a.tween&&Ki()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=we.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),Ke.isTouch&&on(e,"touchmove",n.wheelHandler),s},Ke=(function(){function r(t,n){Ts||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Oc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ha){this.update=this.refresh=this.kill=Ai;return}n=eh(Kn(n)||pa(n)||n.nodeType?{trigger:n}:n,oo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,m=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,S=s.onSnapComplete,b=s.once,v=s.snap,T=s.pinReparent,A=s.pinSpacer,g=s.containerAnimation,y=s.fastScrollEnd,P=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:en,I=!d&&d!==0,N=In(n.scroller||qe),V=we.core.getCache(N),D=Jr(N),k=("pinType"in n?n.pinType:Er(N,"pinType")||D&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=I&&n.toggleActions.split(" "),te="markers"in n?n.markers:oo.markers,W=D?0:parseFloat(li(N)["border"+R.p2+Xs])||0,C=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Me=j_(N,D,R),Fe=eg(N,D),K=0,ue=0,Se=0,ye=Rr(N,R),me,Ie,gt,Ae,ke,De,Ue,ut,st,$,Ze,Vt,Mt,tt,Ut,kt,F,dt,at,ze,fe,ft,Le,Oe,w,M,z,se,ie,ce,_e,G,Q,le,L,J,Z,he,oe;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=N,C.scroll=g?g.time.bind(g):ye,Ae=ye(),yr&&ye.rec==null&&(ye.rec=Ae),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(pp=1,n.refreshPriority===-9999&&(Ra=C)),V.tweenScroll=V.tweenScroll||{top:oh(N,en),left:oh(N,Ln)},C.tweenTo=me=V.tweenScroll[R.p],C.scrubDuration=function(j){Q=pa(j)&&j,Q?G?G.duration(j):G=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return _&&_(C)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),ce=0,l||(l=i.vars.id)),v&&((!Gr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _t.style&&we.set(D?[_t,Jn]:N,{scrollBehavior:"auto"}),Ye.forEach(function(j){return yn(j)&&j.target===(D?xt.scrollingElement||Jn:N)&&(j.smooth=!1)}),gt=yn(v.snapTo)?v.snapTo:v.snapTo==="labels"?ng(i):v.snapTo==="labelsDirectional"?ig(i):v.directional!==!1?function(j,ge){return sf(v.snapTo)(j,Sn()-ue<500?0:ge.direction)}:we.utils.snap(v.snapTo),le=v.duration||{min:.1,max:2},le=Gr(le)?ya(le.min,le.max):ya(le,le),L=we.delayedCall(v.delay||Q/2||.1,function(){var j=ye(),ge=Sn()-ue<500,ee=me.tween;if((ge||Math.abs(C.getVelocity())<10)&&!ee&&!yl&&K!==j){var Te=(j-De)/tt,Je=i&&!I?i.totalProgress():Te,He=ge?0:(Je-_e)/(Sn()-fa)*1e3||0,wt=we.utils.clamp(-Te,1-Te,cs(He/2)*He/.185),Wt=Te+(v.inertia===!1?0:wt),Rt,Et,mt=v,Zt=mt.onStart,yt=mt.onInterrupt,pn=mt.onComplete;if(Rt=gt(Wt,C),pa(Rt)||(Rt=Wt),Et=Math.max(0,Math.round(De+Rt*tt)),j<=Ue&&j>=De&&Et!==j){if(ee&&!ee._initted&&ee.data<=cs(Et-j))return;v.inertia===!1&&(wt=Rt-Te),me(Et,{duration:le(cs(Math.max(cs(Wt-Je),cs(Rt-Je))*.185/He/.05||0)),ease:v.ease||"power3",data:cs(Et-j),onInterrupt:function(){return L.restart(!0)&&yt&&ls(C,yt)},onComplete:function(){C.update(),K=ye(),i&&!I&&(G?G.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),ce=_e=i&&!I?i.totalProgress():C.progress,S&&S(C),pn&&ls(C,pn)}},j,wt*tt,Et-j-wt*tt),Zt&&ls(C,Zt,me.tween)}}else C.isActive&&K!==j&&L.restart(!0)}).pause()),l&&(zc[l]=C),h=C.trigger=In(h||f!==!0&&f),oe=h&&h._gsap&&h._gsap.stRevert,oe&&(oe=oe(C)),f=f===!0?h:In(f),Kn(o)&&(o={targets:h,className:o}),f&&(m===!1||m===oi||(m=!m&&f.parentNode&&f.parentNode.style&&li(f.parentNode).display==="flex"?!1:$t),C.pin=f,Ie=we.core.getCache(f),Ie.spacer?Ut=Ie.pinState:(A&&(A=In(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ie.spacerIsNative=!!A,A&&(Ie.spacerState=co(A))),Ie.spacer=dt=A||xt.createElement("div"),dt.classList.add("pin-spacer"),l&&dt.classList.add("pin-spacer-"+l),Ie.pinState=Ut=co(f)),n.force3D!==!1&&we.set(f,{force3D:!0}),C.spacer=dt=Ie.spacer,ie=li(f),Oe=ie[m+R.os2],ze=we.getProperty(f),fe=we.quickSetter(f,R.a,jt),kl(f,dt,ie),F=co(f)),te){Vt=Gr(te)?eh(te,th):th,$=lo("scroller-start",l,N,R,Vt,0),Ze=lo("scroller-end",l,N,R,Vt,0,$),at=$["offset"+R.op.d2];var de=In(Er(N,"content")||N);ut=this.markerStart=lo("start",l,de,R,Vt,at,0,g),st=this.markerEnd=lo("end",l,de,R,Vt,at,0,g),g&&(he=we.quickSetter([ut,st],R.a,jt)),!k&&!(Ni.length&&Er(N,"fixedMarkers")===!0)&&(tg(D?_t:N),we.set([$,Ze],{force3D:!0}),M=we.quickSetter($,R.a,jt),se=we.quickSetter(Ze,R.a,jt))}if(g){var ae=g.vars.onUpdate,pe=g.vars.onUpdateParams;g.eventCallback("onUpdate",function(){C.update(0,0,1),ae&&ae.apply(g,pe||[])})}if(C.previous=function(){return Xe[Xe.indexOf(C)-1]},C.next=function(){return Xe[Xe.indexOf(C)+1]},C.revert=function(j,ge){if(!ge)return C.kill(!0);var ee=j!==!1||!C.enabled,Te=vn;ee!==C.isReverted&&(ee&&(J=Math.max(ye(),C.scroll.rec||0),Se=C.progress,Z=i&&i.progress()),ut&&[ut,st,$,Ze].forEach(function(Je){return Je.style.display=ee?"none":"block"}),ee&&(vn=C,C.update(ee)),f&&(!T||!C.isActive)&&(ee?ag(f,dt,Ut):kl(f,dt,li(f),w)),ee||C.update(ee),vn=Te,C.isReverted=ee)},C.refresh=function(j,ge,ee,Te){if(!((vn||!C.enabled)&&!ge)){if(f&&j&&hi){on(r,"scrollEnd",bp);return}!Dn&&ne&&ne(C),vn=C,me.tween&&!ee&&(me.tween.kill(),me.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(B){return B.vars.immediateRender&&B.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Je=Me(),He=Fe(),wt=g?g.duration():Pi(N,R),Wt=tt<=.01||!tt,Rt=0,Et=Te||0,mt=Gr(ee)?ee.end:n.end,Zt=n.endTrigger||h,yt=Gr(ee)?ee.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),pn=C.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,C),Wn=h&&Math.max(0,Xe.indexOf(C))||0,Ft=Wn,Xt,Jt,Xn,as,Qt,Ot,ri,js,Ja,ir,E,U,Y;for(te&&Gr(ee)&&(U=we.getProperty($,R.p),Y=we.getProperty(Ze,R.p));Ft-- >0;)Ot=Xe[Ft],Ot.end||Ot.refresh(0,1)||(vn=C),ri=Ot.pin,ri&&(ri===h||ri===f||ri===pn)&&!Ot.isReverted&&(ir||(ir=[]),ir.unshift(Ot),Ot.revert(!0,!0)),Ot!==Xe[Ft]&&(Wn--,Ft--);for(yn(yt)&&(yt=yt(C)),yt=Zf(yt,"start",C),De=sh(yt,h,Je,R,ye(),ut,$,C,He,W,k,wt,g,C._startClamp&&"_startClamp")||(f?-.001:0),yn(mt)&&(mt=mt(C)),Kn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Kn(yt)?yt.split(" ")[0]:"")+mt:(Rt=Go(mt.substr(2),Je),mt=Kn(yt)?yt:(g?we.utils.mapRange(0,g.duration(),g.scrollTrigger.start,g.scrollTrigger.end,De):De)+Rt,Zt=h)),mt=Zf(mt,"end",C),Ue=Math.max(De,sh(mt||(Zt?"100% 0":wt),Zt,Je,R,ye()+Rt,st,Ze,C,He,W,k,wt,g,C._endClamp&&"_endClamp"))||-.001,Rt=0,Ft=Wn;Ft--;)Ot=Xe[Ft]||{},ri=Ot.pin,ri&&Ot.start-Ot._pinPush<=De&&!g&&Ot.end>0&&(Xt=Ot.end-(C._startClamp?Math.max(0,Ot.start):Ot.start),(ri===h&&Ot.start-Ot._pinPush<De||ri===pn)&&isNaN(yt)&&(Rt+=Xt*(1-Ot.progress)),ri===f&&(Et+=Xt));if(De+=Rt,Ue+=Rt,C._startClamp&&(C._startClamp+=Rt),C._endClamp&&!Dn&&(C._endClamp=Ue||-.001,Ue=Math.min(Ue,Pi(N,R))),tt=Ue-De||(De-=.01)&&.001,Wt&&(Se=we.utils.clamp(0,1,we.utils.normalize(De,Ue,J))),C._pinPush=Et,ut&&Rt&&(Xt={},Xt[R.a]="+="+Rt,pn&&(Xt[R.p]="-="+ye()),we.set([ut,st],Xt)),f&&!(Bc&&C.end>=Pi(N,R)))Xt=li(f),as=R===en,Xn=ye(),ft=parseFloat(ze(R.a))+Et,!wt&&Ue>1&&(E=(D?xt.scrollingElement||Jn:N).style,E={style:E,value:E["overflow"+R.a.toUpperCase()]},D&&li(_t)["overflow"+R.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+R.a.toUpperCase()]="scroll")),kl(f,dt,Xt),F=co(f),Jt=Yi(f,!0),js=k&&Rr(N,as?Ln:en)(),m?(w=[m+R.os2,tt+Et+jt],w.t=dt,Ft=m===$t?ul(f,R)+tt+Et:0,Ft&&(w.push(R.d,Ft+jt),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Ft+jt)),Os(w),pn&&Xe.forEach(function(B){B.pin===pn&&B.vars.pinSpacing!==!1&&(B._subPinOffset=!0)}),k&&ye(J)):(Ft=ul(f,R),Ft&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Ft+jt)),k&&(Qt={top:Jt.top+(as?Xn-De:js)+jt,left:Jt.left+(as?js:Xn-De)+jt,boxSizing:"border-box",position:"fixed"},Qt[$r]=Qt["max"+Xs]=Math.ceil(Jt.width)+jt,Qt[Kr]=Qt["max"+rf]=Math.ceil(Jt.height)+jt,Qt[oi]=Qt[oi+Aa]=Qt[oi+Ta]=Qt[oi+wa]=Qt[oi+ba]="0",Qt[$t]=Xt[$t],Qt[$t+Aa]=Xt[$t+Aa],Qt[$t+Ta]=Xt[$t+Ta],Qt[$t+wa]=Xt[$t+wa],Qt[$t+ba]=Xt[$t+ba],kt=lg(Ut,Qt,T),Dn&&ye(0)),i?(Ja=i._initted,Fl(1),i.render(i.duration(),!0,!0),Le=ze(R.a)-ft+tt+Et,z=Math.abs(tt-Le)>1,k&&z&&kt.splice(kt.length-2,2),i.render(0,!0,!0),Ja||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Fl(0)):Le=tt,E&&(E.value?E.style["overflow"+R.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+R.a));else if(h&&ye()&&!g)for(Jt=h.parentNode;Jt&&Jt!==_t;)Jt._pinOffset&&(De-=Jt._pinOffset,Ue-=Jt._pinOffset),Jt=Jt.parentNode;ir&&ir.forEach(function(B){return B.revert(!1,!0)}),C.start=De,C.end=Ue,Ae=ke=Dn?J:ye(),!g&&!Dn&&!yr&&(Ae<J&&ye(J),C.scroll.rec=0),C.revert(!1,!0),ue=Sn(),L&&(K=-1,L.restart(!0)),vn=0,i&&I&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),(Wt||Se!==C.progress||g||x||i&&!i._initted)&&(i&&!I&&(i._initted||Se||i.vars.immediateRender!==!1)&&i.totalProgress(g&&De<-.001&&!Se?we.utils.normalize(De,Ue,0):Se,!0),C.progress=Wt||(Ae-De)/tt===Se?0:Se),f&&m&&(dt._pinOffset=Math.round(C.progress*Le)),G&&G.invalidate(),isNaN(U)||(U-=we.getProperty($,R.p),Y-=we.getProperty(Ze,R.p),uo($,R,U),uo(ut,R,U-(Te||0)),uo(Ze,R,Y),uo(st,R,Y-(Te||0))),Wt&&!Dn&&C.update(),u&&!Dn&&!Mt&&(Mt=!0,u(C),Mt=!1)}},C.getVelocity=function(){return(ye()-ke)/(Sn()-fa)*1e3||0},C.endAnimation=function(){na(C.callbackAnimation),i&&(G?G.progress(1):i.paused()?I||na(i,C.direction<0,1):na(i,i.reversed()))},C.labelToScroll=function(j){return i&&i.labels&&(De||C.refresh()||De)+i.labels[j]/i.duration()*tt||0},C.getTrailing=function(j){var ge=Xe.indexOf(C),ee=C.direction>0?Xe.slice(0,ge).reverse():Xe.slice(ge+1);return(Kn(j)?ee.filter(function(Te){return Te.vars.preventOverlaps===j}):ee).filter(function(Te){return C.direction>0?Te.end<=De:Te.start>=Ue})},C.update=function(j,ge,ee){if(!(g&&!ee&&!j)){var Te=Dn===!0?J:C.scroll(),Je=j?0:(Te-De)/tt,He=Je<0?0:Je>1?1:Je||0,wt=C.progress,Wt,Rt,Et,mt,Zt,yt,pn,Wn;if(ge&&(ke=Ae,Ae=g?ye():Te,v&&(_e=ce,ce=i&&!I?i.totalProgress():He)),p&&f&&!vn&&!io&&hi&&(!He&&De<Te+(Te-ke)/(Sn()-fa)*p?He=1e-4:He===1&&Ue>Te+(Te-ke)/(Sn()-fa)*p&&(He=.9999)),He!==wt&&C.enabled){if(Wt=C.isActive=!!He&&He<1,Rt=!!wt&&wt<1,yt=Wt!==Rt,Zt=yt||!!He!=!!wt,C.direction=He>wt?1:-1,C.progress=He,Zt&&!vn&&(Et=He&&!wt?0:He===1?1:wt===1?2:3,I&&(mt=!yt&&O[Et+1]!=="none"&&O[Et+1]||O[Et],Wn=i&&(mt==="complete"||mt==="reset"||mt in i))),P&&(yt||Wn)&&(Wn||d||!i)&&(yn(P)?P(C):C.getTrailing(P).forEach(function(Xn){return Xn.endAnimation()})),I||(G&&!vn&&!io?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",He,i._tTime/i._tDur):(G.vars.totalProgress=He,G.invalidate().restart())):i&&i.totalProgress(He,!!(vn&&(ue||j)))),f){if(j&&m&&(dt.style[m+R.os2]=Oe),!k)fe(da(ft+Le*He));else if(Zt){if(pn=!j&&He>wt&&Ue+1>Te&&Te+1>=Pi(N,R),T)if(!j&&(Wt||pn)){var Ft=Yi(f,!0),Xt=Te-De;ah(f,_t,Ft.top+(R===en?Xt:0)+jt,Ft.left+(R===en?0:Xt)+jt)}else ah(f,dt);Os(Wt||pn?kt:F),z&&He<1&&Wt||fe(ft+(He===1&&!pn?Le:0))}}v&&!me.tween&&!vn&&!io&&L.restart(!0),o&&(yt||b&&He&&(He<1||!Ol))&&za(o.targets).forEach(function(Xn){return Xn.classList[Wt||b?"add":"remove"](o.className)}),a&&!I&&!j&&a(C),Zt&&!vn?(I&&(Wn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(C)),(yt||!Ol)&&(c&&yt&&ls(C,c),q[Et]&&ls(C,q[Et]),b&&(He===1?C.kill(!1,1):q[Et]=0),yt||(Et=He===1?1:3,q[Et]&&ls(C,q[Et]))),y&&!Wt&&Math.abs(C.getVelocity())>(pa(y)?y:2500)&&(na(C.callbackAnimation),G?G.progress(1):na(i,mt==="reverse"?1:!He,1))):I&&a&&!vn&&a(C)}if(se){var Jt=g?Te/g.duration()*(g._caScrollDist||0):Te;M(Jt+($._isFlipped?1:0)),se(Jt)}he&&he(-Te/g.duration()*(g._caScrollDist||0))}},C.enable=function(j,ge){C.enabled||(C.enabled=!0,on(N,"resize",ma),D||on(N,"scroll",us),ne&&on(r,"refreshInit",ne),j!==!1&&(C.progress=Se=0,Ae=ke=K=ye()),ge!==!1&&C.refresh())},C.getTween=function(j){return j&&me?me.tween:G},C.setPositions=function(j,ge,ee,Te){if(g){var Je=g.scrollTrigger,He=g.duration(),wt=Je.end-Je.start;j=Je.start+wt*j/He,ge=Je.start+wt*ge/He}C.refresh(!1,!1,{start:Jf(j,ee&&!!C._startClamp),end:Jf(ge,ee&&!!C._endClamp)},Te),C.update()},C.adjustPinSpacing=function(j){if(w&&j){var ge=w.indexOf(R.d)+1;w[ge]=parseFloat(w[ge])+j+jt,w[1]=parseFloat(w[1])+j+jt,Os(w)}},C.disable=function(j,ge){if(j!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,ge||G&&G.pause(),J=0,Ie&&(Ie.uncache=1),ne&&an(r,"refreshInit",ne),L&&(L.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!D)){for(var ee=Xe.length;ee--;)if(Xe[ee].scroller===N&&Xe[ee]!==C)return;an(N,"resize",ma),D||an(N,"scroll",us)}},C.kill=function(j,ge){C.disable(j,ge),G&&!ge&&G.kill(),l&&delete zc[l];var ee=Xe.indexOf(C);ee>=0&&Xe.splice(ee,1),ee===Pn&&Vo>0&&Pn--,ee=0,Xe.forEach(function(Te){return Te.scroller===C.scroller&&(ee=1)}),ee||Dn||yr||(C.scroll.rec=0),i&&(i.scrollTrigger=null,j&&i.revert({kill:!1}),ge||i.kill()),ut&&[ut,st,$,Ze].forEach(function(Te){return Te.parentNode&&Te.parentNode.removeChild(Te)}),Ra===C&&(Ra=0),f&&(Ie&&(Ie.uncache=1),ee=0,Xe.forEach(function(Te){return Te.pin===f&&ee++}),ee||(Ie.spacer=0)),n.onKill&&n.onKill(C)},Xe.push(C),C.enable(!1,!1),oe&&oe(C),i&&i.add&&!tt){var re=C.update;C.update=function(){C.update=re,Ye.cache++,De||Ue||C.refresh()},we.delayedCall(.01,C.update),tt=.01,De=Ue=0}else C.refresh();f&&sg()},r.register=function(n){return Ts||(we=n||vp(),xp()&&window.document&&r.enable(),Ts=ha),Ts},r.defaults=function(n){if(n)for(var i in n)oo[i]=n[i];return oo},r.disable=function(n,i){ha=0,Xe.forEach(function(a){return a[i?"kill":"disable"](n)}),an(qe,"wheel",us),an(xt,"scroll",us),clearInterval(no),an(xt,"touchcancel",Ai),an(_t,"touchstart",Ai),so(an,xt,"pointerdown,touchstart,mousedown",Qf),so(an,xt,"pointerup,touchend,mouseup",jf),cl.kill(),ro(an);for(var s=0;s<Ye.length;s+=3)ao(an,Ye[s],Ye[s+1]),ao(an,Ye[s],Ye[s+2])},r.enable=function(){if(qe=window,xt=document,Jn=xt.documentElement,_t=xt.body,we){if(za=we.utils.toArray,ya=we.utils.clamp,Oc=we.core.context||Ai,Fl=we.core.suppressOverwrites||Ai,ju=qe.history.scrollRestoration||"auto",kc=qe.pageYOffset||0,we.core.globals("ScrollTrigger",r),_t){ha=1,Fs=document.createElement("div"),Fs.style.height="100vh",Fs.style.position="absolute",Cp(),Q_(),Ht.register(we),r.isTouch=Ht.isTouch,ur=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fc=Ht.isTouch===1,on(qe,"wheel",us),Qu=[qe,xt,Jn,_t],we.matchMedia?(r.matchMedia=function(u){var d=we.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},we.addEventListener("matchMediaInit",function(){wp(),af()}),we.addEventListener("matchMediaRevert",function(){return Ap()}),we.addEventListener("matchMedia",function(){Vr(0,1),jr("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return zl(),zl})):console.warn("Requires GSAP 3.11.0 or later"),zl(),on(xt,"scroll",us);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Yi(_t),en.m=Math.round(o.top+en.sc())||0,Ln.m=Math.round(o.left+Ln.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),no=setInterval(nh,250),we.delayedCall(.5,function(){return io=0}),on(xt,"touchcancel",Ai),on(_t,"touchstart",Ai),so(on,xt,"pointerdown,touchstart,mousedown",Qf),so(on,xt,"pointerup,touchend,mouseup",jf),Uc=we.utils.checkPrefix("transform"),Wo.push(Uc),Ts=Sn(),cl=we.delayedCall(.2,Vr).pause(),bs=[xt,"visibilitychange",function(){var u=qe.innerWidth,d=qe.innerHeight;xt.hidden?($f=u,Kf=d):($f!==u||Kf!==d)&&ma()},xt,"DOMContentLoaded",Vr,qe,"load",Vr,qe,"resize",ma],ro(on),Xe.forEach(function(u){return u.enable(0,1)}),l=0;l<Ye.length;l+=3)ao(an,Ye[l],Ye[l+1]),ao(an,Ye[l],Ye[l+2])}else if(xt){var c=function u(){r.enable(),xt.removeEventListener("DOMContentLoaded",u)};xt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ol=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(no)||(no=i)&&setInterval(nh,i),"ignoreMobileResize"in n&&(Fc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ro(an)||ro(on,n.autoRefreshEvents||"none"),mp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=In(n),a=Ye.indexOf(s),o=Jr(s);~a&&Ye.splice(a,o?6:2),i&&(o?Ni.unshift(qe,i,_t,i,Jn,i):Ni.unshift(s,i))},r.clearMatchMedia=function(n){Xe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Kn(n)?In(n):n).getBoundingClientRect(),o=a[s?$r:Kr]*i||0;return s?a.right-o>0&&a.left+o<qe.innerWidth:a.bottom-o>0&&a.top+o<qe.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=In(n));var a=n.getBoundingClientRect(),o=a[s?$r:Kr],l=i==null?o/2:i in fl?fl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/qe.innerWidth:(a.top+l)/qe.innerHeight},r.killAll=function(n){if(Xe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(s){return s()})}},r})();Ke.version="3.15.1";Ke.saveStyles=function(r){return r?za(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Oc())}}):$n};Ke.revert=function(r,e){return af(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?ma(!0):(Ts||Ke.register())&&Vr(!0)};Ke.update=function(r){return++Ye.cache&&Ki(r===!0?2:0)};Ke.clearScrollMemory=Rp;Ke.maxScroll=function(r,e){return Pi(r,e?Ln:en)};Ke.getScrollFunc=function(r,e){return Rr(In(r),e?Ln:en)};Ke.getById=function(r){return zc[r]};Ke.getAll=function(){return Xe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!hi};Ke.snapDirectional=sf;Ke.addEventListener=function(r,e){var t=Qr[r]||(Qr[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=we.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),h.push(m),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&yn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return yn(s)&&(s=s(),on(Ke,"refresh",function(){return s=e.batchMax()})),za(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ke.create(c))}),t};var lh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===Jn&&r(_t,t)},fo={auto:1,scroll:1},ug=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||we.core.getCache(s),o=Sn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fo[(l=li(s)).overflowY]||fo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Jr(s)&&(fo[(l=li(s)).overflowY]||fo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Dp=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ug,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(xt,Ht.eventTypes[0],uh,!1,!0)},onDisable:function(){return an(xt,Ht.eventTypes[0],uh,!0)}})},fg=/(input|label|select|textarea)/i,ch,uh=function(e){var t=fg.test(e.target.tagName);(t||ch)&&(e._gsapAllow=!0,ch=t)},hg=function(e){Gr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=In(e.target)||Jn,u=we.core.globals().ScrollSmoother,d=u&&u.get(),h=ur&&(e.content&&In(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Rr(c,en),m=Rr(c,Ln),x=1,p=(Ht.isTouch&&qe.visualViewport?qe.visualViewport.scale*qe.visualViewport.width:qe.outerWidth)/qe.innerWidth,_=0,S=yn(i)?function(){return i(o)}:function(){return i||2.8},b,v,T=Dp(c,e.type,!0,s),A=function(){return v=!1},g=Ai,y=Ai,P=function(){l=Pi(c,en),y=ya(ur?1:0,l),n&&(g=ya(0,Pi(c,Ln))),b=Zr},R=function(){h._gsap.y=da(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(v){requestAnimationFrame(A);var te=da(o.deltaY/2),W=y(f.v-te);if(h&&W!==f.v+f.offset){f.offset=W-f.v;var C=da((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",f.cacheID=Ye.cache,Ki()}return!0}f.offset&&R(),v=!0},N,V,D,k,q=function(){P(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return ur&&O.type==="touchmove"&&I()||x>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){v=!1;var O=x;x=da((qe.visualViewport&&qe.visualViewport.scale||1)/p),N.pause(),O!==x&&Gl(c,x>1.01?!0:n?!1:"x"),V=m(),D=f(),P(),b=Zr},e.onRelease=e.onGestureStart=function(O,te){if(f.offset&&R(),!te)k.restart(!0);else{Ye.cache++;var W=S(),C,ne;n&&(C=m(),ne=C+W*.05*-O.velocityX/.227,W*=lh(m,C,ne,Pi(c,Ln)),N.vars.scrollX=g(ne)),C=f(),ne=C+W*.05*-O.velocityY/.227,W*=lh(f,C,ne,Pi(c,en)),N.vars.scrollY=y(ne),N.invalidate().duration(W).play(.01),(ur&&N.vars.scrollY>=l||C>=l-1)&&we.to({},{onUpdate:q,duration:W})}a&&a(O)},e.onWheel=function(){N._ts&&N.pause(),Sn()-_>1e3&&(b=0,_=Sn())},e.onChange=function(O,te,W,C,ne){if(Zr!==b&&P(),te&&n&&m(g(C[2]===te?V+(O.startX-O.x):m()+te-C[1])),W){f.offset&&R();var Me=ne[2]===W,Fe=Me?D+O.startY-O.y:f()+W-ne[1],K=y(Fe);Me&&Fe!==K&&(D+=K-Fe),f(K)}(W||te)&&Ki()},e.onEnable=function(){Gl(c,n?!1:"x"),Ke.addEventListener("refresh",q),on(qe,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){Gl(c,!0),an(qe,"resize",q),Ke.removeEventListener("refresh",q),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=ur,ur&&!f()&&f(1),ur&&we.ticker.add(Ai),k=o._dc,N=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pp(f,f(),function(){return N.pause()})},onUpdate:Ki,onComplete:k.vars.onComplete}),o};Ke.sort=function(r){if(yn(r))return Xe.sort(r);var e=qe.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+qe.innerHeight}),Xe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Ht(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return Cn;if(r===!0&&Cn)return Cn.enable();if(r===!1){Cn&&Cn.kill(),Cn=r;return}var e=r instanceof Ht?r:hg(r);return Cn&&Cn.target===e.target&&Cn.kill(),Jr(e.target)&&(Cn=e),e};Ke.core={_getVelocityProp:Nc,_inputObserver:Dp,_scrollers:Ye,_proxies:Ni,bridge:{ss:function(){hi||jr("scrollStart"),hi=Sn()},ref:function(){return vn}}};vp()&&we.registerPlugin(Ke);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="187",dg=0,fh=1,pg=2,qo=1,mg=2,_a=3,es=0,Gn=1,vi=2,Bs=0,Ca=1,Hc=2,hh=3,dh=4,_g=5,As=100,gg=101,xg=102,vg=103,Sg=104,Mg=200,Eg=201,yg=202,Tg=203,Lp=204,Ip=205,bg=206,Ag=207,wg=208,Rg=209,Cg=210,Pg=211,Dg=212,Lg=213,Ig=214,Vc=0,Wc=1,Xc=2,Ga=3,qc=4,Yc=5,$c=6,Kc=7,Np=0,Ng=1,Ug=2,Zi=0,Up=1,Fp=2,Op=3,Bp=4,zp=5,kp=6,Gp=7,Hp=300,qs=301,Ha=302,Hl=303,Vl=304,Zc=1e3,Di=1001,Jc=1002,fn=1003,Fg=1004,ho=1005,Fn=1006,Wl=1007,xr=1008,ci=1009,Vp=1010,Wp=1011,Va=1012,lf=1013,Oi=1014,Li=1015,Bi=1016,cf=1017,uf=1018,Ys=1020,Xp=35902,qp=35899,Yp=1021,$p=1022,Ii=1023,Cr=1026,vr=1027,Kp=1028,ff=1029,ts=1030,hf=1031,df=1033,Yo=33776,$o=33777,Ko=33778,Zo=33779,Qc=35840,jc=35841,eu=35842,tu=35843,nu=36196,iu=37492,ru=37496,su=37488,au=37489,hl=37490,ou=37491,lu=37808,cu=37809,uu=37810,fu=37811,hu=37812,du=37813,pu=37814,mu=37815,_u=37816,gu=37817,xu=37818,vu=37819,Su=37820,Mu=37821,Eu=36492,yu=36494,Tu=36495,bu=36283,Au=36284,dl=36285,wu=36286,Og=3200,ph=0,Bg=1,hr="",Mn="srgb",pl="srgb-linear",ml="linear",vt="srgb",Xl=7680,zg=519,kg=512,Gg=513,Hg=514,Zp=515,Vg=516,Wg=517,Jp=518,Qp=519,Xg=35044,mh="300 es",Mi=2e3,_l=2001;function qg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yg(){const r=Wa("canvas");return r.style.display="block",r}const _h={};function gh(...r){const e="THREE."+r.shift();console.log(e,...r)}function jp(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Be(...r){r=jp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ht(...r){r=jp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Jo(...r){const e=r.join(" ");e in _h||(_h[e]=!0,Be(...r))}function $g(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Kg={[Vc]:Vc,[Xc]:$c,[qc]:qc,[Ga]:Yc,[Wc]:Wc,[$c]:Xc,[Kc]:Kc,[Yc]:Ga};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,Ru=180/Math.PI;function qa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Qe(r,e,t){return Math.max(e,Math.min(t,r))}function Zg(r,e){return(r%e+e)%e}function Yl(r,e,t){return(1-t)*r+t*e}function Jg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qg(r,e){if(e.constructor===Float32Array)return r;const t=pf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function jg(r,e){if(e.constructor===Float32Array)return r;const t=pf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const yf=class yf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yf.prototype.isVector2=!0;let ct=yf;class Js{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(d!==x||l!==h||c!==f||u!==m){let p=l*h+c*f+u*m+d*x;p<0&&(h=-h,f=-f,m=-m,x=-x,p=-p);let _=1-o;if(p<.9995){const S=Math.acos(p),b=Math.sin(S);_=Math.sin(_*S)/b,o=Math.sin(o*S)/b,l=l*_+h*o,c=c*_+f*o,u=u*_+m*o,d=d*_+x*o}else{l=l*_+h*o,c=c*_+f*o,u=u*_+m*o,d=d*_+x*o;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tf=class Tf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tf.prototype.isVector3=!0;let H=Tf;const $l=new H,xh=new Js,bf=class bf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],x=i[0],p=i[3],_=i[6],S=i[1],b=i[4],v=i[7],T=i[2],A=i[5],g=i[8];return s[0]=a*x+o*S+l*T,s[3]=a*p+o*b+l*A,s[6]=a*_+o*v+l*g,s[1]=c*x+u*S+d*T,s[4]=c*p+u*b+d*A,s[7]=c*_+u*v+d*g,s[2]=h*x+f*S+m*T,s[5]=h*p+f*b+m*A,s[8]=h*_+f*v+m*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,m=t*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=h*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Jo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return Jo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return Jo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bf.prototype.isMatrix3=!0;let Ge=bf;const Kl=new Ge,vh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){const r={enabled:!0,workingColorSpace:pl,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hr?ml:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[pl]:{primaries:e,whitePoint:n,transfer:ml,toXYZ:vh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:vh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),r}const nt=e0();function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fs;class t0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Wa("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n0=0;class mf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Zl(i[a].image)):s.push(Zl(i[a]))}else s=Zl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?t0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let i0=0;const Jl=new H;class dn extends ss{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Di,i=Di,s=Fn,a=xr,o=Ii,l=ci,c=dn.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=qa(),this.name="",this.source=new mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Hp;dn.DEFAULT_ANISOTROPY=1;const Af=class Af{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],x=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(f+1)/2,T=(_+1)/2,A=(u+h)/4,g=(d+x)/4,y=(m+p)/4;return b>v&&b>T?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=g/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=y/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=g/s,i=y/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(d-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Af.prototype.isVector4=!0;let Bt=Af;class r0 extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new dn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new mf(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends r0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class em extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const vl=class vl{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,m,x,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,m,x,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=f,_[7]=m,_[11]=x,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,m=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,x=c*d;t[0]=h+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,m=o*u,x=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,o0)}lookAt(e,t,n){const i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),sr.crossVectors(n,qn),sr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),sr.crossVectors(n,qn)),sr.normalize(),po.crossVectors(qn,sr),i[0]=sr.x,i[4]=po.x,i[8]=qn.x,i[1]=sr.y,i[5]=po.y,i[9]=qn.y,i[2]=sr.z,i[6]=po.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],x=n[6],p=n[10],_=n[14],S=n[3],b=n[7],v=n[11],T=n[15],A=i[0],g=i[4],y=i[8],P=i[12],R=i[1],I=i[5],N=i[9],V=i[13],D=i[2],k=i[6],q=i[10],O=i[14],te=i[3],W=i[7],C=i[11],ne=i[15];return s[0]=a*A+o*R+l*D+c*te,s[4]=a*g+o*I+l*k+c*W,s[8]=a*y+o*N+l*q+c*C,s[12]=a*P+o*V+l*O+c*ne,s[1]=u*A+d*R+h*D+f*te,s[5]=u*g+d*I+h*k+f*W,s[9]=u*y+d*N+h*q+f*C,s[13]=u*P+d*V+h*O+f*ne,s[2]=m*A+x*R+p*D+_*te,s[6]=m*g+x*I+p*k+_*W,s[10]=m*y+x*N+p*q+_*C,s[14]=m*P+x*V+p*O+_*ne,s[3]=S*A+b*R+v*D+T*te,s[7]=S*g+b*I+v*k+T*W,s[11]=S*y+b*N+v*q+T*C,s[15]=S*P+b*V+v*O+T*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],x=e[7],p=e[11],_=e[15],S=l*f-c*h,b=o*f-c*d,v=o*h-l*d,T=a*f-c*u,A=a*h-l*u,g=a*d-o*u;return t*(x*S-p*b+_*v)-n*(m*S-p*T+_*A)+i*(m*b-x*T+_*g)-s*(m*v-x*A+p*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],x=e[13],p=e[14],_=e[15],S=t*o-n*a,b=t*l-i*a,v=t*c-s*a,T=n*l-i*o,A=n*c-s*o,g=i*c-s*l,y=u*x-d*m,P=u*p-h*m,R=u*_-f*m,I=d*p-h*x,N=d*_-f*x,V=h*_-f*p,D=S*V-b*N+v*I+T*R-A*P+g*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=(o*V-l*N+c*I)*k,e[1]=(i*N-n*V-s*I)*k,e[2]=(x*g-p*A+_*T)*k,e[3]=(h*A-d*g-f*T)*k,e[4]=(l*R-a*V-c*P)*k,e[5]=(t*V-i*R+s*P)*k,e[6]=(p*v-m*g-_*b)*k,e[7]=(u*g-h*v+f*b)*k,e[8]=(a*N-o*R+c*y)*k,e[9]=(n*R-t*N-s*y)*k,e[10]=(m*A-x*v+_*S)*k,e[11]=(d*v-u*A-f*S)*k,e[12]=(o*P-a*I-l*y)*k,e[13]=(t*I-n*P+i*y)*k,e[14]=(x*b-m*T-p*S)*k,e[15]=(u*T-d*b+h*S)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,m=s*d,x=a*u,p=a*d,_=o*d,S=l*c,b=l*u,v=l*d,T=n.x,A=n.y,g=n.z;return i[0]=(1-(x+_))*T,i[1]=(f+v)*T,i[2]=(m-b)*T,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(h+_))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(m+b)*g,i[9]=(p-S)*g,i[10]=(1-(h+x))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),l=hs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),pi.copy(this);const c=1/a,u=1/o,d=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Mi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===Mi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===_l)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Mi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===Mi)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===_l)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vl.prototype.isMatrix4=!0;let Pt=vl;const hs=new H,pi=new Pt,a0=new H(0,0,0),o0=new H(1,1,1),sr=new H,po=new H,qn=new H,Mh=new Pt,Eh=new Js;class ns{constructor(e=0,t=0,n=0,i=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const yh=new H,ds=new Js,ki=new Pt,mo=new H,ia=new H,c0=new H,u0=new Js,Th=new H(1,0,0),bh=new H(0,1,0),Ah=new H(0,0,1),wh={type:"added"},f0={type:"removed"},ps={type:"childadded",child:null},Ql={type:"childremoved",child:null};class Hn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new H,t=new ns,n=new Js,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ge}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ia,mo,this.up):ki.lookAt(mo,ia,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(ki),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),ps.child=e,this.dispatchEvent(ps),ps.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Hn.DEFAULT_UP=new H(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ps extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),_=this._getHandJoint(c,x);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ps;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},_o={h:0,s:0,l:0};function ec(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Zg(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ec(a,s,e+1/3),this.g=ec(a,s,e),this.b=ec(a,s,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return nt.workingToColorSpace(xn.copy(this),e),Math.round(Qe(xn.r*255,0,255))*65536+Math.round(Qe(xn.g*255,0,255))*256+Math.round(Qe(xn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Mn){nt.workingToColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(_o);const n=Yl(ar.h,_o.h,t),i=Yl(ar.s,_o.s,t),s=Yl(ar.l,_o.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new it;it.NAMES=tm;class gf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class d0 extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new H,Gi=new H,tc=new H,Hi=new H,ms=new H,_s=new H,Rh=new H,nc=new H,ic=new H,rc=new H,sc=new Bt,ac=new Bt,oc=new Bt;class Si{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Gi.subVectors(n,t),tc.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(Gi),l=mi.dot(tc),c=Gi.dot(Gi),u=Gi.dot(tc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return sc.setScalar(0),ac.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sc,s.x),a.addScaledVector(ac,s.y),a.addScaledVector(oc,s.z),a}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Gi.subVectors(e,t),mi.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),mi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ms.subVectors(i,n),_s.subVectors(s,n),nc.subVectors(e,n);const l=ms.dot(nc),c=_s.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,i);const u=ms.dot(ic),d=_s.dot(ic);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(ms,a);rc.subVectors(e,s);const f=ms.dot(rc),m=_s.dot(rc);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(_s,o);const p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return Rh.subVectors(s,i),o=(d-u)/(d-u+(f-m)),t.copy(i).addScaledVector(Rh,o);const _=1/(p+x+h);return a=x*_,o=h*_,t.copy(n).addScaledVector(ms,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ya{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),xo.subVectors(this.max,ra),gs.subVectors(e.a,ra),xs.subVectors(e.b,ra),vs.subVectors(e.c,ra),or.subVectors(xs,gs),lr.subVectors(vs,xs),Ur.subVectors(gs,vs);let t=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Ur.z,Ur.y,or.z,0,-or.x,lr.z,0,-lr.x,Ur.z,0,-Ur.x,-or.y,or.x,0,-lr.y,lr.x,0,-Ur.y,Ur.x,0];return!lc(t,gs,xs,vs,xo)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,gs,xs,vs,xo))?!1:(vo.crossVectors(or,lr),t=[vo.x,vo.y,vo.z],lc(t,gs,xs,vs,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new H,new H,new H,new H,new H,new H,new H,new H],_i=new H,go=new Ya,gs=new H,xs=new H,vs=new H,or=new H,lr=new H,Ur=new H,ra=new H,xo=new H,vo=new H,Fr=new H;function lc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Fr.fromArray(r,s);const o=i.x*Math.abs(Fr.x)+i.y*Math.abs(Fr.y)+i.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=n.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yt=new H,So=new ct;let p0=0;class Tr extends ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xg,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=e!==void 0?pf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):jg(e,this.array)}}class nm extends Tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class im extends Tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qi extends Tr{constructor(e,t,n){super(new Float32Array(e),t,n)}}const m0=new Ya,sa=new H,cc=new H;class Tl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(cc)),this.expandByPoint(sa.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _0=0;const si=new Pt,uc=new Hn,Ss=new H,Yn=new Ya,aa=new Ya,sn=new H;class nr extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?im:nm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Yn.min,aa.min),Yn.expandByPoint(sn),sn.addVectors(Yn.max,aa.max),Yn.expandByPoint(sn)):(Yn.expandByPoint(aa.min),Yn.expandByPoint(aa.max))}Yn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(e,c),sn.add(Ss)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tr(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new H,l[P]=new H;const u=new H,d=new H,h=new H,f=new ct,m=new ct,x=new ct,p=new H,_=new H;function S(P,R,I){c[P]=c[R]=c[I]=1,u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),h.fromBufferAttribute(n,I),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,R),x.fromBufferAttribute(s,I),d.sub(u),h.sub(u),m.sub(f),x.sub(f);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(N),_.copy(h).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(N),o[P].add(p),o[R].add(p),o[I].add(p),l[P].add(_),l[R].add(_),l[I].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,R=b.length;P<R;++P){const I=b[P],N=I.start,V=I.count;for(let D=N,k=N+V;D<k;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new H,T=new H,A=new H,g=new H;function y(P){A.fromBufferAttribute(i,P),g.copy(A);const R=o[P];v.copy(R),v.sub(A.multiplyScalar(A.dot(R))).normalize(),T.crossVectors(g,R);const N=T.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,N)}for(let P=0,R=n.count;P<R;++P)c[P]&&y(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let _=0;_<u;_++)h[m++]=c[f++]}return new Tr(h,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new H,g0=new H,x0=new Ge;class fr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fc.subVectors(n,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(fc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||x0.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let v0=0;class $a extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ca,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lp,this.blendDst=Ip,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wi=new H,hc=new H,Mo=new H,Eo=new H;class xf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hc.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Eo.copy(this.origin).sub(hc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Mo),o=Eo.dot(this.direction),l=-Eo.dot(Mo),c=Eo.lengthSq(),u=Math.abs(1-a*a);let d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=s*u,d>=0)if(h>=-m)if(h<=m){const x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(hc).addScaledVector(Mo,h),f}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);const n=Wi.dot(this.direction),i=Wi.dot(Wi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,_=n.x-a.x,S=n.y-a.y,b=n.z-a.z,v=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let g,y,P,R,I,N,V,D,k,q,O,te;if(v>=T&&v>=A?(P=l,N=d,k=m,te=_,l>=0?(g=c,y=u,R=h,I=f,V=x,D=p,q=S,O=b):(g=u,y=c,R=f,I=h,V=p,D=x,q=b,O=S)):T>=A?(P=c,N=h,k=x,te=S,c>=0?(g=u,y=l,R=f,I=d,V=p,D=m,q=b,O=_):(g=l,y=u,R=d,I=f,V=m,D=p,q=_,O=b)):(P=u,N=f,k=p,te=b,u>=0?(g=l,y=c,R=d,I=h,V=m,D=x,q=_,O=S):(g=c,y=l,R=h,I=d,V=x,D=m,q=S,O=_)),P===0)return null;const W=g/P,C=y/P,ne=1/P,Me=R-W*N,Fe=I-C*N,K=V-W*k,ue=D-C*k,Se=q-W*te,ye=O-C*te,me=Se*ue-ye*K,Ie=Me*ye-Fe*Se,gt=K*Fe-ue*Me;if(i){if(me<0||Ie<0||gt<0)return null}else if((me<0||Ie<0||gt<0)&&(me>0||Ie>0||gt>0))return null;const Ae=me+Ie+gt;if(Ae===0)return null;const ke=ne*(me*N+Ie*k+gt*te);return(Ae>0?ke<0:ke>0)?null:this.at(ke/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cu extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ch=new Pt,Or=new xf,yo=new Tl,Ph=new H,To=new H,bo=new H,Ao=new H,dc=new H,wo=new H,Dh=new H,Ro=new H;class tr extends Hn{constructor(e=new nr,t=new Cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(dc.fromBufferAttribute(d,e),a?wo.addScaledVector(dc,u):wo.addScaledVector(dc.sub(t),u))}t.add(wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(yo.containsPoint(Or.origin)===!1&&(Or.intersectSphere(yo,Ph)===null||Or.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ch.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const p=h[m],_=a[p.materialIndex],S=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,T=b;v<T;v+=3){const A=o.getX(v),g=o.getX(v+1),y=o.getX(v+2);i=Co(this,_,e,n,c,u,d,A,g,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,_=x;p<_;p+=3){const S=o.getX(p),b=o.getX(p+1),v=o.getX(p+2);i=Co(this,a,e,n,c,u,d,S,b,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const p=h[m],_=a[p.materialIndex],S=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,T=b;v<T;v+=3){const A=v,g=v+1,y=v+2;i=Co(this,_,e,n,c,u,d,A,g,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,_=x;p<_;p+=3){const S=p,b=p+1,v=p+2;i=Co(this,a,e,n,c,u,d,S,b,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function S0(r,e,t,n,i,s,a,o){let l;if(e.side===Gn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===es,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ro);return c<t.near||c>t.far?null:{distance:c,point:Ro.clone(),object:r}}function Co(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,To),r.getVertexPosition(l,bo),r.getVertexPosition(c,Ao);const u=S0(r,e,t,n,To,bo,Ao,Dh);if(u){const d=new H;Si.getBarycoord(Dh,To,bo,Ao,d),i&&(u.uv=Si.getInterpolatedAttribute(i,o,l,c,d,new ct)),s&&(u.uv1=Si.getInterpolatedAttribute(s,o,l,c,d,new ct)),a&&(u.normal=Si.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};Si.getNormal(To,bo,Ao,h.normal),u.face=h,u.barycoord=d}return u}class M0 extends dn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=fn,u=fn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Br=new Tl,E0=new ct(.5,.5),Po=new H;class gl{constructor(e=new fr,t=new fr,n=new fr,i=new fr,s=new fr,a=new fr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],m=s[8],x=s[9],p=s[10],_=s[11],S=s[12],b=s[13],v=s[14],T=s[15];if(i[0].setComponents(c-a,f-u,_-m,T-S).normalize(),i[1].setComponents(c+a,f+u,_+m,T+S).normalize(),i[2].setComponents(c+o,f+d,_+x,T+b).normalize(),i[3].setComponents(c-o,f-d,_-x,T-b).normalize(),n)i[4].setComponents(l,h,p,v).normalize(),i[5].setComponents(c-l,f-h,_-p,T-v).normalize();else if(i[4].setComponents(c-l,f-h,_-p,T-v).normalize(),t===Mi)i[5].setComponents(c+l,f+h,_+p,T+v).normalize();else if(t===_l)i[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const t=E0.distanceTo(e.center);return Br.radius=.7071067811865476+t,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Po.x=i.normal.x>0?e.max.x:e.min.x,Po.y=i.normal.y>0?e.max.y:e.min.y,Po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lh=new Pt;class vf{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];Lh.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new gl),n[i].setFromProjectionMatrix(Lh,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new gl),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new vf().copy(this)}}class rm extends $a{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new Pt,Pu=new xf,Do=new Tl,Lo=new H;class y0 extends Hn{constructor(e=new nr,t=new rm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;Ih.copy(i).invert(),Pu.copy(e.ray).applyMatrix4(Ih);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=h,x=f;m<x;m++){const p=c.getX(m);Lo.fromBufferAttribute(d,p),Nh(Lo,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,x=f;m<x;m++)Lo.fromBufferAttribute(d,m),Nh(Lo,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nh(r,e,t,n,i,s,a){const o=Pu.distanceSqToPoint(r);if(o<t){const l=new H;Pu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sm extends dn{constructor(e=[],t=qs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T0 extends dn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $s extends dn{constructor(e,t,n=Oi,i,s,a,o=fn,l=fn,c,u=Cr,d=1){if(u!==Cr&&u!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class am extends $s{constructor(e,t=Oi,n=qs,i,s,a=fn,o=fn,l,c=Cr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class om extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends nr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qi(c,3)),this.setAttribute("normal",new Qi(u,3)),this.setAttribute("uv",new Qi(d,2));function m(x,p,_,S,b,v,T,A,g,y,P){const R=v/g,I=T/y,N=v/2,V=T/2,D=A/2,k=g+1,q=y+1;let O=0,te=0;const W=new H;for(let C=0;C<q;C++){const ne=C*I-V;for(let Me=0;Me<k;Me++){const Fe=Me*R-N;W[x]=Fe*S,W[p]=ne*b,W[_]=D,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[_]=A>0?1:-1,u.push(W.x,W.y,W.z),d.push(Me/g),d.push(1-C/y),O+=1}}for(let C=0;C<y;C++)for(let ne=0;ne<g;ne++){const Me=h+ne+k*C,Fe=h+ne+k*(C+1),K=h+(ne+1)+k*(C+1),ue=h+(ne+1)+k*C;l.push(Me,Fe,ue),l.push(Fe,K,ue),te+=6}o.addGroup(f,te,P),f+=te,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class b0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ct:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new H,i=[],s=[],a=[],o=new H,l=new Pt;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new H)}s[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Qe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Qe(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function Sf(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Uh=new H,Fh=new H,pc=new Sf,mc=new Sf,_c=new Sf;class A0 extends b0{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Fh.subVectors(i[0],i[1]).add(i[0]),c=Fh);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Uh.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Uh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),pc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,x,p),mc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,x,p),_c.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,x,p)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),mc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_c.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(pc.calc(l),mc.calc(l),_c.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Ks extends nr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],x=[],p=[];for(let _=0;_<u;_++){const S=_*h-a;for(let b=0;b<c;b++){const v=b*d-s;m.push(v,-S,0),x.push(0,0,1),p.push(b/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const b=S+c*_,v=S+c*(_+1),T=S+1+c*(_+1),A=S+1+c*_;f.push(b,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new Qi(m,3)),this.setAttribute("normal",new Qi(x,3)),this.setAttribute("uv",new Qi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Oh(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Oh(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const n=Zs(r[t]);for(const i in n)e[i]=n[i]}return e}function Oh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function w0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const R0={clone:Zs,merge:Rn};var C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class is extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(i.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class D0 extends is{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class L0 extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Bh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Bh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Bh(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class N0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const U0=new N0;class Mf{constructor(e){this.manager=e!==void 0?e:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Mf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms=new WeakMap;class F0 extends Mf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=gc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ms.get(a);d===void 0&&(d=[],Ms.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Wa("img");function l(){u(),t&&t(this);const d=Ms.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Ms.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),gc.remove(`image:${e}`);const h=Ms.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onError&&m.onError(d)}Ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gc.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class O0 extends Mf{constructor(e){super(e)}load(e,t,n,i){const s=new dn,a=new F0(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}const Io=new H,No=new Js,yi=new H;class cm extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Io,No,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,No,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Io,No,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,No,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new H,zh=new ct,kh=new ct;class xi extends cm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ru*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ru*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,zh,kh),t.subVectors(kh,zh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ql*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class B0 extends cm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=-90,ys=1;class Du extends Hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xi(Es,ys,e,t);i.layers=this.layers,this.add(i);const s=new xi(Es,ys,e,t);s.layers=this.layers,this.add(s);const a=new xi(Es,ys,e,t);a.layers=this.layers,this.add(a);const o=new xi(Es,ys,e,t);o.layers=this.layers,this.add(o);const l=new xi(Es,ys,e,t);l.layers=this.layers,this.add(l);const c=new xi(Es,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class z0 extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Gh=new Pt;class k0{constructor(e,t,n=0,i=1/0){this.ray=new xf(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gh),this}intersectObject(e,t=!0,n=[]){return Lu(e,this,n,t),n.sort(Hh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Lu(e[i],this,n,t);return n.sort(Hh),n}}function Hh(r,e){return r.distance-e.distance}function Lu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Lu(s[a],e,t,!0)}}function Vh(r,e,t,n){const i=G0(n);switch(t){case Yp:return r*e;case Kp:return r*e/i.components*i.byteLength;case ff:return r*e/i.components*i.byteLength;case ts:return r*e*2/i.components*i.byteLength;case hf:return r*e*2/i.components*i.byteLength;case $p:return r*e*3/i.components*i.byteLength;case Ii:return r*e*4/i.components*i.byteLength;case df:return r*e*4/i.components*i.byteLength;case Yo:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jc:case tu:return Math.max(r,16)*Math.max(e,8)/4;case Qc:case eu:return Math.max(r,8)*Math.max(e,8)/2;case nu:case iu:case su:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ru:case hl:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case hu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case du:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Eu:case yu:case Tu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case bu:case Au:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dl:case wu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(r){switch(r){case ci:case Vp:return{byteLength:1,components:1};case Va:case Wp:case Bi:return{byteLength:2,components:1};case cf:case uf:return{byteLength:2,components:4};case Oi:case lf:case Li:return{byteLength:4,components:1};case Xp:case qp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function um(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function H0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const x=d[f];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:V0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:$0,aomap_fragment:K0,aomap_pars_fragment:Z0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:j0,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ax,clipping_planes_vertex:ox,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:fx,common:hx,defaultnormal_vertex:dx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:_x,emissivemap_pars_fragment:gx,colorspace_fragment:xx,colorspace_pars_fragment:vx,envmap_fragment:Sx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:Ex,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Nx,envmap_vertex:Tx,fog_vertex:bx,fog_pars_vertex:Ax,fog_fragment:wx,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Px,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Lx,lights_pars_begin:Ix,lights_toon_fragment:Ux,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:Bx,lights_physical_fragment:zx,lights_physical_pars_fragment:kx,lights_fragment_begin:Gx,lights_fragment_maps:Hx,lights_fragment_end:Vx,lightprobes_pars_fragment:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:$x,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:Qx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:ev,morphinstance_vertex:tv,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:rv,morphtarget_vertex:sv,normal_fragment_begin:av,normal_fragment_maps:ov,normal_pars_fragment:lv,normal_pars_vertex:cv,normal_vertex:uv,normalmap_pars_fragment:fv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,opaque_fragment:_v,packing:gv,premultiplied_alpha_fragment:xv,project_vertex:vv,dithering_fragment:Sv,dithering_pars_fragment:Mv,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:bv,shadowmap_vertex:Av,shadowmask_pars_fragment:wv,skinbase_vertex:Rv,skinning_pars_vertex:Cv,skinning_vertex:Pv,skinnormal_vertex:Dv,specularmap_fragment:Lv,specularmap_pars_fragment:Iv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Uv,transmission_fragment:Fv,transmission_pars_fragment:Ov,uv_pars_fragment:Bv,uv_pars_vertex:zv,uv_vertex:kv,worldpos_vertex:Gv,background_vert:Hv,background_frag:Vv,backgroundCube_vert:Wv,backgroundCube_frag:Xv,cube_vert:qv,cube_frag:Yv,depth_vert:$v,depth_frag:Kv,distance_vert:Zv,distance_frag:Jv,equirect_vert:Qv,equirect_frag:jv,linedashed_vert:eS,linedashed_frag:tS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:sS,meshmatcap_vert:aS,meshmatcap_frag:oS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:fS,meshphysical_vert:hS,meshphysical_frag:dS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:_S,points_frag:gS,shadow_vert:xS,shadow_frag:vS,sprite_vert:SS,sprite_frag:MS},Ee={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Rn([Ee.points,Ee.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Rn([Ee.common,Ee.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Rn([Ee.sprite,Ee.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Rn([Ee.lights,Ee.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Uo={r:0,b:0,g:0},ES=new Pt,fm=new Ge;fm.set(-1,0,0,0,1,0,0,0,1);function yS(r,e,t,n,i,s){const a=new it(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const v=S.backgroundBlurriness>0;b=e.get(b,v)}return b}function m(S){let b=!1;const v=f(S);v===null?p(a,o):v&&v.isColor&&(p(v,1),b=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(S,b){const v=f(b);v&&v.isCubeTexture?(c===void 0&&(c=new tr(new Ka(1,1,1),new is({name:"BackgroundCubeMaterial",uniforms:Zs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ES.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fm),c.material.toneMapped=nt.getTransfer(v.colorSpace)!==vt,(u!==v||d!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new tr(new Ks(2,2),new is({name:"BackgroundMaterial",uniforms:Zs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,b){S.getRGB(Uo,lm(r)),t.buffers.color.setClear(Uo.r,Uo.g,Uo.b,b,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:m,addToRenderList:x,dispose:_}}function TS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(I,N,V,D,k){let q=!1;const O=d(I,D,V,N);s!==O&&(s=O,c(s.object)),q=f(I,D,V,k),q&&m(I,D,V,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(I,N,V,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function d(I,N,V,D){const k=D.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const O=I.isInstancedMesh===!0?I.id:0;let te=q[O];te===void 0&&(te={},q[O]=te);let W=te[V.id];W===void 0&&(W={},te[V.id]=W);let C=W[k];return C===void 0&&(C=h(l()),W[k]=C),C}function h(I){const N=[],V=[],D=[];for(let k=0;k<t;k++)N[k]=0,V[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,N,V,D){const k=s.attributes,q=N.attributes;let O=0;const te=V.getAttributes();for(const W in te)if(te[W].location>=0){const ne=k[W];let Me=q[W];if(Me===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),ne===void 0||ne.attribute!==Me||Me&&ne.data!==Me.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function m(I,N,V,D){const k={},q=N.attributes;let O=0;const te=V.getAttributes();for(const W in te)if(te[W].location>=0){let ne=q[W];ne===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const Me={};Me.attribute=ne,ne&&ne.data&&(Me.data=ne.data),k[W]=Me,O++}s.attributes=k,s.attributesNum=O,s.index=D}function x(){const I=s.newAttributes;for(let N=0,V=I.length;N<V;N++)I[N]=0}function p(I){_(I,0)}function _(I,N){const V=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;V[I]=1,D[I]===0&&(r.enableVertexAttribArray(I),D[I]=1),k[I]!==N&&(r.vertexAttribDivisor(I,N),k[I]=N)}function S(){const I=s.newAttributes,N=s.enabledAttributes;for(let V=0,D=N.length;V<D;V++)N[V]!==I[V]&&(r.disableVertexAttribArray(V),N[V]=0)}function b(I,N,V,D,k,q,O){O===!0?r.vertexAttribIPointer(I,N,V,k,q):r.vertexAttribPointer(I,N,V,D,k,q)}function v(I,N,V,D){x();const k=D.attributes,q=V.getAttributes(),O=N.defaultAttributeValues;for(const te in q){const W=q[te];if(W.location>=0){let C=k[te];if(C===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(C=I.instanceColor)),C!==void 0){const ne=C.normalized,Me=C.itemSize,Fe=e.get(C);if(Fe===void 0)continue;const K=Fe.buffer,ue=Fe.type,Se=Fe.bytesPerElement,ye=ue===r.INT||ue===r.UNSIGNED_INT||C.gpuType===lf;if(C.isInterleavedBufferAttribute){const me=C.data,Ie=me.isInterleavedBuffer===!0?me.stride:me.itemSize,gt=C.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)_(W.location+Ae,me.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Ae=0;Ae<W.locationSize;Ae++)b(W.location+Ae,Me/W.locationSize,ue,ne,Ie*Se,(gt+Me/W.locationSize*Ae)*Se,ye)}else{if(C.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)_(W.location+me,C.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let me=0;me<W.locationSize;me++)p(W.location+me);r.bindBuffer(r.ARRAY_BUFFER,K);for(let me=0;me<W.locationSize;me++)b(W.location+me,Me/W.locationSize,ue,ne,Me*Se,Me/W.locationSize*me*Se,ye)}}else if(O!==void 0){const ne=O[te];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(W.location,ne);break;case 3:r.vertexAttrib3fv(W.location,ne);break;case 4:r.vertexAttrib4fv(W.location,ne);break;default:r.vertexAttrib1fv(W.location,ne)}}}}S()}function T(){P();for(const I in n){const N=n[I];for(const V in N){const D=N[V];for(const k in D){const q=D[k];for(const O in q)u(q[O].object),delete q[O];delete D[k]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const V in N){const D=N[V];for(const k in D){const q=D[k];for(const O in q)u(q[O].object),delete q[O];delete D[k]}}delete n[I.id]}function g(I){for(const N in n){const V=n[N];for(const D in V){const k=V[D];if(k[I.id]===void 0)continue;const q=k[I.id];for(const O in q)u(q[O].object),delete q[O];delete k[I.id]}}}function y(I){for(const N in n){const V=n[N],D=I.isInstancedMesh===!0?I.id:0,k=V[D];if(k!==void 0){for(const q in k){const O=k[q];for(const te in O)u(O[te].object),delete O[te];delete k[q]}delete V[D],Object.keys(V).length===0&&delete n[N]}}}function P(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function bS(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function AS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(g){return!(g!==Ii&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==ci&&g!==Li&&!y&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:A}}function wS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new fr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,_=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,b=S*4;let v=_.clippingState||null;l.value=v,v=u(m,h,b,f);for(let T=0;T!==b;++T)v[T]=t[T];_.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const _=f+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let b=0,v=f;b!==x;++b,v+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}class Ef extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ka(5,5,5),s=new is({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Bs});s.uniforms.tEquirect.value=t;const a=new tr(i,s),o=t.minFilter;return t.minFilter===xr&&(t.minFilter=Fn),new Du(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Wh=256,RS=3,CS=20,hm=256,dm=16,PS=3,DS=new H,LS=new it;class xl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Du(1,10,null),this._boxMesh=new tr(new Ka(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=DS}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(LS));const p=new Du(n,i,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wh,Jg(e))}_fromTexture(e,t){e.mapping===qs||e.mapping===Ha?this._setSize(e.image.length===0?Wh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Xh(e,!1,!1),n=Math.log2(e)-RS;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===qs||e.mapping===Ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=IS(),this._integrationMaterial=NS());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/dm);for(let a=0;a<=n;a++){const o=xl.lodToRoughness(a,n);if(a>n-PS)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(hm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=US());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function Xh(r,e,t){return new Ef(r,{minFilter:xr,generateMipmaps:e,type:Bi,colorSpace:pl,depthBuffer:t})}function Za(r,e,t){return new is({name:r,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:Gn,blending:Bs,depthTest:!1,depthWrite:!1})}function IS(){return Za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function NS(){return Za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function US(){return Za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${CS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qh(){return Za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yh(){return Za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function FS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Hl||f===Vl)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const x=new Ef(m.height);return x.fromEquirectangularTexture(r,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,m=f===Hl||f===Vl,x=f===qs||f===Ha;if(m||x){let p=t.get(h);const _=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new xl(r)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const S=h.image;return m&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new xl(r)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Hl?h.mapping=qs:f===Vl&&(h.mapping=Ha),h}function l(h){let f=0;const m=6;for(let x=0;x<m;x++)h[x]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function OS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Jo("WebGLRenderer: "+n+" extension not supported."),i}}}function BS(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);const x=s.get(m);x&&(e.remove(x),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(m){const x=m.attributes;for(const p in x)e.update(x[p],r.ARRAY_BUFFER)}function d(m){const x=m.index,p=m.attributes.position;let _=0;if(p===void 0)return;const S=x!==null?x.array.length:p.array.length/3-1,b=p.count>=65535?im:nm,v=new b(Math.ceil(S/3)*6,1),T=v.array;if(x!==null){const g=x.array;_=x.version;for(let y=0,P=0;y<S;y+=3){const R=g[y+0],I=g[y+1],N=g[y+2];T[P++]=R,T[P++]=I,T[P++]=I,T[P++]=N,T[P++]=N,T[P++]=R}}else{_=p.version;for(let g=0,y=0;g<S;g+=3){const P=g+0,R=g+1,I=g+2;T[y++]=P,T[y++]=R,T[y++]=R,T[y++]=I,T[y++]=I,T[y++]=P}}v.version=_;const A=s.get(m);A&&e.remove(A),s.set(m,v)}function h(m){const x=s.get(m);if(x){const p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return s.get(m)}function f(){for(const m in i){const x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function zS(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function GS(r,e,t){const n=new WeakMap,i=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let P=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*T*4*d),g=new em(A,v,T,d);g.type=Li,g.needsUpdate=!0;const y=b*4;for(let R=0;R<d;R++){const I=p[R],N=_[R],V=S[R],D=v*T*4*R;for(let k=0;k<I.count;k++){const q=k*y;f===!0&&(i.fromBufferAttribute(I,k),A[D+q+0]=i.x,A[D+q+1]=i.y,A[D+q+2]=i.z,A[D+q+3]=0),m===!0&&(i.fromBufferAttribute(N,k),A[D+q+4]=i.x,A[D+q+5]=i.y,A[D+q+6]=i.z,A[D+q+7]=0),x===!0&&(i.fromBufferAttribute(V,k),A[D+q+8]=i.x,A[D+q+9]=i.y,A[D+q+10]=i.z,A[D+q+11]=V.itemSize===4?i.w:1)}}h={count:d,texture:g,size:new ct(v,T)},n.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function HS(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const VS={[Up]:"LINEAR_TONE_MAPPING",[Fp]:"REINHARD_TONE_MAPPING",[Op]:"CINEON_TONE_MAPPING",[Bp]:"ACES_FILMIC_TONE_MAPPING",[kp]:"AGX_TONE_MAPPING",[Gp]:"NEUTRAL_TONE_MAPPING",[zp]:"CUSTOM_TONE_MAPPING"};function WS(r,e,t,n,i,s){const a=new Ui(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new nr;u.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const d=new D0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new tr(u,d),f=new B0(-1,1,1,-1,0,1);let m=null,x=null,p=!1,_,S=null,b=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let g=0;g<b.length;g++){const y=b[g];y.setSize&&y.setSize(T,A)}},this.setEffects=function(T){b=T,v=b.length>0&&b[0].isRenderPass===!0;const A=a.width,g=a.height;b.length>0&&o===null&&(o=new Ui(A,g,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new Ui(A,g,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));const y=i===!0&&b.some(P=>P.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new $s(A,g),s===!0&&(c.format=vr,c.type=Ys)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let P=0;P<b.length;P++){const R=b[P];R.setSize&&R.setSize(A,g),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,A){if(p||T.toneMapping===Zi&&b.length===0)return!1;if(S=A,A!==null){const g=A.width,y=A.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return v===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=_,p=!0;let g=a,y=o;for(let P=0;P<b.length;P++){const R=b[P];R.enabled!==!1&&(R.render(T,y,g,A),R.needsSwap!==!1&&(g=y,y=y===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,d.defines={},nt.getTransfer(m)===vt&&(d.defines.SRGB_TRANSFER="");const P=VS[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(S),T.render(h,f),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const pm=new dn,mm=new $s(1,1),_m=new am(1),gm=new em,xm=new s0,vm=new sm,$h=[],Kh=[],Zh=new Float32Array(16),Jh=new Float32Array(9),Qh=new Float32Array(4);function Qs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=$h[i];if(s===void 0&&(s=new Float32Array(i),$h[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function bl(r,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function XS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function YS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function KS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Qh.set(n),r.uniformMatrix2fv(this.addr,!1,Qh),nn(t,n)}}function ZS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Jh.set(n),r.uniformMatrix3fv(this.addr,!1,Jh),nn(t,n)}}function JS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Zh.set(n),r.uniformMatrix4fv(this.addr,!1,Zh),nn(t,n)}}function QS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function nM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function Al(r){return r.version===0&&(r.compareFunction=Qp,r.needsUpdate=!0),r}function aM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Al(mm):s=pm,t.setTexture2D(e||s,i)}function oM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xm,i)}function lM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Al(_m):s=vm,t.setTextureCube(e||s,i)}function cM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gm,i)}function uM(r){switch(r){case 5126:return XS;case 35664:return qS;case 35665:return YS;case 35666:return $S;case 35674:return KS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return QS;case 35667:case 35671:return jS;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}function fM(r,e){r.uniform1fv(this.addr,e)}function hM(r,e){const t=Qs(e,this.size,2);r.uniform2fv(this.addr,t)}function dM(r,e){const t=Qs(e,this.size,3);r.uniform3fv(this.addr,t)}function pM(r,e){const t=Qs(e,this.size,4);r.uniform4fv(this.addr,t)}function mM(r,e){const t=Qs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _M(r,e){const t=Qs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gM(r,e){const t=Qs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xM(r,e){r.uniform1iv(this.addr,e)}function vM(r,e){r.uniform2iv(this.addr,e)}function SM(r,e){r.uniform3iv(this.addr,e)}function MM(r,e){r.uniform4iv(this.addr,e)}function EM(r,e){r.uniform1uiv(this.addr,e)}function yM(r,e){r.uniform2uiv(this.addr,e)}function TM(r,e){r.uniform3uiv(this.addr,e)}function bM(r,e){r.uniform4uiv(this.addr,e)}function AM(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Al(mm):a=pm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function wM(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xm,s[a])}function RM(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Al(_m):a=vm;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function CM(r,e,t){const n=this.cache,i=e.length,s=bl(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||gm,s[a])}function PM(r){switch(r){case 5126:return fM;case 35664:return hM;case 35665:return dM;case 35666:return pM;case 35674:return mM;case 35675:return _M;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return yM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}class DM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class LM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PM(t.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function jh(r,e){r.seq.push(e),r.map[e.id]=e}function NM(r,e,t){const n=r.name,i=n.length;for(xc.lastIndex=0;;){const s=xc.exec(n),a=xc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jh(t,c===void 0?new DM(o,r,e):new LM(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new IM(o),jh(t,d)),t=d}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);NM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ed(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const UM=37297;let FM=0;function OM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const td=new Ge;function BM(r){nt._getMatrix(td,nt.workingColorSpace,r);const e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(r)){case ml:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function nd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+OM(r.getShaderSource(e),o)}else return s}function zM(r,e){const t=BM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const kM={[Up]:"Linear",[Fp]:"Reinhard",[Op]:"Cineon",[Bp]:"ACESFilmic",[kp]:"AgX",[Gp]:"Neutral",[zp]:"Custom"};function GM(r,e){const t=kM[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new H;function HM(){nt.getLuminanceCoefficients(Fo);const r=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function WM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function XM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ga(r){return r!==""}function id(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(r){return r.replace(qM,YM)}function YM(r,e){const t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Iu(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(r){return r.replace($M,KM)}function KM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ad(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZM={[qo]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function JM(r){return ZM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QM={[Ha]:"ENVMAP_MODE_REFRACTION"};function jM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":QM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[Np]:"ENVMAP_BLENDING_MULTIPLY",[Ng]:"ENVMAP_BLENDING_MIX",[Ug]:"ENVMAP_BLENDING_ADD"};function tE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eE[r.combine]||"ENVMAP_BLENDING_NONE"}function nE(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=JM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=jM(t),d=tE(t),h=VM(t),f=WM(s),m=i.createProgram();let x,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ga).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(x=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?We.tonemapping_pars_fragment:"",t.toneMapping!==Zi?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),HM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),a=Iu(a),a=id(a,t),a=rd(a,t),o=Iu(o),o=id(o,t),o=rd(o,t),a=sd(a),o=sd(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=_+x+a,b=_+p+o,v=ed(i,i.VERTEX_SHADER,S),T=ed(i,i.FRAGMENT_SHADER,b);i.attachShader(m,v),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(R){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(m)||"",N=i.getShaderInfoLog(v)||"",V=i.getShaderInfoLog(T)||"",D=I.trim(),k=N.trim(),q=V.trim();let O=!0,te=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,v,T);else{const W=nd(i,v,"vertex"),C=nd(i,T,"fragment");ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+W+`
`+C)}else D!==""?Be("WebGLProgram: Program Info Log:",D):(k===""||q==="")&&(te=!1);te&&(R.diagnostics={runnable:O,programLog:D,vertexShader:{log:k,prefix:x},fragmentShader:{log:q,prefix:p}})}i.deleteShader(v),i.deleteShader(T),g=new Qo(i,m),y=XM(i,m)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,UM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=T,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sE(e),t.set(e,n)),n}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function aE(r){return r===ts||r===hl||r===dl}function oE(r,e,t,n,i,s){const a=new _f,o=new rE,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,y,P,R,I,N){const V=R.fog,D=I.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,O=e.get(g.envMap||k,q),te=h[g.type];let W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Be("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const C=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ne=C!==void 0?C.length:0;let Me=0;D.morphAttributes.position!==void 0&&(Me=1),D.morphAttributes.normal!==void 0&&(Me=2),D.morphAttributes.color!==void 0&&(Me=3);let Fe,K,ue,Se;if(te){const ee=wi[te];Fe=ee.vertexShader,K=ee.fragmentShader}else{Fe=g.vertexShader,K=g.fragmentShader;const ee=o.getVertexShaderStage(g),Te=o.getFragmentShaderStage(g);o.update(g,ee,Te),ue=ee.id,Se=Te.id}const ye=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,gt=I.isBatchedMesh===!0,Ae=!!g.map,ke=!!g.matcap,De=!!O,Ue=De&&O.isPMREMTexture===!0,ut=!!g.aoMap,st=!!g.lightMap,$=!!g.bumpMap&&g.wireframe===!1,Ze=!!g.normalMap,Vt=!!g.displacementMap,Mt=!!g.emissiveMap,tt=!!g.metalnessMap,Ut=!!g.roughnessMap,kt=g.anisotropy>0,F=g.clearcoat>0,dt=g.diffuseRoughness>0,at=g.dispersion>0,ze=g.retroreflectivity>0,fe=g.iridescence>0,ft=g.sheen>0,Le=g.transmission>0,Oe=kt&&!!g.anisotropyMap,w=F&&!!g.clearcoatMap,M=F&&!!g.clearcoatNormalMap,z=F&&!!g.clearcoatRoughnessMap,se=dt&&!!g.diffuseRoughnessMap,ie=fe&&!!g.iridescenceMap,ce=fe&&!!g.iridescenceThicknessMap,_e=ft&&!!g.sheenColorMap,G=ft&&!!g.sheenRoughnessMap,Q=!!g.specularMap,le=!!g.specularColorMap,L=!!g.specularIntensityMap,J=Le&&!!g.transmissionMap,Z=Le&&!!g.thicknessMap,he=!!g.gradientMap,oe=!!g.alphaMap,de=g.alphaTest>0,ae=!!g.alphaHash,pe=!!g.extensions;let re=Zi;g.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(re=r.toneMapping);const j=Ue?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ge={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:K,defines:g.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:gt,batchingColor:gt&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ae,matcap:ke,envMap:De,envMapMode:De&&O.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?j.length-1:null,envMapSize:Ue?j[0].width:null,aoMap:ut,lightMap:st,bumpMap:$,normalMap:Ze,displacementMap:Vt,emissiveMap:Mt,normalMapObjectSpace:Ze&&g.normalMapType===Bg,normalMapTangentSpace:Ze&&g.normalMapType===ph,packedNormalMap:Ze&&g.normalMapType===ph&&aE(g.normalMap.format),metalnessMap:tt,roughnessMap:Ut,anisotropy:kt,anisotropyMap:Oe,clearcoat:F,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:dt,diffuseRoughnessMap:se,dispersion:at,retroreflection:ze,iridescence:fe,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:ft,sheenColorMap:_e,sheenRoughnessMap:G,specularMap:Q,specularColorMap:le,specularIntensityMap:L,transmission:Le,transmissionMap:J,thicknessMap:Z,gradientMap:he,opaque:g.transparent===!1&&g.blending===Ca&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:de,alphaHash:ae,combine:g.combine,mapUv:Ae&&f(g.map.channel),aoMapUv:ut&&f(g.aoMap.channel),lightMapUv:st&&f(g.lightMap.channel),bumpMapUv:$&&f(g.bumpMap.channel),normalMapUv:Ze&&f(g.normalMap.channel),displacementMapUv:Vt&&f(g.displacementMap.channel),emissiveMapUv:Mt&&f(g.emissiveMap.channel),metalnessMapUv:tt&&f(g.metalnessMap.channel),roughnessMapUv:Ut&&f(g.roughnessMap.channel),anisotropyMapUv:Oe&&f(g.anisotropyMap.channel),clearcoatMapUv:w&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:G&&f(g.sheenRoughnessMap.channel),specularMapUv:Q&&f(g.specularMap.channel),specularColorMapUv:le&&f(g.specularColorMap.channel),specularIntensityMapUv:L&&f(g.specularIntensityMap.channel),transmissionMapUv:J&&f(g.transmissionMap.channel),thicknessMapUv:Z&&f(g.thicknessMap.channel),alphaMapUv:oe&&f(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ze||kt),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(Ae||oe),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&Ze===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Me,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(ee=>ee.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Ae&&g.map.isVideoTexture===!0&&nt.getTransfer(g.map.colorSpace)===vt,decodeVideoTextureEmissive:Mt&&g.emissiveMap.isVideoTexture===!0&&nt.getTransfer(g.emissiveMap.colorSpace)===vt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vi,flipSided:g.side===Gn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:pe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&g.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function x(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)y.push(P),y.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(p(y,g),_(y,g),y.push(r.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function p(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function _(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const y=h[g.type];let P;if(y){const R=wi[y];P=R0.clone(R.uniforms)}else P=g.uniforms;return P}function b(g,y){let P=u.get(y);return P!==void 0?++P.usedTimes:(P=new nE(r,y,g,i),c.push(P),u.set(y,P)),P}function v(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:S,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:A}}function lE(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function cE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function od(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ld(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,x,p,_){let S=r[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:_},r[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=m,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=p,S.group=_),e++,S}function l(h,f,m,x,p,_,S){S.reversedDepth===!0&&(p=-p);const b=o(h,f,m,x,p,_);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function c(h,f,m,x,p,_){const S=o(h,f,m,x,p,_);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||cE),n.length>1&&n.sort(f||od),i.length>1&&i.sort(f||od)}function d(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function uE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ld,r.set(n,[a])):i>=s.length?(a=new ld,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function fE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new it};break;case"SpotLight":t={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function hE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dE=0;function pE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function mE(r){const e=new fE,t=hE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new Pt,a=new Pt;function o(c){let u=0,d=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,x=0,p=0,_=0,S=0,b=0,v=0,T=0,A=0,g=0,y=0,P=0,R=0;c.sort(pE);for(let N=0,V=c.length;N<V;N++){const D=c[N],k=D.color,q=D.intensity,O=D.distance;let te=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ts?te=D.shadow.map.texture:te=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*q,d+=k.g*q,h+=k.b*q;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],q);R++}else if(D.isSunLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const C=D.shadow,ne=t.get(D);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[m]=ne,n.sunShadowMap[m]=te;const Me=C.getViewportCount();for(let Fe=0;Fe<Me;Fe++)n.sunShadowMatrix[x+Fe]=C.getMatrix(Fe),n.sunShadowCascade[x+Fe]=C._cascadeData[Fe];x+=Me,m++}n.sun[f]=W,f++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const C=D.shadow,ne=t.get(D);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize=C.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(q),W.distance=O,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[S]=W;const C=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,C.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[S]=C.matrix,D.castShadow){const ne=t.get(D);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize=C.mapSize,n.spotShadow[S]=ne,n.spotShadowMap[S]=te,g++}S++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(k).multiplyScalar(q),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=W,b++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const C=D.shadow,ne=t.get(D);ne.shadowIntensity=C.intensity,ne.shadowBias=C.bias,ne.shadowNormalBias=C.normalBias,ne.shadowRadius=C.radius,ne.shadowMapSize=C.mapSize,ne.shadowCameraNear=C.camera.near,ne.shadowCameraFar=C.camera.far,n.pointShadow[_]=ne,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=D.shadow.matrix,A++}n.point[_]=W,_++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(q),W.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[v]=W,v++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==_||I.spotLength!==S||I.rectAreaLength!==b||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==g||I.numSpotMaps!==y||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=b,n.point.length=_,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=_,I.spotLength=S,I.rectAreaLength=b,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=g,I.numSpotMaps=y,I.numLightProbes=R,n.version=dE++)}function l(c,u){let d=0,h=0,f=0,m=0,x=0,p=0;const _=u.matrixWorldInverse;for(let S=0,b=c.length;S<b;S++){const v=c[S];if(v.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(_),d++}else if(v.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(_),h++}else if(v.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(_),m++}else if(v.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const T=n.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(_),p++}}}return{setup:o,setupView:l,state:n}}function cd(r){const e=new mE(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _E(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new cd(r),e.set(i,[o])):s>=a.length?(o=new cd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vE=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],SE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ud=new Pt,oa=new H,vc=new H;function ME(r,e,t){let n=new gl;const i=new ct,s=new ct,a=new Bt,o=new L0,l=new I0,c={},u=t.maxTextureSize,d={[es]:Gn,[Gn]:es,[vi]:vi},h=new is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gE,fragmentShader:xE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new nr;m.setAttribute("position",new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tr(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let _=this.type;this.render=function(A,g,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===mg&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qo);const P=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Bs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=_!==this.type;V&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=A.length;D<k;D++){const q=A[D],O=q.shadow;if(O===void 0){Be("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const te=O.getFrameExtents();i.multiply(te),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,O.mapSize.y=s.y));const W=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===_a){if(q.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ui(i.x,i.y,{format:ts,type:Bi,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new $s(i.x,i.y,Li),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=Cr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn}else q.isPointLight?(O.map=new Ef(i.x),O.map.depthTexture=new am(i.x,Oi)):(O.map=new Ui(i.x,i.y),O.map.depthTexture=new $s(i.x,i.y,Oi)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=Cr,this.type===qo?(O.map.depthTexture.compareFunction=W?Jp:Zp,O.map.depthTexture.minFilter=Fn,O.map.depthTexture.magFilter=Fn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);const C=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,y);const ne=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:y.layers;for(let Me=0;Me<C;Me++){const Fe=O.getCamera(Me);if(q.isPointLight){const K=O.camera,ue=O.matrix,Se=q.distance||K.far;Se!==K.far&&(K.far=Se,K.updateProjectionMatrix()),oa.setFromMatrixPosition(q.matrixWorld),K.position.copy(oa),vc.copy(K.position),vc.add(vE[Me]),K.up.copy(SE[Me]),K.lookAt(vc),K.updateMatrixWorld(),ue.makeTranslation(-oa.x,-oa.y,-oa.z),ud.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ud,K.coordinateSystem,K.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,Me),r.clear();else{Me===0&&(r.setRenderTarget(O.map),r.clear());const K=O.getViewport(Me);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),N.viewport(a)}n=O.getFrustum(Me),v(g,y,Fe,q,ne,this.type)}O.isPointLightShadow!==!0&&this.type===_a&&S(O,y),O.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(P,R,I)};function S(A,g){const y=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ui(i.x,i.y,{format:ts,type:Bi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(g,null,y,h,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(g,null,y,f,x,null)}function b(A,g,y,P){let R=null;const I=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:o,r.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const N=R.uuid,V=g.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let k=D[V];k===void 0&&(k=R.clone(),D[V]=k,g.addEventListener("dispose",T)),R=k}if(R.visible=g.visible,R.wireframe=g.wireframe,P===_a?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=r.properties.get(R);N.light=y}return R}function v(A,g,y,P,R,I){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===_a)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const D=e.update(A),k=A.material;if(Array.isArray(k)){const q=D.groups;for(let O=0,te=q.length;O<te;O++){const W=q[O],C=k[W.materialIndex];if(C&&C.visible){const ne=b(A,C,P,I);A.onBeforeShadow(r,A,g,y,D,ne,W),r.renderBufferDirect(y,null,D,ne,A,W),A.onAfterShadow(r,A,g,y,D,ne,W)}}}else if(k.visible){const q=b(A,k,P,I);A.onBeforeShadow(r,A,g,y,D,q,null),r.renderBufferDirect(y,null,D,q,A,null),A.onAfterShadow(r,A,g,y,D,q,null)}}const V=A.children;for(let D=0,k=V.length;D<k;D++)v(V[D],g,y,P,R,I)}function T(A){A.target.removeEventListener("dispose",T);for(const y in c){const P=c[y],R=A.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function EE(r,e){function t(){let L=!1;const J=new Bt;let Z=null;const he=new Bt(0,0,0,0);return{setMask:function(oe){Z!==oe&&!L&&(r.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){L=oe},setClear:function(oe,de,ae,pe,re){re===!0&&(oe*=pe,de*=pe,ae*=pe),J.set(oe,de,ae,pe),he.equals(J)===!1&&(r.clearColor(oe,de,ae,pe),he.copy(J))},reset:function(){L=!1,Z=null,he.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,Z=null,he=null,oe=null;return{setReversed:function(de){if(J!==de){const ae=e.get("EXT_clip_control");de?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),J=de;const pe=oe;oe=null,this.setClear(pe)}},getReversed:function(){return J},setTest:function(de){de?me(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(de){Z!==de&&!L&&(r.depthMask(de),Z=de)},setFunc:function(de){if(J&&(de=Kg[de]),he!==de){switch(de){case Vc:r.depthFunc(r.NEVER);break;case Wc:r.depthFunc(r.ALWAYS);break;case Xc:r.depthFunc(r.LESS);break;case Ga:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case Yc:r.depthFunc(r.GEQUAL);break;case $c:r.depthFunc(r.GREATER);break;case Kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=de}},setLocked:function(de){L=de},setClear:function(de){oe!==de&&(oe=de,J&&(de=1-de),r.clearDepth(de))},reset:function(){L=!1,Z=null,he=null,oe=null,J=!1}}}function i(){let L=!1,J=null,Z=null,he=null,oe=null,de=null,ae=null,pe=null,re=null;return{setTest:function(j){L||(j?me(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(j){J!==j&&!L&&(r.stencilMask(j),J=j)},setFunc:function(j,ge,ee){(Z!==j||he!==ge||oe!==ee)&&(r.stencilFunc(j,ge,ee),Z=j,he=ge,oe=ee)},setOp:function(j,ge,ee){(de!==j||ae!==ge||pe!==ee)&&(r.stencilOp(j,ge,ee),de=j,ae=ge,pe=ee)},setLocked:function(j){L=j},setClear:function(j){re!==j&&(r.clearStencil(j),re=j)},reset:function(){L=!1,J=null,Z=null,he=null,oe=null,de=null,ae=null,pe=null,re=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,m=[],x=null,p=!1,_=null,S=null,b=null,v=null,T=null,A=null,g=null,y=new it(0,0,0),P=0,R=!1,I=null,N=null,V=null,D=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,te=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=te>=2);let C=null,ne={};const Me=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),K=new Bt().fromArray(Me),ue=new Bt().fromArray(Fe);function Se(L,J,Z,he){const oe=new Uint8Array(4),de=r.createTexture();r.bindTexture(L,de),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<Z;ae++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(J+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return de}const ye={};ye[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(r.DEPTH_TEST),a.setFunc(Ga),$(!1),Ze(fh),me(r.CULL_FACE),ut(Bs);function me(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ie(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function gt(L,J){return h[L]!==J?(r.bindFramebuffer(L,J),h[L]=J,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=J),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Ae(L,J){let Z=m,he=!1;if(L){Z=f.get(J),Z===void 0&&(Z=[],f.set(J,Z));const oe=L.textures;if(Z.length!==oe.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let de=0,ae=oe.length;de<ae;de++)Z[de]=r.COLOR_ATTACHMENT0+de;Z.length=oe.length,he=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,he=!0);he&&r.drawBuffers(Z)}function ke(L){return x!==L?(r.useProgram(L),x=L,!0):!1}const De={[As]:r.FUNC_ADD,[gg]:r.FUNC_SUBTRACT,[xg]:r.FUNC_REVERSE_SUBTRACT};De[vg]=r.MIN,De[Sg]=r.MAX;const Ue={[Mg]:r.ZERO,[Eg]:r.ONE,[yg]:r.SRC_COLOR,[Lp]:r.SRC_ALPHA,[Cg]:r.SRC_ALPHA_SATURATE,[wg]:r.DST_COLOR,[bg]:r.DST_ALPHA,[Tg]:r.ONE_MINUS_SRC_COLOR,[Ip]:r.ONE_MINUS_SRC_ALPHA,[Rg]:r.ONE_MINUS_DST_COLOR,[Ag]:r.ONE_MINUS_DST_ALPHA,[Pg]:r.CONSTANT_COLOR,[Dg]:r.ONE_MINUS_CONSTANT_COLOR,[Lg]:r.CONSTANT_ALPHA,[Ig]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(L,J,Z,he,oe,de,ae,pe,re,j){if(L===Bs){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(me(r.BLEND),p=!0),L!==_g){if(L!==_||j!==R){if((S!==As||T!==As)&&(r.blendEquation(r.FUNC_ADD),S=As,T=As),j)switch(L){case Ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hc:r.blendFunc(r.ONE,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ht("WebGLState: Invalid blending: ",L);break}else switch(L){case Ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hh:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",L);break}b=null,v=null,A=null,g=null,y.set(0,0,0),P=0,_=L,R=j}return}oe=oe||J,de=de||Z,ae=ae||he,(J!==S||oe!==T)&&(r.blendEquationSeparate(De[J],De[oe]),S=J,T=oe),(Z!==b||he!==v||de!==A||ae!==g)&&(r.blendFuncSeparate(Ue[Z],Ue[he],Ue[de],Ue[ae]),b=Z,v=he,A=de,g=ae),(pe.equals(y)===!1||re!==P)&&(r.blendColor(pe.r,pe.g,pe.b,re),y.copy(pe),P=re),_=L,R=!1}function st(L,J){L.side===vi?Ie(r.CULL_FACE):me(r.CULL_FACE);let Z=L.side===Gn;J&&(Z=!Z),$(Z),L.blending===Ca&&L.transparent===!1?ut(Bs):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function $(L){I!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),I=L)}function Ze(L){L!==dg?(me(r.CULL_FACE),L!==N&&(L===fh?r.cullFace(r.BACK):L===pg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),N=L}function Vt(L){L!==V&&(O&&r.lineWidth(L),V=L)}function Mt(L,J,Z){L?(me(r.POLYGON_OFFSET_FILL),(D!==J||k!==Z)&&(D=J,k=Z,a.getReversed()&&(J=-J,Z=-Z),r.polygonOffset(J,Z))):Ie(r.POLYGON_OFFSET_FILL)}function tt(L){L?me(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Ut(L){L===void 0&&(L=r.TEXTURE0+q-1),C!==L&&(r.activeTexture(L),C=L)}function kt(L,J,Z){Z===void 0&&(C===null?Z=r.TEXTURE0+q-1:Z=C);let he=ne[Z];he===void 0&&(he={type:void 0,texture:void 0},ne[Z]=he),(he.type!==L||he.texture!==J)&&(C!==Z&&(r.activeTexture(Z),C=Z),r.bindTexture(L,J||ye[L]),he.type=L,he.texture=J)}function F(){const L=ne[C];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{r.compressedTexImage2D(...arguments)}catch(L){ht("WebGLState:",L)}}function at(){try{r.compressedTexImage3D(...arguments)}catch(L){ht("WebGLState:",L)}}function ze(){try{r.texSubImage2D(...arguments)}catch(L){ht("WebGLState:",L)}}function fe(){try{r.texSubImage3D(...arguments)}catch(L){ht("WebGLState:",L)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(L){ht("WebGLState:",L)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(L){ht("WebGLState:",L)}}function Oe(){try{r.texStorage2D(...arguments)}catch(L){ht("WebGLState:",L)}}function w(){try{r.texStorage3D(...arguments)}catch(L){ht("WebGLState:",L)}}function M(){try{r.texImage2D(...arguments)}catch(L){ht("WebGLState:",L)}}function z(){try{r.texImage3D(...arguments)}catch(L){ht("WebGLState:",L)}}function se(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function ie(L,J){d[L]!==J&&(r.pixelStorei(L,J),d[L]=J)}function ce(L){K.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function _e(L){ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function G(L,J){let Z=c.get(J);Z===void 0&&(Z=new WeakMap,c.set(J,Z));let he=Z.get(L);he===void 0&&(he=r.getUniformBlockIndex(J,L.name),r.uniformBlockBinding(J,he,he),Z.set(L,he))}function Q(L,J,Z){const oe=c.get(J).get(L);l[oe]!==Z&&(r.bindBufferBase(r.UNIFORM_BUFFER,oe,Z),l[oe]=Z)}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},C=null,ne={},h={},l={},f=new WeakMap,m=[],x=null,p=!1,_=null,S=null,b=null,v=null,T=null,A=null,g=null,y=new it(0,0,0),P=0,R=!1,I=null,N=null,V=null,D=null,k=null,K.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Ie,bindFramebuffer:gt,drawBuffers:Ae,useProgram:ke,setBlending:ut,setMaterial:st,setFlipSided:$,setCullFace:Ze,setLineWidth:Vt,setPolygonOffset:Mt,setScissorTest:tt,activeTexture:Ut,bindTexture:kt,unbindTexture:F,compressedTexImage2D:dt,compressedTexImage3D:at,texImage2D:M,texImage3D:z,pixelStorei:ie,getParameter:se,updateUBOMapping:G,uniformBlockBinding:Q,texStorage2D:Oe,texStorage3D:w,texSubImage2D:ze,texSubImage3D:fe,compressedTexSubImage2D:ft,compressedTexSubImage3D:Le,scissor:ce,viewport:_e,reset:le}}function yE(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,d=new Set;let h;const f=new WeakMap,m=new Set,x=new FinalizationRegistry(w=>m.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return p?new OffscreenCanvas(w,M):Wa("canvas")}function S(w,M,z){let se=1;const ie=Oe(w);if((ie.width>z||ie.height>z)&&(se=z/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ce=Math.floor(se*ie.width),_e=Math.floor(se*ie.height);h===void 0&&(h=_(ce,_e));const G=M?_(ce,_e):h;return G.width=ce,G.height=_e,G.getContext("2d").drawImage(w,0,0,ce,_e),Be("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+_e+")."),G}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),w;return w}function b(w){return w.generateMipmaps}function v(w){r.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(w,M,z,se,ie,ce=!1){if(w!==null){if(r[w]!==void 0)return r[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _e;se&&(_e=e.get("EXT_texture_norm16"),_e||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=M;if(M===r.RED&&(z===r.FLOAT&&(G=r.R32F),z===r.HALF_FLOAT&&(G=r.R16F),z===r.UNSIGNED_BYTE&&(G=r.R8),z===r.UNSIGNED_SHORT&&_e&&(G=_e.R16_EXT),z===r.SHORT&&_e&&(G=_e.R16_SNORM_EXT)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.R8UI),z===r.UNSIGNED_SHORT&&(G=r.R16UI),z===r.UNSIGNED_INT&&(G=r.R32UI),z===r.BYTE&&(G=r.R8I),z===r.SHORT&&(G=r.R16I),z===r.INT&&(G=r.R32I)),M===r.RG&&(z===r.FLOAT&&(G=r.RG32F),z===r.HALF_FLOAT&&(G=r.RG16F),z===r.UNSIGNED_BYTE&&(G=r.RG8),z===r.UNSIGNED_SHORT&&_e&&(G=_e.RG16_EXT),z===r.SHORT&&_e&&(G=_e.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.RG8UI),z===r.UNSIGNED_SHORT&&(G=r.RG16UI),z===r.UNSIGNED_INT&&(G=r.RG32UI),z===r.BYTE&&(G=r.RG8I),z===r.SHORT&&(G=r.RG16I),z===r.INT&&(G=r.RG32I)),M===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.RGB8UI),z===r.UNSIGNED_SHORT&&(G=r.RGB16UI),z===r.UNSIGNED_INT&&(G=r.RGB32UI),z===r.BYTE&&(G=r.RGB8I),z===r.SHORT&&(G=r.RGB16I),z===r.INT&&(G=r.RGB32I)),M===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),z===r.UNSIGNED_INT&&(G=r.RGBA32UI),z===r.BYTE&&(G=r.RGBA8I),z===r.SHORT&&(G=r.RGBA16I),z===r.INT&&(G=r.RGBA32I)),M===r.RGB&&(z===r.UNSIGNED_SHORT&&_e&&(G=_e.RGB16_EXT),z===r.SHORT&&_e&&(G=_e.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),M===r.RGBA){const Q=ce?ml:nt.getTransfer(ie);z===r.FLOAT&&(G=r.RGBA32F),z===r.HALF_FLOAT&&(G=r.RGBA16F),z===r.UNSIGNED_BYTE&&(G=Q===vt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&_e&&(G=_e.RGBA16_EXT),z===r.SHORT&&_e&&(G=_e.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function g(w,M){let z;return w?M===null||M===Oi||M===Ys?z=r.DEPTH24_STENCIL8:M===Li?z=r.DEPTH32F_STENCIL8:M===Va&&(z=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===Ys?z=r.DEPTH_COMPONENT24:M===Li?z=r.DEPTH_COMPONENT32F:M===Va&&(z=r.DEPTH_COMPONENT16),z}function y(w,M){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function P(w){const M=new WeakRef(w);n.get(w).__ref=M,m.add(M),x.register(w,M,M)}function R(w){const M=n.get(w).__ref;M!==void 0&&(m.delete(M),x.unregister(M))}function I(w){V(w.target)}function N(w){D(w.target)}function V(w){w.removeEventListener("dispose",I),R(w),q(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function D(w){w.removeEventListener("dispose",N),R(w),te(w)}function k(){for(const w of m){const M=w.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):V(M))}m.clear(),d.clear()}function q(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,se=f.get(z);if(se){const ie=se[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(w),Object.keys(se).length===0&&f.delete(z)}n.remove(w)}function O(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const z=w.source,se=f.get(z);delete se[M.__cacheKey],a.memory.textures--}function te(w){const M=n.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();const z=w.depthTexture;if(z&&z.renderTarget===w&&V(z),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ce=0;ce<M.__webglFramebuffer[ie].length;ce++)r.deleteFramebuffer(M.__webglFramebuffer[ie][ce]);else r.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)r.deleteFramebuffer(M.__webglFramebuffer[ie]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=w.textures;for(let ie=0,ce=se.length;ie<ce;ie++){const _e=n.get(se[ie]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(se[ie])}n.remove(w)}let W=0;function C(){W=0}function ne(){return W}function Me(w){W=w}function Fe(){const w=W;return w>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,w}function K(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ue(w,M){const z=n.get(w);if(w.isVideoTexture&&ft(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const se=w.image;if(se===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,w,M);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function Se(w,M){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){st(z,w,M);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function ye(w,M){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){st(z,w,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function me(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){$(z,w,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}const Ie={[Zc]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},gt={[fn]:r.NEAREST,[Fg]:r.NEAREST_MIPMAP_NEAREST,[ho]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Wl]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},Ae={[kg]:r.NEVER,[Qp]:r.ALWAYS,[Gg]:r.LESS,[Zp]:r.LEQUAL,[Hg]:r.EQUAL,[Jp]:r.GEQUAL,[Vg]:r.GREATER,[Wg]:r.NOTEQUAL};function ke(w,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Wl||M.magFilter===ho||M.magFilter===xr||M.minFilter===Fn||M.minFilter===Wl||M.minFilter===ho||M.minFilter===xr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Ie[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Ie[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Ie[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,gt[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==ho&&M.minFilter!==xr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function De(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",I),P(M));const se=M.source;let ie=f.get(se);ie===void 0&&(ie={},f.set(se,ie));const ce=K(M);if(ce!==w.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[ce].usedTimes++;const _e=ie[w.__cacheKey];_e!==void 0&&(ie[w.__cacheKey].usedTimes--,_e.usedTimes===0&&O(M)),w.__cacheKey=ce,w.__webglTexture=ie[ce].texture}return z}function Ue(w,M,z){return Math.floor(Math.floor(w/z)/M)}function ut(w,M,z,se){const ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,z,se,M.data);else{ce.sort((L,J)=>L.start-J.start);let _e=0;for(let L=1;L<ce.length;L++){const J=ce[_e],Z=ce[L],he=J.start+J.count,oe=Ue(Z.start,M.width,4),de=Ue(J.start,M.width,4);Z.start<=he+1&&oe===de&&Ue(Z.start+Z.count-1,M.width,4)===oe?J.count=Math.max(J.count,Z.start+Z.count-J.start):(++_e,ce[_e]=Z)}ce.length=_e+1;const G=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let L=0,J=ce.length;L<J;L++){const Z=ce[L],he=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),de=he%M.width,ae=Math.floor(he/M.width),pe=oe,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,de),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae),t.texSubImage2D(r.TEXTURE_2D,0,de,ae,pe,re,z,se,M.data)}w.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,G),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function st(w,M,z){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const ie=De(w,M),ce=M.source;t.bindTexture(se,w.__webglTexture,r.TEXTURE0+z);const _e=n.get(ce);if(ce.version!==_e.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const re=nt.getPrimaries(nt.workingColorSpace),j=M.colorSpace===hr?null:nt.getPrimaries(M.colorSpace),ge=M.colorSpace===hr||re===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=S(M.image,!1,i.maxTextureSize);Q=Le(M,Q);const le=s.convert(M.format,M.colorSpace),L=s.convert(M.type);let J=A(M.internalFormat,le,L,M.normalized,M.colorSpace,M.isVideoTexture);ke(se,M);let Z;const he=M.mipmaps,oe=M.isVideoTexture!==!0,de=_e.__version===void 0||ie===!0,ae=ce.dataReady,pe=y(M,Q);if(M.isDepthTexture)J=g(M.format===vr,M.type),de&&(oe?t.texStorage2D(r.TEXTURE_2D,1,J,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,J,Q.width,Q.height,0,le,L,null));else if(M.isDataTexture)if(he.length>0){oe&&de&&t.texStorage2D(r.TEXTURE_2D,pe,J,he[0].width,he[0].height);for(let re=0,j=he.length;re<j;re++)Z=he[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Z.width,Z.height,le,L,Z.data):t.texImage2D(r.TEXTURE_2D,re,J,Z.width,Z.height,0,le,L,Z.data);M.generateMipmaps=!1}else oe?(de&&t.texStorage2D(r.TEXTURE_2D,pe,J,Q.width,Q.height),ae&&ut(M,Q,le,L)):t.texImage2D(r.TEXTURE_2D,0,J,Q.width,Q.height,0,le,L,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,J,he[0].width,he[0].height,Q.depth);for(let re=0,j=he.length;re<j;re++)if(Z=he[re],M.format!==Ii)if(le!==null)if(oe){if(ae)if(M.layerUpdates.size>0){const ge=Vh(Z.width,Z.height,M.format,M.type);for(const ee of M.layerUpdates){const Te=Z.data.subarray(ee*ge/Z.data.BYTES_PER_ELEMENT,(ee+1)*ge/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ee,Z.width,Z.height,1,le,Te)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Z.width,Z.height,Q.depth,le,Z.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,J,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Z.width,Z.height,Q.depth,le,L,Z.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,J,Z.width,Z.height,Q.depth,0,le,L,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{oe&&de&&t.texStorage2D(r.TEXTURE_2D,pe,J,he[0].width,he[0].height);for(let re=0,j=he.length;re<j;re++)Z=he[re],M.format!==Ii?le!==null?oe?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Z.width,Z.height,le,Z.data):t.compressedTexImage2D(r.TEXTURE_2D,re,J,Z.width,Z.height,0,Z.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Z.width,Z.height,le,L,Z.data):t.texImage2D(r.TEXTURE_2D,re,J,Z.width,Z.height,0,le,L,Z.data)}else if(M.isDataArrayTexture)if(oe){if(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,J,Q.width,Q.height,Q.depth),ae)if(M.layerUpdates.size>0){const re=Vh(Q.width,Q.height,M.format,M.type);for(const j of M.layerUpdates){const ge=Q.data.subarray(j*re/Q.data.BYTES_PER_ELEMENT,(j+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,L,ge)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,L,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,J,Q.width,Q.height,Q.depth,0,le,L,Q.data);else if(M.isData3DTexture)oe?(de&&t.texStorage3D(r.TEXTURE_3D,pe,J,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,L,Q.data)):t.texImage3D(r.TEXTURE_3D,0,J,Q.width,Q.height,Q.depth,0,le,L,Q.data);else if(M.isFramebufferTexture){if(de)if(oe)t.texStorage2D(r.TEXTURE_2D,pe,J,Q.width,Q.height);else{let re=Q.width,j=Q.height;for(let ge=0;ge<pe;ge++)t.texImage2D(r.TEXTURE_2D,ge,J,re,j,0,le,L,null),re>>=1,j>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Q.parentNode!==re){re.appendChild(Q),d.add(M),re.onpaint=j=>{const ge=j.changedElements;for(const ee of d)ge.includes(ee.image)&&(ee.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{const ge=r.RGBA,ee=r.RGBA,Te=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,ee,Te,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(he.length>0){if(oe&&de){const re=Oe(he[0]);t.texStorage2D(r.TEXTURE_2D,pe,J,re.width,re.height)}for(let re=0,j=he.length;re<j;re++)Z=he[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le,L,Z):t.texImage2D(r.TEXTURE_2D,re,J,le,L,Z);M.generateMipmaps=!1}else if(oe){if(de){const re=Oe(Q);t.texStorage2D(r.TEXTURE_2D,pe,J,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,L,Q)}else t.texImage2D(r.TEXTURE_2D,0,J,le,L,Q);b(M)&&M.mipmapsAutoUpdate===!0&&v(se),_e.__version=ce.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function $(w,M,z){if(M.image.length!==6)return;const se=De(w,M),ie=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+z);const ce=n.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(r.TEXTURE0+z);const _e=nt.getPrimaries(nt.workingColorSpace),G=M.colorSpace===hr?null:nt.getPrimaries(M.colorSpace),Q=M.colorSpace===hr||_e===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const le=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!le&&!L?J[ee]=S(M.image[ee],!0,i.maxCubemapSize):J[ee]=L?M.image[ee].image:M.image[ee],J[ee]=Le(M,J[ee]);const Z=J[0],he=s.convert(M.format,M.colorSpace),oe=s.convert(M.type);let de=A(M.internalFormat,he,oe,M.normalized,M.colorSpace);const ae=M.isVideoTexture!==!0,pe=ce.__version===void 0||se===!0,re=ie.dataReady;let j=y(M,Z);ke(r.TEXTURE_CUBE_MAP,M);let ge;if(M.isDepthTexture){if(de=g(M.format===vr,M.type),pe)if(ae)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let ee=0;ee<6;ee++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,Z.width,Z.height,0,he,oe,null)}else if(le){ae&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,j,de,Z.width,Z.height);for(let ee=0;ee<6;ee++){ge=J[ee].mipmaps;for(let Te=0;Te<ge.length;Te++){const Je=ge[Te];M.format!==Ii?he!==null?ae?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Je.width,Je.height,he,Je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,de,Je.width,Je.height,0,Je.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Je.width,Je.height,he,oe,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,de,Je.width,Je.height,0,he,oe,Je.data)}}}else{if(ge=M.mipmaps,ae&&pe){ge.length>0&&j++;const ee=Oe(J[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,j,de,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(L){ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,he,oe,J[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,J[ee].width,J[ee].height,0,he,oe,J[ee].data);for(let Te=0;Te<ge.length;Te++){const He=ge[Te].image[ee].image;ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,He.width,He.height,he,oe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,de,He.width,He.height,0,he,oe,He.data)}}else{ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he,oe,J[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,de,he,oe,J[ee]);for(let Te=0;Te<ge.length;Te++){const Je=ge[Te];ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,he,oe,Je.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,de,he,oe,Je.image[ee])}}}b(M)&&M.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),ce.__version=ie.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ze(w,M,z,se,ie,ce){const _e=s.convert(z.format,z.colorSpace),G=s.convert(z.type),Q=A(z.internalFormat,_e,G,z.normalized,z.colorSpace),le=n.get(M),L=n.get(z);if(L.__renderTarget=M,!le.__hasExternalTextures){const J=Math.max(1,M.width>>ce),Z=Math.max(1,M.height>>ce);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,Q,J,Z,M.depth,0,_e,G,null):t.texImage2D(ie,ce,Q,J,Z,0,_e,G,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),fe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ie,L.__webglTexture,0,ze(M)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ie,L.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(w,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const se=M.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=g(M.stencilBuffer,ie),_e=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(M),ce,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(M),ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ce,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,w)}else{const se=M.textures;for(let ie=0;ie<se.length;ie++){const ce=se[ie],_e=s.convert(ce.format,ce.colorSpace),G=s.convert(ce.type),Q=A(ce.internalFormat,_e,G,ce.normalized,ce.colorSpace);fe(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(M),Q,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(M),Q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(w,M,z){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=n.get(M.depthTexture);ie.__renderTarget=M;const ce=se?M.depthTexture.image[0]:M.depthTexture.image;(!ie.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),se?me(M.depthTexture,0):ue(M.depthTexture,0);const _e=ie.__webglTexture,G=ze(M),Q=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,le=M.depthTexture.format===vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Cr)fe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Q,_e,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,le,Q,_e,0);else if(M.depthTexture.format===vr)fe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Q,_e,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,le,Q,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const se=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=se}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)Mt(M.__webglFramebuffer[se],w,se);else w.texture.mipmaps.length>0?Mt(M.__webglFramebuffer[0],w,0):Mt(M.__webglFramebuffer,w,0);else if(z){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=r.createRenderbuffer(),Vt(M.__webglDepthbuffer[se],w,!1);else{const ie=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ce)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Vt(M.__webglDepthbuffer,w,!1);else{const ie=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ce)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(w,M,z){const se=n.get(w);M!==void 0&&Ze(se.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&tt(w)}function kt(w){const M=w.texture,z=n.get(w),se=n.get(M);w.addEventListener("dispose",N),P(w);const ie=w.textures,ce=w.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let G=0;G<6;G++)if(M.mipmaps.length>0){z.__webglFramebuffer[G]=[];for(let Q=0;Q<M.mipmaps.length;Q++)z.__webglFramebuffer[G][Q]=r.createFramebuffer()}else z.__webglFramebuffer[G]=r.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let G=0;G<M.mipmaps.length;G++)z.__webglFramebuffer[G]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(_e)for(let G=0,Q=ie.length;G<Q;G++){const le=n.get(ie[G]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&fe(w)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){const Q=ie[G];z.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[G]);const le=s.convert(Q.format,Q.colorSpace),L=s.convert(Q.type),J=A(Q.internalFormat,le,L,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),Z=ze(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,J,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,z.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),ke(r.TEXTURE_CUBE_MAP,M);for(let G=0;G<6;G++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ze(z.__webglFramebuffer[G][Q],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,Q);else Ze(z.__webglFramebuffer[G],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);b(M)?v(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let G=0,Q=ie.length;G<Q;G++){const le=ie[G],L=n.get(le);let J=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,L.__webglTexture),ke(J,le),Ze(z.__webglFramebuffer,w,le,r.COLOR_ATTACHMENT0+G,J,0),b(le)&&v(J)}t.unbindTexture()}else{let G=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(G=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(G,se.__webglTexture),ke(G,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ze(z.__webglFramebuffer[Q],w,M,r.COLOR_ATTACHMENT0,G,Q);else Ze(z.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,G,0);b(M)?v(G):M.mipmaps.length>0&&r.texParameteri(G,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&tt(w)}function F(w){const M=w.textures;for(let z=0,se=M.length;z<se;z++){const ie=M[z];if(b(ie)&&ie.mipmapsAutoUpdate===!0){const ce=T(w),_e=n.get(ie).__webglTexture;t.bindTexture(ce,_e),v(ce),t.unbindTexture()}}}const dt=[];function at(w){if(w.samples>0){if(fe(w)===!1){const M=w.textures,z=w.width,se=w.height;let ie=r.COLOR_BUFFER_BIT;const ce=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(w),G=M.length>1;if(G)for(let le=0;le<M.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let le=0;le<M.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),G){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const L=n.get(M[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,z,se,0,0,z,se,ie,r.NEAREST),l===!0&&(dt.length=0,dt.push(r.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&dt.push(ce),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let le=0;le<M.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const L=n.get(M[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,L,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ze(w){return Math.min(i.maxSamples,w.samples)}function fe(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Le(w,M){const z=w.colorSpace,se=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==pl&&z!==hr&&(nt.getTransfer(z)===vt?(se!==Ii||ie!==ci)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",z)),M}function Oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=C,this.getTextureUnits=ne,this.setTextureUnits=Me,this.setTexture2D=ue,this.setTexture2DArray=Se,this.setTexture3D=ye,this.setTextureCube=me,this.rebindTextures=Ut,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=fe,this.dispose=k}function TE(r,e){function t(n,i=hr){let s;const a=nt.getTransfer(i);if(n===ci)return r.UNSIGNED_BYTE;if(n===cf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Xp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vp)return r.BYTE;if(n===Wp)return r.SHORT;if(n===Va)return r.UNSIGNED_SHORT;if(n===lf)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===Yp)return r.ALPHA;if(n===$p)return r.RGB;if(n===Ii)return r.RGBA;if(n===Cr)return r.DEPTH_COMPONENT;if(n===vr)return r.DEPTH_STENCIL;if(n===Kp)return r.RED;if(n===ff)return r.RED_INTEGER;if(n===ts)return r.RG;if(n===hf)return r.RG_INTEGER;if(n===df)return r.RGBA_INTEGER;if(n===Yo||n===$o||n===Ko||n===Zo)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===jc||n===eu||n===tu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===ru||n===su||n===au||n===hl||n===ou)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nu||n===iu)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ru)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===su)return s.COMPRESSED_R11_EAC;if(n===au)return s.COMPRESSED_SIGNED_R11_EAC;if(n===hl)return s.COMPRESSED_RG11_EAC;if(n===ou)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lu||n===cu||n===uu||n===fu||n===hu||n===du||n===pu||n===mu||n===_u||n===gu||n===xu||n===vu||n===Su||n===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===du)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eu||n===yu||n===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eu)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===Au||n===dl||n===wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new om(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new is({vertexShader:bE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tr(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends ss{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",p=new wE,_={},S=t.getContextAttributes();let b=null,v=null;const T=[],A=[],g=new ct;let y=null,P=null;const R=new xi;R.viewport=new Bt;const I=new xi;I.viewport=new Bt;const N=[R,I],V=new z0;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=T[K];return ue===void 0&&(ue=new jl,T[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=T[K];return ue===void 0&&(ue=new jl,T[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=T[K];return ue===void 0&&(ue=new jl,T[K]=ue),ue.getHandSpace()};function q(K){const ue=A.indexOf(K.inputSource);if(ue===-1)return;const Se=T[ue];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",te);for(let K=0;K<T.length;K++){const ue=A[K];ue!==null&&(A[K]=null,T[K].disconnect(ue))}D=null,k=null,p.reset();for(const K in _)delete _[K];if(e.setRenderTarget(b),f=null,h=null,d=null,i=null,v=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),P!==null){const K=P.camera;K.fov=P.fov,K.zoom=P.zoom,K.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",O),i.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ye=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?vr:Cr,ye=S.stencil?Ys:Oi);const Ie={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ie),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ui(h.textureWidth,h.textureHeight,{format:Ii,type:ci,depthTexture:new $s(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ui(f.framebufferWidth,f.framebufferHeight,{format:Ii,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(K){for(let ue=0;ue<K.removed.length;ue++){const Se=K.removed[ue],ye=A.indexOf(Se);ye>=0&&(A[ye]=null,T[ye].disconnect(Se))}for(let ue=0;ue<K.added.length;ue++){const Se=K.added[ue];let ye=A.indexOf(Se);if(ye===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=A.length){A.push(Se),ye=Ie;break}else if(A[Ie]===null){A[Ie]=Se,ye=Ie;break}if(ye===-1)break}const me=T[ye];me&&me.connect(Se)}}function W(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ue=K.near,Se=K.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),V.near=I.near=R.near=ue,V.far=I.far=R.far=Se,(D!==V.near||k!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,k=V.far),V.layers.mask=K.layers.mask|6,R.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const ye=K.parent,me=V.cameras;W(V,ye);for(let Ie=0;Ie<me.length;Ie++)W(me[Ie],ye);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&K.isPerspectiveCamera&&(P={camera:K,fov:K.fov,zoom:K.zoom}),C(K,V,ye)};function C(K,ue,Se){Se===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ru*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(K){return _[K]};let ne=null;function Me(K,ue){if(u=ue.getViewerPose(c||a),m=ue,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ye=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,ye=!0);for(let Ae=0;Ae<Se.length;Ae++){const ke=Se[Ae];let De=null;if(f!==null)De=f.getViewport(ke);else{const ut=d.getViewSubImage(h,ke);De=ut.viewport,Ae===0&&(e.setRenderTargetTextures(v,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(v))}let Ue=N[Ae];Ue===void 0&&(Ue=new xi,Ue.layers.enable(Ae),Ue.viewport=new Bt,N[Ae]=Ue),Ue.matrix.fromArray(ke.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(ke.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(De.x,De.y,De.width,De.height),Ae===0&&(V.matrix.copy(Ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ye===!0&&V.cameras.push(Ue)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ae=d.getDepthInformation(Se[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,i.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ae=0;Ae<Se.length;Ae++){const ke=Se[Ae].camera;if(ke){let De=_[ke];De||(De=new om,_[ke]=De);const Ue=d.getCameraImage(ke);De.sourceTexture=Ue}}}}for(let Se=0;Se<T.length;Se++){const ye=A[Se],me=T[Se];ye!==null&&me!==void 0&&me.update(ye,ue,c||a)}ne&&ne(K,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}const Fe=new um;Fe.setAnimationLoop(Me),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}}const CE=new Pt,Sm=new Ge;Sm.set(-1,0,0,0,1,0,0,0,1);function PE(r,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,lm(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function i(p,_,S,b,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(p,_):_.isMeshLambertMaterial?(s(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(p,_),d(p,_)):_.isMeshPhongMaterial?(s(p,_),u(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(p,_),h(p,_),_.isMeshPhysicalMaterial&&f(p,_,v)):_.isMeshMatcapMaterial?(s(p,_),m(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),x(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?l(p,_,S,b):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===Gn&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===Gn&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const S=e.get(_),b=S.envMap,v=S.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(CE.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Sm),p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,S,b){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*S,p.scale.value=b*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function d(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function h(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function f(p,_,S){p.ior.value=_.ior,_.diffuseRoughness>0&&(p.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.retroreflectivity>0&&(p.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function x(p,_){const S=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DE(r,e,t,n){let i={},s={};function a(S,b){const v=b.program;n.uniformBlockBinding(S,v,i[S.id])}function o(S,b){let v=i[S.id];v===void 0&&(m(S),v=l(S),i[S.id]=v,S.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(S,T);const A=e.render.frame;s[S.id]!==A&&(c(S),s[S.id]=A)}function l(S){const b=r.createBuffer(),v=S.__size,T=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,T),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(S){const b=i[S.id],v=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,g=v.length;A<g;A++){const y=v[A];if(Array.isArray(y))for(let P=0,R=y.length;P<R;P++)u(y[P],A,P,T);else u(y,A,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(S,b,v,T){if(h(S,b,v,T)===!0){const A=S.__offset,g=S.value;if(Array.isArray(g)){let y=0;for(let P=0;P<g.length;P++){const R=g[P],I=x(R,!0);d(R,S.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,S.__data)}}function d(S,b,v){typeof S=="number"||typeof S=="boolean"?b[v]=S:S.isMatrix3?(b[v]=S.elements[0],b[v+1]=S.elements[1],b[v+2]=S.elements[2],b[v+3]=0,b[v+4]=S.elements[3],b[v+5]=S.elements[4],b[v+6]=S.elements[5],b[v+7]=0,b[v+8]=S.elements[6],b[v+9]=S.elements[7],b[v+10]=S.elements[8],b[v+11]=0):ArrayBuffer.isView(S)?b.set(S.subarray(0,b.length-v),v):S.toArray(b,v)}function h(S,b,v,T){const A=S.value,g=b+"_"+v;if(Array.isArray(A)){T[g]===void 0&&(T[g]=[]);const y=T[g];let P=!1;for(let R=0;R<A.length;R++)f(A[R],y,R)===!0&&(P=!0);return P}return f(A,T,g)}function f(S,b,v){if(b[v]===void 0)return typeof S=="number"||typeof S=="boolean"?b[v]=S:ArrayBuffer.isView(S)?b[v]=S.slice():b[v]=S.clone(),!0;{const T=b[v];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return b[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function m(S){const b=S.uniforms;let v=0;const T=16;for(let g=0,y=b.length;g<y;g++){const P=Array.isArray(b[g])?b[g]:[b[g]];for(let R=0,I=P.length;R<I;R++){const N=P[R],V=Array.isArray(N.value)?N.value:[N.value],D=Array.isArray(b[g])||Array.isArray(N.value);let k=v;for(let O=0,te=V.length;O<te;O++){const W=V[O],C=x(W,D),ne=v%T,Me=ne%C.boundary,Fe=ne+Me;v+=Me,Fe!==0&&T-Fe<C.storage&&(v+=T-Fe),O===0&&(k=v),v+=C.storage}const q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((v-k)/Float32Array.BYTES_PER_ELEMENT),N.__offset=k}}const A=v%T;return A>0&&(v+=T-A),S.__size=v,S.__cache={},this}function x(S,b){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",S),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(S){const b=S.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function _(){for(const S in i)r.deleteBuffer(i[S]);i={},s={}}return{bind:a,update:o,dispose:_}}const LE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function IE(){return Ti===null&&(Ti=new M0(LE,16,16,ts,Bi),Ti.name="DFG_LUT",Ti.minFilter=Fn,Ti.magFilter=Fn,Ti.wrapS=Di,Ti.wrapT=Di,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class NE{constructor(e={}){const{canvas:t=Yg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ci}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=f,p=new Set([df,hf,ff]),_=new Set([ci,Oi,Va,Ys,cf,uf]),S=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const g=[],y=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,N=null,V=null,D=null,k=null;this._outputColorSpace=Mn;let q=0,O=0,te=null,W=-1,C=null;const ne=new Bt,Me=new Bt;let Fe=null;const K=new it(0);let ue=0,Se=t.width,ye=t.height,me=1,Ie=null,gt=null;const Ae=new Bt(0,0,Se,ye),ke=new Bt(0,0,Se,ye);let De=!1;const Ue=new gl,ut=new vf;let st=!1,$=!1;const Ze=new Pt,Vt=new H,Mt=new Bt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function kt(){return te===null?me:1}let F=n;function dt(E,U){return t.getContext(E,U)}let at,ze,fe,ft,Le,Oe,w,M,z,se,ie,ce,_e,G,Q,le,L,J,Z,he,oe,de,ae;try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),F===null){const U="webgl2";if(F=dt(U,E),F===null)throw dt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(E){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ht("WebGLRenderer: "+E.message),E}function pe(){at=new OS(F),at.init(),oe=new TE(F,at),ze=new AS(F,at,e,oe),fe=new EE(F,at),ze.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),V=F.createFramebuffer(),D=F.createFramebuffer(),k=F.createFramebuffer(),ft=new kS(F),Le=new lE,Oe=new yE(F,at,fe,Le,ze,oe,ft),w=new FS(R),M=new H0(F),de=new TS(F,M),z=new BS(F,M,ft,de),se=new HS(F,z,M,de,ft),J=new GS(F,ze,Oe),Q=new wS(Le),ie=new oE(R,w,at,ze,de,Q),ce=new PE(R,Le),_e=new uE,G=new _E(at),L=new yS(R,w,fe,se,m,l),le=new ME(R,se,ze),ae=new DE(F,ft,ze,fe),Z=new bS(F,at,ft),he=new zS(F,at,ft),ft.programs=ie.programs,R.capabilities=ze,R.extensions=at,R.properties=Le,R.renderLists=_e,R.shadowMap=le,R.state=fe,R.info=ft}x!==ci&&(P=new WS(x,t.width,t.height,o,i,s));const re=new RE(R,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(Se,ye,!1))},this.getSize=function(E){return E.set(Se,ye)},this.setSize=function(E,U,Y=!0){if(re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=E,ye=U,t.width=Math.floor(E*me),t.height=Math.floor(U*me),Y===!0&&(t.style.width=E+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Se*me,ye*me).floor()},this.setDrawingBufferSize=function(E,U,Y){Se=E,ye=U,me=Y,t.width=Math.floor(E*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===ci){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,U,Y,B){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,U,Y,B),fe.viewport(ne.copy(Ae).multiplyScalar(kt()).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,U,Y,B){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,U,Y,B),fe.scissor(Me.copy(ke).multiplyScalar(kt()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){fe.setScissorTest(De=E)},this.setOpaqueSort=function(E){Ie=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let B=0;if(E){let X=!1;if(te!==null){const ve=te.texture.format;X=p.has(ve)}if(X){const ve=te.texture.type,Re=_.has(ve),xe=L.getClearColor(),be=L.getClearAlpha(),Ne=xe.r,Ve=xe.g,je=xe.b;Re?(S[0]=Ne,S[1]=Ve,S[2]=je,S[3]=be,F.clearBufferuiv(F.COLOR,0,S)):(b[0]=Ne,b[1]=Ve,b[2]=je,b[3]=be,F.clearBufferiv(F.COLOR,0,b))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),L.dispose(),_e.dispose(),G.dispose(),Oe.dispose(),Le.dispose(),w.dispose(),se.dispose(),z.dispose(),de.dispose(),ae.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Et),re.removeEventListener("sessionend",mt),Zt.stop()};function j(E){E.preventDefault(),gh("WebGLRenderer: Context Lost."),I=!0}function ge(){gh("WebGLRenderer: Context Restored."),I=!1;const E=ft.autoReset,U=le.enabled,Y=le.autoUpdate,B=le.needsUpdate,X=le.type;pe(),ft.autoReset=E,le.enabled=U,le.autoUpdate=Y,le.needsUpdate=B,le.type=X}function ee(E){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const U=E.target;U.removeEventListener("dispose",Te),Je(U)}function Je(E){He(E),Le.remove(E)}function He(E){const U=Le.get(E).programs;U!==void 0&&(U.forEach(function(Y){ie.releaseProgram(Y)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,B,X,ve){U===null&&(U=tt);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=ri(E,U,Y,B,X);fe.setMaterial(B,Re);let be=Y.index,Ne=1;if(B.wireframe===!0){if(be=z.getWireframeAttribute(Y),be===void 0)return;Ne=2}const Ve=Y.drawRange,je=Y.attributes.position;let Ce=Ve.start*Ne,et=(Ve.start+Ve.count)*Ne;ve!==null&&(Ce=Math.max(Ce,ve.start*Ne),et=Math.min(et,(ve.start+ve.count)*Ne)),be!==null?(Ce=Math.max(Ce,0),et=Math.min(et,be.count)):je!=null&&(Ce=Math.max(Ce,0),et=Math.min(et,je.count));const qt=et-Ce;if(qt<0||qt===1/0)return;de.setup(X,B,xe,Y,be);let At,Tt=Z;if(be!==null&&(At=M.get(be),Tt=he,Tt.setIndex(At)),X.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*kt()),Tt.setMode(F.LINES)):Tt.setMode(F.TRIANGLES);else if(X.isLine){let mn=B.linewidth;mn===void 0&&(mn=1),fe.setLineWidth(mn*kt()),X.isLineSegments?Tt.setMode(F.LINES):X.isLineLoop?Tt.setMode(F.LINE_LOOP):Tt.setMode(F.LINE_STRIP)}else X.isPoints?Tt.setMode(F.POINTS):X.isSprite&&Tt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const mn=X._multiDrawStarts,Pe=X._multiDrawCounts,bn=X._multiDrawCount,pt=be?M.get(be).bytesPerElement:1,Dr=Le.get(B).currentProgram.getUniforms();for(let _n=0;_n<bn;_n++)Dr.setValue(F,"_gl_DrawID",_n),Tt.render(mn[_n]/pt,Pe[_n])}else if(X.isInstancedMesh)Tt.renderInstances(Ce,qt,X.count);else if(Y.isInstancedBufferGeometry){const mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,mn);Tt.renderInstances(Ce,qt,Pe)}else Tt.render(Ce,qt)};function wt(E,U,Y,B){N!==null&&E.isNodeMaterial&&N.setObject(B,E),st===!0&&Q.setState(E,Y,!1),E.transparent===!0&&E.side===vi&&E.forceSinglePass===!1?(E.side=Gn,E.needsUpdate=!0,Xn(E,U,B),E.side=es,E.needsUpdate=!0,Xn(E,U,B),E.side=vi):Xn(E,U,B)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),N!==null&&N.renderStart(E,U,Y),A=G.get(Y),A.init(U),y.push(A),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights(),N!==null&&N.updateLights(A.state.lightsArray),$=this.localClippingEnabled,st=Q.init(this.clippingPlanes,$),st===!0&&Q.setGlobalState(this.clippingPlanes,U),N!==null&&le.render(A.state.shadowsArray,Y,U);const B=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ve=X.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const xe=ve[Re];wt(xe,Y,U,X),B.add(xe)}else wt(ve,Y,U,X),B.add(ve)}),A=y.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(E,U,Y=null){const B=this.compile(E,U,Y);return new Promise(X=>{function ve(){if(B.forEach(function(Re){const be=Le.get(Re).currentProgram;(be===void 0||be.isReady())&&B.delete(Re)}),B.size===0){X(E);return}setTimeout(ve,10)}at.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Wt=null;function Rt(E){Wt&&Wt(E)}function Et(){Zt.stop()}function mt(){Zt.start()}const Zt=new um;Zt.setAnimationLoop(Rt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(E){Wt=E,re.setAnimationLoop(E),E===null?Zt.stop():Zt.start()},re.addEventListener("sessionstart",Et),re.addEventListener("sessionend",mt),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,U);const Y=re.enabled===!0&&re.isPresenting===!0,B=P!==null&&(te===null||Y)&&P.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,te),A=G.get(E,y.length),A.init(U),A.state.textureUnits=Oe.getTextureUnits(),y.push(A),Ze.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ut.setFromArrayCamera(U):Ue.setFromProjectionMatrix(Ze,Mi,U.reversedDepth),$=this.localClippingEnabled,st=Q.init(this.clippingPlanes,$),T=_e.get(E,g.length),T.init(),g.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&yt(Re,U,-1/0,R.sortObjects)}yt(E,U,0,R.sortObjects),T.finish(),N!==null&&N.updateLights(A.state.lightsArray),R.sortObjects===!0&&T.sort(Ie,gt),Ut=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ut&&L.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),st===!0&&Q.beginShadows();const X=A.state.shadowsArray;if(le.render(X,E,U),st===!0&&Q.endShadows(),(B&&P.hasRenderPass())===!1){const Re=T.opaque,xe=T.transmissive;if(A.setupLights(),U.isArrayCamera){const be=U.cameras;if(xe.length>0)for(let Ne=0,Ve=be.length;Ne<Ve;Ne++){const je=be[Ne];Wn(Re,xe,E,je)}Ut&&L.render(E);for(let Ne=0,Ve=be.length;Ne<Ve;Ne++){const je=be[Ne];pn(T,E,je,je.viewport)}}else xe.length>0&&Wn(Re,xe,E,U),Ut&&L.render(E),pn(T,E,U)}te!==null&&O===0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),B&&P.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),de.resetDefaultState(),W=-1,C=null,y.pop(),y.length>0?(A=y[y.length-1],Oe.setTextureUnits(A.state.textureUnits),st===!0&&Q.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,N!==null&&N.renderEnd()};function yt(E,U,Y,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){const Re=U.isArrayCamera?ut:Ue;if(!E.frustumCulled||E.intersectsFrustum(Re)){B&&Mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ze);const xe=se.update(E),be=E.material;be.visible&&T.push(E,xe,be,Y,Mt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){const Re=U.isArrayCamera?ut:Ue;if(!E.frustumCulled||E.intersectsFrustum(Re)){const xe=se.update(E),be=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Mt.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Mt.copy(xe.boundingSphere.center)),Mt.applyMatrix4(E.matrixWorld).applyMatrix4(Ze)),Array.isArray(be)){const Ne=xe.groups;for(let Ve=0,je=Ne.length;Ve<je;Ve++){const Ce=Ne[Ve],et=be[Ce.materialIndex];et&&et.visible&&T.push(E,xe,et,Y,Mt.z,Ce,U)}}else be.visible&&T.push(E,xe,be,Y,Mt.z,null,U)}}}const ve=E.children;for(let Re=0,xe=ve.length;Re<xe;Re++)yt(ve[Re],U,Y,B)}function pn(E,U,Y,B){const{opaque:X,transmissive:ve,transparent:Re}=E;A.setupLightsView(Y),st===!0&&Q.setGlobalState(R.clippingPlanes,Y),B&&fe.viewport(ne.copy(B)),X.length>0&&Ft(X,U,Y),ve.length>0&&Ft(ve,U,Y),Re.length>0&&Ft(Re,U,Y),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Wn(E,U,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){const Ce=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Ui(1,1,{generateMipmaps:!0,type:Ce?Bi:ci,minFilter:xr,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ve=A.state.transmissionRenderTarget[B.id],Re=B.viewport||ne;ve.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const xe=R.getRenderTarget(),be=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(K),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&L.render(Y);const Ve=R.toneMapping;R.toneMapping=Zi;const je=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),st===!0&&Q.setGlobalState(R.clippingPlanes,B),Ft(E,Y,B),Oe.updateMultisampleRenderTarget(ve),Oe.updateRenderTargetMipmap(ve),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let et=0,qt=U.length;et<qt;et++){const At=U[et],{object:Tt,geometry:mn,material:Pe,group:bn}=At;if(Pe.side===vi&&Tt.layers.test(B.layers)){const pt=Pe.side;Pe.side=Gn,Pe.needsUpdate=!0,Xt(Tt,Y,B,mn,Pe,bn),Pe.side=pt,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(Oe.updateMultisampleRenderTarget(ve),Oe.updateRenderTargetMipmap(ve))}R.setRenderTarget(xe,be,Ne),R.setClearColor(K,ue),je!==void 0&&(B.viewport=je),R.toneMapping=Ve}function Ft(E,U,Y){const B=U.isScene===!0?U.overrideMaterial:null;for(let X=0,ve=E.length;X<ve;X++){const Re=E[X],{object:xe,geometry:be,group:Ne}=Re;let Ve=Re.material;Ve.allowOverride===!0&&B!==null&&(Ve=B),xe.layers.test(Y.layers)&&Xt(xe,U,Y,be,Ve,Ne)}}function Xt(E,U,Y,B,X,ve){N!==null&&X.isNodeMaterial&&N.setObject(E,X),E.onBeforeRender(R,U,Y,B,X,ve),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(R,U,Y,B,E,ve),X.transparent===!0&&X.side===vi&&X.forceSinglePass===!1?(X.side=Gn,X.needsUpdate=!0,R.renderBufferDirect(Y,U,B,X,E,ve),X.side=es,X.needsUpdate=!0,R.renderBufferDirect(Y,U,B,X,E,ve),X.side=vi):R.renderBufferDirect(Y,U,B,X,E,ve),E.onAfterRender(R,U,Y,B,X,ve)}function Jt(E){let U=0;for(const Y of E)Y.texture!==null&&U++;return U}function Xn(E,U,Y){U.isScene!==!0&&(U=tt);const B=Le.get(E),X=A.state.lights,ve=A.state.shadowsArray,Re=X.state.version,xe=ie.getParameters(E,X.state,ve,U,Y,A.state.lightProbeGridArray),be=ie.getProgramCacheKey(xe);let Ne=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=w.get(E.envMap||B.environment,Ve),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Te),Ne=new Map,B.programs=Ne,B.programVariants=new Map);let je=Ne.get(be);if(je!==void 0){if(B.currentProgram===je&&B.lightsStateVersion===Re)return Ot(E,xe),je}else xe.uniforms=ie.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,Y,xe),E.onBeforeCompile(xe,R),je=ie.acquireProgram(xe,be),Ne.set(be,je),B.uniforms=xe.uniforms;const Ce=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Q.uniform),Ot(E,xe),B.needsLights=Ja(E),B.lightsStateVersion=Re,B.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),B.numLightProbeGrids=Jt(A.state.lightProbeGridArray),B.currentProgram=je,B.uniformsList=null,je}function as(E,U,Y,B,X){const ve=Le.get(E),Re=ve.currentProgram.id+","+B+","+X;let xe=ve.programVariants.get(Re);return xe===void 0?(xe=Xn(E,U,Y),ve.programVariants.set(Re,xe)):(ve.currentProgram=xe,ve.uniformsList=null,ve.outputColorSpace=B,ve.toneMapping=X),xe}function Qt(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Qo.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ot(E,U){const Y=Le.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function ri(E,U,Y,B,X){U.isScene!==!0&&(U=tt),Oe.resetTextureUnits();const ve=U.fog,Re=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,xe=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:nt.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ne=w.get(B.envMap||Re,be),Ve=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,qt=!!Y.morphAttributes.color;let At=Zi;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(At=R.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=Tt!==void 0?Tt.length:0,Pe=Le.get(B),bn=A.state.lights;if(st===!0&&($===!0||E!==C)){const Dt=E===C&&B.id===W;Q.setState(B,E,Dt)}let pt=!1,Dr=!1;B.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==bn.state.version||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ne||B.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Q.numPlanes||Pe.numIntersection!==Q.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==je||Pe.morphTargets!==Ce||Pe.morphNormals!==et||Pe.morphColors!==qt||Pe.morphTargetsCount!==mn||Pe.numLightProbeGrids!==Jt(A.state.lightProbeGridArray)?pt=!0:(Pe.outputColorSpace!==xe||Pe.toneMapping!==At)&&(Dr=!0):(pt=!0,Pe.__version=B.version);let _n=Pe.currentProgram;(pt===!0||Dr===!0)&&(_n=Dr===!0?as(B,U,X,xe,At):Xn(B,U,X),N&&B.isNodeMaterial&&N.onUpdateProgram(B,_n,Pe));let Qa=!1,rr=!1,Lr=!1;const ot=_n.getUniforms(),cn=Pe.uniforms;if(fe.useProgram(_n.program)&&(Qa=!0,rr=!0,Lr=!0),B.id!==W&&(W=B.id,rr=!0),Qa||C!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(F,"projectionMatrix",E.projectionMatrix),ot.setValue(F,"viewMatrix",E.matrixWorldInverse);const rn=ot.map.cameraPosition;rn!==void 0&&rn.setValue(F,Vt.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ot.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,rr=!0,Lr=!0)}if(Pe.needsLights&&(bn.state.sunShadowMap.length>0&&ot.setValue(F,"sunShadowMap",bn.state.sunShadowMap,Oe),bn.state.directionalShadowMap.length>0&&ot.setValue(F,"directionalShadowMap",bn.state.directionalShadowMap,Oe),bn.state.spotShadowMap.length>0&&ot.setValue(F,"spotShadowMap",bn.state.spotShadowMap,Oe),bn.state.pointShadowMap.length>0&&ot.setValue(F,"pointShadowMap",bn.state.pointShadowMap,Oe)),X.isSkinnedMesh){ot.setOptional(F,X,"bindMatrix"),ot.setOptional(F,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ot.setValue(F,"boneTexture",Dt.boneTexture,Oe))}X.isBatchedMesh&&(ot.setOptional(F,X,"batchingTexture"),ot.setValue(F,"batchingTexture",X._matricesTexture,Oe),ot.setOptional(F,X,"batchingIdTexture"),ot.setValue(F,"batchingIdTexture",X._indirectTexture,Oe),ot.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ot.setValue(F,"batchingColorTexture",X._colorsTexture,Oe));const di=Y.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&J.update(X,Y,_n),(rr||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,ot.setValue(F,"receiveShadow",X.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=IE()),rr){if(ot.setValue(F,"toneMappingExposure",R.toneMappingExposure),Pe.needsLights&&js(cn,Lr),ve&&B.fog===!0&&ce.refreshFogUniforms(cn,ve),ce.refreshMaterialUniforms(cn,B,me,ye,A.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const Dt=v;let rn=0;for(const zi of A.state.lightProbeGridArray)zi.texture!==null&&(Dt.textures[rn]=zi.texture,Dt.min[rn]=zi.boundingBox.min,Dt.max[rn]=zi.boundingBox.max,Dt.resolution[rn]=zi.resolution,rn++);for(const zi in Dt)Dt[zi].length=rn;cn.probesSH.value=Dt.textures,cn.probesMin.value=Dt.min,cn.probesMax.value=Dt.max,cn.probesResolution.value=Dt.resolution}Qo.upload(F,Qt(Pe),cn,Oe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qo.upload(F,Qt(Pe),cn,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ot.setValue(F,"center",X.center),ot.setValue(F,"modelViewMatrix",X.modelViewMatrix),ot.setValue(F,"normalMatrix",X.normalMatrix),ot.setValue(F,"modelMatrix",X.matrixWorld),B.uniformsGroups!==void 0){const Dt=B.uniformsGroups;for(let rn=0,zi=Dt.length;rn<zi;rn++){const wf=Dt[rn];ae.update(wf,_n),ae.bind(wf,_n)}}return _n}function js(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ja(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,U,Y){const B=Le.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Le.get(E.texture).__webglTexture=U,Le.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const Y=Le.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){te=E,q=U,O=Y;let B=null,X=!1,ve=!1;if(E){const xe=Le.get(E);if(xe.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(E.viewport),Me.copy(E.scissor),Fe=E.scissorTest,fe.viewport(ne),fe.scissor(Me),fe.setScissorTest(Fe),W=-1;return}else if(xe.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(xe.__hasExternalTextures)Oe.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(xe.__boundDepthTexture!==Ve){if(Ve!==null&&Le.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ve=!0);const Ne=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?B=Ne[U][Y]:B=Ne[U],X=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?B=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[Y]:B=Ne,ne.copy(E.viewport),Me.copy(E.scissor),Fe=E.scissorTest}else ne.copy(Ae).multiplyScalar(me).floor(),Me.copy(ke).multiplyScalar(me).floor(),Fe=De;if(Y!==0&&(B=V),fe.bindFramebuffer(F.FRAMEBUFFER,B)&&fe.drawBuffers(E,B),fe.viewport(ne),fe.scissor(Me),fe.setScissorTest(Fe),X){const xe=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,Y)}else if(ve){const xe=U;for(let be=0;be<E.textures.length;be++){const Ne=Le.get(E.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,Ne.__webglTexture,Y,xe)}}else if(E!==null&&Y!==0){const xe=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,Y)}W=-1};function ir(E){const U=Le.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=ze.textureFormatReadable(E.format),U.__typeReadable=ze.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Y,B,X,ve,Re,xe=0){if(!(E&&E.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re],Array.isArray(be)&&(be=be[0])),be){fe.bindFramebuffer(F.FRAMEBUFFER,be);try{const Ne=E.textures[xe],Ve=Ne.format,je=Ne.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);const Ce=ir(Ne);if(Ce.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&Y>=0&&Y<=E.height-X&&F.readPixels(U,Y,B,X,oe.convert(Ve),oe.convert(je),ve)}finally{const Ne=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,B,X,ve,Re,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re],Array.isArray(be)&&(be=be[0])),be)if(U>=0&&U<=E.width-B&&Y>=0&&Y<=E.height-X){fe.bindFramebuffer(F.FRAMEBUFFER,be);const Ne=E.textures[xe],Ve=Ne.format,je=Ne.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);const Ce=ir(Ne);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(U,Y,B,X,oe.convert(Ve),oe.convert(je),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const qt=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,qt);const At=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $g(F,At,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(et),F.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){const B=Math.pow(2,-Y),X=Math.floor(E.image.width*B),ve=Math.floor(E.image.height*B),Re=U!==null?U.x:0,xe=U!==null?U.y:0;Oe.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Re,xe,X,ve),fe.unbindTexture()},this.copyTextureToTexture=function(E,U,Y=null,B=null,X=0,ve=0){let Re,xe,be,Ne,Ve,je,Ce,et,qt;const At=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Y!==null)Re=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Ve=Y.min.y,je=Y.isBox3?Y.min.z:0;else{const ot=Math.pow(2,-X);Re=Math.floor(At.width*ot),xe=Math.floor(At.height*ot),E.isDataArrayTexture?be=At.depth:E.isData3DTexture?be=Math.floor(At.depth*ot):be=1,Ne=0,Ve=0,je=0}B!==null?(Ce=B.x,et=B.y,qt=B.z):(Ce=0,et=0,qt=0);const Tt=oe.convert(U.format),mn=oe.convert(U.type);let Pe;U.isData3DTexture?(Oe.setTexture3D(U,0),Pe=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),Pe=F.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),Pe=F.TEXTURE_2D),fe.activeTexture(F.TEXTURE0),fe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),fe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),fe.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const bn=fe.getParameter(F.UNPACK_ROW_LENGTH),pt=fe.getParameter(F.UNPACK_IMAGE_HEIGHT),Dr=fe.getParameter(F.UNPACK_SKIP_PIXELS),_n=fe.getParameter(F.UNPACK_SKIP_ROWS),Qa=fe.getParameter(F.UNPACK_SKIP_IMAGES);fe.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),fe.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,je);const rr=E.isDataArrayTexture||E.isData3DTexture,Lr=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const ot=Le.get(E),cn=Le.get(U),di=Le.get(ot.__renderTarget),Dt=Le.get(cn.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,di.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let rn=0;rn<be;rn++)rr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(E).__webglTexture,X,je+rn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(U).__webglTexture,ve,qt+rn)),F.blitFramebuffer(Ne,Ve,Ne+Re,Ve+xe,Ce,et,Ce+Re,et+xe,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Le.has(E)){const ot=Le.get(E),cn=Le.get(U);fe.bindFramebuffer(F.READ_FRAMEBUFFER,D),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let di=0;di<be;di++)rr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ot.__webglTexture,X,je+di):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ot.__webglTexture,X),Lr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,cn.__webglTexture,ve,qt+di):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,cn.__webglTexture,ve),X!==0?F.blitFramebuffer(Ne,Ve,Ne+Re,Ve+xe,Ce,et,Ce+Re,et+xe,F.COLOR_BUFFER_BIT,F.NEAREST):Lr?F.copyTexSubImage3D(Pe,ve,Ce,et,qt+di,Ne,Ve,Re,xe):F.copyTexSubImage2D(Pe,ve,Ce,et,Ne,Ve,Re,xe);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Lr?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Pe,ve,Ce,et,qt,Re,xe,be,Tt,mn,At.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,ve,Ce,et,qt,Re,xe,be,Tt,At.data):F.texSubImage3D(Pe,ve,Ce,et,qt,Re,xe,be,Tt,mn,At):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Ce,et,Re,xe,Tt,mn,At.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Ce,et,At.width,At.height,Tt,At.data):F.texSubImage2D(F.TEXTURE_2D,ve,Ce,et,Re,xe,Tt,mn,At);fe.pixelStorei(F.UNPACK_ROW_LENGTH,bn),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Dr),fe.pixelStorei(F.UNPACK_SKIP_ROWS,_n),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,Qa),ve===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Pe),fe.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){q=0,O=0,te=null,fe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Mm=new O0;function la(r){const e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)}function UE(r,e){const t=r%2===0?1:-1,n=2.1+la(r*3.1+.7)*1.1,i=(la(r*5.7+2.3)-.5)*1.9,s=(la(r*9.3+1.9)-.5)*.1,a=(la(r*1.7+4.1)-.5)*.2,o=.92+la(r*2.9+.3)*.34,l=r%4===2?1.24:r%3===1?1:.78,c=e<=1?.45:.12+r/Math.max(1,e-1)*.66;return{side:t,lateral:n,height:i,tilt:s,yaw:a,focusAt:c,forward:5,frameWidth:4*o*Math.min(1.26,l),frameHeight:4*o,baseOpacity:1}}function Em(r,e){const t=r.image;if(!(t!=null&&t.width)||!(t!=null&&t.height))return;const n=t.width/t.height;if(r.wrapS=r.wrapT=Di,n>e){const i=e/n;r.repeat.set(i,1),r.offset.set((1-i)/2,0)}else{const i=n/e;r.repeat.set(1,i),r.offset.set(0,(1-i)/2)}r.needsUpdate=!0}function FE(){const r=document.createElement("canvas");r.width=4,r.height=4;const e=r.getContext("2d");if(e){const n=e.createLinearGradient(0,0,4,4);n.addColorStop(0,"#2b303a"),n.addColorStop(1,"#40444d"),e.fillStyle=n,e.fillRect(0,0,4,4)}const t=new T0(r);return t.colorSpace=Mn,t}function OE(r,e,t){Mm.load(r,n=>{n.colorSpace=Mn,n.anisotropy=4,Em(n,t);const i=e.map;e.map=n,e.needsUpdate=!0,i&&i.dispose()},void 0,()=>{})}function BE(r,e,t={}){const n=r.length,i=new H,s=new H,a=new H,o=new H(0,1,0),l=new H,c=[];return r.forEach((u,d)=>{const h=FE(),f=UE(d,n),m=f.frameWidth,x=f.frameHeight,p=f.focusAt;e.curve.getPointAt(p,i),e.curve.getTangentAt(p,s).normalize(),a.crossVectors(o,s).normalize();const _=new Ps;_.position.copy(i).addScaledVector(a,f.lateral*f.side).addScaledVector(o,f.height).addScaledVector(s,f.forward),e.curve.getPointAt(p,l),l.y=_.position.y-f.height*.3,_.lookAt(l),_.rotation.y+=f.yaw,_.rotation.z+=f.tilt;const S=new Ks(m,x),b=new Cu({map:h,transparent:!0,opacity:0,side:vi,toneMapped:!1}),v=new tr(S,b);v.userData.photoIndex=d,_.add(v);const T=new Ks(m+.07,x+.07),A=new Cu({color:new it("#ded7c8"),transparent:!0,opacity:0,side:vi,toneMapped:!1}),g=new tr(T,A);g.position.z=-.012,_.add(g);let y=!1;const P={index:d,photo:u,group:_,hitMesh:v,focusAt:f.focusAt,width:m,height:x,baseOpacity:f.baseOpacity,disposed:!1,setOpacity(I){b.opacity=I,A.opacity=Math.min(.85,I*.9)},requestHighRes(){P.disposed||y||!u.imageUrl||u.imageUrl===u.thumbnailUrl||(y=!0,OE(u.imageUrl,b,R))},dispose(){if(P.disposed)return;P.disposed=!0,S.dispose(),T.dispose();const I=b.map;b.dispose(),A.dispose(),I?I.dispose():h.dispose(),_.removeFromParent()}};c.push(P);const R=m/x;Mm.load(u.thumbnailUrl||u.imageUrl,I=>{var N;if(P.disposed){I.dispose();return}I.colorSpace=Mn,I.anisotropy=4,Em(I,R),b.map=I,b.needsUpdate=!0,(N=t.onTextureReady)==null||N.call(t,P)},void 0,()=>{var I;P.disposed||(b.userData.failed=!0,b.opacity=.35,A.opacity=.25,(I=t.onTextureError)==null||I.call(t,P))})}),c}function zE(r){const e=Math.max(4,r+1),t=7.5,n=[];for(let c=0;c<e;c+=1){const u=c/(e-1),d=4-c*t,h=Math.sin(u*Math.PI*1.6)*1.9+Math.sin(u*Math.PI*.6)*.6,f=Math.cos(u*Math.PI*1.1)*.55;n.push(new H(h,f,d))}const i=new A0(n,!1,"catmullrom",.4);i.updateArcLengths();const s=i.getLength(),a=new H,o=new H,l=Math.min(.4,14/Math.max(1,s));return{curve:i,length:s,sample(c,u){const d=Math.min(.999,Math.max(0,c));return i.getPointAt(d,a),i.getPointAt(Math.min(1,d+l),o),o.y+=.15,u.position.x=a.x,u.position.y=a.y,u.position.z=a.z,u.target.x=o.x,u.target.y=o.y,u.target.z=o.z,u}}}function kE(r,e){const t=new Float32Array(e*3),n=new Float32Array(e),i=new Float32Array(e),s=Math.max(1,Math.ceil(e/24));for(let d=0;d<e;d+=1){const h=Math.floor(d/s)/s,f=r.curve.getPointAt(Math.min(.999,h+Math.random()*.02));t[d*3]=f.x+(Math.random()-.5)*16,t[d*3+1]=f.y+(Math.random()-.5)*9,t[d*3+2]=f.z+(Math.random()-.5)*6,n[d]=Math.random()*Math.PI*2,i[d]=.12+Math.random()*.22}const a=new nr,o=new Tr(t,3);o.setUsage(35048),a.setAttribute("position",o);const l=new rm({color:new it("#d8cfbf"),size:.045,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1,blending:Hc}),c=new y0(a,l);c.frustumCulled=!1;let u=0;return{points:c,update(d){u+=d;const h=o.array;for(let f=0;f<e;f+=1){const m=f*3+1;h[m]+=i[f]*d*.18,h[m]>6.5&&(h[m]=-6.5)}l.opacity=.42+Math.sin(u*.35)*.07,o.needsUpdate=!0},dispose(){a.dispose(),l.dispose(),c.removeFromParent()}}}const GE={high:{particles:320,maxPixelRatio:1.5,frames:24},medium:{particles:170,maxPixelRatio:1.25,frames:16},low:{particles:80,maxPixelRatio:1,frames:10}};class HE{constructor(e){lt(this,"container");lt(this,"renderer");lt(this,"scene");lt(this,"camera");lt(this,"root");lt(this,"frames",[]);lt(this,"particleField",null);lt(this,"cameraPath",null);lt(this,"raycaster",new k0);lt(this,"pointer",new ct(-2,-2));lt(this,"sample",{position:{x:0,y:0,z:0},target:{x:0,y:0,z:0}});lt(this,"targetProgress",0);lt(this,"smoothProgress",0);lt(this,"raf",0);lt(this,"lastTime",0);lt(this,"visible",!0);lt(this,"disposed",!1);lt(this,"callbacks");lt(this,"activeIndex",-1);lt(this,"frameTilt",[]);lt(this,"facing",new H);lt(this,"hoverIndex",-1);lt(this,"frameOpacity",[]);lt(this,"loaded",new Set);lt(this,"failed",new Set);lt(this,"resizeObserver",null);lt(this,"pointerDown",null);lt(this,"handlePointerMove");lt(this,"handlePointerLeave");lt(this,"handlePointerDown");lt(this,"handlePointerUp");lt(this,"tick",e=>{var s,a,o;if(this.disposed)return;this.raf=requestAnimationFrame(this.tick);const t=Math.min(.05,(e-this.lastTime)/1e3);this.lastTime=e,this.smoothProgress+=(this.targetProgress-this.smoothProgress)*Math.min(1,t*6),this.updateCamera(this.smoothProgress);const n=this.frames.length;let i=0;for(let l=0;l<n;l+=1){const c=this.frames[l];if(c.disposed)continue;const u=c.focusAt;this.smoothProgress>=u-.03&&(i=l);const d=Math.abs(this.smoothProgress-u),h=Math.max(0,1-d/.18),m=(this.failed.has(l)?.35:this.loaded.has(l)?c.baseOpacity:.2)*(.62+h*.38);this.frameOpacity[l]+=(m-this.frameOpacity[l])*Math.min(1,t*4),c.setOpacity(this.frameOpacity[l]),h>.55&&c.requestHighRes(),this.facing.copy(this.camera.position),c.group.lookAt(this.facing),c.group.rotation.y+=this.frameTilt[l]??0;const x=1+h*.06;c.group.scale.set(x,x,x)}if(i!==this.activeIndex&&(this.activeIndex=i,(a=(s=this.callbacks).onFrame)==null||a.call(s,i)),this.pointer.x>-1.5){const l=this.pick();this.setHover(l?l.index:-1)}(o=this.particleField)==null||o.update(t),this.renderer.render(this.scene,this.camera)});var s,a;this.container=e.container,this.callbacks=e;const t=GE[e.quality],n=e.photos.slice(0,t.frames);this.renderer=new NE({antialias:e.quality==="high",alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio)),this.renderer.outputColorSpace=Mn,this.renderer.setClearColor(0,0),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.touchAction="pan-y",this.container.appendChild(this.renderer.domElement),this.scene=new d0,this.scene.fog=new gf(new it("#090b10").getHex(),.016),this.camera=new xi(52,1,.1,240),this.root=new Ps,this.scene.add(this.root),this.cameraPath=zE(n.length),this.frames=BE(n,this.cameraPath,{onTextureReady:o=>{this.loaded.add(o.index)},onTextureError:o=>{this.loaded.add(o.index),this.failed.add(o.index)}}),this.frameOpacity=this.frames.map(()=>0),this.frameTilt=this.frames.map((o,l)=>l%2===0?-.06:.06),this.frames.forEach(o=>this.root.add(o.group)),n.length>0&&(this.particleField=kE(this.cameraPath,t.particles),this.scene.add(this.particleField.points)),this.handlePointerMove=o=>{const l=this.renderer.domElement.getBoundingClientRect();this.pointer.set((o.clientX-l.left)/l.width*2-1,-((o.clientY-l.top)/l.height)*2+1)},this.handlePointerLeave=()=>{this.pointer.set(-2,-2),this.setHover(-1)},this.handlePointerDown=o=>{this.pointerDown={x:o.clientX,y:o.clientY,time:performance.now()}},this.handlePointerUp=o=>{const l=this.pointerDown;if(this.pointerDown=null,!l||Math.hypot(o.clientX-l.x,o.clientY-l.y)>8||performance.now()-l.time>650)return;const u=this.pick();u&&this.callbacks.onSelect(u.photo)};const i=this.renderer.domElement;i.addEventListener("pointermove",this.handlePointerMove,{passive:!0}),i.addEventListener("pointerleave",this.handlePointerLeave,{passive:!0}),i.addEventListener("pointerdown",this.handlePointerDown,{passive:!0}),i.addEventListener("pointerup",this.handlePointerUp,{passive:!0}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize(),this.updateCamera(0),(a=(s=this.callbacks).onReady)==null||a.call(s),this.lastTime=performance.now(),this.raf=requestAnimationFrame(this.tick)}debugSnapshot(){const e=this.camera,t=this.container.clientWidth,n=this.container.clientHeight;return{camera:[e.position.x,e.position.y,e.position.z],progress:this.smoothProgress,frames:this.frames.map(i=>{const s=i.group.position.clone().project(e);return{index:i.index,position:[i.group.position.x,i.group.position.y,i.group.position.z],screen:[Math.round((s.x*.5+.5)*t),Math.round((-s.y*.5+.5)*n)],ndcZ:Number(s.z.toFixed(3)),opacity:Number(this.frameOpacity[i.index].toFixed(2))}})}}setProgress(e){this.targetProgress=Math.min(1,Math.max(0,e))}setVisible(e){this.visible!==e&&(this.visible=e,!this.disposed&&(e&&!this.raf?(this.lastTime=performance.now(),this.raf=requestAnimationFrame(this.tick)):!e&&this.raf&&(cancelAnimationFrame(this.raf),this.raf=0)))}resize(){if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e/t<.85?62:52,this.camera.updateProjectionMatrix()}dispose(){var t,n;if(this.disposed)return;this.disposed=!0,cancelAnimationFrame(this.raf),this.raf=0;const e=this.renderer.domElement;e.removeEventListener("pointermove",this.handlePointerMove),e.removeEventListener("pointerleave",this.handlePointerLeave),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointerup",this.handlePointerUp),(t=this.resizeObserver)==null||t.disconnect(),this.resizeObserver=null,this.frames.forEach(i=>i.dispose()),this.frames=[],(n=this.particleField)==null||n.dispose(),this.particleField=null,this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),e.remove()}pick(){if(this.frames.length===0)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.frames.filter(s=>!s.disposed&&this.frameOpacity[s.index]>.15),t=this.raycaster.intersectObjects(e.map(s=>s.hitMesh),!1);if(t.length===0)return null;const i=t[0].object.userData.photoIndex;return i===void 0?null:this.frames[i]??null}setHover(e){var t;this.hoverIndex!==e&&(this.hoverIndex=e,this.renderer.domElement.style.cursor=e>=0?"pointer":"default",this.callbacks.onHover(e>=0?((t=this.frames[e])==null?void 0:t.photo)??null:null))}updateCamera(e){if(!this.cameraPath)return;this.cameraPath.sample(e,this.sample);const{position:t,target:n}=this.sample;this.camera.position.set(t.x,t.y,t.z),this.camera.lookAt(n.x,n.y,n.z)}}ap.registerPlugin(Ke);function VE(){const r=window.innerWidth,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??4;return r<700||e<=4||t<=4?"low":r<1180||e<=6?"medium":"high"}function WE(){try{const r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function YE({photos:r,sectionId:e}){var S,b;const t=Am(),n=Ei.useRef(null),i=Ei.useRef(null),s=Ei.useRef(null),a=wm(),[o,l]=Ei.useState("pending"),[c,u]=Ei.useState(0),[d,h]=Ei.useState(null),f=Ei.useMemo(VE,[]),m=r[c]??r[0]??null,x=r.map(v=>v.id).join("|");Ei.useEffect(()=>{if(r.length===0)return;if(a||!WE()){l("fallback");return}const v=i.current;if(!v)return;let T=null,A=!1,g=0;const y=window.requestAnimationFrame(()=>{g=window.setTimeout(()=>{if(!A)try{T=new HE({container:v,photos:r,quality:f,onSelect:P=>{P.href&&t(P.href)},onHover:P=>h(P),onFrame:P=>u(P),onReady:()=>l("webgl")}),s.current=T}catch{l("fallback")}},140)});return()=>{A=!0,cancelAnimationFrame(y),window.clearTimeout(g),s.current=null,T==null||T.dispose(),T=null}},[x,a,f]),Ei.useEffect(()=>{if(o!=="webgl")return;const v=i.current,T=s.current;if(!v||!T)return;const A=new IntersectionObserver(([g])=>T.setVisible(g.isIntersecting),{rootMargin:"140px 0px"});return A.observe(v),()=>A.disconnect()},[o]),Ei.useEffect(()=>{const v=n.current;if(!v||o!=="webgl"||a)return;const T=s.current;if(!T)return;const A=Ke.create({trigger:v,start:"top top",end:"bottom bottom",scrub:!0,anticipatePin:1,onUpdate:g=>T.setProgress(g.progress),onRefresh:g=>T.setProgress(g.progress)});return()=>A.kill()},[o,a]);const p=`${String(c+1).padStart(2,"0")} / ${String(r.length).padStart(2,"0")}`;if(r.length===0)return $e.jsx("section",{className:"spatial-empty","aria-labelledby":`${e}-empty`,children:$e.jsxs("div",{className:"shell spatial-empty__inner",children:[$e.jsx("p",{className:"eyebrow",children:"02 / MEMORY FIELD"}),$e.jsx("h2",{id:`${e}-empty`,className:"display-lg",children:"空间还没有亮起来。"}),$e.jsx("p",{children:"第一张真实照片进入相册后，这里会长出一条可以穿行的记忆走廊。现在先去写下第一段故事，或者打开相册看看。"}),$e.jsxs("div",{className:"spatial-empty__links",children:[$e.jsxs(wl,{to:"/gallery",children:["前往相册 ",$e.jsx(Rf,{"aria-hidden":"true"})]}),$e.jsxs(wl,{to:"/moments",children:["翻阅点滴 ",$e.jsx(Rf,{"aria-hidden":"true"})]})]})]})});const _=o==="fallback"||a;return $e.jsx("section",{ref:n,id:e,className:`spatial-section${_?" is-static":""}`,style:{"--spatial-count":r.length},"aria-labelledby":`${e}-title`,children:$e.jsxs("div",{className:"spatial-pin",children:[$e.jsxs("div",{ref:i,className:"spatial-stage",children:[o==="fallback"?$e.jsx("div",{className:"spatial-fallback","aria-hidden":"true",children:r.slice(0,6).map((v,T)=>$e.jsxs("div",{className:`spatial-fallback__card spatial-fallback__card--${T%6}`,children:[$e.jsx("img",{src:v.thumbnailUrl||v.imageUrl,alt:"",loading:T<2?"eager":"lazy"}),v.dateLabel?$e.jsx("span",{children:v.dateLabel}):null]},v.id))}):null,$e.jsx("div",{className:"spatial-vignette","aria-hidden":"true"})]}),$e.jsxs("div",{className:"spatial-hud",children:[$e.jsxs("div",{className:"spatial-hud__head",children:[$e.jsx("p",{className:"eyebrow",children:"02 / MEMORY FIELD"}),$e.jsx("h2",{id:`${e}-title`,className:"display-md spatial-hud__title",children:"穿过我们留下的光。"})]}),$e.jsx("div",{className:"spatial-hud__caption","aria-live":"polite",children:d??m?$e.jsxs($e.Fragment,{children:[$e.jsx("span",{className:"meta",children:((S=d??m)==null?void 0:S.dateLabel)??"MEMORY"}),$e.jsx("strong",{children:(b=d??m)==null?void 0:b.title})]}):null}),$e.jsxs("div",{className:"spatial-hud__foot",children:[$e.jsx("span",{className:"spatial-hud__count",children:p}),$e.jsx("span",{className:"spatial-hud__hint",children:_?"静态照片空间":"向下滚动，穿过空间"}),$e.jsxs("a",{href:"#home-story",className:"spatial-hud__skip",children:["跳过空间 ",$e.jsx(Rm,{"aria-hidden":"true"})]})]})]}),$e.jsx("div",{className:"spatial-progress","aria-hidden":"true",children:$e.jsx("span",{style:{transform:`scaleX(${_?1:r.length<=1?0:c/(r.length-1)})`}})}),$e.jsx("nav",{className:"spatial-accessible","aria-label":"记忆空间中的照片",children:$e.jsx("ul",{children:r.map(v=>$e.jsx("li",{children:$e.jsx(wl,{to:v.href??"/moments",children:v.title})},v.id))})})]})})}export{YE as default};
