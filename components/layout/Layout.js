import React from 'react';
import Header from './Header';
import {Global, css} from '@emotion/core';

const Layout = props => {
    return (
        <>
        <Global />
            <Header />

            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;