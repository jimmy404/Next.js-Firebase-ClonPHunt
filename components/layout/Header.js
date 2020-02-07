import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ContenedorHeader = styled.div`
    max-width: 1200;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`

const Header = () => {
    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
        <ContenedorHeader>
                <div>
                    <p>P</p>

                    <Buscar />
                    <Navegacion />

                </div>
                    <div>
                            <p>Hola Jimmy</p>
                        <button type="button">Cerrar Sesion</button>
                            <Link href="/">Login</Link>
                            <Link href="/">Crear Cuenta</Link>
                    </div>
        </ContenedorHeader>
        </header>
    );
}

export default Header;