//const express = require("express");
const mongoose = require("mongoose");

const db_server = process.env.DB_SERVER;

const server = db_server;

const database = "php_db";

class Database {
	constructor() {
		this._connect();
	}

	_connect() {
		mongoose
			.connect(
				`mongodb+srv://${server}/${database}?retryWrites=true&w=majority`,
				{useNewUrlParser: true, useUnifiedTopology: true}
			)
			.then(() => {
				console.log("Database connection successful");
			})
			.catch((err) => {
				console.error("Database connection error");
			});
	}
}

module.exports = new Database();
