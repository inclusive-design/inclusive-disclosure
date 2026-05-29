import { Elena } from '@elenajs/core';

export default class InclusiveDisclosure extends Elena(HTMLElement) {
	static tagName = 'inclusive-disclosure';
	static element = 'button[aria-expanded]';

	connectedCallback() {
		super.connectedCallback();
		this.element.addEventListener('click', this._onClick);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.element.removeEventListener('click', this._onClick);
	}

	_onClick = (event) => {
		event.preventDefault();
		const ariaExpanded = this.element.getAttribute('aria-expanded') === 'true' || false;
		this.element.setAttribute('aria-expanded', !ariaExpanded);
	};
}

InclusiveDisclosure.define();
