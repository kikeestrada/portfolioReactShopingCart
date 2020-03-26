import React, {createRef} from 'react'
import CartCounter from '../atoms/CartCounter'

const menu = createRef()
const toggleMenu = ()=> menu.current.classList.toggle('show');

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                    {/*<img className="main-logo" src="img/logo.png" alt="algo" />*/}
                <nav>
                    <CartCounter/>
                </nav>
            </div>

        </div>
    </header>
);

export default MainMenu
