// styles
import './Banner.css';

interface BannerProps {
    imgSrc: string;
    altText?: string; // optional prop
}

const Banner = ({ imgSrc, altText }: BannerProps) => {
    return (
        <header className='banner'>
            <img src={imgSrc} alt={altText} />
            <p>Organize seu deck de cards!</p>
        </header>
    );
};

export default Banner;

// static images usually go on public folder
// public folder is usually the root folder, or the '/' folder