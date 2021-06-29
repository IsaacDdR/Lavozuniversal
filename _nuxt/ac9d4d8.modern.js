(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{335:function(e,t,n){"use strict";n.r(t);n(17),n(191);var o={scrollToTop:!0,data:()=>({loading:!1,success:!1,errored:!1,name:"",email:"",message:""}),methods:{sendMessage(){this.loading=!0,this.$axios.$post("/messages",{name:this.name,email:this.email,message:this.message}).then((e=>{this.success=!0,this.errored=!1})).catch((e=>{e?console.error("Error",e):this.errored=!0})).finally((()=>{this.loading=!1}))}}},r=n(20),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-16"},[n("section",{staticClass:"text-gray-600 body-font pt-56 relative md:w-9/12 mx-auto"},[n("div",{staticClass:"flex flex-col px-5 mx-auto"},[n("span",{staticClass:"mb-6 text-gray-900 text-xl active:shadow-inner noSelect"},[n("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),e._v(" "),n("NuxtLink",{staticClass:"text-bold",attrs:{to:"/"}},[e._v(" Inicio")])],1),e._v(" "),e._m(0),e._v(" "),e.success?n("div",{staticClass:"\n          rounded\n          bg-indigo-500\n          mx-auto\n          text-center\n          mb-5\n          text-white text-lg\n          py-8\n          w-full\n          md:w-1/2\n          shadow\n        "},[e._v("\n        ¡Gracias! En breve te contestaremos, quédate al pendiente.\n      ")]):e._e(),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[e.errored?n("div",{staticClass:"rounded bg-red-200 text-lg p-4"},[e._v("\n          ¿Podrías checar los campos nuevamente? Algo no está bien.\n        ")]):e._e(),e._v(" "),n("div",{staticClass:"lg:w-3/5 md:w-2/3 mx-auto"},[n("div",{staticClass:"flex flex-wrap -m-2"},[n("div",{staticClass:"p-2 w-1/2"},[n("div",{staticClass:"relative"},[n("label",{staticClass:"leading-7 text-sm text-gray-900 font-bold",attrs:{for:"name"}},[e._v("Nombre")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"\n                    w-full\n                    bg-gray-100 bg-opacity-50\n                    rounded\n                    border border-gray-300\n                    focus:border-indigo-500\n                    focus:bg-white\n                    focus:ring-2 focus:ring-indigo-200\n                    text-base\n                    outline-none\n                    text-gray-700\n                    py-1\n                    px-3\n                    leading-8\n                    transition-colors\n                    duration-200\n                    ease-in-out\n                  ",attrs:{id:"name",required:"",type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"p-2 w-1/2"},[n("div",{staticClass:"relative"},[n("label",{staticClass:"leading-7 text-sm text-gray-900 font-bold",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"\n                    w-full\n                    bg-gray-100 bg-opacity-50\n                    rounded\n                    border border-gray-300\n                    focus:border-indigo-500\n                    focus:bg-white\n                    focus:ring-2 focus:ring-indigo-200\n                    text-base\n                    outline-none\n                    text-gray-700\n                    py-1\n                    px-3\n                    leading-8\n                    transition-colors\n                    duration-200\n                    ease-in-out\n                  ",attrs:{id:"email",required:"",type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"p-2 w-full"},[n("div",{staticClass:"relative"},[n("label",{staticClass:"leading-7 text-sm text-gray-900 font-bold",attrs:{for:"message"}},[e._v("Mensaje")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"\n                    w-full\n                    bg-gray-100 bg-opacity-50\n                    rounded\n                    border border-gray-300\n                    focus:border-indigo-500\n                    focus:bg-white\n                    focus:ring-2 focus:ring-indigo-200\n                    h-32\n                    text-base\n                    outline-none\n                    text-gray-700\n                    py-1\n                    px-3\n                    resize-none\n                    leading-6\n                    transition-colors\n                    duration-200\n                    ease-in-out\n                  ",attrs:{id:"message",required:"",name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"p-2 w-full"},[n("button",{staticClass:"\n                  flex\n                  mx-auto\n                  text-white\n                  bg-blue-900\n                  border-0\n                  py-2\n                  px-8\n                  focus:outline-none\n                  hover:bg-indigo-600\n                  rounded\n                  text-lg\n                ",attrs:{type:"submit"}},[e._v("\n                "+e._s(e.loading?"Enviando mensaje...":"Enviar")+"\n              ")])]),e._v(" "),e._m(1)])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col text-center w-full mb-12"},[n("h1",{staticClass:"\n            sm:text-5xl\n            text-2xl\n            font-extrabold\n            title-font\n            mb-4\n            text-blue-900\n          "},[e._v("\n          Contáctanos\n        ")]),e._v(" "),n("p",{staticClass:"\n            lg:w-2/3\n            mx-auto\n            leading-relaxed\n            text-base text-gray-900\n            font-bold\n          "},[e._v("\n          En redes sociales, email o teléfono te atenderemos con mucho gusto.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n                p-2\n                w-full\n                pt-4\n                mt-4\n                border-t border-gray-200\n                text-center\n              "},[n("a",{staticClass:"text-blue-500 font-bold",attrs:{href:"mailto:hola@lavozuniversal.com?subject=Mensaje desde el sitio web."}},[e._v("hola@lavozuniversal.com")]),e._v(" "),n("br")])}],!1,null,null,null);t.default=component.exports}}]);