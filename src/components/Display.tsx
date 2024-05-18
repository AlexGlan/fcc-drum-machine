import '../styles/Display.scss';

type DisplayProps = {
    message: string
}

const Display = ({message}: DisplayProps) => {
    return (
        <p id='display'>{message}</p>
    )
}

export default Display;