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
}

export default ContentCreator;
