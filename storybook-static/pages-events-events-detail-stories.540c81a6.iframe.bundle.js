(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[5200],{"./src/stories/pages/events/events-detail.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},FeaturedImage:function(){return FeaturedImage},__namedExportsOrder:function(){return __namedExportsOrder}});var _events_detail_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/pages/events/events-detail.twig"),_events_detail_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_events_detail_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/stories/global/placeholders/images.json"),__webpack_require__("./src/stories/global/placeholders/components.json")),_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/global/placeholders/global.json");__webpack_exports__.default={title:"Pages/Events/Events Detail"};const Template=_ref=>{let{label:label,...args}=_ref;return _events_detail_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},defaultArgs={breadcrumbs:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__.Kb,logo:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__.jY,pagination:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__.oA,menu:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__.GI,social:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__.xs,wysiwyg:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__.W6},parameters={layout:"fullscreen"},Default=Template.bind({});Default.args=defaultArgs,Default.parameters=parameters;const FeaturedImage=Template.bind({});FeaturedImage.args={...defaultArgs,featured_image:{src:"https://source.unsplash.com/9wg5jCEPBsw/430x230",alt:""}},FeaturedImage.parameters=parameters;const __namedExportsOrder=["Default","FeaturedImage"]},"./src/stories/components/informational/alert/alert.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="alert-bar bg-secondary py-2 text-center '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"data-closable"}]}},{type:"raw",value:'>\n  <div class="grid-container">\n    '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <span class="alert-bar_label fw-bold">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]}]},{type:"raw",value:":</span>\n    "}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n    "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"      <span>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</span>      \n    "}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <button class="'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"close-button"}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"button secondary"}]}},{type:"raw",value:'" aria-label="Dismiss alert" type="button" data-close>\n        <span aria-hidden="true">'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"output",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]}]}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"&times;"}]}},{type:"raw",value:"</span>\n      </button>\n    "}]}},{type:"raw",value:"  </div>\n</div>\n"}],id:"src/stories/components/informational/alert/alert.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/informational/alert/alert.twig",module.exports.default=module.exports},"./src/stories/components/links/link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}]}}]}},{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/link.twig",module.exports.default=module.exports},"./src/stories/components/modules/wysiwyg/wysiwyg.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"section--wysiwyg "},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"wysiwyg",match:["wysiwyg"]}]},{type:"raw",value:"\n  "}]}}]}}],id:"src/stories/components/modules/wysiwyg/wysiwyg.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/wysiwyg/wysiwyg.twig",module.exports.default=module.exports},"./src/stories/components/utils/back-to-top/back-to-top.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<a href="#header" class="backToTop" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"scroll_show",match:["scroll_show"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],output:[{type:"raw",value:'data-scroll-show="200"'}]}},{type:"raw",value:' title="Back to top">\n  <i class="backToTop_icon icon-chevron-up"></i>\n  <span class="backToTop_text"><span class="show-for-sr">Back to </span>top</span>\n</a>\n'}],id:"src/stories/components/utils/back-to-top/back-to-top.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/utils/back-to-top/back-to-top.twig",module.exports.default=module.exports},"./src/stories/components/utils/social-media/social-media.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<ul class="list-unstyled d-inline-flex g-2 mb-0 social-media">\n  '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"social",match:["social"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <li>\n        <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" target="_blank" class="icon icon--circle">\n          <span class="show-for-sr">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"handle"}]},{type:"raw",value:'</span>\n          <span class="icon-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"handle"}]},{type:"raw",value:'"></span>\n        </a>\n      </li>\n  '}]}},{type:"raw",value:"  </ul>\n"}],id:"src/stories/components/utils/social-media/social-media.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/utils/social-media/social-media.twig",module.exports.default=module.exports},"./src/stories/layout/wrapper/footer.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/link.twig"),__webpack_require__("./src/stories/components/logo/logo.twig"),__webpack_require__("./src/stories/components/utils/back-to-top/back-to-top.twig"),__webpack_require__("./src/stories/components/utils/social-media/social-media.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<footer class="l-footer color-white text-center">\n  <div class="grid-container">\n    <div class="grid-x grid-margin-x">\n\n      <div class="cell medium-5 medium-order-2 medium-text-left">\n        <div class="d-flex flex-column large-flex-row flex-justify-content-center gx-3 gy-3">\n          <div>\n            '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}]}},{type:"raw",value:"          </div>\n          <div>\n            <address>\n             "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"address",match:["address"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.filter",value:"nl2br",match:["| nl2br","nl2br"]}]},{type:"raw",value:'\n            </address>\n          </div>\n        </div>\n\n      </div>\n      <div class="small-12 cell medium-order-1">\n        <ul class="menu medium-horizontal vertical">\n        '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],output:[{type:"raw",value:'          <li>\n            <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</a>\n          </li>\n        "}]}},{type:"raw",value:'      </ul>\n      </div>\n      <div class="cell medium-7 medium-text-right medium-order-3 my-4">\n        '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/utils/social-media/social-media.twig"}]}},{type:"raw",value:'      </div>\n    </div>\n\n    <ul class="list-unstyled d-flex g-4 justify-content-center list-divided mb-2">\n      '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"footer_links",match:["footer_links"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"        <li>          \n          "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/link.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}]}},{type:"raw",value:"        </li>\n      "}]}},{type:"raw",value:"    </ul>\n    <p>Copyright &copy; "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"copyright_year",match:["copyright_year"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.number",value:2022,match:["2022",null]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"site_name",match:["site_name"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:"</p>\n\n  </div>\n  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/utils/back-to-top/back-to-top.twig"}]}},{type:"raw",value:"</footer>\n"}],id:"src/stories/layout/wrapper/footer.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/wrapper/footer.twig",module.exports.default=module.exports},"./src/stories/pages/events/events-detail.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/hero/hero.twig"),__webpack_require__("./src/stories/components/modules/wysiwyg/wysiwyg.twig"),__webpack_require__("./src/stories/wrappers/default.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.extends",stack:[{type:"Twig.expression.type.string",value:"src/stories/wrappers/default.twig"}]}},{type:"logic",token:{type:"Twig.logic.type.set",key:"type",expression:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Event"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"handle"},{type:"Twig.expression.type.string",value:"events"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"top",output:[{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/hero/hero.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"date"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"unformatted"},{type:"Twig.expression.type.string",value:"2022-06-01"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"full"},{type:"Twig.expression.type.string",value:"June 1"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"endDate"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"unformatted"},{type:"Twig.expression.type.string",value:"2022-06-05"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"full"},{type:"Twig.expression.type.string",value:"5, 2022"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"heading"},{type:"Twig.expression.type.string",value:"Event Title"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"subheading"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"categories"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.string",value:"Category 1"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.string",value:"category-1"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.string",value:"Category 2"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.string",value:"category-2"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"hero_button"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.string",value:"#"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.string",value:"Test"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.string",value:"_blank"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"list"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"10am - 12pm"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"Location"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"image"},{type:"Twig.expression.type.variable",value:"featured_image",match:["featured_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"main",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/modules/wysiwyg/wysiwyg.twig"}]}}]}}],id:"src/stories/pages/events/events-detail.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/pages/events/events-detail.twig",module.exports.default=module.exports},"./src/stories/wrappers/default.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/informational/alert/alert.twig"),__webpack_require__("./src/stories/layout/wrapper/footer.twig"),__webpack_require__("./src/stories/layout/wrapper/header.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="l-wrapper no-js">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/layout/wrapper/header.twig"}]}},{type:"raw",value:'  <div class="l-main" id="main">\n    '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/informational/alert/alert.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"alert_label"},{type:"Twig.expression.type.string",value:"Alert"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.string",value:"Important message goes here and is an optional link lorem ipsum dolor sit amet, consectetur adipiscing elit."},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:'    <div class="l-top" id="top">\n      '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"top",output:[{type:"raw",value:"      "}]}},{type:"raw",value:'    </div>\n    <div class="l-body">\n      '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"main",output:[{type:"raw",value:"      "}]}},{type:"raw",value:"    </div>\n  </div>\n  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/layout/wrapper/footer.twig"}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"cookie",match:["cookie"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/informational/alert/alert.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"cookie",match:["cookie"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"closable"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"closable_text"},{type:"Twig.expression.type.string",value:"Accept"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"alert_class"},{type:"Twig.expression.type.string",value:"alert--sticky"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/wrappers/default.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/wrappers/default.twig",module.exports.default=module.exports},"./src/stories/global/placeholders/images.json":function(module){"use strict";module.exports=JSON.parse('{"W":"//source.unsplash.com/9wg5jCEPBsw/","J":{"landscapeCropped":{"name":"Landscape Cropped","width":900,"height":500,"type":"crop"},"landscapeCroppedMedium":{"name":"Landscape Cropped (Medium)","width":630,"height":400,"type":"crop"},"landscapeCroppedSmall":{"name":"Landscape Cropped (Small)","width":430,"height":230,"type":"crop"},"square":{"name":"Square","width":400,"height":400,"type":"crop"},"wideCroppedXlarge":{"name":"Wide Cropped XL","width":1440,"height":460,"type":"crop"}}}')}}]);