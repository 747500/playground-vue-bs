<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->

    <div class="container">
      <div class="form">
        <FormulateForm
          v-model="model"
          :schema="schema"
          @submit="submitHandler"
          />
      </div>
      <div class="model">
        <pre>{{ model }}</pre>
      </div>
    </div>

  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'

const schema = [
  {
    type: "text",
    name: "name",
    label: "Имя"
  },
  {
    name: 'contacts',
    type: 'group',
    repeatable: true,
    label: 'Контакты',
    addLabel: '+',
    removeLabel: '-',
    children: [
      {
        type: 'text',
        name: 'text'
      },
    ]
  },
  {
    component: 'div',
    class: 'hr',
  },
  {
    type: 'radio',
    name: 'condition',
    options: { one: "Раз", two: "Два" }
  }
]

export default {
  name: 'App',
  components: {
    //VueFormulate,
    //HelloWorld
  },
  data () {
    return {
      model: {}
    }
  },
  created () {
    //this.schema.push()
  },
  computed: {
    schema () {
      //sconsole.log()

      return [
        ...schema,
        ...[
          {
            component: 'div',
            children: [
              {
                label: this.model.condition,
                type: 'hidden'
              }
            ]
          },
          {
            component: 'div',
            class: 'hr'
          },
          {
            type: "submit",
            label: "Готово"
          }
        ]
      ]
    }
  },
  methods: {
    submitHandler (formData) {
      console.log('<App.vue>', formData)
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

div.hr {
  width: 100%;
  height: 1px;
  border-top: 1px solid #ccc;
}

.container {
  display: flex;
}

.container .form {
  flex-grow: 1;
  flex-shrink: 1;
  flex: 10;
}

.container .model {
  flex-grow: 1;
  flex-shrink: 1;
  flex: 10;
}

.formulate-input {
  margin: 0em;
  padding: 0.5em;
  /*
  outline: 1px dotted #ccc;
  */
}

.formulate-input[data-classification=group] [data-is-repeatable]
.formulate-input-group-repeatable {
  position: relative;
}

.formulate-input[data-classification=group] [data-is-repeatable]
.formulate-input-group-repeatable-remove {
  position: absolute;
  top: calc(50% - 0.63em);
  right: 1em;
  display: block;
  cursor: pointer;
  border: 1px solid gray;
  /*border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));*/
  background-color: rgb(239, 239, 239);/*, rgb(59, 59, 59));*/
  border-radius: 3px;
  /*width: 1.5em;*/
  padding: 1px 6px;
  text-align: center;
  box-sizing: border-box;
}

.formulate-input[data-classification=group] [data-is-repeatable]
.formulate-input-group-repeatable-remove:hover {
  background-color: rgb(229, 229, 229);
}

</style>
