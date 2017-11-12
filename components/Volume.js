import React, { PureComponent } from 'react';
import Slider from 'material-ui/Slider';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #676767;
`;

const Volume = ({ volume, changeVolume }) => (
  <Container>
    <Slider
      style={{ width: '10%', marginLeft: '45%' }}
      defaultValue={volume}
      value={volume}
      onChange={changeVolume}
      step={0.1} />
    <Label>Volume {`${volume * 100}%`}</Label>
  </Container>
);

export default Volume;
