import fs from 'fs';
class UserService {
	getUsers() {
		const users = JSON.parse(fs.readFileSync('./data/users.json'));
		return users;
	}

	getUserById(userId) {
		const users = this.getUsers();
		return users.find((user) => user.id === parseInt(userId));
	}
}

const userService = new UserService();

export default userService;