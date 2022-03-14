<template>
	<ul class="breadcrumbs">
		<li v-for="item in items" :key="item.to">
			<router-link :to="item.to"> {{ item.title }} </router-link>
		</li>
		<li v-if="current">
			<span>{{ current }}</span>
		</li>
	</ul>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-unresolved
import { defineComponent, PropType } from 'vue';

export interface Breadcrumb {
	title: string;
	to:
		| string
		| {
				name: string;
		  };
}
export default defineComponent({
	name: 'BreadCrumbs',
	props: {
		items: {
			type: Array as PropType<Breadcrumb[]>,
			required: true
		},
		current: {
			type: String as PropType<string>,
			required: false,
			default(this: void) {
				return null;
			}
		}
	}
});
</script>

<style lang="scss">
.breadcrumbs {
	display: flex;
	margin: 20px auto;
	font-weight: 500;
	font-size: 16px;
	line-height: 110%;

	a:hover {
		color: var(--brand-color);
	}

	li:not(:last-child)::after {
		display: inline-block;
		margin: 0 10px;
		content: '/';
	}
}
</style>
