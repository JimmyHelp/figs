import{S as K,i as R,s as z,e as u,t as x,c as p,a as g,h as $,d as h,b as f,g as C,J as n,E as F,w as G,k as q,x as H,m as A,y as L,q as M,o as N,B as P,ab as Q}from"../chunks/index-291ebab7.js";import{b as J}from"../chunks/preload-helper-dfa869de.js";import{T as U}from"../chunks/TranslatableKey-5db92918.js";import{l as O,v as S}from"../chunks/_docs_all-d19ed728.js";import"../chunks/translator-6d388499.js";function T(m,s,r){const c=m.slice();return c[0]=s[r],c}function B(m){let s,r=m[0]+"",c,o;return{c(){s=u("a"),c=x(r),this.h()},l(i){s=p(i,"A",{href:!0,class:!0});var l=g(s);c=$(l,r),l.forEach(h),this.h()},h(){f(s,"href",o=J+"/"+m[0]),f(s,"class","svelte-1cwv0mc")},m(i,l){C(i,s,l),n(s,c)},p:F,d(i){i&&h(s)}}}function W(m){let s,r,c,o,i,l,v,E,D,I,V,y;o=new U({props:{key:"pick-a-version"}});let d=Object.keys(S),a=[];for(let e=0;e<d.length;e+=1)a[e]=B(T(m,d,e));return{c(){s=u("div"),r=u("div"),c=u("div"),G(o.$$.fragment),i=q(),l=u("div"),v=u("a"),E=x("latest ("),D=x(O),I=x(")"),V=q();for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){s=p(e,"DIV",{class:!0});var _=g(s);r=p(_,"DIV",{class:!0});var t=g(r);c=p(t,"DIV",{class:!0});var k=g(c);H(o.$$.fragment,k),k.forEach(h),i=A(t),l=p(t,"DIV",{class:!0});var b=g(l);v=p(b,"A",{href:!0,class:!0});var w=g(v);E=$(w,"latest ("),D=$(w,O),I=$(w,")"),w.forEach(h),V=A(b);for(let j=0;j<a.length;j+=1)a[j].l(b);b.forEach(h),t.forEach(h),_.forEach(h),this.h()},h(){f(c,"class","version-picker-title svelte-1cwv0mc"),f(v,"href",J+"/latest"),f(v,"class","svelte-1cwv0mc"),f(l,"class","version-picker-list svelte-1cwv0mc"),f(r,"class","version-picker-content svelte-1cwv0mc"),f(s,"class","version-picker svelte-1cwv0mc")},m(e,_){C(e,s,_),n(s,r),n(r,c),L(o,c,null),n(r,i),n(r,l),n(l,v),n(v,E),n(v,D),n(v,I),n(l,V);for(let t=0;t<a.length;t+=1)a[t].m(l,null);y=!0},p(e,[_]){if(_&0){d=Object.keys(S);let t;for(t=0;t<d.length;t+=1){const k=T(e,d,t);a[t]?a[t].p(k,_):(a[t]=B(k),a[t].c(),a[t].m(l,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=d.length}},i(e){y||(M(o.$$.fragment,e),y=!0)},o(e){N(o.$$.fragment,e),y=!1},d(e){e&&h(s),P(o),Q(a,e)}}}class se extends K{constructor(s){super(),R(this,s,null,W,z,{})}}export{se as default};