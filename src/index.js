import MainPage from './MainPage';

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

const mainPage = new MainPage();
if (window.location.pathname !== '../assets/templates/underconstruct.html') mainPage.show();
