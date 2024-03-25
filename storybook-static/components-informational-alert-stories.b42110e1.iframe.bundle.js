(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[6385],{"./src/stories/components/informational/alert.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Link:function(){return Link},__namedExportsOrder:function(){return __namedExportsOrder}});var _alert_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/informational/alert.twig"),_alert_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_alert_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Informational/Alert",argTypes:{label:{control:"text"},link:{control:"text"},closable:{control:"boolean"}}};const Template=_ref=>{let{label:label,...args}=_ref;return _alert_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},defaultArgs={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",label:"Alert"},Default=Template.bind({});Default.args=defaultArgs;const Link=Template.bind({});Link.args=Object.assign({...defaultArgs},{link:"#"}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Default.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Link.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Link"]},"./src/stories/components/informational/alert.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="alert-bar bg-secondary text-center '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"data-closable"}]}},{type:"raw",value:'>\n  <div class="grid-container">\n    '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <span class="alert-bar_label">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]}]},{type:"raw",value:"</span>\n    "}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n    "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"      "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"\n    "}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <button class="'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"close-button"}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"button secondary"}]}},{type:"raw",value:'" aria-label="Dismiss alert" type="button" data-close>\n        <span aria-hidden="true">'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"output",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]}]}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"&times;"}]}},{type:"raw",value:"</span>\n      </button>\n    "}]}},{type:"raw",value:"  </div>\n</div>\n"}],id:"src/stories/components/informational/alert.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/informational/alert.twig",module.exports.default=module.exports}}]);