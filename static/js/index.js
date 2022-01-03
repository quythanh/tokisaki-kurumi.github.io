const root = document.getElementById("root");

const listBtn = [
    {
        href: "https://fb.com/quythanh2205",
        iClass: "fab fa-facebook-f",
        title: "Facebook",
        clickable: true
    },
    {
        href: "https://www.instagram.com/quythanh2205/",
        iClass: "fab fa-instagram",
        title: "Instagram",
        clickable: true
    },
    {
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=quythanh2205@gmail.com",
        iClass: "fad fa-envelope",
        title: "Email",
        clickable: true
    },
    {
        href: "https://github.com/quythanh/",
        iClass: "fab fa-github",
        title: "Github",
        clickable: true
    },
    {
        href: "https://discord.gg/F5y64JsdG8",
        iClass: "fab fa-discord",
        title: "Discord Server",
        clickable: true
    },
    {
        href: "#",
        iClass: "fad fa-mobile",
        title: "078 540 2578",
        clickable: false
    }
];

const renderBtn = (btn, index) => {
    return btn.clickable ? (
        <a key={index} className="linkBtn" href={btn.href} target="_blank">
            <div className="thumbnail"><i className={btn.iClass}></i></div>
            <div className="title">{btn.title}</div>
        </a>
    ) : (
        <a key={index} className="linkBtn" href={btn.href} onClick={e => e.preventDefault()}>
            <div className="thumbnail"><i className={btn.iClass}></i></div>
            <div className="title">{btn.title}</div>
        </a>
    );
};

const row = ( <div className="row justify-content-md-center" style={{padding: "24px 12px"}}>
    <div style={{textAlign: "center", marginBottom: "16px"}}>
        <img id="avatar" src="https://media.discordapp.net/attachments/855110078628757504/899230780776132608/image0.jpg" />
        <br />
        <b style={{fontSize: "16px"}}>Tsàn Quý Thành</b>
    </div>

    { listBtn.map((btn, index) => renderBtn(btn, index)) }
</div>
)

ReactDOM.render(row, root);