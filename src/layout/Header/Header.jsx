import { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useLayoutEffect } from 'react';
const cx = classNames.bind(styles);

const Header = () => {
    const [mode, setMode] = useState(true);

    useLayoutEffect(() => {
        document.body.setAttribute('app-mode', mode ? 'light' : 'dark');
    }, [mode]);

    return (
        <header className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                <img src="/assets/images/favicon.png" alt="logo" />
            </Link>

            <div className={cx('navigate')}>
                <a className={cx('btn')} href="https://www.facebook.com/quythanh2205/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className={cx('btn')} href="https://instagram.com/quythanh2205" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a className={cx('btn')} href="https://github.com/quythanh" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a className={cx('btn')} href="https://discord.gg/h5CU3aF48w" target="_blank">
                    <i className="fab fa-discord"></i>
                </a>
            </div>

            <div className={cx('mode')}>
                <i
                    className={`fad fa-${mode ? 'sun-bright' : 'moon-stars'}`}
                    onClick={() => {
                        setMode((prev) => !prev);
                    }}
                ></i>
            </div>
        </header>
    );
};

export default Header;
