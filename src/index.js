import UiCreator from './components/UiCreator';
import EventCreator from './components/EventCreator';
import ContentCreator from './components/ContentCreator';
import data from '../assets/json/contentHTML.json';

// styles
import './styles/index.scss';
import './styles/common.scss';
import './styles/restaurants.scss';
import './styles/foodCategories.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/meals.scss';
import './styles/promo.scss';
import './styles/topNav.scss';
import './styles/underConstruct.scss';

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
      this.content.restAbbreviated(),
      this.content.menu(),
      this.content.footer(),
    );

    const popularItems = [this.events.slider, {
      showItems: 5,
      offset: 1,
      shell: 'sliderContent',
      card: 'mealCard',
      prev: 'prevMealBtn',
      next: 'nextMealBtn',
      notFinished: this.content.notFinished(),
      underConstructEvent: this.events.underConstruction,
      eventType: 'click',
    }];

    const mealsCategories = [this.events.slider, {
      showItems: 6,
      offset: 1,
      shell: 'menuContent',
      card: 'item',
      prev: 'categPrevBtn',
      next: 'categNextBtn',
    }];

    const loginPage = [this.events.underConstruction, {
      content: this.content.notFinished(),
      id: '#login',
      eventType: 'click',
    }];

    const findFood = [this.events.underConstruction, {
      content: this.content.notFinished(),
      id: '#findFoodBtn',
      eventType: 'click',
    }];

    const orderNow = [this.events.underConstruction, {
      content: this.content.notFinished(),
      id: '.orderNow',
      bunch: true,
      eventType: 'click',
    }];

    const routeToRests = [this.events.pageRoute, {
      id: 'viewRest',
      eventType: 'click',
      route: '/sb-restaurant/rest.html',
    }];

    const routeToMeals = [this.events.pageRoute, {
      id: 'viewAllCategories',
      eventType: 'click',
      route: '/sb-restaurant/meals.html',
    }];

    const eventsChain = (node) => this.constructor.composer(
      node,
      popularItems,
      mealsCategories,
      loginPage,
      findFood,
      orderNow,
      routeToRests,
      routeToMeals,
    );

    this.render(document.body, eventsChain(wrapper));
  }
}

const mainPage = new MainPage();

mainPage.show();
