(function(b,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(b=typeof globalThis<"u"?globalThis:b||self,e(b.TedirSelect={},b.Vue))})(this,function(b,e){"use strict";const V=c=>(e.pushScopeId("data-v-9d6782b2"),c=c(),e.popScopeId(),c),E={class:"pickerWrap"},$={class:"pickerContent"},w={class:"pickerHeader"},j={key:0,class:"tedirSelectLoading"},I=[V(()=>e.createElementVNode("span",{class:"spinner"},null,-1))],_=["onClick"],x={class:"check"},O=["checked","id"],L=["for"],z=["onClick"],M={class:"check"},F=["checked","id"],T=["for"],D=["onClick"],A=["onClick"],R=["onClick"],W=["onClick"],H=e.defineComponent({__name:"SelectBox",props:{modelValue:{default:{}},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},placeholder:{default:"-- Select Option --"},size:{default:0},type:{default:""},up:{type:Boolean,default:!1},defaultOption:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["update:modelValue","change","search"],setup(c,{emit:p}){const a=c,l=e.ref(a.modelValue||{}),d=e.ref(!1),u=e.ref(""),k=e.ref(null),B=e.ref(void 0);e.watch(()=>a.modelValue,()=>{l.value=a.modelValue});const h=()=>{clearTimeout(B.value),B.value=setTimeout(()=>{var r,o;u.value="",((r=k.value)==null?void 0:r.value)&&((o=k.value)==null?void 0:o.value)!==""&&(u.value=k.value.value),p("search",u.value)},500)},m=e.computed(()=>{let r=a.options;return u.value.length>=1&&(r=r.filter(o=>{if(isNaN(o)===!1&&Number(o)===Number(u.value))return!0;if(typeof o=="string"&&o.toLowerCase().includes(u.value.toLowerCase()))return!0;if(typeof o=="object"&&o!==null&&Object.prototype.toString.call(o)==="[object Object]")for(const n of Object.keys(o)){if(isNaN(o[n])===!1&&Number(o[n])===Number(u.value))return!0;if(typeof o[n]=="string"&&o[n].toLowerCase().includes(u.value.toLowerCase()))return!0}return!1})),r}),S=((r=10)=>{let o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="";for(let v=0;v<r;v++)n+=o.charAt(Math.floor(Math.random()*o.length));return n})(),g=r=>{var o;r.target.style.display="none",d.value=!1,(o=k.value)!=null&&o.value&&(k.value.value="",u.value="")},f=r=>{l.value=r,p("update:modelValue",l.value),p("change",l.value,r),d.value=!1},s=(r,o="")=>{o!==""?l.value.map(n=>n[o]).includes(r[o])?l.value.splice(l.value.findIndex(n=>n[o]===r[o]),1):l.value.push(r):l.value.includes(r)?l.value.splice(l.value.findIndex(n=>n===r),1):l.value.push(r),p("update:modelValue",l.value),p("change",l.value,r)},t=r=>{typeof r=="object"&&r!==null&&String(a.datatype).toLowerCase()==="string"?(l.value=r[String(a.dataprop||a.prop)],p("update:modelValue",String(l.value))):typeof r=="object"&&r!==null&&String(a.datatype).toLowerCase()==="number"?(l.value=r[String(a.dataprop||a.prop)],p("update:modelValue",Number(l.value))):(l.value=r,p("update:modelValue",l.value)),d.value=!1,p("change",l.value,r)},i=e.computed(()=>{let r=(a==null?void 0:a.placeholder)||"-- Select option --";if(m.value.length>=1)if(typeof l.value=="number"){let o=m.value.filter(n=>Number(n[String(a.dataprop||a.prop)])===Number(l.value));typeof m.value[0]=="object"&&o.length>=1?r=o[0][String(a.prop)]:typeof m.value[0]=="number"&&(r=l.value)}else if(typeof l.value=="string"){let o=m.value.filter(n=>String(n[String(a.dataprop||a.prop)])===l.value);typeof m.value[0]=="object"&&o.length>=1?r=o[0][String(a.prop)]:typeof m.value[0]=="string"&&l.value!==""&&(r=l.value)}else typeof l.value=="object"&&(Array.isArray(l.value)&&l.value.length>=1?typeof l.value[0]=="object"&&String(a.prop)in l.value[0]?r=l.value.map(o=>o[String(a.prop)]).join(", "):r=l.value.join(", "):l.value!==null&&String(a.prop)in l.value&&(r=l.value[String(a.prop)]));return r});return(r,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion",{active:d.value,pickerUp:c.up}])},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:d.value?"block":"none"}),onClick:g},null,4),e.createElementVNode("div",E,[e.createElementVNode("div",{class:"select pickerToggler",onClick:o[0]||(o[0]=n=>d.value=!d.value)},e.toDisplayString(e.unref(i)),1),e.createElementVNode("div",$,[e.createElementVNode("div",w,[e.createElementVNode("input",{type:"search",ref_key:"searchRef",ref:k,onInput:h,class:"input"},null,544)]),c.loading?(e.openBlock(),e.createElementBlock("div",j,I)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[Array.isArray(l.value)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(c.size)!==0?Number(c.size)*42+"px":"auto"})},[e.withDirectives(e.createElementVNode("div",{onClick:o[1]||(o[1]=e.withModifiers(n=>f(typeof c.modelValue=="object"?Array.isArray(c.modelValue)?[]:{}:""),["stop"])),class:"pickerItem"},e.toDisplayString(c.placeholder||"-- Select Option --"),513),[[e.vShow,c.defaultOption]]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(m),(n,v)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+n},[typeof n=="string"&&c.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(C=>s(n),["stop"]),class:"pickerItem"},[e.createElementVNode("div",x,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(n),id:"check-"+(e.unref(S)+String(v)),style:{"pointer-events":"none"}},null,8,O),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(S)+String(v)),style:{"pointer-events":"none"}},e.toDisplayString(n),9,L)])],8,_)):typeof n=="object"&&n!==null&&c.prop in n&&c.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(C=>s(n,c.prop),["stop"]),class:"pickerItem"},[e.createElementVNode("div",M,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(n),id:"check-"+(e.unref(S)+String(v)),style:{"pointer-events":"none"}},null,8,F),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(S)+String(v)),style:{"pointer-events":"none"}},e.toDisplayString(n[c.prop]),9,T)])],8,z)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(C=>s(n),["stop"]),class:"pickerItem"},[e.renderSlot(r.$slots,"default",{option:n,selected:l.value},void 0,!0)],8,D))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(c.size)!==0?Number(c.size)*42+"px":"auto"})},[e.withDirectives(e.createElementVNode("div",{onClick:o[2]||(o[2]=e.withModifiers(n=>f(typeof c.modelValue=="object"?Array.isArray(c.modelValue)?[]:{}:""),["stop"])),class:"pickerItem"},e.toDisplayString(c.placeholder||"-- Select Option --"),513),[[e.vShow,c.defaultOption]]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(m),(n,v)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+n},[typeof n=="string"&&c.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:C=>t(n),class:e.normalizeClass(["pickerItem",l.value===n?"active":""])},e.toDisplayString(n),11,A)):typeof n=="object"&&n!==null&&c.prop in n&&c.type!=="slot"?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:C=>t(n),class:e.normalizeClass(["pickerItem",l.value[c.prop]===n[c.prop]||String(n[c.dataprop||c.prop])===String(l.value)?"active":""])},e.toDisplayString(n[c.prop]),11,R)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(C=>t(n),["stop"]),class:e.normalizeClass(["pickerItem",l.value===n?"active":""])},[e.renderSlot(r.$slots,"default",{option:n,selected:l.value},void 0,!0)],10,W))],64))),128))],4))],64))])])],2))}}),Ge="",N=(c,p)=>{const a=c.__vccOpts||c;for(const[l,d]of p)a[l]=d;return a},U=N(H,[["__scopeId","data-v-9d6782b2"]]),K={class:"pickerWrap"},P=["value","placeholder"],q=["value","placeholder"],G={class:"pickerContent pickerSizing"},J=["onClick"],Q=["onClick"],X=["onClick"],Y=e.defineComponent({__name:"ComboBox",props:{modelValue:{default:null},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},placeholder:{default:"-- Search Option --"},size:{default:0},select:{type:Boolean,default:!1},up:{type:Boolean,default:!1},serverSearch:{type:Boolean,default:!1},emptySearch:{type:Boolean,default:!1}},emits:["update:modelValue","change","search"],setup(c,{emit:p}){const a=c,l=e.ref(a.modelValue||{}),d=e.ref(!1),u=e.ref(""),k=e.ref(null),B=e.ref(void 0),h=e.ref(!1);e.watch(()=>a.modelValue,()=>{var s,t;l.value=a.modelValue,typeof a.modelValue=="string"||isNaN(a.modelValue)===!1?(u.value=a.modelValue,k.value.value=a.modelValue):(typeof((s=a.modelValue)==null?void 0:s[String(a.dataprop||a.prop)])=="string"||isNaN((t=a.modelValue)==null?void 0:t[String(a.dataprop||a.prop)])===!1)&&(u.value=a.modelValue[String(a.dataprop||a.prop)],k.value.value=a.modelValue[String(a.dataprop||a.prop)]),a.emptySearch==!0&&(u.value="",k.value.value="",p("search",u.value))});const m=e.computed(()=>{let s=a.options;return u.value.length>=1&&a.serverSearch!==!0&&(s=s.filter(t=>{if(isNaN(t)===!1&&Number(t)===Number(u.value))return!0;if(typeof t=="string"&&t.toLowerCase().includes(u.value.toLowerCase()))return!0;if(typeof t=="object"&&t!==null&&Object.prototype.toString.call(t)==="[object Object]")for(const i of Object.keys(t)){if(isNaN(t[i])===!1&&Number(t[i])===Number(u.value))return!0;if(typeof t[i]=="string"&&t[i].toLowerCase().includes(u.value.toLowerCase()))return!0}return!1})),s}),y=()=>{clearTimeout(B.value),B.value=setTimeout(()=>{var s,t;u.value="",((s=k.value)==null?void 0:s.value)&&((t=k.value)==null?void 0:t.value)!==""&&(u.value=k.value.value),p("search",u.value),m.value.length>=1&&h.value===!0||a.serverSearch==!0?d.value=!0:d.value=!1},500)},S=(s,t)=>{(typeof s=="string"||isNaN(s)===!1)&&(u.value=s,k.value.value=s),a.emptySearch==!0&&(u.value="",k.value.value="",p("search",u.value)),typeof t=="object"&&t!==null&&String(a.datatype).toLowerCase()==="string"?(l.value=t[String(a.dataprop||a.prop)],p("update:modelValue",String(l.value))):typeof t=="object"&&t!==null&&String(a.datatype).toLowerCase()==="number"?(l.value=t[String(a.dataprop||a.prop)],p("update:modelValue",Number(l.value))):(l.value=t,p("update:modelValue",l.value)),p("change",s,t),d.value=!1},g=s=>{s.target.style.display="none",d.value=!1},f=e.computed(()=>{var t;let s="";if(m.value.length>=1&&h.value!==!0&&a.emptySearch!==!0)if(typeof l.value=="number"){let i=m.value.filter(r=>Number(r[String(a.dataprop||a.prop)])===Number(l.value));typeof m.value[0]=="object"&&i.length>=1?s=i[0][String(a.prop)]:typeof m.value[0]=="number"&&(s=l.value)}else if(typeof l.value=="string"){let i=m.value.filter(r=>String(r[String(a.dataprop||a.prop)])===l.value);typeof m.value[0]=="object"&&i.length>=1?s=i[0][String(a.prop)]:typeof m.value[0]=="string"&&l.value!==""&&(s=l.value)}else typeof l.value=="object"&&(Array.isArray(l.value)&&l.value.length>=1?typeof l.value[0]=="object"&&String(a.prop)in l.value[0]?s=l.value.map(i=>i[String(a.prop)]).join(", "):s=l.value.join(", "):l.value!==null&&String(a.prop)in l.value&&(s=l.value[String(a.prop)]));else((t=k.value)==null?void 0:t.value)&&h.value===!0&&a.emptySearch!==!0&&(s=k.value.value);return s});return(s,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion",{active:d.value,pickerUp:c.up}])},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:d.value?"block":"none"}),onClick:g},null,4),e.createElementVNode("div",K,[c.select?(e.openBlock(),e.createElementBlock("input",{key:0,type:"search",value:e.unref(f),ref_key:"searchRef",ref:k,onInput:y,onClick:t[0]||(t[0]=i=>d.value=!0),onFocus:t[1]||(t[1]=i=>h.value=!0),onBlur:t[2]||(t[2]=i=>h.value=!1),class:"select",placeholder:c.placeholder},null,40,P)):(e.openBlock(),e.createElementBlock("input",{key:1,type:"search",value:e.unref(f),ref_key:"searchRef",ref:k,onInput:y,onClick:t[3]||(t[3]=i=>e.unref(m).length>=1&&u.value!==""?d.value=!0:d.value=!1),onFocus:t[4]||(t[4]=i=>h.value=!0),onBlur:t[5]||(t[5]=i=>h.value=!1),class:"input",placeholder:c.placeholder},null,40,q)),e.createElementVNode("div",G,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(m),(i,r)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+i},[typeof i=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:o=>S(i,i),class:e.normalizeClass(["pickerItem",c.modelValue===i?"active":""])},e.toDisplayString(i),11,J)):typeof i=="object"&&c.prop in i?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:o=>S(i[c.prop],i),class:e.normalizeClass(["pickerItem",c.modelValue[c.prop]===i[c.prop]?"active":""])},e.toDisplayString(i[c.prop]),11,Q)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:o=>S(i,i),class:e.normalizeClass(["pickerItem",c.modelValue===i?"active":""])},[e.renderSlot(s.$slots,"default",{option:i},void 0,!0)],10,X))],64))),128))])])],2))}}),Je="",Z=N(Y,[["__scopeId","data-v-fd87e445"]]),ee={class:"list"},le={class:"listHeader"},te=["onClick"],ae={class:"check"},ne=["checked","id"],re=["for"],oe=["onClick"],ce={class:"check"},se=["checked","id"],ie=["for"],de=["onClick"],ue=["onClick"],fe=["onClick"],pe=["onClick"],ke=e.defineComponent({__name:"ListBox",props:{modelValue:{default:{}},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},size:{default:0}},emits:["update:modelValue","change","search"],setup(c,{emit:p}){const a=c,l=e.ref(a.modelValue||{}),d=e.ref(""),u=e.ref(null),k=e.ref(void 0);e.watch(()=>a.modelValue,()=>{l.value=a.modelValue});const B=()=>{clearTimeout(k.value),k.value=setTimeout(()=>{var f,s;d.value="",((f=u.value)==null?void 0:f.value)&&((s=u.value)==null?void 0:s.value)!==""&&(d.value=u.value.value),p("search",d.value)},500)},h=e.computed(()=>{let f=a.options;return d.value.length>=1&&(f=f.filter(s=>{if(isNaN(s)===!1&&Number(s)===Number(d.value))return!0;if(typeof s=="string"&&s.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof s=="object"&&s!==null&&Object.prototype.toString.call(s)==="[object Object]")for(const t of Object.keys(s)){if(isNaN(s[t])===!1&&Number(s[t])===Number(d.value))return!0;if(typeof s[t]=="string"&&s[t].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),f}),y=(()=>{let f="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",s="";for(let t=0;t<10;t++)s+=f.charAt(Math.floor(Math.random()*f.length));return s})(),S=(f,s="")=>{s!==""?l.value.map(t=>t[s]).includes(f[s])?l.value.splice(l.value.findIndex(t=>t[s]===f[s]),1):l.value.push(f):l.value.includes(f)?l.value.splice(l.value.findIndex(t=>t===f),1):l.value.push(f),p("update:modelValue",l.value),p("change",l.value,f)},g=f=>{typeof f=="object"&&f!==null&&String(a.datatype).toLowerCase()==="string"?(l.value=f[String(a.dataprop||a.prop)],p("update:modelValue",String(l.value))):typeof f=="object"&&f!==null&&String(a.datatype).toLowerCase()==="number"?(l.value=f[String(a.dataprop||a.prop)],p("update:modelValue",Number(l.value))):(l.value=f,p("update:modelValue",l.value)),p("change",l.value,f)};return(f,s)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",ee,[e.createElementVNode("div",le,[e.createElementVNode("input",{type:"search",ref_key:"searchRef",ref:u,onInput:B,class:"input"},null,544)]),Array.isArray(c.modelValue)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"listMenu",style:e.normalizeStyle({"max-height":Number(c.size)!==0?Number(c.size)*44+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(h),(t,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(r=>S(t),["stop"]),class:"listItem"},[e.createElementVNode("div",ae,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(t),id:"check-"+(e.unref(y)+String(i)),style:{"pointer-events":"none"}},null,8,ne),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(y)+String(i)),style:{"pointer-events":"none"}},e.toDisplayString(t),9,re)])],8,te)):typeof t=="object"&&c.prop in t?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(r=>S(t,c.prop),["stop"]),class:"listItem"},[e.createElementVNode("div",ce,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(t),id:"check-"+(e.unref(y)+String(i)),style:{"pointer-events":"none"}},null,8,se),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(y)+String(i)),style:{"pointer-events":"none"}},e.toDisplayString(t[c.prop]),9,ie)])],8,oe)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(r=>S(t),["stop"]),class:e.normalizeClass(["listItem",l.value.includes(t)?"active":""])},[e.renderSlot(f.$slots,"default",{option:t,selected:l.value},void 0,!0)],10,de))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"listMenu",style:e.normalizeStyle({"max-height":Number(c.size)!==0?Number(c.size)*44+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(h),(t,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:r=>g(t),class:e.normalizeClass(["listItem",l.value===t?"active":""])},e.toDisplayString(t),11,ue)):typeof t=="object"&&c.prop in t?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:r=>g(t),class:e.normalizeClass(["listItem",l.value[c.prop]===t[c.prop]||String(t[c.dataprop||c.prop])===String(l.value)?"active":""])},e.toDisplayString(t[c.prop]),11,fe)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(r=>g(t),["stop"]),class:e.normalizeClass(["listItem",l.value===t?"active":""])},[e.renderSlot(f.$slots,"default",{option:t,selected:l.value},void 0,!0)],10,pe))],64))),128))],4))])]))}}),Qe="",me=N(ke,[["__scopeId","data-v-d7fed8bc"]]),ye=c=>(e.pushScopeId("data-v-3acd22f1"),c=c(),e.popScopeId(),c),he={class:"tagWrap"},ge={class:"tags"},ve={class:"tag groupItem"},Be=["onClick"],Se=[ye(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e.createElementVNode("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.createElementVNode("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1))],be={class:"tagContent"},Ce=["onClick"],Ne=["onClick"],Ve=["onClick"],Ee=e.defineComponent({__name:"TagBox",props:{modelValue:{default:[]},options:{default:[]},prop:{default:"value"},placeholder:{default:"Add new tag"},size:{default:0},separator:{default:","}},emits:["update:modelValue"],setup(c,{emit:p}){const a=c,l=e.ref(!1),d=e.ref(""),u=e.ref(null),k=e.reactive(a.modelValue||[]),B=e.ref(a.options||[]),h=e.ref(a.separator||","),m=e.ref(a.prop||"value"),y=e.computed(()=>{let s=B.value;return d.value.length>=1&&(s=s.filter(t=>{if(isNaN(t)===!1&&Number(t)===Number(d.value))return!0;if(typeof t=="string"&&t.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof t=="object"&&t!==null&&Object.prototype.toString.call(t)==="[object Object]")for(const i of Object.keys(t)){if(isNaN(t[i])===!1&&Number(t[i])===Number(d.value))return!0;if(typeof t[i]=="string"&&t[i].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),s}),S=()=>{u.value.focus()},g=s=>{if(s.key!=="Enter"&&y.value.length>=1?l.value=!0:l.value=!1,d.value.endsWith(h.value)||s.key==="Enter"){const t=d.value.replace(h.value,"");k.includes(t)||(k.push(t),B.value.includes(t)&&(B.value=B.value.filter(i=>typeof i=="string"&&i!==t?!0:typeof i=="object"&&m.value in i&&i[m.value]!==t))),d.value="",p("update:modelValue",k)}};e.watch(d,()=>{if(u.value!==null){const s=document.createElement("div");s.style.width="max-content",s.style.position="absolute",s.style.visibility="hidden";const t=d.value.length>=2?d.value:u.value.getAttribute("placeholder");s.innerHTML=t.replace(/ /g,"&nbsp;").trim(),document.body.appendChild(s);const i=Math.ceil(Number(window.getComputedStyle(s).width.replace("px","")))+30;u.value.style.setProperty("width",i+"px"),s.remove()}});const f=s=>{s.target.style.display="none",l.value=!1};return(s,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["taggable",{active:l.value===!0}])},[e.createElementVNode("div",{class:"tagBackdrop",style:e.normalizeStyle({display:l.value?"block":"none"}),onClick:f},null,4),e.createElementVNode("div",he,[e.createElementVNode("div",{class:"input tagToggler",onClick:S},[e.createElementVNode("div",ge,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(k,(i,r)=>(e.openBlock(),e.createElementBlock("div",{key:"tag-"+r,class:"group"},[e.createElementVNode("div",ve,[typeof i=="string"&&i!==""?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(i),1)],64)):typeof i=="object"&&m.value in i?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(i[m.value]),1)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.createTextVNode(e.toDisplayString(c.placeholder),1)],64))]),e.createElementVNode("div",{class:"tag groupItem",onClick:o=>k.splice(r,1)},Se,8,Be)]))),128)),e.withDirectives(e.createElementVNode("input",{type:"search",ref_key:"inputRef",ref:u,"onUpdate:modelValue":t[0]||(t[0]=i=>d.value=i),class:"tagInput",onInput:t[1]||(t[1]=i=>g(i)),onKeyup:t[2]||(t[2]=e.withKeys(i=>g(i),["enter"])),placeholder:"Add new tag"},null,544),[[e.vModelText,d.value]])])]),e.createElementVNode("div",be,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(y),(i,r)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+i},[typeof i=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:o=>{d.value=i+",",g(o)},class:"tagItem"},e.toDisplayString(i),9,Ce)):typeof i=="object"&&m.value in i?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:o=>{d.value=i[m.value]+",",g(o)},class:"tagItem"},e.toDisplayString(i[m.value]),9,Ne)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:o=>{d.value=i+",",g(o)},class:"tagItem"},[e.renderSlot(s.$slots,"default",{option:i},void 0,!0)],8,Ve))],64))),128))])])],2))}}),Ye="",$e=N(Ee,[["__scopeId","data-v-3acd22f1"]]),we={class:"pickerOverlay pickerWrap"},je={class:"pickerContent"},Ie={class:"pickerHeader"},_e=["onClick"],xe={class:"check"},Oe=["checked","id"],Le=["for"],ze=["onClick"],Me={class:"check"},Fe=["checked","id"],Te=["for"],De=["onClick"],Ae=["onClick"],Re=["onClick"],We=["onClick"],He={class:"pickerFooter"},Ue={class:"tedirCategoryAdd"},Ke=e.defineComponent({__name:"CategoryBox",props:{modelValue:{default:{}},options:{default:[]},prop:{default:"value"},datatype:{default:""},dataprop:{default:""},placeholder:{default:"-- Select option --"},size:{default:0},up:{type:Boolean,default:!1}},emits:["update:modelValue","change","add","search"],setup(c,{emit:p}){const a=c,l=e.ref(a.modelValue||{}),d=e.ref(!1),u=e.ref(""),k=e.ref(null),B=e.ref(void 0),h=e.ref("");e.watch(()=>a.modelValue,()=>{l.value=a.modelValue});const m=()=>{clearTimeout(B.value),B.value=setTimeout(()=>{var r,o;u.value="",((r=k.value)==null?void 0:r.value)&&((o=k.value)==null?void 0:o.value)!==""&&(u.value=k.value.value),p("search",u.value)},500)},y=e.computed(()=>{let r=a.options;return u.value.length>=1&&(r=r.filter(o=>{if(isNaN(o)===!1&&Number(o)===Number(u.value))return!0;if(typeof o=="string"&&o.toLowerCase().includes(u.value.toLowerCase()))return!0;if(typeof o=="object"&&o!==null&&Object.prototype.toString.call(o)==="[object Object]")for(const n of Object.keys(o)){if(isNaN(o[n])===!1&&Number(o[n])===Number(u.value))return!0;if(typeof o[n]=="string"&&o[n].toLowerCase().includes(u.value.toLowerCase()))return!0}return!1})),r}),g=((r=10)=>{let o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="";for(let v=0;v<r;v++)n+=o.charAt(Math.floor(Math.random()*o.length));return n})(),f=r=>{var o;r.target.style.display="none",d.value=!1,(o=k.value)!=null&&o.value&&(k.value.value="",u.value="")},s=(r,o="")=>{o!==""?l.value.map(n=>n[o]).includes(r[o])?l.value.splice(l.value.findIndex(n=>n[o]===r[o]),1):l.value.push(r):l.value.includes(r)?l.value.splice(l.value.findIndex(n=>n===r),1):l.value.push(r),p("update:modelValue",l.value),p("change",l.value,r)},t=r=>{typeof r=="object"&&r!==null&&String(a.datatype).toLowerCase()==="string"?(l.value=r[String(a.dataprop||a.prop)],p("update:modelValue",String(l.value))):typeof r=="object"&&r!==null&&String(a.datatype).toLowerCase()==="number"?(l.value=r[String(a.dataprop||a.prop)],p("update:modelValue",Number(l.value))):(l.value=r,p("update:modelValue",l.value)),d.value=!1,p("change",l.value,r)},i=e.computed(()=>{let r=(a==null?void 0:a.placeholder)||"-- Select option --";if(y.value.length>=1)if(typeof l.value=="number"){let o=y.value.filter(n=>Number(n[String(a.dataprop||a.prop)])===Number(l.value));typeof y.value[0]=="object"&&o.length>=1?r=o[0][String(a.prop)]:typeof y.value[0]=="number"&&(r=l.value)}else if(typeof l.value=="string"){let o=y.value.filter(n=>String(n[String(a.dataprop||a.prop)])===l.value);typeof y.value[0]=="object"&&o.length>=1?r=o[0][String(a.prop)]:typeof y.value[0]=="string"&&l.value!==""&&(r=l.value)}else typeof l.value=="object"&&(Array.isArray(l.value)&&l.value.length>=1?typeof l.value[0]=="object"&&String(a.prop)in l.value[0]?r=l.value.map(o=>o[String(a.prop)]).join(", "):r=l.value.join(", "):l.value!==null&&String(a.prop)in l.value&&(r=l.value[String(a.prop)]));return r});return(r,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion tedirCategory",{active:d.value,pickerUp:c.up}])},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:d.value?"block":"none"}),onClick:f},null,4),e.createElementVNode("div",we,[e.createElementVNode("div",{class:"select pickerToggler",onClick:o[0]||(o[0]=n=>d.value=!d.value)},e.toDisplayString(e.unref(i)),1),e.createElementVNode("div",je,[e.createElementVNode("div",Ie,[e.createElementVNode("input",{type:"search",ref_key:"searchRef",ref:k,onInput:m,class:"input"},null,544)]),Array.isArray(l.value)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(c.size)!==0?Number(c.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(y),(n,v)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+n},[typeof n=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(C=>s(n),["stop"]),class:"pickerItem"},[e.createElementVNode("div",xe,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(n),id:"check-"+(e.unref(g)+String(v)),style:{"pointer-events":"none"}},null,8,Oe),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(g)+String(v)),style:{"pointer-events":"none"}},e.toDisplayString(n),9,Le)])],8,_e)):typeof n=="object"&&n!==null&&c.prop in n?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(C=>s(n,c.prop),["stop"]),class:"pickerItem"},[e.createElementVNode("div",Me,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.value.includes(n),id:"check-"+(e.unref(g)+String(v)),style:{"pointer-events":"none"}},null,8,Fe),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(g)+String(v)),style:{"pointer-events":"none"}},e.toDisplayString(n[c.prop]),9,Te)])],8,ze)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(C=>s(n),["stop"]),class:"pickerItem"},[e.renderSlot(r.$slots,"default",{option:n,selected:l.value},void 0,!0)],8,De))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"pickerMenu",style:e.normalizeStyle({"max-height":Number(c.size)!==0?Number(c.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(y),(n,v)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+n},[typeof n=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:C=>t(n),class:e.normalizeClass(["pickerItem",l.value===n?"active":""])},e.toDisplayString(n),11,Ae)):typeof n=="object"&&n!==null&&c.prop in n?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:C=>t(n),class:e.normalizeClass(["pickerItem",l.value[c.prop]===n[c.prop]||String(n[c.dataprop||c.prop])===String(l.value)?"active":""])},e.toDisplayString(n[c.prop]),11,Re)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:e.withModifiers(C=>t(n),["stop"]),class:e.normalizeClass(["pickerItem",l.value===n?"active":""])},[e.renderSlot(r.$slots,"default",{option:n,selected:l.value},void 0,!0)],10,We))],64))),128))],4)),e.createElementVNode("div",He,[e.createElementVNode("div",Ue,[e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=n=>h.value=n),class:"input",placeholder:"Add New Category"},null,512),[[e.vModelText,h.value]]),e.createElementVNode("button",{type:"button",class:"button tedirCategoryButton",onClick:o[2]||(o[2]=n=>{p("add",h.value),h.value=""})},"Save")])])])])],2))}}),Ze="",Pe=N(Ke,[["__scopeId","data-v-9bd9abf8"]]);b.CategoryBox=Pe,b.ComboBox=Z,b.ListBox=me,b.SelectBox=U,b.TagBox=$e,Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
