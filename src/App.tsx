import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

import data from './data/pad-mappings.json';
import DrumPad from './components/DrumPad';
import ToggleSwitch from './components/ToggleSwitch';
import Display from './components/Display';
import './styles/App.scss';


const App = () => {
    const [bankPosition, setBankPosition] = useState('left');
    const [isPowerOn, setPower] = useState(true);
    const [lastPlayed, setLastPlayed] = useState('');
       
    const switchPower = (): void => {       
        setPower(!isPowerOn);
        setLastPlayed('');                      
    }

    const switchBankPosition = (): void => {
        const newPosition: string = bankPosition === 'left' ? 'right' : 'left';
        setBankPosition(newPosition);

        const newKit: string = newPosition === 'left' ? 'Heater Kit' : 'Smooth Piano Kit'
        setLastPlayed(newKit);
    }

    const displayLastAction = (msg: string): void => {
        setLastPlayed(msg);             
    }
    
    return (
        <main id="drum-machine">
            <div className="top-bar">
                <span className='top-bar__text'>FCC</span>
                <FontAwesomeIcon icon={faFreeCodeCamp} className='top-bar__logo' />
            </div>

            <div className='container'>
                <div className='left-col'>{
                    data.filter(pad => pad.bankPosition === bankPosition)
                        .map(pad => {
                            const {id, keyCap, name, audio} = pad;                            
                            return <DrumPad
                                key={id}
                                keyCap={keyCap}
                                name={name}
                                audio={audio}
                                power={isPowerOn}
                                lastPlayed={displayLastAction}
                            />
                        })
                }</div>
                <div className='right-col'>
                    <ToggleSwitch onToggle={switchPower} isToggled={true} header='Power' />
                    <Display message={lastPlayed}/>
                    <ToggleSwitch onToggle={switchBankPosition} isToggled={false} header='Bank' />
                </div>
            </div>                       
        </main>
    );
}

export default App;