import{S as _,i as d,s as g,w as f,k as w,x as u,m as h,y as p,g as v,q as l,o as c,B as $,d as y}from"../chunks/index-4c83912a.js";import{a as b}from"../chunks/ClassDescribe-be7a8da4.js";import{M as D}from"../chunks/MetaTags-b3aacbef.js";import{D as q}from"../chunks/DescribeAny-bdd7641f.js";import"../chunks/preload-helper-94699599.js";import"../chunks/EnumDescribe-af5958b0.js";function B(n){let e,i,a,s;return e=new D({props:{title:n[0].value.name,description:n[0].value.description}}),a=new q({props:{what:n[0],setId:!1,path:"/"}}),{c(){f(e.$$.fragment),i=w(),f(a.$$.fragment)},l(t){u(e.$$.fragment,t),i=h(t),u(a.$$.fragment,t)},m(t,r){p(e,t,r),v(t,i,r),p(a,t,r),s=!0},p(t,[r]){const o={};r&1&&(o.title=t[0].value.name),r&1&&(o.description=t[0].value.description),e.$set(o);const m={};r&1&&(m.what=t[0]),a.$set(m)},i(t){s||(l(e.$$.fragment,t),l(a.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),c(a.$$.fragment,t),s=!1},d(t){$(e,t),t&&y(i),$(a,t)}}}let N=function({params:n}){let e=b(n.location);return e!==null?{status:200,props:{what:e}}:{status:404}};function M(n,e,i){let{what:a}=e;return n.$$set=s=>{"what"in s&&i(0,a=s.what)},[a]}class Q extends _{constructor(e){super(),d(this,e,M,B,g,{what:0})}}export{Q as default,N as load};