import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import DrumPad from './components/DrumPad';
import data from './data/pad-mappings.json';
import './styles/App.scss';

const App = () => {
    const [bankPosition, setBankPosition] = useState('left');
    const [drumPadItems, setDrumPadItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const drumPadItems: JSX.Element[] = data
            .filter(pad => pad.bankPosition === bankPosition)
            .map(pad => <DrumPad key={pad.id} {...pad} />);
        
        setDrumPadItems(drumPadItems);
    }, [bankPosition])
    
    return (
        <main id="drum-machine">
            <div className="top-bar">
                <span className='top-bar__text'>FCC</span>
                <FontAwesomeIcon icon={faFreeCodeCamp} className='top-bar__logo' />
            </div>

            <div className='drum-pads'>{drumPadItems}</div>

        </main>
    );
}

export default App;