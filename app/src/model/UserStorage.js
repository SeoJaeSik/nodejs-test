// "use strict";

class UserStorage {
    static #users = {
        id : ["qwer", "asdf" ,"zxcv"],
        passwd : ["1234", "1234", "123456"],
        name : ["아이유", "관리자", "개발자"]
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;