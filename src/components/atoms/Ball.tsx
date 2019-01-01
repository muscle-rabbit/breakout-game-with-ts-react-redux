import * as React from 'react';
import styled from 'styled-components';

type Props = {};

const Ball: React.FC<Props> = ({ ...props }) => {
  return <OutWrapper />;
};

const OutWrapper = styled.div`
  background-color: black;
  height: 10px;
  width: 10px;
  border-radius: 5px;
`;

export default Ball;
