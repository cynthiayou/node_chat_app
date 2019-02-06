let expect = require('expect');

let {Users} = require('./users');

describe('Users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Brandon',
            room: 'Citi Course'
        },{
            id: '3',
            name: 'Lucas',
            room: 'Kinder Course'
        }];   
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id:  '123',
            name: 'Leon',
            room: 'The Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike']);
    });
    it('should remove a user', () => {
        let user = users.removeUser('3');
        expect(user.id).toBe('3');
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user', () => {
        let user = users.removeUser('56');
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });
    it('should find a user', () => {
        let user = users.getUser('3');
        expect(user.name).toEqual('Lucas');
    });
    it('should not find a user', () => {
        let user = users.getUser('89');
        expect(user).toBeFalsy();
    });

})