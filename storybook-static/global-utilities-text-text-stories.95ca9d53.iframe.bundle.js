(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[6609],{"./src/stories/global/utilities/text/text.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Text:function(){return Text},__namedExportsOrder:function(){return __namedExportsOrder}});var _text_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/global/utilities/text/text.twig"),_text_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_text_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Global/Utilities/Text"};const Text=(_ref=>{let{label:label,...args}=_ref;return _text_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Text.parameters?.docs?.source}}};const __namedExportsOrder=["Text"]},"./src/stories/global/utilities/text/text.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<h2>Font Family Utilities</h2>\n<p>\n  <span class="font-primary">Primary Font override</span><br />\n  <span class="font-secondary">Secondary Font override</span>\n</p>\n\n<h2>Font Weight Utilities</h2>\n<p>\n  <span class="fw-normal d-block">Normal</span>\n  <span class="fw-bold d-block">Bold</span>\n  <span class="fw-semibold d-block">Semibold</span>\n</p>\n<h2>Font size Utilities</h2>\n<p>\n  Defined in `font-size-em` in `utilites/_utilities.scss`\n  <span class="text-smaller d-block">Smaller Text</span>\n  <span class="text-small d-block">Small Text</span>\n  <span class="text-base d-block">Base Text</span>\n  <span class="large-text d-block">Large Text</span>\n  <span class="large-textr d-block">Larger Text</span>\n  <span class="xlarge-text d-block">Xlarge Text</span>\n</p>\n'}],id:"src/stories/global/utilities/text/text.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/global/utilities/text/text.twig",module.exports.default=module.exports}}]);