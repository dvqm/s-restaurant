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
  }

  show() {
    const wrapper = this.content.wrapper();

    this.render(
      wrapper,
      this.content.topNav(),
      this.content.meals(),
      this.content.footer(),
    );

    this.render(document.body, wrapper);
  }
}

const meals = new Meals();

meals.show();
