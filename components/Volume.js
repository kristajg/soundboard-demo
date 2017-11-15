// @flow
import React, { PureComponent } from 'react';
import Slider from 'material-ui/Slider';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding-top: 25px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
`;

type VolumeProps = {
  volume: number,
  changeVolume: Function,
}

const Volume = ({ volume, changeVolume }: VolumeProps) => (
  <Container>
    <Slider
      style={{ width: '10%', marginLeft: '45%', height: 40 }}
      defaultValue={volume}
      value={volume}
      onChange={changeVolume}
      step={0.1} />
    <Label>Volume {`${volume * 100}%`}</Label>
  </Container>
);

export default Volume;
