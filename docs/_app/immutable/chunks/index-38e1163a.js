function w(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(B)}function L(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(G(n,e))}function ot(t,n,e,i){if(t){const r=T(t,n,e,i);return t[0](r)}}function T(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,o){if(r){const c=T(n,e,i,o);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t??""}let E=!1;function J(){E=!0}function K(){E=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:W(1,r,y=>n[e[y]].claim_order,u))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const o=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[l],f)}}function R(t,n){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){E&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function mt(){return S(" ")}function pt(){return S("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){Y(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function bt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function xt(t){return tt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n){return new t(n)}let m;function h(t){m=t}function P(){if(!m)throw new Error("Function called outside component initialization");return m}function vt(t){P().$$.on_mount.push(t)}function Nt(t){P().$$.after_update.push(t)}function At(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],M=[],x=[],q=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(F))}function St(){return D(),z}function A(t){x.push(t)}const v=new Set;let b=0;function F(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),nt(n.$$)}for(h(null),d.length=0,b=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(d.length);for(;q.length;)q.pop()();N=!1,v.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function jt(){_={r:0,c:[],p:_}}function kt(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Mt(t){t&&t.c()}function qt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(B).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,r,o,c,s=[-1]){const l=m;h(t);const u=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...j)=>{const k=j.length?j[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=k)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](k),f&&ct(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const a=X(n.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),F()}h(l)}class Lt{$destroy(){rt(this,1),this.$destroy=w}$on(n,e){if(!L(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,w as B,ot as C,ft as D,_t as E,at as F,R as G,st as H,yt as I,At as J,ut as K,dt as L,Lt as S,mt as a,ht as b,xt as c,kt as d,pt as e,et as f,jt as g,U as h,Bt as i,Nt as j,V as k,bt as l,X as m,gt as n,vt as o,wt as p,S as q,tt as r,lt as s,Ct as t,$t as u,Et as v,Mt as w,qt as x,it as y,rt as z};
