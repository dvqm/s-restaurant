import UiCreator from './UiCreator';

class ContentCreator extends UiCreator {
  constructor(settings) {
    super();

    this.settings = settings;

    this.repo = 'sb-restaurant';
  }

  static sendGETParams(page, key, value) {
    const baseUrl = new URL(window.location.href).origin;

    return `${baseUrl}/${page}?${key}=${value}`;
  }

  static formattedPrice(price) {
    let numString = price.toString();

    const splitNum = numString.slice(-2);

    numString = `${numString.slice(0, -2)},${splitNum}`;

    return numString;
  }

  static getRestName(id, rests) {
    return rests.find((restaurant) => restaurant.id === id);
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
      c: [{
        tag: 'a',
        href: '/index.html',
        target: '_self',
        c: [{
          tag: 'img',
          className: 'logo',
          src: 'logo.png',
          alt: 'logotype',
        }],
      }, {
        tag: 'label',
        className: 'address',
        c: [{
          tag: 'span',
          textContent: 'Delivery to: ',
        }, {
          tag: 'input',
          type: 'text',
        }],
      }, {
        tag: 'label',
        className: 'search',
        c: [{
          tag: 'input',
          type: 'text',
          placeholder: 'Search food',
        }],
      }, {
        tag: 'button',
        id: 'login',
        textContent: 'Login',
      }],
    };

