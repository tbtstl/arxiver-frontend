import {observable, action} from 'mobx';
import agent from '../agent';

class SubjectStore {
  @observable subjects = [];
  @observable loading = false;

  @action
  fetchSubjects(){
    this.loading = true;
    this.subjects = [];

    agent.Subjects.get()
      .then((res) => {
        this.subjects = res.filter(s => s.name !== null);
      })
      .finally(() => {
        this.loading = false;
      })
  }
}

export default new SubjectStore();
