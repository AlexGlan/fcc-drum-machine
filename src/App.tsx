import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

import data from './data/pad-mappings.json';
import DrumPad from './components/DrumPad';
import ToggleSwitch from './components/ToggleSwitch';
import './styles/App.scss';


const App = () => {
    const [bankPosition, setBankPosition] = useState('left');
    const [isPowerOn, setPower] = useState(true);
       
    const switchPower = (): void => {       
        setPower(!isPowerOn);                      
    }

    const switchBankPosition = (): void => {
        const newPosition: string = bankPosition === 'left' ? 'right' : 'left';
        setBankPosition(newPosition);
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
                            />
                        })
                }</div>
                <div className='right-col'>
                    <ToggleSwitch onToggle={switchPower} isToggled={true} header='Power' />
                    <ToggleSwitch onToggle={switchBankPosition} isToggled={false} header='Bank' />
                </div>
            </div>                       
        </main>
    );
}

export default App;