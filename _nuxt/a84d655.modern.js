(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{245:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("1b7833da",content,!0,{sourceMap:!1})},247:function(t,e,n){t.exports=n.p+"img/adolfo.d506e01.jpg"},248:function(t,e,n){"use strict";n(245)},249:function(t,e,n){var l=n(29)(!1);l.push([t.i,".fade-enter-active,.fade-leave-active{transition:opacity .1s}.fade-enter,.fade-leave-active{opacity:0}.fade-slow-enter-active,.fade-slow-leave-active{transition:opacity .5s}.fade-slow-enter,.fade-slow-leave-active{opacity:0}",""]),t.exports=l},261:function(t,e,n){"use strict";n.r(e);var l=n(2),o={scrollToTop:!0,mounted(){VANTA.GLOBE({el:"#vanta-selector",mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:1853416,color2:16711680,backgroundColor:16777215})},asyncData:t=>Object(l.a)((function*(){var{$content:e,params:n}=t,l=new Date,o=l.getDate(),r=l.getMonth();return{todayDay:o,todayMonth:r,personToday:yield e("artists").where({day:o,month:r}).fetch(),persons:yield e("artists").where({day:o,month:r}).fetch()}}))()},r=(n(248),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"\n    flex flex-wrap\n    lg:flex-row\n    flex-col\n    md:flex-row\n    items-center\n    mx-auto\n    pt-56\n    md:pt-64\n  ",attrs:{id:"vanta-selector"}},[t._l(t.persons,(function(e){return l("div",{key:e.name,staticClass:"sr-only lg:not-sr-only"},[l("section",{staticClass:"text-gray-600 body-font mx-auto"},[l("div",{staticClass:"\n          container\n          mx-auto\n          flex\n          px-5\n          py-24\n          md:flex-row\n          flex-col\n          items-center\n        "},[l("div",{staticClass:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"},[l("img",{staticClass:"object-cover object-center rounded",attrs:{alt:"hero",src:e.portrait}})]),t._v(" "),l("div",{staticClass:"\n            lg:flex-grow\n            md:w-1/2\n            lg:pl-24\n            md:pl-16\n            flex flex-col\n            md:items-start\n            md:text-left\n            items-center\n            text-center\n          "},[l("h1",{staticClass:"\n              title-font\n              sm:text-4xl\n              text-3xl\n              mb-4\n              font-medium\n              text-gray-900\n            "},[t._v("\n            "+t._s(e.name)+", "+t._s(e.year)+"\n          ")]),t._v(" "),l("p",{staticClass:"mb-8 leading-relaxed"},[t._v("\n            "+t._s(e.description)+"\n          ")]),t._v(" "),l("div",{staticClass:"flex justify-center"},[l("NuxtLink",{staticClass:"\n                ml-4\n                inline-flex\n                text-gray-700\n                bg-gray-100\n                border-0\n                py-2\n                px-6\n                focus:outline-none\n                hover:bg-gray-200\n                rounded\n                text-lg\n              ",attrs:{to:"/artists"}},[t._v("\n              Ver más\n            ")])],1)])])])])})),t._v(" "),t._l(t.persons,(function(e){return l("div",{key:e.slug,staticClass:"lg:sr-only w-full"},[l("div",{staticClass:"flex flex-wrap"},[l("div",{staticClass:"p-4 md:w-1/2 mx-auto"},[l("div",{staticClass:"\n            shadow-lg\n            bg-white bg-opacity-75\n            h-full\n            border-2 border-gray-200 border-opacity-60\n            rounded-lg\n            overflow-hidden\n          "},[l("p",{staticClass:"text-bold text-2xl p-4 text-left"},[t._v("\n            Un día como hoy, en\n            "+t._s(e.year)+"\n          ")]),t._v(" "),l("img",{staticClass:"shadow lg:h-48 md:h-36 w-full object-cover object-center",attrs:{src:e.portrait,alt:"blog"}}),t._v(" "),l("div",{staticClass:"p-6"},[l("h2",{staticClass:"\n                tracking-widest\n                text-xs\n                title-font\n                font-medium\n                text-gray-800\n                mb-1\n                rounded-full\n                bg-teal-accent-400\n              "},[l("NuxtLink",{attrs:{to:"/artists"}},[t._v(" EFEMÉRIDES ")])],1),t._v(" "),l("h1",{staticClass:"title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),l("p",{staticClass:"leading-relaxed mb-3"},[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),l("div",{staticClass:"flex items-center flex-wrap"},[l("NuxtLink",{staticClass:"\n                  text-blue-900 text-xl\n                  inline-flex\n                  items-center\n                  md:mb-2\n                  lg:mb-0\n                ",attrs:{to:{name:"artistsBlog-slug",params:{slug:e.slug}}}},[t._v("Leer más\n                "),l("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[l("path",{attrs:{d:"M5 12h14"}}),t._v(" "),l("path",{attrs:{d:"M12 5l7 7-7 7"}})])])],1)])])])])])})),t._v(" "),l("div",{staticClass:"mx-auto flex flex-col w-1/4 pt-20 font-serif"},[l("div",{staticClass:"text-center text-white mx-auto"},[l("img",{staticClass:"mx-auto rounded-full shadow-xl border-blue-900 border-4",attrs:{src:n(247),alt:"Adolfo"}}),t._v(" "),l("section",{staticClass:"text-gray-600 body-font"},[l("div",{staticClass:"container py-12 mx-auto"},[l("div",{staticClass:"w-full mx-auto text-center"},[l("svg",{staticClass:"inline-block w-8 h-8 text-gray-900 mb-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 975.036 975.036"}},[l("path",{attrs:{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"}})]),t._v(" "),l("p",{staticClass:"leading-relaxed text-2xl text-gray-900"},[t._v('\n              "Todo pasa todo cambia pero el rock sigue en la voz universal"\n            ')]),t._v(" "),l("span",{staticClass:"inline-block h-1 w-10 rounded bg-gray-900 mt-8 mb-6"}),t._v(" "),l("h2",{staticClass:"\n                text-gray-900\n                font-medium\n                title-font\n                tracking-wider\n                text-sm\n              "},[t._v("\n              ADOLFO FERNÁNDEZ ZEPEDA\n            ")]),t._v(" "),l("p",{staticClass:"text-gray-800"},[t._v("Locutor")]),t._v(" "),l("p",{staticClass:"text-gray-800"},[t._v('"La Voz Universal"')])])])])])])],2)}),[],!1,null,null,null);e.default=component.exports}}]);