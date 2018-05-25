import * as React from 'react';
import {Box, Container, Flex, Small, Text} from 'rebass';
import {inject, observer} from 'mobx-react';
import Publication from "../components/Publication";

const RoundedContainer = Container.extend`
  border-radius: 4px;
`;

const HoverText= Text.extend`
  :hover {
    cursor: pointer;
    text-decoration: solid underline;
  }
`;

@inject('PublicationStore')
@observer
export default class Results extends React.Component {
  componentDidMount(){
    const {PublicationStore, match} = this.props;
    if (!PublicationStore.loading){
      PublicationStore.setCurrentQuery(match.params.searchQuery);
      PublicationStore.setCurrentFilterType(match.params.filterType);
      PublicationStore.fetchPublications();
    }
  }

  handleMoreButtonClick(){
    const {PublicationStore} = this.props;
    PublicationStore.nextPage();
  };

  render(){
    const {PublicationStore} = this.props;
    return (
      <RoundedContainer bg={'lightGrey'}>
        {PublicationStore.publications.map((pub) => (
          <Publication publication={pub} key={pub.arxiv_url}/>
        ))}
        <Flex w={1}>
          {PublicationStore.moreResults ? (
            <Box mx='auto' p={2}><HoverText onClick={this.handleMoreButtonClick.bind(this)} color={'text'}>Show More</HoverText></Box>
          ) : (
            <Box mx={'auto'} p={2}><Small color={'text'}>No {PublicationStore.currentPage > 1 ? 'More' : ''} Results</Small></Box>
          )}
        </Flex>
      </RoundedContainer>
    )
  }
}
