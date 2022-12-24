import UiCreator from './UiCreator';

class ContentCreator extends UiCreator {
  constructor(settings) {
    super();

    this.settings = settings;
  }

  wrapper() {
    const content = {
      tag: 'div',
      id: 'content',
    };

    return this.constructor.node(content);
  }

  topNav() {
    const content = {
      tag: 'div',
      className: 'topNav',
      c: [
        {
          tag: 'img',
          className: 'logo',
          src: 'logo.png',
          alt: 'logotype',
        },
        {
          tag: 'label',
          className: 'address',
          c: [
            {
              tag: 'span',
              textContent: 'Delivery to: ',
            },
            {
              tag: 'input',
              type: 'text',
            },
          ],
        },
        {
          tag: 'label',
          className: 'search',
          c: [
            {
              tag: 'input',
              type: 'text',
              placeholder: 'Search food',
            },
          ],
        },
        {
          tag: 'button',
          id: 'login',
          textContent: 'Login',
        },
      ],
    };

    return this.constructor.node(content);
  }

  header() {
    const content = {
      tag: 'div',
      className: 'header',
      c: [
        {
          tag: 'h2',
          textContent: 'Are you starving?',
        },
        {
          tag: 'h4',
          textContent:
            'Within a few clicks, find meals that are accessible near you',
        },
        {
          tag: 'div',
          className: 'order',
          c: [
            {
              tag: 'div',
              className: 'upperPart',
              c: [
                {
                  tag: 'button',
                  className: 'delivery',
                  id: 'deliveryBtn',
                  textContent: 'Delivery',
                },
                {
                  tag: 'button',
                  className: 'pickup',
                  id: 'pickupBtn',
                  textContent: 'Pickup',
                },
              ],
            },
            {
              tag: 'div',
              className: 'lowerPart',
              c: [
                {
                  tag: 'input',
                  type: 'text',
                  placeholder: 'Enter your address',
                },
                {
                  tag: 'button',
                  className: 'findFood',
                  textContent: 'Find Food',
                  id: 'findFoodBtn',
                },
              ],
            },
            {
              tag: 'div',
              className: 'headerImg',
            },
          ],
        },
      ],
    };

    return this.constructor.node(content);
  }

  promoMeals() {
    const data = this.settings.promo;

    const cards = {
      tag: 'div',
      className: 'promo',
      c: data.map(({
        img,
        discount,
        name,
        time,
      }) => ({
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

  popularMeals() {
    const data = this.settings.popularItems;

    const content = {
      tag: 'div',
      className: 'popularItems',
      c: [
        {
          tag: 'h2',
          textContent: 'Popular Items',
        },
        {
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
              id: 'sliderContent',
              c: data.map(({
                img,
                name,
                restaurant,
                price,
                composition,
              }) => ({
                tag: 'div',
                className: 'mealCard',
                c: {
                  mealPhoto: {
                    tag: 'img',
                    className: 'mealPhoto',
                    alt: 'Meal picture',
                    src: `meals/${img}`,
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
                    className: 'orderNow',
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
        },
      ],
    };

    return this.constructor.node(content);
  }

  restaurants() {
    const data = this.settings.featuredRestaurants;

    const content = {
      tag: 'div',
      className: 'featuredRestaurants',
      c: [
        {
          tag: 'h2',
          textContent: 'Featured Restaurants',
        },
        {
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
                  src: `meals/${mealPict}`,
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
                  src: `restaurants/${logo}`,
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
        },
        {
          tag: 'button',
          id: 'viewRest',
          className: 'mainBtn',
          textContent: 'View All >',
        },
      ],
    };
    return this.constructor.node(content);
  }

  menu() {
    const data = this.settings.menuContent;

    const content = {
      tag: 'div',
      className: 'menu',
      c: [
        {
          tag: 'div',
          className: 'menuLevel2',
          c: [
            {
              tag: 'h2',
              textContent: 'Search by Food',
            },
            {
              tag: 'div',
              className: 'menuLevel3',
              c: [
                {
                  tag: 'button',
                  className: 'secBtn',
                  id: 'viewAllCategories',
                  textContent: 'View All >',
                },
                {
                  tag: 'button',
                  className: 'categoryBtn backward',
                  id: 'categPrevBtn',
                },
                {
                  tag: 'button',
                  className: 'categoryBtn forward',
                  id: 'categNextBtn',
                },
              ],
            },
            {
              tag: 'div',
              className: 'menuContent',
              id: 'menuContent',
              c: data.map(({
                img,
                name,
              }) => ({
                tag: 'div',
                className: 'item',
                c: {
                  mealPict: {
                    tag: 'img',
                    alt: 'Meal picture',
                    src: `meals/foodCategories/${img}`,
                  },
                  name: {
                    tag: 'span',
                    textContent: name,
                  },
                },
              })),
            },
          ],
        },
      ],
    };

    return this.constructor.node(content);
  }

  footer() {
    const data = this.settings.footer;

    const cityListSection = {
      tag: 'div',
      className: 'cityList',
      c: data.cityList.map(([name, href]) => ({
        tag: 'a',
        target: '_self',
        href: `${href}`,
        textContent: name,
      })),
    };

    const menuSection = {
      tag: 'div',
      className: 'menuWrap',
      c: [
        {
          tag: 'div',
          className: 'navigation',
          c: data.navigation.map(({
            title,
            nested,
          }) => ({
            tag: 'div',
            className: 'division',
            c: [
              {
                tag: 'h2',
                textContent: title,
              },
              ...nested.map(({
                title: name,
                href,
              }) => ({
                tag: 'a',
                href: `${href}`,
                target: '_self',
                textContent: name,
              })),
            ],
          })),
        },
        {
          tag: 'div',
          className: 'contacts',
          c: [
            {
              tag: 'h2',
              textContent: 'Follow us',
            },
            {
              tag: 'div',
              className: 'networks',
              id: 'socialNetworks',
              c: data.socialNetworks.map((card) => {
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
            },
            {
              tag: 'span',
              textContent: 'Receive exclusive offers in your mailbox',
            },
            {
              tag: 'div',
              className: 'mailWrap',
              c: [
                {
                  tag: 'input',
                  id: 'subscribe',
                  placeholder: 'Enter your email',
                },
                {
                  tag: 'button',
                  id: 'subscribe',
                  textContent: 'Subscribe',
                },
              ],
            },
          ],
        },
      ],
    };

    const creditsSection = {
      tag: 'div',
      className: 'credentials',
      c: [
        {
          tag: 'span',
          textContent: 'All rights Reserved @ Food Company, 2022',
        },
        {
          tag: 'span',
          textContent: 'Made by me',
        },
      ],
    };

    const content = {
      tag: 'div',
      className: 'footer',
      c: [
        {
          tag: 'h2',
          className: 'footHead',
          textContent: 'Our Top Cities',
        },
        cityListSection,
        {
          tag: 'div',
          className: 'hr',
        },
        menuSection,
        {
          tag: 'div',
          className: 'hr',
        },
        creditsSection,
      ],
    };

    return this.constructor.node(content);
  }

  notFinished(text = 'This section is under construction. Please check the "View All >" buttons.') {
    const content = {
      tag: 'div',
      className: 'construction',
      c: [
        {
          tag: 'span',
          textContent: text,
        },
        {
          tag: 'button',
          id: 'notFinished',
          textContent: 'Cancel',
        },
        {
          tag: 'div',
          className: 'backLayer',
          id: 'backdrop',
        },
      ],
    };

    return this.constructor.node(content);
  }
}

export default ContentCreator;
