import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Header = () => {
    return (
        <header
            css={css`
                border-bottom: 2px solid #e1e1e1;
            `}
        >
            <div>
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
            </div>
        </header>
    );
}

export default Header;