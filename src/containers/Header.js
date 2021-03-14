import icon_menu from '../images/icon-hamburger.svg'
import ModalNav from '../components/ModalNav'

const Header = () => {
    const viewHeader = `
        <header class="header">
            <h1 class="header__title">crowdfund</h1>
            <button class="header__button" id="header__button">
                <img src=${icon_menu} alt="Hamburger menu" />
            </button>
            <nav class="header__nav">
                <ul class="nav__list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </nav>
            ${ModalNav()}            
        </header>
    `;
    return viewHeader;
}

export default Header