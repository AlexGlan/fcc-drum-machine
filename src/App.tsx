import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import DrumPad from './components/DrumPad';
import data from './data/pad-mappings.json';
import './styles/App.scss';

type AppState = {
  bankPosition: string
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      bankPosition: 'left'
    };
  }

  render(): React.ReactNode {
    const drumPadItems = data
      .filter(pad => pad.bankPosition === this.state.bankPosition)
      .map(pad => ((
        <DrumPad key={pad.id} {...pad} ></DrumPad>
      )));
    
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
}

export default App;