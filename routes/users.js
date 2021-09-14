import express from 'express';
import {
	userService
} from '../services/index.js';

const router = express.Router();


function handleExceptionOrError(res, code, message) {
	res.status(code);
	res.send(message);
}

router.get('/', (req, res) => {
	const users = userService.getUsers();
	res.send({
		users
	});
});

router.get('/:id', (req, res) => {
	try {
		const {
			id
		} = req.params;

		const foundUser = userService.getUserById(id);

		if (!foundUser) {
			return handleExceptionOrError(res, 400, 'User not found');
		}
		res.send({
			foundUser
		});

	} catch (error) {
		return handleExceptionOrError(res, 500, error);
	}

});

export default router;