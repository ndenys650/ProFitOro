webpackJsonp([6],{"/Wmz":function(t,a,o){"use strict";var e=o("9Iir");o.d(a,"a",function(){return e.a});var n=o("Kgu/");o.d(a,"b",function(){return n.a});var i=o("b+lr");o.d(a,"c",function(){return i.a})},"09EU":function(t,a,o){var e=o("UySl");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o("rjj0").default)("2d8e53ed",e,!1,{sourceMap:!1})},"5huc":function(t,a,o){(t.exports=o("FZ+f")(!1)).push([t.i,".tagline[data-v-4d51d30b]{margin:0;font-weight:lighter;letter-spacing:1px}",""])},"9Iir":function(t,a,o){"use strict";var e=o("Gu8G"),n=o("JrSE"),i=!1;var r=function(t){i||o("Gw1Z")},d=o("VU/8")(e.a,n.a,!1,r,"data-v-29ad388b",null);d.options.__file="components/landing/Authentication.vue",a.a=d.exports},Gu8G:function(t,a,o){"use strict";var e=o("Dd8w"),n=o.n(e),i=o("NYxO"),r="Already a member? Log in here!",d="Don't have an account? Sign up here!",c="LOGIN",s="SIGN UP";a.a={data:function(){return{isLogin:!0,email:"",password:""}},computed:{titleText:function(){return this.isLogin?r:d},switchButtonText:function(){return this.isLogin?d:r},actionButtonText:function(){return this.isLogin?c:s}},methods:n()({},Object(i.mapActions)(["createUser","authenticate","authenticateAnonymous"]),{onSwitch:function(){this.isLogin=!this.isLogin},onAction:function(t){t.preventDefault(),t.stopPropagation(),(this.isLogin?this.authenticate:this.createUser)({email:this.email,password:this.password})}})}},Gw1Z:function(t,a,o){var e=o("oh7x");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o("rjj0").default)("f9db03c0",e,!1,{sourceMap:!1})},JrSE:function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"loginForm-holder"},[o("div",[t._v(t._s(t.titleText))]),o("form",{staticClass:"form row"},[o("div",{staticClass:"col-md-12 col-lg-6 form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input white",attrs:{type:"email",placeholder:"username or email address"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input white",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),o("div",{staticClass:"buttons-holder col-md-12"},[o("button",{staticClass:"button button-lp-primary",attrs:{type:"button"},on:{click:t.onAction}},[t._v(t._s(this.actionButtonText))]),o("span",{staticClass:"or-text"},[t._v("OR")]),o("div",{staticClass:"anonymous-login"},[o("nuxt-link",{staticClass:"button button-lp-secondary",attrs:{to:"pomodoro",tag:"button"}},[t._v("START WITHOUT REGISTRATION")]),o("div",{staticClass:"anonymous-text"},[t._v("This version will not allow you to personalise your profile or add new workouts")])],1)])]),o("div",{staticClass:"form-changer col-md-12 col-lg-6"},[o("button",{staticClass:"button button-lp-primary-faded",on:{click:t.onSwitch}},[t._v(t._s(this.switchButtonText))])])])};e._withStripped=!0;var n={render:e,staticRenderFns:[]};a.a=n},"Kgu/":function(t,a,o){"use strict";var e=o("Wuox"),n=o("XOm2"),i=!1;var r=function(t){i||o("09EU")},d=o("VU/8")(e.a,n.a,!1,r,"data-v-7981006a",null);d.options.__file="components/landing/LogoText.vue",a.a=d.exports},SzBI:function(t,a,o){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"landingPage"},[a("div",{staticClass:"container row justify-content-center align-items-center"},[a("div",{staticClass:"col-sm-12 col-md-12"},[a("logo-text"),a("tagline"),a("authentication")],1)])])};e._withStripped=!0;var n={render:e,staticRenderFns:[]};a.a=n},U0rQ:function(t,a,o){(t.exports=o("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-18804380]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-18804380]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-18804380]{background-color:#388e3c}.button.button-primary-faded[data-v-18804380]{color:#388e3c;background-color:#c8e6c9}.button.button-lp-primary[data-v-18804380]{background-color:#4caf50}.button.button-lp-primary-faded[data-v-18804380]{background-color:#81de84}.button.button-lp-secondary[data-v-18804380]{color:#4caf50;background-color:#fff}.button[data-v-18804380]:hover{opacity:.8}.button[data-v-18804380]:active,.button[data-v-18804380]:focus{opacity:1}.input[data-v-18804380]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-18804380]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-18804380]:-ms-input-placeholder{color:#757575}.input[data-v-18804380]::-webkit-input-placeholder{color:#757575}.input.white[data-v-18804380]{color:#fff;border-bottom-color:#fff}.input.white[data-v-18804380]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-18804380]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-18804380]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-18804380]:focus{outline:none}.bold[data-v-18804380]{font-weight:700}.form[data-v-18804380]{padding:40px 0}.min-full-height[data-v-18804380]{min-height:calc(100vh - 210px)}.title[data-v-18804380]{font-size:25px;color:#388e3c}.main-content[data-v-18804380]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-18804380]{width:760px;max-width:100%}}.landingPage[data-v-18804380]{min-height:100vh;background-color:#4caf50;color:#fff}.landingPage .container[data-v-18804380]{margin:0 auto;padding-top:60px;padding-bottom:60px}",""])},UySl:function(t,a,o){(t.exports=o("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-7981006a]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-7981006a]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-7981006a]{background-color:#388e3c}.button.button-primary-faded[data-v-7981006a]{color:#388e3c;background-color:#c8e6c9}.button.button-lp-primary[data-v-7981006a]{background-color:#4caf50}.button.button-lp-primary-faded[data-v-7981006a]{background-color:#81de84}.button.button-lp-secondary[data-v-7981006a]{color:#4caf50;background-color:#fff}.button[data-v-7981006a]:hover{opacity:.8}.button[data-v-7981006a]:active,.button[data-v-7981006a]:focus{opacity:1}.input[data-v-7981006a]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-7981006a]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-7981006a]:-ms-input-placeholder{color:#757575}.input[data-v-7981006a]::-webkit-input-placeholder{color:#757575}.input.white[data-v-7981006a]{color:#fff;border-bottom-color:#fff}.input.white[data-v-7981006a]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-7981006a]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-7981006a]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-7981006a]:focus{outline:none}.bold[data-v-7981006a]{font-weight:700}.form[data-v-7981006a]{padding:40px 0}.min-full-height[data-v-7981006a]{min-height:calc(100vh - 210px)}.title[data-v-7981006a]{font-size:25px;color:#388e3c}.main-content[data-v-7981006a]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-7981006a]{width:760px;max-width:100%}}.logo-text[data-v-7981006a]{margin:0;line-height:60px;font-weight:lighter;font-size:60px;letter-spacing:2px;text-transform:uppercase}",""])},Wuox:function(t,a,o){"use strict";a.a={}},XOm2:function(t,a,o){"use strict";var e=function(){var t=this.$createElement;this._self._c;return this._m(0)};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"logo-text"},[this._v("Profit'"),a("span",{staticClass:"bold"},[this._v("oro")])])}]};a.a=n},XXys:function(t,a,o){"use strict";var e=o("/Wmz");a.a={components:{Authentication:e.a,LogoText:e.b,Tagline:e.c}}},"b+lr":function(t,a,o){"use strict";var e=o("xhi9"),n=o("qGSc"),i=!1;var r=function(t){i||o("nCBF")},d=o("VU/8")(e.a,n.a,!1,r,"data-v-4d51d30b",null);d.options.__file="components/landing/Tagline.vue",a.a=d.exports},bIR0:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o("XXys"),n=o("SzBI"),i=!1;var r=function(t){i||o("qSQH")},d=o("VU/8")(e.a,n.a,!1,r,"data-v-18804380",null);d.options.__file="pages/login.vue",a.default=d.exports},nCBF:function(t,a,o){var e=o("5huc");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o("rjj0").default)("9ef909d4",e,!1,{sourceMap:!1})},oh7x:function(t,a,o){(t.exports=o("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-29ad388b]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-29ad388b]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-29ad388b]{background-color:#388e3c}.button.button-primary-faded[data-v-29ad388b]{color:#388e3c;background-color:#c8e6c9}.button.button-lp-primary[data-v-29ad388b]{background-color:#4caf50}.button.button-lp-primary-faded[data-v-29ad388b]{background-color:#81de84}.button.button-lp-secondary[data-v-29ad388b]{color:#4caf50;background-color:#fff}.button[data-v-29ad388b]:hover{opacity:.8}.button[data-v-29ad388b]:active,.button[data-v-29ad388b]:focus{opacity:1}.input[data-v-29ad388b]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-29ad388b]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-29ad388b]:-ms-input-placeholder{color:#757575}.input[data-v-29ad388b]::-webkit-input-placeholder{color:#757575}.input.white[data-v-29ad388b]{color:#fff;border-bottom-color:#fff}.input.white[data-v-29ad388b]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-29ad388b]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-29ad388b]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-29ad388b]:focus{outline:none}.bold[data-v-29ad388b]{font-weight:700}.form[data-v-29ad388b]{padding:40px 0}.min-full-height[data-v-29ad388b]{min-height:calc(100vh - 210px)}.title[data-v-29ad388b]{font-size:25px;color:#388e3c}.main-content[data-v-29ad388b]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-29ad388b]{width:760px;max-width:100%}}.loginForm-holder[data-v-29ad388b]{max-width:90%;margin-top:100px}.form-changer[data-v-29ad388b]{padding:50px 0 20px;border-top:2px dotted #fff}.input[data-v-29ad388b]{margin-bottom:30px}.buttons-holder[data-v-29ad388b]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;-moz-justify-content:space-between;justify-content:space-between}@media (max-width:991px){.buttons-holder[data-v-29ad388b]{-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center;-webkit-box-direction:normal;-webkit-box-orient:vertical;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.buttons-holder .button-lp-primary[data-v-29ad388b]{width:50%}@media (max-width:991px){.buttons-holder .button-lp-primary[data-v-29ad388b]{width:100%}}.buttons-holder .or-text[data-v-29ad388b]{font-size:22px;font-weight:700}@media (max-width:991px){.buttons-holder .or-text[data-v-29ad388b]{margin-top:20px;margin-bottom:20px}}.buttons-holder .anonymous-login[data-v-29ad388b]{position:relative;width:40%}@media (max-width:991px){.buttons-holder .anonymous-login[data-v-29ad388b]{width:100%}}.buttons-holder .button-lp-secondary[data-v-29ad388b]{width:100%;font-size:14px}.buttons-holder .anonymous-text[data-v-29ad388b]{position:absolute;font-weight:lighter;margin-top:20px}@media (max-width:991px){.buttons-holder .anonymous-text[data-v-29ad388b]{position:relative}}.button-lp-primary-faded[data-v-29ad388b]{text-transform:none;font-weight:400}",""])},qGSc:function(t,a,o){"use strict";var e=function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"tagline"},[this._v("Enjoyable application for Office Workouts!")])};e._withStripped=!0;var n={render:e,staticRenderFns:[]};a.a=n},qSQH:function(t,a,o){var e=o("U0rQ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o("rjj0").default)("2eae590f",e,!1,{sourceMap:!1})},xhi9:function(t,a,o){"use strict";a.a={}}});