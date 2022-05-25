import Common from '../common';
import restaurants from '../../assets/json/restData.json5';
import nav from '../../assets/json/navigation.json5'
import './footer.scss';

class Footer extends Common {
    constructor() {
        super();
        this.settings = {
            containerName: 'footer',
            ui() {
                return this.tag('div', {className: this.containerName},
                    this.tag('h2', {className: 'footHead', textContent: 'Our top cities'}),
                    this.tag('div', {className: 'cityList'}),
                    this.tag('div', {className: 'hr'}),
                    this.tag('div', {className: 'menuWrap'},
                        this.tag('div', {className: 'navigation'}),
                        this.tag('div', {className: 'contacts'},
                            this.tag('h2', {textContent: 'Follow us'}),
                            this.tag('div', {className: 'networks', id: 'socialNetworks'}),
                            this.tag('span', {textContent: 'Receive exclusive offers in your mailbox'}),
                            this.tag('div', {className: 'mailWrap'},
                                this.tag('input', {id: 'subscribe', placeholder: 'Enter Your email'}),
                                this.tag('button', {textContent: 'Subscribe'})
                            )
                        )
                    ),
                    this.tag('div', {className: 'hr'}),
                    this.tag('div', {className: 'credentials'},
                        this.tag('span', {textContent: 'All rights Reserved @ Food Company, 2022'}),
                        this.tag('span', {textContent: 'Made by Me'}))
                );
            },
            topCities: {
                file: restaurants.cities,
                parent: '.cityList',
                ui(city) {
                    return this.tag('a', {href: '#', textContent: city})
                }
            },
            nav: {
                file: nav.navigation,
                parent: '.navigation',
                ui(nav) {
                    const header = this.tag('div', {className: 'division'},
                        this.tag('h2', {textContent: nav.name})
                    );

                    nav.division.map(n => {
                        return header.append(this.tag('a', {href: '#', textContent: n}));
                    });
                    return header;
                }
            },
            networkIcons: {
                file: nav.contacts.socialNetworks,
                parent: '#socialNetworks',
                ui(value) {
                    return this.tag('a', {href: '#'},
                        this.tag('div', {className: `socialIcons ${value}`})
                    )
                }
            }

        }
    }

    networkIcons() {
    }
}

export default Footer;