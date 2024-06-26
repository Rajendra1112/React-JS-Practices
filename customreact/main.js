const mainContainer = document.querySelector("#container");

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "you can click here",
};

customRender(reactElement, mainContainer);

function customRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop == element.children) continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(a);
}
