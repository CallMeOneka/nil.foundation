import { ReactElement } from 'react';
import { Container, NavList, Navbar } from '@nilfoundation/react-components';
import Navigation from '../Navigation/Navigation';

/**
 * Header component.
 * 
 * @returns React component. 
 */
const Header = (): ReactElement =>
    <Navbar>
        <Container>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://nil.foundation"
            >
                <ol className="navbar-brand breadcrumb">
                    <li>
                        <code>=nil;</code>Foundation
                    </li>
                </ol>
            </a>
            <Navigation />
        </Container>
    </Navbar>;

export default Header;
