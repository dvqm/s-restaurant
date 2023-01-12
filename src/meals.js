import ContentCreator from './components/ContentCreator';
import EventCreator from './components/EventCreator';
import data from '../assets/json/contentHTML.json';

import './styles/index.scss';
import './styles/common.scss';
import './styles/restaurants.scss';
import './styles/foodCategories.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/popularItems.scss';
import './styles/promo.scss';
import './styles/topNav.scss';
import UiCreator from './components/UiCreator';

class Meals extends UiCreator {
  constructor() {
    super();

    this.content = new ContentCreator(data);

    this.events = new EventCreator();
  }

  show() {
    const wrapper = this.content.wrapper();

    const queryString = new URL(window.location.href).search;

    const urlParams = new URLSearchParams(queryString);

    const category = urlParams.get('menu');

    const restId = urlParams.get('restid');

    const filterMealsByRestaurant = (meals, id) => meals
      .filter((meal) => meal.restaurant.find((rest) => rest.id === parseInt(id, 10)))
      .map((meal) => {
        meal.restaurant = meal.restaurant.filter((r) => r.id === parseInt(id, 10));
        return meal;
      });

    let mealsToShow;

    if (restId !== null && typeof restId === 'string') {
      mealsToShow = filterMealsByRestaurant(data.menu, restId);
    } else {
      mealsToShow = data.menu;
    }

    const showMealsOrError = mealsToShow.length === 0
      ? window.location.href = '/underconstruct.html?errmsg=emptyrest'
      : this.content.meals(mealsToShow);

    this.render(
      wrapper,
      this.content.topNav(),
      showMealsOrError,
      this.content.footer(),
    );
    const categorySwitch = [this.events.mealsToggle, {
      startFrom: category,
      wrapper: '.meals',
      selector: '.ribbon',
      eventType: 'click',
    }];

    const eventsChain = (node) => this.constructor.composer(node, categorySwitch);
    this.render(document.body, eventsChain(wrapper));
  }
}

const meals = new Meals();

meals.show();
