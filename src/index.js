import basicHTML from './assets/json/basicHTML.json';
import UiCreator from './UiCreator';
import EventCreator from './EventCreator';

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

const ui = new UiCreator();

const events = new EventCreator();

const mainPage = events.mainPage(ui.nodeCreate(basicHTML.wrapper));

ui.render(document.body, mainPage);
