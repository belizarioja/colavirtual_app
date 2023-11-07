import{c as F,C as i,h as _,t as be,r as g,D as Re,s as se,E as ie,F as Ae,z as me,v as Z,G as Te,H as $e,I,J as ge,K as T,L as ot,M as it,O as rt,P as nt,R as We,S as Ee,T as ut,n as st,q as ct,U as Ie,V as E,W as ke,X as Pe,Y as dt,Z as vt,$ as ft,a0 as ht,a1 as mt,a2 as Le,a3 as bt,p as Fe,a4 as gt,a5 as qe,a6 as fe,a7 as yt,_ as zt,a8 as St,a9 as wt,o as G,aa as J,g as q,f as k,m as pt,ab as _t,ac as Me,e as ee,k as ae,ad as he,ae as le}from"./index.5a08c085.js";import{Q as oe,a as Q}from"./QItem.04009fd4.js";import{b as X,Q as kt}from"./format.a522e488.js";import{T as ue}from"./TouchPan.5a5baa67.js";var qt=F({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:p}){const u=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:u.value},be(p.default))}}),Ct=F({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:p}){const u=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:u.value,role:"toolbar"},be(p.default))}});function Tt(){const e=g(!Re.value);return e.value===!1&&se(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver!="undefined",Oe=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ce=F({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:p}){let u=null,r,n={width:-1,height:-1};function v(f){f===!0||e.debounce===0||e.debounce==="0"?s():u===null&&(u=setTimeout(s,e.debounce))}function s(){if(u!==null&&(clearTimeout(u),u=null),r){const{offsetWidth:f,offsetHeight:h}=r;(f!==n.width||h!==n.height)&&(n={width:f,height:h},p("resize",n))}}const{proxy:t}=Z();if(Ne===!0){let f;const h=l=>{r=t.$el.parentNode,r?(f=new ResizeObserver(v),f.observe(r),s()):l!==!0&&me(()=>{h(!0)})};return se(()=>{h()}),ie(()=>{u!==null&&clearTimeout(u),f!==void 0&&(f.disconnect!==void 0?f.disconnect():r&&f.unobserve(r))}),Ae}else{let l=function(){u!==null&&(clearTimeout(u),u=null),h!==void 0&&(h.removeEventListener!==void 0&&h.removeEventListener("resize",v,Te.passive),h=void 0)},x=function(){l(),r&&r.contentDocument&&(h=r.contentDocument.defaultView,h.addEventListener("resize",v,Te.passive),s())};const f=Tt();let h;return se(()=>{me(()=>{r=t.$el,r&&x()})}),ie(l),t.trigger=v,()=>{if(f.value===!0)return _("object",{style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:x})}}}}),$t=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:u}){const{proxy:{$q:r}}=Z(),n=$e(ge,I);if(n===I)return console.error("QHeader needs to be child of QLayout"),I;const v=g(parseInt(e.heightHint,10)),s=g(!0),t=i(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||r.platform.is.ios&&n.isContainer.value===!0),f=i(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return s.value===!0?v.value:0;const c=v.value-n.scroll.value.position;return c>0?c:0}),h=i(()=>e.modelValue!==!0||t.value===!0&&s.value!==!0),l=i(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),x=i(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=i(()=>{const c=n.rows.value.top,L={};return c[0]==="l"&&n.left.space===!0&&(L[r.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),c[2]==="r"&&n.right.space===!0&&(L[r.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),L});function z(c,L){n.update("header",c,L)}function S(c,L){c.value!==L&&(c.value=L)}function V({height:c}){S(v,c),z("size",c)}function P(c){l.value===!0&&S(s,!0),u("focusin",c)}T(()=>e.modelValue,c=>{z("space",c),S(s,!0),n.animate()}),T(f,c=>{z("offset",c)}),T(()=>e.reveal,c=>{c===!1&&S(s,e.modelValue)}),T(s,c=>{n.animate(),u("reveal",c)}),T(n.scroll,c=>{e.reveal===!0&&S(s,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const y={};return n.instances.header=y,e.modelValue===!0&&z("size",v.value),z("space",e.modelValue),z("offset",f.value),ie(()=>{n.instances.header===y&&(n.instances.header=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const c=ot(p.default,[]);return e.elevated===!0&&c.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(_(ce,{debounce:0,onResize:V})),_("header",{class:x.value,style:C.value,onFocusin:P},c)}}});const{passive:Be}=Te,xt=["both","horizontal","vertical"];var je=F({name:"QScrollObserver",props:{axis:{type:String,validator:e=>xt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const u={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,n,v;T(()=>e.scrollTarget,()=>{f(),t()});function s(){r!==null&&r();const x=Math.max(0,rt(n)),C=nt(n),z={top:x-u.position.top,left:C-u.position.left};if(e.axis==="vertical"&&z.top===0||e.axis==="horizontal"&&z.left===0)return;const S=Math.abs(z.top)>=Math.abs(z.left)?z.top<0?"up":"down":z.left<0?"left":"right";u.position={top:x,left:C},u.directionChanged=u.direction!==S,u.delta=z,u.directionChanged===!0&&(u.direction=S,u.inflectionPoint=u.position),p("scroll",{...u})}function t(){n=it(v,e.scrollTarget),n.addEventListener("scroll",h,Be),h(!0)}function f(){n!==void 0&&(n.removeEventListener("scroll",h,Be),n=void 0)}function h(x){if(x===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[C,z]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{z(C),r=null}}}const{proxy:l}=Z();return T(()=>l.$q.lang.rtl,s),se(()=>{v=l.$el.parentNode,t()}),ie(()=>{r!==null&&r(),f()}),Object.assign(l,{trigger:h,getPosition:()=>u}),Ae}});const He=["vertical","horizontal"],Ce={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Qe={prevent:!0,mouse:!0,mouseAllDir:!0},Ve=e=>e>=250?50:Math.ceil(e/5);var Pt=F({name:"QScrollArea",props:{...We,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:p,emit:u}){const r=g(!1),n=g(!1),v=g(!1),s={vertical:g(0),horizontal:g(0)},t={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:f}=Z(),h=Ee(e,f.$q);let l=null,x;const C=g(null),z=i(()=>"q-scrollarea"+(h.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=i(()=>{const o=t.vertical.size.value-s.vertical.value;if(o<=0)return 0;const d=X(t.vertical.position.value/o,0,1);return Math.round(d*1e4)/1e4}),t.vertical.thumbHidden=i(()=>(e.visible===null?v.value:e.visible)!==!0&&r.value===!1&&n.value===!1||t.vertical.size.value<=s.vertical.value+1),t.vertical.thumbStart=i(()=>t.vertical.percentage.value*(s.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=i(()=>Math.round(X(s.vertical.value*s.vertical.value/t.vertical.size.value,Ve(s.vertical.value),s.vertical.value))),t.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=i(()=>{const o=t.horizontal.size.value-s.horizontal.value;if(o<=0)return 0;const d=X(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(d*1e4)/1e4}),t.horizontal.thumbHidden=i(()=>(e.visible===null?v.value:e.visible)!==!0&&r.value===!1&&n.value===!1||t.horizontal.size.value<=s.horizontal.value+1),t.horizontal.thumbStart=i(()=>t.horizontal.percentage.value*(s.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=i(()=>Math.round(X(s.horizontal.value*s.horizontal.value/t.horizontal.size.value,Ve(s.horizontal.value),s.horizontal.value))),t.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[f.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=i(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),V=[[ue,o=>{A(o,"vertical")},void 0,{vertical:!0,...Qe}]],P=[[ue,o=>{A(o,"horizontal")},void 0,{horizontal:!0,...Qe}]];function y(){const o={};return He.forEach(d=>{const w=t[d];o[d+"Position"]=w.position.value,o[d+"Percentage"]=w.percentage.value,o[d+"Size"]=w.size.value,o[d+"ContainerSize"]=s[d].value}),o}const c=ut(()=>{const o=y();o.ref=f,u("scroll",o)},0);function L(o,d,w){if(He.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?Pe:ke)(C.value,d,w)}function m({height:o,width:d}){let w=!1;s.vertical.value!==o&&(s.vertical.value=o,w=!0),s.horizontal.value!==d&&(s.horizontal.value=d,w=!0),w===!0&&R()}function $({position:o}){let d=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,d=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,d=!0),d===!0&&R()}function M({height:o,width:d}){t.horizontal.size.value!==d&&(t.horizontal.size.value=d,R()),t.vertical.size.value!==o&&(t.vertical.size.value=o,R())}function A(o,d){const w=t[d];if(o.isFirst===!0){if(w.thumbHidden.value===!0)return;x=w.position.value,n.value=!0}else if(n.value!==!0)return;o.isFinal===!0&&(n.value=!1);const B=Ce[d],te=s[d].value,ye=(w.size.value-te)/(te-w.thumbSize.value),ze=o.distance[B.dist],de=x+(o.direction===B.dir?1:-1)*ze*ye;re(de,d)}function N(o,d){const w=t[d];if(w.thumbHidden.value!==!0){const B=o[Ce[d].offset];if(B<w.thumbStart.value||B>w.thumbStart.value+w.thumbSize.value){const te=B-w.thumbSize.value/2;re(te/s[d].value*w.size.value,d)}w.ref.value!==null&&w.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function W(o){N(o,"vertical")}function D(o){N(o,"horizontal")}function R(){r.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,r.value=!1},e.delay),e.onScroll!==void 0&&c()}function re(o,d){C.value[Ce[d].scroll]=o}function j(){v.value=!0}function ne(){v.value=!1}let Y=null;return T(()=>f.$q.lang.rtl,o=>{C.value!==null&&ke(C.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),st(()=>{Y={top:t.vertical.position.value,left:t.horizontal.position.value}}),ct(()=>{if(Y===null)return;const o=C.value;o!==null&&(ke(o,Y.left),Pe(o,Y.top))}),ie(c.cancel),Object.assign(f,{getScrollTarget:()=>C.value,getScroll:y,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:L,setScrollPercentage(o,d,w){L(o,d*(t[o].size.value-s[o].value)*(o==="horizontal"&&f.$q.lang.rtl===!0?-1:1),w)}}),()=>_("div",{class:z.value,onMouseenter:j,onMouseleave:ne},[_("div",{ref:C,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[_("div",{class:"q-scrollarea__content absolute",style:S.value},Ie(p.default,[_(ce,{debounce:0,onResize:M})])),_(je,{axis:"both",onScroll:$})]),_(ce,{debounce:0,onResize:m}),_("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:W}),_("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:D}),E(_("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),V),E(_("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),P)])}});const De=150;var Lt=F({name:"QDrawer",inheritAttrs:!1,props:{...dt,...We,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...vt,"onLayout","miniState"],setup(e,{slots:p,emit:u,attrs:r}){const n=Z(),{proxy:{$q:v}}=n,s=Ee(e,v),{preventBodyScroll:t}=bt(),{registerTimeout:f,removeTimeout:h}=ft(),l=$e(ge,I);if(l===I)return console.error("QDrawer needs to be child of QLayout"),I;let x,C=null,z;const S=g(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),V=i(()=>e.mini===!0&&S.value!==!0),P=i(()=>V.value===!0?e.miniWidth:e.width),y=g(e.showIfAbove===!0&&S.value===!1?!0:e.modelValue===!0),c=i(()=>e.persistent!==!0&&(S.value===!0||te.value===!0));function L(a,b){if(A(),a!==!1&&l.animate(),H(0),S.value===!0){const O=l.instances[o.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),U(1),l.isContainer.value!==!0&&t(!0)}else U(0),a!==!1&&we(!1);f(()=>{a!==!1&&we(!0),b!==!0&&u("show",a)},De)}function m(a,b){N(),a!==!1&&l.animate(),U(0),H(R.value*P.value),pe(),b!==!0?f(()=>{u("hide",a)},De):h()}const{show:$,hide:M}=ht({showing:y,hideOnRouteChange:c,handleShow:L,handleHide:m}),{addToHistory:A,removeFromHistory:N}=mt(y,M,c),W={belowBreakpoint:S,hide:M},D=i(()=>e.side==="right"),R=i(()=>(v.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),re=g(0),j=g(!1),ne=g(!1),Y=g(P.value*R.value),o=i(()=>D.value===!0?"left":"right"),d=i(()=>y.value===!0&&S.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),w=i(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(D.value?"R":"L")>-1||v.platform.is.ios===!0&&l.isContainer.value===!0),B=i(()=>e.overlay===!1&&y.value===!0&&S.value===!1),te=i(()=>e.overlay===!0&&y.value===!0&&S.value===!1),ye=i(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&j.value===!1?" hidden":"")),ze=i(()=>({backgroundColor:`rgba(0,0,0,${re.value*.4})`})),de=i(()=>D.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Ue=i(()=>D.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Ke=i(()=>{const a={};return l.header.space===!0&&de.value===!1&&(w.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&Ue.value===!1&&(w.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),Xe=i(()=>{const a={width:`${P.value}px`,transform:`translateX(${Y.value}px)`};return S.value===!0?a:Object.assign(a,Ke.value)}),Ye=i(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=i(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(S.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${V.value===!0?"mini":"standard"}`+(w.value===!0||B.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),Je=i(()=>{const a=v.lang.rtl===!0?e.side:o.value;return[[ue,at,void 0,{[a]:!0,mouse:!0}]]}),Ze=i(()=>{const a=v.lang.rtl===!0?o.value:e.side;return[[ue,xe,void 0,{[a]:!0,mouse:!0}]]}),et=i(()=>{const a=v.lang.rtl===!0?o.value:e.side;return[[ue,xe,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function Se(){lt(S,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}T(S,a=>{a===!0?(x=y.value,y.value===!0&&M(!1)):e.overlay===!1&&e.behavior!=="mobile"&&x!==!1&&(y.value===!0?(H(0),U(0),pe()):$(!1))}),T(()=>e.side,(a,b)=>{l.instances[b]===W&&(l.instances[b]=void 0,l[b].space=!1,l[b].offset=0),l.instances[a]=W,l[a].size=P.value,l[a].space=B.value,l[a].offset=d.value}),T(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&Se()}),T(()=>e.behavior+e.breakpoint,Se),T(l.isContainer,a=>{y.value===!0&&t(a!==!0),a===!0&&Se()}),T(l.scrollbarWidth,()=>{H(y.value===!0?0:void 0)}),T(d,a=>{K("offset",a)}),T(B,a=>{u("onLayout",a),K("space",a)}),T(D,()=>{H()}),T(P,a=>{H(),_e(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{_e(a,P.value)}),T(()=>v.lang.rtl,()=>{H()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),l.animate())}),T(V,a=>{u("miniState",a)});function H(a){a===void 0?me(()=>{a=y.value===!0?0:P.value,H(R.value*a)}):(l.isContainer.value===!0&&D.value===!0&&(S.value===!0||Math.abs(a)===P.value)&&(a+=R.value*l.scrollbarWidth.value),Y.value=a)}function U(a){re.value=a}function we(a){const b=a===!0?"remove":l.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function tt(){C!==null&&clearTimeout(C),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,C=setTimeout(()=>{C=null,ne.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(a){if(y.value!==!1)return;const b=P.value,O=X(a.distance.x,0,b);if(a.isFinal===!0){O>=Math.min(75,b)===!0?$():(l.animate(),U(0),H(R.value*b)),j.value=!1;return}H((v.lang.rtl===!0?D.value!==!0:D.value)?Math.max(b-O,0):Math.min(0,O-b)),U(X(O/b,0,1)),a.isFirst===!0&&(j.value=!0)}function xe(a){if(y.value!==!0)return;const b=P.value,O=a.direction===e.side,ve=(v.lang.rtl===!0?O!==!0:O)?X(a.distance.x,0,b):0;if(a.isFinal===!0){Math.abs(ve)<Math.min(75,b)===!0?(l.animate(),U(1),H(0)):M(),j.value=!1;return}H(R.value*ve),U(X(1-ve/b,0,1)),a.isFirst===!0&&(j.value=!0)}function pe(){t(!1),we(!0)}function K(a,b){l.update(e.side,a,b)}function lt(a,b){a.value!==b&&(a.value=b)}function _e(a,b){K("size",a===!0?e.miniWidth:b)}return l.instances[e.side]=W,_e(e.miniToOverlay,P.value),K("space",B.value),K("offset",d.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),se(()=>{u("onLayout",B.value),u("miniState",V.value),x=e.showIfAbove===!0;const a=()=>{(y.value===!0?L:m)(!1,!0)};if(l.totalWidth.value!==0){me(a);return}z=T(l.totalWidth,()=>{z(),z=void 0,y.value===!1&&e.showIfAbove===!0&&S.value===!1?$(!1):a()})}),ie(()=>{z!==void 0&&z(),C!==null&&(clearTimeout(C),C=null),y.value===!0&&pe(),l.instances[e.side]===W&&(l.instances[e.side]=void 0,K("size",0),K("offset",0),K("space",!1))}),()=>{const a=[];S.value===!0&&(e.noSwipeOpen===!1&&a.push(E(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),a.push(Le("div",{ref:"backdrop",class:ye.value,style:ze.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>et.value)));const b=V.value===!0&&p.mini!==void 0,O=[_("div",{...r,key:""+b,class:[Ye.value,r.class]},b===!0?p.mini():be(p.default))];return e.elevated===!0&&y.value===!0&&O.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Le("aside",{ref:"content",class:Ge.value,style:Xe.value},O,"contentclose",e.noSwipeClose!==!0&&S.value===!0,()=>Ze.value)),_("div",{class:"q-drawer-container"},a)}}}),Mt=F({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:u}}=Z(),r=$e(ge,I);if(r===I)return console.error("QPageContainer needs to be child of QLayout"),I;Fe(gt,!0);const n=i(()=>{const v={};return r.header.space===!0&&(v.paddingTop=`${r.header.size}px`),r.right.space===!0&&(v[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(v.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(v[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),v});return()=>_("div",{class:"q-page-container",style:n.value},be(p.default))}}),Ot=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:u}){const{proxy:{$q:r}}=Z(),n=g(null),v=g(r.screen.height),s=g(e.container===!0?0:r.screen.width),t=g({position:0,direction:"down",inflectionPoint:0}),f=g(0),h=g(Re.value===!0?0:qe()),l=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=i(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),C=i(()=>h.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${h.value}px`}:null),z=i(()=>h.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${h.value}px`,width:`calc(100% + ${h.value}px)`}:null);function S(m){if(e.container===!0||document.qScrollPrevented!==!0){const $={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};t.value=$,e.onScroll!==void 0&&u("scroll",$)}}function V(m){const{height:$,width:M}=m;let A=!1;v.value!==$&&(A=!0,v.value=$,e.onScrollHeight!==void 0&&u("scrollHeight",$),y()),s.value!==M&&(A=!0,s.value=M),A===!0&&e.onResize!==void 0&&u("resize",m)}function P({height:m}){f.value!==m&&(f.value=m,y())}function y(){if(e.container===!0){const m=v.value>f.value?qe():0;h.value!==m&&(h.value=m)}}let c=null;const L={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:n,height:v,containerHeight:f,scrollbarWidth:h,totalWidth:i(()=>s.value+h.value),rows:i(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:fe({size:0,offset:0,space:!1}),right:fe({size:300,offset:0,space:!1}),footer:fe({size:0,offset:0,space:!1}),left:fe({size:300,offset:0,space:!1}),scroll:t,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,$,M){L[m][$]=M}};if(Fe(ge,L),qe()>0){let M=function(){m=null,$.classList.remove("hide-scrollbar")},A=function(){if(m===null){if($.scrollHeight>r.screen.height)return;$.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(M,300)},N=function(W){m!==null&&W==="remove"&&(clearTimeout(m),M()),window[`${W}EventListener`]("resize",A)},m=null;const $=document.body;T(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),yt(()=>{N("remove")})}return()=>{const m=Ie(p.default,[_(je,{onScroll:S}),_(ce,{onResize:V})]),$=_("div",{class:l.value,style:x.value,ref:e.container===!0?void 0:n,tabindex:-1},m);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:n},[_(ce,{onResize:P}),_("div",{class:"absolute-full",style:C.value},[_("div",{class:"scroll",style:z.value},[$])])]):$}}});const Bt=St({name:"MainLayout",setup(){const e=g(!1),p=g(sessionStorage.getItem("tx_nombre")),u=g(sessionStorage.getItem("tx_rol"));return{idrol:g(sessionStorage.getItem("co_rol")),nombreusuario:p,leftDrawerOpen:e,rolusuario:u,drawer:g(!1),miniState:g(!0),toggleLeftDrawer(){e.value=!e.value}}},methods:{listado(){this.$router.push("/principal")},reportes(){this.$router.push("/usuarios")},eventos(){this.$router.push("/eventos")},empresas(){this.$router.push("/empresas")},usuarios(){this.$router.push("/usuarios")},salir(){this.$q.dialog({title:"Confirmaci\xF3n!",message:"\xBFEst\xE1 seguro que quieres cerrar sesi\xF3n?",ok:{color:"primary",label:"S\xED"},cancel:{color:"secondary",label:"No"},persistent:!0}).onOk(()=>{sessionStorage.removeItem("tx_rol"),sessionStorage.removeItem("tx_nombre"),sessionStorage.removeItem("tx_usuario"),sessionStorage.removeItem("co_rol"),this.$router.push("/")})}},mounted(){}}),Ht=ee("div",null,"Principal",-1),Qt=ee("div",null,"Eventos",-1),Vt=ee("div",null,"Empresas",-1),Dt=ee("div",null,"Reportes",-1),Rt=ee("div",null,"Usuarios",-1),At=ee("div",null,"Salir",-1);function Wt(e,p,u,r,n,v){const s=wt("router-view");return G(),J(Ot,{view:"lHh Lpr lFf"},{default:q(()=>[k($t,{elevated:""},{default:q(()=>[k(Ct,null,{default:q(()=>[k(pt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),k(qt,null,{default:q(()=>[_t(Me(e.nombreusuario),1)]),_:1}),ee("div",null,Me(e.rolusuario),1)]),_:1})]),_:1}),k(Lt,{modelValue:e.drawer,"onUpdate:modelValue":p[0]||(p[0]=t=>e.drawer=t),"show-if-above":"",mini:e.miniState,onMouseover:p[1]||(p[1]=t=>e.miniState=!1),onMouseout:p[2]||(p[2]=t=>e.miniState=!0),width:230,breakpoint:500,bordered:"",class:"bg-grey-3"},{default:q(()=>[k(Pt,{class:"fit","horizontal-thumb-style":{opacity:0}},{default:q(()=>[k(kt,{padding:""},{default:q(()=>[E((G(),J(oe,{clickable:"",onClick:e.listado,style:{"font-size":"12px"}},{default:q(()=>[k(Q,{avatar:""},{default:q(()=>[k(ae,{color:"black",name:"dashboard"})]),_:1}),k(Q,null,{default:q(()=>[Ht]),_:1})]),_:1},8,["onClick"])),[[le]]),e.idrol==="1"?E((G(),J(oe,{key:0,clickable:"",onClick:e.eventos,style:{"font-size":"12px"}},{default:q(()=>[k(Q,{avatar:""},{default:q(()=>[k(ae,{color:"black",name:"event"})]),_:1}),k(Q,null,{default:q(()=>[Qt]),_:1})]),_:1},8,["onClick"])),[[le]]):he("",!0),e.idrol==="1"?E((G(),J(oe,{key:1,clickable:"",onClick:e.empresas,style:{"font-size":"12px"}},{default:q(()=>[k(Q,{avatar:""},{default:q(()=>[k(ae,{color:"black",name:"factory"})]),_:1}),k(Q,null,{default:q(()=>[Vt]),_:1})]),_:1},8,["onClick"])),[[le]]):he("",!0),e.idrol==="1"?E((G(),J(oe,{key:2,clickable:"",onClick:e.listado,style:{"font-size":"12px"}},{default:q(()=>[k(Q,{avatar:""},{default:q(()=>[k(ae,{color:"black",name:"bookmark_remove"})]),_:1}),k(Q,null,{default:q(()=>[Dt]),_:1})]),_:1},8,["onClick"])),[[le]]):he("",!0),e.idrol==="1"?E((G(),J(oe,{key:3,clickable:"",onClick:e.usuarios,style:{"font-size":"12px"}},{default:q(()=>[k(Q,{avatar:""},{default:q(()=>[k(ae,{color:"black",name:"manage_accounts"})]),_:1}),k(Q,null,{default:q(()=>[Rt]),_:1})]),_:1},8,["onClick"])),[[le]]):he("",!0),E((G(),J(oe,{clickable:"",onClick:e.salir,style:{"font-size":"12px"}},{default:q(()=>[k(Q,{avatar:""},{default:q(()=>[k(ae,{color:"black",name:"logout"})]),_:1}),k(Q,null,{default:q(()=>[At]),_:1})]),_:1},8,["onClick"])),[[le]])]),_:1})]),_:1})]),_:1},8,["modelValue","mini"]),k(Mt,null,{default:q(()=>[k(s)]),_:1})]),_:1})}var Ut=zt(Bt,[["render",Wt]]);export{Ut as default};
