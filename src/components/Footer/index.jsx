import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src="/images/fb.svg" alt="Facebook" />
                <img src="/images/tw.svg" alt="Twitter" />
                <img src="/images/ig.svg" alt="Instagram" />
            </div>
            <img className='logo' src="/images/logo.svg" alt="Organo" />
            <p>Desenvolvido por Angela Caldas.</p>
        </footer>
    );
};

export default Footer;