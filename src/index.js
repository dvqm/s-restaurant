import UiCreator from './components/UiCreator';
import EventCreator from './components/EventCreator';
import ContentCreator from './components/ContentCreator';
import data from '../assets/json/contentHTML.json';

// styles
import './styles/index.scss';
import './styles/common.scss';
import './styles/featuredRestaurants.scss';
import './styles/foodCategories.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/popularItems.scss';
import './styles/promo.scss';
import './styles/topNav.scss';

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
        id: 'findFoodBtn',
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

const mainPage = new MainPage();

mainPage.show();
