(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{255:function(t,n,e){"use strict";e.r(n);var l=e(2),r={scrollToTop:!0,asyncData:t=>Object(l.a)((function*(){var{$content:n}=t;return{artists:yield n("artists").fetch()}}))()},o=e(10),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"pt-56"},[e("span",{staticClass:"ml-5 md:ml-16 text-xl active:shadow-inner noSelect"},[e("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),t._v(" "),e("NuxtLink",{staticClass:"text-bold",attrs:{to:"/"}},[t._v(" Inicio")])],1),t._v(" "),e("h1",{staticClass:"\n        sm:text-5xl\n        text-3xl\n        font-extrabold\n        text-center\n        mx-auto\n        title-font\n        text-blue-900\n        pt-6\n      "},[t._v("\n      Efemérides\n    ")]),t._v(" "),e("p",{staticClass:"\n        lg:w-2/3\n        mx-auto\n        text-center text-gray-900\n        leading-relaxed\n        text-base\n        font-bold\n        mt-2\n      "},[t._v("\n      Día a día, datos históricos de la música.\n    ")])]),t._v(" "),e("div",{staticClass:"flex flex-wrap pt-4"},t._l(t.artists,(function(n){return e("NuxtLink",{key:n.slug,staticClass:"w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mt-4",attrs:{to:{name:"artistsBlog-slug",params:{slug:n.slug}}}},[e("div",{staticClass:"p-4"},[e("div",{staticClass:"\n            h-full\n            bg-blue-100 bg-opacity-75\n            px-8\n            pt-16\n            pb-24\n            rounded-lg\n            overflow-hidden\n            text-center\n            relative\n          "},[e("img",{staticClass:"w-3/4 mx-auto pb-5",attrs:{src:n.imageCircle}}),t._v(" "),e("h1",{staticClass:"title-font text-3xl text-xl font-medium text-gray-900 mb-3"},[t._v("\n            "+t._s(n.name)+"\n            "),e("p",{staticClass:"text-xl"},[t._v("\n              "+t._s(n.day+"/"+n.realMonth+"/"+n.year)+"\n            ")])]),t._v(" "),e("p",{staticClass:"leading-relaxed mb-3"},[t._v("\n            "+t._s('"'+n.frase+'"')+"\n          ")]),t._v(" "),e("a",{staticClass:"text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"},[t._v("Leer más\n            "),e("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M5 12h14"}}),t._v(" "),e("path",{attrs:{d:"M12 5l7 7-7 7"}})])])])])])})),1)])}),[],!1,null,null,null);n.default=component.exports}}]);