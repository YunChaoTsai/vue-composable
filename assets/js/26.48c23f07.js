(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{450:function(e,t,n){"use strict";n.r(t);n(175);var r=n(102),a=n(314),l=Object(r.c)({name:"intl-number-format-example",setup:function(){var e,t=Object(a.w)(),n=t.languages,l=t.language,o=(e=n.value).concat.apply(e,["pt-PT","pt-BR"]),c=Object(r.n)(l.value||"en"),u=Object(r.n)({style:"currency",currency:"USD",currencyDisplay:"symbol"}),s=Object(a.v)(c,u),i=s.formatString,v=s.format,p=Object(r.n)(400);return{locales:o,selectedLocale:c,formatString:i,options:u,value:p,formattedValue:v(p)}}}),o=n(27),c=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",[n("li",[n("label",{attrs:{for:"value"}},[e._v("value")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],attrs:{name:"value",type:"number"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("li",[n("label",{attrs:{for:"locale"}},[e._v("Locale")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLocale,expression:"selectedLocale"}],attrs:{name:"locale"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedLocale=t.target.multiple?n:n[0]}}},e._l(e.locales,(function(t){return n("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),n("li",[n("label",{attrs:{for:"style"}},[e._v("options.style")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.options.style,expression:"options.style"}],attrs:{name:"style"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.options,"style",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"decimal"}},[e._v("decimal")]),e._v(" "),n("option",{attrs:{value:"percent"}},[e._v("percent")]),e._v(" "),n("option",{attrs:{value:"currency"}},[e._v("currency")])])]),e._v(" "),"currency"===e.options.style?[n("li",[n("label",{attrs:{for:"currency"}},[e._v("options.currency")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.currency,expression:"options.currency"}],attrs:{name:"currency"},domProps:{value:e.options.currency},on:{input:function(t){t.target.composing||e.$set(e.options,"currency",t.target.value)}}})]),e._v(" "),n("li",[n("label",{attrs:{for:"currencyDisplay"}},[e._v("options.currencyDisplay")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.options.currencyDisplay,expression:"options.currencyDisplay"}],attrs:{name:"currencyDisplay"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.options,"currencyDisplay",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"symbol"}},[e._v("symbol")]),e._v(" "),n("option",{attrs:{value:"code"}},[e._v("code")])])])]:e._e()],2),e._v(" "),n("p",[e._v("\n    value:\n    "),n("b",[e._v(e._s(e.formatString(e.value)))])]),e._v(" "),n("p",[e._v("\n    formatted:\n    "),n("b",[e._v(e._s(e.formattedValue))])])])}),[],!1,null,null,null);t.default=c.exports}}]);