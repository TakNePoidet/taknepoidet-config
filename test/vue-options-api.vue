<template>
	<div>
		<div>{{ isLover ? loverTitle : upperTitle }}</div>
		<button @click="clickHandle">click</button>
	</div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import { defineComponent } from 'vue';

class Alerts {
	static error(message) {
		console.error(message);
	}
}

export default defineComponent({
	props: {
		title: {
			type: String,
			required: false,
			default() {
				return 'Options API Typing';
			}
		}
	},
	data() {
		return {
			isLover: false
		};
	},
	computed: {
		upperTitle() {
			const { title } = this;
			const upper = title.toUpperCase();

			this.log(`upperTitle: ${upper}`);
			return upper;
		},
		loverTitle() {
			const { title } = this;
			const lover = title.toUpperCase();

			this.log(`loverTitle: ${lover}`);
			return lover;
		}
	},
	methods: {
		log(text) {
			console.log(text);
		},
		clickHandle(event) {
			event.preventDefault();
			this.log(this.titlePage);
		},
		notifyError(title, text) {
			Alerts.error({
				response: 'error',
				error: { [title]: [text] }
			});
		}
	}
});
</script>
