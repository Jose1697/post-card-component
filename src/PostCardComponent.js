import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './PostCardComponent-styles.js';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<post-card-component></post-card-component>
```

##styling-doc

@customElement post-card-component
*/
export class PostCardComponent extends LitElement {
  static get is() {
    return 'post-card-component';
  }

  // Declare properties
  static get properties() {
    return {
      post: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.post = {};
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('post-card-component-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <bbva-web-card-product
        badge-text="Instagram"
        image="${this.post.image}"
        heading="${this.post.name}"
        preheading="${this.post.date}" 
      >
        <p slot="description">
          ${this.post.description}
        </p>
      </bbva-web-card-product>
    `;
  }
}
