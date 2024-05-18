import '../styles/VolumeSlider.scss';

const VolumeSlider = () => {
    return (
        <div className='volume-slider'>
            <input type="range" min={0} max={100} />
        </div>
    )
}

export default VolumeSlider;