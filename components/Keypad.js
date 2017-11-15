// @flow
import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

let basePath = '/static/sounds/';

const playAnimation = ({ colorOne, colorTwo }) => keyframes`
  0% {
    background-color: ${colorOne ? colorOne : '#ff00bf'};
    height: 75px;
    width: 75px;
  }
  50% {
    background-color: ${colorTwo ? colorTwo : '#9affe7'};
    height: 85px;
    width: 85px;
  }
  100% {
    background-color:${colorOne ? colorOne : '#ff00bf'};
    height: 75px;
    width: 75px;
  }
`;

const Key = styled.div`
  height: 75px;
  width: 75px;
  background-color: ${props => props.colorOne ? props.colorOne : '#ff00bf'};
  text-transform: uppercase;
  display: inline-block;
  border: 3px solid #fff;
  border-radius: 6px;
  margin-right: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: ${props => props.animate ? `${playAnimation(props)} .2s linear` : 0}
`;

const Label = styled.div`
  position: relative;
  top: 35%;
  font-weight: 600;
  font-size: 22px;
`;

const SubLabel = styled.div`
  position: relative;
  top: 40%;
  font-size: 10px;
  font-weight: 400;
`;

const mapKeyCodes = {
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  q: 81,
  w: 87,
  e: 69,
  r: 82,
  t: 84,
  y: 89,
  u: 85,
  i: 73,
  o: 79,
  p: 80,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  j: 74,
  k: 75,
  l: 76,
  ';': 186,
};

type KeypadProps = {
  label: string,
  subLabel: string,
  soundPath: string,
  colorOne: string,
  colorTwo: string,
  loop: boolean,
};

type KeypadState = {
  animate: boolean,
};

export default class Keypad extends PureComponent<KeypadProps, KeypadState> {
  state = {
    animate: false,
  };

  componentDidMount () {
    window.addEventListener('keydown', this.playSound);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.playSound);
  }

  playSound = (e: ReactSyntheticEvent) => {
    const { label, soundPath } = this.props;
    if (e.keyCode === mapKeyCodes[label]) {
      // Start animation
      this.setState({ animate: true });
      
      // Wait for animation to complete before closing
      setTimeout(() => {
        this.setState({ animate: false });
      }, 200);

      const audio = document.getElementById(soundPath);
      if (audio instanceof HTMLAudioElement) {
        audio.play();
      }
    }
  }

  render() {
    const { label, subLabel, soundPath, colorOne, colorTwo, loop } = this.props;
    return (
      <Key
        animate={this.state.animate}
        colorOne={colorOne}
        colorTwo={colorTwo}>
        <audio
          className='sounds'
          id={soundPath}
          src={basePath+soundPath}
          onKeyDown={this.playSound}
          loop={loop || false} />
        <Label>{label}</Label>
        <SubLabel>{subLabel}</SubLabel>
      </Key>  
    );
  }
}
