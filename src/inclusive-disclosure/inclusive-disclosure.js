import { Elena } from '@elenajs/core';

export default class InclusiveDisclosure extends Elena(HTMLElement) {
	static tagName = 'inclusive-disclosure';

	connectedCallback() {
		super.connectedCallback();
		if (this.element.tagName !== 'BUTTON') {
			/** The first child element must be a button. */
			console.warn('░█ [ELENA]: Element not found.');
		}

		this.element.removeAttribute('hidden');
		this.element.nextElementSibling.setAttribute('hidden', '');
		this.element.setAttribute('aria-expanded', false);
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
		if (ariaExpanded) {
			this.element.nextElementSibling.setAttribute('hidden', '');
		} else {
			this.element.nextElementSibling.removeAttribute('hidden');
		}
	};
}

InclusiveDisclosure.define();
