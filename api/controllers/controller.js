var Users = require("../models/users");
var Jobs = require("../models/jobs");

module.exports = {

//To serve public files, css, lib, etc
	serveFile: {
		auth: false,
		handler: {
			directory: {
				path: "../public"
			}
		}
	},

	home: {
		auth: {
			mode: "optional"
		},
		handler: function (request, reply) {
			
			if (request.auth.isAuthenticated) {
				reply.redirect("/dashboard");
			}
			else {
				reply.view("home");
			}
		}
	},

	dashboard: {
		auth: {
			mode: "optional"
		},
		handler: function (request, reply) {

			var profile = request.auth.credentials;

			if (request.auth.isAuthenticated) {

				var query;

				if (profile.usertype === "client") {

					query = { "client": profile.id };
					Jobs.getMyJob(query, function (err, data) {
						console.log(data);
						reply.view("c-dashboard", { jobs: data, profile: profile });
					});
				}
				else if (profile.usertype === "photographer") {

					query = { "photographer": profile.id };
					Jobs.getMyJob(query, function (err, data) {
						console.log(data);
						reply.view("p-dashboard", { jobs: data, profile: profile });
					});
					// Jobs.getAllJobs(function (err, data) {
					// 	reply.view("p-dashboard", { jobs: data, profile: profile });
					// });
				}
			}
			else {
				reply.redirect("/");
			}
		}
	},

	users: {
		auth: {
			mode: "optional"
		},
		handler: function (request, reply) {

			if (request.auth.isAuthenticated) {
				var id = request.auth.credentials.id;

				Users.getAllUsers(function(err, data) {
					reply.view("users", { users: data, myid: id });
				});
			}
			else {
				reply.redirect("/");
			}
		}
	},

	help: {
		auth: {
			mode: "optional"
		},
		handler: function (request, reply) {
			reply("Help");
		}
	},

	logout: {
		auth: {
			mode: "optional"
		},
		handler: function (request, reply) {
			request.auth.session.clear();
			reply.redirect("/");
		}
	}

};