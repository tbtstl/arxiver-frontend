import {observable, action} from 'mobx';
import agent from '../agent';

class PublicationStore {
  @observable publications = [];
  @observable currentQuery = '';
  @observable currentFilterType = 'search';
  @observable loading = false;
  @observable currentPage = 1;
  @observable moreResults = true;

  FILTER_TYPE_QUERY = 'search';
  FILTER_TYPE_AUTHOR = 'author';
  FILTER_TYPE_SUBJECT = 'subject';

  filterTypeMap = {
    [this.FILTER_TYPE_QUERY]: 'byQuery',
    [this.FILTER_TYPE_AUTHOR]: 'byAuthor',
    [this.FILTER_TYPE_SUBJECT]: 'bySubject'
  };

  filterTypeFriendlyNameMap = {
    [this.FILTER_TYPE_QUERY]: 'containing',
    [this.FILTER_TYPE_AUTHOR]: 'by',
    [this.FILTER_TYPE_SUBJECT]: 'about'
  };

  @action reset(){
    this.publications = [];
    this.currentQuery = '';
    this.currentPage = 1;
    this.moreResults = true;
    this.currentFilterType = 'search';
  }

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
    this.currentPage = 1;

    const agentFilter = this.filterTypeMap[this.currentFilterType];

    if (history){
      history.push(`/${this.currentFilterType}/${this.currentQuery}`)
    }

    agent.Publications[agentFilter](this.currentQuery)
      .then((res) => {
        this.publications = res;

        if(res.length === 0) {
          this.moreResults = false;
        } else {
          this.moreResults = true;
        }
      })
      .finally(()=>{
        this.loading = false;
      });
  }

  @action
  nextPage(){
    this.loading = true;
    const agentFilter = this.filterTypeMap[this.currentFilterType];

    agent.Publications[agentFilter](this.currentQuery, this.currentPage+1)
      .then((res) => {
        if (res.length > 0){
          this.currentPage += 1;
          this.publications = this.publications.concat(res) ;
        } else {
          this.moreResults = false;
        }
      })
      .finally(() => {
        this.loading = false;
      })
  }
}


export default new PublicationStore();
