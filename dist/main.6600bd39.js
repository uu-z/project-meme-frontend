!function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)o=s[f],i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);d.length;)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={0:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([87,1]),r()}({143:function(t,e,r){"use strict";var n=r(36);r.n(n).a},144:function(t,e,r){"use strict";var n=r(37);r.n(n).a},145:function(t,e,r){"use strict";var n=r(38);r.n(n).a},146:function(t,e,r){"use strict";var n=r(39);r.n(n).a},147:function(t,e,r){"use strict";r.r(e);var n=r(10),i=r(40),a=r(75),o=r(76),s=r(85),l=r(86),c=r(83),u=r(80),f=r(82),d=r(81),p=r(79),h=r(84),g=r(3),m=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)};m._withStripped=!0;var v=r(4),y={created:function(){v.a.dispatch("INIT_APP")}},b=(r(145),r(1)),w=Object(b.a)(y,m,[],!1,null,null,null);w.options.__file="App.vue";var _=w.exports,x=r(28),O=r(11),S=r.n(O),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-waterfall-easy-container",style:{width:t.width&&!t.isMobile?t.width+"px":"",height:parseFloat(t.height)==t.height?t.height+"px":t.height}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isPreloading_c,expression:"isPreloading_c"}],staticClass:"loading ball-beat",class:{first:t.isFirstLoad}},[t._t("loading",null,{isFirstLoad:t.isFirstLoad}),t._l(t.loadingDotCount,function(e){return t.hasLoadingSlot?t._e():r("div",{staticClass:"dot",style:t.loadingDotStyle})})],2),t._t("waterfall-head"),r("div",{ref:"scrollEl",staticClass:"vue-waterfall-easy-scroll"},[r("div",{staticClass:"vue-waterfall-easy",style:t.isMobile?"":{width:t.colWidth*t.cols+"px",left:"50%",marginLeft:-1*t.colWidth*t.cols/2+"px"}},[t._l(t.imgsArr_c,function(e,n){return r("div",{staticClass:"img-box",class:[t.cardAnimationClass,{__err__:e._error}],style:{padding:(t.isMobile?t.mobileGap:t.gap)/2+"px",width:t.isMobile?"":t.colWidth+"px"}},[r(t.isRouterLink&&"card"==t.linkRange?"router-link":"Card",{tag:"component",staticClass:"img-inner-box",attrs:{padding:0,"data-index":n,to:"card"==t.linkRange&&e[t.hrefKey]}},[e[t.srcKey]?r(t.isRouterLink&&"img"==t.linkRange?"router-link":"a",{tag:"component",staticClass:"img-wraper",style:{height:!!e._height&&e._height+"px"},attrs:{to:"img"==t.linkRange&&e[t.hrefKey]}},[r("img",{attrs:{src:e[t.srcKey]}})]):t._e(),t._t("default",null,{index:n,value:e})],2)],1)}),t.over?r("div",{ref:"over",staticClass:"over"},[t._t("waterfall-over",[t._v("被你看光了")])],2):t._e()],2)])],2)};A._withStripped=!0;var T={name:"vue-waterfall-easy",props:{width:{type:Number},height:{type:[Number,String]},reachBottomDistance:{type:Number,default:500},loadingDotCount:{type:Number,default:3},loadingDotStyle:{type:Object},gap:{type:Number,default:20},mobileGap:{type:Number,default:8},maxCols:{type:Number,default:5},imgsArr:{type:Array,required:!0},srcKey:{type:String,default:"src"},hrefKey:{type:String,default:"href"},imgWidth:{type:Number,default:240},isRouterLink:{type:Boolean,default:!1},linkRange:{type:String,default:"card"},loadingTimeOut:{type:Number,default:500},cardAnimationClass:{type:[String],default:"default-card-animation"},enablePullDownEvent:{type:Boolean,default:!1}},data:function(){return{msg:"this is from vue-waterfall-easy.vue",isMobile:!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),isPreloading:!0,isPreloading_c:!0,imgsArr_c:[],loadedCount:0,cols:NaN,imgBoxEls:null,beginIndex:0,colsHeightArr:[],LoadingTimer:null,isFirstLoad:!0,over:!1}},computed:{colWidth:function(){return this.imgWidth+this.gap},waterfallWidth:function(){return this.colWidth*this.cols},imgWidth_c:function(){return this.isMobile?window.innerWidth/2-this.mobileGap:this.imgWidth},hasLoadingSlot:function(){return!!this.$scopedSlots.loading}},mounted:function(){var t=this;this.bindClickEvent(),this.loadingMiddle(),this.preload(),this.cols=this.calcuCols(),this.$on("preloaded",function(){t.isFirstLoad=!1,t.imgsArr_c=t.imgsArr.concat([]),t.$nextTick(function(){t.isPreloading=!1,t.imgBoxEls=t.$el.getElementsByClassName("img-box"),t.waterfall()})}),this.isMobile||this.width||this.response(),this.isMobile&&this.enablePullDownEvent&&this.pullDown(),this.scroll()},watch:{isPreloading:function(t,e){var r=this;t?setTimeout(function(){r.isPreloading&&(r.isPreloading_c=!0)},this.loadingTimeOut):this.isPreloading_c=!1},imgsArr:function(t,e){this.imgsArr_c.length!==t.length||this.imgsArr_c.length>0&&t[0]&&t[0]._height,this.preload()}},methods:{preload:function(t,e){var r=this;this.imgsArr.forEach(function(t,e){if(!(e<r.loadedCount)){if(!t[r.srcKey])return r.imgsArr[e]._height="0",r.loadedCount++,void(r.loadedCount==r.imgsArr.length&&r.$emit("preloaded"));var n=new Image;n.src=t[r.srcKey],n.onload=n.onerror=function(t){r.loadedCount++,r.imgsArr[e]._height="load"==t.type?Math.round(r.imgWidth_c/(n.width/n.height)):r.isMobile?r.imgWidth_c:r.imgWidth,"error"==t.type&&(r.imgsArr[e]._error=!0,r.$emit("imgError",r.imgsArr[e])),r.loadedCount==r.imgsArr.length&&r.$emit("preloaded")}}})},calcuCols:function(){var t=this.width?this.width:window.innerWidth,e=parseInt(t/this.colWidth);return e=0===e?1:e,this.isMobile?2:e>this.maxCols?this.maxCols:e},waterfall:function(){if(this.imgBoxEls){var t,e,r,n=this.isMobile?this.imgBoxEls[0].offsetWidth:this.colWidth;0==this.beginIndex&&(this.colsHeightArr=[]);for(var i=this.beginIndex;i<this.imgsArr.length;i++){if(!this.imgBoxEls[i])return;if(r=this.imgBoxEls[i].offsetHeight,i<this.cols)this.colsHeightArr.push(r),t=0,e=i*n+10;else{var a=Math.min.apply(null,this.colsHeightArr),o=this.colsHeightArr.indexOf(a);t=a,e=o*n+10,this.colsHeightArr[o]=a+r}this.imgBoxEls[i].style.left=e+"px",this.imgBoxEls[i].style.top=t+"px"}this.beginIndex=this.imgsArr.length}},response:function(){var t=this;window.addEventListener("resize",function(){var e=t.cols;t.cols=t.calcuCols(),e!==t.cols&&(t.beginIndex=0,t.waterfall(),t.over&&t.setOverTipPos())})},scrollFn:function(){var t=this.$refs.scrollEl;if(!this.isPreloading){var e=Math.min.apply(null,this.colsHeightArr);t.scrollTop+t.offsetHeight>e-this.reachBottomDistance&&(this.isPreloading=!0,this.$emit("scrollReachBottom"))}},scroll:function(){this.$refs.scrollEl.addEventListener("scroll",this.scrollFn)},waterfallOver:function(){this.$refs.scrollEl.removeEventListener("scroll",this.scrollFn),this.isPreloading=!1,this.over=!0,this.setOverTipPos()},setOverTipPos:function(){var t=this,e=Math.max.apply(null,this.colsHeightArr);this.$nextTick(function(){t.$refs.over.style.top=e+"px"})},bindClickEvent:function(){var t=this;this.$el.querySelector(".vue-waterfall-easy").addEventListener("click",function(e){var r=e.target;if(-1===e.target.className.indexOf("over")&&-1==r.className.indexOf("img-box")){for(;-1==r.className.indexOf("img-inner-box");)r=r.parentNode;var n=r.getAttribute("data-index");t.$emit("click",e,{index:n,value:t.imgsArr_c[n]})}})},pullDown:function(){var t,e=this,r=this.$el.querySelector(".vue-waterfall-easy-scroll");r.addEventListener("touchmove",function(n){if(0===r.scrollTop){var i=n.changedTouches[0];t||(t=i.pageY);var a=i.pageY-t;a>0&&n.preventDefault(),e.$emit("pullDownMove",a)}}),r.addEventListener("touchend",function(n){0===r.scrollTop&&(t=NaN,e.$emit("pullDownEnd"))})},loadingMiddle:function(){var t=this.$el.querySelector(".vue-waterfall-easy-scroll"),e=t.offsetWidth-t.clientWidth;this.$el.querySelector(".loading").style.marginLeft=-e/2+"px"},reset:function(){this.imgsArr_c=[],this.beginIndex=0,this.loadedCount=0,this.isFirstLoad=!0,this.isPreloading=!0,this.scroll(),this.over=!1}}},j=(r(146),Object(b.a)(T,A,[],!1,null,"6ca9717f",null));j.options.__file="components/vue-waterfall-easy.vue";var I=j.exports,k=r(78),E=r.n(k);function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}for(var C=h.a,M=p.a,$=d.a,N=f.a,L=u.a,B=c.a,W=l.a,D=s.a,G=o.a,F=a.a,R=i.a,q=n.a,U={uploader:E.a},H={Notice:F,Message:R},K={vueWaterfallEasy:I,Button:C,Modal:M,BackTop:$,Tag:N,Input:L,Affix:B,Card:W,Form:D,FormItem:G,Icon:q},z=Object.entries(K),J=0;J<z.length;J++){var Y=P(z[J],2),Q=Y[0],V=Y[1];g.a.component(Q,V)}for(var X=Object.entries(U),Z=0;Z<X.length;Z++){var tt=P(X[Z],2);Q=tt[0],V=tt[1];g.a.use(V)}for(var et=Object.entries(H),rt=0;rt<et.length;rt++){var nt=P(et[rt],2);Q=nt[0],V=nt[1];g.a.prototype["$".concat(Q)]=V}g.a.http=g.a.prototype.$http=S.a,g.a.config.productionTip=!1,new g.a({components:{App:_},router:x.a,store:v.a,render:function(t){return t(_)}}).$mount("#app")},148:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Login"},[r("Card",{staticClass:"formCard"},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("密码登录")]),r("Form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("FormItem",{attrs:{prop:"identifier"}},[r("Input",{attrs:{type:"text",placeholder:"用户名或邮箱"},model:{value:t.form.identifier,callback:function(e){t.$set(t.form,"identifier",e)},expression:"form.identifier"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"密码"},on:{"on-enter":t.handleLogin},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:t.handleLogin}},[t._v("登录")]),r("Button",{staticStyle:{"margin-left":"5px"},on:{click:t.handleSignUp}},[t._v("注册")])],1)],1)],1)],1)};n._withStripped=!0;var i=r(2),a=r.n(i),o=(r(11),r(4));r(8);function s(t,e,r,n,i,a,o){try{var s=t[a](o),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,i)}function l(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function o(t){s(a,n,i,o,l,"next",t)}function l(t){s(a,n,i,o,l,"throw",t)}o(void 0)})}}var c={data:function(){return{form:{identifier:"",password:""},rule:{identifier:[{required:!0,message:"请输入用户名/邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{handleLogin:function(){var t=l(a.a.mark(function t(){var e=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate(function(){var t=l(a.a.mark(function t(r){var n,i,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return n=e.form,i=n.identifier,s=n.password,t.next=4,o.a.dispatch("LOGIN",{data:{identifier:i,password:s}});case 4:t.next=7;break;case 6:e.$Message.error("请输入正确的账号密码");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleSignUp:function(){var t=l(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$Notice.warning({title:"暂未开放注册",desc:""});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},u=(r(144),r(1)),f=Object(u.a)(c,n,[],!1,null,"696b872c",null);f.options.__file="views/login.vue";e.default=f.exports},149:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("BackTop"),r("Modal",{attrs:{"footer-hide":!0},model:{value:t.uploadModal,callback:function(e){t.uploadModal=e},expression:"uploadModal"}},[r("uploader",{staticClass:"uploader-example",style:{width:"100%"},attrs:{options:t.uploadOptions}},[r("uploader-unsupport"),r("uploader-drop",[r("p",[t._v("Drop files here to upload")]),r("uploader-btn",{attrs:{attrs:t.attrs}},[t._v("select images")])],1),r("uploader-list")],1),r("div",{attrs:{slot:"footer"},slot:"footer"})],1),r("Modal",{on:{"on-ok":t.onSubmitEdit},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[t._l(t.currentSelectImage.tags,function(e){return r("Tag",{key:e,staticClass:"img-tag",attrs:{name:e,closable:""},on:{"on-close":function(r){t.handleCloseTag(e)}}},[t._v(t._s(e))])}),t.currentSelectImage.isAddTag?t._e():r("Button",{attrs:{icon:"ios-add",type:"dashed",size:"small"},on:{click:function(e){t.$set(t.currentSelectImage,"isAddTag",!0)}}},[t._v("添加标签")]),t.currentSelectImage.isAddTag?r("Input",{staticStyle:{width:"60px"},attrs:{size:"small",autofocus:""},on:{"on-change":function(e){t.currentSelectImage.addTagText=e.target.value},"on-enter":t.handleInputTag,"on-blur":t.handleInputTag}}):t._e()],2),this.$refs.waterfall?r("div",{staticClass:"toolbox",style:{color:"red",width:t.waterfallWidth+"px"}},[r("Affix",{attrs:{"offset-top":0}},[r("Card",[r("div",{style:{display:"flex",alignItems:"center"},attrs:{slot:"title"},slot:"title"},[r("p",[t._v("二次元表情包")]),r("Input",{attrs:{clearable:""},on:{"on-enter":t.handleSearch,"on-blur":t.handleSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("Button",{attrs:{icon:"md-search"},on:{click:t.handleSearch}}),r("Button",{attrs:{icon:"md-add"},on:{click:t.handleUpload}})],1)])],1)],1):t._e(),r("div",{staticClass:"waterfall-box"},[r("vue-waterfall-easy",{ref:"waterfall",attrs:{maxCols:6,imgWidth:180,scrollStyle:{"padding-top":"100px"},imgsArr:t.images.list,srcKey:"url"},on:{scrollReachBottom:t.getImages,click:t.clickFn},scopedSlots:t._u([{key:"default",fn:function(e){return r("div",{staticClass:"img-info"},[r("p",[t._v(t._s(e.value.tags?e.value.tags.join(","):""))])])}}])})],1)],1)};n._withStripped=!0;var i=r(35).a,a=(r(143),r(1)),o=Object(a.a)(i,n,[],!1,null,null,null);o.options.__file="views/images.vue";e.default=o.exports},28:function(t,e,r){"use strict";var n=r(3),i=r(58),a=r(4),o=r(77),s=r.n(o);n.a.use(i.a);var l=new i.a({routes:[{path:"/",name:"images",component:r(149).default},{path:"/login",name:"login",component:r(148).default},{path:"*",redirect:"/"}]});l.beforeEach(function(t,e,r){var n=[].includes(t.path),i=a.a.state.jwt;if(n&&!i)return r("/login");r()}),s()(l,"UA-128746837-1"),e.a=l},35:function(t,e,r){"use strict";(function(t){var n=r(2),i=r.n(n),a=(r(11),r(4)),o=r(8);function s(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){c(t,e,r[e])})}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e,r,n,i,a,o){try{var s=t[a](o),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,i)}function f(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function o(t){u(a,n,i,o,s,"next",t)}function s(t){u(a,n,i,o,s,"throw",t)}o(void 0)})}}e.a=c({data:function(){return{search:null,files:null,uploadModal:!1,editModal:!1,currentSelectImage:{tags:[],addTagText:"",isAddTag:!1},attrs:{accept:"image/*"}}},watch:{},mounted:function(){var t=f(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.getImages();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:l({uploadOptions:function(){return{target:"".concat(a.a.state.apiRoot,"/upload"),fileParameterName:"files",testChunks:!1,headers:{Authorization:"Bearer ".concat(a.a.state.jwt)}}},uploadUrl:function(){return"".concat(a.a.state.apiRoot,"/upload")}},Object(o.a)(["images","jwt"]),{waterfallWidth:function(){return this.$refs.waterfall.waterfallWidth}}),methods:{handleSearch:function(){var t=f(i.a.mark(function t(){var e,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.search,r={},e&&(r.tags_contains=e),this.$router.replace({path:"images",query:r});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleUpload:function(){var t=f(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.jwt?this.uploadModal=!0:this.$router.push("login");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onSubmitEdit:function(){var t=f(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=_.pick(this.currentSelectImage,["tags"]),t.next=3,a.a.dispatch("EDIT_IMAGE",{id:this.currentSelectImage.id,data:e});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCloseTag:function(t){this.currentSelectImage.tags=s(_.pull(this.currentSelectImage.tags,t))},handleInputTag:function(){this.currentSelectImage.addTagText&&(this.currentSelectImage.isAddTag=!1,this.currentSelectImage.tags=_.uniq(s(this.currentSelectImage.tags||[]).concat([this.currentSelectImage.addTagText])))},clickFn:function(){var e=f(i.a.mark(function e(r,n){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n.index,n.value,this.currentSelectImage=l({},this.images.list[a]),t._E=r,this.editModal=!0;case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getImages:function(){var t=f(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.dispatch("GET_IMAGES");case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),reload:function(t){},removeTags:function(t){}}},"watch",{"$route.query":function(t,e){this.images={list:[],_query:t},this.getImages(),this.$refs.waterfall.reset()}})}).call(this,r(24))},36:function(t,e,r){},37:function(t,e,r){},38:function(t,e,r){},39:function(t,e,r){},4:function(t,e,r){"use strict";var n=r(3),i=r(57),a=r(2),o=r.n(a),s=r(12),l=r.n(s),c=r(8),u=function(t){var e=t.params;return Object(c.b)({url:"upload/files",params:e})},f=function(t){var e=t.id,r=t.data;return Object(c.b)({method:"PUT",url:"upload/".concat(e,"/edit"),data:r})},d=function(t){var e=t.data;return Object(c.b)({method:"POST",url:"auth/local",data:e})},p=r(23),h=r.n(p),g=r(28);function m(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){y(t,e,r[e])})}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e,r,n,i,a,o){try{var s=t[a](o),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,i)}function w(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function o(t){b(a,n,i,o,s,"next",t)}function s(t){b(a,n,i,o,s,"throw",t)}o(void 0)})}}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x={state:{apiRoot:"https://api.yuyuko.me",images:{_sort:"createdAt:desc",_limit:30,_query:{tags_contains:null},list:[]},jwt:"",user:{}},mutations:{ASSIGN_STATE:function(t,e){for(var r=Object.entries(e),n=0;n<r.length;n++){var i=_(r[n],2),a=i[0],o=i[1];t[a]=o}},SET_STATE:function(t,e){for(var r=Object.entries(e),n=0;n<r.length;n++){var i=_(r[n],2),a=i[0],o=i[1];l.a.set(t,a,o)}},CUSTOM:function(t,e){e(t)}},actions:{INIT_APP:function(){var t=w(o.a.mark(function t(e){var r,n,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.dispatch,r=e.commit,n=h.a.get("jwt"),i=h.a.get("user"),r("ASSIGN_STATE",{jwt:n,user:i});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),RE_LOGIN:function(){var t=w(o.a.mark(function t(e){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.dispatch,e.commit,t.next=3,r("LOG_OUT");case 3:g.a.push("login");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),LOG_OUT:function(){var t=w(o.a.mark(function t(e){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.dispatch,r=e.commit,h.a.remove("jwt"),h.a.remove("user"),r("ASSIGN_STATE",{jwt:"",user:{}});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),LOGIN:function(){var t=w(o.a.mark(function t(e,r){var n,i,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.dispatch,n=e.commit,i=r.data,t.next=4,d({data:i});case 4:a=t.sent,h.a.setAll(a),n("ASSIGN_STATE",a),g.a.push("images");case 8:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),GET_IMAGES:function(){var t=w(o.a.mark(function t(e){var r,n,i,a,s,l,c,f,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.dispatch,r=e.commit,n=e.state,i=n.images.list.length,a=n.images,s=a._limit,l=a._sort,c=a._query,f=v({_sort:l,_start:i,_limit:s},c),t.next=6,u({params:f});case 6:d=t.sent,r("CUSTOM",function(t){t.images.list=m(t.images.list).concat(m(d))});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),EDIT_IMAGE:function(){var t=w(o.a.mark(function t(e,r){var n,i,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.dispatch,n=e.commit,e.state,i=r.id,a=r.data,t.next=4,f({id:i,data:a});case 4:s=t.sent,n("CUSTOM",function(t){t.images.list.forEach(function(t,e){t._id==s._id&&Object.assign(t,s)})});case 6:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()}};function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n.a.use(i.a);e.a=new i.a.Store(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){O(t,e,r[e])})}return t}({},x,{strict:!0}))},8:function(t,e,r){"use strict";var n=r(40),i=r(11),a=r.n(i),o=r(12),s=r.n(o),l=r(4);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}a.a.interceptors.request.use(function(t){return console.log(t),"get"!==t.method&&l.a.state.jwt&&(t.headers.Authorization="Bearer ".concat(l.a.state.jwt)),t}),a.a.interceptors.response.use(function(t){return t.data},function(t){return t.message&&n.a.error(t.message),t.statusCode&&401==t.statusCode&&l.a.dispatch("RE_LOGIN"),Promise.reject(t)});var u=function(t){return a()(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){c(t,e,r[e])})}return t}({method:"GET",baseURL:l.a.state.apiRoot},t))};function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return s.a.zipObject(t,t.map(function(t){return{get:function(){return s.a.get(l.a.state,t,{})},set:function(e){l.a.commit("CUSTOM",function(r){var n=s.a.get(l.a.state,t,{});s.a.set(l.a.state,t,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){f(t,e,r[e])})}return t}({},n,e))})}}}))};r.d(e,"b",function(){return u}),r.d(e,"a",function(){return d})},87:function(t,e,r){t.exports=r(147)}});
//# sourceMappingURL=main.6600bd39.js.map