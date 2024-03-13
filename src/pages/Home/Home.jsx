import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

import Header from '@layout/Header';
import MusicPlayer from '@/MusicPlayer';

const Home = () => {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('cover')}>
                    <div className={cx('cover__blur')}></div>
                    <img className={cx('cover__img')} src="/assets/images/banner.png" alt="cover img" />
                </div>

                <div className={cx('info')}>
                    <div>
                        <div className={cx('info__left')}>
                            <div className={cx('avatar')}>
                                <img src="/assets/images/avatar.jpg" alt="avatar" />
                            </div>
                            <div className={cx('name')}>Thành</div>
                        </div>
                        <div className={cx('info__right')}>
                            <a
                                className={cx('contact')}
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=quythanh.dev@icloud.com"
                                target="_blank"
                            >
                                <i className="fad fa-envelope"></i> Contact me
                            </a>
                            <a
                                className={cx('message')}
                                href="https://www.facebook.com/messages/t/quythanh2205/"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-messenger"></i> Message
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('main')}>
                    <MusicPlayer />
                </div>
            </div>
        </>
    );
};

export default Home;
