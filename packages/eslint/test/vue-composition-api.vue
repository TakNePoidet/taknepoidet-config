<template>
	<h1 class="mt-5 mb-5">Генератор картинки</h1>
	<h3 class="mt-4 mb-3">Основные данные</h3>
	<div class="mt-3 mb-3">
		<label class="form-label">Этап</label>
		<input
			v-model="stage"
			type="text"
			class="form-control"
			placeholder="Введите номер этапа римской цифрой"
			max="500"
			min="1"
		/>
	</div>
	<div class="mt-3 mb-3">
		<label class="form-label">Дата проведения</label>
		<input v-model="day" type="text" class="form-control" placeholder="Введите дату проведения" />
	</div>

	<h3 class="mt-4 mb-3">Участники</h3>
	<div v-for="(item, i) in participants" :key="i" class="mt-3 mb-3">
		<label class="form-label">Участник #{{ i + 1 }}</label>
		<input v-model="participants[i]" type="text" class="form-control" />
	</div>

	<h3 class="mt-4 mb-4">Баннер</h3>
	<div ref="containerCanvas" />
	<div class="mb-2 mt-2 d-grid gap-3">
		<button class="btn btn-success mr-2" @click.prevent="download">Скачать</button>
		<button class="btn btn-secondary">Обновить</button>
	</div>
</template>
<script lang="ts">
// @ts-ignore
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';

interface State {
	stage: string;
	day: any;
	participants: string[];
}
class Banner {
	private readonly width = 1920;

	private readonly height = 1080;

	private readonly canvas: HTMLCanvasElement;

	private readonly ctx: CanvasRenderingContext2D;

	constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	render($container: HTMLElement): void {
		$container.append(this.canvas);
	}

	async print({ stage, day, participants }: State) {
		const fon = await this.loadImage('/fon.png');
		const { ctx } = this;

		ctx.clearRect(0, 0, this.width, this.height);
		ctx.drawImage(fon, 0, 0);
		this.drawStage(stage);
		this.drawDay(day);

		this.drawParticipants(participants.filter((item) => item.trim().length > 0));
	}

	private drawParticipants(participants: string[]) {
		const { ctx } = this;

		ctx.save();
		const lineHeight = this.calculateFontHeight(`normal  46px / 53px 'Gilroy'`);

		ctx.font = `normal  46px / 53px 'Gilroy'`;
		ctx.textAlign = 'start';
		ctx.textBaseline = 'top';
		ctx.fillStyle = '#20202';

		const top = this.height / 2 - (participants.length * (53 + 40) - 40) / 2;

		const offset = 46 - lineHeight;

		for (let i = 0; i < participants.length; i += 1) {
			const text = `${participants[0]}`;
			const measureText = ctx.measureText(text);

			ctx.fillText(text, 100, top - offset - measureText.fontBoundingBoxAscent + (40 + lineHeight) * i);
		}
		ctx.restore();
	}

	private drawStage(stage: string) {
		const { ctx } = this;

		ctx.save();
		const lineHeight = this.calculateFontHeight(`500  120px / 141px 'Gilroy'`);

		ctx.font = `500  120px / 120px 'Gilroy'`;
		ctx.textAlign = 'end';
		ctx.textBaseline = 'top';
		ctx.fillStyle = '#066C07';
		const text = `${stage} этап`.toUpperCase();
		const measureText = ctx.measureText(text);

		ctx.fillText(text, this.width - 100, 375 - (120 - lineHeight + measureText.fontBoundingBoxAscent / 2));
		ctx.restore();
	}

	private drawDay(day: string) {
		const { ctx } = this;

		ctx.save();
		const lineHeight = this.calculateFontHeight(`500 80px / 94px 'Gilroy'`);

		ctx.font = `500 80px / 80px 'Gilroy'`;
		ctx.textAlign = 'end';
		ctx.textBaseline = 'top';
		ctx.fillStyle = '#202020';
		const text = day.toUpperCase();
		const measureText = ctx.measureText(text);

		ctx.fillText(text, this.width - 100, 516 - (80 - lineHeight + measureText.fontBoundingBoxAscent / 2));
		ctx.restore();
	}

	private loadImage(srs: string): Promise<HTMLImageElement> {
		return new Promise((resolve) => {
			const img = document.createElement('img');

			img.onload = () => {
				resolve(img);
			};
			img.src = srs;
		});
	}

	private calculateFontHeight(font: string): number {
		const parent: HTMLElement = document.createElement('span');

		parent.appendChild(document.createTextNode('height'));
		document.body.appendChild(parent);
		parent.style.cssText = `font: ${font}; white-space: nowrap; display: block;`;
		const height = parent.offsetHeight;

		document.body.removeChild(parent);
		return height;
	}

	public download(state: State) {
		const a = document.createElement('a');

		a.href = this.canvas.toDataURL();
		a.download = `Терра башкирия ${state.stage} этап, ${state.day}.png`;
		a.click();
	}
}

export default defineComponent({
	setup() {
		const state = reactive<State>({
			stage: '',
			day: '',
			participants: [...new Array(6).values()].map(() => '')
		});
		const containerCanvas = ref<HTMLElement | null>(null);
		const banner = new Banner();

		onMounted(() => {
			if (containerCanvas.value) {
				banner.render(containerCanvas.value);
			}
		});

		watch(state, () => {
			banner.print(state).then();
		});
		setTimeout(() => banner.print(state).then(), 100);

		function download() {
			banner.download(state);
		}

		return { ...toRefs(state), containerCanvas, download };
	}
});
</script>

<style lang="scss">
canvas {
	width: 100%;
}
</style>
