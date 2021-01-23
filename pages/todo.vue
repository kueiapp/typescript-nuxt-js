<template>
  <div class="todo">
    <Logo />
    <section>
      <div>
        <input
          class="add-todo"
          v-focus
          type="text"
          placeholder="add something"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </div>
      <div v-for="todo in todoList" :key="todo.id" class="todo-row">
        <input type="checkbox" v-model="todo.completed" />
        <div v-if="!todo.editing" @dblclick="editTodo(todo)">
          {{ todo.title }}
        </div>
        <input
          v-else
          type="text"
          v-model="todo.title"
          @blue="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Todo = {
  id: number
  completed: boolean
  editing: boolean
  title: string
}

export default Vue.extend({
  name: 'page-todo',
  mounted() {
    console.warn(`component mounted..`)
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: 'hello',
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: 'world',
          completed: false,
          editing: false,
        },
      ],
      newTodo: undefined as undefined | string,
    }
  },
  computed: {
    getLatestTodoId(): number {
      const lastTodo: Todo = this.todoList[this.todoList.length - 1]
      return lastTodo.id
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo === undefined) return
      this.todoList.push({
        id: this.getLatestTodoId + 1,
        title: this.newTodo,
        completed: false,
        editing: false,
      })
    },

    editTodo(todo: Todo) {
      todo.editing = !todo.editing
    },

    cancelEdit(todo: Todo) {
      const editingTodo: Todo | undefined = this.todoList.find(
        (todo: Todo) => todo.editing === true
      )
      if (editingTodo === undefined) return
      editingTodo.editing = false
    },

    doneEdit(todo: Todo) {
      const editingTodo: Todo | undefined = this.todoList.find(
        (todo: Todo) => todo.editing === true
      )
      if (editingTodo === undefined) return
      editingTodo.title = todo.title
      editingTodo.editing = false
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  section {
    margin: 5px 0;
    padding: 10px 0;
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .add-todo {
    width: 300px;
    margin-bottom: 16px;
  }
  .todo-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    margin: 0 auto;
  }
}
</style>
