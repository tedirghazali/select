(function(m,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(m=typeof globalThis!="undefined"?globalThis:m||self,e(m.TedirSelect={},m.Vue))})(this,function(m,e){"use strict";var le="",y=(l,r)=>{const u=l.__vccOpts||l;for(const[n,d]of r)u[n]=d;return u};const g={class:"pickerContent"},B={class:"pickerMenu"},C={class:"pickerWrap"},b=["onClick"],E={class:"check"},N=["checked","id","onChange"],S=["for"],$=["onClick"],x={class:"check"},I=["checked","id","onChange"],z=["for"],j=["onClick"],L=["onClick"],w=["onClick"],D=["onClick"];var O=y(e.defineComponent({props:{modelValue:{default:null},options:{default:[]},prop:{default:"value"},placeholder:{default:"-- Select option --"},size:{default:0}},emits:["update:modelValue"],setup(l,{emit:r}){const u=l,n=e.ref(!1),d=e.ref(""),f=e.computed(()=>{let t=u.options;return d.value.length>=1&&(t=t.filter(o=>{if(isNaN(o)===!1&&Number(o)===Number(d.value))return!0;if(typeof o=="string"&&o.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof o=="object"&&o!==null&&Object.prototype.toString.call(o)==="[object Object]")for(const a of Object.keys(o)){if(isNaN(o[a])===!1&&Number(o[a])===Number(d.value))return!0;if(typeof o[a]=="string"&&o[a].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),t}),s=((t=10)=>{let o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a="";for(let i=0;i<t;i++)a+=o.charAt(Math.floor(Math.random()*o.length));return a})(),c=t=>{t.target.style.display="none",n.value=!1};return(t,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion",n.value?"active":""])},[(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:n.value?"block":"none"}),onClick:c},null,4)])),e.createElementVNode("div",g,[e.createElementVNode("div",{class:"select pickerToggler",onClick:o[0]||(o[0]=a=>n.value=!n.value)},[typeof l.modelValue=="string"&&l.modelValue!==""?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(l.modelValue),1)],64)):typeof l.modelValue=="object"&&l.prop in l.modelValue?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(l.modelValue[l.prop]),1)],64)):Array.isArray(l.modelValue)&&l.modelValue.length>=1&&typeof l.modelValue[0]=="string"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.createTextVNode(e.toDisplayString(l.modelValue.join(", ")),1)],64)):Array.isArray(l.modelValue)&&l.modelValue.length>=1&&typeof l.modelValue[0]=="object"&&l.prop in l.modelValue[0]?(e.openBlock(),e.createElementBlock(e.Fragment,{key:3},[e.createTextVNode(e.toDisplayString(l.modelValue.map(a=>a[l.prop]).join(", ")),1)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:4},[e.createTextVNode(e.toDisplayString(l.placeholder),1)],64))]),e.createElementVNode("div",B,[e.createElementVNode("div",C,[e.withDirectives(e.createElementVNode("input",{type:"search","onUpdate:modelValue":o[1]||(o[1]=a=>d.value=a),class:"input"},null,512),[[e.vModelText,d.value]])]),Array.isArray(l.modelValue)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"pickerGroup",style:e.normalizeStyle({"max-height":Number(l.size)!==0?Number(l.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f),(a,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+a},[typeof a=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:h=>{l.modelValue.includes(a)?l.modelValue.splice(l.modelValue.findIndex(k=>k===a),1):l.modelValue.push(a),r("update:modelValue",l.modelValue)},class:"pickerItem"},[e.createElementVNode("div",E,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.modelValue.includes(a),id:"check-"+(e.unref(s)+String(i)),onChange:h=>{l.modelValue.includes(a)?l.modelValue.splice(l.modelValue.findIndex(k=>k===a),1):l.modelValue.push(a),r("update:modelValue",l.modelValue)}},null,40,N),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(s)+String(i))},e.toDisplayString(a),9,S)])],8,b)):typeof a=="object"&&l.prop in a?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:h=>{l.modelValue.includes(a)?l.modelValue.splice(l.modelValue.findIndex(k=>k[l.prop]===a[l.prop]),1):l.modelValue.push(a),r("update:modelValue",l.modelValue)},class:"pickerItem"},[e.createElementVNode("div",x,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.modelValue.includes(a),id:"check-"+(e.unref(s)+String(i)),onChange:h=>{l.modelValue.includes(a)?l.modelValue.splice(l.modelValue.findIndex(k=>k[l.prop]===a[l.prop]),1):l.modelValue.push(a),r("update:modelValue",l.modelValue)}},null,40,I),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(s)+String(i))},e.toDisplayString(a[l.prop]),9,z)])],8,$)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:h=>{l.modelValue.includes(a)?l.modelValue.splice(l.modelValue.findIndex(k=>k===a),1):l.modelValue.push(a),r("update:modelValue",l.modelValue)},class:"pickerItem"},[e.renderSlot(t.$slots,"default",{option:a,items:l.modelValue},void 0,!0)],8,j))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"pickerGroup",style:e.normalizeStyle({"max-height":Number(l.size)!==0?Number(l.size)*42+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f),(a,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+a},[typeof a=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:h=>{r("update:modelValue",a),n.value=!1},class:e.normalizeClass(["pickerItem",l.modelValue===a?"active":""])},e.toDisplayString(a),11,L)):typeof a=="object"&&l.prop in a?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:h=>{r("update:modelValue",a),n.value=!1},class:e.normalizeClass(["pickerItem",l.modelValue[l.prop]===a[l.prop]?"active":""])},e.toDisplayString(a[l.prop]),11,w)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:h=>{r("update:modelValue",a),n.value=!1},class:e.normalizeClass(["pickerItem",l.modelValue===a?"active":""])},[e.renderSlot(t.$slots,"default",{option:a},void 0,!0)],10,D))],64))),128))],4))])])],2))}}),[["__scopeId","data-v-59d05f18"]]),ae="";const F={class:"pickerContent"},T={class:"pickerMenu pickerSizing"},M=["onClick"],A=["onClick"],G=["onClick"];var U=y(e.defineComponent({props:{modelValue:{default:null},options:{default:[]},prop:{default:"value"},placeholder:{default:"-- combo option --"},size:{default:0}},emits:["update:modelValue"],setup(l,{emit:r}){const u=l,n=e.ref(!1),d=e.ref(""),f=e.computed(()=>{let s=u.options;return d.value.length>=1&&(s=s.filter(c=>{if(isNaN(c)===!1&&Number(c)===Number(d.value))return!0;if(typeof c=="string"&&c.toLowerCase().includes(d.value.toLowerCase()))return!0;if(typeof c=="object"&&c!==null&&Object.prototype.toString.call(c)==="[object Object]")for(const t of Object.keys(c)){if(isNaN(c[t])===!1&&Number(c[t])===Number(d.value))return!0;if(typeof c[t]=="string"&&c[t].toLowerCase().includes(d.value.toLowerCase()))return!0}return!1})),s}),V=s=>{s.target.style.display="none",n.value=!1};return(s,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["picker suggestion",n.value?"active":""])},[(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",{class:"pickerBackdrop",style:e.normalizeStyle({display:n.value?"block":"none"}),onClick:V},null,4)])),e.createElementVNode("div",F,[e.withDirectives(e.createElementVNode("input",{type:"search","onUpdate:modelValue":c[0]||(c[0]=t=>d.value=t),onInput:c[1]||(c[1]=t=>e.unref(f).length>=1&&d.value!==""?n.value=!0:n.value=!1),onClick:c[2]||(c[2]=t=>e.unref(f).length>=1&&d.value!==""?n.value=!0:n.value=!1),class:"input"},null,544),[[e.vModelText,d.value]]),e.createElementVNode("div",T,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f),(t,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:a=>{d.value=t,r("update:modelValue",t),n.value=!1},class:e.normalizeClass(["pickerItem",l.modelValue===t?"active":""])},e.toDisplayString(t),11,M)):typeof t=="object"&&l.prop in t?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:a=>{d.value=t[l.prop],r("update:modelValue",t),n.value=!1},class:e.normalizeClass(["pickerItem",l.modelValue[l.prop]===t[l.prop]?"active":""])},e.toDisplayString(t[l.prop]),11,A)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:a=>{d.value=t,r("update:modelValue",t),n.value=!1},class:e.normalizeClass(["pickerItem",l.modelValue===t?"active":""])},[e.renderSlot(s.$slots,"default",{option:t},void 0,!0)],10,G))],64))),128))])])],2))}}),[["__scopeId","data-v-0ad3c4e4"]]),ne="";const R={class:"list"},W={class:"listWrap"},q=["onClick"],P={class:"check"},H=["checked","id","onChange"],J=["for"],K=["onClick"],Q={class:"check"},X=["checked","id","onChange"],Y=["for"],Z=["onClick"],p=["onClick"],v=["onClick"],_=["onClick"];var ee=y(e.defineComponent({props:{modelValue:{default:null},options:{default:[]},prop:{default:"value"},size:{default:0}},emits:["update:modelValue"],setup(l,{emit:r}){const u=l,n=e.ref(""),d=e.computed(()=>{let s=u.options;return n.value.length>=1&&(s=s.filter(c=>{if(isNaN(c)===!1&&Number(c)===Number(n.value))return!0;if(typeof c=="string"&&c.toLowerCase().includes(n.value.toLowerCase()))return!0;if(typeof c=="object"&&c!==null&&Object.prototype.toString.call(c)==="[object Object]")for(const t of Object.keys(c)){if(isNaN(c[t])===!1&&Number(c[t])===Number(n.value))return!0;if(typeof c[t]=="string"&&c[t].toLowerCase().includes(n.value.toLowerCase()))return!0}return!1})),s}),V=(()=>{let s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",c="";for(let t=0;t<10;t++)c+=s.charAt(Math.floor(Math.random()*s.length));return c})();return(s,c)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",R,[e.createElementVNode("div",W,[e.withDirectives(e.createElementVNode("input",{type:"search","onUpdate:modelValue":c[0]||(c[0]=t=>n.value=t),class:"input"},null,512),[[e.vModelText,n.value]])]),Array.isArray(l.modelValue)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"listGroup",style:e.normalizeStyle({"max-height":Number(l.size)!==0?Number(l.size)*44+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(t,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(a=>{l.modelValue.includes(t)?l.modelValue.splice(l.modelValue.findIndex(i=>i===t),1):l.modelValue.push(t),r("update:modelValue",l.modelValue)},["stop"]),class:"listItem"},[e.createElementVNode("div",P,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.modelValue.includes(t),id:"check-"+(e.unref(V)+String(o)),onChange:a=>{l.modelValue.includes(t)?l.modelValue.splice(l.modelValue.findIndex(i=>i===t),1):l.modelValue.push(t),r("update:modelValue",l.modelValue)}},null,40,H),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(V)+String(o))},e.toDisplayString(t),9,J)])],8,q)):typeof t=="object"&&l.prop in t?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(a=>{l.modelValue.includes(t)?l.modelValue.splice(l.modelValue.findIndex(i=>i[l.prop]===t[l.prop]),1):l.modelValue.push(t),r("update:modelValue",l.modelValue)},["stop"]),class:"listItem"},[e.createElementVNode("div",Q,[e.createElementVNode("input",{type:"checkbox",class:"checkInput",checked:l.modelValue.includes(t),id:"check-"+(e.unref(V)+String(o)),onChange:a=>{l.modelValue.includes(t)?l.modelValue.splice(l.modelValue.findIndex(i=>i[l.prop]===t[l.prop]),1):l.modelValue.push(t),r("update:modelValue",l.modelValue)}},null,40,X),e.createElementVNode("label",{class:"checkLabel",for:"check-"+(e.unref(V)+String(o))},e.toDisplayString(t[l.prop]),9,Y)])],8,K)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:a=>{l.modelValue.includes(t)?l.modelValue.splice(l.modelValue.findIndex(i=>i===t),1):l.modelValue.push(t),r("update:modelValue",l.modelValue)},class:e.normalizeClass(["listItem",l.modelValue.includes(t)?"active":""])},[e.renderSlot(s.$slots,"default",{option:t,items:l.modelValue},void 0,!0)],10,Z))],64))),128))],4)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"listGroup",style:e.normalizeStyle({"max-height":Number(l.size)!==0?Number(l.size)*44+"px":"auto"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(t,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:"option-"+t},[typeof t=="string"?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:a=>{r("update:modelValue",t)},class:e.normalizeClass(["listItem",l.modelValue===t?"active":""])},e.toDisplayString(t),11,p)):typeof t=="object"&&l.prop in t?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:a=>{r("update:modelValue",t)},class:e.normalizeClass(["listItem",l.modelValue[l.prop]===t[l.prop]?"active":""])},e.toDisplayString(t[l.prop]),11,v)):(e.openBlock(),e.createElementBlock("div",{key:2,onClick:a=>{r("update:modelValue",t)},class:e.normalizeClass(["listItem",l.modelValue===t?"active":""])},[e.renderSlot(s.$slots,"default",{option:t},void 0,!0)],10,_))],64))),128))],4))])]))}}),[["__scopeId","data-v-3b073a2f"]]);m.ComboBox=U,m.ListBox=ee,m.SelectBox=O,Object.defineProperty(m,"__esModule",{value:!0}),m[Symbol.toStringTag]="Module"});
