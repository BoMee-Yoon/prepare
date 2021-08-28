/*
하나의 인스턴스나 클래스만 존재
처음 객체를 생성할 때 기존에 생성된 객체가 있다면 그걸 리턴하고 없으면 새로운 객체를 리턴
*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

const mongo = new Database('mongo');
const mysql = new Database('mysql');
console.log(mongo.getData()); // mongo
console.log(mysql.getData()); // mongo