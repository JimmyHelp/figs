import{S as g,i as _,s as w,w as c,k as y,x as f,m as C,y as p,g as h,q as u,o as $,B as d,d as q}from"../../../chunks/index-642db81b.js";import{C as B}from"../../../chunks/CategoryItemDocs-3a7adf4b.js";import{r as l}from"../../../chunks/Article.svelte_svelte_type_style_lang-94bf7d1f.js";import{M as D}from"../../../chunks/MetaTags-527ca136.js";import"../../../chunks/index-fc234b66.js";import"../../../chunks/preload-helper-a6ef5122.js";function M(r){let s,n,e,a;return s=new D({props:{title:r[0].name,description:r[0].description}}),e=new B({props:{docs:r[0]}}),{c(){c(s.$$.fragment),n=y(),c(e.$$.fragment)},l(t){f(s.$$.fragment,t),n=C(t),f(e.$$.fragment,t)},m(t,o){p(s,t,o),h(t,n,o),p(e,t,o),a=!0},p(t,[o]){const i={};o&1&&(i.title=t[0].name),o&1&&(i.description=t[0].description),s.$set(i);const m={};o&1&&(m.docs=t[0]),e.$set(m)},i(t){a||(u(s.$$.fragment,t),u(e.$$.fragment,t),a=!0)},o(t){$(s.$$.fragment,t),$(e.$$.fragment,t),a=!1},d(t){d(s,t),t&&q(n),d(e,t)}}}let j=function({params:{category:r,item:s}}){if(!(r in l))return{status:404};let n=l[r];for(let e=0;e<n.length;e++)if(n[e].name===s)return{props:{docs:n[e]}};if(!(s in n))return{status:404}};function S(r,s,n){let{docs:e}=s;return r.$$set=a=>{"docs"in a&&n(0,e=a.docs)},[e]}class z extends g{constructor(s){super(),_(this,s,S,M,w,{docs:0})}}export{z as default,j as load};
