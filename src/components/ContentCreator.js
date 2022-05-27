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

      const discountConcat = prop.discount
        .toString()
        .concat(discount.textContent);

      discount.textContent = discountConcat;

      const mealName = template.c.mealName.d;

      mealName.textContent = prop.name;

      const timer = template.c.timer.d;

      const timerConcat = prop.time.toString().concat(timer.textContent);

      timer.textContent = timerConcat;

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

    const cards = structuredClone(popularItems.template.mealSlider);
    cards.c.sliderContent.c = {};

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(sliderContent.c.mealCard);

      const mealPhoto = template.c.mealPhoto.d;

      mealPhoto.src = value.img;

      const mealName = template.c.mealName.d;

      mealName.textContent = value.name;

      const restName = template.c.restName.d;

      restName.textContent = value.restaurant;

      const mealPrice = template.c.mealPrice.d;

      const mealPriceConcat = mealPrice.textContent.concat(
        value.price.toString()
      );

      mealPrice.textContent = mealPriceConcat;

      const composition = template.c.composition.d;

      composition.textContent = value.composition;

      cards.c.sliderContent.c[key] = template;

      return cards.c.sliderContent.c[key];
    });
    const shell = {};
    shell.popularItems = cards;
    return shell;
  }
}

export default ContentCreator;
