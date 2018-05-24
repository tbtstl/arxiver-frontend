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

    agent.Publications.list(this.currentQuery)
      .then((res) => {
        this.publications = res;
        if (history){
          history.push(`/${this.currentQuery}`)
        }
      })
      .finally(()=>{
        this.loading = false;
      });
  }
}


export default new PublicationStore();
