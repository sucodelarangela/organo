import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src="/images/fb.png" alt="Facebook" />
                <img src="/images/tw.png" alt="Twitter" />
                <img src="/images/ig.png" alt="Instagram" />
            </div>
            <img className='logo' src="/images/logo.png" alt="Organo" />
            <p>Desenvolvido por Angela Caldas.</p>
        </footer>
    );
};

export default Footer;