import * as React from 'react';
import {Select as BaseSelect} from 'rebass';

const Select = BaseSelect.extend`
  border: none;
  box-shadow: none;
  height: 100%;
  text-decoration: solid underline;
  :focus {
    box-shadow: none;
    border: none;
  }
`;

export default Select;
