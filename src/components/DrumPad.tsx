import { useEffect, useRef } from 'react';
import '../styles/DrumPad.scss';

type DrumPadProps = {
    keyCap: string,
    name: string,
    audio: string
}

const DrumPad = ({ keyCap, name, audio }: DrumPadProps): JSX.Element => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = (): void => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }        
    }

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === keyCap.toLowerCase()) {
            playAudio();  
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])
        
    return (
        <div onClick={ () => {playAudio()} } className="drum-pad" id={name}>
            <span>{keyCap}</span>
            <audio
                ref={audioRef}
                src={audio}
                className='clip'
                id={keyCap}
            ></audio>
        </div>
    )
}

export default DrumPad;