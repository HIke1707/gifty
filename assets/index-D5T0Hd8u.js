(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const K={},sn=[],et=()=>{},kh=()=>!1,ti=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Br=t=>t.startsWith("onUpdate:"),be=Object.assign,Ur=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mh=Object.prototype.hasOwnProperty,H=(t,e)=>Mh.call(t,e),D=Array.isArray,rn=t=>ni(t)==="[object Map]",xa=t=>ni(t)==="[object Set]",k=t=>typeof t=="function",re=t=>typeof t=="string",St=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Pa=t=>(ne(t)||k(t))&&k(t.then)&&k(t.catch),Oa=Object.prototype.toString,ni=t=>Oa.call(t),Fh=t=>ni(t).slice(8,-1),Da=t=>ni(t)==="[object Object]",Wr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fn=Lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),si=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lh=/-(\w)/g,Me=si(t=>t.replace(Lh,(e,n)=>n?n.toUpperCase():"")),Bh=/\B([A-Z])/g,zt=si(t=>t.replace(Bh,"-$1").toLowerCase()),ii=si(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pi=si(t=>t?`on${ii(t)}`:""),Ut=(t,e)=>!Object.is(t,e),Ss=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ka=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},sr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jo;const ri=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $r(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=re(s)?Hh(s):$r(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(re(t)||ne(t))return t}const Uh=/;(?![^(]*\))/g,Wh=/:([^]+)/,$h=/\/\*[^]*?\*\//g;function Hh(t){const e={};return t.replace($h,"").split(Uh).forEach(n=>{if(n){const s=n.split(Wh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hr(t){let e="";if(re(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=Hr(t[n]);s&&(e+=s+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jh=Lr(Vh);function Ma(t){return!!t||t===""}const Fa=t=>!!(t&&t.__v_isRef===!0),oi=t=>re(t)?t:t==null?"":D(t)||ne(t)&&(t.toString===Oa||!k(t.toString))?Fa(t)?oi(t.value):JSON.stringify(t,La,2):String(t),La=(t,e)=>Fa(e)?La(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Oi(s,r)+" =>"]=i,n),{})}:xa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oi(n))}:St(e)?Oi(e):ne(e)&&!D(e)&&!Da(e)?String(e):e,Oi=(t,e="")=>{var n;return St(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Gh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function qh(){return xe}let J;const Di=new WeakSet;class Ba{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Di.has(this)&&(Di.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xo(this),$a(this);const e=J,n=Be;J=this,Be=!0;try{return this.fn()}finally{Ha(this),J=e,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gr(e);this.deps=this.depsTail=void 0,Xo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Di.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ir(this)&&this.run()}get dirty(){return ir(this)}}let Ua=0,Ln,Bn;function Wa(t,e=!1){if(t.flags|=8,e){t.next=Bn,Bn=t;return}t.next=Ln,Ln=t}function Vr(){Ua++}function jr(){if(--Ua>0)return;if(Bn){let e=Bn;for(Bn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ln;){let e=Ln;for(Ln=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function $a(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ha(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Gr(s),Kh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ir(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Va(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Va(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zn))return;t.globalVersion=zn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ir(t)){t.flags&=-3;return}const n=J,s=Be;J=t,Be=!0;try{$a(t);const i=t.fn(t._value);(e.version===0||Ut(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{J=n,Be=s,Ha(t),t.flags&=-3}}function Gr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Gr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Be=!0;const ja=[];function Tt(){ja.push(Be),Be=!1}function Rt(){const t=ja.pop();Be=t===void 0?!0:t}function Xo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=J;J=void 0;try{e()}finally{J=n}}}let zn=0;class zh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ga{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!J||!Be||J===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==J)n=this.activeLink=new zh(J,this),J.deps?(n.prevDep=J.depsTail,J.depsTail.nextDep=n,J.depsTail=n):J.deps=J.depsTail=n,qa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=J.depsTail,n.nextDep=void 0,J.depsTail.nextDep=n,J.depsTail=n,J.deps===n&&(J.deps=s)}return n}trigger(e){this.version++,zn++,this.notify(e)}notify(e){Vr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jr()}}}function qa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)qa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const rr=new WeakMap,Wt=Symbol(""),or=Symbol(""),Yn=Symbol("");function de(t,e,n){if(Be&&J){let s=rr.get(t);s||rr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ga),i.map=s,i.key=n),i.track()}}function ot(t,e,n,s,i,r){const o=rr.get(t);if(!o){zn++;return}const l=a=>{a&&a.trigger()};if(Vr(),e==="clear")o.forEach(l);else{const a=D(t),c=a&&Wr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Yn||!St(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Yn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Wt)),rn(t)&&l(o.get(or)));break;case"delete":a||(l(o.get(Wt)),rn(t)&&l(o.get(or)));break;case"set":rn(t)&&l(o.get(Wt));break}}jr()}function Zt(t){const e=j(t);return e===t?e:(de(e,"iterate",Yn),Ue(t)?e:e.map(we))}function li(t){return de(t=j(t),"iterate",Yn),t}const Yh={__proto__:null,[Symbol.iterator](){return ki(this,Symbol.iterator,we)},concat(...t){return Zt(this).concat(...t.map(e=>D(e)?Zt(e):e))},entries(){return ki(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return it(this,"every",t,e,void 0,arguments)},filter(t,e){return it(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return it(this,"find",t,e,we,arguments)},findIndex(t,e){return it(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return it(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return it(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return it(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mi(this,"includes",t)},indexOf(...t){return Mi(this,"indexOf",t)},join(t){return Zt(this).join(t)},lastIndexOf(...t){return Mi(this,"lastIndexOf",t)},map(t,e){return it(this,"map",t,e,void 0,arguments)},pop(){return An(this,"pop")},push(...t){return An(this,"push",t)},reduce(t,...e){return Zo(this,"reduce",t,e)},reduceRight(t,...e){return Zo(this,"reduceRight",t,e)},shift(){return An(this,"shift")},some(t,e){return it(this,"some",t,e,void 0,arguments)},splice(...t){return An(this,"splice",t)},toReversed(){return Zt(this).toReversed()},toSorted(t){return Zt(this).toSorted(t)},toSpliced(...t){return Zt(this).toSpliced(...t)},unshift(...t){return An(this,"unshift",t)},values(){return ki(this,"values",we)}};function ki(t,e,n){const s=li(t),i=s[e]();return s!==t&&!Ue(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Qh=Array.prototype;function it(t,e,n,s,i,r){const o=li(t),l=o!==t&&!Ue(t),a=o[e];if(a!==Qh[e]){const h=a.apply(t,r);return l?we(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,we(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Zo(t,e,n,s){const i=li(t);let r=n;return i!==t&&(Ue(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,we(l),a,t)}),i[e](r,...s)}function Mi(t,e,n){const s=j(t);de(s,"iterate",Yn);const i=s[e](...n);return(i===-1||i===!1)&&Yr(n[0])?(n[0]=j(n[0]),s[e](...n)):i}function An(t,e,n=[]){Tt(),Vr();const s=j(t)[e].apply(t,n);return jr(),Rt(),s}const Jh=Lr("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(St));function Xh(t){St(t)||(t=String(t));const e=j(this);return de(e,"has",t),e.hasOwnProperty(t)}class za{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?cf:Xa:r?Ja:Qa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=D(e);if(!i){let a;if(o&&(a=Yh[n]))return a;if(n==="hasOwnProperty")return Xh}const l=Reflect.get(e,n,ye(e)?e:s);return(St(n)?Ka.has(n):Jh(n))||(i||de(e,"get",n),r)?l:ye(l)?o&&Wr(n)?l:l.value:ne(l)?i?Za(l):Kr(l):l}}class Ya extends za{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=fn(r);if(!Ue(s)&&!fn(s)&&(r=j(r),s=j(s)),!D(e)&&ye(r)&&!ye(s))return a?!1:(r.value=s,!0)}const o=D(e)&&Wr(n)?Number(n)<e.length:H(e,n),l=Reflect.set(e,n,s,ye(e)?e:i);return e===j(i)&&(o?Ut(s,r)&&ot(e,"set",n,s):ot(e,"add",n,s)),l}deleteProperty(e,n){const s=H(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ot(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!St(n)||!Ka.has(n))&&de(e,"has",n),s}ownKeys(e){return de(e,"iterate",D(e)?"length":Wt),Reflect.ownKeys(e)}}class Zh extends za{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ef=new Ya,tf=new Zh,nf=new Ya(!0);const lr=t=>t,bs=t=>Reflect.getPrototypeOf(t);function sf(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=rn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?lr:e?ar:we;return!e&&de(r,"iterate",a?or:Wt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Cs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rf(t,e){const n={get(i){const r=this.__v_raw,o=j(r),l=j(i);t||(Ut(i,l)&&de(o,"get",i),de(o,"get",l));const{has:a}=bs(o),c=e?lr:t?ar:we;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&de(j(i),"iterate",Wt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=j(r),l=j(i);return t||(Ut(i,l)&&de(o,"has",i),de(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=j(l),c=e?lr:t?ar:we;return!t&&de(a,"iterate",Wt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return be(n,t?{add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear")}:{add(i){!e&&!Ue(i)&&!fn(i)&&(i=j(i));const r=j(this);return bs(r).has.call(r,i)||(r.add(i),ot(r,"add",i,i)),this},set(i,r){!e&&!Ue(r)&&!fn(r)&&(r=j(r));const o=j(this),{has:l,get:a}=bs(o);let c=l.call(o,i);c||(i=j(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Ut(r,u)&&ot(o,"set",i,r):ot(o,"add",i,r),this},delete(i){const r=j(this),{has:o,get:l}=bs(r);let a=o.call(r,i);a||(i=j(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ot(r,"delete",i,void 0),c},clear(){const i=j(this),r=i.size!==0,o=i.clear();return r&&ot(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=sf(i,t,e)}),n}function qr(t,e){const n=rf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const of={get:qr(!1,!1)},lf={get:qr(!1,!0)},af={get:qr(!0,!1)};const Qa=new WeakMap,Ja=new WeakMap,Xa=new WeakMap,cf=new WeakMap;function uf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hf(t){return t.__v_skip||!Object.isExtensible(t)?0:uf(Fh(t))}function Kr(t){return fn(t)?t:zr(t,!1,ef,of,Qa)}function ff(t){return zr(t,!1,nf,lf,Ja)}function Za(t){return zr(t,!0,tf,af,Xa)}function zr(t,e,n,s,i){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=hf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function on(t){return fn(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function Ue(t){return!!(t&&t.__v_isShallow)}function Yr(t){return t?!!t.__v_raw:!1}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function df(t){return!H(t,"__v_skip")&&Object.isExtensible(t)&&ka(t,"__v_skip",!0),t}const we=t=>ne(t)?Kr(t):t,ar=t=>ne(t)?Za(t):t;function ye(t){return t?t.__v_isRef===!0:!1}function pf(t){return ye(t)?t.value:t}const _f={get:(t,e,n)=>e==="__v_raw"?t:pf(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ye(i)&&!ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ec(t){return on(t)?t:new Proxy(t,_f)}class gf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ga(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&J!==this)return Wa(this,!0),!0}get value(){const e=this.dep.track();return Va(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mf(t,e,n=!1){let s,i;return k(t)?s=t:(s=t.get,i=t.set),new gf(s,i,n)}const ws={},xs=new WeakMap;let kt;function yf(t,e=!1,n=kt){if(n){let s=xs.get(n);s||xs.set(n,s=[]),s.push(t)}}function vf(t,e,n=K){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=P=>i?P:Ue(P)||i===!1||i===0?lt(P,1):lt(P);let u,h,d,_,w=!1,R=!1;if(ye(t)?(h=()=>t.value,w=Ue(t)):on(t)?(h=()=>c(t),w=!0):D(t)?(R=!0,w=t.some(P=>on(P)||Ue(P)),h=()=>t.map(P=>{if(ye(P))return P.value;if(on(P))return c(P);if(k(P))return a?a(P,2):P()})):k(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Tt();try{d()}finally{Rt()}}const P=kt;kt=u;try{return a?a(t,3,[_]):t(_)}finally{kt=P}}:h=et,e&&i){const P=h,oe=i===!0?1/0:i;h=()=>lt(P(),oe)}const W=qh(),B=()=>{u.stop(),W&&W.active&&Ur(W.effects,u)};if(r&&e){const P=e;e=(...oe)=>{P(...oe),B()}}let q=R?new Array(t.length).fill(ws):ws;const z=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const oe=u.run();if(i||w||(R?oe.some((pt,Ve)=>Ut(pt,q[Ve])):Ut(oe,q))){d&&d();const pt=kt;kt=u;try{const Ve=[oe,q===ws?void 0:R&&q[0]===ws?[]:q,_];a?a(e,3,Ve):e(...Ve),q=oe}finally{kt=pt}}}else u.run()};return l&&l(z),u=new Ba(h),u.scheduler=o?()=>o(z,!1):z,_=P=>yf(P,!1,u),d=u.onStop=()=>{const P=xs.get(u);if(P){if(a)a(P,4);else for(const oe of P)oe();xs.delete(u)}},e?s?z(!0):q=u.run():o?o(z.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function lt(t,e=1/0,n){if(e<=0||!ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ye(t))lt(t.value,e,n);else if(D(t))for(let s=0;s<t.length;s++)lt(t[s],e,n);else if(xa(t)||rn(t))t.forEach(s=>{lt(s,e,n)});else if(Da(t)){for(const s in t)lt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&lt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function as(t,e,n,s){try{return s?t(...s):t()}catch(i){ai(i,e,n)}}function nt(t,e,n,s){if(k(t)){const i=as(t,e,n,s);return i&&Pa(i)&&i.catch(r=>{ai(r,e,n)}),i}if(D(t)){const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}}function ai(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||K;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Tt(),as(r,null,10,[t,a,c]),Rt();return}}bf(t,n,i,s,o)}function bf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const me=[];let Ye=-1;const ln=[];let gt=null,en=0;const tc=Promise.resolve();let Ps=null;function Cf(t){const e=Ps||tc;return t?e.then(this?t.bind(this):t):e}function wf(t){let e=Ye+1,n=me.length;for(;e<n;){const s=e+n>>>1,i=me[s],r=Qn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Qr(t){if(!(t.flags&1)){const e=Qn(t),n=me[me.length-1];!n||!(t.flags&2)&&e>=Qn(n)?me.push(t):me.splice(wf(e),0,t),t.flags|=1,nc()}}function nc(){Ps||(Ps=tc.then(ic))}function Ef(t){D(t)?ln.push(...t):gt&&t.id===-1?gt.splice(en+1,0,t):t.flags&1||(ln.push(t),t.flags|=1),nc()}function el(t,e,n=Ye+1){for(;n<me.length;n++){const s=me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function sc(t){if(ln.length){const e=[...new Set(ln)].sort((n,s)=>Qn(n)-Qn(s));if(ln.length=0,gt){gt.push(...e);return}for(gt=e,en=0;en<gt.length;en++){const n=gt[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,en=0}}const Qn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ic(t){try{for(Ye=0;Ye<me.length;Ye++){const e=me[Ye];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),as(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ye<me.length;Ye++){const e=me[Ye];e&&(e.flags&=-2)}Ye=-1,me.length=0,sc(),Ps=null,(me.length||ln.length)&&ic()}}let Pe=null,rc=null;function Os(t){const e=Pe;return Pe=t,rc=t&&t.type.__scopeId||null,e}function If(t,e=Pe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hl(-1);const r=Os(e);let o;try{o=t(...i)}finally{Os(r),s._d&&hl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function oc(t,e){if(Pe===null)return t;const n=fi(Pe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=K]=e[i];r&&(k(r)&&(r={mounted:r,updated:r}),r.deep&&lt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Ot(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Tt(),nt(a,n,8,[t.el,l,t,e]),Rt())}}const Sf=Symbol("_vte"),Tf=t=>t.__isTeleport;function Jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ds(t,e,n,s,i=!1){if(D(t)){t.forEach((w,R)=>Ds(w,e&&(D(e)?e[R]:e),n,s,i));return}if(Un(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ds(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?fi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===K?l.refs={}:l.refs,h=l.setupState,d=j(h),_=h===K?()=>!1:w=>H(d,w);if(c!=null&&c!==a&&(re(c)?(u[c]=null,_(c)&&(h[c]=null)):ye(c)&&(c.value=null)),k(a))as(a,l,12,[o,u]);else{const w=re(a),R=ye(a);if(w||R){const W=()=>{if(t.f){const B=w?_(a)?h[a]:u[a]:a.value;i?D(B)&&Ur(B,r):D(B)?B.includes(r)||B.push(r):w?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else w?(u[a]=o,_(a)&&(h[a]=o)):R&&(a.value=o,t.k&&(u[t.k]=o))};o?(W.id=-1,Ne(W,n)):W()}}}ri().requestIdleCallback;ri().cancelIdleCallback;const Un=t=>!!t.type.__asyncLoader,ac=t=>t.type.__isKeepAlive;function Rf(t,e){cc(t,"a",e)}function Af(t,e){cc(t,"da",e)}function cc(t,e,n=pe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ci(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ac(i.parent.vnode)&&Nf(s,e,n,i),i=i.parent}}function Nf(t,e,n,s){const i=ci(e,t,s,!0);uc(()=>{Ur(s[e],i)},n)}function ci(t,e,n=pe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Tt();const l=cs(n),a=nt(e,n,t,o);return l(),Rt(),a});return s?i.unshift(r):i.push(r),r}}const dt=t=>(e,n=pe)=>{(!Xn||t==="sp")&&ci(t,(...s)=>e(...s),n)},xf=dt("bm"),Pf=dt("m"),Of=dt("bu"),Df=dt("u"),kf=dt("bum"),uc=dt("um"),Mf=dt("sp"),Ff=dt("rtg"),Lf=dt("rtc");function Bf(t,e=pe){ci("ec",t,e)}const Uf="components";function tl(t,e){return $f(Uf,t,!0,e)||t}const Wf=Symbol.for("v-ndc");function $f(t,e,n=!0,s=!1){const i=Pe||pe;if(i){const r=i.type;{const l=Od(r,!1);if(l&&(l===e||l===Me(e)||l===ii(Me(e))))return r}const o=nl(i[t]||r[t],e)||nl(i.appContext[t],e);return!o&&s?r:o}}function nl(t,e){return t&&(t[e]||t[Me(e)]||t[ii(Me(e))])}function Hf(t,e,n,s){let i;const r=n,o=D(t);if(o||re(t)){const l=o&&on(t);let a=!1;l&&(a=!Ue(t),t=li(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?we(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ne(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const cr=t=>t?Oc(t)?fi(t):cr(t.parent):null,Wn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cr(t.parent),$root:t=>cr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fc(t),$forceUpdate:t=>t.f||(t.f=()=>{Qr(t.update)}),$nextTick:t=>t.n||(t.n=Cf.bind(t.proxy)),$watch:t=>ud.bind(t)}),Fi=(t,e)=>t!==K&&!t.__isScriptSetup&&H(t,e),Vf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fi(s,e))return o[e]=1,s[e];if(i!==K&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==K&&H(n,e))return o[e]=4,n[e];ur&&(o[e]=0)}}const u=Wn[e];let h,d;if(u)return e==="$attrs"&&de(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==K&&H(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,H(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fi(i,e)?(i[e]=n,!0):s!==K&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==K&&H(t,o)||Fi(e,o)||(l=r[0])&&H(l,o)||H(s,o)||H(Wn,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sl(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ur=!0;function jf(t){const e=fc(t),n=t.proxy,s=t.ctx;ur=!1,e.beforeCreate&&il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:w,activated:R,deactivated:W,beforeDestroy:B,beforeUnmount:q,destroyed:z,unmounted:P,render:oe,renderTracked:pt,renderTriggered:Ve,errorCaptured:_t,serverPrefetch:_s,expose:Nt,inheritAttrs:In,components:gs,directives:ms,filters:Ni}=e;if(c&&Gf(c,s,null),o)for(const te in o){const Y=o[te];k(Y)&&(s[te]=Y.bind(n))}if(i){const te=i.call(n,n);ne(te)&&(t.data=Kr(te))}if(ur=!0,r)for(const te in r){const Y=r[te],xt=k(Y)?Y.bind(n,n):k(Y.get)?Y.get.bind(n,n):et,ys=!k(Y)&&k(Y.set)?Y.set.bind(n):et,Pt=kd({get:xt,set:ys});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:je=>Pt.value=je})}if(l)for(const te in l)hc(l[te],s,n,te);if(a){const te=k(a)?a.call(n):a;Reflect.ownKeys(te).forEach(Y=>{Jf(Y,te[Y])})}u&&il(u,t,"c");function _e(te,Y){D(Y)?Y.forEach(xt=>te(xt.bind(n))):Y&&te(Y.bind(n))}if(_e(xf,h),_e(Pf,d),_e(Of,_),_e(Df,w),_e(Rf,R),_e(Af,W),_e(Bf,_t),_e(Lf,pt),_e(Ff,Ve),_e(kf,q),_e(uc,P),_e(Mf,_s),D(Nt))if(Nt.length){const te=t.exposed||(t.exposed={});Nt.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:xt=>n[Y]=xt})})}else t.exposed||(t.exposed={});oe&&t.render===et&&(t.render=oe),In!=null&&(t.inheritAttrs=In),gs&&(t.components=gs),ms&&(t.directives=ms),_s&&lc(t)}function Gf(t,e,n=et){D(t)&&(t=hr(t));for(const s in t){const i=t[s];let r;ne(i)?"default"in i?r=Ts(i.from||s,i.default,!0):r=Ts(i.from||s):r=Ts(i),ye(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function il(t,e,n){nt(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function hc(t,e,n,s){let i=s.includes(".")?Tc(n,s):()=>n[s];if(re(t)){const r=e[t];k(r)&&Bi(i,r)}else if(k(t))Bi(i,t.bind(n));else if(ne(t))if(D(t))t.forEach(r=>hc(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&Bi(i,r,t)}}function fc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ks(a,c,o,!0)),ks(a,e,o)),ne(e)&&r.set(e,a),a}function ks(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ks(t,r,n,!0),i&&i.forEach(o=>ks(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=qf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qf={data:rl,props:ol,emits:ol,methods:Mn,computed:Mn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Mn,directives:Mn,watch:zf,provide:rl,inject:Kf};function rl(t,e){return e?t?function(){return be(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function Kf(t,e){return Mn(hr(t),hr(e))}function hr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?be(Object.create(null),t,e):e}function ol(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:be(Object.create(null),sl(t),sl(e??{})):e}function zf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function dc(){return{app:null,config:{isNativeTag:kh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yf=0;function Qf(t,e){return function(s,i=null){k(s)||(s=be({},s)),i!=null&&!ne(i)&&(i=null);const r=dc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Yf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Md,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&k(u.install)?(o.add(u),u.install(c,...h)):k(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||We(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,fi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(nt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=an;an=c;try{return u()}finally{an=h}}};return c}}let an=null;function Jf(t,e){if(pe){let n=pe.provides;const s=pe.parent&&pe.parent.provides;s===n&&(n=pe.provides=Object.create(s)),n[t]=e}}function Ts(t,e,n=!1){const s=pe||Pe;if(s||an){const i=an?an._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s&&s.proxy):e}}const pc={},_c=()=>Object.create(pc),gc=t=>Object.getPrototypeOf(t)===pc;function Xf(t,e,n,s=!1){const i={},r=_c();t.propsDefaults=Object.create(null),mc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ff(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Zf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ui(t.emitsOptions,d))continue;const _=e[d];if(a)if(H(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const w=Me(d);i[w]=fr(a,l,w,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{mc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!H(e,h)&&((u=zt(h))===h||!H(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=fr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!H(e,h))&&(delete r[h],c=!0)}c&&ot(t.attrs,"set","")}function mc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Fn(a))continue;const c=e[a];let u;i&&H(i,u=Me(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ui(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=fr(i,a,h,c[h],t,!H(c,h))}}return o}function fr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&k(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=cs(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===zt(n))&&(s=!0))}return s}const ed=new WeakMap;function yc(t,e,n=!1){const s=n?ed:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const u=h=>{a=!0;const[d,_]=yc(h,e,!0);be(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ne(t)&&s.set(t,sn),sn;if(D(r))for(let u=0;u<r.length;u++){const h=Me(r[u]);ll(h)&&(o[h]=K)}else if(r)for(const u in r){const h=Me(u);if(ll(h)){const d=r[u],_=o[h]=D(d)||k(d)?{type:d}:be({},d),w=_.type;let R=!1,W=!0;if(D(w))for(let B=0;B<w.length;++B){const q=w[B],z=k(q)&&q.name;if(z==="Boolean"){R=!0;break}else z==="String"&&(W=!1)}else R=k(w)&&w.name==="Boolean";_[0]=R,_[1]=W,(R||H(_,"default"))&&l.push(h)}}const c=[o,l];return ne(t)&&s.set(t,c),c}function ll(t){return t[0]!=="$"&&!Fn(t)}const vc=t=>t[0]==="_"||t==="$stable",Xr=t=>D(t)?t.map(Je):[Je(t)],td=(t,e,n)=>{if(e._n)return e;const s=If((...i)=>Xr(e(...i)),n);return s._c=!1,s},bc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(vc(i))continue;const r=t[i];if(k(r))e[i]=td(i,r,s);else if(r!=null){const o=Xr(r);e[i]=()=>o}}},Cc=(t,e)=>{const n=Xr(e);t.slots.default=()=>n},wc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},nd=(t,e,n)=>{const s=t.slots=_c();if(t.vnode.shapeFlag&32){const i=e._;i?(wc(s,e,n),n&&ka(s,"_",i,!0)):bc(e,s)}else e&&Cc(t,e)},sd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=K;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:wc(i,e,n):(r=!e.$stable,bc(e,i)),o=e}else e&&(Cc(t,e),o={default:1});if(r)for(const l in i)!vc(l)&&o[l]==null&&delete i[l]},Ne=md;function id(t){return rd(t)}function rd(t,e){const n=ri();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=et,insertStaticContent:w}=t,R=(f,p,g,v=null,m=null,y=null,S=void 0,I=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nn(f,p)&&(v=vs(f),je(f,m,y,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:b,ref:N,shapeFlag:T}=p;switch(b){case hi:W(f,p,g,v);break;case $t:B(f,p,g,v);break;case Ui:f==null&&q(p,g,v,S);break;case Qe:gs(f,p,g,v,m,y,S,I,E);break;default:T&1?oe(f,p,g,v,m,y,S,I,E):T&6?ms(f,p,g,v,m,y,S,I,E):(T&64||T&128)&&b.process(f,p,g,v,m,y,S,I,E,Tn)}N!=null&&m&&Ds(N,f&&f.ref,y,p||f,!p)},W=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},B=(f,p,g,v)=>{f==null?s(p.el=a(p.children||""),g,v):p.el=f.el},q=(f,p,g,v)=>{[f.el,f.anchor]=w(f.children,p,g,v,f.el,f.anchor)},z=({el:f,anchor:p},g,v)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,v),f=m;s(p,g,v)},P=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},oe=(f,p,g,v,m,y,S,I,E)=>{p.type==="svg"?S="svg":p.type==="math"&&(S="mathml"),f==null?pt(p,g,v,m,y,S,I,E):_s(f,p,m,y,S,I,E)},pt=(f,p,g,v,m,y,S,I)=>{let E,b;const{props:N,shapeFlag:T,transition:A,dirs:O}=f;if(E=f.el=o(f.type,y,N&&N.is,N),T&8?u(E,f.children):T&16&&_t(f.children,E,null,v,m,Li(f,y),S,I),O&&Ot(f,null,v,"created"),Ve(E,f,f.scopeId,S,v),N){for(const Q in N)Q!=="value"&&!Fn(Q)&&r(E,Q,null,N[Q],y,v);"value"in N&&r(E,"value",null,N.value,y),(b=N.onVnodeBeforeMount)&&ze(b,v,f)}O&&Ot(f,null,v,"beforeMount");const U=od(m,A);U&&A.beforeEnter(E),s(E,p,g),((b=N&&N.onVnodeMounted)||U||O)&&Ne(()=>{b&&ze(b,v,f),U&&A.enter(E),O&&Ot(f,null,v,"mounted")},m)},Ve=(f,p,g,v,m)=>{if(g&&_(f,g),v)for(let y=0;y<v.length;y++)_(f,v[y]);if(m){let y=m.subTree;if(p===y||Ac(y.type)&&(y.ssContent===p||y.ssFallback===p)){const S=m.vnode;Ve(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},_t=(f,p,g,v,m,y,S,I,E=0)=>{for(let b=E;b<f.length;b++){const N=f[b]=I?mt(f[b]):Je(f[b]);R(null,N,p,g,v,m,y,S,I)}},_s=(f,p,g,v,m,y,S)=>{const I=p.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:N}=p;E|=f.patchFlag&16;const T=f.props||K,A=p.props||K;let O;if(g&&Dt(g,!1),(O=A.onVnodeBeforeUpdate)&&ze(O,g,p,f),N&&Ot(p,f,g,"beforeUpdate"),g&&Dt(g,!0),(T.innerHTML&&A.innerHTML==null||T.textContent&&A.textContent==null)&&u(I,""),b?Nt(f.dynamicChildren,b,I,g,v,Li(p,m),y):S||Y(f,p,I,null,g,v,Li(p,m),y,!1),E>0){if(E&16)In(I,T,A,g,m);else if(E&2&&T.class!==A.class&&r(I,"class",null,A.class,m),E&4&&r(I,"style",T.style,A.style,m),E&8){const U=p.dynamicProps;for(let Q=0;Q<U.length;Q++){const V=U[Q],Re=T[V],Ce=A[V];(Ce!==Re||V==="value")&&r(I,V,Re,Ce,m,g)}}E&1&&f.children!==p.children&&u(I,p.children)}else!S&&b==null&&In(I,T,A,g,m);((O=A.onVnodeUpdated)||N)&&Ne(()=>{O&&ze(O,g,p,f),N&&Ot(p,f,g,"updated")},v)},Nt=(f,p,g,v,m,y,S)=>{for(let I=0;I<p.length;I++){const E=f[I],b=p[I],N=E.el&&(E.type===Qe||!Nn(E,b)||E.shapeFlag&70)?h(E.el):g;R(E,b,N,null,v,m,y,S,!0)}},In=(f,p,g,v,m)=>{if(p!==g){if(p!==K)for(const y in p)!Fn(y)&&!(y in g)&&r(f,y,p[y],null,m,v);for(const y in g){if(Fn(y))continue;const S=g[y],I=p[y];S!==I&&y!=="value"&&r(f,y,I,S,m,v)}"value"in g&&r(f,"value",p.value,g.value,m)}},gs=(f,p,g,v,m,y,S,I,E)=>{const b=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:O}=p;O&&(I=I?I.concat(O):O),f==null?(s(b,g,v),s(N,g,v),_t(p.children||[],g,N,m,y,S,I,E)):T>0&&T&64&&A&&f.dynamicChildren?(Nt(f.dynamicChildren,A,g,m,y,S,I),(p.key!=null||m&&p===m.subTree)&&Ec(f,p,!0)):Y(f,p,g,N,m,y,S,I,E)},ms=(f,p,g,v,m,y,S,I,E)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?m.ctx.activate(p,g,v,S,E):Ni(p,g,v,m,y,S,E):qo(f,p,E)},Ni=(f,p,g,v,m,y,S)=>{const I=f.component=Rd(f,v,m);if(ac(f)&&(I.ctx.renderer=Tn),Ad(I,!1,S),I.asyncDep){if(m&&m.registerDep(I,_e,S),!f.el){const E=I.subTree=We($t);B(null,E,p,g)}}else _e(I,f,p,g,m,y,S)},qo=(f,p,g)=>{const v=p.component=f.component;if(_d(f,p,g))if(v.asyncDep&&!v.asyncResolved){te(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},_e=(f,p,g,v,m,y,S)=>{const I=()=>{if(f.isMounted){let{next:T,bu:A,u:O,parent:U,vnode:Q}=f;{const qe=Ic(f);if(qe){T&&(T.el=Q.el,te(f,T,S)),qe.asyncDep.then(()=>{f.isUnmounted||I()});return}}let V=T,Re;Dt(f,!1),T?(T.el=Q.el,te(f,T,S)):T=Q,A&&Ss(A),(Re=T.props&&T.props.onVnodeBeforeUpdate)&&ze(Re,U,T,Q),Dt(f,!0);const Ce=cl(f),Ge=f.subTree;f.subTree=Ce,R(Ge,Ce,h(Ge.el),vs(Ge),f,m,y),T.el=Ce.el,V===null&&gd(f,Ce.el),O&&Ne(O,m),(Re=T.props&&T.props.onVnodeUpdated)&&Ne(()=>ze(Re,U,T,Q),m)}else{let T;const{el:A,props:O}=p,{bm:U,m:Q,parent:V,root:Re,type:Ce}=f,Ge=Un(p);Dt(f,!1),U&&Ss(U),!Ge&&(T=O&&O.onVnodeBeforeMount)&&ze(T,V,p),Dt(f,!0);{Re.ce&&Re.ce._injectChildStyle(Ce);const qe=f.subTree=cl(f);R(null,qe,g,v,f,m,y),p.el=qe.el}if(Q&&Ne(Q,m),!Ge&&(T=O&&O.onVnodeMounted)){const qe=p;Ne(()=>ze(T,V,qe),m)}(p.shapeFlag&256||V&&Un(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&Ne(f.a,m),f.isMounted=!0,p=g=v=null}};f.scope.on();const E=f.effect=new Ba(I);f.scope.off();const b=f.update=E.run.bind(E),N=f.job=E.runIfDirty.bind(E);N.i=f,N.id=f.uid,E.scheduler=()=>Qr(N),Dt(f,!0),b()},te=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Zf(f,p.props,v,g),sd(f,p.children,g),Tt(),el(f),Rt()},Y=(f,p,g,v,m,y,S,I,E=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,T=p.children,{patchFlag:A,shapeFlag:O}=p;if(A>0){if(A&128){ys(b,T,g,v,m,y,S,I,E);return}else if(A&256){xt(b,T,g,v,m,y,S,I,E);return}}O&8?(N&16&&Sn(b,m,y),T!==b&&u(g,T)):N&16?O&16?ys(b,T,g,v,m,y,S,I,E):Sn(b,m,y,!0):(N&8&&u(g,""),O&16&&_t(T,g,v,m,y,S,I,E))},xt=(f,p,g,v,m,y,S,I,E)=>{f=f||sn,p=p||sn;const b=f.length,N=p.length,T=Math.min(b,N);let A;for(A=0;A<T;A++){const O=p[A]=E?mt(p[A]):Je(p[A]);R(f[A],O,g,null,m,y,S,I,E)}b>N?Sn(f,m,y,!0,!1,T):_t(p,g,v,m,y,S,I,E,T)},ys=(f,p,g,v,m,y,S,I,E)=>{let b=0;const N=p.length;let T=f.length-1,A=N-1;for(;b<=T&&b<=A;){const O=f[b],U=p[b]=E?mt(p[b]):Je(p[b]);if(Nn(O,U))R(O,U,g,null,m,y,S,I,E);else break;b++}for(;b<=T&&b<=A;){const O=f[T],U=p[A]=E?mt(p[A]):Je(p[A]);if(Nn(O,U))R(O,U,g,null,m,y,S,I,E);else break;T--,A--}if(b>T){if(b<=A){const O=A+1,U=O<N?p[O].el:v;for(;b<=A;)R(null,p[b]=E?mt(p[b]):Je(p[b]),g,U,m,y,S,I,E),b++}}else if(b>A)for(;b<=T;)je(f[b],m,y,!0),b++;else{const O=b,U=b,Q=new Map;for(b=U;b<=A;b++){const Ae=p[b]=E?mt(p[b]):Je(p[b]);Ae.key!=null&&Q.set(Ae.key,b)}let V,Re=0;const Ce=A-U+1;let Ge=!1,qe=0;const Rn=new Array(Ce);for(b=0;b<Ce;b++)Rn[b]=0;for(b=O;b<=T;b++){const Ae=f[b];if(Re>=Ce){je(Ae,m,y,!0);continue}let Ke;if(Ae.key!=null)Ke=Q.get(Ae.key);else for(V=U;V<=A;V++)if(Rn[V-U]===0&&Nn(Ae,p[V])){Ke=V;break}Ke===void 0?je(Ae,m,y,!0):(Rn[Ke-U]=b+1,Ke>=qe?qe=Ke:Ge=!0,R(Ae,p[Ke],g,null,m,y,S,I,E),Re++)}const Yo=Ge?ld(Rn):sn;for(V=Yo.length-1,b=Ce-1;b>=0;b--){const Ae=U+b,Ke=p[Ae],Qo=Ae+1<N?p[Ae+1].el:v;Rn[b]===0?R(null,Ke,g,Qo,m,y,S,I,E):Ge&&(V<0||b!==Yo[V]?Pt(Ke,g,Qo,2):V--)}}},Pt=(f,p,g,v,m=null)=>{const{el:y,type:S,transition:I,children:E,shapeFlag:b}=f;if(b&6){Pt(f.component.subTree,p,g,v);return}if(b&128){f.suspense.move(p,g,v);return}if(b&64){S.move(f,p,g,Tn);return}if(S===Qe){s(y,p,g);for(let T=0;T<E.length;T++)Pt(E[T],p,g,v);s(f.anchor,p,g);return}if(S===Ui){z(f,p,g);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(y),s(y,p,g),Ne(()=>I.enter(y),m);else{const{leave:T,delayLeave:A,afterLeave:O}=I,U=()=>s(y,p,g),Q=()=>{T(y,()=>{U(),O&&O()})};A?A(y,U,Q):Q()}else s(y,p,g)},je=(f,p,g,v=!1,m=!1)=>{const{type:y,props:S,ref:I,children:E,dynamicChildren:b,shapeFlag:N,patchFlag:T,dirs:A,cacheIndex:O}=f;if(T===-2&&(m=!1),I!=null&&Ds(I,null,g,f,!0),O!=null&&(p.renderCache[O]=void 0),N&256){p.ctx.deactivate(f);return}const U=N&1&&A,Q=!Un(f);let V;if(Q&&(V=S&&S.onVnodeBeforeUnmount)&&ze(V,p,f),N&6)Dh(f.component,g,v);else{if(N&128){f.suspense.unmount(g,v);return}U&&Ot(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,Tn,v):b&&!b.hasOnce&&(y!==Qe||T>0&&T&64)?Sn(b,p,g,!1,!0):(y===Qe&&T&384||!m&&N&16)&&Sn(E,p,g),v&&Ko(f)}(Q&&(V=S&&S.onVnodeUnmounted)||U)&&Ne(()=>{V&&ze(V,p,f),U&&Ot(f,null,p,"unmounted")},g)},Ko=f=>{const{type:p,el:g,anchor:v,transition:m}=f;if(p===Qe){Oh(g,v);return}if(p===Ui){P(f);return}const y=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:I}=m,E=()=>S(g,y);I?I(f.el,y,E):E()}else y()},Oh=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Dh=(f,p,g)=>{const{bum:v,scope:m,job:y,subTree:S,um:I,m:E,a:b}=f;al(E),al(b),v&&Ss(v),m.stop(),y&&(y.flags|=8,je(S,f,p,g)),I&&Ne(I,p),Ne(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Sn=(f,p,g,v=!1,m=!1,y=0)=>{for(let S=y;S<f.length;S++)je(f[S],p,g,v,m)},vs=f=>{if(f.shapeFlag&6)return vs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[Sf];return g?d(g):p};let xi=!1;const zo=(f,p,g)=>{f==null?p._vnode&&je(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),p._vnode=f,xi||(xi=!0,el(),sc(),xi=!1)},Tn={p:R,um:je,m:Pt,r:Ko,mt:Ni,mc:_t,pc:Y,pbc:Nt,n:vs,o:t};return{render:zo,hydrate:void 0,createApp:Qf(zo)}}function Li({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function od(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ec(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=mt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ec(o,l)),l.type===hi&&(l.el=o.el)}}function ld(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ic(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ic(e)}function al(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ad=Symbol.for("v-scx"),cd=()=>Ts(ad);function Bi(t,e,n){return Sc(t,e,n)}function Sc(t,e,n=K){const{immediate:s,deep:i,flush:r,once:o}=n,l=be({},n),a=e&&s||!e&&r!=="post";let c;if(Xn){if(r==="sync"){const _=cd();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=et,_.resume=et,_.pause=et,_}}const u=pe;l.call=(_,w,R)=>nt(_,u,w,R);let h=!1;r==="post"?l.scheduler=_=>{Ne(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,w)=>{w?_():Qr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=vf(t,e,l);return Xn&&(c?c.push(d):a&&d()),d}function ud(t,e,n){const s=this.proxy,i=re(t)?t.includes(".")?Tc(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=cs(this),l=Sc(i,r.bind(s),n);return o(),l}function Tc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const hd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Me(e)}Modifiers`]||t[`${zt(e)}Modifiers`];function fd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||K;let i=n;const r=e.startsWith("update:"),o=r&&hd(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>re(u)?u.trim():u)),o.number&&(i=n.map(sr)));let l,a=s[l=Pi(e)]||s[l=Pi(Me(e))];!a&&r&&(a=s[l=Pi(zt(e))]),a&&nt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,nt(c,t,6,i)}}function Rc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const u=Rc(c,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ne(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):be(o,r),ne(t)&&s.set(t,o),o)}function ui(t,e){return!t||!ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,zt(e))||H(t,e))}function cl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:w,inheritAttrs:R}=t,W=Os(t);let B,q;try{if(n.shapeFlag&4){const P=i||s,oe=P;B=Je(c.call(oe,P,u,h,_,d,w)),q=l}else{const P=e;B=Je(P.length>1?P(h,{attrs:l,slots:o,emit:a}):P(h,null)),q=e.props?l:dd(l)}}catch(P){$n.length=0,ai(P,t,1),B=We($t)}let z=B;if(q&&R!==!1){const P=Object.keys(q),{shapeFlag:oe}=z;P.length&&oe&7&&(r&&P.some(Br)&&(q=pd(q,r)),z=dn(z,q,!1,!0))}return n.dirs&&(z=dn(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Jr(z,n.transition),B=z,Os(W),B}const dd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ti(n))&&((e||(e={}))[n]=t[n]);return e},pd=(t,e)=>{const n={};for(const s in t)(!Br(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _d(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ul(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ui(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ul(s,o,c):!0:!!o;return!1}function ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ui(n,r))return!0}return!1}function gd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ac=t=>t.__isSuspense;function md(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Ef(t)}const Qe=Symbol.for("v-fgt"),hi=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Ui=Symbol.for("v-stc"),$n=[];let Oe=null;function Fe(t=!1){$n.push(Oe=t?null:[])}function yd(){$n.pop(),Oe=$n[$n.length-1]||null}let Jn=1;function hl(t,e=!1){Jn+=t,t<0&&Oe&&e&&(Oe.hasOnce=!0)}function Nc(t){return t.dynamicChildren=Jn>0?Oe||sn:null,yd(),Jn>0&&Oe&&Oe.push(t),t}function Xe(t,e,n,s,i,r){return Nc(Ee(t,e,n,s,i,r,!0))}function vd(t,e,n,s,i){return Nc(We(t,e,n,s,i,!0))}function xc(t){return t?t.__v_isVNode===!0:!1}function Nn(t,e){return t.type===e.type&&t.key===e.key}const Pc=({key:t})=>t??null,Rs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||ye(t)||k(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function Ee(t,e=null,n=null,s=0,i=null,r=t===Qe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pc(e),ref:e&&Rs(e),scopeId:rc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return l?(Zr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),Jn>0&&!o&&Oe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Oe.push(a),a}const We=bd;function bd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Wf)&&(t=$t),xc(t)){const l=dn(t,e,!0);return n&&Zr(l,n),Jn>0&&!r&&Oe&&(l.shapeFlag&6?Oe[Oe.indexOf(t)]=l:Oe.push(l)),l.patchFlag=-2,l}if(Dd(t)&&(t=t.__vccOpts),e){e=Cd(e);let{class:l,style:a}=e;l&&!re(l)&&(e.class=Hr(l)),ne(a)&&(Yr(a)&&!D(a)&&(a=be({},a)),e.style=$r(a))}const o=re(t)?1:Ac(t)?128:Tf(t)?64:ne(t)?4:k(t)?2:0;return Ee(t,e,n,s,i,o,r,!0)}function Cd(t){return t?Yr(t)||gc(t)?be({},t):t:null}function dn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Id(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Pc(c),ref:e&&e.ref?n&&r?D(r)?r.concat(Rs(e)):[r,Rs(e)]:Rs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Jr(u,a.clone(u)),u}function wd(t=" ",e=0){return We(hi,null,t,e)}function Ed(t="",e=!1){return e?(Fe(),vd($t,null,t)):We($t,null,t)}function Je(t){return t==null||typeof t=="boolean"?We($t):D(t)?We(Qe,null,t.slice()):xc(t)?mt(t):We(hi,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function Zr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Zr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!gc(e)?e._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[wd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Id(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Hr([e.class,s.class]));else if(i==="style")e.style=$r([e.style,s.style]);else if(ti(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ze(t,e,n,s=null){nt(t,e,7,[n,s])}const Sd=dc();let Td=0;function Rd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Sd,r={uid:Td++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(s,i),emitsOptions:Rc(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fd.bind(null,r),t.ce&&t.ce(r),r}let pe=null,Ms,dr;{const t=ri(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ms=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),dr=e("__VUE_SSR_SETTERS__",n=>Xn=n)}const cs=t=>{const e=pe;return Ms(t),t.scope.on(),()=>{t.scope.off(),Ms(e)}},fl=()=>{pe&&pe.scope.off(),Ms(null)};function Oc(t){return t.vnode.shapeFlag&4}let Xn=!1;function Ad(t,e=!1,n=!1){e&&dr(e);const{props:s,children:i}=t.vnode,r=Oc(t);Xf(t,s,r,e),nd(t,i,n);const o=r?Nd(t,e):void 0;return e&&dr(!1),o}function Nd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vf);const{setup:s}=n;if(s){Tt();const i=t.setupContext=s.length>1?Pd(t):null,r=cs(t),o=as(s,t,0,[t.props,i]),l=Pa(o);if(Rt(),r(),(l||t.sp)&&!Un(t)&&lc(t),l){if(o.then(fl,fl),e)return o.then(a=>{dl(t,a)}).catch(a=>{ai(a,t,0)});t.asyncDep=o}else dl(t,o)}else Dc(t)}function dl(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=ec(e)),Dc(t)}function Dc(t,e,n){const s=t.type;t.render||(t.render=s.render||et);{const i=cs(t);Tt();try{jf(t)}finally{Rt(),i()}}}const xd={get(t,e){return de(t,"get",""),t[e]}};function Pd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xd),slots:t.slots,emit:t.emit,expose:e}}function fi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ec(df(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}})):t.proxy}function Od(t,e=!0){return k(t)?t.displayName||t.name:t.name||e&&t.__name}function Dd(t){return k(t)&&"__vccOpts"in t}const kd=(t,e)=>mf(t,e,Xn),Md="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pr;const pl=typeof window<"u"&&window.trustedTypes;if(pl)try{pr=pl.createPolicy("vue",{createHTML:t=>t})}catch{}const kc=pr?t=>pr.createHTML(t):t=>t,Fd="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,_l=rt&&rt.createElement("template"),Bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?rt.createElementNS(Fd,t):e==="mathml"?rt.createElementNS(Ld,t):n?rt.createElement(t,{is:n}):rt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rt.createTextNode(t),createComment:t=>rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_l.innerHTML=kc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=_l.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ud=Symbol("_vtc");function Wd(t,e,n){const s=t[Ud];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gl=Symbol("_vod"),$d=Symbol("_vsh"),Hd=Symbol(""),Vd=/(^|;)\s*display\s*:/;function jd(t,e,n){const s=t.style,i=re(n);let r=!1;if(n&&!i){if(e)if(re(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&As(s,l,"")}else for(const o in e)n[o]==null&&As(s,o,"");for(const o in n)o==="display"&&(r=!0),As(s,o,n[o])}else if(i){if(e!==n){const o=s[Hd];o&&(n+=";"+o),s.cssText=n,r=Vd.test(n)}}else e&&t.removeAttribute("style");gl in t&&(t[gl]=r?s.display:"",t[$d]&&(s.display="none"))}const ml=/\s*!important$/;function As(t,e,n){if(D(n))n.forEach(s=>As(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Gd(t,e);ml.test(n)?t.setProperty(zt(s),n.replace(ml,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],Wi={};function Gd(t,e){const n=Wi[e];if(n)return n;let s=Me(e);if(s!=="filter"&&s in t)return Wi[e]=s;s=ii(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return Wi[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function bl(t,e,n,s,i,r=jh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n):n==null||r&&!Ma(n)?t.removeAttribute(e):t.setAttribute(e,r?"":St(n)?String(n):n)}function Cl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?kc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ma(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function qd(t,e,n,s){t.removeEventListener(e,n,s)}const wl=Symbol("_vei");function Kd(t,e,n,s,i=null){const r=t[wl]||(t[wl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=zd(e);if(s){const c=r[e]=Jd(s,i);tn(t,l,c,a)}else o&&(qd(t,l,o,a),r[e]=void 0)}}const El=/(?:Once|Passive|Capture)$/;function zd(t){let e;if(El.test(t)){e={};let s;for(;s=t.match(El);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zt(t.slice(2)),e]}let $i=0;const Yd=Promise.resolve(),Qd=()=>$i||(Yd.then(()=>$i=0),$i=Date.now());function Jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(Xd(s,n.value),e,5,[s])};return n.value=t,n.attached=Qd(),n}function Xd(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Wd(t,s,o):e==="style"?jd(t,n,s):ti(e)?Br(e)||Kd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ep(t,e,s,o))?(Cl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!re(s))?Cl(t,Me(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bl(t,e,s,o))};function ep(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Il(e)&&k(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Il(e)&&re(n)?!1:e in t}const Sl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>Ss(e,n):e};function tp(t){t.target.composing=!0}function Tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hi=Symbol("_assign"),Mc={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Hi]=Sl(i);const r=s||i.props&&i.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=sr(l)),t[Hi](l)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",tp),tn(t,"compositionend",Tl),tn(t,"change",Tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Hi]=Sl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?sr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},np=be({patchProp:Zd},Bd);let Rl;function sp(){return Rl||(Rl=id(np))}const ip=(...t)=>{const e=sp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=op(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,rp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function rp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function op(t){return re(t)?document.querySelector(t):t}var Al={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw bn(e)},bn=function(t){return new Error("Firebase Database ("+Fc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new ap;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const w=c<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ap extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bc=function(t){const e=Lc(t);return eo.encodeByteArray(e,!0)},Fs=function(t){return Bc(t).replace(/\./g,"")},_r=function(t){try{return eo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){return Uc(void 0,t)}function Uc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!up(n)||(t[n]=Uc(t[n],e[n]));return t}function up(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=()=>hp().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof Al>"u")return;const t=Al.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Wc=()=>{try{return fp()||dp()||pp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_p=t=>{var e,n;return(n=(e=Wc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gp=t=>{const e=_p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$c=()=>{var t;return(t=Wc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fs(JSON.stringify(n)),Fs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yp())}function vp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vc(){return Fc.NODE_ADMIN===!0}function jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Gc(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Cp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wp,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ep(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,l,s)}}function Ep(t,e){return t.replace(Ip,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ip=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Zn(_r(r[0])||""),n=Zn(_r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Sp=function(t){const e=qc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tp=function(t){const e=qc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(xl(r)&&xl(o)){if(!gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function xl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1e3,Pp=2,Op=4*60*60*1e3,Dp=.5;function Pl(t,e=xp,n=Pp){const s=e*Math.pow(n,t),i=Math.round(Dp*s*(Math.random()-.5)*2);return Math.min(Op,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new us;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fp(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mp(t){return t===Mt?void 0:t}function Fp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Bp={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Up=Z.INFO,Wp={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},$p=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Wp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class to{constructor(e){this.name=e,this._logLevel=Up,this._logHandler=$p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Hp=(t,e)=>e.some(n=>t instanceof n);let Ol,Dl;function Vp(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jp(){return Dl||(Dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,mr=new WeakMap,zc=new WeakMap,Vi=new WeakMap,no=new WeakMap;function Gp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),no.set(e,t),e}function qp(t){if(mr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mr.set(t,e)}let yr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kp(t){yr=t(yr)}function zp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ji(this),e,...n);return zc.set(s,e.sort?e.sort():[e]),vt(s)}:jp().includes(t)?function(...e){return t.apply(ji(this),e),vt(Kc.get(this))}:function(...e){return vt(t.apply(ji(this),e))}}function Yp(t){return typeof t=="function"?zp(t):(t instanceof IDBTransaction&&qp(t),Hp(t,Vp())?new Proxy(t,yr):t)}function vt(t){if(t instanceof IDBRequest)return Gp(t);if(Vi.has(t))return Vi.get(t);const e=Yp(t);return e!==t&&(Vi.set(t,e),no.set(e,t)),e}const ji=t=>no.get(t);function Yc(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=vt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(vt(o.result),a.oldVersion,a.newVersion,vt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Qp=["get","getKey","getAll","getAllKeys","count"],Jp=["put","add","delete","clear"],Gi=new Map;function kl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Jp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Qp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Gi.set(e,r),r}Kp(t=>({...t,get:(e,n,s)=>kl(e,n)||t.get(e,n,s),has:(e,n)=>!!kl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",Ml="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new to("@firebase/app"),e_="@firebase/app-compat",t_="@firebase/analytics-compat",n_="@firebase/analytics",s_="@firebase/app-check-compat",i_="@firebase/app-check",r_="@firebase/auth",o_="@firebase/auth-compat",l_="@firebase/database",a_="@firebase/data-connect",c_="@firebase/database-compat",u_="@firebase/functions",h_="@firebase/functions-compat",f_="@firebase/installations",d_="@firebase/installations-compat",p_="@firebase/messaging",__="@firebase/messaging-compat",g_="@firebase/performance",m_="@firebase/performance-compat",y_="@firebase/remote-config",v_="@firebase/remote-config-compat",b_="@firebase/storage",C_="@firebase/storage-compat",w_="@firebase/firestore",E_="@firebase/vertexai",I_="@firebase/firestore-compat",S_="firebase",T_="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]",R_={[vr]:"fire-core",[e_]:"fire-core-compat",[n_]:"fire-analytics",[t_]:"fire-analytics-compat",[i_]:"fire-app-check",[s_]:"fire-app-check-compat",[r_]:"fire-auth",[o_]:"fire-auth-compat",[l_]:"fire-rtdb",[a_]:"fire-data-connect",[c_]:"fire-rtdb-compat",[u_]:"fire-fn",[h_]:"fire-fn-compat",[f_]:"fire-iid",[d_]:"fire-iid-compat",[p_]:"fire-fcm",[__]:"fire-fcm-compat",[g_]:"fire-perf",[m_]:"fire-perf-compat",[y_]:"fire-rc",[v_]:"fire-rc-compat",[b_]:"fire-gcs",[C_]:"fire-gcs-compat",[w_]:"fire-fst",[I_]:"fire-fst-compat",[E_]:"fire-vertex","fire-js":"fire-js",[S_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,A_=new Map,Cr=new Map;function Fl(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(Cr.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;Cr.set(e,t);for(const n of Bs.values())Fl(n,t);for(const n of A_.values())Fl(n,t);return!0}function so(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new di("app","Firebase",N_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=T_;function Qc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=$c()),!n)throw bt.create("no-options");const r=Bs.get(i);if(r){if(gr(n,r.options)&&gr(s,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const o=new Lp(i);for(const a of Cr.values())o.addComponent(a);const l=new x_(n,s,o);return Bs.set(i,l),l}function O_(t=br){const e=Bs.get(t);if(!e&&t===br&&$c())return Qc();if(!e)throw bt.create("no-app",{appName:t});return e}function tt(t,e,n){var s;let i=(s=R_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(l.join(" "));return}wt(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebase-heartbeat-database",k_=1,es="firebase-heartbeat-store";let qi=null;function Jc(){return qi||(qi=Yc(D_,k_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),qi}async function M_(t){try{const n=(await Jc()).transaction(es),s=await n.objectStore(es).get(Xc(t));return await n.done,s}catch(e){if(e instanceof Yt)ht.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function Ll(t,e){try{const s=(await Jc()).transaction(es,"readwrite");await s.objectStore(es).put(e,Xc(t)),await s.done}catch(n){if(n instanceof Yt)ht.warn(n.message);else{const s=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(s.message)}}}function Xc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=1024,L_=30*24*60*60*1e3;class B_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=L_}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ht.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bl(),{heartbeatsToSend:s,unsentEntries:i}=U_(this._heartbeatsCache.heartbeats),r=Fs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ht.warn(n),""}}}function Bl(){return new Date().toISOString().substring(0,10)}function U_(t,e=F_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ul(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ul(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class W_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jc()?Gc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ul(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){wt(new ut("platform-logger",e=>new Xp(e),"PRIVATE")),wt(new ut("heartbeat",e=>new B_(e),"PRIVATE")),tt(vr,Ml,t),tt(vr,Ml,"esm2017"),tt("fire-js","")}$_("");var H_="firebase",V_="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(H_,V_,"app");var Wl={};const $l="@firebase/database",Hl="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc="";function j_(t){Zc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return st(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new G_(e)}}catch{}return new q_},Lt=eu("localStorage"),K_=eu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new to("@firebase/database"),z_=function(){let t=1;return function(){return t++}}(),tu=function(t){const e=Np(t),n=new Ap;n.update(e);const s=n.digest();return eo.encodeByteArray(s)},hs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=hs.apply(null,s):typeof s=="object"?e+=ue(s):e+=s,e+=" "}return e};let Hn=null,Vl=!0;const Y_=function(t,e){C(!e,"Can't turn on custom loggers persistently."),cn.logLevel=Z.VERBOSE,Hn=cn.log.bind(cn)},he=function(...t){if(Vl===!0&&(Vl=!1,Hn===null&&K_.get("logging_enabled")===!0&&Y_()),Hn){const e=hs.apply(null,t);Hn(e)}},fs=function(t){return function(...e){he(t,...e)}},wr=function(...t){const e="FIREBASE INTERNAL ERROR: "+hs(...t);cn.error(e)},ft=function(...t){const e=`FIREBASE FATAL ERROR: ${hs(...t)}`;throw cn.error(e),new Error(e)},ve=function(...t){const e="FIREBASE WARNING: "+hs(...t);cn.warn(e)},Q_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},io=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},J_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_n="[MIN_NAME]",Ht="[MAX_NAME]",Jt=function(t,e){if(t===e)return 0;if(t===_n||e===Ht)return-1;if(e===_n||t===Ht)return 1;{const n=jl(t),s=jl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},X_=function(t,e){return t===e?0:t<e?-1:1},xn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},ro=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ue(e[s]),n+=":",n+=ro(t[e[s]]);return n+="}",n},nu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const su=function(t){C(!io(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Z_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ng=new RegExp("^-?(0*)\\d{1,10}$"),sg=-2147483648,ig=2147483647,jl=function(t){if(ng.test(t)){const e=Number(t);if(e>=sg&&e<=ig)return e}return null},Cn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},rg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class Ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ns.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="5",iu="v",ru="s",ou="r",lu="f",au=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cu="ls",uu="p",Er="ac",hu="websocket",fu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ag(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pu(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===hu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ag(t)&&(n.ns=t.namespace);const i=[];return fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.counters_={}}incrementCounter(e,n=1){st(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={},zi={};function lo(t){const e=t.toString();return Ki[e]||(Ki[e]=new cg),Ki[e]}function ug(t,e){const n=t.toString();return zi[n]||(zi[n]=e()),zi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Cn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="start",fg="close",dg="pLPCommand",pg="pRTLPCB",_u="id",gu="pw",mu="ser",_g="cb",gg="seg",mg="ts",yg="d",vg="dframe",yu=1870,vu=30,bg=yu-vu,Cg=25e3,wg=3e4;class nn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fs(e),this.stats_=lo(n),this.urlFn=a=>(this.appCheckToken&&(a[Er]=this.appCheckToken),pu(n,fu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wg)),J_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ao((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gl)this.id=l,this.password=a;else if(o===fg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gl]="t",s[mu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[_g]=this.scriptTagHolder.uniqueCallbackIdentifier),s[iu]=oo,this.transportSessionId&&(s[ru]=this.transportSessionId),this.lastSessionId&&(s[cu]=this.lastSessionId),this.applicationId&&(s[uu]=this.applicationId),this.appCheckToken&&(s[Er]=this.appCheckToken),typeof location<"u"&&location.hostname&&au.test(location.hostname)&&(s[ou]=lu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nn.forceAllow_=!0}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){return nn.forceAllow_?!0:!nn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Z_()&&!eg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bc(n),i=nu(s,bg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[vg]="t",s[_u]=e,s[gu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ao{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=z_(),window[dg+this.uniqueCallbackIdentifier]=e,window[pg+this.uniqueCallbackIdentifier]=n,this.myIFrame=ao.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){he("frame writing exception"),l.stack&&he(l.stack),he(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_u]=this.myID,e[gu]=this.myPW,e[mu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vu+s.length<=yu;){const o=this.pendingSegs.shift();s=s+"&"+gg+i+"="+o.seg+"&"+mg+i+"="+o.ts+"&"+yg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Cg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=16384,Ig=45e3;let Us=null;typeof MozWebSocket<"u"?Us=MozWebSocket:typeof WebSocket<"u"&&(Us=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fs(this.connId),this.stats_=lo(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[iu]=oo,typeof location<"u"&&location.hostname&&au.test(location.hostname)&&(o[ou]=lu),n&&(o[ru]=n),s&&(o[cu]=s),i&&(o[Er]=i),r&&(o[uu]=r),pu(e,hu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lt.set("previous_websocket_failure",!0);try{let s;Vc(),this.mySock=new Us(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Us!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Lt.isInMemoryStorage||Lt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Lt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Zn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nu(n,Eg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ig))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{static get ALL_TRANSPORTS(){return[nn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=6e4,Tg=5e3,Rg=10*1024,Ag=100*1024,Yi="t",ql="d",Ng="s",Kl="r",xg="e",zl="o",Yl="a",Ql="n",Jl="p",Pg="h";class Og{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fs("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ag?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yi in e){const n=e[Yi];n===Yl?this.upgradeIfSecondaryHealthy_():n===Kl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xn("t",e),s=xn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ql,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xn("t",e),s=xn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xn(Yi,e);if(ql in e){const s=e[ql];if(n===Pg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ql){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ng?this.onConnectionShutdown_(s):n===Kl?this.onReset_(s):n===xg?wr("Server Error: "+s):n===zl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),oo!==s&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Vn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends Cu{static getInstance(){return new Ws}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=32,Zl=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Et(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function co(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Dg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function se(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Ie(t,e){const n=M(t),s=M(e);if(n===null)return e;if(n===s)return Ie(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kg(t,e){const n=ns(t,0),s=ns(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Jt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function uo(t,e){if(Et(t)!==Et(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function De(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Et(t)>Et(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Mg{constructor(e,n){this.errorPrefix_=n,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_i(this.parts_[s]);Eu(this)}}function Fg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_i(e),Eu(t)}function Lg(t){const e=t.parts_.pop();t.byteLength_-=_i(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eu(t){if(t.byteLength_>Zl)throw new Error(t.errorPrefix_+"has a key path longer than "+Zl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xl+") or object contains a cycle "+Ft(t))}function Ft(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Cu{static getInstance(){return new ho}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=1e3,Bg=60*5*1e3,ea=30*1e3,Ug=1.3,Wg=3e4,$g="server_kill",ta=3;class ct extends bu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ct.nextPersistentConnectionId_++,this.log_=fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pn,this.maxReconnectDelay_=Bg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Vc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ho.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ws.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ue(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new us,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&st(e,"w")){const s=pn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ea)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wr("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Wg&&(this.reconnectDelay_=Pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ug)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Og(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt($g)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ve(h),a())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nl(this.interruptReasons_)&&(this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ro(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){he("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ta&&(this.reconnectDelay_=ea,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){he("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ta&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Zc.replace(/\./g,"-")]=1,Hc()?e["framework.cordova"]=1:bp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ws.getInstance().currentlyOnline();return Nl(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(_n,e),i=new F(_n,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class Iu extends gi{static get __EMPTY_NODE(){return Es}static set __EMPTY_NODE(e){Es=e}compare(e,n){return Jt(e.name,n.name)}isDefinedOn(e){throw bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Ht,Es)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Es)}toString(){return".key"}}const un=new Iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ae.RED,this.left=i??Se.EMPTY_NODE,this.right=r??Se.EMPTY_NODE}copy(e,n,s,i,r){return new ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class Hg{copy(e,n,s,i,r){return this}insert(e,n,s){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,n=Se.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Se(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new Hg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){return Jt(t.name,e.name)}function fo(t,e){return Jt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir;function jg(t){Ir=t}const Su=function(t){return typeof t=="number"?"number:"+su(t):"string:"+t},Tu=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&st(e,".sv"),"Priority must be a string or number.")}else C(t===Ir||t.isEmpty(),"priority of unexpected type.");C(t===Ir||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;class le{static set __childrenNodeConstructor(e){na=e}static get __childrenNodeConstructor(){return na}constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:M(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=M(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Su(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=su(this.value_):e+=this.value_,this.lazyHash_=tu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru,Au;function Gg(t){Ru=t}function qg(t){Au=t}class Kg extends gi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Jt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Ht,new le("[PRIORITY-POST]",Au))}makePost(e,n){const s=Ru(e);return new F(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const ie=new Kg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=Math.log(2);class Yg{constructor(e){const n=r=>parseInt(Math.log(r)/zg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $s=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ae(d,h.node,ae.BLACK,null,null);{const _=parseInt(u/2,10)+a,w=i(a,_),R=i(_+1,c);return h=t[_],d=n?n(h):h,new ae(d,h.node,ae.BLACK,w,R)}},r=function(a){let c=null,u=null,h=t.length;const d=function(w,R){const W=h-w,B=h;h-=w;const q=i(W+1,B),z=t[W],P=n?n(z):z;_(new ae(P,z.node,R,null,q))},_=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<a.count;++w){const R=a.nextBitIsOne(),W=Math.pow(2,a.count-(w+1));R?d(W,ae.BLACK):(d(W,ae.BLACK),d(W,ae.RED))}return u},o=new Yg(t.length),l=r(o);return new Se(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;const On={};class at{static get Default(){return C(ie,"ChildrenNode.ts has not been loaded"),Qi=Qi||new at({".priority":On},{".priority":ie}),Qi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=pn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Se?n:null}hasIndex(e){return st(this.indexSet_,e.toString())}addIndex(e,n){C(e!==un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=$s(s,e.getCompare()):l=On;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new at(u,c)}addToIndexes(e,n){const s=Ls(this.indexes_,(i,r)=>{const o=pn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===On)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),$s(l,o.getCompare())}else return On;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new at(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ls(this.indexes_,i=>{if(i===On)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new at(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn;class x{static get EMPTY_NODE(){return Dn||(Dn=new x(new Se(fo),null,at.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Tu(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Dn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Dn:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Dn:this.priorityNode_;return new x(i,o,r)}}updateChild(e,n){const s=M(e);if(s===null)return n;{C(M(e)!==".priority"||Et(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),s++,r&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Su(this.getPriority().val())+":"),this.forEachChild(ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ds?-1:0}withIndex(e){if(e===un||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ie),i=n.getIterator(ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===un?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qg extends x{constructor(){super(new Se(fo),x.EMPTY_NODE,at.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const ds=new Qg;Object.defineProperties(F,{MIN:{value:new F(_n,x.EMPTY_NODE)},MAX:{value:new F(Ht,ds)}});Iu.__EMPTY_NODE=x.EMPTY_NODE;le.__childrenNodeConstructor=x;jg(ds);qg(ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=!0;function ce(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,ce(e))}if(!(t instanceof Array)&&Jg){const n=[];let s=!1;if(fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return x.EMPTY_NODE;const r=$s(n,Vg,o=>o.name,fo);if(s){const o=$s(n,ie.getCompare());return new x(r,ce(e),new at({".priority":o},{".priority":ie}))}else return new x(r,ce(e),at.Default)}else{let n=x.EMPTY_NODE;return fe(t,(s,i)=>{if(st(t,s)&&s.substring(0,1)!=="."){const r=ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ce(e))}}Gg(ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg extends gi{constructor(e){super(),this.indexPath_=e,C(!L(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Jt(e.name,n.name):r}makePost(e,n){const s=ce(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,ds);return new F(Ht,e)}toString(){return ns(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends gi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Jt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ce(e);return new F(n,s)}toString(){return".value"}}const em=new Zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return{type:"value",snapshotNode:t}}function gn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ss(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(gn(n,s)):o.trackChildChange(is(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(ss(i,r))}),n.isLeafNode()||n.forEachChild(ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(is(i,r,o))}else s.trackChildChange(gn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.indexedFilter_=new po(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rs.getStartPost_(e),this.endPost_=rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(ie,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=x.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(is(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ss(n,h));const R=l.updateImmediateChild(n,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(gn(d.name,d.node)),R.updateImmediateChild(d.name,d.node)):R}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ss(c.name,c.node)),r.trackChildChange(gn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_n}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new _o;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sm(t){return t.loadsAllData()?new po(t.getIndex()):t.hasLimit()?new nm(t):new rs(t)}function sa(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===em?n="$value":t.index_===un?n="$key":(C(t.index_ instanceof Xg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ia(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends bu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=fs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hs.getListenId_(e,s),l={};this.listens_[o]=l;const a=sa(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),pn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Hs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sa(e._queryParams),s=e._path.toString(),i=new us;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zn(l.responseText)}catch{ve("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ve("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){return{value:null,children:new Map}}function xu(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=M(e);t.children.has(s)||t.children.set(s,Vs());const i=t.children.get(s);e=ee(e),xu(i,e,n)}}function Sr(t,e,n){t.value!==null?n(e,t.value):rm(t,(s,i)=>{const r=new G(e.toString()+"/"+s);Sr(i,r,n)})}function rm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=10*1e3,lm=30*1e3,am=5*60*1e3;class cm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new om(e);const s=ra+(lm-ra)*Math.random();Vn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;fe(e,(i,r)=>{r>0&&st(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Vn(this.reportStats_.bind(this),Math.floor(Math.random()*2*am))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Le||(Le={}));function go(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Le.ACK_USER_WRITE,this.source=go()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new js($(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new js(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.source=e,this.path=n,this.type=Le.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new os(this.source,$()):new os(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Le.OVERWRITE}operationForChild(e){return L(this.path)?new Vt(this.source,$(),this.snap.getImmediateChild(e)):new Vt(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Le.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Vt(this.source,$(),n.value):new mn(this.source,$(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mn(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(tm(o.childName,o.snapshotNode))}),kn(t,i,"child_removed",e,s,n),kn(t,i,"child_added",e,s,n),kn(t,i,"child_moved",r,s,n),kn(t,i,"child_changed",e,s,n),kn(t,i,"value",e,s,n),i}function kn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>dm(t,l,a)),o.forEach(l=>{const a=fm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function fm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dm(t,e,n){if(e.childName==null||n.childName==null)throw bn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){return{eventCache:t,serverCache:e}}function jn(t,e,n,s){return mi(new jt(e,n,s),t.serverCache)}function Pu(t,e,n,s){return mi(t.eventCache,new jt(e,n,s))}function Tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;const pm=()=>(Ji||(Ji=new Se(X_)),Ji);class X{static fromObject(e){let n=new X(null);return fe(e,(s,i)=>{n=n.set(new G(s),i)}),n}constructor(e,n=pm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(L(e))return null;{const s=M(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ee(e),n);return r!=null?{path:se(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=M(e),s=this.children.get(n);return s!==null?s.subtree(ee(e)):new X(null)}}set(e,n){if(L(e))return new X(n,this.children);{const s=M(e),r=(this.children.get(s)||new X(null)).set(ee(e),n),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=M(e),s=this.children.get(n);if(s){const i=s.remove(ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=M(e),s=this.children.get(n);return s?s.get(ee(e)):null}}setTree(e,n){if(L(e))return n;{const s=M(e),r=(this.children.get(s)||new X(null)).setTree(ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(se(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=M(e),o=this.children.get(r);return o?o.findOnPath_(ee(e),se(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=M(e),r=this.children.get(i);return r?r.foreachOnPath_(ee(e),se(n,i),s):new X(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(se(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new X(null))}}function Gn(t,e,n){if(L(e))return new $e(new X(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ie(i,e);return r=r.updateChild(o,n),new $e(t.writeTree_.set(i,r))}else{const i=new X(n),r=t.writeTree_.setTree(e,i);return new $e(r)}}}function Rr(t,e,n){let s=t;return fe(n,(i,r)=>{s=Gn(s,se(e,i),r)}),s}function oa(t,e){if(L(e))return $e.empty();{const n=t.writeTree_.setTree(e,new X(null));return new $e(n)}}function Ar(t,e){return Xt(t,e)!=null}function Xt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ie(n.path,e)):null}function la(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function Ct(t,e){if(L(e))return t;{const n=Xt(t,e);return n!=null?new $e(new X(n)):new $e(t.writeTree_.subtree(e))}}function Nr(t){return t.writeTree_.isEmpty()}function yn(t,e){return Ou($(),t.writeTree_,e)}function Ou(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ou(se(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(se(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){return Fu(e,t)}function _m(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gn(t.visibleWrites,e,n)),t.lastWriteId=s}function gm(t,e,n,s){C(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Rr(t.visibleWrites,e,n),t.lastWriteId=s}function mm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ym(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&vm(l,s.path)?i=!1:De(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return bm(t),!0;if(s.snap)t.visibleWrites=oa(t.visibleWrites,s.path);else{const l=s.children;fe(l,a=>{t.visibleWrites=oa(t.visibleWrites,se(s.path,a))})}return!0}else return!1}function vm(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(se(t.path,n),e))return!0;return!1}function bm(t){t.visibleWrites=Du(t.allWrites,Cm,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Cm(t){return t.visible}function Du(t,e,n){let s=$e.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)De(n,o)?(l=Ie(n,o),s=Gn(s,l,r.snap)):De(o,n)&&(l=Ie(o,n),s=Gn(s,$(),r.snap.getChild(l)));else if(r.children){if(De(n,o))l=Ie(n,o),s=Rr(s,l,r.children);else if(De(o,n))if(l=Ie(o,n),L(l))s=Rr(s,$(),r.children);else{const a=pn(r.children,M(l));if(a){const c=a.getChild(ee(l));s=Gn(s,$(),c)}}}else throw bn("WriteRecord should have .snap or .children")}}return s}function ku(t,e,n,s,i){if(!s&&!i){const r=Xt(t.visibleWrites,e);if(r!=null)return r;{const o=Ct(t.visibleWrites,e);if(Nr(o))return n;if(n==null&&!Ar(o,$()))return null;{const l=n||x.EMPTY_NODE;return yn(o,l)}}}else{const r=Ct(t.visibleWrites,e);if(!i&&Nr(r))return n;if(!i&&n==null&&!Ar(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(De(c.path,e)||De(e,c.path))},l=Du(t.allWrites,o,e),a=n||x.EMPTY_NODE;return yn(l,a)}}}function wm(t,e,n){let s=x.EMPTY_NODE;const i=Xt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ct(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=yn(Ct(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ct(t.visibleWrites,e);return la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Em(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=se(e,n);if(Ar(t.visibleWrites,r))return null;{const o=Ct(t.visibleWrites,r);return Nr(o)?i.getChild(n):yn(o,i.getChild(n))}}function Im(t,e,n,s){const i=se(e,n),r=Xt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ct(t.visibleWrites,i);return yn(o,s.getNode().getImmediateChild(n))}else return null}function Sm(t,e){return Xt(t.visibleWrites,e)}function Tm(t,e,n,s,i,r,o){let l;const a=Ct(t.visibleWrites,e),c=Xt(a,$());if(c!=null)l=c;else if(n!=null)l=yn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Rm(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function Gs(t,e,n,s){return ku(t.writeTree,t.treePath,e,n,s)}function bo(t,e){return wm(t.writeTree,t.treePath,e)}function aa(t,e,n,s){return Em(t.writeTree,t.treePath,e,n,s)}function qs(t,e){return Sm(t.writeTree,se(t.treePath,e))}function Am(t,e,n,s,i,r){return Tm(t.writeTree,t.treePath,e,n,s,i,r)}function Co(t,e,n){return Im(t.writeTree,t.treePath,e,n)}function Mu(t,e){return Fu(se(t.treePath,e),t.writeTree)}function Fu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,is(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ss(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,gn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,is(s,e.snapshotNode,i.oldSnap));else throw bn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Lu=new xm;class wo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Co(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),r=Am(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){return{filter:t}}function Om(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Dm(t,e,n,s,i){const r=new Nm;let o,l;if(n.type===Le.OVERWRITE){const c=n;c.source.fromUser?o=xr(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Ks(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Le.MERGE){const c=n;c.source.fromUser?o=Mm(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Pr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Le.ACK_USER_WRITE){const c=n;c.revert?o=Bm(t,e,c.path,s,i,r):o=Fm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Le.LISTEN_COMPLETE)o=Lm(t,e,n.path,s,r);else throw bn("Unknown operation type: "+n.type);const a=r.getChanges();return km(e,o,a),{viewCache:o,changes:a}}function km(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Nu(Tr(e)))}}function Bu(t,e,n,s,i,r){const o=e.eventCache;if(qs(s,n)!=null)return e;{let l,a;if(L(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gt(e),u=c instanceof x?c:x.EMPTY_NODE,h=bo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Gs(s,Gt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=M(n);if(c===".priority"){C(Et(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=aa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ee(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=aa(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Co(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return jn(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Ks(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=M(n);if(!a.isCompleteForPath(n)&&Et(n)>1)return e;const w=ee(n),W=a.getNode().getImmediateChild(_).updateChild(w,s);_===".priority"?c=u.updatePriority(a.getNode(),W):c=u.updateChild(a.getNode(),_,W,w,Lu,null)}const h=Pu(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new wo(i,h,r);return Bu(t,h,n,i,d,l)}function xr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new wo(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=jn(e,c,!0,t.filter.filtersNodes());else{const h=M(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ee(n),_=l.getNode().getImmediateChild(h);let w;if(L(d))w=s;else{const R=u.getCompleteChild(h);R!=null?co(d)===".priority"&&R.getChild(wu(d)).isEmpty()?w=R:w=R.updateChild(d,s):w=x.EMPTY_NODE}if(_.equals(w))a=e;else{const R=t.filter.updateChild(l.getNode(),h,w,d,u,o);a=jn(e,R,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ca(t,e){return t.eventCache.isCompleteForChild(e)}function Mm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=se(n,a);ca(e,M(u))&&(l=xr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=se(n,a);ca(e,M(u))||(l=xr(t,l,u,c,i,r,o))}),l}function ua(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new X(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),w=ua(t,_,d);a=Ks(t,a,new G(h),w,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const w=e.serverCache.getNode().getImmediateChild(h),R=ua(t,w,d);a=Ks(t,a,new G(h),R,i,r,o,l)}}),a}function Fm(t,e,n,s,i,r,o){if(qs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ks(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new X(null);return a.getNode().forEachChild(un,(u,h)=>{c=c.set(new G(u),h)}),Pr(t,e,n,c,i,r,l,o)}else return e}else{let c=new X(null);return s.foreach((u,h)=>{const d=se(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Pr(t,e,n,c,i,r,l,o)}}function Lm(t,e,n,s,i){const r=e.serverCache,o=Pu(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Bu(t,o,n,s,Lu,i)}function Bm(t,e,n,s,i,r){let o;if(qs(s,n)!=null)return e;{const l=new wo(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||M(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gs(s,Gt(e));else{const h=e.serverCache.getNode();C(h instanceof x,"serverChildren would be complete if leaf node"),u=bo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=M(n);let h=Co(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ee(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,x.EMPTY_NODE,ee(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gs(s,Gt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||qs(s,$())!=null,jn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new po(s.getIndex()),r=sm(s);this.processor_=Pm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,l.getNode(),null),u=new jt(a,o.isFullyInitialized(),i.filtersNodes()),h=new jt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=mi(h,u),this.eventGenerator_=new um(this.query_)}get query(){return this.query_}}function Wm(t){return t.viewCache_.serverCache.getNode()}function $m(t,e){const n=Gt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function ha(t){return t.eventRegistrations_.length===0}function Hm(t,e){t.eventRegistrations_.push(e)}function fa(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function da(t,e,n,s){e.type===Le.MERGE&&e.source.queryId!==null&&(C(Gt(t.viewCache_),"We should always have a full cache before handling merges"),C(Tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Dm(t.processor_,i,e,n,s);return Om(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Vm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(r,o)=>{s.push(gn(r,o))}),n.isFullyInitialized()&&s.push(Nu(n.getNode())),Uu(t,s,n.getNode(),e)}function Uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return hm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class jm{constructor(){this.views=new Map}}function Gm(t){C(!zs,"__referenceConstructor has already been defined"),zs=t}function qm(){return C(zs,"Reference.ts has not been loaded"),zs}function Km(t){return t.views.size===0}function Eo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),da(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(da(o,e,n,s));return r}}function zm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Gs(n,i?s:null),a=!1;l?a=!0:s instanceof x?(l=bo(n,s),a=!1):(l=x.EMPTY_NODE,a=!1);const c=mi(new jt(l,a,!1),new jt(s,i,!1));return new Um(e,c)}return o}function Ym(t,e,n,s,i,r){const o=zm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Hm(o,n),Vm(o,n)}function Qm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=It(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(fa(c,n,s)),ha(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(fa(a,n,s)),ha(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!It(t)&&r.push(new(qm())(e._repo,e._path)),{removed:r,events:o}}function Wu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hn(t,e){let n=null;for(const s of t.views.values())n=n||$m(s,e);return n}function $u(t,e){if(e._queryParams.loadsAllData())return yi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Hu(t,e){return $u(t,e)!=null}function It(t){return yi(t)!=null}function yi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;function Jm(t){C(!Ys,"__referenceConstructor has already been defined"),Ys=t}function Xm(){return C(Ys,"Reference.ts has not been loaded"),Ys}let Zm=1;class pa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=Rm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vu(t,e,n,s,i){return _m(t.pendingWriteTree_,e,n,s,i),i?wn(t,new Vt(go(),e,n)):[]}function ey(t,e,n,s){gm(t.pendingWriteTree_,e,n,s);const i=X.fromObject(n);return wn(t,new mn(go(),e,i))}function yt(t,e,n=!1){const s=mm(t.pendingWriteTree_,e);if(ym(t.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set($(),!0):fe(s.children,o=>{r=r.set(new G(o),!0)}),wn(t,new js(s.path,r,n))}else return[]}function vi(t,e,n){return wn(t,new Vt(mo(),e,n))}function ty(t,e,n){const s=X.fromObject(n);return wn(t,new mn(mo(),e,s))}function ny(t,e){return wn(t,new os(mo(),e))}function sy(t,e,n){const s=So(t,n);if(s){const i=To(s),r=i.path,o=i.queryId,l=Ie(r,e),a=new os(yo(o),l);return Ro(t,r,a)}else return[]}function Or(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Hu(o,e))){const a=Qm(o,e,n,s);Km(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>It(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=oy(d);for(let w=0;w<_.length;++w){const R=_[w],W=R.query,B=qu(t,R);t.listenProvider_.startListening(qn(W),Qs(t,W),B.hashFn,B.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(qn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(bi(d));t.listenProvider_.stopListening(qn(d),_)}))}ly(t,c)}return l}function iy(t,e,n,s){const i=So(t,s);if(i!=null){const r=To(i),o=r.path,l=r.queryId,a=Ie(o,e),c=new Vt(yo(l),a,n);return Ro(t,o,c)}else return[]}function ry(t,e,n,s){const i=So(t,s);if(i){const r=To(i),o=r.path,l=r.queryId,a=Ie(o,e),c=X.fromObject(n),u=new mn(yo(l),a,c);return Ro(t,o,u)}else return[]}function _a(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const w=Ie(d,i);r=r||hn(_,w),o=o||It(_)});let l=t.syncPointTree_.get(i);l?(o=o||It(l),r=r||hn(l,$())):(l=new jm,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const R=hn(w,$());R&&(r=r.updateImmediateChild(_,R))}));const c=Hu(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=bi(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=ay();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=vo(t.pendingWriteTree_,i);let h=Ym(l,e,n,u,r,a);if(!c&&!o&&!s){const d=$u(l,e);h=h.concat(cy(t,e,d))}return h}function Io(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ie(o,e),c=hn(l,a);if(c)return c});return ku(i,e,r,n,!0)}function wn(t,e){return ju(e,t.syncPointTree_,null,vo(t.pendingWriteTree_,$()))}function ju(t,e,n,s){if(L(t.path))return Gu(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=hn(i,$()));let r=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Mu(s,o);r=r.concat(ju(l,a,c,u))}return i&&(r=r.concat(Eo(i,t,s,n))),r}}function Gu(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=hn(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Mu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Gu(u,l,a,c)))}),i&&(r=r.concat(Eo(i,t,s,n))),r}function qu(t,e){const n=e.query,s=Qs(t,n);return{hashFn:()=>(Wm(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?sy(t,n._path,s):ny(t,n._path);{const r=tg(i,n);return Or(t,n,null,r)}}}}function Qs(t,e){const n=bi(e);return t.queryToTagMap.get(n)}function bi(t){return t._path.toString()+"$"+t._queryIdentifier}function So(t,e){return t.tagToQueryMap.get(e)}function To(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Ro(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=vo(t.pendingWriteTree_,e);return Eo(s,n,i,null)}function oy(t){return t.fold((e,n,s)=>{if(n&&It(n))return[yi(n)];{let i=[];return n&&(i=Wu(n)),fe(s,(r,o)=>{i=i.concat(o)}),i}})}function qn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Xm())(t._repo,t._path):t}function ly(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=bi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ay(){return Zm++}function cy(t,e,n){const s=e._path,i=Qs(t,e),r=qu(t,n),o=t.listenProvider_.startListening(qn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)C(!It(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&It(u))return[yi(u).query];{let d=[];return u&&(d=d.concat(Wu(u).map(_=>_.query))),fe(h,(_,w)=>{d=d.concat(w)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(qn(u),Qs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ao(n)}node(){return this.node_}}class No{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new No(this.syncTree_,n)}node(){return Io(this.syncTree_,this.path_)}}const uy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ga=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fy(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},fy=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ku=function(t,e,n,s){return xo(e,new No(n,t),s)},zu=function(t,e,n){return xo(t,new Ao(e),n)};function xo(t,e,n){const s=t.getPriority().val(),i=ga(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ga(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new le(l,ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(ie,(l,a)=>{const c=xo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Oo(t,e){let n=e instanceof G?e:new G(e),s=t,i=M(n);for(;i!==null;){const r=pn(s.node.children,i)||{children:{},childCount:0};s=new Po(i,s,r),n=ee(n),i=M(n)}return s}function En(t){return t.node.value}function Yu(t,e){t.node.value=e,Dr(t)}function Qu(t){return t.node.childCount>0}function dy(t){return En(t)===void 0&&!Qu(t)}function Ci(t,e){fe(t.node.children,(n,s)=>{e(new Po(n,t,s))})}function Ju(t,e,n,s){n&&!s&&e(t),Ci(t,i=>{Ju(i,e,!0,s)})}function py(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ps(t){return new G(t.parent===null?t.name:ps(t.parent)+"/"+t.name)}function Dr(t){t.parent!==null&&_y(t.parent,t.name,t)}function _y(t,e,n){const s=dy(n),i=st(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Dr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=/[\[\].#$\/\u0000-\u001F\u007F]/,my=/[\[\].#$\u0000-\u001F\u007F]/,Xi=10*1024*1024,Do=function(t){return typeof t=="string"&&t.length!==0&&!gy.test(t)},Xu=function(t){return typeof t=="string"&&t.length!==0&&!my.test(t)},yy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xu(t)},vy=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!io(t)||t&&typeof t=="object"&&st(t,".sv")},Zu=function(t,e,n,s){s&&e===void 0||wi(pi(t,"value"),e,n)},wi=function(t,e,n){const s=n instanceof G?new Mg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ft(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ft(s)+" with contents = "+e.toString());if(io(e))throw new Error(t+"contains "+e.toString()+" "+Ft(s));if(typeof e=="string"&&e.length>Xi/3&&_i(e)>Xi)throw new Error(t+"contains a string greater than "+Xi+" utf8 bytes "+Ft(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Do(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ft(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fg(s,o),wi(t,l,s),Lg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ft(s)+" in addition to actual children.")}},by=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ns(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Do(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(kg);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&De(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Cy=function(t,e,n,s){const i=pi(t,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];fe(e,(o,l)=>{const a=new G(o);if(wi(i,l,se(n,a)),co(a)===".priority"&&!vy(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),by(i,r)},eh=function(t,e,n,s){if(!Xu(n))throw new Error(pi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eh(t,e,n)},th=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ey=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Do(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yy(n))throw new Error(pi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ei(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!uo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function nh(t,e,n){Ei(t,n),sh(t,s=>uo(s,e))}function He(t,e,n){Ei(t,n),sh(t,s=>De(s,e)||De(e,s))}function sh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Sy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Sy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Hn&&he("event: "+n.toString()),Cn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="repo_interrupt",Ry=25;class Ay{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Iy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vs(),this.transactionQueueTree_=new Po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ny(t,e,n){if(t.stats_=lo(t.repoInfo_),t.forceRestClient_||rg())t.server_=new Hs(t.repoInfo_,(s,i,r,o)=>{ma(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ya(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{ma(t,s,i,r,o)},s=>{ya(t,s)},s=>{xy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ug(t.repoInfo_,()=>new cm(t.stats_,t.server_)),t.infoData_=new im,t.infoSyncTree_=new pa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=vi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ko(t,"connected",!1),t.serverSyncTree_=new pa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);He(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ih(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ii(t){return uy({timestamp:ih(t)})}function ma(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ls(n,c=>ce(c));o=ry(t.serverSyncTree_,r,a,i)}else{const a=ce(n);o=iy(t.serverSyncTree_,r,a,i)}else if(s){const a=Ls(n,c=>ce(c));o=ty(t.serverSyncTree_,r,a)}else{const a=ce(n);o=vi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=vn(t,r)),He(t.eventQueue_,l,o)}function ya(t,e){ko(t,"connected",e),e===!1&&Dy(t)}function xy(t,e){fe(e,(n,s)=>{ko(t,n,s)})}function ko(t,e,n){const s=new G("/.info/"+e),i=ce(n);t.infoData_.updateSnapshot(s,i);const r=vi(t.infoSyncTree_,s,i);He(t.eventQueue_,s,r)}function Mo(t){return t.nextWriteId_++}function Py(t,e,n,s,i){Si(t,"set",{path:e.toString(),value:n,priority:s});const r=Ii(t),o=ce(n,s),l=Io(t.serverSyncTree_,e),a=zu(o,l,r),c=Mo(t),u=Vu(t.serverSyncTree_,e,a,c,!0);Ei(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const w=d==="ok";w||ve("set at "+e+" failed: "+d);const R=yt(t.serverSyncTree_,c,!w);He(t.eventQueue_,e,R),kr(t,i,d,_)});const h=Lo(t,e);vn(t,h),He(t.eventQueue_,h,[])}function Oy(t,e,n,s){Si(t,"update",{path:e.toString(),value:n});let i=!0;const r=Ii(t),o={};if(fe(n,(l,a)=>{i=!1,o[l]=Ku(se(e,l),ce(a),t.serverSyncTree_,r)}),i)he("update() called with empty data.  Don't do anything."),kr(t,s,"ok",void 0);else{const l=Mo(t),a=ey(t.serverSyncTree_,e,o,l);Ei(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||ve("update at "+e+" failed: "+c);const d=yt(t.serverSyncTree_,l,!h),_=d.length>0?vn(t,e):e;He(t.eventQueue_,_,d),kr(t,s,c,u)}),fe(n,c=>{const u=Lo(t,se(e,c));vn(t,u)}),He(t.eventQueue_,e,[])}}function Dy(t){Si(t,"onDisconnectEvents");const e=Ii(t),n=Vs();Sr(t.onDisconnect_,$(),(i,r)=>{const o=Ku(i,r,t.serverSyncTree_,e);xu(n,i,o)});let s=[];Sr(n,$(),(i,r)=>{s=s.concat(vi(t.serverSyncTree_,i,r));const o=Lo(t,i);vn(t,o)}),t.onDisconnect_=Vs(),He(t.eventQueue_,$(),s)}function ky(t,e,n){let s;M(e._path)===".info"?s=_a(t.infoSyncTree_,e,n):s=_a(t.serverSyncTree_,e,n),nh(t.eventQueue_,e._path,s)}function My(t,e,n){let s;M(e._path)===".info"?s=Or(t.infoSyncTree_,e,n):s=Or(t.serverSyncTree_,e,n),nh(t.eventQueue_,e._path,s)}function Fy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ty)}function Si(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),he(n,...e)}function kr(t,e,n,s){e&&Cn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function rh(t,e,n){return Io(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Fo(t,e=t.transactionQueueTree_){if(e||Ti(t,e),En(e)){const n=lh(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ly(t,ps(e),n)}else Qu(e)&&Ci(e,n=>{Fo(t,n)})}function Ly(t,e,n){const s=n.map(c=>c.currentWriteId),i=rh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ie(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Si(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(yt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ti(t,Oo(t.transactionQueueTree_,e)),Fo(t,t.transactionQueueTree_),He(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Cn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ve("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}vn(t,e)}},o)}function vn(t,e){const n=oh(t,e),s=ps(n),i=lh(t,n);return By(t,i,s),s}function By(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ie(n,a.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(yt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ry)u=!0,h="maxretry",i=i.concat(yt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=rh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){wi("transaction failed: Data returned ",_,a.path);let w=ce(_);typeof _=="object"&&_!=null&&st(_,".priority")||(w=w.updatePriority(d.getPriority()));const W=a.currentWriteId,B=Ii(t),q=zu(w,d,B);a.currentOutputSnapshotRaw=w,a.currentOutputSnapshotResolved=q,a.currentWriteId=Mo(t),o.splice(o.indexOf(W),1),i=i.concat(Vu(t.serverSyncTree_,a.path,q,a.currentWriteId,a.applyLocally)),i=i.concat(yt(t.serverSyncTree_,W,!0))}else u=!0,h="nodata",i=i.concat(yt(t.serverSyncTree_,a.currentWriteId,!0))}He(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ti(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Cn(s[l]);Fo(t,t.transactionQueueTree_)}function oh(t,e){let n,s=t.transactionQueueTree_;for(n=M(e);n!==null&&En(s)===void 0;)s=Oo(s,n),e=ee(e),n=M(e);return s}function lh(t,e){const n=[];return ah(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ah(t,e,n){const s=En(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ci(e,i=>{ah(t,i,n)})}function Ti(t,e){const n=En(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Yu(e,n.length>0?n:void 0)}Ci(e,s=>{Ti(t,s)})}function Lo(t,e){const n=ps(oh(t,e)),s=Oo(t.transactionQueueTree_,e);return py(s,i=>{Zi(t,i)}),Zi(t,s),Ju(s,i=>{Zi(t,i)}),n}function Zi(t,e){const n=En(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Yu(e,void 0):n.length=r+1,He(t.eventQueue_,ps(e),i);for(let o=0;o<s.length;o++)Cn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Wy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const va=function(t,e){const n=$y(t),s=n.namespace;n.domain==="firebase.com"&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Q_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new du(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},$y=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Uy(t.substring(u,h)));const d=Wy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Hy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ba.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ba.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class jy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:co(this._path)}get ref(){return new At(this._repo,this._path)}get _queryIdentifier(){const e=ia(this._queryParams),n=ro(e);return n==="{}"?"default":n}get _queryObject(){return ia(this._queryParams)}isEqual(e){if(e=Qt(e),!(e instanceof Bo))return!1;const n=this._repo===e._repo,s=uo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dg(this._path)}}class At extends Bo{constructor(e,n){super(e,n,new _o,!1)}get parent(){const e=wu(this._path);return e===null?null:new At(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Js{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=ls(this.ref,e);return new Js(this._node.getChild(n),s,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Js(i,ls(this.ref,s),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xs(t,e){return t=Qt(t),t._checkNotDeleted("ref"),e!==void 0?ls(t._root,e):t._root}function ls(t,e){return t=Qt(t),M(t._path)===null?wy("child","path",e):eh("child","path",e),new At(t._repo,se(t._path,e))}function qy(t,e){t=Qt(t),th("push",t._path),Zu("push",e,t._path,!0);const n=ih(t._repo),s=Hy(n),i=ls(t,s),r=ls(t,s);let o;return e!=null?o=Ky(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ky(t,e){t=Qt(t),th("set",t._path),Zu("set",e,t._path,!1);const n=new us;return Py(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function zy(t,e){Cy("update",e,t._path);const n=new us;return Oy(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Uo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Vy("value",this,new Js(e.snapshotNode,new At(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jy(this,e,n):null}matches(e){return e instanceof Uo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Yy(t,e,n,s,i){const r=new Gy(n,void 0),o=new Uo(r);return ky(t._repo,t,o),()=>My(t._repo,t,o)}function ch(t,e,n,s){return Yy(t,"value",e)}Gm(At);Jm(At);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="FIREBASE_DATABASE_EMULATOR_HOST",Mr={};let Jy=!1;function Xy(t,e,n,s){t.repoInfo_=new du(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Zy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=va(r,i),l=o.repoInfo,a;typeof process<"u"&&Wl&&(a=Wl[Qy]),a?(r=`http://${a}?ns=${l.namespace}`,o=va(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new lg(t.name,t.options,e);Ey("Invalid Firebase Database URL",o),L(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const u=tv(l,t,c,new og(t.name,n));return new nv(u,t)}function ev(t,e){const n=Mr[e];(!n||n[t.key]!==t)&&ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Fy(t),delete n[t.key]}function tv(t,e,n,s){let i=Mr[e.name];i||(i={},Mr[e.name]=i);let r=i[t.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ay(t,Jy,n,s),i[t.toURLString()]=r,r}class nv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ny(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new At(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ev(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}function sv(t=O_(),e){const n=so(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gp("database");s&&iv(n,...s)}return n}function iv(t,e,n,s={}){t=Qt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ns(Ns.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:mp(s.mockUserToken,t.app.options.projectId);r=new Ns(o)}Xy(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){j_(P_),wt(new ut("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tt($l,Hl,t),tt($l,Hl,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rv();const uh="@firebase/installations",Wo="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=1e4,fh=`w:${Wo}`,dh="FIS_v2",ov="https://firebaseinstallations.googleapis.com/v1",lv=60*60*1e3,av="installations",cv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qt=new di(av,cv,uv);function ph(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h({projectId:t}){return`${ov}/projects/${t}/installations`}function gh(t){return{token:t.token,requestStatus:2,expiresIn:fv(t.expiresIn),creationTime:Date.now()}}async function mh(t,e){const s=(await e.json()).error;return qt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function yh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hv(t,{refreshToken:e}){const n=yh(t);return n.append("Authorization",dv(e)),n}async function vh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fv(t){return Number(t.replace("s","000"))}function dv(t){return`${dh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=_h(t),i=yh(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:dh,appId:t.appId,sdkVersion:fh},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await vh(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:gh(c.authToken)}}else throw await mh("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=/^[cdef][\w-]{21}$/,Fr="";function mv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yv(t);return gv.test(n)?n:Fr}catch{return Fr}}function yv(t){return _v(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;function wh(t,e){const n=Ri(t);Eh(n,e),vv(n,e)}function Eh(t,e){const n=Ch.get(t);if(n)for(const s of n)s(e)}function vv(t,e){const n=bv();n&&n.postMessage({key:t,fid:e}),Cv()}let Bt=null;function bv(){return!Bt&&"BroadcastChannel"in self&&(Bt=new BroadcastChannel("[Firebase] FID Change"),Bt.onmessage=t=>{Eh(t.data.key,t.data.fid)}),Bt}function Cv(){Ch.size===0&&Bt&&(Bt.close(),Bt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebase-installations-database",Ev=1,Kt="firebase-installations-store";let er=null;function $o(){return er||(er=Yc(wv,Ev,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kt)}}})),er}async function Zs(t,e){const n=Ri(t),i=(await $o()).transaction(Kt,"readwrite"),r=i.objectStore(Kt),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&wh(t,e.fid),e}async function Ih(t){const e=Ri(t),s=(await $o()).transaction(Kt,"readwrite");await s.objectStore(Kt).delete(e),await s.done}async function Ai(t,e){const n=Ri(t),i=(await $o()).transaction(Kt,"readwrite"),r=i.objectStore(Kt),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&wh(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){let e;const n=await Ai(t.appConfig,s=>{const i=Iv(s),r=Sv(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Fr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Iv(t){const e=t||{fid:mv(),registrationStatus:0};return Sh(e)}function Sv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Tv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Rv(t)}:{installationEntry:e}}async function Tv(t,e){try{const n=await pv(t,e);return Zs(t.appConfig,n)}catch(n){throw ph(n)&&n.customData.serverCode===409?await Ih(t.appConfig):await Zs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Rv(t){let e=await Ca(t.appConfig);for(;e.registrationStatus===1;)await bh(100),e=await Ca(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ho(t);return s||n}return e}function Ca(t){return Ai(t,e=>{if(!e)throw qt.create("installation-not-found");return Sh(e)})}function Sh(t){return Av(t)?{fid:t.fid,registrationStatus:0}:t}function Av(t){return t.registrationStatus===1&&t.registrationTime+hh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv({appConfig:t,heartbeatServiceProvider:e},n){const s=xv(t,n),i=hv(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:fh,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await vh(()=>fetch(s,l));if(a.ok){const c=await a.json();return gh(c)}else throw await mh("Generate Auth Token",a)}function xv(t,{fid:e}){return`${_h(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e=!1){let n;const s=await Ai(t.appConfig,r=>{if(!Th(r))throw qt.create("not-registered");const o=r.authToken;if(!e&&Dv(o))return r;if(o.requestStatus===1)return n=Pv(t,e),r;{if(!navigator.onLine)throw qt.create("app-offline");const l=Mv(r);return n=Ov(t,l),l}});return n?await n:s.authToken}async function Pv(t,e){let n=await wa(t.appConfig);for(;n.authToken.requestStatus===1;)await bh(100),n=await wa(t.appConfig);const s=n.authToken;return s.requestStatus===0?Vo(t,e):s}function wa(t){return Ai(t,e=>{if(!Th(e))throw qt.create("not-registered");const n=e.authToken;return Fv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ov(t,e){try{const n=await Nv(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Zs(t.appConfig,s),n}catch(n){if(ph(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ih(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zs(t.appConfig,s)}throw n}}function Th(t){return t!==void 0&&t.registrationStatus===2}function Dv(t){return t.requestStatus===2&&!kv(t)}function kv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lv}function Mv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Fv(t){return t.requestStatus===1&&t.requestTime+hh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ho(e);return s?s.catch(console.error):Vo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,e=!1){const n=t;return await Uv(n),(await Vo(n,e)).token}async function Uv(t){const{registrationPromise:e}=await Ho(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t){if(!t||!t.options)throw tr("App Configuration");if(!t.name)throw tr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw tr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function tr(t){return qt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="installations",$v="installations-internal",Hv=t=>{const e=t.getProvider("app").getImmediate(),n=Wv(e),s=so(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Vv=t=>{const e=t.getProvider("app").getImmediate(),n=so(e,Rh).getImmediate();return{getId:()=>Lv(n),getToken:i=>Bv(n,i)}};function jv(){wt(new ut(Rh,Hv,"PUBLIC")),wt(new ut($v,Vv,"PRIVATE"))}jv();tt(uh,Wo);tt(uh,Wo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="analytics",Gv="firebase_id",qv="origin",Kv=60*1e3,zv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new to("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new di("analytics","Analytics",Yv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){if(!t.startsWith(jo)){const e=ke.create("invalid-gtag-resource",{gtagURL:t});return Te.warn(e.message),""}return t}function Ah(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Jv(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Xv(t,e){const n=Jv("firebase-js-sdk-policy",{createScriptURL:Qv}),s=document.createElement("script"),i=`${jo}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Zv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function eb(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await Ah(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){Te.error(l)}t("config",i,r)}async function tb(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Ah(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Te.error(r)}}function nb(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await tb(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await eb(t,e,n,s,l,a)}else if(r==="consent"){const[l,a]=o;t("consent",l,a)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Te.error(l)}}return i}function sb(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=nb(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function ib(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jo)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=30,ob=1e3;class lb{constructor(e={},n=ob){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Nh=new lb;function ab(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cb(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:ab(s)},r=zv.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function ub(t,e=Nh,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw ke.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ke.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new db;return setTimeout(async()=>{l.abort()},Kv),xh({appId:s,apiKey:i,measurementId:r},o,l,e)}async function xh(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Nh){var r;const{appId:o,measurementId:l}=t;try{await hb(s,e)}catch(a){if(l)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await cb(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!fb(c)){if(i.deleteThrottleMetadata(o),l)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Pl(n,i.intervalMillis,rb):Pl(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Te.debug(`Calling attemptFetch again in ${u} millis`),xh(t,h,s,i)}}function hb(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fb(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class db{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pb(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(){if(jc())try{await Gc()}catch(t){return Te.warn(ke.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Te.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gb(t,e,n,s,i,r,o){var l;const a=ub(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Te.error(_)),e.push(a);const c=_b().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([a,c]);ib(r)||Xv(r,u.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[qv]="firebase",d.update=!0,h!=null&&(d[Gv]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.app=e}_delete(){return delete Kn[this.app.options.appId],Promise.resolve()}}let Kn={},Ia=[];const Sa={};let nr="dataLayer",yb="gtag",Ta,Ph,Ra=!1;function vb(){const t=[];if(vp()&&t.push("This is a browser extension environment."),Cp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ke.create("invalid-analytics-context",{errorInfo:e});Te.warn(n.message)}}function bb(t,e,n){vb();const s=t.options.appId;if(!s)throw ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Kn[s]!=null)throw ke.create("already-exists",{id:s});if(!Ra){Zv(nr);const{wrappedGtag:r,gtagCore:o}=sb(Kn,Ia,Sa,nr,yb);Ph=r,Ta=o,Ra=!0}return Kn[s]=gb(t,Ia,Sa,e,Ta,nr,n),new mb(t)}function Cb(t,e,n,s){t=Qt(t),pb(Ph,Kn[t.app.options.appId],e,n,s).catch(i=>Te.error(i))}const Aa="@firebase/analytics",Na="0.10.10";function wb(){wt(new ut(Ea,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bb(s,i,n)},"PUBLIC")),wt(new ut("analytics-internal",t,"PRIVATE")),tt(Aa,Na),tt(Aa,Na,"esm2017");function t(e){try{const n=e.getProvider(Ea).getImmediate();return{logEvent:(s,i,r)=>Cb(n,s,i,r)}}catch(n){throw ke.create("interop-component-reg-failed",{reason:n})}}}wb();const Eb={apiKey:"AIzaSyDFI8Y_LdqtrQlw2ajhNq1LYdibLLP2hBY",authDomain:"gifty-37c8f.firebaseapp.com",projectId:"gifty-37c8f",storageBucket:"gifty-37c8f.firebasestorage.app",messagingSenderId:"926219705031",appId:"1:926219705031:web:6aa2b883689a67ef06fce2",measurementId:"G-M8EF2PM0S3"},Ib=Qc(Eb),ei=sv(Ib),Go=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Sb={name:"GiftInput",props:["nickname"],data(){return{gift:"",gifts:[]}},methods:{addGift(){if(this.gift.trim()){const t=Xs(ei,"gifts");qy(t,{name:this.gift.trim(),owner:this.nickname,drawn:!1,drawnBy:null}),this.gift=""}}},mounted(){const t=Xs(ei,"gifts");ch(t,e=>{const n=e.val();this.gifts=n?Object.entries(n).map(([s,i])=>({...i,key:s})):[]})}};function Tb(t,e,n,s,i,r){return Fe(),Xe("div",null,[e[2]||(e[2]=Ee("h2",null,"輸入你的禮物",-1)),oc(Ee("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.gift=o),placeholder:"輸入禮物名稱"},null,512),[[Mc,i.gift]]),Ee("button",{onClick:e[1]||(e[1]=(...o)=>r.addGift&&r.addGift(...o))},"新增"),Ee("ul",null,[(Fe(!0),Xe(Qe,null,Hf(i.gifts,(o,l)=>(Fe(),Xe("li",{key:l},oi(o.name),1))),128))])])}const Rb=Go(Sb,[["render",Tb]]),Ab={props:["nickname"],data(){return{gifts:[],availableGifts:[],selectedGift:null,hasDrawn:!1}},methods:{drawGift(){if(this.availableGifts.length>0){const t=Math.floor(Math.random()*this.availableGifts.length),e=this.availableGifts[t];this.selectedGift=e;const n=Xs(ei,`gifts/${e.key}`);zy(n,{drawn:!0,drawnBy:this.nickname}),this.hasDrawn=!0,this.availableGifts.splice(t,1)}else alert("沒有可抽的禮物了！")}},mounted(){const t=Xs(ei,"gifts");ch(t,e=>{const n=e.val();if(n){this.gifts=Object.entries(n).map(([i,r])=>({...r,key:i})),this.availableGifts=this.gifts.filter(i=>!i.drawn&&i.owner!==this.nickname);const s=this.gifts.find(i=>i.drawnBy===this.nickname);s?(this.selectedGift=s,this.hasDrawn=!0):this.hasDrawn=!1}else this.gifts=[],this.availableGifts=[]})}},Nb={key:0},xb={key:1},Pb={key:0},Ob=["disabled"];function Db(t,e,n,s,i,r){return Fe(),Xe("div",null,[e[2]||(e[2]=Ee("h2",null,"隨機抽取禮物",-1)),i.hasDrawn?(Fe(),Xe("div",Nb,[e[1]||(e[1]=Ee("p",null,"你已經抽過禮物！",-1)),Ee("p",null,"你抽到的禮物是："+oi(i.selectedGift.name),1)])):(Fe(),Xe("div",xb,[i.availableGifts.length===0?(Fe(),Xe("p",Pb,"目前沒有可抽的禮物。")):Ed("",!0),Ee("button",{onClick:e[0]||(e[0]=(...o)=>r.drawGift&&r.drawGift(...o)),disabled:i.availableGifts.length===0},"抽取",8,Ob)]))])}const kb=Go(Ab,[["render",Db]]),Mb={data(){return{nickname:localStorage.getItem("nickname")||"",tempNickname:""}},methods:{login(){this.tempNickname.trim()&&(this.nickname=this.tempNickname.trim(),localStorage.setItem("nickname",this.nickname),this.tempNickname="")}},components:{GiftInput:Rb,DrawGifts:kb}},Fb={key:0},Lb={key:1};function Bb(t,e,n,s,i,r){const o=tl("GiftInput"),l=tl("DrawGifts");return Fe(),Xe("div",null,[i.nickname?(Fe(),Xe("div",Lb,[Ee("p",null,"歡迎，"+oi(i.nickname)+"！",1),We(o,{nickname:i.nickname},null,8,["nickname"]),We(l,{nickname:i.nickname},null,8,["nickname"])])):(Fe(),Xe("div",Fb,[e[2]||(e[2]=Ee("h2",null,"請輸入你的暱稱登入",-1)),oc(Ee("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.tempNickname=a),placeholder:"暱稱"},null,512),[[Mc,i.tempNickname]]),Ee("button",{onClick:e[1]||(e[1]=(...a)=>r.login&&r.login(...a))},"登入")]))])}const Ub=Go(Mb,[["render",Bb]]);ip(Ub).mount("#app");
