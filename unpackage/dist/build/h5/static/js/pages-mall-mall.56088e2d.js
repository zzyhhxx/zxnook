(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mall-mall"],{"08ed":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"top-image"},[e("v-uni-image",{staticClass:"image",attrs:{src:t.info.petAvatar,mode:""}})],1),e("v-uni-view",{staticClass:"pet-info"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"item-name"},[t._v("名字:")]),e("v-uni-view",{staticClass:"item-desc"},[t._v(t._s(t.info.petName))])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"item-name"},[t._v("年龄:")]),e("v-uni-view",{staticClass:"item-desc"},[t._v(t._s(t.age))])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"item-name"},[t._v("品种:")]),e("v-uni-view",{staticClass:"item-desc"},[t._v(t._s(t.breed))])],1)],1)],1)},r=[]},"0bcd":function(t,a,e){var i=e("a688");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6129b620",i,!0,{sourceMap:!1,shadowMode:!1})},"0ce7":function(t,a,e){"use strict";e.r(a);var i=e("bfa0"),n=e("a14c");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("63fe");var c,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4970cd64",null,!1,i["a"],c);a["default"]=o.exports},"0d68":function(t,a,e){t.exports=e.p+"static/img/dog2.949adccd.png"},"118c":function(t,a,e){"use strict";var i=e("0bcd"),n=e.n(i);n.a},"1e09":function(t,a,e){var i=e("845b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("da0d47cc",i,!0,{sourceMap:!1,shadowMode:!1})},2342:function(t,a,e){"use strict";e.r(a);var i=e("b5a8"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},"24f9":function(t,a,e){"use strict";e.r(a);var i=e("834a"),n=e("d402");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("118c");var c,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ff7dba2a",null,!1,i["a"],c);a["default"]=o.exports},3851:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"tab-control",props:{list:{type:Array,default:function(){return[]}},currentIndex:{type:Number,default:0}},data:function(){return{}},methods:{tabClick:function(t){this.$emit("tabClick",t)}}};a.default=i},"4a6d":function(t,a,e){var i=e("f051");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("88a02ba4",i,!0,{sourceMap:!1,shadowMode:!1})},"5c8d":function(t,a,e){"use strict";var i=e("fe72"),n=e.n(i);n.a},"63fe":function(t,a,e){"use strict";var i=e("4a6d"),n=e.n(i);n.a},"721e":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={cardClassify:e("0ce7").default,tabControl:e("24f9").default,cardSmallpic:e("bafb").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:2e3,duration:500}},[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:e("c14d"),mode:""}})],1)],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:e("c3b6"),mode:""}})],1)],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:e("0d68"),mode:""}})],1)],1)],1),i("v-uni-view",{staticClass:"list"},[i("card-classify"),i("card-classify"),i("card-classify"),i("card-classify"),i("card-classify"),i("card-classify")],1),i("tab-control",{ref:"tabcontrol",attrs:{currentIndex:t.currentIndex},on:{tabClick:function(a){arguments[0]=a=t.$handleEvent(a),t.onTabClick.apply(void 0,arguments)}}}),t.showFixTabControl?i("tab-control",{staticClass:"fixed",attrs:{currentIndex:t.currentIndex},on:{tabClick:function(a){arguments[0]=a=t.$handleEvent(a),t.onTabClick.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"list"},[i("card-smallpic"),i("card-smallpic"),i("card-smallpic"),i("card-smallpic"),i("card-smallpic"),i("card-smallpic"),i("card-smallpic"),i("card-smallpic")],1)],1)},r=[]},"7e84":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"card-classify",props:{image:{type:String,default:""},text:{type:String,default:""}}};a.default=i},"834a":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-scroll-view",{staticClass:"tab-control",attrs:{"scroll-x":!0,"show-scrollbar":!1}},[e("v-uni-view",{staticClass:"tab-content"},t._l(t.list,(function(a,i){return e("v-uni-view",{key:i,staticClass:"tab-item",class:{active:t.currentIndex===i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(i)}}},[t._v(t._s(a.name))])})),1)],1)},r=[]},"845b":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".card[data-v-c629d510]{width:%?276?%;height:%?370?%;background-color:#f8f8fb;border-radius:%?24?%}.top-image[data-v-c629d510]{width:%?236?%;height:%?188?%;margin:%?20?%;border-radius:%?30?%;overflow:hidden}.top-image .image[data-v-c629d510]{width:%?236?%;height:%?188?%}.pet-info .item[data-v-c629d510]{display:flex;white-space:nowrap;font-size:%?20?%;margin-left:%?20?%;line-height:%?40?%}",""]),t.exports=a},a14c:function(t,a,e){"use strict";e.r(a);var i=e("7e84"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},a2bd:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".content[data-v-02b363fe]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff}.swiper[data-v-02b363fe]{width:%?604?%}.list[data-v-02b363fe]{width:%?604?%;display:flex;justify-content:space-between;align-content:space-between;flex-wrap:wrap}.fixed[data-v-02b363fe]{position:fixed;z-index:999;top:%?88?%;left:0;right:0;margin:0 auto}",""]),t.exports=a},a688:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".tab-control[data-v-ff7dba2a]{height:%?88?%;width:%?604?%;background-color:#fff}.tab-content[data-v-ff7dba2a]{display:flex;justify-content:space-around;flex-wrap:nowrap;width:-webkit-fit-content;width:fit-content}.tab-item[data-v-ff7dba2a]{width:%?100?%;white-space:nowrap;line-height:%?98?%}.active[data-v-ff7dba2a]{color:var(--color-high-text)}",""]),t.exports=a},abd8:function(t,a,e){"use strict";var i=e("1e09"),n=e.n(i);n.a},b5a8:function(t,a,e){"use strict";e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("6b58"),n={name:"CardSmallpic",props:{info:{type:Object,default:function(){return{}}},breeds:{type:Array,default:function(){return[]}}},computed:{age:function(){return(0,i.getAge)(this.info.petBirthday)},breed:function(){var t=this,a="";return this.breeds.forEach((function(e){e.articleId===t.info.petBreed&&(a=e.articleTitle)})),a}}};a.default=n},bafb:function(t,a,e){"use strict";e.r(a);var i=e("08ed"),n=e("2342");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("abd8");var c,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"c629d510",null,!1,i["a"],c);a["default"]=o.exports},bfa0:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{staticClass:"image",attrs:{src:t.image,mode:""}})],1),e("v-uni-view",{staticClass:"right"},[t._v(t._s(t.text))])],1)},r=[]},c14d:function(t,a,e){t.exports=e.p+"static/img/dog1.01aabe16.png"},c3b6:function(t,a,e){t.exports=e.p+"static/img/dog4.964d41cb.png"},d402:function(t,a,e){"use strict";e.r(a);var i=e("3851"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},e28b:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{currentIndex:0,showFixTabControl:!1}},methods:{onPageScroll:function(t){var a=this.$refs.tabcontrol.$el.offsetTop,e=t.scrollTop>a;this.showFixTabControl!==e&&(this.showFixTabControl=e)},onTabClick:function(t){this.currentIndex=t}}};a.default=i},e422:function(t,a,e){"use strict";e.r(a);var i=e("e28b"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},f051:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".card[data-v-4970cd64]{width:%?178?%;height:%?98?%;background-color:#f8f8fb;border-radius:%?18?%;display:flex}.left[data-v-4970cd64]{width:%?70?%;height:%?98?%;border-radius:%?18?%;overflow:hidden;position:relative;margin-left:%?16?%}.left .image[data-v-4970cd64]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?70?%;height:%?70?%}.right[data-v-4970cd64]{flex:1;margin-left:%?18?%;font-size:%?24?%;line-height:%?98?%}",""]),t.exports=a},f951:function(t,a,e){"use strict";e.r(a);var i=e("721e"),n=e("e422");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("5c8d");var c,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"02b363fe",null,!1,i["a"],c);a["default"]=o.exports},fe72:function(t,a,e){var i=e("a2bd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("61e400b1",i,!0,{sourceMap:!1,shadowMode:!1})}}]);