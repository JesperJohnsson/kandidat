(function (window, document, undefined) {
    let thatDoc = document;
    let thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
    let template = thisDoc.querySelector('template').content;

    class TJList extends HTMLElement {

        constructor() {
            super();

            let shadowRoot = this.attachShadow({mode:'open'});
            let clone = thatDoc.importNode(template, true);
            shadowRoot.appendChild(clone);
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
