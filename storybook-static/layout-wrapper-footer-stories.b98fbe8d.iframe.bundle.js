(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[4891],{"./src/stories/layout/wrapper/footer.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:function(){return Footer},__namedExportsOrder:function(){return __namedExportsOrder}});var _footer_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/layout/wrapper/footer.twig"),_footer_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_footer_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/global/placeholders/global.json");__webpack_exports__.default={title:"Layout/Wrapper/Footer"};const Footer=(_ref=>{let{label:label,...args}=_ref;return _footer_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Footer.args={menu:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.GI,social:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.xs,footer_links:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.bP,logo:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.jY,address:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_1__.Lk},Footer.parameters={...Footer.parameters,docs:{...Footer.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Footer.parameters?.docs?.source}}};const __namedExportsOrder=["Footer"]},"./src/stories/components/links/link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}]}}]}},{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/link.twig",module.exports.default=module.exports},"./src/stories/components/logo/logo.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"homepage",match:["homepage"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"/templates"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'" class="logo">\n  <img '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'height="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"}]},{type:"raw",value:'"'}]}},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'width="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="logo_image" src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'"/>\n</a>\n'}],id:"src/stories/components/logo/logo.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/logo/logo.twig",module.exports.default=module.exports},"./src/stories/components/utils/back-to-top/back-to-top.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<a href="#header" class="backToTop" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"scroll_show",match:["scroll_show"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],output:[{type:"raw",value:'data-scroll-show="200"'}]}},{type:"raw",value:' title="Back to top">\n  <i class="backToTop_icon icon-chevron-up"></i>\n  <span class="backToTop_text"><span class="sr-only">Back to </span>top</span>\n</a>\n'}],id:"src/stories/components/utils/back-to-top/back-to-top.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/utils/back-to-top/back-to-top.twig",module.exports.default=module.exports},"./src/stories/components/utils/social-media/social-media.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<ul class="list-unstyled d-inline-flex gap-2 mb-0 social-media">\n  '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"social",match:["social"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <li>\n        <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" target="_blank" class="icon icon--circle">\n          <span class="sr-only">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"handle"}]},{type:"raw",value:'</span>\n          <span class="icon-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"handle"}]},{type:"raw",value:'"></span>\n        </a>\n      </li>\n  '}]}},{type:"raw",value:"  </ul>\n"}],id:"src/stories/components/utils/social-media/social-media.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/utils/social-media/social-media.twig",module.exports.default=module.exports},"./src/stories/layout/wrapper/footer.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/link.twig"),__webpack_require__("./src/stories/components/logo/logo.twig"),__webpack_require__("./src/stories/components/utils/back-to-top/back-to-top.twig"),__webpack_require__("./src/stories/components/utils/social-media/social-media.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<footer class="l-footer text-white text-center bg-primary py-8">\n  <div class="container mx-auto">\n    <div class="grid grid-cols-12 gap-6">\n\n      <div class=" md:col-span-5 md:order-2 md:text-left">\n        <div class="flex flex-col lg:flex-row flex-justify-center gap-x-3 gap-y-3">\n          <div>\n            '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}]}},{type:"raw",value:"          </div>\n          <div>\n            <address>\n             "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"address",match:["address"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.filter",value:"nl2br",match:["| nl2br","nl2br"]}]},{type:"raw",value:'\n            </address>\n          </div>\n        </div>\n\n      </div>\n      <div class="col-span-12  md:order-1">\n        <ul class="menu flex flex-col md:flex-row justify-between gap-x-3">\n        '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],output:[{type:"raw",value:'          <li>\n            <a class="text-inherit font-bold no-underline hover:underline" href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</a>\n          </li>\n        "}]}},{type:"raw",value:'      </ul>\n      </div>\n      <div class=" md:col-span-7 md:text-right md:order-3 my-4">\n        '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/utils/social-media/social-media.twig"}]}},{type:"raw",value:'      </div>\n    </div>\n\n    <ul class="list-unstyled flex gap-4 justify-center list-divided mb-2">\n      '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"footer_links",match:["footer_links"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"        <li>          \n          "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/link.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}]}},{type:"raw",value:"        </li>\n      "}]}},{type:"raw",value:"    </ul>\n    <p>Copyright &copy; "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"copyright_year",match:["copyright_year"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.number",value:2022,match:["2022",null]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"site_name",match:["site_name"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:"</p>\n\n  </div>\n  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/utils/back-to-top/back-to-top.twig"}]}},{type:"raw",value:"</footer>\n"}],id:"src/stories/layout/wrapper/footer.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/wrapper/footer.twig",module.exports.default=module.exports},"./src/stories/global/placeholders/global.json":function(module){"use strict";module.exports=JSON.parse('{"bP":[{"text":"Privacy Policy","url":"#"},{"text":"Terms of Use","url":"#"}],"Lk":"5555 Street 1\\r\\nUnit B\\r\\nAustin, TX 78702","rR":"Mighty Citizen","xs":[{"handle":"youtube","url":"#"},{"handle":"facebook","url":"#"}],"jY":{"logo":{"src":"/images/logo.png","alt":"Logo Alt Text"}},"GI":[{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]}]}')}}]);