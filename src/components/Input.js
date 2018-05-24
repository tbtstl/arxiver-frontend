import * as React from 'react';
import {mix} from 'polished';
import {Input as BaseInput} from 'rebass';

import {fadeInUp} from "../styles/animations";
import {colors} from "../theme";

const placeholderColor = mix(0.5, colors.text, colors.white);

const Component = BaseInput.extend`
  appearance: none;
  background: transparent;
  border: none;
  text-align: center;
  outline: none;
  width: 100%;
  box-shadow: none;
  
  text-decoration: underline;
  text-align: ${props => props.animate ? 'center' : 'right'}
  
  animation: ${props => props.animate ? fadeInUp : null} 0.5s linear 1;
  animation-fill-mode: both;
  opacity: ${props => props.animate ? 0 : 1};
  
  ::placeholder {  
    text-decoration: underline;
    color: ${placeholderColor};
    margin-left: ${props => props.animate ? null : 'auto'}
  }
  
  :focus {
    box-shadow: none;
  }
`;

export default class Input extends React.PureComponent {
  render(){
    return (<Component {...this.props}/>)
  }
}
