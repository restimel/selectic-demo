(function(t){function e(e){for(var n,i,r=e[0],s=e[1],c=e[2],p=0,u=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&u.push(l[i][0]),l[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var r=o[i];0!==l[r]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},l={app:0},a=[];function r(t){return s.p+"js/"+({about:"about",draft:"draft"}[t]||t)+"."+{about:"2e71124c",draft:"a5cb4756"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o={about:1,draft:1};i[t]?e.push(i[t]):0!==i[t]&&o[t]&&e.push(i[t]=new Promise((function(e,o){for(var n="css/"+({about:"about",draft:"draft"}[t]||t)+"."+{about:"4519fca0",draft:"dc702643"}[t]+".css",l=s.p+n,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var c=a[r],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===n||p===l))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],p=c.getAttribute("data-href");if(p===n||p===l)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||l,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete i[t],d.parentNode.removeChild(d),o(a)},d.href=l;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){i[t]=0})));var n=l[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,o){n=l[t]=[e,o]}));e.push(n[2]=a);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=r(t);var u=new Error;c=function(e){p.onerror=p.onload=null,clearTimeout(d);var o=l[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}l[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/selectic-demo/dist/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=p;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"0393":function(t,e,o){"use strict";o("b473")},"0482":function(t,e,o){"use strict";o("5acd")},"09f7":function(t,e,o){},3650:function(t,e,o){},3762:function(t,e,o){},"5acd":function(t,e,o){},6340:function(t,e,o){"use strict";o("3762")},"945b":function(t,e,o){"use strict";o.d(e,"g",(function(){return i})),o.d(e,"i",(function(){return l})),o.d(e,"h",(function(){return a})),o.d(e,"d",(function(){return p})),o.d(e,"j",(function(){return u})),o.d(e,"l",(function(){return d})),o.d(e,"m",(function(){return b})),o.d(e,"k",(function(){return O})),o.d(e,"e",(function(){return h})),o.d(e,"c",(function(){return m})),o.d(e,"f",(function(){return g})),o.d(e,"b",(function(){return f})),o.d(e,"a",(function(){return j}));for(var n=1500,i=new Array(n),l=new Array(n),a=new Array(n),r=" --- short text added",s=" --- this is a long text added to the description which should need scrolling to be readable",c=0;c<n;c++)i[c]={id:c,text:"option #"+c},l[c]={id:"id-"+c,text:'option "'+c+'"'},a[c]={id:"id-"+c,text:'option "'+c+'"'+(c%2?r:s)};var p=[],u=[{id:"alone",text:"The only option"}],d=[{id:0,text:"First option"},{id:1,text:"Second option"},{id:2,text:"Third option"},{id:3,text:"Fourth option"}],b=[{id:"first",text:"First option"},{id:"second",text:"Second option"},{id:"third",text:"Third option"},{id:"fourth",text:"Fourth option"}],O=[{id:"notExclusive1",text:"normal option 1",exclusive:!1},{id:"notExclusive2",text:"normal option 2",exclusive:!1},{id:"exclusive1",text:"exclusive option 1",exclusive:!0},{id:"notExclusive3",text:"normal option 3",exclusive:!1},{id:"exclusive2",text:"exclusive option 2",exclusive:!0}],h=[{id:"shortInt",text:"short with numerical id",options:d},{id:"shortStr",text:"short with string id",options:b},{id:"shortExclusiveOptions",text:"short with exclusive item",options:O},{id:"longInt",text:"long with numerical id",options:i},{id:"longStr",text:"long with string id",options:l},{id:"longStrLong",text:"long list with long description",options:a}],m=[{id:"",text:"no dynamic options"},{id:0,text:"0 items (empty list)"},{id:10,text:"10 items"},{id:100,text:"100 items"},{id:1e3,text:"1000 items"},{id:1e4,text:"10.000 items"},{id:-5,text:"100 items in 5 groups"}],g=[{id:0,text:"no inner element options"},{id:2,text:"2 items"},{id:10,text:"10 items"},{id:-4,text:"20 items in 4 groups"}],f={list0:p,emptyOptions:p,empty:p,list01:u,oneOptions:u,one:u,list1:d,shortNumOptions:d,shortNum:d,list2:i,longNumOptions:i,longNum:i,list3:b,shortStringOptions:b,shortString:b,list4:l,longStringOptions:l,longString:l,longStringLong:a,list5:h,groupOptions:h,group:h,list6:O,exclusive:O},j=new Map([[p,"no items (is empty)"],[u,"only one item (with a string id)"],[d,d.length+" items (with numeric id)"],[i,i.length+" items (with numeric id)"],[b,b.length+" items (with string id)"],[l,l.length+" items (with string id)"],[a,a.length+" items (with string id) and long description"],[h,h.length+" groups with different items (total of 3008 items)"],[O,O.length+" items with some items which have exclusive option (for multiple mode)"]])},b473:function(t,e,o){},cd49:function(t,e,o){"use strict";o.r(e);var n=o("7a23");o("3650");const i=t=>(Object(n["y"])("data-v-281f5811"),t=t(),Object(n["v"])(),t),l={class:"main-header"},a=i(()=>Object(n["g"])("h1",null,"Selectic demonstration",-1)),r=i(()=>Object(n["g"])("p",null," This is a smart select component allowing you to propose static or dynamic selction (for very large list). ",-1)),s={id:"nav"};var c={__name:"App",setup(t){return(t,e)=>{const o=Object(n["C"])("router-link"),i=Object(n["C"])("router-view");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",l,[a,r,Object(n["g"])("div",s,[Object(n["j"])(o,{to:"/"},{default:Object(n["L"])(()=>[Object(n["i"])("Custom Examples")]),_:1}),Object(n["i"])(" | "),Object(n["j"])(o,{to:"/draft"},{default:Object(n["L"])(()=>[Object(n["i"])("Sandbox")]),_:1}),Object(n["i"])(" | "),Object(n["j"])(o,{to:"/about"},{default:Object(n["L"])(()=>[Object(n["i"])("About")]),_:1})])]),Object(n["j"])(i)],64)}}},p=(o("6340"),o("d3bf"),o("6b0d")),u=o.n(p);const d=u()(c,[["__scopeId","data-v-281f5811"]]);var b=d,O=o("6605"),h={class:"home"},m=Object(n["g"])("h1",null,"Selectic custom examples",-1);function g(t,e,o,i,l,a){var r=Object(n["C"])("SelecticParameter");return Object(n["u"])(),Object(n["f"])("div",h,[m,Object(n["j"])(r)])}const f=t=>(Object(n["y"])("data-v-d314045c"),t=t(),Object(n["v"])(),t),j={class:"param"},v=f(()=>Object(n["g"])("legend",null," parameters ",-1)),x=f(()=>Object(n["g"])("br",null,null,-1)),y=f(()=>Object(n["g"])("br",null,null,-1)),w=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),S=f(()=>Object(n["g"])("br",null,null,-1)),E=f(()=>Object(n["g"])("br",null,null,-1)),C=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),P=f(()=>Object(n["g"])("br",null,null,-1)),k=f(()=>Object(n["g"])("summary",null," params ",-1)),D=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),V=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),B=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),$=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),M=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),T=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),L=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),_=["value","title"],F=f(()=>Object(n["g"])("br",null,null,-1)),N=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),A=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),I=f(()=>Object(n["g"])("span",{class:"info",title:"only apply at component creation"},"(at creation)",-1)),J={class:"half"},U=f(()=>Object(n["g"])("hr",null,null,-1)),H={class:"example-section",ref:"exampleSection"},R=f(()=>Object(n["g"])("legend",null," Example ",-1)),G={key:0},q={key:1},K={key:0},z={ref:"exampleContainer"},Q=["value"],W=["value","label"],X=["value"],Y=f(()=>Object(n["g"])("legend",null," HTML ",-1)),Z={class:"result-code"},tt=f(()=>Object(n["g"])("em",null,"(to play with scroll)",-1));function et(t,e,o,i,l,a){const r=Object(n["C"])("Selectic");return Object(n["u"])(),Object(n["f"])("div",j,[Object(n["g"])("fieldset",null,[v,x,Object(n["g"])("label",null,[Object(n["i"])(" options "),Object(n["j"])(r,{value:t.optionType,options:t.optionList,onChange:e[0]||(e[0]=e=>t.optionType=e)},null,8,["value","options"])]),y,Object(n["g"])("label",null,[Object(n["i"])(" Dynamics options "),w,Object(n["j"])(r,{value:t.dynOptionsVal,options:t.dynOptions,onChange:e[1]||(e[1]=e=>t.dynOptionsVal=e)},null,8,["value","options"])]),S,Object(n["g"])("label",null,[Object(n["i"])(" Child element options "),Object(n["j"])(r,{value:t.innerElementOptionsVal,options:t.innerElementOptions,onChange:e[2]||(e[2]=e=>t.innerElementOptionsVal=e)},null,8,["value","options"])]),E,Object(n["g"])("label",null,[Object(n["i"])(" title "),Object(n["M"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=e=>t.optionTitle=e)},null,512),[[n["I"],t.optionTitle]])]),Object(n["g"])("label",null,[Object(n["i"])(" placeholder "),Object(n["M"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=e=>t.optionPlaceholder=e)},null,512),[[n["I"],t.optionPlaceholder]])]),Object(n["g"])("label",null,[Object(n["M"])(Object(n["g"])("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=e=>t.disabled=e)},null,512),[[n["H"],t.disabled]]),Object(n["i"])(" disabled ")]),Object(n["g"])("label",null,[Object(n["M"])(Object(n["g"])("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=e=>t.multiple=e)},null,512),[[n["H"],t.multiple]]),Object(n["i"])(" multiple "),C]),P,Object(n["g"])("details",null,[k,Object(n["g"])("label",null,[Object(n["i"])(" hideFilter "),D,Object(n["j"])(r,{value:t.optionParams.hideFilter,options:[{id:"auto",text:"auto"},{id:!0,text:"true"},{id:!1,text:"false"}],params:{allowClearSelection:!0},onChange:e[7]||(e[7]=e=>t.optionParams.hideFilter=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" allowClearSelection "),V,Object(n["j"])(r,{value:t.optionParams.allowClearSelection,options:[{id:!0,text:"true"},{id:!1,text:"false"}],params:{allowClearSelection:!0},onChange:e[8]||(e[8]=e=>t.optionParams.allowClearSelection=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" autoSelect "),B,Object(n["j"])(r,{value:t.optionParams.autoSelect,options:[{id:!0,text:"true"},{id:!1,text:"false"}],params:{allowClearSelection:!0},onChange:e[9]||(e[9]=e=>t.optionParams.autoSelect=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" autoDisabled "),$,Object(n["j"])(r,{value:t.optionParams.autoDisabled,options:[{id:!0,text:"true"},{id:!1,text:"false"}],params:{allowClearSelection:!0},onChange:e[10]||(e[10]=e=>t.optionParams.autoDisabled=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" strictValue "),M,Object(n["j"])(r,{value:t.optionParams.strictValue,options:[{id:!0,text:"true"},{id:!1,text:"false"}],params:{allowClearSelection:!0},onChange:e[11]||(e[11]=e=>t.optionParams.strictValue=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" selectionOverflow "),T,Object(n["j"])(r,{value:t.optionParams.selectionOverflow,options:[{id:"multiline",text:"multiline"},{id:"collapsed",text:"collapsed"}],params:{allowClearSelection:!0},onChange:e[12]||(e[12]=e=>t.optionParams.selectionOverflow=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" emptyValue "),L,Object(n["g"])("input",{type:"text",value:t.selectionOverflow,class:Object(n["p"])({"has-error":!!t.errorSelectionOverflow}),title:t.errorSelectionOverflow,placeholder:"Enter value in JSON format",onChange:e[13]||(e[13]=e=>t.selectionOverflow=e.currentTarget.value)},null,42,_),F]),Object(n["g"])("label",null,[Object(n["i"])(" allowRevert "),N,Object(n["j"])(r,{value:t.optionParams.allowRevert,options:[{id:!0,text:"true"},{id:!1,text:"false"}],params:{allowClearSelection:!0},onChange:e[14]||(e[14]=e=>t.optionParams.allowRevert=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" listPosition "),A,Object(n["j"])(r,{value:t.optionParams.listPosition,options:[{id:"auto",text:"auto"},{id:"bottom",text:"bottom"},{id:"top",text:"top"}],params:{allowClearSelection:!0},onChange:e[15]||(e[15]=e=>t.optionParams.listPosition=e)},null,8,["value"])]),Object(n["g"])("label",null,[Object(n["i"])(" optionBehavior "),I,Object(n["g"])("div",J,[Object(n["j"])(r,{value:t.optionBehaviorOperation,options:[{id:"sort",text:"sort"},{id:"force",text:"force"}],params:{allowClearSelection:!0},onChange:e[16]||(e[16]=e=>t.optionBehaviorOperation=e)},null,8,["value"]),Object(n["j"])(r,{value:t.optionBehaviorOrder,options:[{id:"ODE",text:"ODE"},{id:"OED",text:"OED"},{id:"DOE",text:"DOE"},{id:"DEO",text:"DEO"},{id:"EOD",text:"EOD"},{id:"EDO",text:"EDO"}],params:{allowClearSelection:!0},onChange:e[17]||(e[17]=e=>t.optionBehaviorOrder=e)},null,8,["value"])])])]),U,Object(n["g"])("button",{onClick:e[18]||(e[18]=(...e)=>t.redraw&&t.redraw(...e))}," Redraw Selectic component ")]),Object(n["g"])("fieldset",H,[R,Object(n["g"])("aside",{class:Object(n["p"])(["example-control",{open:t.expandExampleControl}])},[Object(n["g"])("button",{onClick:e[19]||(e[19]=e=>t.expandExampleControl=!t.expandExampleControl),title:"Expand/reduce extended control menu"},[t.expandExampleControl?(Object(n["u"])(),Object(n["f"])("span",G," - ")):(Object(n["u"])(),Object(n["f"])("span",q," + "))]),t.expandExampleControl?(Object(n["u"])(),Object(n["f"])("section",K,[Object(n["g"])("label",null,[Object(n["M"])(Object(n["g"])("input",{type:"checkbox","onUpdate:modelValue":e[20]||(e[20]=e=>t.showExample=e)},null,512),[[n["H"],t.showExample]]),Object(n["i"])("Show")]),Object(n["g"])("label",null,[Object(n["M"])(Object(n["g"])("input",{type:"checkbox","onUpdate:modelValue":e[21]||(e[21]=e=>t.removeFromDOM=e)},null,512),[[n["H"],t.removeFromDOM]]),Object(n["i"])("remove from DOM")])])):Object(n["e"])("",!0)],2),Object(n["M"])(Object(n["g"])("div",z,[t.draw?(Object(n["u"])(),Object(n["d"])(r,{key:0,class:"example",options:t.options,value:t.optionValue,groups:t.groups,placeholder:t.optionPlaceholder,title:t.optionTitle,multiple:t.multiple,disabled:t.disabled,params:t.optionParams,onChange:e[22]||(e[22]=e=>t.optionValue=e)},{default:Object(n["L"])(()=>[t.innerElementOptionsVal>0?(Object(n["u"])(!0),Object(n["f"])(n["a"],{key:0},Object(n["B"])(t.innerElementOptionList,t=>(Object(n["u"])(),Object(n["f"])("option",{value:t.id,key:t.id},Object(n["F"])(t.text),9,Q))),128)):Object(n["e"])("",!0),t.innerElementOptionsVal<0?(Object(n["u"])(!0),Object(n["f"])(n["a"],{key:1},Object(n["B"])(t.innerElementGroupOptionList,t=>(Object(n["u"])(),Object(n["f"])("optgroup",{value:t.id,label:t.text,key:t.id},[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(t.options,t=>(Object(n["u"])(),Object(n["f"])("option",{value:t.id,key:t.id},Object(n["F"])(t.text),9,X))),128))],8,W))),128)):Object(n["e"])("",!0)]),_:1},8,["options","value","groups","placeholder","title","multiple","disabled","params"])):Object(n["e"])("",!0),Object(n["g"])("label",null,[Object(n["i"])("Selected value: "),Object(n["g"])("output",null,Object(n["F"])(JSON.stringify(t.optionValue)),1)])],512),[[n["J"],t.showExample]])],512),Object(n["g"])("fieldset",null,[Y,Object(n["g"])("pre",Z,Object(n["F"])(t.htmlSelectic),1)]),Object(n["g"])("div",{class:"empty-space",style:Object(n["q"])(`--height-value: ${t.pageSpace}px`)},[Object(n["M"])(Object(n["g"])("input",{type:"range",min:"20",max:"5000","onUpdate:modelValue":e[23]||(e[23]=e=>t.pageSpace=e)},null,512),[[n["I"],t.pageSpace]]),Object(n["i"])(" Space at the end of this page "),tt],4)])}var ot=o("ee45"),nt=o("945b"),it=o("cff9"),lt=Object(n["k"])({name:"Example",data(){return{draw:!0,multiple:!1,disabled:!1,optionValue:null,optionPlaceholder:"",optionTitle:"",selectionOverflow:"",errorSelectionOverflow:"",optionParams:{hideFilter:void 0,allowClearSelection:void 0,autoSelect:void 0,autoDisabled:void 0,strictValue:void 0,selectionOverflow:void 0,allowRevert:void 0,emptyValue:void 0,listPosition:void 0,fetchCallback:void 0,getItemsCallback:void 0,optionBehavior:void 0},optionType:"shortNumOptions",optionList:[{id:"emptyOptions",text:`empty option (${nt["d"].length} items)`,values:nt["d"]},{id:"oneOptions",text:`only one option (${nt["j"].length} items)`,values:nt["j"]},{id:"shortNumOptions",text:`short with numerical id (${nt["l"].length} items)`,values:nt["l"]},{id:"shortStringOptions",text:`short with string id (${nt["m"].length} items)`,values:nt["m"]},{id:"shortExclusiveOptions",text:`short with string id (${nt["k"].length} items) -- some items have exclusive option`,values:nt["k"]},{id:"longNumOptions",text:`long with numerical id (${nt["g"].length} items)`,values:nt["g"]},{id:"longStrOptions",text:`long with string id (${nt["i"].length} items)`,values:nt["i"]},{id:"longStrLongOptions",text:`long with string id (${nt["h"].length} items) with long description`,values:nt["h"]},{id:"groupOptions",text:`with groups (${nt["e"].length} groups)`,values:nt["e"]}],groups:void 0,dynOptionsVal:"",dynOptions:nt["c"],innerElementOptions:nt["f"],innerElementOptionsVal:0,optionBehaviorOperation:"",optionBehaviorOrder:"",pageSpace:20,expandExampleControl:!1,showExample:!0,removeFromDOM:!1}},computed:{options(){const t=this.optionType,e=this.optionList.find(e=>e.id===t);return e&&e.values||[]},innerElementOptionList(){const t=this.innerElementOptionsVal;if(t>0){const e=[];for(let o=0;o<t;o++)e.push({id:"element-"+o,text:"Element #"+o});return e}return[]},innerElementGroupOptionList(){const t=this.innerElementOptionsVal;if(t<0){const e=[];for(let o=0;o<-t;o++){const t=[];for(let e=0;e<5;e++){const n=5*o+e;t.push({id:"element-"+n,text:"Element #"+n})}e.push({id:"group-"+o,text:"Group #"+o,options:t})}return e}return[]},htmlSelectic(){const t=[`:value="${JSON.stringify(this.optionValue).replace(/"/g,"'")}"`,`:options="${this.optionType}"`];this.groups&&t.push(`:groups="${JSON.stringify(this.groups)}"`),this.optionPlaceholder&&t.push(`:placeholder="${this.optionPlaceholder}"`),this.optionTitle&&t.push(`:title="${this.optionTitle}"`),this.disabled&&t.push("disabled"),this.multiple&&t.push("multiple");const e=Object.keys(this.optionParams).reduce((t,e)=>{const o=this.optionParams[e];if(void 0!==o&&null!==o){let n=o;"string"===typeof o&&(n=`'${o}'`),"fetchCallback"===e&&(n="fetchOptionsCb"),"getItemsCallback"===e&&(n="fetchIdsCb"),t.push(`    ${e}: ${n},`)}return t},[]);e.length&&t.push("",':params="{',...e,'}"');let o="/>",n="";const i=this.innerElementOptionsVal;if(i){if(n=[">"],o="</Selectic>",i>0)for(let t=0;t<i;t++){const e=t,o="Element #"+t;n.push("    <option",`        :value="${e}"`,"    >","        "+o,"    </option>")}else{const t=-i;for(let e=0;e<t;e++){const t="group"+e,o="Group #"+e;n.push("    <optgroup",`        :value="${t}"`,`        label="${o}"`,"    >");for(let i=0;i<5;i++){const t=5*e+i,o="Element #"+t;n.push("        <option",`            :value="${t}"`,"        >","            "+o,"        </option>")}n.push("    </optgroup>")}}n=n.join("\n")}const l=["<Selectic",...t.map(t=>"    "+t),n,o];return l.join("\n")}},methods:{redraw(){this.draw=!1,setTimeout(()=>{this.draw=!0},10)},buildOptionBehavior(){const t=this.optionBehaviorOrder,e=this.optionBehaviorOperation;t&&e?this.optionParams.optionBehavior=`${e}-${t}`:(this.optionBehaviorOrder="",this.optionBehaviorOperation="",this.optionParams.optionBehavior=void 0)},manageExampleDOM(){const t=this.$refs.exampleContainer,e=this.$refs.exampleSection;this.removeFromDOM?e.removeChild(t):e.append(t)}},watch:{"optionParams.selectionOverflow"(){this.selectionOverflow=JSON.stringify(this.optionParams.selectionOverflow)},selectionOverflow(){try{this.optionParams.selectionOverflow=JSON.parse(this.selectionOverflow)}catch(t){return void(this.errorSelectionOverflow=t.message)}this.errorSelectionOverflow=""},dynOptionsVal(){const t=this.dynOptionsVal;if(""===t)this.optionParams.fetchCallback=void 0,this.optionParams.getItemsCallback=void 0;else if(this.optionParams.fetchCallback=Object(it["a"])(t),this.optionParams.getItemsCallback=Object(it["b"])(t),t<0){const e=-t,o=new Array(e);for(let t=0;t<e;t++)o[t]={id:"group"+t,text:"group #"+t};this.groups=o}else this.groups=void 0},optionBehaviorOrder(){this.optionBehaviorOperation||(this.optionBehaviorOperation="sort"),this.buildOptionBehavior()},optionBehaviorOperation(){this.optionBehaviorOrder||(this.optionBehaviorOrder="ODE"),this.buildOptionBehavior()},removeFromDOM(){this.manageExampleDOM()}},mounted(){this.manageExampleDOM()},components:{Selectic:ot["a"]}});o("0482");const at=u()(lt,[["render",et],["__scopeId","data-v-d314045c"]]);var rt=at,st=Object(n["k"])({name:"Home",components:{SelecticParameter:rt}});o("0393");const ct=u()(st,[["render",g]]);var pt=ct,ut=[{path:"/",name:"CustomExamples",component:pt},{path:"/draft",name:"Sandbox",component:function(){return o.e("draft").then(o.bind(null,"55c7"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],dt=Object(O["a"])({history:Object(O["b"])(),routes:ut}),bt=dt;Object(n["c"])(b).use(bt).mount("#app")},cff9:function(t,e,o){"use strict";o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return s}));var n=o("9ab4");function i(t){return new Promise((function(e){setTimeout(e,t)}))}function l(t){var e=t.toString().split("-"),o=e[0],n=e[1];return"dyn"!==o?-1:+n}var a=20;function r(t,e){void 0===e&&(e=0);var o=Math.abs(t);t<0&&(o*=a);var l=function(l,r,s){return Object(n["a"])(this,void 0,Promise,(function(){var c,p,u,d,b,O,h;return Object(n["b"])(this,(function(n){switch(n.label){case 0:if(c=o,p=[],u=null,l){for(u=[],d=new RegExp(l.replace(/([-+\[\]\(\){}?^$.])/g,"$1").replace(/[*]/g,".*"),"i"),b=r;b<o;b++)O="Dynamic option: "+b,d.test(O)&&(h={id:"dyn-"+b,text:O},t<0&&(h.group="group"+Math.floor(b/a)),u.push(h));c=u.length}if(r<c)for(b=r;b<c&&b<r+s;b++)l&&u?p.push(u[b-r]):(O="Dynamic option: "+b,h={id:"dyn-"+b,text:O},t<0&&(h.group="group"+Math.floor(b/a)),p.push(h));return e?[4,i(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,{total:c,result:p}]}}))}))};return l}function s(t,e){void 0===e&&(e=0);var o=Math.abs(t);return function(t){return Object(n["a"])(this,void 0,void 0,(function(){var a;return Object(n["b"])(this,(function(n){switch(n.label){case 0:return a=t.reduce((function(t,e){if(!e)return t;var n=l(e);return n>=0&&n<o&&t.push({id:e,text:"Dynamic option: "+e}),t}),[]),e?[4,i(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,a]}}))}))}}},d3bf:function(t,e,o){"use strict";o("09f7")}});
//# sourceMappingURL=app.d80802b5.js.map