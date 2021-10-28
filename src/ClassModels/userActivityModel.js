export default class UserActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
