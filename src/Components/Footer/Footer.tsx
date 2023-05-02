import "./Footer.css";

function Footer() {

    const currentYear : number = new Date().getFullYear();

    return (
        <>
            <p className="footer">&copy; {currentYear} by Pierre ESSEUL</p>
        </>
    )
}

export default Footer;