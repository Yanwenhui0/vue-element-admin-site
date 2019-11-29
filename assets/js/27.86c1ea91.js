(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{217:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("When you package an application, the Javascript package becomes very large, affecting the page load. If we can split the components corresponding to different routes into different code blocks and then load the corresponding components when the route is accessed, this will be more efficient.")]),e._v(" "),n("p",[e._v("Combining Vue's "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[e._v("async component feature"),n("OutboundLink")],1),e._v(" and webpack's "),n("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("code splitting feature"),n("OutboundLink")],1),e._v(", it's trivially easy to lazy-load route components.")]),e._v(" "),e._m(1),n("br"),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),n("p",[e._m(8),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/231",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-element-admin/issues/231"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Production：")]),e._v(" "),e._m(9),e._m(10),e._v(" "),n("p",[e._v("Of course, there are some side effects of writing this way. due to")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("Use "),n("code",[e._v("babel plugins")]),e._v(" "),n("a",{attrs:{href:"https://github.com/airbnb/babel-plugin-dynamic-import-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel-plugin-dynamic-import-node"),n("OutboundLink")],1),e._v(".\nIt only does one thing by converting all "),n("code",[e._v("import()")]),e._v(" to "),n("code",[e._v("require()")]),e._v(", so that all asynchronous components can be import synchronously using this plugin. Combined with the babel environment variable "),n("a",{attrs:{href:"https://babeljs.io/docs/usage/babelrc/#env-option",target:"_blank",rel:"noopener noreferrer"}},[e._v("BABEL_ENV"),n("OutboundLink")],1),e._v(", let it only work in the development environment, in the development environment will convert all import () into require ().")]),e._v(" "),n("p",[e._v("This solution to solve the problem of repeated packaging before, while the invasiveness of the code is also very small, you usually write routing only need to follow the lazy loading method of the "),n("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official document"),n("OutboundLink")],1),e._v(" routing on it, the other are handed to the handle of the cable, When you don't want to use this program, just remove it from Babel's plugins.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),n("p",[e._v("After that, you're done. Routing can be written as usual.")]),e._v(" "),e._m(19),n("p",[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/727",target:"_blank",rel:"noopener noreferrer"}},[e._v("Related code changes"),n("OutboundLink")],1)]),e._v(" "),e._m(20),e._v(" "),n("p",[n("code",[e._v("vue-element-admin@4")]),e._v(" has been modified to build based on "),n("code",[e._v("vue-cli")]),e._v(" in the new version. So in the new version you just need to set "),n("code",[e._v("VUE_CLI_BABEL_TRANSPILE_MODULES:true")]),e._v(" in the "),n("code",[e._v(".env.development")]),e._v(" environment variable configuration file, specifically "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/.env.development",target:"_blank",rel:"noopener noreferrer"}},[e._v("code"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Its implementation logic and principle are the same as before, it based on "),n("code",[e._v("babel-plugin-dynamic-import-node")]),e._v(".The only thing you need to set a variable in "),n("code",[e._v("vue-cli")]),e._v(" is to borrow the default configuration of "),n("code",[e._v("vue-cli")]),e._v(". By reading "),n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/babel-preset-app/index.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source code"),n("OutboundLink")],1),e._v(", "),n("code",[e._v("vue-cli")]),e._v(" will pass "),n("code",[e._v("VUE_CLI_BABEL_TRANSPILE_MODULES")]),e._v(",this environment variable to distinguish whether to use "),n("code",[e._v("babel-plugin-dynamic-import-node")]),e._v(", so we only need to set it to true. Although its original intention was for unit testing, it just met our needs.")]),e._v(" "),e._m(21),e._v(" "),e._m(22)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"lazy-loading-routes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading-routes","aria-hidden":"true"}},[this._v("#")]),this._v(" Lazy Loading Routes")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("Foo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./Foo.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("When you think your page's hot reload is slow, you need to look down ↓")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"differentiating-development-and-production-environments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#differentiating-development-and-production-environments","aria-hidden":"true"}},[this._v("#")]),this._v(" Differentiating development and production environments")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("[This solution has been eliminated]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When you have more and more pages in your project, using "),t("code",[this._v("lazy-loading")]),this._v(" in the development environment becomes less appropriate, and every change of code that triggers a hot update becomes very slow. Therefore, it is recommended to only use the lazy loading function in the build environment.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Development:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// vue-loader at least v13.0.0+")]),e._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("file")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@/views/'")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" file "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("default\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("strong",[this._v("Note here that this method only supports "),t("code",[this._v("vue-loader at least v13.0.0+")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("file")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@/views/'")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" file "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"elimination-reason"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elimination-reason","aria-hidden":"true"}},[this._v("#")]),this._v(" Elimination reason")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Every module that could potentially be requested on an import() call is included. For example, import(./locale/${language}.json) will cause every .json file in the ./locale directory to be bundled into the new chunk. At run time, when the variable language has been computed, any file like english.json or german.json will be available for consumption.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("The user can measure whether to adopt this method according to the business situation. If your project is not large and you can also accept the local development hot update speed. You can continue to use lazy loading to avoid this side effect in all environments.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"new-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-plan","aria-hidden":"true"}},[this._v("#")]),this._v(" New Plan")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Code:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First add "),t("code",[this._v("BABEL_ENV")]),this._v(" to "),t("code",[this._v("package.json")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[this._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"')]),this._v("\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Then "),n("code",[e._v(".babelrc")]),e._v(" can only include the "),n("code",[e._v("babel-plugin-dynamic-import-node")]),e._v(" "),n("code",[e._v("plugins")]),e._v(" and make it work only in the "),n("code",[e._v("development")]),e._v(" mode.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"env"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"development"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"dynamic-import-node"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/login'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@/views/login/index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vue-cli-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli@3")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"improve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improve","aria-hidden":"true"}},[this._v("#")]),this._v(" Improve")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("webpack5")]),this._v(" is about to be released, greatly improving the speed of packaging and compiling. After that, it may not need to be so complicated at all. More page hot updates can be very fast, and the solution mentioned above is completely unnecessary.")])}],!1,null,null,null);t.default=s.exports}}]);