import{h as a,c as p,u as f,a as g,_ as h,N as l,o as y,d as _,e as o,w as v,f as t,g as r,Q as w,i as x,j as d,k as m,l as b,m as C}from"./index.e77074c6.js";import{Q as S}from"./QForm.d7bb9363.js";import{a as k}from"./axios.7331a07d.js";const Q=[a("g",{transform:"translate(20 50)"},[a("rect",{x:"-10",y:"-30",width:" 20",height:"60",fill:"currentColor",opacity:"0.6"},[a("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),a("g",{transform:"translate(50 50)"},[a("rect",{x:"-10",y:"-30",width:" 20",height:"60",fill:"currentColor",opacity:"0.8"},[a("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),a("g",{transform:"translate(80 50)"},[a("rect",{x:"-10",y:"-30",width:" 20",height:"60",fill:"currentColor",opacity:"0.9"},[a("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var I=p({name:"QSpinnerFacebook",props:f,setup(e){const{cSize:s,classes:c}=g(e);return()=>a("svg",{class:c.value,width:s.value,height:s.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Q)}});const N="http://localhost:5005/",V={name:"LoginLayout",data(){return{term:"",usuarioCentro:"",claveCentro:"",loading:!1}},methods:{submit(){this.usuarioCentro===""?l.create("El Usuario es requerido para iniciar sesi\xF3n"):this.claveCentro===""?l.create("La contrase\xF1a es requerida para iniciar sesi\xF3n"):(this.loading=!0,k.post(N+"usuario/login",{usuario:this.usuarioCentro,clave:this.claveCentro}).then(async e=>{this.loading=!1,e.status===200?(sessionStorage.setItem("co_usuario",e.data.resp.id),sessionStorage.setItem("tx_nombre",e.data.resp.nombre),sessionStorage.setItem("tx_rol",e.data.resp.rol),sessionStorage.setItem("co_rol",e.data.resp.idrol),this.$router.push("/principal")):(this.loading=!1,l.create(e.data.message))}).catch(e=>{this.loading=!1,l.create("Error "+e)}))}},mounted(){console.log("Modo producci\xF3n")}},q={class:"bg-primary window-height window-width row justify-center"},T={class:"col-3"},L=o("div",{class:"row justify-center"},[o("img",{src:"colavirtual.png",style:{"max-width":"180px","margin-top":"20px"}})],-1),M=o("div",{class:"row justify-center"},[o("h5",{class:"text-h5 text-secondary q-my-md text-white"},"Inicia sesi\xF3n")],-1),j={class:"row justify-center"};function B(e,s,c,E,i,u){return y(),_("div",q,[o("div",T,[L,M,o("div",j,[o("form",{onSubmit:s[2]||(s[2]=v((...n)=>u.submit&&u.submit(...n),["prevent"])),class:"row justify-center"},[t(w,{bordered:"",class:"q-pa-lg shadow-1",style:{"max-width":"335px","border-radius":"10px"}},{default:r(()=>[t(x,null,{default:r(()=>[t(S,{class:"q-gutter-md"},{default:r(()=>[t(d,{square:"",filled:"",clearable:"",modelValue:i.usuarioCentro,"onUpdate:modelValue":s[0]||(s[0]=n=>i.usuarioCentro=n),type:"text",label:"Usuario"},{prepend:r(()=>[t(m,{name:"account_circle"})]),_:1},8,["modelValue"]),t(d,{square:"",filled:"",clearable:"",modelValue:i.claveCentro,"onUpdate:modelValue":s[1]||(s[1]=n=>i.claveCentro=n),type:"password",label:"Clave"},{prepend:r(()=>[t(m,{name:"lock"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(b,{class:"q-px-md"},{default:r(()=>[t(C,{unelevated:"",color:"primary",type:"submit",loading:i.loading,size:"lg",class:"full-width",label:"Ingresar"},{loading:r(()=>[t(I)]),_:1},8,["loading"])]),_:1})]),_:1})],32)])])])}var P=h(V,[["render",B]]);export{P as default};
