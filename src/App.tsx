import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import './styles/App.scss';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <main id="drum-machine">
        <div className="top-bar">
          <span className='top-bar__text'>FCC</span>
          <FontAwesomeIcon icon={faFreeCodeCamp} className='top-bar__logo' />
        </div>


      </main>
    );
  }
}

export default App;