import {observable, action} from 'mobx';
import agent from '../agent';

class PublicationStore {
  @observable publications = [];
  @observable currentQuery = '';
  @observable loading = false;
  @observable hasSearched = false;

  @action
  setCurrentQuery(query){
    this.currentQuery = query;
  }

  @action
  fetchPublications(){
    this.loading = true;
    this.hasSearched = true;
    this.publications = [];

    agent.Publications.list(this.currentQuery)
      .then((res) => {
        this.publications = res;
      })
      .finally(()=>{
        this.loading = false;
      });
  }
}

export default new PublicationStore();
