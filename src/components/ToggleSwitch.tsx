import '../styles/ToggleSwitch.scss';

type ToggleSwitchProps = {
    onToggle: () => void,
    isToggled: boolean,
    header: string
}

const ToggleSwitch = ({onToggle, isToggled, header}: ToggleSwitchProps): JSX.Element => {
    return (
        <>       
            <p className='header'>{header}</p>
            <input 
                onChange={ () => { onToggle(); } }
                defaultChecked={isToggled}
                type='checkbox'
                className='switch'
                id={header.toLowerCase()}
            />
            <label htmlFor={header.toLowerCase()} className='slider'></label>
        </>
    );
}

export default ToggleSwitch;