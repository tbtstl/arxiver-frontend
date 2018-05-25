import * as React from 'react';
import {Container} from 'rebass';
import {inject, observer} from 'mobx-react';
import Publication from "../components/Publication";

const RoundedContainer = Container.extend`
  border-radius: 4px;
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

  render(){
    const {PublicationStore} = this.props;
    return (
      <RoundedContainer bg={'lightGrey'}>
        {PublicationStore.publications.map((pub) => (
          <Publication publication={pub} key={pub.arxiv_url}/>
        ))}
      </RoundedContainer>
    )
  }
}
