<template>
	<portal to="app-modal">
		<transition
			name="modal-transition"
			@before-enter="beforeEnter"
			@enter="enter"
			@leave="leave"
			@after-leave="afterLeave"
		>
			<div v-if="isOpen" :class="classModal">
				<div class="app-modal-wrap" @click.prevent.stop="close">
					<div class="app-modal-container" @click.stop>
						<div class="app-modal-header">
							<slot name="header"></slot>
						</div>
						<div class="app-modal-content">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</portal>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		},
		openModal: {
			type: Function,
			default() {
				this.open();
			}
		},
		closeModal: {
			type: Function,
			default() {
				this.close();
			}
		},
		onClose: {
			type: Function,
			default() {}
		}
	},
	data() {
		return {
			isOpen: false,
			classModal: ['app-modal']
		};
	},
	watch: {
		show(value) {
			if (this.isOpen !== value) {
				if (value) {
					this.open();
				} else {
					this.close();
				}
			}
		}
	},
	methods: {
		open() {
			this.isOpen = true;
		},
		close() {
			this.isOpen = false;
		},
		beforeEnter() {
			document.body.classList.add('overflow-hidden');
		},
		enter(el, done) {
			this.classModal.push('app-modal--open');

			done();
		},

		leave(el, done) {
			// this.classModal.remove('app-modal--open');
			const index = this.classModal.indexOf('app-modal--open');

			if (index > -1) {
				this.classModal.splice(index, 1);
			}
			done();
		},
		afterLeave() {
			document.body.classList.remove('overflow-hidden');
			console.log(1);
			this.onClose();
		}
	}
};
</script>
<style lang="scss">
.app-modal {
	width: 100%;
	height: 100%;
	background-color: hsla(0, 0%, 60.8%, 0.75);
	left: 0;
	top: 0;
	position: fixed;
	opacity: 0;
	visibility: hidden;
	z-index: -1;
	backdrop-filter: blur(0px);
	pointer-events: none;
	&-wrap {
		overflow-y: auto;
		height: 100%;
	}
	&-container {
		margin: 10vh auto;
		background: #fff;
		max-width: 800px;
		border-radius: 3px;
		padding: 20px;
		padding-top: 35px;
		position: relative;
	}
	&-header {
		border-bottom: 1px solid #f1f1f1;
		padding-bottom: 20px;
		margin-bottom: 20px;
		h3 {
			font-size: 30px;
		}
	}
}
.app-modal.app-modal--open {
	opacity: 1;
	visibility: visible;
	z-index: 110;
	// backdrop-filter: blur(2px);
	pointer-events: auto;
}
.app-component-edit {
	padding: 0;
	.app-block-content-edit {
		margin: 0px -20px;
	}
}
</style>
