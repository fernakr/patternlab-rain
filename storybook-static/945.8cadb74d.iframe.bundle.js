(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[945],{"./src/stories/components/forms/simple-form/simple-form.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<form action="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"/search"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'">\n  <div class="input-group simple">\n    <label for="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"keywords"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'" class="sr-only">Keywords</label>\n    <input class="input-group-field" placeholder="Search" type="search" id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"keywords"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'" name="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"q"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'">\n    <div class="input-group-button">\n      <button type="submit"  value="Submit">\n        <span class="sr-only">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"button_text",match:["button_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"Search"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'</span>\n        <span class="icon-search"></span>\n      </button>\n    </div>\n  </div>\n</form>\n'}],id:"src/stories/components/forms/simple-form/simple-form.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/simple-form/simple-form.twig",module.exports.default=module.exports},"./src/stories/components/logo/logo.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"homepage",match:["homepage"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"/templates"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'" class="logo">\n  <img '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'height="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"}]},{type:"raw",value:'"'}]}},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'width="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="logo_image" src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'"/>\n</a>\n'}],id:"src/stories/components/logo/logo.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/logo/logo.twig",module.exports.default=module.exports},"./src/stories/components/navigation/menu/menu.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/forms/simple-form/simple-form.twig"),__webpack_require__("./src/stories/components/utils/hamburger/hamburger.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div  data-responsive-toggle="responsive-menu" data-hide-for="large" class="lg:hidden" >\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/utils/hamburger/hamburger.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"toggle"},{type:"Twig.expression.type.string",value:"responsive-menu"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:'</div>\n\n<div id="responsive-menu">\n  '},{type:"raw",value:'\n  \n    <ul role="menubar" class="flex justify-between gap-x-3" data-responsive-menu="accordion lg:dropdown" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"click",match:["click"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'data-click-open="true" data-disable-hover="true"'}]}},{type:"raw",value:">\n      "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],output:[{type:"raw",value:'        <li  role="presentation" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"last"}],output:[{type:"raw",value:'class="last"'}]}},{type:"raw",value:'>\n          <a class="text-black no-underline font-bold" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="_blank" rel="noopener"'}]}},{type:"raw",value:' role="menuitem" href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:"</a>\n          "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'          <ul  role="presentation" class="hidden">\n            <li  role="presentation" class="parent-link"><a '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="_blank" rel="noopener"'}]}},{type:"raw",value:' href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" class="color-primary">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:" Overview</a></li>\n            "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],output:[{type:"raw",value:'              <li role="presentation">\n                <a role="menuitem" href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</a>\n                "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'                <ul  role="presentation" class="hidden">\n                  <li role="presentation"><a '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="_blank" rel="noopener"'}]}},{type:"raw",value:' href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:" Overview</a></li>\n                  "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],output:[{type:"raw",value:'                    <li role="presentation">\n                      <a role="menuitem" href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</a>\n                    </li>\n                  "}]}},{type:"raw",value:"                </ul>\n                "}]}},{type:"raw",value:"              </li>\n            "}]}},{type:"raw",value:"          </ul>\n          "}]}},{type:"raw",value:"        </li>\n      "}]}},{type:"raw",value:'    \n    </ul>\n    <div class="lg:hidden search-wrapper">\n      '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"    </div>\n\n\n  \n</div>\n"}],id:"src/stories/components/navigation/menu/menu.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/navigation/menu/menu.twig",module.exports.default=module.exports},"./src/stories/components/utils/hamburger/hamburger.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<button class="hamburger" type="button" id="hamburger" data-toggle="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"]}]},{type:"raw",value:'" data-toggler=".is-active" aria-label="Toggle navigation">\n  <span class="hamburger-icon">\n    <span class="hamburger-icon-bar"></span>\n  </span>\n  <span class="hamburger-text">Menu</span>\n</button>\n'}],id:"src/stories/components/utils/hamburger/hamburger.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/utils/hamburger/hamburger.twig",module.exports.default=module.exports},"./src/stories/layout/wrapper/header.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/forms/simple-form/simple-form.twig"),__webpack_require__("./src/stories/components/logo/logo.twig"),__webpack_require__("./src/stories/components/navigation/menu/menu.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<a href="#main" class="l-skip">Skip to main</a>\n<header class="l-header py-8" id="header">\n  <div class="container mx-auto">\n    <div class="grid grid-cols-12 gap-6 items-center">\n      <div class=" small-2 lg:col-span-9">\n        '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}]}},{type:"raw",value:'      </div>\n      <div class=" lg:col-span-3 lg:d-block hidden">\n\n        <div class="search-form">\n          '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/forms/simple-form/simple-form.twig"}]}},{type:"raw",value:"        </div>\n\n\n        "},{type:"raw",value:'\n      </div>\n      <div class=" small-10 lg:col-span-12">\n        '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/navigation/menu/menu.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}]}},{type:"raw",value:"      </div>\n    </div>\n\n  </div>\n</header>\n"}],id:"src/stories/layout/wrapper/header.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/wrapper/header.twig",module.exports.default=module.exports},"./src/stories/global/placeholders/global.json":function(module){"use strict";module.exports=JSON.parse('{"bP":[{"text":"Privacy Policy","url":"#"},{"text":"Terms of Use","url":"#"}],"Lk":"5555 Street 1\\r\\nUnit B\\r\\nAustin, TX 78702","rR":"Mighty Citizen","xs":[{"handle":"youtube","url":"#"},{"handle":"facebook","url":"#"}],"jY":{"logo":{"src":"/images/logo.png","alt":"Logo Alt Text"}},"GI":[{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]},{"text":"Menu Item","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#","children":[{"text":"Item 1","url":"#"},{"text":"Item 2","url":"#"},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"}]},{"text":"Item 3","url":"#"},{"text":"Item 4","url":"#"},{"text":"Item 5","url":"#"},{"text":"Item 6","url":"#"}]}]}')}}]);