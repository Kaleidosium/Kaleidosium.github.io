import{s as L,n as N}from"../chunks/scheduler.Bmg8oFKD.js";import{S as q,i as D,s as k,e as g,h as H,d as p,c as E,a as b,j as C,g as P,b as v,f as y,m as r,o as M,t as w,l as S,n as A}from"../chunks/index.C61lMPvp.js";import{e as I,f as O}from"../chunks/utils.47kM542H.js";async function U({fetch:o}){return{posts:await(await o("api/notebook")).json()}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:U},Symbol.toStringTag,{value:"Module"}));function T(o,l,s){const n=o.slice();return n[1]=l[s],n}function z(o){let l,s,n=o[1].title+"",c,m,h,u,d=O(o[1].date)+"",i,f;return{c(){l=g("li"),s=g("a"),c=w(n),h=w(` -
        `),u=g("span"),i=w(d),f=k(),this.h()},l(t){l=b(t,"LI",{class:!0});var e=C(l);s=b(e,"A",{href:!0,class:!0});var _=C(s);c=S(_,n),_.forEach(p),h=S(e,` -
        `),u=b(e,"SPAN",{class:!0});var a=C(u);i=S(a,d),a.forEach(p),f=E(e),e.forEach(p),this.h()},h(){v(s,"href",m=o[1].slug),v(s,"class","title"),v(u,"class","date"),v(l,"class","post")},m(t,e){y(t,l,e),r(l,s),r(s,c),r(l,h),r(l,u),r(u,i),r(l,f)},p(t,e){e&1&&n!==(n=t[1].title+"")&&A(c,n),e&1&&m!==(m=t[1].slug)&&v(s,"href",m),e&1&&d!==(d=O(t[1].date)+"")&&A(i,d)},d(t){t&&p(l)}}}function B(o){let l,s,n,c="Notebook",m,h,u="A collection of writings and announcements which I deem appropriate to be hosted on this site.",d,i,f=I(o[0].posts),t=[];for(let e=0;e<f.length;e+=1)t[e]=z(T(o,f,e));return{c(){l=k(),s=g("section"),n=g("h1"),n.textContent=c,m=k(),h=g("p"),h.textContent=u,d=k(),i=g("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){H("svelte-mwu9zm",document.head).forEach(p),l=E(e),s=b(e,"SECTION",{});var a=C(s);n=b(a,"H1",{id:!0,class:!0,"data-svelte-h":!0}),P(n)!=="svelte-njye1k"&&(n.textContent=c),m=E(a),h=b(a,"P",{"data-svelte-h":!0}),P(h)!=="svelte-wxhxvj"&&(h.textContent=u),d=E(a),i=b(a,"UL",{class:!0});var x=C(i);for(let j=0;j<t.length;j+=1)t[j].l(x);x.forEach(p),a.forEach(p),this.h()},h(){document.title="Notebook",v(n,"id","Title"),v(n,"class","title"),v(i,"class","posts")},m(e,_){y(e,l,_),y(e,s,_),r(s,n),r(s,m),r(s,h),r(s,d),r(s,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(i,null)},p(e,[_]){if(_&1){f=I(e[0].posts);let a;for(a=0;a<f.length;a+=1){const x=T(e,f,a);t[a]?t[a].p(x,_):(t[a]=z(x),t[a].c(),t[a].m(i,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=f.length}},i:N,o:N,d(e){e&&(p(l),p(s)),M(t,e)}}}function F(o,l,s){let{data:n}=l;return o.$$set=c=>{"data"in c&&s(0,n=c.data)},[n]}class R extends q{constructor(l){super(),D(this,l,F,B,L,{data:0})}}export{R as component,Q as universal};
