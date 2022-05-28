import basicHTML from './assets/json/basicHTML.json';
import UiCreator from './UiCreator';

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

const wrapper = new UiCreator(document.body, basicHTML.wrapper);

wrapper.render();
