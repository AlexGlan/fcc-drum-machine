import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

import data from './data/pad-mappings.json';
import DrumPad from './components/DrumPad';
import ToggleSwitch from './components/ToggleSwitch';
import Display from './components/Display';
import VolumeSlider from './components/VolumeSlider';

import './styles/App.scss';

type Pad = {
    id: number,
    keyCap: string,
    name: string,
    bankPosition: string,
    audio: string
}

const App = () => {
    const [bankPosition, setBankPosition] = useState('left');
    const [isPowerOn, setPower] = useState(true);
    const [lastPlayed, setLastPlayed] = useState('');
    const [volume, setVolume] = useState(0.5);

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key.length > 1) {
            return;            
        }

        const pad: Pad | undefined = data.find((pad: Pad) => {
            return pad.keyCap.toLowerCase() === e.key && pad.bankPosition === bankPosition;
        });

        if (pad) {
            document.getElementById(pad.name)?.click();
        } else {
            return;
        }  
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [bankPosition])
       
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

    const changeVolume = (volume: string): void => {        
        const newVolume: number = volume === '100' || volume === '0'
            ? parseInt(volume[0])
            : parseInt(volume) <= 10 
                ? parseFloat('0.0' + volume)
                : parseFloat('0.' + volume)

        setVolume(newVolume);
        displayLastAction(`Volume: ${volume}`);    
        setTimeout(() => { displayLastAction(''); }, 800);        
    }
    
    return (
        <main id="drum-machine">
            <div className="top-bar">
                <span className='top-bar__text'>FCC</span>
                <FontAwesomeIcon icon={faFreeCodeCamp} className='top-bar__logo' />
            </div>

            <div className='container'>
                <div className='left-col'>
                {
                    data.filter((pad: Pad) => pad.bankPosition === bankPosition)
                        .map((pad: Pad) => {
                            const {id, keyCap, name, audio} = pad;                            
                            return <DrumPad
                                key={id}
                                keyCap={keyCap}
                                name={name}
                                audio={audio}
                                power={isPowerOn}
                                volume={volume}
                                lastPlayed={displayLastAction}
                            />
                        })
                }
                </div>
                <div className='right-col'>
                    <ToggleSwitch onToggle={switchPower} isToggled={true} header='Power' />
                    <Display message={lastPlayed}/>
                    <VolumeSlider handleChange={changeVolume}/>
                    <ToggleSwitch onToggle={switchBankPosition} isToggled={false} header='Bank' />
                </div>
            </div>                       
        </main>
    );
}

export default App;