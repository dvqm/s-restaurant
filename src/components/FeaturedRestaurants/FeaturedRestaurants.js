import Common from '../common';
import rest from '../../assets/json/restData.json5';
import './featuredRestaurants.scss';

class FeaturedRestaurants extends Common {
    constructor() {
        super();
        this.settings = {
            containerName: 'featuredRestaurants',
            ui() {
                return this.tag('div', {className: this.containerName},
                    this.tag('h2', {textContent: 'Featured Restaurants'}),
                    this.tag('div', {className: 'restContent'}),
                    this.tag('button', {id: 'viewRest', className: 'mainBtn', textContent: 'View All >'})
                );
            },
            restaurant: {
                file: rest.restaurants,
                parent: '.restContent',
                offset: 8,
                ui(card) {
                    return this.tag('div', {className: 'restaurant'},
                        this.tag('img', {
                            className: 'mealPict',
                            src: require(`../../assets/meals/${card.mealPict}`),
                            alt: 'restaurant picture'
                        }),
                        this.tag('span', {className: 'discounts', textContent: `${card.discounts} % off`}),
                        this.tag('span', {className: 'deliveryRate', textContent: card.deliveryRate}),
                        this.tag('img', {
                            className: 'restLogo',
                            src: require(`../../assets/restaurants/${card.logo}`),
                            alt: 'Restaurant logo'
                        }),
                        this.tag('span', {className: 'restName', textContent: card.name}),
                        this.tag('span', {className: 'ratings', textContent: card.restRating}),
                        this.tag('span', {
                            className: card.currentState === 'Opens tomorrow' ? 'closed' : 'open',
                            textContent: card.currentState
                        })
                    );
                }
            }
        }
    }
}

export default FeaturedRestaurants;