    return this.constructor.node(content);
  }

  header() {
    const content = {
      tag: 'div',
      className: 'header',
      c: [{
        tag: 'h2',
        textContent: 'Are you starving?',
      }, {
        tag: 'h4',
        textContent: 'Within a few clicks, find meals that are accessible near you',
      }, {
        tag: 'div',
        className: 'order',
        c: [{
          tag: 'div',
          className: 'upperPart',
          c: [{
            tag: 'button',
            className: 'delivery',
            id: 'deliveryBtn',
            textContent: 'Delivery',
          }, {
            tag: 'button',
            className: 'pickup',
            id: 'pickupBtn',
            textContent: 'Pickup',
          }],
        }, {
          tag: 'div',
          className: 'lowerPart',
          c: [{
            tag: 'input',
            type: 'text',
            placeholder: 'Enter your address',
          }, {
            tag: 'button',
            className: 'findFood',
            textContent: 'Find Food',
            id: 'findFoodBtn',
          }],
        }, {
          tag: 'div',
          className: 'headerImg',
        }],
      }],
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
        c: [{
          tag: 'div',
          className: 'foodPhoto',
          c: [{
            tag: 'img',
            src: img,
            alt: 'Meal picture',
          }, {
            tag: 'span',
            className: 'discount',
            textContent: `${discount} %`,
          }],
        }, {
          tag: 'span',
          className: 'mealName',
          textContent: name,
        }, {
          tag: 'span',
          className: 'timer',
          textContent: `${time} Days Remaining`,
        }],
      })),
    };

    return this.constructor.node(cards);
  }

  popularMeals() {
    const data = this.settings.menu.filter((meal) => meal.featured);

    const { restaurants } = this.settings;

    const content = {
      tag: 'div',
      className: 'mealItems',
      c: [{
        tag: 'h2',
        textContent: 'Popular Items',
      }, {
        tag: 'div',
        className: 'mealSlider',
        c: [{
          tag: 'button',
          className: 'sliderBtn backward',
          id: 'prevMealBtn',
        }, {
          tag: 'div',
          className: 'meals',
          id: 'sliderContent',
          c: data.map(({
            img,
            name,
            restaurant,
            description,
          }) => ({
            tag: 'div',
            className: 'mealCard',
            c: [{
              tag: 'img',
              className: 'mealPhoto',
              alt: 'Meal picture',
              src: `meals/${img}`,
            }, {
              tag: 'span',
              className: 'mealName',
              textContent: name,
            }, {
              tag: 'span',
              className: 'restName',
              textContent: this.constructor.getRestName(restaurant[0].id, restaurants).name,
            }, {
              tag: 'span',
              className: 'mealPrice',
              textContent: `$${this.constructor.formattedPrice(restaurant[0].price)}`,
            }, {
              tag: 'button',
              className: 'orderNow',
              textContent: 'Order Now',
            }, {
              tag: 'p',
              className: 'composition',
              textContent: description,
            }],
          })),
        }, {
          tag: 'button',
          className: 'sliderBtn forward',
          id: 'nextMealBtn',
        }],
      }],
    };

    return this.constructor.node(content);
  }

  restAbbreviated() {
    const data = this.settings.restaurants.filter((rest) => rest.featured === 'true');

    const content = {
      tag: 'div',
      className: 'restaurants',
      c: [{
        tag: 'h2',
        textContent: 'Featured Restaurants',
      }, {
        tag: 'div',
        className: 'restContent',
        c: data.map(({
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
          c: [{
            tag: 'img',
            src: `meals/${mealPict}`,
            className: 'mealPict',
            alt: 'restaurant picture',
          }, {
            tag: 'span',
            className: 'discounts',
            textContent: `${discounts} % off`,
          }, {
            tag: 'span',
            className: 'deliveryRate',
            textContent: deliveryRate,
          }, {
            tag: 'img',
            className: 'restLogo',
            alt: 'Restaurant logo',
            src: `restaurants/${logo}`,
          }, {
            tag: 'span',
            className: 'restName',
            textContent: name,
          }, {
            tag: 'span',
            className: 'ratings',
            textContent: restRating,
          }, {
            tag: 'span',
            className: currentState[0],
            textContent: currentState[1],
          }],
        })),
      }, {
        tag: 'button',
        id: 'viewRest',
        className: 'mainBtn',
        textContent: 'View All >',
      }],
    };
    return this.constructor.node(content);
  }

  restElaborated(pageSize) {
    const getPages = (array, pages) => {
      const result = [];

      array.forEach((element, i) => {
        if (i % pages === 0) {
          result.push(i);
        }
      });

      return result;
    };

    const data = this.settings.restaurants;

    const pages = getPages(data, pageSize);

    const content = {
      tag: 'div',
      className: 'restaurants',
      c: [
        {
          tag: 'h2',
          textContent: 'Restaurants',
        },
        {
          tag: 'div',
          className: 'ribbon',
          c: [{
            tag: 'button',
            className: 'secBtn',
            id: 'prevPage',
            textContent: '<',
            disabled: true,
          }, ...pages.map((page, index) => ({
            tag: 'button',
            textContent: index + 1,
            id: `startFrom${page}`,
            className: 'secBtn pagBtns',
          })), {
            tag: 'button',
            className: 'secBtn',
            id: 'nextPage',
            textContent: '>',
          }],
        },

        {
          tag: 'div',
          className: 'restContent',
          id: 'restContent',
          c: data.map(({
            id,
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
                tag: 'a',
                className: 'restMenu',
                title: 'Go to the restaurant menu',
                href: this.constructor.sendGETParams(`${this.repo}/meals.html`, 'restid', id),
                c: [{
                  tag: 'img',
                  src: `meals/${mealPict}`,
                  className: 'mealPict',
                  alt: 'restaurant picture',
                },
                ],
              },
              {
                tag: 'span',
                className: 'discounts',
                textContent: `${discounts} % off`,
              }, {
                tag: 'span',
                className: 'deliveryRate',
                textContent: deliveryRate,
              }, {
                tag: 'img',
                className: 'restLogo',
                alt: 'Restaurant logo',
                src: `restaurants/${logo}`,
              }, {
                tag: 'span',
                className: 'restName',
                textContent: name,
              }, {
                tag: 'span',
                className: 'ratings',
                textContent: restRating,
              }, {
                tag: 'span',
                className: currentState[0],
                textContent: currentState[1],
              },
            ],
          })),
        }],
    };

    return this.constructor.node(content);
  }

  menu() {
    const sectionImg = this.settings.categoriesContent;

    const data = ((menu) => menu
      .map((meal) => meal.section)
      .filter((type, index, self) => self.indexOf(type) === index)
      .sort((a, b) => b.localeCompare(a))
      .map((type) => ({
        name: type,
        img: sectionImg[type.toLowerCase()] ? sectionImg[type.toLowerCase()] : 'categoryPlaceholder.png',
      })))(this.settings.menu);

    const content = {
      tag: 'div',
      className: 'menu',
      c: [{
        tag: 'div',
        className: 'menuLevel2',
        c: [{
          tag: 'h2',
          textContent: 'Search by Food',
        }, {
          tag: 'div',
          className: 'menuLevel3',
          c: [{
            tag: 'button',
            className: 'secBtn',
            id: 'viewAllCategories',
            textContent: 'View All >',
          }, {
            tag: 'button',
            className: 'categoryBtn backward',
            id: 'categPrevBtn',
          }, {
            tag: 'button',
            className: 'categoryBtn forward',
            id: 'categNextBtn',
          }],
        }],
      },
      {
        tag: 'div',
        className: 'menuContent',
        id: 'menuContent',
        c: data.map(({
          img,
          name,
        }) => ({
          tag: 'a',
          href: this.constructor.sendGETParams(`${this.repo}/meals.html`, 'menu', name),
          className: 'item',
          c: [{
            tag: 'img',
            alt: 'Meal picture',
            src: `meals/foodCategories/${img}`,
          }, {
            tag: 'span',
            textContent: name,
          }],
        })),
      },
      ],
    };

    return this.constructor.node(content);
  }

  meals(data) {
    const filterMeals = (section, meals) => meals.filter((meal) => meal.section === section);

    const { restaurants } = this.settings;

    const sections = ((meals) => meals
      .map((meal) => meal.section)
      .filter((type, index, self) => self.indexOf(type) === index)
      .sort((a, b) => b.localeCompare(a))
      .map((type) => ({ section: type })))(data);

    const content = {
      tag: 'div',
      className: 'meals',
      c: [{
        tag: 'div',
        className: 'ribbon',
        c: [{
          tag: 'button',
          className: 'secBtn',
          id: 'allMeals',
          disabled: true,
          textContent: 'All meals',
        }, ...sections.map(({ section }) => ({
          tag: 'button',
          textContent: section,
          id: section,
          className: 'secBtn',
        }))],
      },

      ...sections.map(({ section }) => ([{
        tag: 'h2',
        className: 'sectionHeader',
        textContent: section,
      },

      ...filterMeals(section, data)
        .map(({
          img,
          name,
          restaurant,
          description,
          id,
          labels,
        }) => ({
          tag: 'div',
          className: 'mealCard',
          c: [{
            tag: 'img',
            className: 'mealPhoto',
            alt: 'Meal picture',
            src: `meals/${img}`,
          },
          {
            tag: 'div',
            className: 'mealLabels',
            c: [
              ...labels.map((label) => ({
                tag: 'span',
                className: label,
                textContent: label,
              })),
            ],
          },
          {
            tag: 'span',
            className: 'mealName',
            textContent: name,
          }, {
            tag: 'span',
            className: 'restName',
            textContent: `${this.constructor.getRestName(restaurant[0].id, restaurants).name}`,
          }, {
            tag: 'span',
            className: 'mealPrice',
            textContent: `$ ${this.constructor.formattedPrice(restaurant[0].price)}`,
          }, {
            tag: 'button',
            className: 'orderNow',
            id: `mealId${id}`,
            textContent: 'Order Now',
          }, {
            tag: 'p',
            className: 'composition',
            textContent: description,
          }],
        })),

      ]))
        .reduce((prev, next) => prev.concat(next))],
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
      c: [{
        tag: 'div',
        className: 'navigation',
        c: data.navigation.map(({
          title,
          nested,
        }) => ({
          tag: 'div',
          className: 'division',
          c: [{
            tag: 'h2',
            textContent: title,
          }, ...nested.map(({
            title: name,
            href,
          }) => ({
            tag: 'a',
            href: `${href}`,
            target: '_self',
            textContent: name,
          }))],
        })),
      }, {
        tag: 'div',
        className: 'contacts',
        c: [{
          tag: 'h2',
          textContent: 'Follow us',
        }, {
          tag: 'div',
          className: 'networks',
          id: 'socialNetworks',
          c: data.socialNetworks.map((card) => {
            const [className, href] = card;
            return {
              tag: 'a',
              href: `https://${href}`,
              c: [{
                tag: 'div',
                className: `socialIcons ${className}`,
              }],
            };
          }),
        }, {
          tag: 'span',
          textContent: 'Receive exclusive offers in your mailbox',
        }, {
          tag: 'div',
          className: 'mailWrap',
          c: [{
            tag: 'input',
            id: 'subscribe',
            placeholder: 'Enter your email',
          }, {
            tag: 'button',
            id: 'subscribe',
            textContent: 'Subscribe',
          }],
        }],
      }],
    };

    const creditsSection = {
      tag: 'div',
      className: 'credentials',
      c: [{
        tag: 'span',
        textContent: 'All rights Reserved @ Food Company, 2022',
      }, {
        tag: 'span',
        textContent: 'Made by me',
      }],
    };

    const content = {
      tag: 'div',
      className: 'footer',
      c: [{
        tag: 'h2',
        className: 'footHead',
        textContent: 'Our Top Cities',
      }, cityListSection, {
        tag: 'div',
        className: 'hr',
      }, menuSection, {
        tag: 'div',
        className: 'hr',
      }, creditsSection],
    };

    return this.constructor.node(content);
  }

  notFinished(text = 'This section is under construction. Please check the "View All >" buttons.') {
    const content = {
      tag: 'div',
      className: 'construction',
      c: [
        {
          tag: 'div',
          className: 'backLayer',
          id: 'backdrop',
        },
        {
          tag: 'div',
          className: 'dialog',
          c: [
            {
              tag: 'span',
              textContent: text,
            }, {
              tag: 'button',
              className: 'secBtn',
              id: 'notFinished',
              textContent: 'Cancel',
            },
          ],
        },
      ],
    };

    return this.constructor.node(content);
  }
}

export default ContentCreator;
