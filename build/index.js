(window.webpackJsonp_mortgage=window.webpackJsonp_mortgage||[]).push([[4],{15:function(e,t,a){}}]),function(e){function t(t){for(var l,o,c=t[0],u=t[1],m=t[2],i=0,s=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(b&&b(t);s.length;)s.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(l=!1)}l&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},r={2:0},n=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(a,l,function(t){return e[t]}.bind(null,l));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp_mortgage=window.webpackJsonp_mortgage||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var b=u;n.push([17,4]),a()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)&&l.length){var o=r.apply(null,l);o&&e.push(o)}else if("object"===n)for(var c in l)a.call(l,c)&&l[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()},,,,function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,a.apply(this,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},,function(e){e.exports=JSON.parse('{"apiVersion":"2","name":"mortgage/form","title":"Mortgage","category":"widgets","icon":"calculator","description":"A block to generate a very simple and easy to use mortgage calculator form.","textdomain":"mortgage","supports":{"html":false,"className":true},"attributes":{"label":{"type":"object","default":{"amount":"Amount","rate":"Rate","term":"Term","frequency":"Payment frequency"}},"defaults":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"placeholder":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"help":{"type":"object","default":{"amount":"","rate":"","term":"","frequency":""}},"button":{"type":"string","default":"Calculate"},"currency":{"type":"string","default":"$"},"showTable":{"type":"boolean","default":false},"yearSummary":{"type":"boolean","default":false},"asRow":{"type":"boolean","default":false},"boldedLabel":{"type":"boolean","default":true}},"editorScript":"file:../../build/index.js","style":"file:../../build/style-index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":"2","name":"mortgage/duration","title":"Mortgage duration","category":"widgets","icon":"calculator","description":"A block to generate a very simple and easy to use mortgage calculator form.","textdomain":"mortgage","supports":{"html":false,"className":false},"attributes":{"label":{"type":"object","default":{"amount":"Amount","rate":"Rate","term":"Term","frequency":"Payment frequency"}},"defaults":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"placeholder":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"help":{"type":"object","default":{"amount":"","rate":"","term":"","frequency":""}},"button":{"type":"string","default":"Calculate"},"currency":{"type":"string","default":"$"},"yearSummary":{"type":"boolean","default":false},"asRow":{"type":"boolean","default":false},"boldedLabel":{"type":"boolean","default":true}},"editorScript":"file:../../build/duration.js","style":"file:../../build/style-index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":"2","name":"mortgage/rates","title":"Mortgage rates comparison","category":"widgets","icon":"calculator","description":"A block to generate a very simple and easy to use mortgage calculator form.","textdomain":"mortgage","supports":{"html":false,"className":false},"attributes":{"label":{"type":"object","default":{"amount":"Amount","rate":"Rate","term":"Term","increment":"Increment"}},"defaults":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"increment":1}},"placeholder":{"type":"object","default":{"amount":10000,"rate":4,"term":10}},"help":{"type":"object","default":{"amount":"","rate":"","term":"","increment":""}},"button":{"type":"string","default":"Calculate"},"currency":{"type":"string","default":"$"},"yearSummary":{"type":"boolean","default":false},"asRow":{"type":"boolean","default":false},"boldedLabel":{"type":"boolean","default":true}},"editorScript":"file:../../build/rates.js","style":"file:../../build/style-index.css"}')},,,function(e,t,a){"use strict";a.r(t);var l=a(9),r=a(1),n=(a(15),a(8)),o=a.n(n),c=a(0),u=a(2),m=a(3),b=a(4),i=a.n(b);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=["core/bold","core/italic","core/link"],g=a(10),O=a.n(g),h=a(12),j=h.name,f=h.attributes;function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(l.registerBlockType)(j,{apiVersion:2,title:Object(r.__)("Mortgage","mortgage"),description:Object(r.__)("A block to generate a very simple and easy to use mortgage calculator form.","mortgage"),category:"widgets",attributes:f,edit:function(e){var t=e.attributes,a=e.setAttributes,l=(e.className,Object(u.useBlockProps)());return l.className=i()(l.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel}),Object(c.createElement)("div",l,Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Form Options","mortgage"),initialOpen:!0},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Button text","mortgage"),value:t.button,onChange:function(e){return a({button:e})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Show table","mortgage"),checked:t.showTable,onChange:function(e){return a({showTable:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Show year summary","mortgage"),checked:t.yearSummary,onChange:function(e){return a({yearSummary:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Display label on side","mortgage"),checked:t.asRow,onChange:function(e){return a({asRow:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Bolded label","mortgage"),checked:t.boldedLabel,onChange:function(e){return a({boldedLabel:e})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Labels","mortgage"),initialOpen:!1},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Amount Label","mortgage"),value:t.label.amount,onChange:function(e){return a({label:p(p({},t.label),{},{amount:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Rate Label","mortgage"),value:t.label.rate,onChange:function(e){return a({label:p(p({},t.label),{},{rate:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Term Label","mortgage"),value:t.label.term,onChange:function(e){return a({label:p(p({},t.label),{},{term:e})})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Default Values","mortgage"),initialOpen:!1},Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Amount Default Value","mortgage"),value:t.defaults.amount,onChange:function(e){return a({defaults:p(p({},t.defaults),{},{amount:e})})}}),Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Rate Default Value","mortgage"),value:t.defaults.rate,onChange:function(e){return a({defaults:p(p({},t.defaults),{},{rate:e})})}}),Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Term Default Value","mortgage"),value:t.defaults.term,onChange:function(e){return a({defaults:p(p({},t.defaults),{},{term:e})})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Placeholder Options","mortgage"),initialOpen:!1},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Amount Placeholder","mortgage"),value:t.placeholder.amount,onChange:function(e){return a({placeholder:p(p({},t.placeholder),{},{amount:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Rate Placeholder","mortgage"),value:t.placeholder.rate,onChange:function(e){return a({placeholder:p(p({},t.placeholder),{},{rate:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Term Placeholder","mortgage"),value:t.placeholder.term,onChange:function(e){return a({placeholder:p(p({},t.placeholder),{},{term:e})})}}))),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.amount,onChange:function(e){a({label:p(p({},t.label),{},{amount:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.amount,disabled:!0,value:t.defaults.amount}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.amount,onChange:function(e){a({help:p(p({},t.help),{},{amount:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:d,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.rate,onChange:function(e){a({label:p(p({},t.label),{},{rate:e})})},placeholder:Object(r.__)("Rate","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.rate,disabled:!0,value:t.defaults.rate}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.rate,onChange:function(e){a({help:p(p({},t.help),{},{rate:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:d,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.term,onChange:function(e){a({label:p(p({},t.label),{},{term:e})})},placeholder:Object(r.__)("Term","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.term,disabled:!0,value:t.defaults.term}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.term,onChange:function(e){a({help:p(p({},t.help),{},{term:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:d,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.frequency,onChange:function(e){a({label:p(p({},t.label),{},{frequency:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("select",{name:"frequency"},Object(c.createElement)("option",{value:"12"},Object(r.__)("Monthly","mortgage")),Object(c.createElement)("option",{value:"6"},Object(r.__)("Bi-Monthly","mortgage")),Object(c.createElement)("option",{value:"4"},Object(r.__)("Quarterly","mortgage")),Object(c.createElement)("option",{value:"2"},Object(r.__)("Semi-annually","mortgage"))),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.frequency,onChange:function(e){a({help:p(p({},t.help),{},{frequency:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:d,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)("button",null,t.button)))},save:function(e){var t=e.attributes,a=(e.className,u.useBlockProps.save());return a.className=i()(a.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel}),Object(c.createElement)("form",O()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary,"data-showTable":t.showTable}),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.amount}),Object(c.createElement)("input",{type:"number",name:"amount",min:"0",required:!0,value:t.defaults.amount,placeholder:t.placeholder.amount}),t.help.amount&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.amount})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.rate}),Object(c.createElement)("input",{type:"number",name:"rate",min:"0",step:"0.01",required:!0,value:t.defaults.rate,placeholder:t.placeholder.rate}),t.help.rate&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.rate})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.term}),Object(c.createElement)("input",{type:"number",name:"term",min:"0",required:!0,value:t.defaults.term,placeholder:t.placeholder.term}),t.help.term&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.term})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.frequency}),Object(c.createElement)("select",{name:"frequency"},Object(c.createElement)("option",{value:"12"},Object(r.__)("Monthly","mortgage")),Object(c.createElement)("option",{value:"6"},Object(r.__)("Bi-Monthly","mortgage")),Object(c.createElement)("option",{value:"4"},Object(r.__)("Quarterly","mortgage")),Object(c.createElement)("option",{value:"2"},Object(r.__)("Semi-annually","mortgage"))),t.help.frequency&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.frequency})),Object(c.createElement)("div",null,Object(c.createElement)("button",{className:"mortgage-btn"},t.button)))}});var E=["core/bold","core/italic","core/link"],_=a(13),C=_.name,w=_.attributes;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(l.registerBlockType)(C,{category:"widgets",attributes:w,edit:function(e){var t=e.attributes,a=e.setAttributes,l=(e.className,Object(u.useBlockProps)());return l.className=i()(l.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel,"wp-block-mortgage-form":!0}),Object(c.createElement)("div",l,Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Form Options","mortgage"),initialOpen:!0},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Button text","mortgage"),value:t.button,onChange:function(e){return a({button:e})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Display label on side","mortgage"),checked:t.asRow,onChange:function(e){return a({asRow:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Bolded label","mortgage"),checked:t.boldedLabel,onChange:function(e){return a({boldedLabel:e})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Labels","mortgage"),initialOpen:!1},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Amount Label","mortgage"),value:t.label.amount,onChange:function(e){return a({label:v(v({},t.label),{},{amount:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Rate Label","mortgage"),value:t.label.rate,onChange:function(e){return a({label:v(v({},t.label),{},{rate:e})})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Default Values","mortgage"),initialOpen:!1},Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Amount Default Value","mortgage"),value:t.defaults.amount,onChange:function(e){return a({defaults:v(v({},t.defaults),{},{amount:e})})}}),Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Rate Default Value","mortgage"),value:t.defaults.rate,onChange:function(e){return a({defaults:v(v({},t.defaults),{},{rate:e})})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Placeholder Options","mortgage"),initialOpen:!1},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Amount Placeholder","mortgage"),value:t.placeholder.amount,onChange:function(e){return a({placeholder:v(v({},t.placeholder),{},{amount:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Rate Placeholder","mortgage"),value:t.placeholder.rate,onChange:function(e){return a({placeholder:v(v({},t.placeholder),{},{rate:e})})}}))),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.amount,onChange:function(e){a({label:v(v({},t.label),{},{amount:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.amount,disabled:!0,value:t.defaults.amount}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.amount,onChange:function(e){a({help:v(v({},t.help),{},{amount:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:E,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.rate,onChange:function(e){a({label:v(v({},t.label),{},{rate:e})})},placeholder:Object(r.__)("Rate","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.rate,disabled:!0,value:t.defaults.rate}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.rate,onChange:function(e){a({help:v(v({},t.help),{},{rate:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:E,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)("button",null,t.button)))},save:function(e){var t=e.attributes,a=(e.className,u.useBlockProps.save());return a.className=i()(a.className,{"wp-block-mortgage-form":!0,"as-row":t.asRow,"bolded-label":t.boldedLabel}),Object(c.createElement)("form",O()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary}),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.amount}),Object(c.createElement)("input",{type:"number",name:"amount",min:"0",required:!0,value:t.defaults.amount,placeholder:t.placeholder.amount}),t.help.amount&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.amount})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.rate}),Object(c.createElement)("input",{type:"number",name:"rate",min:"0",step:"0.01",required:!0,value:t.defaults.rate,placeholder:t.placeholder.rate}),t.help.rate&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.rate})),Object(c.createElement)("div",null,Object(c.createElement)("button",{className:"mortgage-btn"},t.button)))}});var P=["core/bold","core/italic","core/link"],N=a(14),R=N.name,k=N.attributes;Object(l.registerBlockType)(R,{category:"widgets",attributes:k,edit:function(e){var t=e.attributes,a=e.setAttributes,l=(e.className,Object(u.useBlockProps)());return l.className=i()(l.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel,"wp-block-mortgage-form":!0}),Object(c.createElement)("div",l,Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Form Options","mortgage"),initialOpen:!0},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Button text","mortgage"),value:t.button,onChange:function(e){return a({button:e})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Display label on side","mortgage"),checked:t.asRow,onChange:function(e){return a({asRow:e})}}),Object(c.createElement)(m.ToggleControl,{label:Object(r.__)("Bolded label","mortgage"),checked:t.boldedLabel,onChange:function(e){return a({boldedLabel:e})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Labels","mortgage"),initialOpen:!1},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Amount Label","mortgage"),value:t.label.amount,onChange:function(e){return a({label:T(T({},t.label),{},{amount:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Rate Label","mortgage"),value:t.label.rate,onChange:function(e){return a({label:T(T({},t.label),{},{rate:e})})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Default Values","mortgage"),initialOpen:!1},Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Amount Default Value","mortgage"),value:t.defaults.amount,onChange:function(e){return a({defaults:T(T({},t.defaults),{},{amount:e})})}}),Object(c.createElement)(m.__experimentalNumberControl,{label:Object(r.__)("Rate Default Value","mortgage"),value:t.defaults.rate,onChange:function(e){return a({defaults:T(T({},t.defaults),{},{rate:e})})}})),Object(c.createElement)(m.PanelBody,{title:Object(r.__)("Placeholder Options","mortgage"),initialOpen:!1},Object(c.createElement)(m.TextControl,{label:Object(r.__)("Amount Placeholder","mortgage"),value:t.placeholder.amount,onChange:function(e){return a({placeholder:T(T({},t.placeholder),{},{amount:e})})}}),Object(c.createElement)(m.TextControl,{label:Object(r.__)("Rate Placeholder","mortgage"),value:t.placeholder.rate,onChange:function(e){return a({placeholder:T(T({},t.placeholder),{},{rate:e})})}}))),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.amount,onChange:function(e){a({label:T(T({},t.label),{},{amount:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.amount,disabled:!0,value:t.defaults.amount}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.amount,onChange:function(e){a({help:T(T({},t.help),{},{amount:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:P,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.term,onChange:function(e){a({label:T(T({},t.label),{},{term:e})})},placeholder:Object(r.__)("Term","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.term,disabled:!0,value:t.defaults.term}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.term,onChange:function(e){a({help:T(T({},t.help),{},{term:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:P,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.rate,onChange:function(e){a({label:T(T({},t.label),{},{rate:e})})},placeholder:Object(r.__)("Rate","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.rate,disabled:!0,value:t.defaults.rate}),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.rate,onChange:function(e){a({help:T(T({},t.help),{},{rate:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:P,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText,{tagName:"label",value:t.label.increment,onChange:function(e){a({label:T(T({},t.label),{},{increment:e})})},placeholder:Object(r.__)("Increment","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(c.createElement)("select",{disabled:!0},Object(c.createElement)("option",null,"Select rate")),Object(c.createElement)(u.RichText,{tagName:"small",value:t.help.increment,onChange:function(e){a({help:T(T({},t.help),{},{increment:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:P,keepPlaceholderOnFocus:!0})),Object(c.createElement)("div",null,Object(c.createElement)("button",null,t.button)))},save:function(e){var t=e.attributes,a=(e.className,u.useBlockProps.save());return a.className=i()(a.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel,"wp-block-mortgage-form":!0}),Object(c.createElement)("form",O()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary}),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.amount}),Object(c.createElement)("input",{type:"number",name:"amount",min:"0",required:!0,value:t.defaults.amount,placeholder:t.placeholder.amount}),t.help.amount&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.amount})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.term}),Object(c.createElement)("input",{type:"number",name:"term",min:"0",step:"1",required:!0,value:t.defaults.term,placeholder:t.placeholder.term}),t.help.term&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.term})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.rate}),Object(c.createElement)("input",{type:"number",name:"rate",min:"0",step:"0.01",required:!0,value:t.defaults.rate,placeholder:t.placeholder.rate}),t.help.rate&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:t.help.rate})),Object(c.createElement)("div",null,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:t.label.increment}),Object(c.createElement)("select",{name:"increment"},Object(c.createElement)("option",{value:"0.125"},"1/8%"),Object(c.createElement)("option",{value:"0.250"},"1/4%"),Object(c.createElement)("option",{value:"0.375"},"3/8%"),Object(c.createElement)("option",{value:"0.5"},"1/2%"),Object(c.createElement)("option",{value:"0.625"},"5/8%"),Object(c.createElement)("option",{value:"0.875"},"7/8%"),Object(c.createElement)("option",{value:"1"},"1%"))),Object(c.createElement)("div",null,Object(c.createElement)("button",{className:"mortgage-btn"},t.button)))}})}]);