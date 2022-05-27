class ContentCreator {
  constructor(settings) {
    this.settings = settings;
  }

  promoCards() {
    const { data } = this.settings.promo;

    const cards = {};

    Object.entries(data).map((card) => {
      const [key, prop] = card;

      const { template } = structuredClone(this.settings.promo);

      const photoWrap = template.c.photoWrap.c;

      const foodPhoto = photoWrap.foodPhoto.d;

      foodPhoto.src = prop.img;

      const discount = photoWrap.discount.d;

      discount.textContent = prop.discount
        .toString()
        .concat(discount.textContent);

      const mealName = template.c.mealName.d;

      mealName.textContent = prop.name;

      const timer = template.c.timer.d;

      timer.textContent = prop.time.toString().concat(timer.textContent);

      cards[key] = template;
      return cards[key];
    });
    return cards;
  }

  popularItems() {
    const { popularItems } = this.settings;

    const { data } = popularItems;

    const { sliderContent } = structuredClone(
      popularItems.template.mealSlider.c
    );

    const cards = popularItems.template.mealSlider;

    cards.c.sliderContent.c = {};

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(sliderContent.c.mealCard);

      const mealPhoto = template.c.mealPhoto.d;

      mealPhoto.src = mealPhoto.src.concat(value.img);

      const mealName = template.c.mealName.d;

      mealName.textContent = value.name;

      const restName = template.c.restName.d;

      restName.textContent = value.restaurant;

      const mealPrice = template.c.mealPrice.d;

      mealPrice.textContent = mealPrice.textContent.concat(
        value.price.toString()
      );

      const composition = template.c.composition.d;

      composition.textContent = value.composition;

      cards.c.sliderContent.c[key] = template;

      return cards.c.sliderContent.c[key];
    });

    const shell = {};

    shell.popularItems = cards;

    return shell;
  }

  restContent() {
    const { featuredRestaurants } = this.settings;

    const { data } = featuredRestaurants;

    const restContent = structuredClone(
      featuredRestaurants.template.restContent.c
    );

    const cards = featuredRestaurants.template.restContent;

    cards.c = {};

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(restContent.restaurant);

      const mealPict = template.c.mealPict.d;

      mealPict.src = mealPict.src.concat(value.mealPict);

      const discounts = template.c.discounts.d;

      discounts.textContent = discounts.textContent.concat(value.discounts);

      const deliveryRate = template.c.deliveryRate.d;

      deliveryRate.textContent = value.deliveryRate;

      const restLogo = template.c.restLogo.d;

      restLogo.src = restLogo.src.concat(value.logo);

      const restName = template.c.restName.d;

      restName.textContent = value.name;

      const ratings = template.c.ratings.d;

      ratings.textContent = value.ratings;

      const currentState = template.c.currentState.d;

      const [className, textContent] = value.currentState;

      currentState.className = className;

      currentState.textContent = textContent;

      cards.c[key] = template;

      return cards.c[key];
    });
    const shell = {};

    shell.featuredRestaurants = cards;

    return shell;
  }

  menuContent() {
    const { menuContent } = this.settings;

    const { data } = menuContent;

    const tempWrapper = menuContent.template.c;

    const cards = menuContent.template;

    cards.c = {};

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(tempWrapper.item);

      const mealPict = template.c.mealPict.d;

      mealPict.src = mealPict.src.concat(value.img);

      const name = template.c.name.d;

      name.textContent = value.name;

      cards.c[key] = template;

      return cards.c[key];
    });

    const shell = {};

    shell.menuContent = cards;

    return shell;
  }
}

export default ContentCreator;
