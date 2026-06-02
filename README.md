# Inclusive Disclosure

Web component implementation of the [disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

Based on [code by Chris Ferdinandi](https://gomakethings.com/web-components-vs.-state-based-ui/),
released under the MIT license.

## Usage

To use the `inclusive-disclosure` web component, include it in your HTML via a content delivery network (CDN):

```html
<script src="https://unpkg.com/@inclusive-design/inclusive-disclosure/dist/bundle.js" type="module"></script>
```

Or install it with npm and include the installed package in your HTML:

```npm install --save @inclusive-design/inclusive-disclosure```

```html
<script src="node_modules/@inclusive-design/inclusive-disclosure/dist/bundle.js" type="module"></script>
```

On the page where you want to use the component, the following markup is required:

```html
<inclusive-disclosure>
    <button hidden>Disclosure Title</button>
    <div>Disclosure content.</div>
</inclusive-disclosure>
```

The first element must be a `<button>`. The second element contains the content which will be shown or hidden via the
disclosure pattern. For progressive enhancement, the button should have a `hidden` attribute so that it will not be
displayed if web components are not supported or JavaScript is disabled.
