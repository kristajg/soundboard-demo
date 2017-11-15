// @flow
import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const playAnimation = keyframes`
  0% {
    background-color: #fff;
    height: 60px;
    width: 612px;
    left: calc(50% - 306px);
  }
  50% {
    background-color: #9affe7;
    height: 70px;
    width: 622px;
    left: calc(50% - 311px);
  }
  100% {
    background-color: #fff;
    height: 60px;
    width: 612px;
    left: calc(50% - 306px);
  }
`;

const Bar = styled.div`
  height: 60px;
  width: 612px;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 6px;
  margin-top: 35px;
  position: relative;
  left: calc(50% - 306px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: ${props => props.animate ? `${playAnimation} .3s linear` : 0}
`;

const Label = styled.div`
  position: relative;
  top: 26%;
  font-weight: 600;
  font-size: 20px;
`;

const SubLabel = styled.div`
  position: relative;
  top: 30%;
  font-size: 10px;
  font-weight: 400;
`;

type SpacebarState = {
  animate: boolean,
};

export default class Spacebar extends PureComponent<*, SpacebarState> {
  state = {
    animate: false,
  };

  componentDidMount () {
    window.addEventListener('keydown', this.stopAllSounds);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.stopAllSounds);
  }

  stopAllSounds = (e: ReactSyntheticEvent) => {
    if (e.keyCode === 32) {
      // Start animation
      this.setState({ animate: true });
      
      // Wait for animation to complete before closing
      setTimeout(() => {
        this.setState({ animate: false });
      }, 500);

      const sounds = document.getElementsByClassName('sounds');
      for (let i=0; i<sounds.length; i++) {
        if (sounds[i] instanceof HTMLAudioElement) {
          sounds[i].pause();
        }
      }
    }
  }

  render() {
    return (
      <Bar animate={this.state.animate} onKeyDown={this.stopAllSounds}>
        <Label>space</Label>
        <SubLabel>pause sounds</SubLabel>
      </Bar>
    );
  }
}
