(function(S,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(S=typeof globalThis<"u"?globalThis:S||self,e(S.TedirSelect={},S.Vue))})(this,function(S,e){"use strict";const v={class:"pickerWrap"},V={class:"pickerContent"},$={class:"pickerHeader"},_=["onClick"],w={class:"check"},j=["checked","id"],x=["for"],I=["onClick"],L={class:"check"},z=["checked","id"],O=["for"],M=["onClick"],T=["onClick"],F=["onClick"],D=["onClick"],A=e.defineComponent({__name:"SelectBox",props:{modelValue:{default:{}},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},placeholder:{default:"-- Select option --"},size:{default:0},type:{default:""},up:{type:Boolean,default:!1}},emits:["update:modelValue","change","search"],setup(r,{emit:k}){const s=r,l=e.ref(s.modelValue||{}),d=e.ref(!1),p=e.ref(""),m=e.ref(null),B=e.ref(void 0);e.watch(()=>s.modelValue,()=>{l.value=s.modelValue});const C=()=>{clearTimeout(B.value),B.value=setTimeout(()=>{var n,a;p.value="",((n=m.value)==null?void 0:n.value)&&((a=m.value)==null?void 0:a.value)!==""&&(p.value=m.value.value),k("search",p.value)},500)},y=e.computed(()=>{let n=s.options;return p.value.length>=1&&(n=n.filter(a=>{if(isNaN(a)===!1&&Number(a)===Number(p.value))return!0;if(typeof a=="string"&&a.toLowerCase().includes(p.value.toLowerCase()))return!0;if(typeof a=="object"&&a!==null&&Object.prototype.toString.call(a)==="[object Object]")for(const t of Object.keys(a)){if(isNaN(a[t])===!1&&Number(a[t])===Number(p.value))return!0;if(typeof a[t]=="string"&&a[t].toLowerCase().includes(p.value.toLowerCase()))return!0}return!1})),n}),h=((n=10)=>{let a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="";for(let i=0;i<n;i++)t+=a.charAt(Math.floor(Math.random()*a.length));return t})(),f=n=>{var a;n.target.style.display="none",d.value=!1,(a=m.value)!=null&&a.value&&(m.value.value="",p.value="")},o=(n,a="")=>{a!==""?l.value.map(t=>t[a]).includes(n[a])?l.value.splice(l.value.findIndex(t=>t[a]===n[a]),1):l.value.push(n):l.value.includes(n)?l.value.splice(l.value.findIndex(t=>t===n),1):l.value.push(n),k("update:modelValue",l.value),k("change",l.value,n)},u=n=>{typeof n=="object"&&n!==null&&String(s.datatype).toLowerCase()==="string"?(l.value=n[String(s.dataprop||s.prop)],k("update:modelValue",String(l.value))):typeof n=="object"&&n!==null&&String(s.datatype).toLowerCase()==="number"?(l.value=n[String(s.dataprop||s.prop)],k("update:modelValue",Number(l.value))):(l.value=n,k("update:modelValue",l.value)),d.value=!1,k("change",l.value,n)},c=e.computed(()=>{let n=(s==null?void 0:s.placeholder)||"-- Select option --";if(y.value.length>=1)if(typeof l.value=="number"){let a=y.value.filter(t=>Number(t[String(s.dataprop||s.prop)])===Number(l.value));typeof y.value[0]=="object"&&a.length>=1?n=a[0][String(s.prop)]:typeof y.value[0]=="number"&&(n=l.value)}else if(typeof l.value=="string"){let a=y.value.filter(t=>String(t[String(s.dataprop||s.prop)])===l.value);typeof y.value[0]=="object"&&a.length>=1?n=a[0][String(s.prop)]:typeof y.value[0]=="string"&&l.value!==""&&(n=l.value)}else typeof l.value=="object"&&(Array.isArray(l.value)&&l.value.length>=1?typeof l.value[0]=="object"&&String(s.prop)in l.value[0]?n=l.value.map(a=>a[String(s.prop)]).join(", "):n=l.value.join(", "):l.value!==null&&String(s.prop)in l.value&&(n=l.value[String(s.prop)]));return n});return(n,a)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion",{active:d.value,pickerUp:r.up}])},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:d.value?"block":"none"}),onClick:f},null,4),e.createElementVNode("div",v,[e.createElementVNode("div",{class:"select pickerToggler",onClick:a[0]||(a[0]=t=>d.value=!d.value)},e.toDisplayString(e.unref(c)),1),e.createElementVNode("div",V,[e.createElementVNode("div",$,[e.createElementVNode("input",{type:"search",ref_key:"searchRef",ref:m,onInput:C,class:"input"},null,544)]),Array.isArray(l.value)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(r.size)!==0?Number(r.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(y),(t,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"&&r.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(b=>o(t),["stop"]),class:"pickerItem"},[e.createElementVNode("div",w,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(t),id:"check-"+(e.unref(h)+String(i)),style:{"pointer-events":"none"}},null,8,j),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(h)+String(i)),style:{"pointer-events":"none"}},e.toDisplayString(t),9,x)])],8,_)):typeof t=="object"&&t!==null&&r.prop in t&&r.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(b=>o(t,r.prop),["stop"]),class:"pickerItem"},[e.createElementVNode("div",L,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(t),id:"check-"+(e.unref(h)+String(i)),style:{"pointer-events":"none"}},null,8,z),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(h)+String(i)),style:{"pointer-events":"none"}},e.toDisplayString(t[r.prop]),9,O)])],8,I)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(b=>o(t),["stop"]),class:"pickerItem"},[e.renderSlot(n.$slots,"default",{option:t,selected:l.value},void 0,!0)],8,M))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(r.size)!==0?Number(r.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(y),(t,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"&&r.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:b=>u(t),class:e.normalizeClass(["pickerItem",l.value===t?"active":""])},e.toDisplayString(t),11,T)):typeof t=="object"&&t!==null&&r.prop in t&&r.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:b=>u(t),class:e.normalizeClass(["pickerItem",l.value[r.prop]===t[r.prop]||String(t[r.dataprop||r.prop])===String(l.value)?"active":""])},e.toDisplayString(t[r.prop]),11,F)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(b=>u(t),["stop"]),class:e.normalizeClass(["pickerItem",l.value===t?"active":""])},[e.renderSlot(n.$slots,"default",{option:t,selected:l.value},void 0,!0)],10,D))],64))),128))],4))])])],2))}}),We="",N=(r,k)=>{const s=r.__vccOpts||r;for(const[l,d]of k)s[l]=d;return s},R=N(A,[["__scopeId","data-v-ca470346"]]),W={class:"pickerWrap"},H={class:"pickerContent pickerSizing"},U=["onClick"],K=["onClick"],P=["onClick"],q=e.defineComponent({__name:"ComboBox",props:{modelValue:{default:null},options:{default:[]},prop:{default:"value"},placeholder:{default:"Search option"},size:{default:0},select:{type:Boolean,default:!1},up:{type:Boolean,default:!1},serverSearch:{type:Boolean,default:!1},emptySearch:{type:Boolean,default:!1}},emits:["update:modelValue","change","search"],setup(r,{emit:k}){const s=r,l=e.ref(!1),d=e.ref(""),p=e.ref(null),m=e.ref(void 0),B=e.computed(()=>{let h=s.options;return d.value.length>=1&&s.serverSearch!==!0&&(h=h.filter(f=>{if(isNaN(f)===!1&&Number(f)===Number(d.value))return!0;if(typeof f=="string"&&f.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof f=="object"&&f!==null&&Object.prototype.toString.call(f)==="[object Object]")for(const o of Object.keys(f)){if(isNaN(f[o])===!1&&Number(f[o])===Number(d.value))return!0;if(typeof f[o]=="string"&&f[o].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),h}),C=()=>{clearTimeout(m.value),m.value=setTimeout(()=>{var h,f;d.value="",((h=p.value)==null?void 0:h.value)&&((f=p.value)==null?void 0:f.value)!==""&&(d.value=p.value.value),k("search",d.value),B.value.length>=1&&d.value!==""||s.serverSearch==!0?l.value=!0:l.value=!1},500)},y=(h,f)=>{(typeof h=="string"||isNaN(h)===!1)&&(d.value=h,p.value.value=h),s!=null&&s.emptySearch&&(d.value="",p.value.value=""),k("update:modelValue",f),k("change",h,f),l.value=!1},g=h=>{h.target.style.display="none",l.value=!1};return(h,f)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion",{active:l.value,pickerUp:r.up}])},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:l.value?"block":"none"}),onClick:g},null,4),e.createElementVNode("div",W,[r.select?(e.openBlock(),e.createElementBlock("input",{key:0,type:"search",ref_key:"searchRef",ref:p,onInput:C,onClick:f[0]||(f[0]=o=>l.value=!0),class:"select"},null,544)):(e.openBlock(),e.createElementBlock("input",{key:1,type:"search",ref_key:"searchRef",ref:p,onInput:C,onClick:f[1]||(f[1]=o=>e.unref(B).length>=1&&d.value!==""?l.value=!0:l.value=!1),class:"input"},null,544)),e.createElementVNode("div",H,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(B),(o,u)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+o},[typeof o=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:c=>y(o,o),class:e.normalizeClass(["pickerItem",r.modelValue===o?"active":""])},e.toDisplayString(o),11,U)):typeof o=="object"&&r.prop in o?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:c=>y(o[r.prop],o),class:e.normalizeClass(["pickerItem",r.modelValue[r.prop]===o[r.prop]?"active":""])},e.toDisplayString(o[r.prop]),11,K)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:c=>y(o,o),class:e.normalizeClass(["pickerItem",r.modelValue===o?"active":""])},[e.renderSlot(h.$slots,"default",{option:o},void 0,!0)],10,P))],64))),128))])])],2))}}),He="",G=N(q,[["__scopeId","data-v-fdb04902"]]),J={class:"list"},Q={class:"listHeader"},X=["onClick"],Y={class:"check"},Z=["checked","id"],ee=["for"],le=["onClick"],te={class:"check"},ae=["checked","id"],ne=["for"],ce=["onClick"],re=["onClick"],se=["onClick"],oe=["onClick"],ie=e.defineComponent({__name:"ListBox",props:{modelValue:{default:{}},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},size:{default:0}},emits:["update:modelValue","change","search"],setup(r,{emit:k}){const s=r,l=e.ref(s.modelValue||{}),d=e.ref(""),p=e.ref(null),m=e.ref(void 0);e.watch(()=>s.modelValue,()=>{l.value=s.modelValue});const B=()=>{clearTimeout(m.value),m.value=setTimeout(()=>{var o,u;d.value="",((o=p.value)==null?void 0:o.value)&&((u=p.value)==null?void 0:u.value)!==""&&(d.value=p.value.value),k("search",d.value)},500)},C=e.computed(()=>{let o=s.options;return d.value.length>=1&&(o=o.filter(u=>{if(isNaN(u)===!1&&Number(u)===Number(d.value))return!0;if(typeof u=="string"&&u.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof u=="object"&&u!==null&&Object.prototype.toString.call(u)==="[object Object]")for(const c of Object.keys(u)){if(isNaN(u[c])===!1&&Number(u[c])===Number(d.value))return!0;if(typeof u[c]=="string"&&u[c].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),o}),g=(()=>{let o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",u="";for(let c=0;c<10;c++)u+=o.charAt(Math.floor(Math.random()*o.length));return u})(),h=(o,u="")=>{u!==""?l.value.map(c=>c[u]).includes(o[u])?l.value.splice(l.value.findIndex(c=>c[u]===o[u]),1):l.value.push(o):l.value.includes(o)?l.value.splice(l.value.findIndex(c=>c===o),1):l.value.push(o),k("update:modelValue",l.value),k("change",l.value,o)},f=o=>{typeof o=="object"&&o!==null&&String(s.datatype).toLowerCase()==="string"?(l.value=o[String(s.dataprop||s.prop)],k("update:modelValue",String(l.value))):typeof o=="object"&&o!==null&&String(s.datatype).toLowerCase()==="number"?(l.value=o[String(s.dataprop||s.prop)],k("update:modelValue",Number(l.value))):(l.value=o,k("update:modelValue",l.value)),k("change",l.value,o)};return(o,u)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",J,[e.createElementVNode("div",Q,[e.createElementVNode("input",{type:"search",ref_key:"searchRef",ref:p,onInput:B,class:"input"},null,544)]),Array.isArray(r.modelValue)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"listMenu",style:e.normalizeStyle({"max-height":Number(r.size)!==0?Number(r.size)*44+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(C),(c,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+c},[typeof c=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(a=>h(c),["stop"]),class:"listItem"},[e.createElementVNode("div",Y,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(c),id:"check-"+(e.unref(g)+String(n)),style:{"pointer-events":"none"}},null,8,Z),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(g)+String(n)),style:{"pointer-events":"none"}},e.toDisplayString(c),9,ee)])],8,X)):typeof c=="object"&&r.prop in c?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(a=>h(c,r.prop),["stop"]),class:"listItem"},[e.createElementVNode("div",te,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(c),id:"check-"+(e.unref(g)+String(n)),style:{"pointer-events":"none"}},null,8,ae),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(g)+String(n)),style:{"pointer-events":"none"}},e.toDisplayString(c[r.prop]),9,ne)])],8,le)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(a=>h(c),["stop"]),class:e.normalizeClass(["listItem",l.value.includes(c)?"active":""])},[e.renderSlot(o.$slots,"default",{option:c,selected:l.value},void 0,!0)],10,ce))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"listMenu",style:e.normalizeStyle({"max-height":Number(r.size)!==0?Number(r.size)*44+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(C),(c,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+c},[typeof c=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:a=>f(c),class:e.normalizeClass(["listItem",l.value===c?"active":""])},e.toDisplayString(c),11,re)):typeof c=="object"&&r.prop in c?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:a=>f(c),class:e.normalizeClass(["listItem",l.value[r.prop]===c[r.prop]||String(c[r.dataprop||r.prop])===String(l.value)?"active":""])},e.toDisplayString(c[r.prop]),11,se)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(a=>f(c),["stop"]),class:e.normalizeClass(["listItem",l.value===c?"active":""])},[e.renderSlot(o.$slots,"default",{option:c,selected:l.value},void 0,!0)],10,oe))],64))),128))],4))])]))}}),Ue="",de=N(ie,[["__scopeId","data-v-d7fed8bc"]]),ue=r=>(e.pushScopeId("data-v-3acd22f1"),r=r(),e.popScopeId(),r),fe={class:"tagWrap"},pe={class:"tags"},ke={class:"tag groupItem"},he=["onClick"],me=[ue(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e.createElementVNode("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.createElementVNode("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1))],ye={class:"tagContent"},ge=["onClick"],Be=["onClick"],Ce=["onClick"],be=e.defineComponent({__name:"TagBox",props:{modelValue:{default:[]},options:{default:[]},prop:{default:"value"},placeholder:{default:"Add new tag"},size:{default:0},separator:{default:","}},emits:["update:modelValue"],setup(r,{emit:k}){const s=r,l=e.ref(!1),d=e.ref(""),p=e.ref(null),m=e.reactive(s.modelValue||[]),B=e.ref(s.options||[]),C=e.ref(s.separator||","),y=e.ref(s.prop||"value"),g=e.computed(()=>{let u=B.value;return d.value.length>=1&&(u=u.filter(c=>{if(isNaN(c)===!1&&Number(c)===Number(d.value))return!0;if(typeof c=="string"&&c.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof c=="object"&&c!==null&&Object.prototype.toString.call(c)==="[object Object]")for(const n of Object.keys(c)){if(isNaN(c[n])===!1&&Number(c[n])===Number(d.value))return!0;if(typeof c[n]=="string"&&c[n].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),u}),h=()=>{p.value.focus()},f=u=>{if(u.key!=="Enter"&&g.value.length>=1?l.value=!0:l.value=!1,d.value.endsWith(C.value)||u.key==="Enter"){const c=d.value.replace(C.value,"");m.includes(c)||(m.push(c),B.value.includes(c)&&(B.value=B.value.filter(n=>typeof n=="string"&&n!==c?!0:typeof n=="object"&&y.value in n&&n[y.value]!==c))),d.value="",k("update:modelValue",m)}};e.watch(d,()=>{if(p.value!==null){const u=document.createElement("div");u.style.width="max-content",u.style.position="absolute",u.style.visibility="hidden";const c=d.value.length>=2?d.value:p.value.getAttribute("placeholder");u.innerHTML=c.replace(/ /g,"&nbsp;").trim(),document.body.appendChild(u);const n=Math.ceil(Number(window.getComputedStyle(u).width.replace("px","")))+30;p.value.style.setProperty("width",n+"px"),u.remove()}});const o=u=>{u.target.style.display="none",l.value=!1};return(u,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["taggable",{active:l.value===!0}])},[e.createElementVNode("div",{class:"tagBackdrop",style:e.normalizeStyle({display:l.value?"block":"none"}),onClick:o},null,4),e.createElementVNode("div",fe,[e.createElementVNode("div",{class:"input tagToggler",onClick:h},[e.createElementVNode("div",pe,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m,(n,a)=>(e.openBlock(),e.createElementBlock("div",{key:"tag-"+a,class:"group"},[e.createElementVNode("div",ke,[typeof n=="string"&&n!==""?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(n),1)],64)):typeof n=="object"&&y.value in n?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(n[y.value]),1)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.createTextVNode(e.toDisplayString(r.placeholder),1)],64))]),e.createElementVNode("div",{class:"tag groupItem",onClick:t=>m.splice(a,1)},me,8,he)]))),128)),e.withDirectives(e.createElementVNode("input",{type:"search",ref_key:"inputRef",ref:p,"onUpdate:modelValue":c[0]||(c[0]=n=>d.value=n),class:"tagInput",onInput:c[1]||(c[1]=n=>f(n)),onKeyup:c[2]||(c[2]=e.withKeys(n=>f(n),["enter"])),placeholder:"Add new tag"},null,544),[[e.vModelText,d.value]])])]),e.createElementVNode("div",ye,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(g),(n,a)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+n},[typeof n=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:t=>{d.value=n+",",f(t)},class:"tagItem"},e.toDisplayString(n),9,ge)):typeof n=="object"&&y.value in n?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:t=>{d.value=n[y.value]+",",f(t)},class:"tagItem"},e.toDisplayString(n[y.value]),9,Be)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:t=>{d.value=n+",",f(t)},class:"tagItem"},[e.renderSlot(u.$slots,"default",{option:n},void 0,!0)],8,Ce))],64))),128))])])],2))}}),Pe="",Se=N(be,[["__scopeId","data-v-3acd22f1"]]),Ne={class:"pickerOverlay pickerWrap"},Ee={class:"pickerContent"},ve={class:"pickerHeader"},Ve=["onClick"],$e={class:"check"},_e=["checked","id"],we=["for"],je=["onClick"],xe={class:"check"},Ie=["checked","id"],Le=["for"],ze=["onClick"],Oe=["onClick"],Me=["onClick"],Te=["onClick"],Fe={class:"pickerFooter"},De={class:"tedirCategoryAdd"},Ae=e.defineComponent({__name:"CategoryBox",props:{modelValue:{default:{}},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},placeholder:{default:"-- Select option --"},size:{default:0},up:{type:Boolean,default:!1}},emits:["update:modelValue","change","add","search"],setup(r,{emit:k}){const s=r,l=e.ref(s.modelValue||{}),d=e.ref(!1),p=e.ref(""),m=e.ref(null),B=e.ref(void 0),C=e.ref("");e.watch(()=>s.modelValue,()=>{l.value=s.modelValue});const y=()=>{clearTimeout(B.value),B.value=setTimeout(()=>{var a,t;p.value="",((a=m.value)==null?void 0:a.value)&&((t=m.value)==null?void 0:t.value)!==""&&(p.value=m.value.value),k("search",p.value)},500)},g=e.computed(()=>{let a=s.options;return p.value.length>=1&&(a=a.filter(t=>{if(isNaN(t)===!1&&Number(t)===Number(p.value))return!0;if(typeof t=="string"&&t.toLowerCase().includes(p.value.toLowerCase()))return!0;if(typeof t=="object"&&t!==null&&Object.prototype.toString.call(t)==="[object Object]")for(const i of Object.keys(t)){if(isNaN(t[i])===!1&&Number(t[i])===Number(p.value))return!0;if(typeof t[i]=="string"&&t[i].toLowerCase().includes(p.value.toLowerCase()))return!0}return!1})),a}),f=((a=10)=>{let t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",i="";for(let b=0;b<a;b++)i+=t.charAt(Math.floor(Math.random()*t.length));return i})(),o=a=>{var t;a.target.style.display="none",d.value=!1,(t=m.value)!=null&&t.value&&(m.value.value="",p.value="")},u=(a,t="")=>{t!==""?l.value.map(i=>i[t]).includes(a[t])?l.value.splice(l.value.findIndex(i=>i[t]===a[t]),1):l.value.push(a):l.value.includes(a)?l.value.splice(l.value.findIndex(i=>i===a),1):l.value.push(a),k("update:modelValue",l.value),k("change",l.value,a)},c=a=>{typeof a=="object"&&a!==null&&String(s.datatype).toLowerCase()==="string"?(l.value=a[String(s.dataprop||s.prop)],k("update:modelValue",String(l.value))):typeof a=="object"&&a!==null&&String(s.datatype).toLowerCase()==="number"?(l.value=a[String(s.dataprop||s.prop)],k("update:modelValue",Number(l.value))):(l.value=a,k("update:modelValue",l.value)),d.value=!1,k("change",l.value,a)},n=e.computed(()=>{let a=(s==null?void 0:s.placeholder)||"-- Select option --";if(g.value.length>=1)if(typeof l.value=="number"){let t=g.value.filter(i=>Number(i[String(s.dataprop||s.prop)])===Number(l.value));typeof g.value[0]=="object"&&t.length>=1?a=t[0][String(s.prop)]:typeof g.value[0]=="number"&&(a=l.value)}else if(typeof l.value=="string"){let t=g.value.filter(i=>String(i[String(s.dataprop||s.prop)])===l.value);typeof g.value[0]=="object"&&t.length>=1?a=t[0][String(s.prop)]:typeof g.value[0]=="string"&&l.value!==""&&(a=l.value)}else typeof l.value=="object"&&(Array.isArray(l.value)&&l.value.length>=1?typeof l.value[0]=="object"&&String(s.prop)in l.value[0]?a=l.value.map(t=>t[String(s.prop)]).join(", "):a=l.value.join(", "):l.value!==null&&String(s.prop)in l.value&&(a=l.value[String(s.prop)]));return a});return(a,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion tedirCategory",{active:d.value,pickerUp:r.up}])},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:d.value?"block":"none"}),onClick:o},null,4),e.createElementVNode("div",Ne,[e.createElementVNode("div",{class:"select pickerToggler",onClick:t[0]||(t[0]=i=>d.value=!d.value)},e.toDisplayString(e.unref(n)),1),e.createElementVNode("div",Ee,[e.createElementVNode("div",ve,[e.createElementVNode("input",{type:"search",ref_key:"searchRef",ref:m,onInput:y,class:"input"},null,544)]),Array.isArray(l.value)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(r.size)!==0?Number(r.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(g),(i,b)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+i},[typeof i=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(E=>u(i),["stop"]),class:"pickerItem"},[e.createElementVNode("div",$e,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(i),id:"check-"+(e.unref(f)+String(b)),style:{"pointer-events":"none"}},null,8,_e),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(f)+String(b)),style:{"pointer-events":"none"}},e.toDisplayString(i),9,we)])],8,Ve)):typeof i=="object"&&i!==null&&r.prop in i?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(E=>u(i,r.prop),["stop"]),class:"pickerItem"},[e.createElementVNode("div",xe,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(i),id:"check-"+(e.unref(f)+String(b)),style:{"pointer-events":"none"}},null,8,Ie),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(f)+String(b)),style:{"pointer-events":"none"}},e.toDisplayString(i[r.prop]),9,Le)])],8,je)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(E=>u(i),["stop"]),class:"pickerItem"},[e.renderSlot(a.$slots,"default",{option:i,selected:l.value},void 0,!0)],8,ze))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(r.size)!==0?Number(r.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(g),(i,b)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+i},[typeof i=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:E=>c(i),class:e.normalizeClass(["pickerItem",l.value===i?"active":""])},e.toDisplayString(i),11,Oe)):typeof i=="object"&&i!==null&&r.prop in i?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:E=>c(i),class:e.normalizeClass(["pickerItem",l.value[r.prop]===i[r.prop]||String(i[r.dataprop||r.prop])===String(l.value)?"active":""])},e.toDisplayString(i[r.prop]),11,Me)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(E=>c(i),["stop"]),class:e.normalizeClass(["pickerItem",l.value===i?"active":""])},[e.renderSlot(a.$slots,"default",{option:i,selected:l.value},void 0,!0)],10,Te))],64))),128))],4)),e.createElementVNode("div",Fe,[e.createElementVNode("div",De,[e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>C.value=i),class:"input",placeholder:"Add New Category"},null,512),[[e.vModelText,C.value]]),e.createElementVNode("button",{type:"button",class:"button tedirCategoryButton",onClick:t[2]||(t[2]=i=>{k("add",C.value),C.value=""})},"Save")])])])])],2))}}),qe="",Re=N(Ae,[["__scopeId","data-v-9bd9abf8"]]);S.CategoryBox=Re,S.ComboBox=G,S.ListBox=de,S.SelectBox=R,S.TagBox=Se,Object.defineProperties(S,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
