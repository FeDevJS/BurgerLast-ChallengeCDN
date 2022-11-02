// Import custom methods
import { API } from "../../globals/CustomHooks";
import { ButtonOffcanvasStart } from "../../globals/CustomComponents";
import './componente.css';

// React dependecies
const { useState, useEffect, Fragment } = React;

const App = () => {

    return (
        <Fragment>
            <HeroSection />
            <MainHeader />
            <AccordionSection />
        </Fragment>
    )
}

const HeroSection = () => {
    return (
        <section className='hero-layout'>
            <div className='layer'></div>
            <article className='hero-business-info-container'>
                <div className='business-info-img'></div>
                <section className='business-info-details'>
                    <p className='business-info-place-name'>BurgerLast</p>
                    <address className='business-info-adress'>Juan del Campillo 1413</address>
                    <div className='business-info-icons-container'>
                        <a 
                            href='https://api.whatsapp.com/send/?phone=5493424416404&text&type=phone_number&app_absent=0'
                            rel='noopener noreferrer' 
                            target='_blank'
                        ><img src='https://gesprender.com/app/template/assets_c/img/icons/icon_wsp_color.png' alt='Icono WhatsApp' />
                        </a>
                        <a 
                            href='https://www.instagram.com/gesprender/'
                            rel='noopener noreferrer' 
                            target='_blank'
                        ><img src='https://gesprender.com/app/template/assets_c/img/icons/icon_ig_color.png' alt='Icono Instagram' />
                        </a>

                    </div>
                </section>
            </article>
        </section>
    );
};

const SideMenu = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        API._get('https://api.gesprender.com/products/burgerlast')
            .then(res => setCategories(res.categorys))
    }, []);
    return (
        <nav>
            <div className='list-group'>
                {categories && categories.map((category, i) => (
                    <NavItem title={category} key={i} />
                ))}
            </div>
        </nav>
    );
};
const NavItem = ({title}) => {
    return (
        <a href={`#${title}-category`}><button className='list-group-item list-group-item-action'>{title}</button></a>
    );
};

const MainHeader = () => {
    return (
        <section className='navbar navbar-dark bg-dark main-header-container'>
            <article className='container d-flex'>
                <ButtonOffcanvasStart  id='sideMenuTitle' title='Categorías de productos' button='Categorías' body={SideMenu} />
            </article>
        </section>
    );
};

const AccordionSection = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        API._get('https://api.gesprender.com/products/burgerlast')
            .then(res => setCategories(res.categorys))
    }, []);
    return (
        <Fragment>
            {categories && categories.map((category, i) => (
                <Accordion title={category} key={i} />
            ))}
        </Fragment>
    );
};

const Accordion = ({title}) => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        API._get('https://api.gesprender.com/products/burgerlast')
            .then(res => setItems(res.products[title]))
    }, []);
    return (
        <section id={`${title}-category`} className='container accordion-item accordion-container'>
            <div className='accordion-header accordion-collapsible'>
                <button type='button' className='accordion-button' data-bs-toggle="collapse" data-bs-target={`#${title}`} aria-expanded="true" aria-controls={title}>{title}</button>
            </div>
            <ul id={title} className='accordion-items-container accordion-collapse collapse show'>
                {items && items.map(item => (
                    <AccordionItem 
                        key={item.id} 
                        title={item.product}
                        description={item.description}
                        price={item.price_sale} />
                ))}
            </ul>
        </section>
    );
};

const AccordionItem = ({title, description, price}) => {
    return (
        <li className='d-flex justify-content-between list-group-item accordion-items'>
            <div>
                <p className='accordion-item-title'>{title}</p>
                <p className='accordion-item-description'>{description}</p>
            </div>
            <p className='accordion-item-price'>${price}</p>
        </li>
    );
};

// Rendering
const module = document.querySelector('#modulo');
ReactDOM.render(<App />, module);