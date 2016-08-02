var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user){
		done(err, user);
	});
});

// SIGN UP....
passport.use('local.signup', new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true
}, function(req, email, password, done){
	req.checkBody('email', 'Invalide email').notEmpty().isEmail();
	req.checkBody('password', 'Invalide password').notEmpty().isLength({min : 5});
	var errors = req.validationErrors();
	if(errors) {
		var messages = [];
		errors.forEach(function(error){
			messages.push(error.msg);
		});
		return done(null, false, req.flash('error', messages));
	}

	User.findOne({'email': email}, function(err, user){
		if(err){
			return done(err);
		}
		if (user){
			var messages = "Email already in use";
			return done(null, false, messages);
		}
		var newUser = new User();
		newUser.email = email;
		newUser.password = newUser.encryptPassword(password);
		newUser.save(function(err, result){
			if(err){
				return done(err);
			}
			return done(null, newUser);
		});
	});
}));

// SIGN IN .....
passport.use('local.signin', new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true
}, function(req, email, password, done){

	req.checkBody( 'email', 'Invalide email').notEmpty().isEmail();
	req.checkBody('password', 'Invalide password').notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		var messages = [];
		errors.forEach(function(error){
			messages.push(error.msg);
		});
		return done(null, false, req.flash('error', messages));
	}
	User.findOne({'email': email}, function(err, user){
	    if(err){
			return done(err);
		}
		if (!user){
			return done(null, false, {messages : "Username not found!"});
		}	
		console.log(user);
		if (!user.validPassword(password)){
			var messages = "Password is not valid! .";
			return done(null, false, messages);
		}
		return done(null, user);
	});
}));
