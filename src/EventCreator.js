import names from './assets/json/names.json';

class EventCreator {
  mainPage(node) {
    const slidesNum = (num, items, cover) => {
      const { slider } = items;

      const wrapper = cover.querySelector(`.${slider.wrapper}`);

      const content = cover.querySelectorAll(`.${slider.item}`);

      const contentCopy = content;

      const prevBtn = cover.querySelector(`#${slider.prevBtn}`);

      const nextBtn = cover.querySelector(`#${slider.nextBtn}`);

      content.forEach((item) => item.remove());

      for (let i = 0; i < num; i += 1) {
        wrapper.append(contentCopy[i]);
      }

      let i = num;

      let j = 0;

      nextBtn.addEventListener('click', () => {
        if (i === 0 || i === contentCopy.length) i = 0;

        if (j === contentCopy.length) j = 0;

        wrapper.firstChild.remove();

        wrapper.append(contentCopy[i]);

        i += 1;

        j += 1;

        prevBtn.removeAttribute('disabled');
      });

      prevBtn.addEventListener('click', () => {
        if (j === 0 || j === contentCopy.length) j = contentCopy.length;

        if (i === 0) i = contentCopy.length;

        wrapper.lastChild.remove();

        i -= 1;

        j -= 1;

        wrapper.prepend(contentCopy[j]);

        nextBtn.removeAttribute('disabled');
      });
    };

    const { popularItems } = names;

    const mealSlider = node
      .querySelector(`.${popularItems.section}`)
      .querySelector(`.${popularItems.wrapper}`);

    slidesNum(5, popularItems, mealSlider);

    const { menu } = names;

    const menuSlider = node.querySelector(`.${menu.section}`);

    slidesNum(5, menu, menuSlider);

    const { featuredRestaurants } = names;

    const viewRest = featuredRestaurants.viewRestBtn;

    const viewRestBtn = node.querySelector(`#${viewRest}`);

    viewRestBtn.addEventListener('click', () => {
      console.log(node.childNodes);
      node.childNodes.forEach((child, i) => {
        if (i === 0 || i === 1 || i === node.childNodes.length - 1) {
          // child.remove();
          console.log(i, child);
        } else {
          console.log(child);
          child.remove();
        }
      });
      console.log(node.childNodes);
    });

    return node;
  }
}

export default EventCreator;
