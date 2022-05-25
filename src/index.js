import TopNav from './components/TopNav/TopNav';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import PopularItems from './components/PopularItems/PopularItems';
import FeaturedRestaurants from './components/FeaturedRestaurants/FeaturedRestaurants';
import FoodCategories from './components/FoodCategories/FoodCategories';
import Footer from './components/Footer/Footer';
import './index.scss';
import Common from './components/common';

const mainContent = document.createElement('div');
mainContent.id = 'content';
document.body.appendChild(mainContent);

const common = new Common();

const comp = {
  blocks: {
    topNav: new TopNav(),
    header: new Header(),
    promo: new Promo(),
    popular: new PopularItems(),
    featured: new FeaturedRestaurants(),
    food: new FoodCategories(),
    footer: new Footer(),
  },
  elements: {
    restaurants() {
      common.appendEl(comp.blocks.featured.settings.restaurant);
    },
    footerElements() {
      common.appendEl(comp.blocks.footer.settings.topCities);
      common.appendEl(comp.blocks.footer.settings.nav);
      common.appendEl(comp.blocks.footer.settings.networkIcons);
    },
    popularItems() {
      common.slider(comp.blocks.popular.settings.slider);
    },
    foodCards() {
      common.slider(comp.blocks.food.settings.slider);
    },
  },
};

const staticPanels = {
  nav: comp.blocks.topNav,
  header: comp.blocks.header,
  promo: comp.blocks.promo,
  popular: comp.blocks.popular,
  featured: comp.blocks.featured,
  food: comp.blocks.food,
  footer: comp.blocks.footer,
};

class App extends Common {
  constructor() {
    super();
    this.render(staticPanels);
    comp.elements.popularItems();
    comp.elements.foodCards();
    comp.elements.footerElements();
    comp.elements.restaurants();
  }

  render(page, cloneNode = true) {
    for (let c in page) {
      page[c].settings.tag = this.tag.bind(this);
      cloneNode
        ? mainContent.append(page[c].settings.ui().cloneNode(true))
        : mainContent.append(page[c].settings.ui());
    }
  }

  remove(page) {
    for (let c in page) {
      document.querySelector(`.${page[c].settings.containerName}`).remove();
    }
  }

  viewRestBtn() {
    const btn = document.querySelector('#viewRest');
    const toRestPage = () => {
      // comp.featured;
      btn.removeEventListener('click', toRestPage);
    };

    btn.addEventListener('click', toRestPage);
  }
}

const app = new App();
