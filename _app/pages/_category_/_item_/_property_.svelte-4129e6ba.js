import{S as I,i as S,s as q,l as b,g as h,p as c,q as v,r as u,d as $,o as C,x as d,k as w,y as p,m as M,z as _,C as g}from"../../../chunks/index-26185746.js";import{M as D,I as F,a as j}from"../../../chunks/MetaTags-053d9886.js";import{r as y}from"../../../chunks/Article.svelte_svelte_type_style_lang-94aeeae6.js";function z(o){const t=o.slice(),r=t[3].parameters.map((n,i)=>{let e=n.map(s=>s.name+": "+s.type).join(", ");return t[3].name+"("+e+"): "+t[3].returns[i]})[0];return t[5]=r,t}function B(o){let t,r,n,i;return t=new D({props:{title:o[0].name,description:o[5]+`
`+(o[3].parameters.length>1?"("+(o[3].parameters.length-1)+" more overloads)":"")+`

`+o[3].description}}),n=new F({props:{container:o[1],method:o[3]}}),{c(){d(t.$$.fragment),r=w(),d(n.$$.fragment)},l(e){p(t.$$.fragment,e),r=M(e),p(n.$$.fragment,e)},m(e,s){_(t,e,s),h(e,r,s),_(n,e,s),i=!0},p(e,s){const f={};s&1&&(f.title=e[0].name),s&8&&(f.description=e[5]+`
`+(e[3].parameters.length>1?"("+(e[3].parameters.length-1)+" more overloads)":"")+`

`+e[3].description),t.$set(f);const a={};s&2&&(a.container=e[1]),s&8&&(a.method=e[3]),n.$set(a)},i(e){i||(u(t.$$.fragment,e),u(n.$$.fragment,e),i=!0)},o(e){c(t.$$.fragment,e),c(n.$$.fragment,e),i=!1},d(e){g(t,e),e&&$(r),g(n,e)}}}function N(o){let t,r,n,i;return t=new D({props:{title:o[0].name,description:(o[4].editable?"":"readonly ")+o[4].name+": "+o[4].type+`
`+o[0].description}}),n=new j({props:{container:o[1],field:o[4]}}),{c(){d(t.$$.fragment),r=w(),d(n.$$.fragment)},l(e){p(t.$$.fragment,e),r=M(e),p(n.$$.fragment,e)},m(e,s){_(t,e,s),h(e,r,s),_(n,e,s),i=!0},p(e,s){const f={};s&1&&(f.title=e[0].name),s&17&&(f.description=(e[4].editable?"":"readonly ")+e[4].name+": "+e[4].type+`
`+e[0].description),t.$set(f);const a={};s&2&&(a.container=e[1]),s&16&&(a.field=e[4]),n.$set(a)},i(e){i||(u(t.$$.fragment,e),u(n.$$.fragment,e),i=!0)},o(e){c(t.$$.fragment,e),c(n.$$.fragment,e),i=!1},d(e){g(t,e),e&&$(r),g(n,e)}}}function T(o){let t,r,n,i;const e=[N,B],s=[];function f(m,l){return m[2]==="field"?0:1}function a(m,l){return l===1?z(m):m}return t=f(o),r=s[t]=e[t](a(o,t)),{c(){r.c(),n=b()},l(m){r.l(m),n=b()},m(m,l){s[t].m(m,l),h(m,n,l),i=!0},p(m,[l]){let k=t;t=f(m),t===k?s[t].p(a(m,t),l):(C(),c(s[k],1,1,()=>{s[k]=null}),v(),r=s[t],r?r.p(a(m,t),l):(r=s[t]=e[t](a(m,t)),r.c()),u(r,1),r.m(n.parentNode,n))},i(m){i||(u(r),i=!0)},o(m){c(r),i=!1},d(m){s[t].d(m),m&&$(n)}}}let H=function({params:{category:o,item:t,property:r}}){if(!(o in y))return{status:404};let n=y[o];for(let i=0;i<n.length;i++)if(n[i].name===t){for(let e=0;e<n[i].methods.length;e++)if(n[i].methods[e].name==r)return{props:{docs:n[i].methods[e],container:n[i].name,kind:"method"}};for(let e=0;e<n[i].fields.length;e++)if(n[i].fields[e].name==r)return{props:{docs:n[i].fields[e],container:n[i].name,kind:"field"}};return{status:404}}if(!(t in n))return{status:404}};function U(o,t,r){let{docs:n}=t,{container:i}=t,{kind:e}=t,s,f=n;return o.$$set=a=>{"docs"in a&&r(0,n=a.docs),"container"in a&&r(1,i=a.container),"kind"in a&&r(2,e=a.kind)},o.$$.update=()=>{o.$$.dirty&1&&r(3,s=n),o.$$.dirty&1&&r(4,f=n)},[n,i,e,s,f]}class J extends I{constructor(t){super(),S(this,t,U,T,q,{docs:0,container:1,kind:2})}}export{J as default,H as load};
