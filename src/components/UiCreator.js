class UiCreator {
  static copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static node(data) {
    if (Object.keys(data).length === 0) return '';

    const element = this.copy(data);

    const { tag } = element;

    const parent = document.createElement(tag);

    Object.entries(element)
      .forEach((prop) => {
        const [key, value] = prop;

        if (key !== 'tag' || key !== 'c' || key !== 's') parent[key] = value;
        if (key.includes('data-')) parent.setAttribute(key, value);
        if (key === 'required' && value === 'false') parent.removeAttribute(key);
        if (key === 'src') parent[key] = require(`../../assets/${value}`);
      });

    const blank = this.copy(data);

    if (blank.c) {
      const { c } = blank;

      Object.values(c)
        .forEach((node) => {
          parent.append(this.node(node));
        });
    }

    return parent;
  }

  static composer(node, ...handlers) {
    return [...handlers].reduce((prev, next) => next[0](prev, next[1]), node);
  }

  render(pointer, ...node) {
    return pointer.append(...node);
  }
}

export default UiCreator;
