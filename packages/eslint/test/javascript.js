function Sidebar() {
	console.log('init');
	let timeout;
	let overlay = document.getElementById('page-overlay-sidebar');

	function getScrollbarWidth() {
		return (window.innerWidth - document.documentElement.clientWidth).toString();
	}
	function getSidebarContainer() {
		return document.getElementById('app-sidebar') || undefined;
	}
	function open(event) {
		if (event) {
			event.preventDefault();
		}
		const container = getSidebarContainer();

		if (container) {
			if (timeout) {
				clearTimeout(timeout);
			}
			if (overlay) {
				overlay.hidden = false;
				overlay.removeAttribute('sidebar-closed');
				overlay.setAttribute('sidebar-opended', '');
			}
			container.hidden = false;
			setTimeout(() => {
				container.removeAttribute('sidebar-closed');
				container.setAttribute('sidebar-opended', '');
				document.documentElement.style.marginRight = `${getScrollbarWidth()}px`;
				document.documentElement.classList.add('scroll-disabled');
			});
		}
	}
	function close(event = null) {
		if (event) {
			event.preventDefault();
		}
		const container = getSidebarContainer();

		if (container) {
			container.setAttribute('sidebar-closed', '');
			if (overlay) {
				overlay.setAttribute('sidebar-closed', '');
			}
			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => {
				container.removeAttribute('sidebar-opended');
				container.removeAttribute('sidebar-closed');
				container.hidden = true;
				if (overlay) {
					overlay.hidden = true;
					overlay.removeAttribute('sidebar-opended');
					overlay.removeAttribute('sidebar-closed');
				}
				document.documentElement.style.marginRight = '0px';
				document.documentElement.classList.remove('scroll-disabled');
			}, 200);
		}
	}
	if (!overlay) {
		overlay = document.createElement('div');
		overlay.id = 'page-overlay-sidebar';
		overlay.hidden = true;
		document.body.appendChild(overlay);
		overlay.onclick = (event) => {
			event.preventDefault();
			close();
		};
	}

	return {
		open,
		close
	};
}
export default Sidebar;
