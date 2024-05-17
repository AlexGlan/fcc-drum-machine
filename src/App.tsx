import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

import data from './data/pad-mappings.json';
import DrumPad from './components/DrumPad';
import ToggleSwitch from './components/ToggleSwitch';

import './styles/App.scss';


const App = () => {
    const [bankPosition, setBankPosition] = useState('left');
    const [drumPadItems, setDrumPadItems] = useState<JSX.Element[]>([]);
    const [isPowerOn, setPower] = useState(true);

    useEffect(() => {
        const drumPadItems: JSX.Element[] = data
            .filter(pad => pad.bankPosition === bankPosition)
            .map(pad => <DrumPad key={pad.id} {...pad} />);
        
        setDrumPadItems(drumPadItems);
    }, [bankPosition])

    const switchPower = (): void => {
        // temp placeholder
        return              
    }

    const switchBankPosition = (): void => {
        // temp placeholder
        return
    }
    
    return (
        <main id="drum-machine">
            <div className="top-bar">
                <span className='top-bar__text'>FCC</span>
                <FontAwesomeIcon icon={faFreeCodeCamp} className='top-bar__logo' />
            </div>

            <div className='container'>
                <div className='left-col'>{drumPadItems}</div>
                <div className='right-col'>
                    <ToggleSwitch onToggle={switchPower} isToggled={true} header='Power' />
                    <ToggleSwitch onToggle={switchBankPosition} isToggled={false} header='Bank' />
                </div>
            </div>                       
        </main>
    );
}

export default App;