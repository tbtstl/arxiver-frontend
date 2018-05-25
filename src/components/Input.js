import * as React from 'react';
import {mix} from 'polished';
import {Input as BaseInput} from 'rebass';

import {fadeInUp} from "../styles/animations";
import {colors} from "../theme";

const placeholderColor = mix(0.5, colors.text, colors.white);

const Input = BaseInput.extend`
  appearance: none;
  background: transparent;
  border: none;
  text-align: center;
  outline: none;
  ${props => props.position === 'center' ? 'width: 100%;' : 'width: auto;'}
  box-shadow: none;
  border-bottom: ${props => props.underline ? `1px ${colors.text} solid` : 'none'};
  border-radius: 0;
  text-align: ${props => props.animate ? 'center' : 'right'}
  
  animation: ${props => props.animate ? fadeInUp : null} 0.5s linear 1;
  animation-fill-mode: both;
  opacity: ${props => props.animate ? 0 : 1};
  
  ::placeholder {  
    color: ${placeholderColor};
    margin-left: ${props => props.animate ? null : 'auto'}
  }
  
  :focus {
    box-shadow: none;
  }
`;

export default Input;
