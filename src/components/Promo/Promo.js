import Common from '../common';
import './promo.scss';
import promo from '../../assets/json/promo.json5';


class Promo extends Common {
    constructor() {
        super();
        this.settings = {
            containerName: 'promo',
            ui() {
                const card = promo.meals;
                const promotion = this.tag('div', {className: this.containerName});
                for (let value in card) {
                    const meal = card[value];
                    promotion.append(
                        this.tag('div', {className: 'dealCard'},
                            this.tag('div', {className: 'foodPhoto'},
                                this.tag('img', {src: require(`../../assets/meals/${meal.img}`), alt: 'Meal picture'}),
                                this.tag('span', {className: 'discount', textContent: `${meal.discount} %`})
                            ),
                            this.tag('span', {className: 'mealName', textContent: meal.name}),
                            this.tag('span', {className: 'timer', textContent: `${meal.time} Days Remaining`})
                        )/*.cloneNode(true)*/
                    );
                }
                return promotion;

            }
        }
    }
}


export default Promo;