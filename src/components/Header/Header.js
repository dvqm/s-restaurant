import Common from '../common';
import './header.scss';

class Header extends Common {
    constructor() {
        super();
        this.settings = {
            containerName: 'header',
            ui() {
                return this.tag('div', {className: this.containerName},
                    this.tag('h2', {textContent: 'Are you starving?'}),
                    this.tag('h4', {textContent: 'Within a few clicks, find meals that are accessible near you'}),
                    this.tag('div', {className: 'Order'},
                        this.tag('div', {className: 'upperPart'},
                            this.tag('button', {className: 'delivery', textContent: 'Delivery'}),
                            this.tag('button', {className: 'pickup', textContent: 'Pickup'})
                        ),
                        this.tag('div', {className: 'lowerPart'},
                            this.tag('input', {placeholder: 'Enter your address'}),
                            this.tag('button', {className: 'findFood', textContent: 'Find Food'})
                        ),
                        this.tag('div', {className: 'headerImg'})
                    )
                );
            }
        }
    }
}

export default Header;