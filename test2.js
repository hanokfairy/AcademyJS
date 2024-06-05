class User{
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
}
const userInfo = new User('홍길동');
console.log(userInfo.name);
console.log(userInfo.getName());

//private
const User1 = (function (){
      let userName = '홍길동';
      function User(){
      }
      User.prototype.getName = function(){
        return userName;
      }
      return User;
})();
const userInfo1 = new User1();
console.log(userInfo1.getName());
