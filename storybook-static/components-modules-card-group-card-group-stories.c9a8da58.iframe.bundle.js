(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[7189],{"./src/stories/components/modules/card-group/card-group.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Events:function(){return Events},__namedExportsOrder:function(){return __namedExportsOrder}});var _card_group_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/modules/card-group/card-group.twig"),_card_group_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_card_group_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Modules/Cards/Card Group"};const Template=_ref=>{let{label:label,...args}=_ref;return _card_group_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},cards=[...Array(3)].map(((_,i)=>({heading:{text:"Heading",url:"#",level:3},image:{src:"//via.placeholder.com/430x230",alt:"Alt Text"},link:{text:"Link",url:"#"}}))),defaultArgs={section_heading:"Heading",section_description:"Description",cards:cards},Default=Template.bind({});Default.args=defaultArgs;const Events=Template.bind({}),eventCards=cards.map(((card,i)=>Object.assign({...card},{date:{unformatted:"2020-01-01",full:"January 1, 2020",day:1,month_short:"Jan",year:2020},type:{handle:"events",label:"Events"}})));Events.args={...defaultArgs,cards:eventCards};const __namedExportsOrder=["Default","Events"]},"./src/stories/components/containers/card-group/card-group.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/teasers/card/card.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="grid grid-cols-12 gap-6 align-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"alignment",match:["alignment"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"center"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'" data-equalizer data-equalize-on="medium">\n  '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"card",expression:[{type:"Twig.expression.type.variable",value:"cards",match:["cards"]}],output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.set",key:"card",expression:[{type:"Twig.expression.type.variable",value:"card",match:["card"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"lazyload_class"},{type:"Twig.expression.type.string",value:"data-lazy"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"equalize"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]}},{type:"raw",value:'      <div class=" md:col-span-4">\n        '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/teasers/card/card.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"card",match:["card"]}]}},{type:"raw",value:"      </div>\n  "}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/containers/card-group/card-group.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/card-group/card-group.twig",module.exports.default=module.exports},"./src/stories/components/links/button/button.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n\n  <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"target",match:["target"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"target",match:["target"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="button'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"hollow",match:["hollow"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"hollow"}]}},{type:"raw",value:'">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:"\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <i class="icon icon--small icon-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]}]},{type:"raw",value:'"></i>\n    '}]}},{type:"raw",value:"  </a>\n\n"}],id:"src/stories/components/links/button/button.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/button/button.twig",module.exports.default=module.exports},"./src/stories/components/modules/card-group/card-group.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/card-group/card-group.twig"),__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_heading"},{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_description"},{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"intro_class"},{type:"Twig.expression.type.string",value:"text-center"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/card-group/card-group.twig"}]}},{type:"raw",value:"\n  "}]}}]}}],id:"src/stories/components/modules/card-group/card-group.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/card-group/card-group.twig",module.exports.default=module.exports},"./src/stories/components/sections/section.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/button/button.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:""}]}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-lg"}]}}]}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"  \n  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-xl"}]}}]}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"intro_class",expression:[{type:"Twig.expression.type.string",value:"text-center"}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"intro",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <div class="section_intro '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]}]},{type:"raw",value:'">\n        <div class="grid '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"grid-cols-12"}]}},{type:"raw",value:' gap-6 items-center justify-center">\n          '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'            <div class=" md:col-span-5 lg:col-span-6"  data-scroll-show data-scroll-from="left">\n              <div class="image-size--landscapeCroppedMedium">\n                <img loading="lazy" src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'" class="w-full">\n              </div>\n            </div>\n          '}]}},{type:"raw",value:'          <div class=" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"md:col-span-7 lg:col-span-6"}]}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"md:col-span-8"}]}},{type:"raw",value:'">\n            <h2 class="section_heading">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]}]},{type:"raw",value:"</h2>\n            "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'              <h3 class="section_subheading">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]}]},{type:"raw",value:"</h3>\n            "}]}},{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'              <p class="lead">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]}]},{type:"raw",value:"</p>\n            "}]}},{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"              "},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/button/button.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"color"},{type:"Twig.expression.type.string",value:"secondary"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]}},{type:"raw",value:"            "}]}},{type:"raw",value:"          </div>\n        </div>\n      </div>\n    "}]}}]}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type._function",fn:"block",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"section_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],output:[{type:"raw",value:'    <div class="section_content" data-scroll-show>\n      '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"      "}]}},{type:"raw",value:"    </div>\n  "}]}}]}},{type:"raw",value:"<section "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="section '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"first"},{type:"Twig.expression.type.string",value:"pt-4"},{type:"Twig.expression.type.string",value:"pt-2"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"last"},{type:"Twig.expression.type.string",value:"pb-5"},{type:"Twig.expression.type.string",value:"pb-3"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" lg:pt-5 lg:pb-6"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:"pt-4 lg:pt-12 pb-5 lg:pb-13"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"style",match:["style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"section--"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"style",match:["style"]}]},{type:"raw",value:" "}]}},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"collapse",match:["collapse"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"section--collapse"}]}},{type:"raw",value:'" >\n  <div class="position-unset">\n    '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'<div class=" section_background" data-bg="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'"></div>'}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background_slick",match:["section_background_slick"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'<img class="section_background" data-slick-background="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_background_slick",match:["section_background_slick"]}]},{type:"raw",value:'"/>'}]}},{type:"raw",value:'  </div>\n  <div class="'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"container "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"width_class",match:["width_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "}]}},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"grid_class",match:["grid_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n    '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:'      <div class="grid-x items-center justify-center">\n        <div class=" md:col-span-8">\n          '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"]}]},{type:"raw",value:'\n        </div>\n        <div class=" lg:col-span-4">\n          '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n        </div>\n      </div>\n    "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:'      <div class="mb-10">\n        '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"]}]},{type:"raw",value:"\n      </div>\n      "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n\n\n    "}]}},{type:"raw",value:"\n  </div>\n</section>\n"}],id:"src/stories/components/sections/section.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/sections/section.twig",module.exports.default=module.exports}}]);