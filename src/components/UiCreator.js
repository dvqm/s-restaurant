import contentHTML from '../assets/json/contentHTML.json';
import ContentCreator from './ContentCreator';

class UiCreator {
  constructor(pointer, data) {
    this.pointer = pointer;

    this.data = data;
  }

  render() {
    const { data } = this;

    const nodeCreate = (props) => {
      const details = structuredClone(props);

      const { tag } = details.d;

      delete details.d.tag;

      const parent = document.createElement(tag);

      Object.entries(details.d).forEach((prop) => {
        const [key, value] = prop;

        if (key === 'src') {
          const link = `${value}`;

          parent[key] = require(`../${link}`);
        } else parent[key] = value;
      });

      if (details.c) {
        const { c } = details;

        Object.entries(c).forEach((node) => {
          const [key, value] = node;
          if (key === 'i') {
            delete c[key];

            Object.values(value).forEach((func) => {
              const content = new ContentCreator(contentHTML);

              const nodes = content[func]();

              Object.values(nodes).forEach((element) => {
                const child = nodeCreate(element);

                parent.append(child);
              });
            });
          } else {
            const child = nodeCreate(value);

            parent.append(child);
          }
        });
      }

      return parent;
    };

    const parent = nodeCreate(data);

    this.pointer.append(parent);
  }
}

export default UiCreator;
