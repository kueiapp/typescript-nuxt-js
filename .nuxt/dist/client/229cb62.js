(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(t,e,o){var content=o(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("1930a9a0",content,!0,{sourceMap:!1})},226:function(t,e,o){var map={"./vuejs.png":227};function n(t){var e=d(t);return o(e)}function d(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=d,t.exports=n,n.id=226},227:function(t,e,o){t.exports=o.p+"img/vuejs.1f23f55.png"},228:function(t,e,o){"use strict";o(225)},229:function(t,e,o){(e=o(65)(!1)).push([t.i,"img{width:245px}.NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},230:function(t,e,o){"use strict";o.r(e);var n=o(1).a.extend({name:"component-logo",props:{name:String}}),d=(o(228),o(30)),component=Object(d.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.name?e("img",{attrs:{src:o(226)("./"+this.name)}}):e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,o){var content=o(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("13551328",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";o(232)},237:function(t,e,o){(e=o(65)(!1)).push([t.i,".todo[data-v-34c11c90]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100vh}.todo section[data-v-34c11c90]{margin:5px 0;padding:10px 0}.todo h3[data-v-34c11c90]{margin:40px 0 0}.todo ul[data-v-34c11c90]{list-style-type:none;padding:0}.todo li[data-v-34c11c90]{display:inline-block;margin:0 10px}.todo a[data-v-34c11c90]{color:#42b983}.todo .add-todo[data-v-34c11c90]{width:300px;margin-bottom:16px}.todo .todo-row[data-v-34c11c90]{display:flex;justify-content:flex-start;align-items:center;width:300px;margin:0 auto}",""]),t.exports=e},241:function(t,e,o){"use strict";o.r(e);o(157);var n=o(1).a.extend({name:"page-todo",mounted:function(){console.warn("component mounted..")},data:function(){return{todoList:[{id:1,title:"hello",completed:!1,editing:!1},{id:2,title:"world",completed:!1,editing:!1}],newTodo:void 0}},computed:{getLatestTodoId:function(){return this.todoList[this.todoList.length-1].id}},methods:{addTodo:function(){void 0!==this.newTodo&&this.todoList.push({id:this.getLatestTodoId+1,title:this.newTodo,completed:!1,editing:!1})},editTodo:function(t){t.editing=!t.editing},cancelEdit:function(t){var e=this.todoList.find((function(t){return!0===t.editing}));void 0!==e&&(e.editing=!1)},doneEdit:function(t){var e=this.todoList.find((function(t){return!0===t.editing}));void 0!==e&&(e.title=t.title,e.editing=!1)}},directives:{focus:{inserted:function(t){t.focus()}}}}),d=(o(236),o(30)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("Logo"),t._v(" "),o("section",[o("div",[o("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"add-todo",attrs:{type:"text",placeholder:"add something"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),t._v(" "),t._l(t.todoList,(function(e){return o("div",{key:e.id,staticClass:"todo-row"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,d=o.target,c=!!d.checked;if(Array.isArray(n)){var r=t._i(n,null);d.checked?r<0&&t.$set(e,"completed",n.concat([null])):r>-1&&t.$set(e,"completed",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(e,"completed",c)}}}),t._v(" "),e.editing?o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{blue:function(o){return t.doneEdit(e)},keyup:[function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.doneEdit(e)},function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:t.cancelEdit(e)}],input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}}):o("div",{on:{dblclick:function(o){return t.editTodo(e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])])}))],2)],1)}),[],!1,null,"34c11c90",null);e.default=component.exports;installComponents(component,{Logo:o(230).default})}}]);