(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[7554],{"./src/stories/layout/structure/structure.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Narrow:function(){return Narrow},Narrower:function(){return Narrower},Sidebar:function(){return Sidebar},__namedExportsOrder:function(){return __namedExportsOrder}});var _content_narrow_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/layout/structure/content-narrow.twig"),_content_narrow_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_content_narrow_twig__WEBPACK_IMPORTED_MODULE_0__),_content_narrower_twig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/layout/structure/content-narrower.twig"),_content_narrower_twig__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_content_narrower_twig__WEBPACK_IMPORTED_MODULE_1__),_content_with_sidebar_twig__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/layout/structure/content-with-sidebar.twig"),_content_with_sidebar_twig__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_content_with_sidebar_twig__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__.default={title:"Layout/Structure/Content"};const defaultArgs={wrapper_class:"grid-container",content:'<div class="pl-placeholder">Content</div>'},Narrow=(_ref=>{let{label:label,...args}=_ref;return _content_narrow_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Narrow.args=defaultArgs;const Narrower=(_ref2=>{let{label:label,...args}=_ref2;return _content_narrower_twig__WEBPACK_IMPORTED_MODULE_1___default()({label:label,...args})}).bind({});Narrower.args=defaultArgs;const Sidebar=(_ref3=>{let{label:label,...args}=_ref3;return _content_with_sidebar_twig__WEBPACK_IMPORTED_MODULE_2___default()({label:label,...args})}).bind({});Sidebar.args={...defaultArgs,sidebar:'<div class="pl-placeholder">Sidebar</div>'};const __namedExportsOrder=["Narrow","Narrower","Sidebar"]},"./src/stories/layout/structure/content-narrow.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n<div class="container con">\n    <div class=" lg:col-span-10">\n      '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n    </div>\n</div>\n"}],id:"src/stories/layout/structure/content-narrow.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/structure/content-narrow.twig",module.exports.default=module.exports},"./src/stories/layout/structure/content-narrower.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="grid grid-cols-12 gap-6 justify-center">\n    <div class=" lg:col-span-8">\n      '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n    </div>\n</div>\n"}],id:"src/stories/layout/structure/content-narrower.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/structure/content-narrower.twig",module.exports.default=module.exports},"./src/stories/layout/structure/content-with-sidebar.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'  <div id="body" class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"wrapper_class",match:["wrapper_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n    <div class="grid grid-cols-12 gap-6">\n      <div class=" md:col-span-8 l-content" id="content">\n          '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:'\n      </div>\n      <div class=" md:col-span-4">\n        <div data-sticky data-anchor="body" data-sticky-on="medium">\n          '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"sidebar",match:["sidebar"]}]},{type:"raw",value:"\n        </div>\n      </div>\n    </div>\n  </div>\n"}],id:"src/stories/layout/structure/content-with-sidebar.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/structure/content-with-sidebar.twig",module.exports.default=module.exports}}]);