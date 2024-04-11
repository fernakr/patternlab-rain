(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[1225],{"./src/stories/components/modules/video/video.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Video:function(){return Video},__namedExportsOrder:function(){return __namedExportsOrder}});var _video_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/modules/video/video.twig"),_video_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_video_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Modules/Video",argTypes:{}};const Video=(_ref=>{let{label:label,...args}=_ref;return _video_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Video.args={section_heading:"Heading",section_description:"Description",video_type:"youtube",video_id:"gJ6APKIjFQY",image:{src:"https://source.unsplash.com/9wg5jCEPBsw/430x230",alt:"Alt Text"}},Video.parameters={...Video.parameters,docs:{...Video.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Video.parameters?.docs?.source}}};const __namedExportsOrder=["Video"]},"./src/stories/components/embed/video/video.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/utils/loader/loader.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<figure>\n  <div class="video_wrapper is-loading" data-video-trigger="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"click"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'" data-video-type="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"]}]},{type:"raw",value:'">\n    <div class="video_loader">\n      '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/utils/loader/loader.twig"}]}},{type:"raw",value:'    </div>\n    <div class="video_image_wrapper image-size--landscapeCropped">\n      <img data-src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'" class="video_image js-lazy">\n    </div>\n    <div class="video_container">\n      <div class="video_player_wrapper">\n        <div class="video_player" data-video-id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"]}]},{type:"raw",value:'" ></div>\n      </div>\n    </div>\n  </div>\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"]}],output:[{type:"raw",value:'    <figcaption class="video_caption">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"]}]},{type:"raw",value:"</figcaption>\n  "}]}},{type:"raw",value:"</figure>\n"}],id:"src/stories/components/embed/video/video.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/embed/video/video.twig",module.exports.default=module.exports},"./src/stories/components/modules/video/video.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/embed/video/video.twig"),__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_heading"},{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/embed/video/video.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"trigger"},{type:"Twig.expression.type.string",value:"click"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}}]}}],id:"src/stories/components/modules/video/video.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/video/video.twig",module.exports.default=module.exports},"./src/stories/components/utils/loader/loader.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="loader"><div></div><div></div><div></div><div></div></div>\n'}],id:"src/stories/components/utils/loader/loader.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/utils/loader/loader.twig",module.exports.default=module.exports}}]);