import * as React from 'react';
import {Small} from 'rebass';
import styled from 'styled-components';
import {observer, inject} from "mobx-react";
import {withRouter} from "react-router-dom";

const Component = styled(Small)`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

@inject('PublicationStore')
@observer
@withRouter
export default class Author extends React.Component{
  handleClick(){
    const {PublicationStore, author, history} = this.props;

    PublicationStore.setCurrentQuery(author);
    PublicationStore.setCurrentFilterType(PublicationStore.FILTER_TYPE_AUTHOR);
    PublicationStore.fetchPublications(history);
  }

  render(){
    return (<Component onClick={this.handleClick.bind(this)}>{this.props.author}</Component>);
  }
}
