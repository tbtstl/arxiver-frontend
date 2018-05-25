import * as React from 'react';
import Select from './Select';
import {withRouter} from "react-router-dom";
import {inject, observer} from 'mobx-react';

@inject('PublicationStore')
@observer
@withRouter
export default class FilterSelect extends React.Component {
  handleFilterChange(e){
    const {PublicationStore, history} = this.props;
    PublicationStore.reset();
    PublicationStore.setCurrentFilterType(e.target.value);
    PublicationStore.fetchPublications(history)
  }

  render(){
    const {PublicationStore} = this.props;
    return (
      <Select onChange={this.handleFilterChange.bind(this)} value={PublicationStore.currentFilterType}>
        {Object.keys(PublicationStore.filterTypeFriendlyNameMap).map(ft => (
          <option key={ft} value={ft}>{PublicationStore.filterTypeFriendlyNameMap[ft]}</option>
        ))}
      </Select>
    )
  }
}
