import * as React from 'react';
import styled from 'styled-components';
import {observer, inject} from "mobx-react";
import Publication from "./Publication";
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
export default class Author extends React.Component{
  handleClick(){
    const {PublicationStore, author, history} = this.props;

    PublicationStore.setCurrentQuery(author);
    PublicationStore.setCurrentFilterType(PublicationStore.FILTER_TYPE_AUTHOR);
    PublicationStore.fetchPublications(history);
  }

  render(){
    return (<Component onClick={this.handleClick.bind(this)}>{this.props.author}&nbsp;</Component>);
  }
}
