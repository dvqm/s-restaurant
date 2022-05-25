import Common from '../common';
import './foodCategories.scss';
import meals from '../../assets/json/meals.json5';

class FoodCategories extends Common {
    constructor() {
        super();
        this.settings = {
            containerName: 'menu',
            ui() {
                return this.tag('div', {className: this.containerName},
                    this.tag('div', {className: 'menuLevel2'},
                        this.tag('h2', {textContent: 'Search by Food'}),
                        this.tag('div', {className: 'menuLevel3'},
                            this.tag('button', {className: 'secBtn', textContent: 'View All >'}),
                            this.tag('button', {className: 'categoryBtn backward', id: 'categBackBtn'}),
                            this.tag('button', {className: 'categoryBtn forward', id: 'categForwBtn'}),
                        ),
                    ),
                    this.tag('div', {className: 'menuContent'})
                );
            },
            slider: {
                file: meals.categories,
                sliderContent: 'menuContent',
                sliderCard: 'mealCard',
                forward: 'categBackBtn',
                backward: 'categForwBtn',
                elIndex: 0,
                offset: 5,
                ui(card) {
                    return this.tag('div', {className: 'item'},
                        this.tag('img', {
                            src: require(`../../assets/meals/foodCategories/${card.img}`),
                            alt: 'Meal picture'
                        }),
                        this.tag('span', {textContent: card.name})
                    );
                }
            }
        }
    }
}

export default FoodCategories;