var controller = require("../controllers/controller.js");

module.exports = [

	{path: "/public/{file*}",	method:"GET",				config:controller.serveFile},
	{path: "/",					method:"GET",				config:controller.home},

	{path: "/signup/iam", 		method:"GET", 				config:controller.signupIam},
	{path: "/client", 			method:"POST", 				config:controller.signupClient},
	{path: "/photographer", 	method:"POST", 				config:controller.signupPhotographer},
	{path: "/signup/social", 	method:"GET", 				config:controller.signupSocial},

	{path: "/facebook",			method:["GET", "POST"],		config:controller.facebook},
	{path: "/google",			method:["GET", "POST"],		config:controller.google},
	
	{path: "/dashboard", 		method:"GET", 				config:controller.dashboard},
	{path: "/profile", 			method:"GET", 				config:controller.profile},

	{path: "/newjob", 			method:"GET", 				config:controller.newJobForm},
	{path: "/newjob", 			method:"POST", 				config:controller.newJobPost},

	{path: "/logout", 			method:"GET", 				config:controller.logout},

	{path: "/help", 			method:"GET", 				config:controller.help}
	
	];