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
import './styles/popularItems.scss';
import './styles/promo.scss';
import './styles/topNav.scss';

class Restaurants extends UiCreator {
  constructor() {
    super();

    this.content = new ContentCreator(data);

    this.events = new EventCreator();
  }

  show() {
    const wrapper = this.content.wrapper();

    const restPageSize = 20;

    this.render(
      wrapper,
      this.content.topNav(),
      this.content.restElaborated(restPageSize),
      this.content.footer(),
    );

    const topNavSearchField = wrapper.querySelector('.search > input');

    topNavSearchField.placeholder = 'Search restaurant';

    const orderNowBtnsEvent = [this.events.underConstruction, {
      content: this.content.notFinished(),
      id: 'orderNow',
      bunch: true,
      eventType: 'click',
    }];

    const loginEvent = [this.events.underConstruction, {
      content: this.content.notFinished(),
      id: 'login',
      eventType: 'click',
    }];

    const restPaginate = [this.events.pagination, {
      eventType: 'click',
      id: 'pagination',
      nodesId: 'restContent',
      pageSize: restPageSize,
      nextBtnId: 'nextPage',
      prevBtnId: 'prevPage',
    }];

    const slidersChain = (node) => this.constructor.composer(
      node,
      loginEvent,
      orderNowBtnsEvent,
      restPaginate,
    );

    this.render(document.body, slidersChain(wrapper));
  }
}

const restaurants = new Restaurants();

restaurants.show();
