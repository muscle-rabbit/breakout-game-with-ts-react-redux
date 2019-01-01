import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Block from '../Block';

/* tslint:disable */
storiesOf('button', module).add('with sample', () => (
  <div>
    <Block color={'red'} />
    <Block color={'orange'} />
    <Block color={'yellow'} />
    <Block color={'green'} />
    <Block color={'sky'} />
    <Block color={'navy'} />
    <Block color={'purple'} />
  </div>
));
