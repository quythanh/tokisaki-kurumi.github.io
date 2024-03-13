import classNames from 'classnames/bind';
import styles from './MusicPlayer.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
const cx = classNames.bind(styles);

const convertToTime = (num) => {
    num = Math.floor(num);
    let min = Math.floor(num / 60) || 0,
        sec = num % 60 || 0;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
};

const MusicPlayer = () => {
    const [currentSong, setCurrentSong] = useState(0);
    const [data, setData] = useState([
        {
            id: 0,
            name: 'Luyến Nhân Tâm',
            singer: 'Âm Âm Bất Hội Anh',
            gradientStart: 'fce7ef',
            boxShadowColor: 'd2c7cd',
        },
    ]);
    const [play, setPlay] = useState(false);
    const [mouseDownOnSlider, setMouseDownOnSlider] = useState(false);
    const playerRef = useRef(null);
    const progressRef = useRef(null);
    const diskRef = useRef(null);
    const timeRef = useRef(null);

    useEffect(() => {
        fetch('/assets/music/info.json')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return data ? (
        <div
            className={cx('wrapper')}
            style={{
                background: `linear-gradient(180deg, #${data[currentSong].gradientStart}, #${
                    data[currentSong].gradientEnd ?? 'fff'
                })`,
            }}
        >
            <div
                ref={diskRef}
                className={cx('disk')}
                style={{ boxShadow: `0 0 15px 3px #${data[currentSong].boxShadowColor}` }}
            >
                <img src={`/assets/images/music/${currentSong}.jpg`} alt="" />
            </div>

            {
                <div className={cx('info')}>
                    <b>{data[currentSong].name}</b>
                    <br />
                    <i>- {data[currentSong].singer} -</i>
                </div>
            }

            <div className={cx('group-controls')}>
                <audio
                    ref={playerRef}
                    src={`/assets/music/${currentSong}.mp3`}
                    onLoadedData={(e) => {
                        progressRef.current.value = 0;
                        setPlay(false);
                    }}
                    onTimeUpdate={(e) => {
                        if (!mouseDownOnSlider) {
                            progressRef.current.value = (e.target.currentTime / e.target.duration) * 100;
                        }
                        const transform = (el, value) => {
                            el.style.webkitTransform = value;
                            el.style.mozTransform = value;
                            el.style.msTransform = value;
                            el.style.oTransform = value;
                            el.style.transform = value;
                        };
                        transform(diskRef.current, `rotate(${(e.target.currentTime / 20) * 360}deg)`);
                        timeRef.current.innerText = `${convertToTime(e.target.currentTime)} / ${convertToTime(
                            e.target.duration,
                        )}`;
                    }}
                    onEnded={() => {
                        setPlay((prev) => !prev);
                    }}
                />

                <div className={cx('time-group')}>
                    <small ref={timeRef}>0:00 / 0:00</small>
                    <input
                        ref={progressRef}
                        className={cx('progress')}
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        onChange={(e) => {
                            const pct = e.target.value / 100;
                            playerRef.current.currentTime = (playerRef.current.duration || 0) * pct;
                        }}
                        onMouseDown={() => {
                            setMouseDownOnSlider(true);
                        }}
                        onMouseUp={() => {
                            setMouseDownOnSlider(false);
                        }}
                    />
                </div>

                <div className={cx('controls')}>
                    <i
                        className={cx('prev', 'fa-duotone fa-backward')}
                        onClick={() => {
                            setCurrentSong((prev) => (prev ? prev - 1 : prev));
                        }}
                    />

                    <i
                        className={cx('play', `fa-duotone fa-circle-${play ? 'pause' : 'play'}`)}
                        onClick={() => {
                            if (play) playerRef.current.pause();
                            else playerRef.current.play();
                            setPlay((prev) => !prev);
                        }}
                    />

                    <i
                        className={cx('next', 'fa-duotone fa-forward')}
                        onClick={() => {
                            setCurrentSong((prev) => (prev == data.length - 1 ? prev : prev + 1));
                        }}
                    />
                </div>
            </div>
        </div>
    ) : null;
};

export default MusicPlayer;
