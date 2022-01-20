const listBtn = [
    {
        href: "https://fb.com/quythanh2205",
        iClass: "fab fa-facebook-f",
        title: "Facebook"
    },
    {
        href: "https://instagram.com/quythanh2205",
        iClass: "fab fa-instagram",
        title: "Instagram"
    },
    {
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=quythanh2205@gmail.com",
        iClass: "fad fa-envelope",
        title: "Email"
    },
    {
        href: "https://github.com/quythanh",
        iClass: "fab fa-github",
        title: "Github"
    },
    {
        href: "https://discord.gg/F5y64JsdG8",
        iClass: "fab fa-discord",
        title: "Discord Server"
    },
    {
        iClass: "fad fa-mobile",
        title: "078 540 2578"
    }
]

const Header = () => (
    <div style={{textAlign: "center", marginBottom: "16px"}}>
        <img
            id="avatar"
            src="https://media.discordapp.net/attachments/855110078628757504/899230780776132608/image0.jpg"
            alt="avatar"
        />
        <br />
        <div style={{fontSize: "16px", fontWeight: "bolder"}}>Tsàn Quý Thành</div>
    </div>
)

const Btn = ({ btn }) => {
    let Component = 'a'
    if (!btn.href)
        Component = 'button'
    
    return (
        <Component className="linkBtn" href={btn.href} target="_blank">
            <div className="thumbnail"><i className={btn.iClass}></i></div>
            <div className="title">{btn.title}</div>
        </Component>
    )
}

const Row = () => (
    <div className="row justify-content-md-center" style={{padding: "24px 12px"}}>
        <Header />

        { listBtn.map((btn, index) => <Btn key={index} btn={btn} />) }
    </div>
)

ReactDOM.render(<Row />, root)