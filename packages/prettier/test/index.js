function scroll(el, direction) {
	const duration = 2000;
	const start = new Date().getTime();

	const pageHeight = Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
	const fn = () => {
		const heightHeader = 0;

		const top = el.getBoundingClientRect().top - heightHeader;
		const now = new Date().getTime() - start;
		let result = Math.round((top * now) / duration);

		if (result > direction * top) {
			result = top;
		} else if (result === 0) {
			result = direction;
		}

		if (direction * top > 0 && pageHeight - window.pageYOffset > direction * document.documentElement.clientHeight) {
			window.scrollBy(0, result);
			requestAnimationFrame(fn);
		}
	};

	requestAnimationFrame(fn);
}

export default function scrollToAnchor(anchor) {
	if (!anchor) {
		return false;
	}
	let heightHeader = 0;

	if (document.querySelector('header')) {
		heightHeader = document.querySelector('header').getBoundingClientRect().height;
	}
	const startY = anchor.getBoundingClientRect().top + heightHeader;
	let direction;

	if (startY < 0) {
		direction = -1;
	} else if (startY > 0) {
		direction = 1;
	} else {
		direction = 0;
	}

	if (direction === 0) {
		return undefined;
	}
	scroll(anchor, direction);

	return undefined;
}
