class UiCreator {
  constructor(pointer, data) {
    this.pointer = pointer;

    this.data = data;
  }

  render() {
    const { data } = this;

    const nodeCreate = (props) => {
      const details = { ...props };

      const { tag } = details.d;

      delete details.d.tag;

      const parent = document.createElement(tag);

      Object.entries(details.d).forEach((prop) => {
        const [key, value] = prop;

        parent[key] = value;
      });

      if (details.c) {
        const { c } = details;

        Object.values(c).forEach((node) => {
          const child = nodeCreate(node);

          parent.append(child);
        });
      }

      return parent;
    };

    const parent = nodeCreate(data);

    this.pointer.append(parent);
  }
}

export default UiCreator;
