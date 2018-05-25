import * as React from 'react';
import Latex from 'react-latex';

export default class LatexText extends React.Component {
  constructor(props){
    super(props);
    this.state = {error: false};
  }

  componentDidCatch(){
    this.setState({error: true})
  }


  render(){
    const Parent = this.props.parentEl;
    const props = {...this.props};
    delete props.children;
    delete props.parentEl;

    if (this.state.error){
      return (
        <Parent {...props}>{this.props.children}</Parent>
      )
    } else {
      return (
        <Parent {...props}><Latex>{this.props.children}</Latex></Parent>
      )
    }
  }
}
