import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 40px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #676767;
  text-align: left;
  padding-left: 15%;
  padding-bottom: 2px;
`;

const Line = styled.div`
  width: 70%;
  margin-left: 15%;
  height: 2px;
  border-radius: 3px;
  background-color: #676767;
`;

const Divider = ({ label, isGreen }) => (
  <Container>
    <Label>{label}</Label>
    <Line />
  </Container>
);

export default Divider;
