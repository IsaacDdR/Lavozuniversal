(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{427:function(t,e,n){"use strict";n.r(e);var l=n(5),r=(n(37),{scrollToTop:!0,asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("blog",l.slug).fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}}),o=n(34),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-16"},[n("div",{staticClass:"pt-56"},[n("span",{staticClass:"ml-5 md:ml-16 text-xl active:shadow-inner noSelect"},[n("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),t._v(" "),n("NuxtLink",{staticClass:"text-bold",attrs:{to:"/"}},[t._v(" Inicio")])],1),t._v(" "),n("h1",{staticClass:"\n        sm:text-5xl\n        text-3xl\n        font-extrabold\n        text-center\n        mx-auto\n        title-font\n        text-blue-900\n      "},[t._v("\n      Blog\n    ")]),t._v(" "),n("p",{staticClass:"\n        lg:w-2/3\n        mx-auto\n        text-center text-gray-900\n        leading-relaxed\n        text-base\n        font-bold\n        mt-4\n      "},[t._v("\n      Datos, pensamientos y redacciones.\n    ")])]),t._v(" "),n("div",{staticClass:"flex flex-wrap mt-5"},t._l(t.articles,(function(article){return n("NuxtLink",{key:article.id,staticClass:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4",attrs:{to:"/lavozBlog/"+article.slug}},[n("div",{staticClass:"p-4"},[n("div",{staticClass:"\n            h-full\n            border-2 border-gray-200 border-opacity-60\n            rounded-lg\n            overflow-hidden\n          "},[n("img",{staticClass:"lg:h-48 md:h-36 w-full object-cover object-center",attrs:{src:article.image,alt:"blog"}}),t._v(" "),n("div",{staticClass:"p-6"},[n("h1",{staticClass:"title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n              "+t._s(article.name)+"\n            ")]),t._v(" "),n("p",{staticClass:"leading-relaxed mb-3"},[t._v("\n              "+t._s(article.description)+"\n            ")]),t._v(" "),n("div",{staticClass:"flex items-center flex-wrap"},[n("a",{staticClass:"text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"},[t._v("Leer más\n                "),n("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M5 12h14"}}),t._v(" "),n("path",{attrs:{d:"M12 5l7 7-7 7"}})])])])])])])])})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);