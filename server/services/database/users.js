const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

/**
 * This is used for testing the Client<->API connection, but this operation
 * won't be allowed in the final version of the project as it is a
 * security risk to expose all users
 */
const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		pool.query("SELECT user_id, email FROM users", (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result.rows);
			}
		});
	});
};

const getUserByEmail = (email) => {
	return new Promise((resolve) => {
		pool.query(
			"SELECT * FROM users where email = $1",
			[email],
			(error, result) => {
				resolve(result.rows[0]);
			}
		);
	});
};

const createUser = ({ role, email, password }) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"INSERT INTO users (role , email, password) values ($1, $2, $3) RETURNING user_id",
			[role, email, password],
			(error, result) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				resolve(result.rows);
			}
		);
	});
};

const getUserById = (id) => {
	return new Promise((resolve, reject) => {
		pool.query("SELECT * FROM users where id = $1", [id], (error, result) => {
			if (error) {
				console.error(error);
				return reject(error);
			}
			resolve(result.rows[0]);
		});
	});
};

module.exports = {
	getUserByEmail,
	createUser,
	getUserById,
	getAllUsers,
};
