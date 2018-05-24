import {observable, action} from 'mobx';
import agent from '../agent';

class PublicationStore {
  @observable publications = [];
  @observable currentQuery = '';
  @observable loading = false;

  @action
  setCurrentQuery(query){
    this.currentQuery = query;
  }

  @action
  fetchPublications(history){
    this.loading = true;
    this.publications = [];

    if (history){
      history.push(`/${this.currentQuery}`)
    }

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
