import{S as _e,i as de,s as ge,w as ee,x as le,y as te,q as L,o as F,B as re,k as Q,l as ie,m as U,g as J,n as he,p as pe,F as Se,d as O,t as X,h as Z,j as Me,e as z,c as j,a as V,b as C,G as N,E as se,H as Qe,I as Ue,J as Xe,K as ke,L as Ze,M as je,N as Ye,O as Ke,P as xe,Q as et,R as tt,T as Ie,U as Oe,f as ue,V as be,W as rt,X as nt,Y as lt,Z as st,_ as it,v as at,$ as ot,a0 as ct}from"../chunks/index-03ac9702.js";import{b as ye}from"../chunks/preload-helper-7002f5f4.js";import{n as ft}from"../chunks/svgNamespace-ebff0b03.js";import{S as He,m as ut,f as ht,g as pt,r as Ne,k as _t,a as dt,M as gt,C as mt,b as vt,c as bt,s as Be}from"../chunks/ClassDescribe-8ba5fdc7.js";var Ce="Pre-4",kt="/figs/_app/assets/cheese-9bdf176f.png";function yt(h,r){let e=[],n=h.getBoundingClientRect(),c=(b,_)=>{if(console.log(n.top+_.data.y),n.top+_.data.y<-_.data.scale*100||n.top+_.data.y>window.innerHeight+_.data.scale*100){b.remove();return}b.parentElement===null&&h.appendChild(b),b.setAttributeNS(null,"transform",`translate(${_.data.x},${_.data.y}) rotate(${_.data.angle}) scale(${_.data.scale}, ${_.data.scale})`)},u=()=>{if(n=h.getBoundingClientRect(),Math.random()>.99&&r){let b=document.createElementNS(ft,"image");b.setAttributeNS(null,"href",kt),h.appendChild(b),e.push({element:b,data:{x:Math.random()*h.clientWidth,y:-50,ym:Math.random()*.1+1,scale:Math.random()+(Math.random()>.99?5:1),angle:Math.random()*360,anglem:(Math.random()-.5)*.1}})}for(let b=e.length-1;b>=0;b--){let _=e[b];_.data.y+=_.data.ym,_.data.angle+=_.data.anglem,_.data.y>h.clientHeight&&(e.splice(b,1),_.element.remove()),c(_.element,_)}r||e.length>0?m=requestAnimationFrame(u):m=null},m=requestAnimationFrame(u);return{destroy(){m&&cancelAnimationFrame(m)},update(b){m===null&&b&&(m=requestAnimationFrame(u)),r=b}}}function De(h,r,e){const n=h.slice();return n[1]=r[e],n}function Pe(h,r,e){const n=h.slice();return n[4]=r[e],n}function $t(h){let r=h[4].name+"",e;return{c(){e=X(r)},l(n){e=Z(n,r)},m(n,c){J(n,e,c)},p(n,c){c&1&&r!==(r=n[4].name+"")&&Me(e,r)},d(n){n&&O(e)}}}function Le(h){let r,e;return r=new He({props:{href:ye+"#"+h[4].name,src:ut,$$slots:{default:[$t]},$$scope:{ctx:h}}}),{c(){ee(r.$$.fragment)},l(n){le(r.$$.fragment,n)},m(n,c){te(r,n,c),e=!0},p(n,c){const u={};c&1&&(u.href=ye+"#"+n[4].name),c&129&&(u.$$scope={dirty:c,ctx:n}),r.$set(u)},i(n){e||(L(r.$$.fragment,n),e=!0)},o(n){F(r.$$.fragment,n),e=!1},d(n){re(r,n)}}}function wt(h){let r=h[1].name+"",e;return{c(){e=X(r)},l(n){e=Z(n,r)},m(n,c){J(n,e,c)},p(n,c){c&1&&r!==(r=n[1].name+"")&&Me(e,r)},d(n){n&&O(e)}}}function Re(h){let r,e;return r=new He({props:{href:ye+"#"+h[1].name,src:ht,$$slots:{default:[wt]},$$scope:{ctx:h}}}),{c(){ee(r.$$.fragment)},l(n){le(r.$$.fragment,n)},m(n,c){te(r,n,c),e=!0},p(n,c){const u={};c&1&&(u.href=ye+"#"+n[1].name),c&129&&(u.$$scope={dirty:c,ctx:n}),r.$set(u)},i(n){e||(L(r.$$.fragment,n),e=!0)},o(n){F(r.$$.fragment,n),e=!1},d(n){re(r,n)}}}function Mt(h){let r,e,n,c=h[0].methods,u=[];for(let d=0;d<c.length;d+=1)u[d]=Le(Pe(h,c,d));const m=d=>F(u[d],1,1,()=>{u[d]=null});let b=h[0].fields,_=[];for(let d=0;d<b.length;d+=1)_[d]=Re(De(h,b,d));const $=d=>F(_[d],1,1,()=>{_[d]=null});return{c(){for(let d=0;d<u.length;d+=1)u[d].c();r=Q();for(let d=0;d<_.length;d+=1)_[d].c();e=ie()},l(d){for(let k=0;k<u.length;k+=1)u[k].l(d);r=U(d);for(let k=0;k<_.length;k+=1)_[k].l(d);e=ie()},m(d,k){for(let g=0;g<u.length;g+=1)u[g].m(d,k);J(d,r,k);for(let g=0;g<_.length;g+=1)_[g].m(d,k);J(d,e,k),n=!0},p(d,[k]){if(k&1){c=d[0].methods;let g;for(g=0;g<c.length;g+=1){const A=Pe(d,c,g);u[g]?(u[g].p(A,k),L(u[g],1)):(u[g]=Le(A),u[g].c(),L(u[g],1),u[g].m(r.parentNode,r))}for(he(),g=c.length;g<u.length;g+=1)m(g);pe()}if(k&1){b=d[0].fields;let g;for(g=0;g<b.length;g+=1){const A=De(d,b,g);_[g]?(_[g].p(A,k),L(_[g],1)):(_[g]=Re(A),_[g].c(),L(_[g],1),_[g].m(e.parentNode,e))}for(he(),g=b.length;g<_.length;g+=1)$(g);pe()}},i(d){if(!n){for(let k=0;k<c.length;k+=1)L(u[k]);for(let k=0;k<b.length;k+=1)L(_[k]);n=!0}},o(d){u=u.filter(Boolean);for(let k=0;k<u.length;k+=1)F(u[k]);_=_.filter(Boolean);for(let k=0;k<_.length;k+=1)F(_[k]);n=!1},d(d){Se(u,d),d&&O(r),Se(_,d),d&&O(e)}}}function Et(h,r,e){let{klass:n}=r;return h.$$set=c=>{"klass"in c&&e(0,n=c.klass)},[n]}class St extends _e{constructor(r){super(),de(this,r,Et,Mt,ge,{klass:0})}}function Fe(h,r,e){const n=h.slice();return n[0]=r[e][0],n[1]=r[e][1],n}function Tt(h){let r=h[0]+"",e;return{c(){e=X(r)},l(n){e=Z(n,r)},m(n,c){J(n,e,c)},p:se,d(n){n&&O(e)}}}function Ge(h){let r,e;return r=new He({props:{href:ye+"#"+h[1].name,src:_t,$$slots:{default:[Tt]},$$scope:{ctx:h}}}),{c(){ee(r.$$.fragment)},l(n){le(r.$$.fragment,n)},m(n,c){te(r,n,c),e=!0},p(n,c){const u={};c&16&&(u.$$scope={dirty:c,ctx:n}),r.$set(u)},i(n){e||(L(r.$$.fragment,n),e=!0)},o(n){F(r.$$.fragment,n),e=!1},d(n){re(r,n)}}}function At(h){let r,e,n,c,u,m,b,_,$,d,k,g;m=new St({props:{klass:pt}});let A=Object.entries(Ne),M=[];for(let B=0;B<A.length;B+=1)M[B]=Ge(Fe(h,A,B));const Y=B=>F(M[B],1,1,()=>{M[B]=null});return{c(){r=z("div"),e=z("span"),n=X("Global Objects"),c=Q(),u=z("div"),ee(m.$$.fragment),b=Q(),_=z("span"),$=X("Miscellaneous Types"),d=Q(),k=z("div");for(let B=0;B<M.length;B+=1)M[B].c();this.h()},l(B){r=j(B,"DIV",{class:!0});var o=V(r);e=j(o,"SPAN",{class:!0});var t=V(e);n=Z(t,"Global Objects"),t.forEach(O),c=U(o),u=j(o,"DIV",{class:!0});var l=V(u);le(m.$$.fragment,l),l.forEach(O),b=U(o),_=j(o,"SPAN",{class:!0});var i=V(_);$=Z(i,"Miscellaneous Types"),i.forEach(O),d=U(o),k=j(o,"DIV",{class:!0});var s=V(k);for(let f=0;f<M.length;f+=1)M[f].l(s);s.forEach(O),o.forEach(O),this.h()},h(){C(e,"class","tab svelte-10srbja"),C(u,"class","fields-container svelte-10srbja"),C(_,"class","tab svelte-10srbja"),C(k,"class","fields-container svelte-10srbja"),C(r,"class","sidebar-viewer svelte-10srbja")},m(B,o){J(B,r,o),N(r,e),N(e,n),N(r,c),N(r,u),te(m,u,null),N(r,b),N(r,_),N(_,$),N(r,d),N(r,k);for(let t=0;t<M.length;t+=1)M[t].m(k,null);g=!0},p(B,[o]){if(o&0){A=Object.entries(Ne);let t;for(t=0;t<A.length;t+=1){const l=Fe(B,A,t);M[t]?(M[t].p(l,o),L(M[t],1)):(M[t]=Ge(l),M[t].c(),L(M[t],1),M[t].m(k,null))}for(he(),t=A.length;t<M.length;t+=1)Y(t);pe()}},i(B){if(!g){L(m.$$.fragment,B);for(let o=0;o<A.length;o+=1)L(M[o]);g=!0}},o(B){F(m.$$.fragment,B),M=M.filter(Boolean);for(let o=0;o<M.length;o+=1)F(M[o]);g=!1},d(B){B&&O(r),re(m),Se(M,B)}}}class Ht extends _e{constructor(r){super(),de(this,r,null,At,ge,{})}}function It(h){let r;return{c(){r=X("Not Found")},l(e){r=Z(e,"Not Found")},m(e,n){J(e,r,n)},p:se,i:se,o:se,d(e){e&&O(r)}}}function Ot(h){let r,e,n,c;const u=[Bt,Nt],m=[];function b(_,$){return _[0].type==="class"?0:_[0].type==="method"?1:-1}return~(r=b(h))&&(e=m[r]=u[r](h)),{c(){e&&e.c(),n=ie()},l(_){e&&e.l(_),n=ie()},m(_,$){~r&&m[r].m(_,$),J(_,n,$),c=!0},p(_,$){let d=r;r=b(_),r===d?~r&&m[r].p(_,$):(e&&(he(),F(m[d],1,1,()=>{m[d]=null}),pe()),~r?(e=m[r],e?e.p(_,$):(e=m[r]=u[r](_),e.c()),L(e,1),e.m(n.parentNode,n)):e=null)},i(_){c||(L(e),c=!0)},o(_){F(e),c=!1},d(_){~r&&m[r].d(_),_&&O(n)}}}function Nt(h){let r,e;return r=new gt({props:{hostClass:h[0].klass,method:h[0].value,forceSmall:!0}}),{c(){ee(r.$$.fragment)},l(n){le(r.$$.fragment,n)},m(n,c){te(r,n,c),e=!0},p(n,c){const u={};c&1&&(u.hostClass=n[0].klass),c&1&&(u.method=n[0].value),r.$set(u)},i(n){e||(L(r.$$.fragment,n),e=!0)},o(n){F(r.$$.fragment,n),e=!1},d(n){re(r,n)}}}function Bt(h){let r,e;return r=new mt({props:{klass:h[0].value,forceSmall:!0}}),{c(){ee(r.$$.fragment)},l(n){le(r.$$.fragment,n)},m(n,c){te(r,n,c),e=!0},p(n,c){const u={};c&1&&(u.klass=n[0].value),r.$set(u)},i(n){e||(L(r.$$.fragment,n),e=!0)},o(n){F(r.$$.fragment,n),e=!1},d(n){re(r,n)}}}function Ct(h){let r,e,n,c;const u=[Ot,It],m=[];function b(_,$){return _[0]!==null?0:1}return r=b(h),e=m[r]=u[r](h),{c(){e.c(),n=ie()},l(_){e.l(_),n=ie()},m(_,$){m[r].m(_,$),J(_,n,$),c=!0},p(_,[$]){let d=r;r=b(_),r===d?m[r].p(_,$):(he(),F(m[d],1,1,()=>{m[d]=null}),pe(),e=m[r],e?e.p(_,$):(e=m[r]=u[r](_),e.c()),L(e,1),e.m(n.parentNode,n))},i(_){c||(L(e),c=!0)},o(_){F(e),c=!1},d(_){m[r].d(_),_&&O(n)}}}function Dt(h,r,e){let{name:n}=r,c;return h.$$set=u=>{"name"in u&&e(1,n=u.name)},h.$$.update=()=>{h.$$.dirty&2&&e(0,c=dt(n))},[c,n]}class Pt extends _e{constructor(r){super(),de(this,r,Dt,Ct,ge,{name:1})}}var Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"})),Te={},Je={},Rt={},Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"})),Gt=vt(Ft);(function(h){(function(r){var e=r.Markdown=function(o){switch(typeof o){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=o;break;default:if(o in e.dialects)this.dialect=e.dialects[o];else throw new Error("Unknown Markdown dialect '"+String(o)+"'");break}this.em_state=[],this.strong_state=[],this.debug_indent=""};r.parse=function(o,t){var l=new e(t);return l.toTree(o)},r.toHTML=function(t,l,i){var s=r.toHTMLTree(t,l,i);return r.renderJsonML(s)},r.toHTMLTree=function(t,l,i){typeof t=="string"&&(t=this.parse(t,l));var s=g(t),f={};s&&s.references&&(f=s.references);var v=Y(t,f,i);return B(v),v};function n(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function c(){var o=Gt;return"Markdown.mk_block( "+o.inspect(this.toString())+", "+o.inspect(this.trailing)+", "+o.inspect(this.lineNumber)+" )"}var u=e.mk_block=function(o,t,l){arguments.length==1&&(t=`

`);var i=new String(o);return i.trailing=t,i.inspect=c,i.toSource=n,l!=null&&(i.lineNumber=l),i};function m(o){for(var t=0,l=-1;(l=o.indexOf(`
`,l+1))!==-1;)t++;return t}e.prototype.split_blocks=function(t,l){t=t.replace(/(\r\n|\n|\r)/g,`
`);var i=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,s=[],f,v=1;for((f=/^(\s*\n)/.exec(t))!=null&&(v+=m(f[0]),i.lastIndex=f[0].length);(f=i.exec(t))!==null;)f[2]==`
#`&&(f[2]=`
`,i.lastIndex--),s.push(u(f[1],f[2],v)),v+=m(f[0]);return s},e.prototype.processBlock=function(t,l){var i=this.dialect.block,s=i.__order__;if("__call__"in i)return i.__call__.call(this,t,l);for(var f=0;f<s.length;f++){var v=i[s[f]].call(this,t,l);if(v)return(!$(v)||v.length>0&&!$(v[0]))&&this.debug(s[f],"didn't return a proper array"),v}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,l){var i=t instanceof Array?t:this.split_blocks(t),s=this.tree;try{this.tree=l||this.tree||["markdown"];e:for(;i.length;){var f=this.processBlock(i.shift(),i);if(!f.length)continue e;this.tree.push.apply(this.tree,f)}return this.tree}finally{l&&(this.tree=s)}},e.prototype.debug=function(){var o=Array.prototype.slice.call(arguments);o.unshift(this.debug_indent),typeof print!="undefined"&&print.apply(print,o),typeof console!="undefined"&&typeof console.log!="undefined"&&console.log.apply(null,o)},e.prototype.loop_re_over_block=function(o,t,l){for(var i,s=t.valueOf();s.length&&(i=o.exec(s))!=null;)s=s.substr(i[0].length),l.call(this,i);return s},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,l){var i=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!!i){var s=["header",{level:i[1].length}];return Array.prototype.push.apply(s,this.processInline(i[2])),i[0].length<t.length&&l.unshift(u(t.substr(i[0].length),t.trailing,t.lineNumber+2)),[s]}},setextHeader:function(t,l){var i=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!!i){var s=i[2]==="="?1:2,f=["header",{level:s},i[1]];return i[0].length<t.length&&l.unshift(u(t.substr(i[0].length),t.trailing,t.lineNumber+2)),[f]}},code:function(t,l){var i=[],s=/^(?: {0,3}\t| {4})(.*)\n?/;if(!t.match(s))return;e:do{var f=this.loop_re_over_block(s,t.valueOf(),function(v){i.push(v[1])});if(f.length){l.unshift(u(f,t.trailing));break e}else if(l.length){if(!l[0].match(s))break e;i.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=l.shift()}else break e}while(!0);return[["code_block",i.join(`
`)]]},horizRule:function(t,l){var i=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!!i){var s=[["hr"]];return i[1]&&s.unshift.apply(s,this.processBlock(i[1],[])),i[3]&&l.unshift(u(i[3])),s}},lists:function(){var o="[*+-]|\\d+\\.",t=/[*+-]/,l=new RegExp("^( {0,3})("+o+")[ 	]+"),i="(?: {0,3}\\t| {4})";function s(y){return new RegExp("(?:^("+i+"{0,"+y+"} {0,3})("+o+")\\s+)|(^"+i+"{0,"+(y-1)+"}[ ]{0,4})")}function f(y){return y.replace(/ {0,3}\t/g,"    ")}function v(y,E,S,q){if(E){y.push(["para"].concat(S));return}var T=y[y.length-1]instanceof Array&&y[y.length-1][0]=="para"?y[y.length-1]:y;q&&y.length>1&&S.unshift(q);for(var P=0;P<S.length;P++){var R=S[P],W=typeof R=="string";W&&T.length>1&&typeof T[T.length-1]=="string"?T[T.length-1]+=R:T.push(R)}}function w(y,E){for(var S=new RegExp("^("+i+"{"+y+"}.*?\\n?)*$"),q=new RegExp("^"+i+"{"+y+"}","gm"),T=[];E.length>0&&S.exec(E[0]);){var P=E.shift(),R=P.replace(q,"");T.push(u(R,P.trailing,P.lineNumber))}return T}function H(y,E,S){var q=y.list,T=q[q.length-1];if(!(T[1]instanceof Array&&T[1][0]=="para"))if(E+1==S.length)T.push(["para"].concat(T.splice(1,T.length-1)));else{var P=T.pop();T.push(["para"].concat(T.splice(1,T.length-1)),P)}}return function(y,E){var S=y.match(l);if(!S)return;function q(ce){var fe=t.exec(ce[2])?["bulletlist"]:["numberlist"];return T.push({list:fe,indent:ce[1]}),fe}var T=[],P=q(S),R,W=!1,ae=[T[0].list],x;e:for(;;){for(var me=y.split(/(?=\n)/),G="",I=0;I<me.length;I++){var D="",K=me[I].replace(/^\n/,function(ce){return D=ce,""}),Ee=s(T.length);if(S=K.match(Ee),S[1]!==void 0){G.length&&(v(R,W,this.processInline(G),D),W=!1,G=""),S[1]=f(S[1]);var ne=Math.floor(S[1].length/4)+1;if(ne>T.length)P=q(S),R.push(P),R=P[1]=["listitem"];else{var ve=!1;for(x=0;x<T.length;x++)if(T[x].indent==S[1]){P=T[x].list,T.splice(x+1,T.length-(x+1)),ve=!0;break}ve||(ne++,ne<=T.length?(T.splice(ne,T.length-ne),P=T[ne-1].list):(P=q(S),R.push(P))),R=["listitem"],P.push(R)}D=""}K.length>S[0].length&&(G+=D+K.substr(S[0].length))}G.length&&(v(R,W,this.processInline(G),D),W=!1,G="");var $e=w(T.length,E);$e.length>0&&(d(T,H,this),R.push.apply(R,this.toTree($e,[])));var we=E[0]&&E[0].valueOf()||"";if(we.match(l)||we.match(/^ /)){y=E.shift();var oe=this.dialect.block.horizRule(y,E);if(oe){ae.push.apply(ae,oe);break}d(T,H,this),W=!0;continue e}break}return ae}}(),blockquote:function(t,l){if(!!t.match(/^>/m)){var i=[];if(t[0]!=">"){for(var s=t.split(/\n/),f=[],v=t.lineNumber;s.length&&s[0][0]!=">";)f.push(s.shift()),v++;var w=u(f.join(`
`),`
`,t.lineNumber);i.push.apply(i,this.processBlock(w,[])),t=u(s.join(`
`),t.trailing,v)}for(;l.length&&l[0][0]==">";){var H=l.shift();t=u(t+t.trailing+H,H.trailing,t.lineNumber)}var y=t.replace(/^> ?/gm,"");this.tree;var E=this.toTree(y,["blockquote"]),S=g(E);return S&&S.references&&(delete S.references,k(S)&&E.splice(1,1)),i.push(E),i}},referenceDefn:function(t,l){var i=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!!t.match(i)){g(this.tree)||this.tree.splice(1,0,{});var s=g(this.tree);s.references===void 0&&(s.references={});var f=this.loop_re_over_block(i,t,function(v){v[2]&&v[2][0]=="<"&&v[2][v[2].length-1]==">"&&(v[2]=v[2].substring(1,v[2].length-1));var w=s.references[v[1].toLowerCase()]={href:v[2]};v[4]!==void 0?w.title=v[4]:v[5]!==void 0&&(w.title=v[5])});return f.length&&l.unshift(u(f,t.trailing)),[]}},para:function(t,l){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,l,i){var s,v;l=l||this.dialect.inline.__patterns__;var f=new RegExp("([\\s\\S]*?)("+(l.source||l)+")");if(s=f.exec(t),s){if(s[1])return[s[1].length,s[1]]}else return[t.length,t];var v;return s[2]in this.dialect.inline&&(v=this.dialect.inline[s[2]].call(this,t.substr(s.index),s,i||[])),v=v||[s[2].length,s[2]],v},__call__:function(t,l){var i=[],s;function f(v){typeof v=="string"&&typeof i[i.length-1]=="string"?i[i.length-1]+=v:i.push(v)}for(;t.length>0;)s=this.dialect.inline.__oneElement__.call(this,t,l,i),t=t.substr(s.shift()),d(s,f);return i},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var l=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(l){l[2]&&l[2][0]=="<"&&l[2][l[2].length-1]==">"&&(l[2]=l[2].substring(1,l[2].length-1)),l[2]=this.dialect.inline.__call__.call(this,l[2],/\\/)[0];var i={alt:l[1],href:l[2]||""};return l[4]!==void 0&&(i.title=l[4]),[l[0].length,["img",i]]}return l=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),l?[l[0].length,["img_ref",{alt:l[1],ref:l[2].toLowerCase(),original:l[0]}]]:[2,"!["]},"[":function(t){var l=String(t),i=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!i)return[1,"["];var s=1+i[0],f=i[1],v,w;t=t.substr(s);var H=t.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(H){var y=H[1];if(s+=H[0].length,y&&y[0]=="<"&&y[y.length-1]==">"&&(y=y.substring(1,y.length-1)),!H[3])for(var E=1,S=0;S<y.length;S++)switch(y[S]){case"(":E++;break;case")":--E==0&&(s-=y.length-S,y=y.substring(0,S));break}return y=this.dialect.inline.__call__.call(this,y,/\\/)[0],w={href:y||""},H[3]!==void 0&&(w.title=H[3]),v=["link",w].concat(f),[s,v]}return H=t.match(/^\s*\[(.*?)\]/),H?(s+=H[0].length,w={ref:(H[1]||String(f)).toLowerCase(),original:l.substr(0,s)},v=["link_ref",w].concat(f),[s,v]):f.length==1&&typeof f[0]=="string"?(w={ref:f[0].toLowerCase(),original:l.substr(0,s)},v=["link_ref",w,f[0]],[s,v]):[1,"["]},"<":function(t){var l;return(l=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null?l[3]?[l[0].length,["link",{href:"mailto:"+l[3]},l[3]]]:l[2]=="mailto"?[l[0].length,["link",{href:l[1]},l[1].substr(7)]]:[l[0].length,["link",{href:l[1]},l[1]]]:[1,"<"]},"`":function(t){var l=t.match(/(`+)(([\s\S]*?)\1)/);return l&&l[2]?[l[1].length+l[2].length,["inlinecode",l[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}};function b(o,t){var l=o+"_state",i=o=="strong"?"em_state":"strong_state";function s(f){this.len_after=f,this.name="close_"+t}return function(f,v){if(this[l][0]==t)return this[l].shift(),[f.length,new s(f.length-t.length)];var w=this[i].slice(),H=this[l].slice();this[l].unshift(t);var y=this.processInline(f.substr(t.length)),E=y[y.length-1];if(this[l].shift(),E instanceof s){y.pop();var S=f.length-E.len_after;return[S,[o].concat(y)]}else return this[i]=w,this[l]=H,[t.length,t]}}e.dialects.Gruber.inline["**"]=b("strong","**"),e.dialects.Gruber.inline.__=b("strong","__"),e.dialects.Gruber.inline["*"]=b("em","*"),e.dialects.Gruber.inline._=b("em","_"),e.buildBlockOrder=function(o){var t=[];for(var l in o)l=="__order__"||l=="__call__"||t.push(l);o.__order__=t},e.buildInlinePatterns=function(o){var t=[];for(var l in o)if(!l.match(/^__.*__$/)){var i=l.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(l.length==1?i:"(?:"+i+")")}t=t.join("|"),o.__patterns__=t;var s=o.__call__;o.__call__=function(f,v){return v!=null?s.call(this,f,v):s.call(this,f,t)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(o,t){for(var l=0,i=[];;){if(o.charAt(l)==t)return l++,[l,i];if(l>=o.length)return null;var s=this.dialect.inline.__oneElement__.call(this,o.substr(l));l+=s[0],i.push.apply(i,s.slice(1))}},e.subclassDialect=function(o){function t(){}t.prototype=o.block;function l(){}return l.prototype=o.inline,{block:new t,inline:new l}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var l=_(t),i={},s=0;s<l.length;++s)if(/^#/.test(l[s]))i.id=l[s].substring(1);else if(/^\./.test(l[s]))i.class?i.class=i.class+l[s].replace(/./," "):i.class=l[s].substring(1);else if(/\=/.test(l[s])){var f=l[s].split(/\=/);i[f[0]]=f[1]}return i};function _(o){for(var t=o.split(""),l=[""],i=!1;t.length;){var s=t.shift();switch(s){case" ":i?l[l.length-1]+=s:l.push("");break;case"'":case'"':i=!i;break;case"\\":s=t.shift();default:l[l.length-1]+=s;break}}return l}e.dialects.Maruku.block.document_meta=function(t,l){if(!(t.lineNumber>1)&&!!t.match(/^(?:\w+:.*\n)*\w+:.*$/)){g(this.tree)||this.tree.splice(1,0,{});var i=t.split(/\n/);for(p in i){var s=i[p].match(/(\w+):\s*(.*)$/),f=s[1].toLowerCase(),v=s[2];this.tree[1][f]=v}return[]}},e.dialects.Maruku.block.block_meta=function(t,l){var i=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!!i){var s=this.dialect.processMetaHash(i[2]),f;if(i[1]===""){var v=this.tree[this.tree.length-1];if(f=g(v),typeof v=="string")return;f||(f={},v.splice(1,0,f));for(a in s)f[a]=s[a];return[]}var w=t.replace(/\n.*$/,""),H=this.processBlock(w,[]);f=g(H[0]),f||(f={},H[0].splice(1,0,f));for(a in s)f[a]=s[a];return H}},e.dialects.Maruku.block.definition_list=function(t,l){var i=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,s=["dl"],f,v;if(v=t.match(i)){for(var w=[t];l.length&&i.exec(l[0]);)w.push(l.shift());for(var H=0;H<w.length;++H){var v=w[H].match(i),y=v[1].replace(/\n$/,"").split(/\n/),E=v[2].split(/\n:\s+/);for(f=0;f<y.length;++f)s.push(["dt",y[f]]);for(f=0;f<E.length;++f)s.push(["dd"].concat(this.processInline(E[f].replace(/(\n)\s+/,"$1"))))}}else return;return[s]},e.dialects.Maruku.block.table=function(t,l){var i=function(E,S){S=S||"\\s",S.match(/^[\\|\[\]{}?*.+^$]$/)&&(S="\\"+S);for(var q=[],T=new RegExp("^((?:\\\\.|[^\\\\"+S+"])*)"+S+"(.*)"),P;P=E.match(T);)q.push(P[1]),E=P[2];return q.push(E),q},s=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,f=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,v,w;if(w=t.match(s))w[3]=w[3].replace(/^\s*\|/gm,"");else if(!(w=t.match(f)))return;var H=["table",["thead",["tr"]],["tbody"]];w[2]=w[2].replace(/\|\s*$/,"").split("|");var y=[];for(d(w[2],function(E){E.match(/^\s*-+:\s*$/)?y.push({align:"right"}):E.match(/^\s*:-+\s*$/)?y.push({align:"left"}):E.match(/^\s*:-+:\s*$/)?y.push({align:"center"}):y.push({})}),w[1]=i(w[1].replace(/\|\s*$/,""),"|"),v=0;v<w[1].length;v++)H[1][1].push(["th",y[v]||{}].concat(this.processInline(w[1][v].trim())));return d(w[3].replace(/\|\s*$/mg,"").split(`
`),function(E){var S=["tr"];for(E=i(E,"|"),v=0;v<E.length;v++)S.push(["td",y[v]||{}].concat(this.processInline(E[v].trim())));H[2].push(S)},this),[H]},e.dialects.Maruku.inline["{:"]=function(t,l,i){if(!i.length)return[2,"{:"];var s=i[i.length-1];if(typeof s=="string")return[2,"{:"];var f=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!f)return[2,"{:"];var v=this.dialect.processMetaHash(f[1]),w=g(s);w||(w={},s.splice(1,0,w));for(var H in v)w[H]=v[H];return[f[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var $=Array.isArray||function(o){return Object.prototype.toString.call(o)=="[object Array]"},d;Array.prototype.forEach?d=function(o,t,l){return o.forEach(t,l)}:d=function(o,t,l){for(var i=0;i<o.length;i++)t.call(l||o,o[i],i,o)};var k=function(o){for(var t in o)if(hasOwnProperty.call(o,t))return!1;return!0};function g(o){return $(o)&&o.length>1&&typeof o[1]=="object"&&!$(o[1])?o[1]:void 0}r.renderJsonML=function(o,t){t=t||{},t.root=t.root||!1;var l=[];if(t.root)l.push(M(o));else for(o.shift(),o.length&&typeof o[0]=="object"&&!(o[0]instanceof Array)&&o.shift();o.length;)l.push(M(o.shift()));return l.join(`

`)};function A(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function M(o){if(typeof o=="string")return A(o);var t=o.shift(),l={},i=[];for(o.length&&typeof o[0]=="object"&&!(o[0]instanceof Array)&&(l=o.shift());o.length;)i.push(M(o.shift()));var s="";for(var f in l)s+=" "+f+'="'+A(l[f])+'"';return t=="img"||t=="br"||t=="hr"?"<"+t+s+"/>":"<"+t+s+">"+i.join("")+"</"+t+">"}function Y(o,t,l){var i;l=l||{};var s=o.slice(0);typeof l.preprocessTreeNode=="function"&&(s=l.preprocessTreeNode(s,t));var f=g(s);if(f){s[1]={};for(i in f)s[1][i]=f[i];f=s[1]}if(typeof s=="string")return s;switch(s[0]){case"header":s[0]="h"+s[1].level,delete s[1].level;break;case"bulletlist":s[0]="ul";break;case"numberlist":s[0]="ol";break;case"listitem":s[0]="li";break;case"para":s[0]="p";break;case"markdown":s[0]="html",f&&delete f.references;break;case"code_block":s[0]="pre",i=f?2:1;var v=["code"];v.push.apply(v,s.splice(i,s.length-i)),s[i]=v;break;case"inlinecode":s[0]="code";break;case"img":s[1].src=s[1].href,delete s[1].href;break;case"linebreak":s[0]="br";break;case"link":s[0]="a";break;case"link_ref":s[0]="a";var w=t[f.ref];if(w)delete f.ref,f.href=w.href,w.title&&(f.title=w.title),delete f.original;else return f.original;break;case"img_ref":s[0]="img";var w=t[f.ref];if(w)delete f.ref,f.src=w.href,w.title&&(f.title=w.title),delete f.original;else return f.original;break}if(i=1,f){for(var H in s[1]){i=2;break}i===1&&s.splice(i,1)}for(;i<s.length;++i)s[i]=Y(s[i],t,l);return s}function B(o){for(var t=g(o)?2:1;t<o.length;)typeof o[t]=="string"?t+1<o.length&&typeof o[t+1]=="string"?o[t]+=o.splice(t+1,1)[0]:++t:(B(o[t]),++t)}})(function(){return h}())})(Je);(function(h){h.markdown=Je,h.parse=h.markdown.toHTML})(Te);function Vt(h){let r,e=Te.markdown.toHTML(h[0])+"",n;return{c(){r=new Qe(!1),n=ie(),this.h()},l(c){r=Ue(c,!1),n=ie(),this.h()},h(){r.a=n},m(c,u){r.m(e,c,u),J(c,n,u)},p(c,[u]){u&1&&e!==(e=Te.markdown.toHTML(c[0])+"")&&r.p(e)},i:se,o:se,d(c){c&&O(n),c&&r.d()}}}function qt(h,r,e){let{name:n}=r;return h.$$set=c=>{"name"in c&&e(0,n=c.name)},[n]}class zt extends _e{constructor(r){super(),de(this,r,qt,Vt,ge,{name:0})}}var jt=Object.freeze(Object.defineProperty({__proto__:null,default:zt},Symbol.toStringTag,{value:"Module"}));function Yt(h){let r,e,n;return{c(){r=z("h1"),e=X(h[0]),n=X(`

A lua Primitive`)},l(c){r=j(c,"H1",{});var u=V(r);e=Z(u,h[0]),u.forEach(O),n=Z(c,`

A lua Primitive`)},m(c,u){J(c,r,u),N(r,e),J(c,n,u)},p(c,[u]){u&1&&Me(e,c[0])},i:se,o:se,d(c){c&&O(r),c&&O(n)}}}function Jt(h,r,e){let{name:n}=r;return h.$$set=c=>{"name"in c&&e(0,n=c.name)},[n]}class Wt extends _e{constructor(r){super(),de(this,r,Jt,Yt,ge,{name:0})}}var Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"}));const{setTimeout:Ve,window:Ae}=Ke;function qe(h,r,e){const n=h.slice();return n[15]=r[e],n}function ze(h,r){let e,n,c,u,m;var b=r[2][r[15].type];function _($){return{props:{name:$[15].name}}}return b&&(c=new b(_(r))),{key:h,first:null,c(){e=z("div"),n=z("div"),c&&ee(c.$$.fragment),u=Q(),this.h()},l($){e=j($,"DIV",{class:!0});var d=V(e);n=j(d,"DIV",{class:!0});var k=V(n);c&&le(c.$$.fragment,k),k.forEach(O),u=U(d),d.forEach(O),this.h()},h(){C(n,"class","popup-content svelte-tihr16"),C(e,"class","popup svelte-tihr16"),this.first=e},m($,d){J($,e,d),N(e,n),c&&te(c,n,null),N(e,u),m=!0},p($,d){r=$;const k={};if(d&16&&(k.name=r[15].name),b!==(b=r[2][r[15].type])){if(c){he();const g=c;F(g.$$.fragment,1,0,()=>{re(g,1)}),pe()}b?(c=new b(_(r)),ee(c.$$.fragment),L(c.$$.fragment,1),te(c,n,null)):c=null}else b&&c.$set(k)},i($){m||(c&&L(c.$$.fragment,$),m=!0)},o($){c&&F(c.$$.fragment,$),m=!1},d($){$&&O(e),c&&re(c)}}}function Ut(h){let r=!1,e=()=>{r=!1},n,c,u=[],m=new Map,b,_,$;Xe(h[7]);let d=h[4];const k=g=>g[15].id;for(let g=0;g<d.length;g+=1){let A=qe(h,d,g),M=k(A);m.set(M,u[g]=ze(M,A))}return{c(){c=z("div");for(let g=0;g<u.length;g+=1)u[g].c();this.h()},l(g){c=j(g,"DIV",{class:!0});var A=V(c);for(let M=0;M<u.length;M+=1)u[M].l(A);A.forEach(O),this.h()},h(){C(c,"class","hint-overlay svelte-tihr16")},m(g,A){J(g,c,A);for(let M=0;M<u.length;M+=1)u[M].m(c,null);h[8](c),b=!0,_||($=[ke(Ae,"scroll",()=>{r=!0,clearTimeout(n),n=Ve(e,100),h[7]()}),ke(c,"mouseover",h[9]),ke(c,"mouseout",h[10])],_=!0)},p(g,[A]){A&2&&!r&&(r=!0,clearTimeout(n),scrollTo(Ae.pageXOffset,g[1]),n=Ve(e,100)),A&20&&(d=g[4],he(),u=Ze(u,A,k,1,g,d,m,c,xe,ze,null,qe),pe())},i(g){if(!b){for(let A=0;A<d.length;A+=1)L(u[A]);b=!0}},o(g){for(let A=0;A<u.length;A+=1)F(u[A]);b=!1},d(g){g&&O(c);for(let A=0;A<u.length;A+=1)u[A].d();h[8](null),_=!1,je($)}}}function Xt(h,r,e){let n;Ye(h,bt,t=>e(6,n=t));let c={"./popups/docs.svelte":Lt,"./popups/inherent.svelte":jt,"./popups/primitive.svelte":Qt},u={};Object.entries(c).forEach(([t,l])=>{let i=t.split("/");e(2,u[i[i.length-1].split(".")[0]]=l.default,u)}),console.log(u);let m,b=!0,_,$=0,d=n;function k(){if(m!==null)if(d.length===0)e(3,m.style.display="none",m),e(3,m.style.transition="",m),e(3,m.style.top="",m),e(3,m.style.left="",m);else{let t=d[0].span.getBoundingClientRect().bottom,l=d[0].span.getBoundingClientRect().left;e(3,m.style.transition="top 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s, left 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s",m),e(3,m.style.display="",m),e(3,m.style.top=t+10+"px",m),e(3,m.style.left=l+"px",m),e(3,m.style.height=window.innerHeight-t-10+"px",m),e(3,m.style.width=window.innerWidth-l-40+"px",m),requestAnimationFrame(()=>{e(3,m.style.top=t+"px",m)}),setTimeout(()=>{e(3,m.style.transition="",m)},200)}}function g(){e(4,d=n),console.log(d)}function A(){return d}function M(){e(1,_=Ae.pageYOffset)}function Y(t){et[t?"unshift":"push"](()=>{m=t,e(3,m)})}const B=()=>e(0,b=!1),o=()=>e(0,b=!0);return h.$$.update=()=>{h.$$.dirty&99&&setTimeout(()=>{(b||$!==_)&&(b&&g(),k(),e(5,$=_),e(0,b=b||A().length==0))},1)},[b,_,u,m,d,$,n,M,Y,B,o]}class Zt extends _e{constructor(r){super(),de(this,r,Xt,Ut,ge,{})}}function Kt(h){let r,e,n,c,u,m,b=h[2]?"Hide Table":"Show Table",_,$,d,k=h[3].readerEnabled?"Disable":"Enable",g,A,M,Y,B,o,t,l,i,s,f,v,w,H,y,E,S,q,T,P,R,W,ae,x;i=new Ht({});const me=h[6].default,G=tt(me,h,h[5],null);return R=new Zt({}),{c(){r=z("div"),e=z("nav"),n=z("a"),c=X("FIGS!!"),u=Q(),m=z("a"),_=X(b),$=Q(),d=z("a"),g=X(k),A=X(" Better Reader"),M=Q(),Y=z("a"),B=X(Ce),o=Q(),t=z("div"),l=z("div"),ee(i.$$.fragment),s=Q(),f=z("footer"),v=X("Made by applejuice"),w=Q(),H=z("div"),G&&G.c(),y=Q(),E=Ie("svg"),q=Q(),T=Ie("svg"),P=Q(),ee(R.$$.fragment),this.h()},l(I){r=j(I,"DIV",{class:!0});var D=V(r);e=j(D,"NAV",{class:!0});var K=V(e);n=j(K,"A",{class:!0,href:!0});var Ee=V(n);c=Z(Ee,"FIGS!!"),Ee.forEach(O),u=U(K),m=j(K,"A",{class:!0,href:!0,"aria-label":!0});var ne=V(m);_=Z(ne,b),ne.forEach(O),$=U(K),d=j(K,"A",{class:!0,href:!0});var ve=V(d);g=Z(ve,k),A=Z(ve," Better Reader"),ve.forEach(O),M=U(K),Y=j(K,"A",{class:!0,href:!0});var $e=V(Y);B=Z($e,Ce),$e.forEach(O),K.forEach(O),o=U(D),t=j(D,"DIV",{class:!0});var we=V(t);l=j(we,"DIV",{class:!0});var oe=V(l);le(i.$$.fragment,oe),s=U(oe),f=j(oe,"FOOTER",{class:!0});var ce=V(f);v=Z(ce,"Made by applejuice"),ce.forEach(O),oe.forEach(O),we.forEach(O),w=U(D),H=j(D,"DIV",{class:!0});var fe=V(H);G&&G.l(fe),y=U(fe),E=Oe(fe,"svg",{class:!0,width:!0,height:!0,"aria-hidden":!0});var We=V(E);We.forEach(O),fe.forEach(O),D.forEach(O),q=U(I),T=Oe(I,"svg",{id:!0,class:!0,width:!0,height:!0}),V(T).forEach(O),P=U(I),le(R.$$.fragment,I),this.h()},h(){C(n,"class","nav-item svelte-7rb78m"),C(n,"href",ye+"/"),C(m,"class","nav-item expander svelte-7rb78m"),C(m,"href","javascript:;"),C(m,"aria-label","Expand"),C(d,"class","nav-item better-reader-button svelte-7rb78m"),C(d,"href","javascript:;"),ue(d,"margin-left","auto",!1),C(Y,"class","nav-item svelte-7rb78m"),C(Y,"href","javascript:;"),ue(Y,"font-size",Math.max(h[1],10)-9+"em",!1),ue(Y,"opacity","0.5",!1),C(e,"class","figura-background svelte-7rb78m"),be(e,"expanded",h[2]),C(f,"class","svelte-7rb78m"),C(l,"class","category-inner svelte-7rb78m"),C(t,"class","category figura-background svelte-7rb78m"),be(t,"expanded",h[2]),C(E,"class","cheese-svg svelte-7rb78m"),C(E,"width","100%"),C(E,"height","100%"),C(E,"aria-hidden","true"),ue(E,"pointer-events","none",!1),ue(E,"touch-action","none",!1),C(H,"class","content svelte-7rb78m"),be(H,"expanded",h[2]),C(r,"class","root svelte-7rb78m"),C(T,"id","root-glasspane"),C(T,"class","glasspane svelte-7rb78m"),C(T,"width","100%"),C(T,"height","100%"),ue(T,"z-index","99999",!1)},m(I,D){J(I,r,D),N(r,e),N(e,n),N(n,c),N(e,u),N(e,m),N(m,_),N(e,$),N(e,d),N(d,g),N(d,A),N(e,M),N(e,Y),N(Y,B),N(r,o),N(r,t),N(t,l),te(i,l,null),N(l,s),N(l,f),N(f,v),N(r,w),N(r,H),G&&G.m(H,null),N(H,y),N(H,E),J(I,q,D),J(I,T,D),J(I,P,D),te(R,I,D),W=!0,ae||(x=[ke(m,"click",h[7]),ke(d,"click",h[8]),ke(Y,"click",h[4]),rt(S=yt.call(null,E,h[0]))],ae=!0)},p(I,[D]){(!W||D&4)&&b!==(b=I[2]?"Hide Table":"Show Table")&&Me(_,b),(!W||D&8)&&k!==(k=I[3].readerEnabled?"Disable":"Enable")&&Me(g,k),D&2&&ue(Y,"font-size",Math.max(I[1],10)-9+"em",!1),D&4&&be(e,"expanded",I[2]),D&4&&be(t,"expanded",I[2]),G&&G.p&&(!W||D&32)&&nt(G,me,I,I[5],W?st(me,I[5],D,null):lt(I[5]),null),S&&it(S.update)&&D&1&&S.update.call(null,I[0]),D&4&&be(H,"expanded",I[2])},i(I){W||(L(i.$$.fragment,I),L(G,I),L(R.$$.fragment,I),W=!0)},o(I){F(i.$$.fragment,I),F(G,I),F(R.$$.fragment,I),W=!1},d(I){I&&O(r),re(i),G&&G.d(I),I&&O(q),I&&O(T),I&&O(P),re(R,I),ae=!1,je(x)}}}function xt(h,r,e){let n;Ye(h,Be,M=>e(3,n=M));let{$$slots:c={},$$scope:u}=r,m=null,b=!1;at(()=>{let M=()=>{e(1,$+=d),e(1,$=Math.max($,0)),d-=.001,d*=.99,$>20&&e(0,b=!0),requestAnimationFrame(M)};m=requestAnimationFrame(M)}),ot(()=>m&&cancelAnimationFrame(m));function _(){b||(d+=.1)}let $=0,d=0,k=!1;const g=()=>e(2,k=!k),A=()=>ct(Be,n.readerEnabled=!n.readerEnabled,n);return h.$$set=M=>{"$$scope"in M&&e(5,u=M.$$scope)},[b,$,k,n,_,u,c,g,A]}class lr extends _e{constructor(r){super(),de(this,r,xt,Kt,ge,{})}}export{lr as default};
