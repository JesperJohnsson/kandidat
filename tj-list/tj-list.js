(function (window, document, undefined) {
    const thisDoc = (document._currentScript || document.currentScript).ownerDocument;

    class TJList extends HTMLElement {

        constructor() {
            super();

            let shadowRoot = this.attachShadow({mode:'open'});
            const template = thisDoc.querySelector("template");
            const instance = template.content.cloneNode(true);

            shadowRoot.appendChild(instance);
        }

        connectedCallback() {

        }

        disconnectedCallback() {

        }

        attributeChangedCallback(attrName, oldVal, newVal) {

        }
    }

    window.customElements.define('tj-list', TJList);
})(window, document);
