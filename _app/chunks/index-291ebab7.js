function w(){}const Q=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function nt(){return Object.create(null)}function A(t){t.forEach(ct)}function G(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Xt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function kt(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(Et(e,n))}function Zt(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,c){if(s){const r=lt(e,n,i,c);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function re(t){return t==null?"":t}function oe(t,e,n){return t.set(n),e}function ce(t){return t&&G(t.destroy)?t.destroy:w}const at=typeof window!="undefined";let U=at?()=>window.performance.now():()=>Date.now(),V=at?t=>requestAnimationFrame(t):w;const E=new Set;function ut(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&V(ut)}function X(t){let e;return E.size===0&&V(ut),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let I=!1;function At(){I=!0}function Ct(){I=!1}function St(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:St(1,s,_=>e[n[_]].claim_order,a))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[o],f)}}function Nt(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=Y("style");return jt(ft(t),e),e.sheet}function jt(t,e){Nt(t.head||t,e)}function Rt(t,e){if(I){for(Tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){t.insertBefore(e,n||null)}function Pt(t,e,n){I&&!n?Rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function ae(){return Z(" ")}function ue(){return Z("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _e(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function de(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Bt(t,i,e[i])}function Ht(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){dt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function he(t,e,n){return mt(t,e,n,Y)}function me(t,e,n){return mt(t,e,n,_t)}function Lt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function pe(t){return Lt(t," ")}function it(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ye(t,e){const n=it(t,"HTML_TAG_START",0),i=it(t,"HTML_TAG_END",n);if(n===i)return new st(void 0,e);dt(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(c,e)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function xe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function be(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function we(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=_t(n.nodeName):this.e=Y(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class st extends Ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Pt(this.t,this.n[n],e)}}const O=new Map;let q=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Mt(e),rules:{}};return O.set(t,n),n}function tt(t,e,n,i,s,c,r,l=0){const o=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(f)}_${l}`,_=ft(t),{stylesheet:d,rules:h}=O.get(_)||zt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${i}ms linear ${s}ms 1 both`,q+=1,u}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||Ft())}function Ft(){V(()=>{q||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}function $e(t,e,n,i){if(!e)return w;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return w;const{delay:c=0,duration:r=300,easing:l=Q,start:o=U()+c,end:a=o+r,tick:f=w,css:u}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function y(){u&&(h=tt(t,0,1,r,c,l,u)),c||(d=!0)}function m(){u&&z(t,h),_=!1}return X(g=>{if(!d&&g>=o&&(d=!0),d&&g>=a&&(f(1,0),m()),!_)return!1;if(d){const $=g-o,v=0+1*l($/r);f(v,1-v)}return!0}),y(),f(0,1),m}function ve(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Gt(t,s)}}function Gt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let M;function N(t){M=t}function C(){if(!M)throw new Error("Function called outside component initialization");return M}function ke(t){C().$$.on_mount.push(t)}function Ee(t){C().$$.after_update.push(t)}function Ae(t){C().$$.on_destroy.push(t)}function Ce(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=pt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Se(t,e){return C().$$.context.set(t,e),e}function Te(t){return C().$$.context.get(t)}function Ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],rt=[],B=[],ot=[],yt=Promise.resolve();let K=!1;function gt(){K||(K=!0,yt.then(xt))}function Me(){return gt(),yt}function j(t){B.push(t)}const J=new Set;let P=0;function xt(){const t=M;do{for(;P<T.length;){const e=T[P];P++,N(e),It(e.$$)}for(N(null),T.length=0,P=0;rt.length;)rt.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];J.has(n)||(J.add(n),n())}B.length=0}while(T.length);for(;ot.length;)ot.pop()();K=!1,J.clear(),N(t)}function It(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let S;function bt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function F(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const H=new Set;let k;function je(){k={r:0,c:[],p:k}}function Re(){k.r||A(k.c),k=k.p}function wt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),k.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const $t={duration:0};function De(t,e,n){let i=e(t,n),s=!1,c,r,l=0;function o(){c&&z(t,c)}function a(){const{delay:u=0,duration:_=300,easing:d=Q,tick:h=w,css:y}=i||$t;y&&(c=tt(t,0,1,_,u,d,y,l++)),h(0,1);const m=U()+u,g=m+_;r&&r.abort(),s=!0,j(()=>F(t,!0,"start")),r=X($=>{if(s){if($>=g)return h(1,0),F(t,!0,"end"),o(),s=!1;if($>=m){const v=d(($-m)/_);h(v,1-v)}}return s})}let f=!1;return{start(){f||(f=!0,z(t),G(i)?(i=i(),bt().then(a)):a())},invalidate(){f=!1},end(){s&&(o(),s=!1)}}}function Pe(t,e,n){let i=e(t,n),s=!0,c;const r=k;r.r+=1;function l(){const{delay:o=0,duration:a=300,easing:f=Q,tick:u=w,css:_}=i||$t;_&&(c=tt(t,1,0,a,o,f,_));const d=U()+o,h=d+a;j(()=>F(t,!1,"start")),X(y=>{if(s){if(y>=h)return u(0,1),F(t,!1,"end"),--r.r||A(r.c),!1;if(y>=d){const m=f((y-d)/a);u(1-m,m)}}return s})}return G(i)?bt().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),s&&(c&&z(t,c),s=!1)}}}const Be=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Jt(t,e){Wt(t,1,1,()=>{e.delete(t.key)})}function He(t,e){t.f(),Jt(t,e)}function Le(t,e,n,i,s,c,r,l,o,a,f,u){let _=t.length,d=c.length,h=_;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,$=new Map;for(h=d;h--;){const p=u(s,c,h),x=n(p);let b=r.get(x);b?i&&b.p(p,e):(b=a(x,p),b.c()),g.set(x,m[h]=b),x in y&&$.set(x,Math.abs(h-y[x]))}const v=new Set,et=new Set;function W(p){wt(p,1),p.m(l,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],b=p.key,R=x.key;p===x?(f=p.first,_--,d--):g.has(R)?!r.has(b)||v.has(b)?W(p):et.has(R)?_--:$.get(b)>$.get(R)?(et.add(b),W(p)):(v.add(R),_--):(o(x,r),_--)}for(;_--;){const p=t[_];g.has(p.key)||o(p,r)}for(;d;)W(m[d-1]);return m}function Oe(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function qe(t){return typeof t=="object"&&t!==null?t:{}}function ze(t){t&&t.c()}function Fe(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||j(()=>{const o=c.map(ct).filter(G);r?r.push(...o):A(o),t.$$.on_mount=[]}),l.forEach(j)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(T.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ge(t,e,n,i,s,c,r,l=[-1]){const o=M;N(t);const a=t.$$={fragment:null,ctx:null,props:c,update:w,not_equal:s,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:nt(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&Ut(t,u)),_}):[],a.update(),f=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){At();const u=Ht(e.target);a.fragment&&a.fragment.l(u),u.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&wt(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),Ct(),xt()}N(o)}class Ie{$destroy(){Qt(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Zt as $,qe as A,Qt as B,vt as C,Me as D,w as E,Et as F,A as G,G as H,Te as I,Rt as J,ve as K,Gt as L,$e as M,j as N,De as O,Pe as P,Le as Q,He as R,Ie as S,Ce as T,Yt as U,st as V,ye as W,fe as X,Be as Y,Jt as Z,rt as _,Ht as a,be as a0,ee as a1,ne as a2,te as a3,_e as a4,Ne as a5,oe as a6,_t as a7,me as a8,ce as a9,Ae as aa,le as ab,Xt as ac,de as ad,re as ae,se as af,ie as ag,we as ah,Bt as b,he as c,L as d,Y as e,xe as f,Pt as g,Lt as h,Ge as i,ge as j,ae as k,ue as l,pe as m,je as n,Wt as o,Re as p,wt as q,Se as r,Vt as s,Z as t,Ee as u,ke as v,ze as w,Fe as x,Kt as y,Oe as z};