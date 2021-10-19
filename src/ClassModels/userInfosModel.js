export default class UserInfosModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.score = data.score;
    this.keyData = data.keyData;
  }
}
