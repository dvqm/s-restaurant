import Common from '../common';
import meals from '../../assets/json/meals.json5';
import './popularItems.scss';

class PopularItems extends Common {
  constructor() {
    super();
    this.settings = {
      containerName: 'popularItems',
      ui() {
        return this.tag(
          'div',
          { className: 'popularItems' },
          this.tag('h2', { textContent: this.containerName }),
          this.tag(
            'div',
            { className: 'mealSlider' },
            this.tag('button', {
              className: 'sliderBtn backward',
              id: 'mealBackwardButton',
            }),
            this.tag('div', { className: 'sliderContent' }),
            this.tag('button', {
              className: 'sliderBtn forward',
              id: 'mealForwardButton',
            })
          )
        );
      },
      slider: {
        file: meals.popularItems,
        sliderContent: 'sliderContent',
        sliderCard: 'mealCard',
        forward: 'mealForwardButton',
        backward: 'mealBackwardButton',
        elIndex: 0,
        offset: 4,
        ui(card) {
          return this.tag(
            'div',
            { className: this.sliderCard },
            this.tag('img', {
              src: require(`../../assets/meals/${card.img}`),
              className: 'mealPhoto',
            }),
            this.tag('span', { className: 'mealName', textContent: card.name }),
            this.tag('span', {
              className: 'restName',
              textContent: card.restaurant,
            }),
            this.tag('span', {
              className: 'mealPrice',
              textContent: `$${card.price}`,
            }),
            this.tag('button', { id: 'orderNow', textContent: 'Order Now' }),
            this.tag('p', {
              className: 'composition',
              textContent: card.composition,
            })
          );
        },
      },
    };
  }
}

export default PopularItems;
