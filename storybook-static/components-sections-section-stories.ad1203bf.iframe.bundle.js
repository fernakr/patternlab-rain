"use strict";(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[9054],{"./src/stories/components/sections/section.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundColor:function(){return BackgroundColor},Default:function(){return Default},Tight:function(){return Tight},__namedExportsOrder:function(){return __namedExportsOrder}});var _section_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/sections/section.twig"),_section_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_section_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Sections",argTypes:{intro_class:{control:"text"},section_style:{control:{type:"select"},options:["side",""]},section_image:{src:{control:"text"},alt:{control:"text"}}}};const Template=_ref=>{let{label:label,...args}=_ref;return _section_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},Default=Template.bind({}),defaultArgs={section_heading:"Heading",section_description:"Description",section_button:{url:"#",text:"Button"}};Default.args=defaultArgs;const BackgroundColor=Template.bind({});BackgroundColor.args={...defaultArgs,section_heading:"Background Color",section_class:"bg-solid-primary color-white"};const Tight=Template.bind({});Tight.args={...defaultArgs,section_heading:"Tight",section_class:"bg-solid-secondary-lightest section--tight"};const __namedExportsOrder=["Default","BackgroundColor","Tight"]}}]);