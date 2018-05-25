import * as React from 'react';
import styled from 'styled-components';
import {observer, inject} from "mobx-react";
import {withRouter} from "react-router-dom";

const Component = styled('span')`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

@inject('PublicationStore')
@observer
@withRouter
export default class Subject extends React.Component{
  handleClick(){
    const {PublicationStore, subject, history} = this.props;

    PublicationStore.setCurrentQuery(subject.key);
    PublicationStore.setCurrentFilterType(PublicationStore.FILTER_TYPE_SUBJECT);
    PublicationStore.fetchPublications(history);
  }

  render(){
    return (<Component onClick={this.handleClick.bind(this)}>{this.props.subject.name}</Component>);
  }
}
