import { ReactElement } from 'react';
import './style.css';

interface ButtonProps {
    children: ReactElement;
}

const Button = (props: ButtonProps) => {
    return (
        <button className='button'>{props.children}</button>
    );
};

export default Button;