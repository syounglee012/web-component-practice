const template = document.createElement("template");
template.innerHTML = `
<style>
label {
    color: green;
    display: block;
}

.description {
    font-size: .65rem;
    font-weight: lighter;
    color: #999;
}
</style>
<label>
    <input type="checkbox" />
    <slot></slot>
        <span class='description'>
    <slot name='description'></slot>
</span>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributesChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      this.updateChecked(newValue);
    }
  }

  connectedCallback() {
    console.log("connected");
  }
  disconnectedCallback() {
    console.log("disconnected");
  }

  updateChecked() {
    this.checkbos.checked = value != null && value !== "false";
  }
}

customElements.define("todo-item", TodoItem);

item.remove();
