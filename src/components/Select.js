import * as React from 'react';
import {Select as BaseSelect} from 'rebass';
import {colors} from "../theme";

const Select = BaseSelect.extend`
  border: none;
  border-radius: 0;
  box-shadow: none;
  height: 100%;
  border-bottom: 1px solid ${colors.text};
  :focus {
    box-shadow: none;
  }
`;

export default Select;
