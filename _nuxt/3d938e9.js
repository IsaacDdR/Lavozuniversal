(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5],{274:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("1b7833da",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n.r(e);var l=n(26),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container pb-6"},[e("audio",{staticClass:"mx-auto",attrs:{controls:"",src:"https://streams.radiomast.io/668aa56b-5094-4326-a395-db9dfad740e1"}})])}],!1,null,null,null);e.default=component.exports},276:function(t,e,n){t.exports=n.p+"img/adolfo.d506e01.jpg"},277:function(t,e,n){"use strict";n(274)},278:function(t,e,n){var l=n(45)(!1);l.push([t.i,".fade-enter-active,.fade-leave-active{transition:opacity .1s}.fade-enter,.fade-leave-active{opacity:0}.fade-slow-enter-active,.fade-slow-leave-active{transition:opacity .5s}.fade-slow-enter,.fade-slow-leave-active{opacity:0}",""]),t.exports=l},295:function(t,e,n){"use strict";n.r(e);var l=n(3),r=(n(30),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,l=new Date,r=l.getDate(),o=l.getMonth(),e.next=6,n("artists").where({day:r,month:o}).fetch();case 6:return c=e.sent,e.next=9,n("artists").where({day:r,month:o}).fetch();case 9:return d=e.sent,e.abrupt("return",{todayDay:r,todayMonth:o,personToday:c,persons:d});case 11:case"end":return e.stop()}}),e)})))()}}),o=(n(277),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap lg:flex-row flex-col md:flex-row items-center"},[l("div",{staticClass:"w-screen leading-normal tracking-normal text-gray-900 font-sans"},[t._m(0),t._v(" "),l("Stream",{staticClass:"mx-auto"})],1),t._v(" "),l("h3",{staticClass:"mb-8"},[t._v("Escucha en vivo")]),t._v(" "),t._l(t.persons,(function(e){return l("div",{key:e.name,staticClass:"sr-only lg:not-sr-only"},[l("section",{staticClass:"mx-auto text-gray-600 body-font"},[l("div",{staticClass:"flex pt-12 px-5 mx-auto flex flex-col"},[l("div",{staticClass:"shadow-lg bg-white rounded-lg lg:w-3/4 mx-auto"},[l("p",{staticClass:"text-bold text-2xl ml-4 p-4 text-black"},[t._v("\n            Un día como hoy en "+t._s(e.year)+"\n          ")]),t._v(" "),l("div",{staticClass:"h-72 shadow overflow-hidden"},[l("img",{staticClass:"shadow object-cover object-center h-full w-full",attrs:{alt:"content",src:e.portrait}})]),t._v(" "),l("div",{staticClass:"flex flex-col sm:flex-row mt-10 p-6"},[l("div",{staticClass:"sm:w-1/3 text-center sm:pr-8 sm:py-8"},[l("img",{staticClass:"w-1/2 mx-auto rounded-full",attrs:{src:e.imageCircle}}),t._v(" "),l("div",{staticClass:"flex flex-col items-center text-center justify-center"},[l("h2",{staticClass:"font-medium title-font mt-4 text-gray-900 text-lg"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),l("div",{staticClass:"w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"}),t._v(" "),l("p",{staticClass:"text-base"},[t._v("\n                  "+t._s(e.resumen)+"\n                ")])])]),t._v(" "),l("div",{staticClass:"\n                sm:w-2/3\n                sm:pl-8\n                sm:py-8\n                sm:border-l\n                border-gray-200\n                sm:border-t-0\n                border-t\n                mt-4\n                pt-4\n                sm:mt-0\n                text-center\n                sm:text-left\n              "},[l("article",{staticClass:"leading-relaxed text-lg mb-4"},[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),l("NuxtLink",{staticClass:"text-indigo-500 inline-flex items-center",attrs:{to:{name:"artistsBlog-slug",params:{slug:e.slug}}}},[t._v("Leer más\n                "),l("svg",{staticClass:"w-4 h-4 ml-2",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])])],1)])])])])])})),t._v(" "),t._l(t.persons,(function(e){return l("div",{key:e.slug,staticClass:"lg:sr-only w-full"},[l("div",{staticClass:"flex flex-wrap"},[l("div",{staticClass:"p-4 md:w-1/2 mx-auto"},[l("div",{staticClass:"\n            shadow-lg\n            bg-white bg-opacity-75\n            h-full\n            border-2 border-gray-200 border-opacity-60\n            rounded-lg\n            overflow-hidden\n          "},[l("p",{staticClass:"text-bold text-2xl p-4 text-left"},[t._v("\n            Un día como hoy, en\n            "+t._s(e.year)+"\n          ")]),t._v(" "),l("img",{staticClass:"shadow lg:h-48 md:h-36 w-full object-cover object-center",attrs:{src:e.portrait,alt:"blog"}}),t._v(" "),l("div",{staticClass:"p-6"},[l("h2",{staticClass:"\n                tracking-widest\n                text-xs\n                title-font\n                font-medium\n                text-gray-800\n                mb-1\n                rounded-full\n                bg-teal-accent-400\n              "},[l("NuxtLink",{attrs:{to:"/artists"}},[t._v(" EFEMÉRIDES ")])],1),t._v(" "),l("h1",{staticClass:"title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),l("p",{staticClass:"leading-relaxed mb-3"},[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),l("div",{staticClass:"flex items-center flex-wrap"},[l("NuxtLink",{staticClass:"\n                  text-blue-500 text-xl\n                  inline-flex\n                  items-center\n                  md:mb-2\n                  lg:mb-0\n                ",attrs:{to:{name:"artistsBlog-slug",params:{slug:e.slug}}}},[t._v("Leer más\n                "),l("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[l("path",{attrs:{d:"M5 12h14"}}),t._v(" "),l("path",{attrs:{d:"M12 5l7 7-7 7"}})])])],1)])])])])])})),t._v(" "),l("div",{staticClass:"mx-auto flex flex-col md:flex-col md:w-3/4 pt-20 font-serif"},[l("div",{staticClass:"text-center text-white mx-auto"},[l("img",{staticClass:"\n          mx-auto\n          w-1/2\n          md:w-1/4\n          rounded-full\n          shadow-xl\n          border-blue-900 border-4\n        ",attrs:{src:n(276),alt:"Adolfo"}}),t._v(" "),l("section",{staticClass:"text-gray-600 body-font"},[l("div",{staticClass:"container px-5 py-12 mx-auto"},[l("div",{staticClass:"xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"},[l("svg",{staticClass:"inline-block w-8 h-8 text-gray-900 mb-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 975.036 975.036"}},[l("path",{attrs:{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"}})]),t._v(" "),l("p",{staticClass:"leading-relaxed text-lg text-gray-900"},[t._v("\n              Mientras tenga vida seguiré al frente de la radio. Cuando tenga\n              que irme, porque al final todos tenemos que irnos, me gustaría\n              que dijeran: ‘Se calló La Voz Universal’.\n            ")]),t._v(" "),l("span",{staticClass:"inline-block h-1 w-10 rounded bg-gray-900 mt-8 mb-6"}),t._v(" "),l("h2",{staticClass:"\n                text-gray-900\n                font-medium\n                title-font\n                tracking-wider\n                text-sm\n              "},[t._v("\n              ADOLFO FERNÁNDEZ ZEPEDA\n            ")]),t._v(" "),l("p",{staticClass:"text-gray-800"},[t._v('Locutor "La Voz Universal"')])])])])])])],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n        mt-24\n        mb-8\n        mx-auto\n        flex-col\n        lg:mx-auto\n        w-full\n        xl:w-2/5\n        justify-center\n        lg:items-start\n      "},[n("h1",{staticClass:"\n          md:my-4\n          text-blue-500 text-6xl\n          font-bold\n          leading-tight\n          text-center\n          slide-in-bottom-h1\n          font-serif\n          mt-5\n        "},[t._v("\n        La Voz Universal\n      ")]),t._v(" "),n("div",{staticClass:"flex"},[n("p",{staticClass:"mx-auto text-2xl italic text-gray-900"},[t._v("\n          La voz favorita de mexico\n        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Stream:n(275).default})}}]);