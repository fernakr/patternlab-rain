(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[8313],{"./src/stories/pages/news/news-detail.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},FeaturedImage:function(){return FeaturedImage},__namedExportsOrder:function(){return __namedExportsOrder}});var _news_detail_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/pages/news/news-detail.twig"),_news_detail_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_news_detail_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/global/placeholders/global.json"),_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/global/placeholders/images.json"),_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/global/placeholders/components.json");__webpack_exports__.default={title:"Pages/News/News Detail"};const Template=_ref=>{let{label:label,...args}=_ref;return _news_detail_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},defaultArgs={logo:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.jY,breadcrumbs:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_3__.Kb,menu:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.GI,social:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.xs,image_sizes:_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_2__.J,image_placeholder:_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_2__.W,wysiwyg:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_3__.W6,pagination:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_3__.oA},parameters={layout:"fullscreen"},Default=Template.bind({});Default.args=defaultArgs,Default.parameters=parameters;const FeaturedImage=Template.bind({});FeaturedImage.args={...defaultArgs,featured_image:{src:"//via.placeholder.com/430x230",alt:""}},FeaturedImage.parameters=parameters;const __namedExportsOrder=["Default","FeaturedImage"]},"./src/stories/components/links/link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}]}}]}},{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/link.twig",module.exports.default=module.exports},"./src/stories/components/modules/wysiwyg/wysiwyg.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"section--wysiwyg "},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"wysiwyg",match:["wysiwyg"]}]},{type:"raw",value:"\n  "}]}}]}}],id:"src/stories/components/modules/wysiwyg/wysiwyg.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/wysiwyg/wysiwyg.twig",module.exports.default=module.exports},"./src/stories/pages/news/news-detail.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/hero/hero.twig"),__webpack_require__("./src/stories/components/inline-text/meta/meta.twig"),__webpack_require__("./src/stories/components/modules/wysiwyg/wysiwyg.twig"),__webpack_require__("./src/stories/components/sections/section.twig"),__webpack_require__("./src/stories/wrappers/default.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.extends",stack:[{type:"Twig.expression.type.string",value:"src/stories/wrappers/default.twig"}]}},{type:"logic",token:{type:"Twig.logic.type.set",key:"type",expression:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"News"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"handle"},{type:"Twig.expression.type.string",value:"news"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"top",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/hero/hero.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"heading"},{type:"Twig.expression.type.string",value:"News Detail"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"image"},{type:"Twig.expression.type.variable",value:"featured_image",match:["featured_image"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"main",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"section--collapse"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/inline-text/meta/meta.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"date"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"unformatted"},{type:"Twig.expression.type.string",value:"2021-08-12"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"full"},{type:"Twig.expression.type.string",value:"August 12, 2021"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"categories"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.string",value:"#"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.string",value:"News Category"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"    "}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/modules/wysiwyg/wysiwyg.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"section--collapse"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"wysiwyg"},{type:"Twig.expression.type.variable",value:"wysiwyg",match:["wysiwyg"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}}],id:"src/stories/pages/news/news-detail.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/pages/news/news-detail.twig",module.exports.default=module.exports},"./src/stories/global/placeholders/images.json":function(module){"use strict";module.exports=JSON.parse('{"W":"//via.placeholder.com/","J":{"landscapeCropped":{"name":"Landscape Cropped","width":900,"height":500,"type":"crop"},"landscapeCroppedMedium":{"name":"Landscape Cropped (Medium)","width":630,"height":400,"type":"crop"},"landscapeCroppedSmall":{"name":"Landscape Cropped (Small)","width":430,"height":230,"type":"crop"},"square":{"name":"Square","width":400,"height":400,"type":"crop"},"wideCroppedXlarge":{"name":"Wide Cropped XL","width":1440,"height":460,"type":"crop"}}}')}}]);