import{S as F,i as Q,s as W,k as v,q as B,a as T,l as k,m as w,r as U,h as u,c as y,n as p,W as te,N as q,b as M,F as $,O as A,u as fe,B as O,P as Y,Q as K,f as d,g as H,d as J,t as _,U as Z,T as x,w as G,x as C,y as P,z as D,e as L}from"../../../../../chunks/index-58746148.js";import{u as ue,d as me}from"../../../../../chunks/db-cd74a76f.js";import{a as de,M as he}from"../../../../../chunks/ModeTile-3233bcaa.js";import{G as X}from"../../../../../chunks/Grouping-4f011ed7.js";import{j as V}from"../../../../../chunks/singletons-a077f71d.js";function _e(i){let t,s,l,e=i[0].name+"",o,n,r,a,c,f,b;return{c(){t=v("div"),s=v("div"),l=v("span"),o=B(e),n=T(),r=v("img"),this.h()},l(h){t=k(h,"DIV",{class:!0});var E=w(t);s=k(E,"DIV",{class:!0});var S=w(s);l=k(S,"SPAN",{class:!0});var I=w(l);o=U(I,e),I.forEach(u),n=y(S),r=k(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(u),E.forEach(u),this.h()},h(){p(l,"class","name svelte-s3u5d5"),te(r.src,a=i[0].imageUrl)||p(r,"src",a),p(r,"alt",c=i[0].name+" poster"),p(r,"class","svelte-s3u5d5"),p(s,"class","game svelte-s3u5d5"),p(t,"class","wrapper svelte-s3u5d5"),q(t,"selected",i[1])},m(h,E){M(h,t,E),$(t,s),$(s,l),$(l,o),$(s,n),$(s,r),f||(b=[A(s,"click",i[2]),A(s,"keyup",i[3])],f=!0)},p(h,[E]){E&1&&e!==(e=h[0].name+"")&&fe(o,e),E&1&&!te(r.src,a=h[0].imageUrl)&&p(r,"src",a),E&1&&c!==(c=h[0].name+" poster")&&p(r,"alt",c),E&2&&q(t,"selected",h[1])},i:O,o:O,d(h){h&&u(t),f=!1,Y(b)}}}function ge(i,t,s){let{game:l}=t,{selected:e=!0}=t;function o(r){K.call(this,i,r)}function n(r){K.call(this,i,r)}return i.$$set=r=>{"game"in r&&s(0,l=r.game),"selected"in r&&s(1,e=r.selected)},[l,e,o,n]}class pe extends F{constructor(t){super(),Q(this,t,ge,_e,W,{game:0,selected:1})}}function le(i,t,s){const l=i.slice();return l[8]=t[s],l}function ne(i){let t,s;function l(){return i[4](i[8])}return t=new pe({props:{game:i[8],selected:i[1].has(i[8])}}),t.$on("click",l),{c(){G(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,o){P(t,e,o),s=!0},p(e,o){i=e;const n={};o&1&&(n.game=i[8]),o&3&&(n.selected=i[1].has(i[8])),t.$set(n)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){D(t,e)}}}function $e(i){let t,s,l=i[0],e=[];for(let n=0;n<l.length;n+=1)e[n]=ne(le(i,l,n));const o=n=>_(e[n],1,1,()=>{e[n]=null});return{c(){t=v("div");for(let n=0;n<e.length;n+=1)e[n].c()},l(n){t=k(n,"DIV",{});var r=w(t);for(let a=0;a<e.length;a+=1)e[a].l(r);r.forEach(u)},m(n,r){M(n,t,r);for(let a=0;a<e.length;a+=1)e[a].m(t,null);s=!0},p(n,[r]){if(r&7){l=n[0];let a;for(a=0;a<l.length;a+=1){const c=le(n,l,a);e[a]?(e[a].p(c,r),d(e[a],1)):(e[a]=ne(c),e[a].c(),d(e[a],1),e[a].m(t,null))}for(H(),a=l.length;a<e.length;a+=1)o(a);J()}},i(n){if(!s){for(let r=0;r<l.length;r+=1)d(e[r]);s=!0}},o(n){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)_(e[r]);s=!1},d(n){n&&u(t),Z(e,n)}}}function ve(i,t,s){let{games:l}=t,{multi:e=!1}=t;const o=x();let n=new Set;setTimeout(()=>{r(l[0])},100);function r(c){e||n.clear(),n.has(c)?n.delete(c):n.add(c),s(1,n),o("selectionChange",[...n])}const a=c=>r(c);return i.$$set=c=>{"games"in c&&s(0,l=c.games),"multi"in c&&s(3,e=c.multi)},[l,n,r,e,a]}class ke extends F{constructor(t){super(),Q(this,t,ve,$e,W,{games:0,multi:3})}}function se(i,t,s){const l=i.slice();return l[7]=t[s],l}function ae(i){let t,s,l=i[0],e=[];for(let n=0;n<l.length;n+=1)e[n]=re(se(i,l,n));const o=n=>_(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=L()},l(n){for(let r=0;r<e.length;r+=1)e[r].l(n);t=L()},m(n,r){for(let a=0;a<e.length;a+=1)e[a].m(n,r);M(n,t,r),s=!0},p(n,r){if(r&7){l=n[0];let a;for(a=0;a<l.length;a+=1){const c=se(n,l,a);e[a]?(e[a].p(c,r),d(e[a],1)):(e[a]=re(c),e[a].c(),d(e[a],1),e[a].m(t.parentNode,t))}for(H(),a=l.length;a<e.length;a+=1)o(a);J()}},i(n){if(!s){for(let r=0;r<l.length;r+=1)d(e[r]);s=!0}},o(n){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)_(e[r]);s=!1},d(n){Z(e,n),n&&u(t)}}}function re(i){let t,s,l,e,o,n;s=new de({props:{map:i[7]}});function r(){return i[5](i[7])}return{c(){t=v("div"),G(s.$$.fragment),l=T(),this.h()},l(a){t=k(a,"DIV",{class:!0});var c=w(t);C(s.$$.fragment,c),l=y(c),c.forEach(u),this.h()},h(){p(t,"class","map svelte-19lspkp"),q(t,"selected",i[1].has(i[7]))},m(a,c){M(a,t,c),P(s,t,null),$(t,l),e=!0,o||(n=[A(t,"click",r),A(t,"keyup",i[4])],o=!0)},p(a,c){i=a;const f={};c&1&&(f.map=i[7]),s.$set(f),(!e||c&3)&&q(t,"selected",i[1].has(i[7]))},i(a){e||(d(s.$$.fragment,a),e=!0)},o(a){_(s.$$.fragment,a),e=!1},d(a){a&&u(t),D(s),o=!1,Y(n)}}}function be(i){let t,s,l=i[0]&&ae(i);return{c(){t=v("div"),l&&l.c()},l(e){t=k(e,"DIV",{});var o=w(t);l&&l.l(o),o.forEach(u)},m(e,o){M(e,t,o),l&&l.m(t,null),s=!0},p(e,[o]){e[0]?l?(l.p(e,o),o&1&&d(l,1)):(l=ae(e),l.c(),d(l,1),l.m(t,null)):l&&(H(),_(l,1,1,()=>{l=null}),J())},i(e){s||(d(l),s=!0)},o(e){_(l),s=!1},d(e){e&&u(t),l&&l.d()}}}function we(i,t,s){let{maps:l}=t,{multi:e=!1}=t;const o=x();let n=new Set;function r(f){e||n.clear(),n.has(f)?n.delete(f):n.add(f),s(1,n),o("selectionChange",[...n])}function a(f){K.call(this,i,f)}const c=f=>r(f);return i.$$set=f=>{"maps"in f&&s(0,l=f.maps),"multi"in f&&s(3,e=f.multi)},[l,n,r,e,a,c]}class Me extends F{constructor(t){super(),Q(this,t,we,be,W,{maps:0,multi:3})}}function ie(i,t,s){const l=i.slice();return l[7]=t[s],l}function oe(i){let t,s,l=i[0],e=[];for(let n=0;n<l.length;n+=1)e[n]=ce(ie(i,l,n));const o=n=>_(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=L()},l(n){for(let r=0;r<e.length;r+=1)e[r].l(n);t=L()},m(n,r){for(let a=0;a<e.length;a+=1)e[a].m(n,r);M(n,t,r),s=!0},p(n,r){if(r&7){l=n[0];let a;for(a=0;a<l.length;a+=1){const c=ie(n,l,a);e[a]?(e[a].p(c,r),d(e[a],1)):(e[a]=ce(c),e[a].c(),d(e[a],1),e[a].m(t.parentNode,t))}for(H(),a=l.length;a<e.length;a+=1)o(a);J()}},i(n){if(!s){for(let r=0;r<l.length;r+=1)d(e[r]);s=!0}},o(n){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)_(e[r]);s=!1},d(n){Z(e,n),n&&u(t)}}}function ce(i){let t,s,l,e,o,n;s=new he({props:{mode:i[7]}});function r(){return i[5](i[7])}return{c(){t=v("div"),G(s.$$.fragment),l=T(),this.h()},l(a){t=k(a,"DIV",{class:!0});var c=w(t);C(s.$$.fragment,c),l=y(c),c.forEach(u),this.h()},h(){p(t,"class","mode svelte-58f46a"),q(t,"selected",i[1].has(i[7]))},m(a,c){M(a,t,c),P(s,t,null),$(t,l),e=!0,o||(n=[A(t,"click",r),A(t,"keyup",i[4])],o=!0)},p(a,c){i=a;const f={};c&1&&(f.mode=i[7]),s.$set(f),(!e||c&3)&&q(t,"selected",i[1].has(i[7]))},i(a){e||(d(s.$$.fragment,a),e=!0)},o(a){_(s.$$.fragment,a),e=!1},d(a){a&&u(t),D(s),o=!1,Y(n)}}}function Ee(i){let t,s,l=i[0]&&oe(i);return{c(){t=v("div"),l&&l.c()},l(e){t=k(e,"DIV",{});var o=w(t);l&&l.l(o),o.forEach(u)},m(e,o){M(e,t,o),l&&l.m(t,null),s=!0},p(e,[o]){e[0]?l?(l.p(e,o),o&1&&d(l,1)):(l=oe(e),l.c(),d(l,1),l.m(t,null)):l&&(H(),_(l,1,1,()=>{l=null}),J())},i(e){s||(d(l),s=!0)},o(e){_(l),s=!1},d(e){e&&u(t),l&&l.d()}}}function Se(i,t,s){let{modes:l}=t,{multi:e=!0}=t;const o=x();let n=new Set;function r(f){e||n.clear(),n.has(f)?n.delete(f):n.add(f),s(1,n),o("selectionChange",[...n])}function a(f){K.call(this,i,f)}const c=f=>r(f);return i.$$set=f=>{"modes"in f&&s(0,l=f.modes),"multi"in f&&s(3,e=f.multi)},[l,n,r,e,a,c]}class Ge extends F{constructor(t){super(),Q(this,t,Se,Ee,W,{modes:0,multi:3})}}V.disable_scroll_handling;const Ce=V.goto;V.invalidate;V.invalidateAll;V.preload_data;V.preload_code;V.before_navigate;V.after_navigate;function Pe(i){let t,s;return t=new ke({props:{games:ue.games,multi:!1}}),t.$on("selectionChange",i[2]),{c(){G(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,e){P(t,l,e),s=!0},p:O,i(l){s||(d(t.$$.fragment,l),s=!0)},o(l){_(t.$$.fragment,l),s=!1},d(l){D(t,l)}}}function De(i){let t,s;return{c(){t=v("span"),s=B("Game"),this.h()},l(l){t=k(l,"SPAN",{slot:!0});var e=w(t);s=U(e,"Game"),e.forEach(u),this.h()},h(){p(t,"slot","title")},m(l,e){M(l,t,e),$(t,s)},p:O,d(l){l&&u(t)}}}function Ie(i){var l;let t,s;return t=new Ge({props:{modes:(l=i[0])==null?void 0:l.modes,multi:!1}}),t.$on("selectionChange",i[3]),{c(){G(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,o){P(t,e,o),s=!0},p(e,o){var r;const n={};o&1&&(n.modes=(r=e[0])==null?void 0:r.modes),t.$set(n)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){D(t,e)}}}function Ve(i){let t,s;return{c(){t=v("span"),s=B("Game Mode"),this.h()},l(l){t=k(l,"SPAN",{slot:!0});var e=w(t);s=U(e,"Game Mode"),e.forEach(u),this.h()},h(){p(t,"slot","title")},m(l,e){M(l,t,e),$(t,s)},p:O,d(l){l&&u(t)}}}function Ne(i){var l;let t,s;return t=new Me({props:{maps:(l=i[0])==null?void 0:l.maps,multi:!1}}),t.$on("selectionChange",i[4]),{c(){G(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,o){P(t,e,o),s=!0},p(e,o){var r;const n={};o&1&&(n.maps=(r=e[0])==null?void 0:r.maps),t.$set(n)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){D(t,e)}}}function Te(i){let t,s;return{c(){t=v("span"),s=B("Map"),this.h()},l(l){t=k(l,"SPAN",{slot:!0});var e=w(t);s=U(e,"Map"),e.forEach(u),this.h()},h(){p(t,"slot","title")},m(l,e){M(l,t,e),$(t,s)},p:O,d(l){l&&u(t)}}}function ye(i){let t,s,l,e,o,n,r,a,c,f,b,h,E,S,I,R,ee;return s=new X({props:{$$slots:{title:[De],default:[Pe]},$$scope:{ctx:i}}}),e=new X({props:{$$slots:{title:[Ve],default:[Ie]},$$scope:{ctx:i}}}),n=new X({props:{$$slots:{title:[Te],default:[Ne]},$$scope:{ctx:i}}}),{c(){t=v("div"),G(s.$$.fragment),l=T(),G(e.$$.fragment),o=T(),G(n.$$.fragment),r=T(),a=v("div"),c=v("a"),f=B("× Cancel"),b=T(),h=v("button"),E=B("✓ Confirm"),this.h()},l(m){t=k(m,"DIV",{class:!0});var g=w(t);C(s.$$.fragment,g),l=y(g),C(e.$$.fragment,g),o=y(g),C(n.$$.fragment,g),g.forEach(u),r=y(m),a=k(m,"DIV",{class:!0});var N=w(a);c=k(N,"A",{class:!0,href:!0});var j=w(c);f=U(j,"× Cancel"),j.forEach(u),b=y(N),h=k(N,"BUTTON",{class:!0});var z=w(h);E=U(z,"✓ Confirm"),z.forEach(u),N.forEach(u),this.h()},h(){p(t,"class","container svelte-1xr1wb9"),p(c,"class","pure-button"),p(c,"href","./"),p(h,"class","pure-button button-primary"),h.disabled=S=!i[0]||!i[1],p(a,"class","button-region svelte-1xr1wb9")},m(m,g){M(m,t,g),P(s,t,null),$(t,l),P(e,t,null),$(t,o),P(n,t,null),M(m,r,g),M(m,a,g),$(a,c),$(c,f),$(a,b),$(a,h),$(h,E),I=!0,R||(ee=A(h,"click",i[5]),R=!0)},p(m,[g]){const N={};g&256&&(N.$$scope={dirty:g,ctx:m}),s.$set(N);const j={};g&257&&(j.$$scope={dirty:g,ctx:m}),e.$set(j);const z={};g&257&&(z.$$scope={dirty:g,ctx:m}),n.$set(z),(!I||g&3&&S!==(S=!m[0]||!m[1]))&&(h.disabled=S)},i(m){I||(d(s.$$.fragment,m),d(e.$$.fragment,m),d(n.$$.fragment,m),I=!0)},o(m){_(s.$$.fragment,m),_(e.$$.fragment,m),_(n.$$.fragment,m),I=!1},d(m){m&&u(t),D(s),D(e),D(n),m&&u(r),m&&u(a),R=!1,ee()}}}function Ae(i,t,s){let{data:l}=t,e,o,n;function r(b){s(0,e=b.detail[0])}function a(b){o=b.detail[0]}function c(b){s(1,n=b.detail[0])}async function f(){await me.createMatch(l.params.id,{game:e,mode:o,map:n}),await Ce(`/events/${l.params.id}`)}return i.$$set=b=>{"data"in b&&s(6,l=b.data)},[e,n,r,a,c,f,l]}class ze extends F{constructor(t){super(),Q(this,t,Ae,ye,W,{data:6})}}export{ze as default};
