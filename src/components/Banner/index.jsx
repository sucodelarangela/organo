// styles
import './Banner.css';

const Banner = () => {
    return (
        <header className='banner'>
            <img src="/images/gwent.png" alt="banner principal da página do Organo" />
            <p>Organize seu deck de cards!</p>
        </header>
    );
};

export default Banner;

// static images usually go on public folder
// public folder is usually tha root folder, or the '/' folder