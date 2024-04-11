(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[8804],{"./src/stories/components/links/button/button.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Large:function(){return Large},Secondary:function(){return Secondary},Small:function(){return Small},Tiny:function(){return Tiny},__namedExportsOrder:function(){return __namedExportsOrder}});var _button_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/links/button/button.twig"),_button_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_button_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Links/Button",argTypes:{text:{control:"text"},url:{control:"text"},color:{control:{type:"select"},options:["primary","secondary","tertiary","alert","warning","success"]},hollow:{control:"boolean"},size:{control:{type:"select"},options:["tiny","small","medium","large"]}}};const Template=_ref=>{let{label:label,...args}=_ref;return _button_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},defaultArgs={text:"Button",url:"#"},Default=Template.bind({});Default.args=defaultArgs;const Secondary=Template.bind({});Secondary.args=Object.assign({...defaultArgs},{color:"secondary"});const Large=Template.bind({});Large.args=Object.assign({...defaultArgs},{size:"large"});const Small=Template.bind({});Small.args=Object.assign({...defaultArgs},{size:"small"});const Tiny=Template.bind({});Tiny.args=Object.assign({...defaultArgs},{size:"tiny"}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Small.parameters?.docs?.source}}},Tiny.parameters={...Tiny.parameters,docs:{...Tiny.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Tiny.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Secondary","Large","Small","Tiny"]},"./src/stories/components/links/button/button.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n\n  <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"target",match:["target"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"target",match:["target"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="button'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"hollow",match:["hollow"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"hollow"}]}},{type:"raw",value:'">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:"\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <i class="icon icon--small icon-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]}]},{type:"raw",value:'"></i>\n    '}]}},{type:"raw",value:"  </a>\n\n"}],id:"src/stories/components/links/button/button.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/button/button.twig",module.exports.default=module.exports}}]);