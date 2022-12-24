import UiCreator from './UiCreator';
import EventCreator from './EventCreator';
import ContentCreator from './ContentCreator';
import data from '../assets/json/contentHTML.json';

class MainPage extends UiCreator {
  constructor() {
    super();

    this.content = new ContentCreator(data);

    this.events = new EventCreator();
  }

  show() {
    const wrapper = this.content.wrapper();

    this.render(
      wrapper,
      this.content.topNav(),
      this.content.header(),
      this.content.promoMeals(),
      this.content.popularMeals(),
      this.content.restaurants(),
      this.content.menu(),
      this.content.footer(),
    );

    const slidersChain = (node) => this.constructor.composer(
      node,
      [this.events.slider, {
        showItems: 5,
        offset: 1,
        shell: 'sliderContent',
        card: 'mealCard',
        prev: 'prevMealBtn',
        next: 'nextMealBtn',
      }],
      [this.events.slider, {
        showItems: 5,
        offset: 1,
        shell: 'menuContent',
        card: 'item',
        prev: 'categPrevBtn',
        next: 'categNextBtn',
      }],
      [this.events.underConstruction, {
        content: this.content.notFinished(),
        id: 'login',
        eventType: 'click',
      }],
      [this.events.underConstruction, {
        content: this.content.notFinished(),
        id: 'orderNow',
        bunch: true,
        eventType: 'click',
      }],
    );

    this.render(document.body, slidersChain(wrapper));
  }
}

export default MainPage;
