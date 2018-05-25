import {observable, action} from 'mobx';
import agent from '../agent';

class PublicationStore {
  @observable publications = [];
  @observable currentQuery = '';
  @observable currentFilterType = '';
  @observable loading = false;

  filterTypeMap = {
    search: 'byQuery',
    author: 'byAuthor',
    subject: 'bySubject'
  };

  @action
  setCurrentQuery(query){
    this.currentQuery = query;
  }

  @action
  setCurrentFilterType(type){
    this.currentFilterType = type;
  }

  @action
  fetchPublications(history){
    this.loading = true;
    this.publications = [];

    const agentFilter = this.filterTypeMap[this.currentFilterType];

    if (history){
      history.push(`/${this.currentFilterType}/${this.currentQuery}`)
    }

    agent.Publications[agentFilter](this.currentQuery)
      .then((res) => {
        this.publications = res;
      })
      .finally(()=>{
        this.loading = false;
      });
  }
}


export default new PublicationStore();
