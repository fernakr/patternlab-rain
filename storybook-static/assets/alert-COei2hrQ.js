import{T as i,t as o}from"./twig-DGqAAA8S.js";import{a as n,D as p}from"./twig-xRDxs_F9.js";n(i);i.cache(!1);const a=t=>t,y=(t={})=>{const e=o.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/informational/alert/alert.twig",data:[{type:"raw",value:'<div class="alert-bar bg-secondary py-4 ',position:{start:0,end:40}},{type:"output",position:{start:40,end:61},stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"],position:{start:40,end:61}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:40,end:61}}]},{type:"raw",value:'" ',position:{start:61,end:63}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:63,end:90},output:[{type:"raw",value:"data-closable",position:{start:90,end:103}}]},position:{open:{start:63,end:90},close:{start:103,end:114}}},{type:"raw",value:`>
  <div class="container flex gap-3 justify-center">
    `,position:{start:114,end:172}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:172,end:196},output:[{type:"raw",value:'      <span class="alert-bar_label font-bold">',position:{start:197,end:243}},{type:"output",position:{start:243,end:254},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:243,end:254}}]},{type:"raw",value:`:</span>
    `,position:{start:254,end:267}}]},position:{open:{start:172,end:196},close:{start:267,end:278}}},{type:"raw",value:"    ",position:{start:279,end:283}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:283,end:306},output:[{type:"raw",value:'      <a href="',position:{start:307,end:322}},{type:"output",position:{start:322,end:336},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:322,end:336}},{type:"Twig.expression.type.key.period",position:{start:322,end:336},key:"url"}]},{type:"raw",value:'" ',position:{start:336,end:338}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"target"}],position:{start:338,end:358},output:[{type:"raw",value:'target="',position:{start:358,end:366}},{type:"output",position:{start:366,end:383},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:366,end:383}},{type:"Twig.expression.type.key.period",position:{start:366,end:383},key:"target"}]},{type:"raw",value:'"',position:{start:383,end:384}}]},position:{open:{start:338,end:358},close:{start:384,end:395}}},{type:"raw",value:">",position:{start:395,end:396}},{type:"output",position:{start:396,end:406},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:396,end:406}}]},{type:"raw",value:`</a>
    `,position:{start:406,end:415}}]},position:{open:{start:283,end:306},close:{start:415,end:425}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:415,end:425},output:[{type:"raw",value:"      <span>",position:{start:426,end:438}},{type:"output",position:{start:438,end:448},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:438,end:448}}]},{type:"raw",value:`</span>      
    `,position:{start:448,end:466}}]},position:{open:{start:415,end:425},close:{start:466,end:477}}},{type:"raw",value:"    ",position:{start:478,end:482}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:482,end:509},output:[{type:"raw",value:'      <button class="',position:{start:510,end:531}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:531,end:572},output:[{type:"raw",value:"close-button",position:{start:572,end:584}}]},position:{open:{start:531,end:572},close:{start:584,end:594}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:584,end:594},output:[{type:"raw",value:"button",position:{start:594,end:600}}]},position:{open:{start:584,end:594},close:{start:600,end:611}}},{type:"raw",value:`" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">`,position:{start:611,end:699}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:699,end:731},output:[{type:"output",position:{start:731,end:750},stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"],position:{start:731,end:750}}]}]},position:{open:{start:699,end:731},close:{start:750,end:760}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:750,end:760},output:[{type:"raw",value:"&times;",position:{start:760,end:767}}]},position:{open:{start:750,end:760},close:{start:767,end:778}}},{type:"raw",value:`</span>
      </button>
    `,position:{start:778,end:806}}]},position:{open:{start:482,end:509},close:{start:806,end:817}}},{type:"raw",value:`  </div>
</div>
`,position:{start:818,end:818}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return a(e.render({attributes:new p,...t}))}catch(s){return a("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/informational/alert/alert.twig: "+s.toString())}};export{y as t};