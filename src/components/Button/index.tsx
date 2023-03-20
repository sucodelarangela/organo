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

/*
ReactElement is an object with type and props.

ReactNode is a ReactElement, a ReactFragment, a string, a number or a list of ReactNodes, or null, undefined or boolean.

JSX.Element is a ReactElement with the generic type for props and type as any. It exists to allow other libraries to implement JSX in their own custom way.
*/