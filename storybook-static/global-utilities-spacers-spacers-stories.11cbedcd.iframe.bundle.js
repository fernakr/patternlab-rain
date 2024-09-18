(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[9207],{"./src/stories/global/utilities/spacers/spacers.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Spacers:function(){return Spacers},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return spacers_stories}});var spacers=__webpack_require__("./src/stories/global/utilities/spacers/spacers.twig"),spacers_default=__webpack_require__.n(spacers),theme_namespaceObject=JSON.parse('{"rB":14,"g0":{"105":1.5,"205":2.5,"025":0.25,"05":0.5}}'),spacers_stories={title:"Global/Utilities/Spacers"};let spacers_stories_spacers=Array.from({length:theme_namespaceObject.rB},((v,k)=>({key:k,value:k})));const spacersAdditional=theme_namespaceObject.g0;Object.keys(spacersAdditional).forEach(((spacer,index)=>{spacers_stories_spacers.push({key:spacer,value:spacersAdditional[spacer]})}));const Spacers=(_ref=>{let{label:label,...args}=_ref;return spacers_default()({label:label,...args})}).bind({});Spacers.args={additional:theme_namespaceObject.g0,range:theme_namespaceObject.rB,spacers:spacers_stories_spacers};const __namedExportsOrder=["Spacers"]},"./src/stories/global/utilities/spacers/spacers.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<style>\n\t.spacer {\n\t\tbackground: aqua;\n\t\tborder: 1px solid #000;\n\t}\n  code.highlighter-rouge{\n    background: transparent;\n    border: 0;\n    color: #e83e8c;\n  }\n</style>\n\n\n<div class="container mx-auto">\n\t<h2>How it works</h2>\n\t<p>Assign responsive-friendly&nbsp;<code class="highlighter-rouge">margin</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding</code>&nbsp;values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. </p>\n  \n  <p>Classes are built from a range of 0 to '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"range",match:["range"]}]},{type:"raw",value:", with some additional half steps: "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:"key",valueVar:"value",expression:[{type:"Twig.expression.type.variable",value:"additional",match:["additional"]}],output:[{type:"output",stack:[{type:"Twig.expression.type.variable",value:"key",match:["key"]}]},{type:"raw",value:" ("},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]},{type:"raw",value:")"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"last"},{type:"Twig.expression.type.bool",value:!1},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:", "},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]}]}},{type:"raw",value:'.</p>\n\t<h2>Notation</h2>\n\t<p>Spacing utilities that apply to all breakpoints, from&nbsp;<code class="highlighter-rouge">small</code>&nbsp;to&nbsp;<code class="highlighter-rouge">xlarge</code>, have no breakpoint abbreviation in them. This is because those classes are applied from&nbsp;<code class="highlighter-rouge">min-width: 0</code>&nbsp;and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>\n\t<p>The classes are named using the format&nbsp;<code class="highlighter-rouge">{property}{sides}-{size}</code>&nbsp;for&nbsp;<code class="highlighter-rouge">xs</code>&nbsp;and&nbsp;<code class="highlighter-rouge">{breakpoint}-{property}{sides}-{size}</code>&nbsp;for&nbsp;<code class="highlighter-rouge">medium</code>,&nbsp;<code class="highlighter-rouge">large</code>,&nbsp;<code class="highlighter-rouge">xlarge</code>.</p>\n\t<p>Where&nbsp;<em>property</em>&nbsp;is one of:</p>\n\t<ul>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">m</code>&nbsp;- for classes that set&nbsp;<code class="highlighter-rouge">margin</code>\n\t\t</li>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">p</code>&nbsp;- for classes that set&nbsp;<code class="highlighter-rouge">padding</code>\n\t\t</li>\n\t</ul>\n\t<p>Where&nbsp;<em>sides</em>&nbsp;is one of:</p>\n\t<ul>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">t</code>&nbsp;- for classes that set&nbsp;<code class="highlighter-rouge">margin-top</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding-top</code>\n\t\t</li>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">b</code>&nbsp;- for classes that set&nbsp;<code class="highlighter-rouge">margin-bottom</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding-bottom</code>\n\t\t</li>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">l</code>&nbsp;- for classes that set&nbsp;<code class="highlighter-rouge">margin-left</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding-left</code>\n\t\t</li>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">r</code>&nbsp;- for classes that set&nbsp;<code class="highlighter-rouge">margin-right</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding-right</code>\n\t\t</li>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">x</code>&nbsp;- for classes that set both&nbsp;<code class="highlighter-rouge">*-left</code>&nbsp;and&nbsp;<code class="highlighter-rouge">*-right</code>\n\t\t</li>\n\t\t<li>\n\t\t\t<code class="highlighter-rouge">y</code>&nbsp;- for classes that set both&nbsp;<code class="highlighter-rouge">*-top</code>&nbsp;and&nbsp;<code class="highlighter-rouge">*-bottom</code>\n\t\t</li>\n\t\t<li>blank - for classes that set a&nbsp;<code class="highlighter-rouge">margin</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding</code>&nbsp;on all 4 sides of the element</li>\n\t</ul>\n\t<p>Where&nbsp;<em>size</em>&nbsp;is one of:</p>\n\t<ul>\n    '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"spacer",expression:[{type:"Twig.expression.type.variable",value:"spacers",match:["spacers"]}],output:[{type:"raw",value:'\t\t<li>\n\t\t\t<code class="highlighter-rouge">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:'</code>&nbsp;- for classes that set the&nbsp;<code class="highlighter-rouge">margin</code>&nbsp;or&nbsp;<code class="highlighter-rouge">padding</code>&nbsp; to&nbsp;<code class="highlighter-rouge">$spacer * '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"value"}]},{type:"raw",value:"</code>\n\t\t</li>\n\t\t"}]}},{type:"raw",value:'\t\t<li>\n\t\t\t<code class="highlighter-rouge">auto</code>&nbsp;- for classes that set the&nbsp;<code class="highlighter-rouge">margin</code>&nbsp;to auto</li>\n\t</ul>\n\t\n\t<h2>Horizontal centering</h2>\n\t<p>Additionally, also includes an&nbsp;<code class="highlighter-rouge">.mx-auto</code>&nbsp;class for horizontally centering fixed-width block level content&mdash;that is, content that has&nbsp;<code class="highlighter-rouge">display: block</code>&nbsp;and a&nbsp;<code class="highlighter-rouge">width</code>&nbsp;set&mdash;by setting the horizontal margins to&nbsp;<code class="highlighter-rouge">auto</code>.</p>\n\t<div class="bd-example">&nbsp;</div>\n\n  <h2>Examples</h2>\n\t'},{type:"logic",token:{type:"Twig.logic.type.set",key:"types",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Margin"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"m"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"negative"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"directions"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Padding"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"p"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"directions"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Gap"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"g"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"description"},{type:"Twig.expression.type.string",value:"Gap between flex child elements (either in a row or column)"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"directions"},{type:"Twig.expression.type.bool",value:!1},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"multiple"},{type:"Twig.expression.type.number",value:4,match:["4",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}]}},{type:"raw",value:"\n\t"},{type:"logic",token:{type:"Twig.logic.type.set",key:"sections",expression:[{type:"Twig.expression.type.variable",value:"types",match:["types"]}]}},{type:"raw",value:"\n\t<ul>\n\t\t"},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"section",expression:[{type:"Twig.expression.type.variable",value:"sections",match:["sections"]}],output:[{type:"raw",value:'\t\t\t<li>\n\t\t\t\t<a href="#'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section",match:["section"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section",match:["section"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"</a>\n\t\t\t</li>\n\t\t"}]}},{type:"raw",value:"\t</ul>\n\n\t"},{type:"logic",token:{type:"Twig.logic.type.set",key:"directions",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"All"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Top"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"t"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Bottom"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"b"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Left"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"l"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Right"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"r"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Horizontal / X"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"x"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Vertical / Y"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"y"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}]}},{type:"raw",value:"\n\t\n\t\n\t<p>Spacer range is defined in\n\t\t<code>global/base/styles.json</code><br/>\n\t\tAdditional spacers can be added there as well. Spacing system uses 8px increments.\n\t</p>\n\n  \n\n\t"},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"type",expression:[{type:"Twig.expression.type.variable",value:"types",match:["types"]}],output:[{type:"raw",value:'\t\t<h3 id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"</h3>\n\t\t"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"description"}],output:[{type:"raw",value:"\t\t\t<p>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"description"}]},{type:"raw",value:"</p>\n\t\t"}]}},{type:"raw",value:"\t\t"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"directions"}],output:[{type:"raw",value:"\t\t\t"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"negative"}],output:[{type:"raw",value:"\t\t\t\t<p>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\tcan also have negative spacers by adding n to the # e.g.\n\t\t\t\t\t"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"t-n1\n\t\t\t\t</p>\n\t\t\t"}]}},{type:"raw",value:"\n\t\t\t"},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"direction",expression:[{type:"Twig.expression.type.variable",value:"directions",match:["directions"]}],output:[{type:"raw",value:"\t\t\t\t<h4>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\t"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"direction",match:["direction"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\t"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"forward",match:["forward"]},{type:"Twig.expression.type.string",value:"negative"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"(Negative)\n\t\t\t\t\t"}]}},{type:"raw",value:'\t\t\t\t</h4>\n\t\t\t\t<div style="background-color: orange; overflow: scroll; height: 300px;">\n\t\t\t\t\t'},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"spacer",expression:[{type:"Twig.expression.type.variable",value:"spacers",match:["spacers"]}],output:[{type:"raw",value:'\t\t\t\t\t\t<div class="spacer '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"direction",match:["direction"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:'">\n\t\t\t\t\t\t\t<span class="d-block" style="background-color: #ccc">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"direction",match:["direction"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t(<code>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"direction",match:["direction"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:"</code>)</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t"}]}},{type:"raw",value:"\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t"}]}},{type:"raw",value:"\n\t\t"}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:'\n\t\t\t<div style="background-color: orange; overflow: scroll;  height: 300px;">\n\t\t\t\t'},{type:"logic",token:{type:"Twig.logic.type.set",key:"directions",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"col"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"row"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}]}},{type:"raw",value:"\n\n\t\t\t\t"},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"direction",expression:[{type:"Twig.expression.type.variable",value:"directions",match:["directions"]}],output:[{type:"raw",value:"\t\t\t\t\t"},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"spacer",expression:[{type:"Twig.expression.type.variable",value:"spacers",match:["spacers"]}],output:[{type:"raw",value:'\t\t\t\t\t\t<div class="spacer '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"multiple"}],output:[{type:"raw",value:"flex"}]}},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"direction",match:["direction"]},{type:"Twig.expression.type.string",value:"col"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"flex-col"}]}},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:'">\n\t\t\t\t\t\t\t'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"multiple"}],output:[{type:"raw",value:"\t\t\t\t\t\t\t\t"},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type._function",fn:"range",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"multiple"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],output:[{type:"raw",value:'\t\t\t\t\t\t\t\t\t<div class="spacer '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:'">\n\t\t\t\t\t\t\t\t\t\t<span class="d-block" style="background-color: #ccc">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t\t\t\t"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t\t\t\t(<code>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:"</code>)</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"}]}},{type:"raw",value:"\t\t\t\t\t\t\t"}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:'\t\t\t\t\t\t\t\t<span class="d-block" style="background-color: #ccc">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t\t"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:"\n\t\t\t\t\t\t\t\t\t(<code>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"spacer",match:["spacer"]},{type:"Twig.expression.type.key.period",key:"key"}]},{type:"raw",value:"</code>)</span>\n\t\t\t\t\t\t\t"}]}},{type:"raw",value:"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t"}]}},{type:"raw",value:"\t\t\t\t"}]}},{type:"raw",value:"\n\t\t\t</div>\n\t\t"}]}},{type:"raw",value:"\n\t"}]}},{type:"raw",value:'\t<hr>\n\t<h4>Row Gap or Col Gap\n\t\t<code>g-y-# / gap-x-#</code>\n\t</h4>\n\n  <h5>Row Gap <code>g-y-#</code></h5>\n  <div class="flex gap-y-1 mb-4 flex-col">\n    '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.number",value:5,match:["5",null]},{type:"Twig.expression.type.operator.binary",value:"..",precidence:20,associativity:"leftToRight",operator:".."}],output:[{type:"raw",value:'      <div class="spacer gap-x-1 flex flex-justify-center px-2" style="background-color: #ccc; height: 10px; width-8"></div>\n    '}]}},{type:"raw",value:'  </div>\n\n  <h5>Col Gap <code>gap-x-#</code></h5>\n  <div class="flex gap-x-3 mb-4">\n    '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.number",value:5,match:["5",null]},{type:"Twig.expression.type.operator.binary",value:"..",precidence:20,associativity:"leftToRight",operator:".."}],output:[{type:"raw",value:'      <div class="spacer gap-x-1 flex flex-justify-center px-2" style="background-color: #ccc; height: 200px; width-8"></div>\n    '}]}},{type:"raw",value:'  </div>\n\t\n\t<h3>Custom grid columns can be created using a combination of padding on the  and negative margin on the row div</h3>\n  <div class="grid-x gap-y-2 mx-n1">\n    '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.number",value:5,match:["5",null]},{type:"Twig.expression.type.operator.binary",value:"..",precidence:20,associativity:"leftToRight",operator:".."}],output:[{type:"raw",value:'      <div class=" md:col-span-6 lg:col-span-4 px-1">\n        <span class="d-block" style="border: 1px solid #000;background-color: #ccc; height: 200px;"><code>px-1</code></span>\n      </div>\n    '}]}},{type:"raw",value:"\n  </div>\n\n\n\t<hr>\n\n\t<h3>Misaneous Spacers</h3>\n\n\t"},{type:"logic",token:{type:"Twig.logic.type.set",key:"other_types",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Auto Horizontal Margin"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"m-auto"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"100% Width"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"w-full"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"100% Height"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selector"},{type:"Twig.expression.type.string",value:"h-100"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}]}},{type:"raw",value:'\t<div style="background-color: orange; overflow: hidden;">\n\t\t'},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"type",expression:[{type:"Twig.expression.type.variable",value:"other_types",match:["other_types"]}],output:[{type:"raw",value:'\t\t\t<span class="spacer d-block '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:'" style="'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"},{type:"Twig.expression.type.string",value:"m-auto"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"width: 300px;"}]}},{type:"raw",value:'background-color: #ccc">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"label"}]},{type:"raw",value:"\n\t\t\t\t(<code>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"selector"}]},{type:"raw",value:"</code>)</span>\n\t\t"}]}},{type:"raw",value:"\t</div>\n\n\n</div>\n"}],id:"src/stories/global/utilities/spacers/spacers.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/global/utilities/spacers/spacers.twig",module.exports.default=module.exports}}]);