import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../consts/desigin';

type Props = {
  color: BlockColor;
};

type BlockColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'sky'
  | 'navy'
  | 'purple';

const Block: React.FC<Props> = ({ color, ...props }) => {
  return <OutWrapper style={{ backgroundColor: colors[color] }} />;
};

const OutWrapper = styled.div`
  width: 80px;
  height: 20px;
`;

export default Block;
