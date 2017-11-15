// @flow
import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Keypad from '../components/Keypad';
import Spacebar from '../components/Spacebar';
import Divider from '../components/Divider';
import Volume from '../components/Volume';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 30px;
  }
  50% {
    top: -15px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
`;

const Container = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  position: relative;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-top: 0;
  padding-top: 50px;
  text-align: center;
  color: #fff;
`;

const MusicContainer = styled.div`
  text-align: center;
  padding-top: 30px;
`;

const KeyboardRow = styled.div`
  height: 90px;
`;

// Row one: loops
const rowOne = [
  {
    label: '1',
    subLabel: 'Chip',
    file: 'loops/chiptune.wav',
    loop: true,
  },
  {
    label: '2',
    subLabel: 'Synth',
    file: 'loops/synth.wav',
    loop: true,
  },
  {
    label: '3',
    subLabel: 'Trap',
    file: 'loops/trap.wav',
    loop: true,
  },
  {
    label: '4',
    subLabel: 'Rap Bass',
    file: 'loops/hardcore.wav',
    loop: true,
  },
];

// Row two: lofi drums
const rowTwo = [
  {
    label: 'q',
    subLabel: 'Hat 1',
    file: 'drums/lofi/hat01.wav',
  },
  {
    label: 'w',
    subLabel: 'Hat 2',
    file: 'drums/lofi/hat02.wav',
  },
  {
    label: 'e',
    subLabel: 'Hat 3',
    file: 'drums/lofi/hat03.wav',
  },
  {
    label: 'r',
    subLabel: 'Kick 1',
    file: 'drums/lofi/kick01.wav',
  },
  {
    label: 't',
    subLabel: 'Kick 2',
    file: 'drums/lofi/kick02.wav',
  },
  {
    label: 'y',
    subLabel: 'Kick 3',
    file: 'drums/lofi/kick03.wav',
  },
  {
    label: 'u',
    subLabel: 'Kick 4',
    file: 'drums/lofi/kick04.wav',
  },
  {
    label: 'i',
    subLabel: 'Snare 1',
    file: 'drums/lofi/snare01.wav',
  },
  {
    label: 'o',
    subLabel: 'Snare 2',
    file: 'drums/lofi/snare02.wav',
  },
  {
    label: 'p',
    subLabel: 'Snare 1',
    file: 'drums/lofi/snare03.wav',
  },
];

// Row three: psycore drums
const rowThree = [
  {
    label: 'a',
    subLabel: 'Distorted',
    file: 'drums/psycore/psycore-distorted-hit.wav'    
  },
  {
    label: 's',
    subLabel: 'Filtered',
    file: 'drums/psycore/psycore-filtered-hit.wav'
  },
  {
    label: 'd',
    subLabel: 'Buzz Kick',
    file: 'drums/psycore/psycore-buzzinkick.wav',    
  },
  {
    label: 'f',
    subLabel: 'Fuzzy Bass',
    file: 'drums/psycore/psycore-kick-buzzy.wav'
  },
  {
    label: 'j',
    subLabel: 'Bass',
    file: 'drums/psycore/psycore-kick-hardcore-dark.wav'
  },
  {
    label: 'k',
    subLabel: 'Fuzzy Kick',
    file: 'drums/psycore/psycore-kick-mutilated.wav'
  },
  {
    label: 'l',
    subLabel: 'Kick Snare',
    file: 'drums/psycore/psycore-kick-snare.wav'
  },
  {
    label: ';',
    subLabel: 'Snare',
    file: 'drums/psycore/psycore-snare.wav',
  },
];

type AppState = {
  volume: number,
};

export default class extends PureComponent<null, AppState> {
  state = {
    volume: 0.7,
  };
  
  changeVolume = (e: ReactSyntheticEvent, value: number) => {
    const sounds = document.getElementsByClassName('sounds');
    for (let i=0; i<sounds.length; i++) {
      if (sounds[i] instanceof HTMLAudioElement) {
        sounds[i].volume = value;
      }
    }
    this.setState({ volume: value });
  }

  render() {
    const { volume } = this.state;
    return (
      <Container>
        <Title>Demo Sound Board</Title>
        <MusicContainer>
          {/* ROW ONE: LOOPS */}
          <KeyboardRow>
            {rowOne.map(obj => <Keypad
              key={obj.label}
              label={obj.label}
              subLabel={obj.subLabel}
              soundPath={obj.file}
              loop={obj.loop}
              colorOne='#9affe7'
              colorTwo='#e79aff' />
            )}
          </KeyboardRow>
          <Divider label='Loops' />

          {/* ROW TWO: LO-FI DRUMS */}
          <KeyboardRow>
            {rowTwo.map(obj => <Keypad
              key={obj.label}
              label={obj.label}
              subLabel={obj.subLabel}
              soundPath={obj.file}
              colorOne='#e79aff'
              colorTwo='#9affe7'
              loop={false} />
            )}
          </KeyboardRow>
          <Divider label='Lo-Fi Drums' />

          {/* ROW THREE: PSYCORE DRUMS */}
          <KeyboardRow>
            {rowThree.map(obj => <Keypad
              key={obj.label}
              label={obj.label}
              subLabel={obj.subLabel}
              soundPath={obj.file}
              colorOne=''
              colorTwo=''
              loop={false} />
            )}
          </KeyboardRow>
          <Divider label='Psycore Drums' />

          {/* Spacebar pauses music */}
          <Spacebar />
          <Volume
            volume={volume}
            changeVolume={this.changeVolume} />
        </MusicContainer>
      </Container>
    );
  }
}
