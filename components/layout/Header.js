import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Buscar />
                    <Navegacion />

                </div>
                    <div>
                    {/* Menu de administracion */}
                    </div>
            </div>
        </header>
    );
}

export default Header;