import '../styles/VolumeSlider.scss';

type VolumeSliderProps = {
    handleChange: (volume: string) => void
}

const VolumeSlider = ({handleChange}: VolumeSliderProps) => {
    return (
        <div className='volume-slider'>
            <input 
                onChange={ (e) => { handleChange(e.target.value); } }
                type="range"
                min={0}
                max={100}
            />
        </div>
    )
}

export default VolumeSlider;