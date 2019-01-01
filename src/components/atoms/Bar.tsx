import * as React from 'react';
import styled from 'styled-components';

type Props = {};

const Bar: React.FC<Props> = ({ ...props }) => {
  return <OutWrapper />;
};

const OutWrapper = styled.div`
  background-color: #828282a1;
  width: 60px;
  height: 10px;
`;

export default Bar;
