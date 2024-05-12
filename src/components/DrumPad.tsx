import '../styles/DrumPad.scss';

type DrumPadProps = {
    id: number,
    keyCap: string,
    name: string,
    bankPosition: string,
    audio: string
}

const DrumPad = ({ id, keyCap, name, bankPosition, audio }: DrumPadProps) => {
    return (
        <div className="drum-pad" id={name}>
            <span>{keyCap}</span>
        </div>
    )
}

export default DrumPad;