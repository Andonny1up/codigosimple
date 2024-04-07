import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.svg';
import IconButton from '../iconbutton/IconButton';
import Container from '../container/Container';
import { useState } from 'react';
import './Header.css'

/* funsion para cambiar al dar mode llamada handleTheme */


const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    return (
        <header className="header">
            <Container>
                <div className='header-left'>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className='header-right'>
                    <IconButton icon={darkMode ? faSun : faMoon} onClick={handleTheme}/>
                    <IconButton icon={faGithub} href="https://github.com/Andonny1up" target="_blank"/>
                </div>
            </Container>
        </header>
    );
}

export default Header;