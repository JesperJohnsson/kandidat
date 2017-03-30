(function (window, document, undefined) {
    const thisDoc = (document._currentScript || document.currentScript).ownerDocument;
    const template = thisDoc.querySelector("template");

    class TJTemplate extends HTMLElement {
        constructor() {

            /**
             * Make a call to the HTMLElements constructor
             */
            super();

            /**
             * Create a shadowroot and attach a shadow to the TJTemplate element
             */
            let shadowRoot = this.attachShadow({mode:'open'});

            /**
             * Create an instance of the templates content
             */
            const instance = template.content.cloneNode(true);

            /**
             * Append the instance to the shadowroot
             */
            shadowRoot.appendChild(instance);
        }

        connectedCallback() {
            console.log('connectedCallback');
        }

        disconnectedCallback() {
            console.log('disconnectedCallback');
        }

        attributeChangedCallback(attrName, oldVal, newVal) {
            console.log('attributeChangedCallback');
        }
    }

    window.customElements.define('tj-template', TJTemplate);
})(window, document);
