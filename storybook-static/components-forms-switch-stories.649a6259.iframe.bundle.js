(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[1314],{"./src/stories/components/forms/switch.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Switch:function(){return Switch},__namedExportsOrder:function(){return __namedExportsOrder}});var _switch_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/forms/switch.twig"),_switch_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_switch_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Forms/Switch",argTypes:{required:{control:{type:"boolean"}}}};const Switch=(_ref=>{let{label:label,...args}=_ref;return _switch_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Switch.args={label:"Switch",id:"switch",name:"switch"},Switch.parameters={...Switch.parameters,docs:{...Switch.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Switch.parameters?.docs?.source}}};const __namedExportsOrder=["Switch"]},"./src/stories/components/forms/switch.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="switch large">\n  <input class="switch-input" id="yes-no" type="checkbox" name="exampleSwitch">\n  <label class="switch-paddle" for="yes-no">\n    <span class="show-for-sr">Do you like me?</span>\n    <span class="switch-active" aria-hidden="true">Yes</span>\n    <span class="switch-inactive" aria-hidden="true">No</span>\n  </label>\n</div>\n'}],id:"src/stories/components/forms/switch.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/switch.twig",module.exports.default=module.exports}}]);