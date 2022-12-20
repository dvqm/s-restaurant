import UiCreator from './UiCreator';

class ContentCreator extends UiCreator {
  constructor(settings) {
    super();

    this.settings = settings;
  }

  promoCards() {
    const data = this.settings.promo;

    const cards = {
      tag: 'div',
      className: 'promo',
      c: data.map(({ img, discount, name, time }) => ({
        tag: 'div',
        className: 'dealCard',
        c: {
          photoWrap: {
            tag: 'div',
            className: 'foodPhoto',
            c: {
              foodPhoto: {
                tag: 'img',
                src: img,
                alt: 'Meal picture',
              },
              discount: {
                tag: 'span',
                className: 'discount',
                textContent: `${discount} %`,
              },
            },
          },
          mealName: {
            tag: 'span',
            className: 'mealName',
            textContent: name,
          },
          timer: {
            tag: 'span',
            className: 'timer',
            textContent: `${time} Days Remaining`,
          },
        },
      })),
    };

    return this.constructor.node(cards);
  }

  popularItems() {
    const data = this.settings.popularItems;

    const cards = {
      tag: 'div',
      className: 'mealSlider',
      c: [
        {
          tag: 'button',
          className: 'sliderBtn backward',
          id: 'prevMealBtn',
        },
        {
          tag: 'div',
          className: 'sliderContent',
          c: data.map(({ img, name, restaurant, price, composition }) => ({
            tag: 'div',
            className: 'mealCard',
            c: {
              mealPhoto: {
                tag: 'img',
                className: 'mealPhoto',
                alt: 'Meal picture',
                src: `assets/meals/${img}`,
              },
              mealName: {
                tag: 'span',
                className: 'mealName',
                textContent: name,
              },
              restName: {
                tag: 'span',
                className: 'restName',
                textContent: restaurant,
              },
              mealPrice: {
                tag: 'span',
                className: 'mealPrice',
                textContent: `$${price}`,
              },
              orderBtn: {
                tag: 'button',
                id: 'orderNow',
                textContent: 'Order Now',
              },
              composition: {
                tag: 'p',
                className: 'composition',
                textContent: composition,
              },
            },
          })),
        },
        {
          tag: 'button',
          className: 'sliderBtn forward',
          id: 'nextMealBtn',
        },
      ],
    };

    return this.constructor.node(cards);
  }

  restContent() {
    const data = this.settings.featuredRestaurants;

    const cards = {
      tag: 'div',
      className: 'restContent',
      c: data.map(
        ({
          mealPict,
          discounts,
          deliveryRate,
          logo,
          name,
          restRating,
          currentState,
        }) => ({
          tag: 'div',
          className: 'restaurant',
          c: [
            {
              tag: 'img',
              src: `assets/meals/${mealPict}`,
              className: 'mealPict',
              alt: 'restaurant picture',
            },
            {
              tag: 'span',
              className: 'discounts',
              textContent: `${discounts} % off`,
            },
            {
              tag: 'span',
              className: 'deliveryRate',
              textContent: deliveryRate,
            },
            {
              tag: 'img',
              className: 'restLogo',
              alt: 'Restaurant logo',
              src: `assets/restaurants/${logo}`,
            },
            {
              tag: 'span',
              className: 'restName',
              textContent: name,
            },
            {
              tag: 'span',
              className: 'ratings',
              textContent: restRating,
            },
            {
              tag: 'span',
              className: currentState[0],
              textContent: currentState[1],
            },
          ],
        }),
      ),
    };

    return this.constructor.node(cards);
  }

  menuContent() {
    const data = this.settings.menuContent;

    const cards = {
      tag: 'div',
      className: 'menuContent',
      c: data.map(({ img, name }) => ({
        tag: 'div',
        className: 'item',
        c: {
          mealPict: {
            tag: 'img',
            alt: 'Meal picture',
            src: `assets/meals/foodCategories/${img}`,
          },
          name: {
            tag: 'span',
            textContent: name,
          },
        },
      })),
    };

    return this.constructor.node(cards);
  }

  footerCities() {
    const data = this.settings.footer.cityList;

    const cards = {
      tag: 'div',
      className: 'cityList',
      c: data.map(([name, href]) => ({
        tag: 'a',
        target: '_self',
        href: `https://${href}`,
        textContent: name,
      })),
    };

    return this.constructor.node(cards);
  }

  footerMenu() {
    const data = this.settings.footer.navigation;

    const cards = {
      tag: 'div',
      className: 'navigation',
      c: data.map(({ title, nested }) => ({
        tag: 'div',
        className: 'division',
        c: [
          {
            tag: 'h2',
            textContent: title,
          },
          ...nested.map(({ title: name, href }) => ({
            tag: 'a',
            href: `https://${href}`,
            target: '_self',
            textContent: name,
          })),
        ],
      })),
    };

    return this.constructor.node(cards);
  }

  footerNetworks() {
    const data = this.settings.footer.socialNetworks;

    const cards = {
      tag: 'div',
      className: 'networks',
      id: 'socialNetworks',
      c: data.map((card) => {
        const [className, href] = card;
        return {
          tag: 'a',
          href: `https://${href}`,
          c: {
            networkPict: {
              tag: 'div',
              className: `socialIcons ${className}`,
            },
          },
        };
      }),
    };

    return this.constructor.node(cards);
  }
}

export default ContentCreator;
