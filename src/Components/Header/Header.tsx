import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <a href="/"><img src="/img/logo/png/logo.png" alt="logo TruView AI" /></a>
                
            </div>
            <nav>
                <a className="navbar-link" href="/">Home</a>
                <a className="navbar-link" href="/post">Try</a>
                <a className="navbar-link" href="/contact">Contact</a>
            </nav>
        </div>
    )
}

export default Header;