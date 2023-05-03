import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div>
                <p>p.esseul@gmail.com</p>

                <div className='network'>
                    <a href="https://www.linkedin.com/in/pierre-esseul-1a3443249/"><img src="/img/socialNetwork/in.png" alt="logo linkedin" className='logo' /></a>
                    <a href="https://github.com/PierreEsseul"><img src="/img/socialNetwork/github.png" alt="logo github" className='logo' /></a>
                </div>
            </div>
            <div>
                <img className="profil" src="/img/photo_profil.jpg" alt="profile Pierre ESSEUL" />
            </div>
        </div>    )
}

export default Contact;