(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[4278],{"./src/stories/components/modules/card-carousel-center/card-carousel-center.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Center:function(){return Center},__namedExportsOrder:function(){return __namedExportsOrder}});var _card_carousel_center_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/modules/card-carousel-center/card-carousel-center.twig"),_card_carousel_center_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_card_carousel_center_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Modules/Cards/Card Carousel/Center",argTypes:{}};const defaultArgs={section_heading:"Heading",section_description:"Description",cards:[...Array(5)].map(((_,i)=>({heading:{text:"Heading",url:"#",level:3},image:{src:"https://source.unsplash.com/9wg5jCEPBsw/430x230",alt:"Alt Text"},link:{text:"Link",url:"#"}})))},Center=(_ref=>{let{label:label,...args}=_ref;return _card_carousel_center_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Center.args=defaultArgs,Center.parameters={...Center.parameters,docs:{...Center.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Center.parameters?.docs?.source}}};const __namedExportsOrder=["Center"]},"./src/stories/components/containers/carousel/carousel-cards-center/carousel-cards-center.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/slick/slick.twig"),__webpack_require__("./src/stories/components/teasers/card/card.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/slick/slick.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"peekaboo"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"center"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"slide_content",output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"card",expression:[{type:"Twig.expression.type.variable",value:"cards",match:["cards"]}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.set",key:"card",expression:[{type:"Twig.expression.type.variable",value:"card",match:["card"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"lazyload_class"},{type:"Twig.expression.type.string",value:"data-lazy"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"special"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]}},{type:"raw",value:'        <div class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"first"},{type:"Twig.expression.type.string",value:"slick-primary "},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'">\n          '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/teasers/card/card.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"card",match:["card"]}]}},{type:"raw",value:"        </div>\n      "}]}},{type:"raw",value:"  "}]}}]}}],id:"src/stories/components/containers/carousel/carousel-cards-center/carousel-cards-center.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/carousel/carousel-cards-center/carousel-cards-center.twig",module.exports.default=module.exports},"./src/stories/components/containers/carousel/carousel-nav.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="slick-nav '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"slick_nav_class",match:["slick_nav_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"inline",match:["inline"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"slick-nav--inline"}]}},{type:"raw",value:'">\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"pause",match:["pause"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'    <button class="js-slick-toggle slick-toggle">\n      <span class="show-for-sr">Toggle Pause/Play</span>\n      <span class="icon-pause active"></span>\n      <span class="icon-play inactive"></span>\n    </button>\n  '}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/containers/carousel/carousel-nav.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/carousel/carousel-nav.twig",module.exports.default=module.exports},"./src/stories/components/containers/slick/slick.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/carousel/carousel-nav.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="slick-wrap">\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"slick_nav_position",match:["slick_nav_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"top"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/carousel/carousel-nav.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"inline"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"  <div "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="js-slick'},{type:"output",stack:[{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"Twig.expression.type.string",value:"--"},{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"slick_class",match:["slick_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"grid",match:["grid"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"grid-x grid-margin-x"}]}},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"equalize",match:["equalize"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'data-equalizer data-equalize-on="medium"'}]}},{type:"raw",value:">\n    "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"slide_content",output:[{type:"raw",value:"    "}]}},{type:"raw",value:"  </div>\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"slick_nav_position",match:["slick_nav_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"top"},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/carousel/carousel-nav.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"inline"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"slick_tabs",match:["slick_tabs"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'    <div class="slick_controls  is-start">\n      '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"pause",match:["pause"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'          <button class="js-slick-toggle slick-toggle" data-slick-pause="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n            <span class="show-for-sr">Toggle Pause/Play</span>\n            <span class="icon-pause active"></span>\n            <span class="icon-play inactive"></span>\n          </button>\n        '}]}},{type:"raw",value:'\n      <button data-slick="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" class="slick-prev arrow arrow--prev">Previous</button>\n      <ul class="slick_tabs" data-slick="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" data-slick-tabs>\n      '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"slide",expression:[{type:"Twig.expression.type.variable",value:"slides",match:["slides"]}],output:[{type:"raw",value:'        <li>\n          <button data-slick-go="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" data-slick-go-index="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index0"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"slide",match:["slide"]},{type:"Twig.expression.type.key.period",key:"tab"}]},{type:"raw",value:"</button>\n        </li>\n      "}]}},{type:"raw",value:'      </ul>\n      <button data-slick="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" class="slick-next arrow arrow--next">Next</button>\n    </div>\n  '}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/containers/slick/slick.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/slick/slick.twig",module.exports.default=module.exports},"./src/stories/components/modules/card-carousel-center/card-carousel-center.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/carousel/carousel-cards-center/carousel-cards-center.twig"),__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" overflow-hidden"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_heading"},{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_description"},{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"intro_class"},{type:"Twig.expression.type.string",value:"text-center"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/carousel/carousel-cards-center/carousel-cards-center.twig"}]}},{type:"raw",value:"  "}]}}]}}],id:"src/stories/components/modules/card-carousel-center/card-carousel-center.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/card-carousel-center/card-carousel-center.twig",module.exports.default=module.exports}}]);