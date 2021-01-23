exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1930a9a0", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vuejs.png": 29
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 28;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vuejs.1f23f55.png";

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img{width:245px}.NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=775095a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.name)?_c('img',{attrs:{"src":__webpack_require__(28)("./" + _vm.name)}}):_c('svg',{staticClass:"NuxtLogo",attrs:{"width":"245","height":"180","viewBox":"0 0 452 342","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z\" fill=\"#00C58E\"></path> <path d=\"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z\" fill=\"#108775\"></path> <path d=\"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z\" fill=\"#2F495E\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=775095a6&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=ts&

/* harmony default export */ var Logovue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'component-logo',
  props: {
    name: String
  }
}));
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Logovue_type_script_lang_ts_ = (Logovue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "106076d4"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("13551328", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_id_34c11c90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_id_34c11c90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_id_34c11c90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_id_34c11c90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_id_34c11c90_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".todo[data-v-34c11c90]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100vh}.todo section[data-v-34c11c90]{margin:5px 0;padding:10px 0}.todo h3[data-v-34c11c90]{margin:40px 0 0}.todo ul[data-v-34c11c90]{list-style-type:none;padding:0}.todo li[data-v-34c11c90]{display:inline-block;margin:0 10px}.todo a[data-v-34c11c90]{color:#42b983}.todo .add-todo[data-v-34c11c90]{width:300px;margin-bottom:16px}.todo .todo-row[data-v-34c11c90]{display:flex;justify-content:flex-start;align-items:center;width:300px;margin:0 auto}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/todo.vue?vue&type=template&id=34c11c90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"todo"},[_c('Logo'),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-34c11c90>","</section>",[_vm._ssrNode("<div data-v-34c11c90>","</div>",[_c('input',{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:(_vm.newTodo),expression:"newTodo"}],staticClass:"add-todo",attrs:{"type":"text","placeholder":"add something"},domProps:{"value":(_vm.newTodo)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addTodo($event)},"input":function($event){if($event.target.composing){ return; }_vm.newTodo=$event.target.value}}},[])]),_vm._ssrNode(" "+(_vm._ssrList((_vm.todoList),function(todo){return ("<div class=\"todo-row\" data-v-34c11c90><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(todo.completed)?_vm._i(todo.completed,null)>-1:(todo.completed)))+" data-v-34c11c90> "+((!todo.editing)?("<div data-v-34c11c90>"+_vm._ssrEscape("\n        "+_vm._s(todo.title)+"\n      ")+"</div>"):("<input type=\"text\""+(_vm._ssrAttr("value",(todo.title)))+" data-v-34c11c90>"))+"</div>")})))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/todo.vue?vue&type=template&id=34c11c90&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/todo.vue?vue&type=script&lang=ts&

/* harmony default export */ var todovue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'page-todo',

  mounted() {
    console.warn(`component mounted..`);
  },

  data() {
    return {
      todoList: [{
        id: 1,
        title: 'hello',
        completed: false,
        editing: false
      }, {
        id: 2,
        title: 'world',
        completed: false,
        editing: false
      }],
      newTodo: undefined
    };
  },

  computed: {
    getLatestTodoId() {
      const lastTodo = this.todoList[this.todoList.length - 1];
      return lastTodo.id;
    }

  },
  methods: {
    addTodo() {
      if (this.newTodo === undefined) return;
      this.todoList.push({
        id: this.getLatestTodoId + 1,
        title: this.newTodo,
        completed: false,
        editing: false
      });
    },

    editTodo(todo) {
      todo.editing = !todo.editing;
    },

    cancelEdit(todo) {
      const editingTodo = this.todoList.find(todo => todo.editing === true);
      if (editingTodo === undefined) return;
      editingTodo.editing = false;
    },

    doneEdit(todo) {
      const editingTodo = this.todoList.find(todo => todo.editing === true);
      if (editingTodo === undefined) return;
      editingTodo.title = todo.title;
      editingTodo.editing = false;
    }

  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }

    }
  }
}));
// CONCATENATED MODULE: ./pages/todo.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_todovue_type_script_lang_ts_ = (todovue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/todo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_todovue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34c11c90",
  "5c6c56af"
  
)

/* harmony default export */ var todo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=todo.js.map