import Common from '../common';
import './topNav.scss';
import logo from '../../assets/logo.png';

class TopNav extends Common {
    constructor() {
        super();
        this.settings = {
            containerName: 'topNav',
            ui() {
                return this.tag('div', {className: this.containerName},
                    this.tag('img', {className: 'logo', src: logo, alt: 'logo'}),
                    this.tag('label', {className: 'address'},
                        this.tag('span', {textContent: 'Delivery to: '}),
                        this.tag('input', {
                            type: 'text', value: 'Current location: Madrid bla-bla-bla'
                        })
                    ),
                    this.tag('label', {className: 'search'},
                        this.tag('input', {type: 'text', placeholder: 'Search food'})
                    ),
                    this.tag('button', {id: 'login', textContent: 'Login'})
                );
            }
        }
    }

}

export default TopNav;
