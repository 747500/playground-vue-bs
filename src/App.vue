<template lang="pug">
	div(id="app")

		div(class="btn-toolbar mb-3" role="toolbar")
			div(class="btn-group me-2" role="group")
				bsButton(class="btn-primary btn-sm") qqq

			| &nbsp;

			div(class="btn-group me-2" role="group")
				bsDropdown(:schema="schema")/

</template>

<script>

import bsDropdown from './components/bs/Dropdown.vue'
import bsButton from './components/bs/Button.vue'

export default {
	name: 'App',
	components: {
		bsDropdown,
		bsButton,
	},
	data () {
		return {
			schema: {
				text: 'Blah',
				class: [
					'btn-sm',
					//'btn-danger',
					'btn-outline-danger',
				],
				menu: [
					{
						text: 'Cancel',
						handler: this.onCancel
					},
					{
						text: 'Ok',
						handler: this.onConfirm
					}
			]
			}
		}
	},
	created () {
		//this.schema.push()
	},
	computed: {
	},
	methods: {
		onCancel(...args) {
			console.log('onCancel', args)
		},

		onConfirm(...args) {
			console.log('onConfirm', args)
		},
	}
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 3rem;
  padding: 3rem;
  outline: 1px solid #ddd;
}

div.hr {
  width: 100%;
  height: 1px;
  border-top: 1px solid #ccc;
}

</style>
