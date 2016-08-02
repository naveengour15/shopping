/*
1) create Project/ Directory  like:
	
		mkdir shopping

2) install express generator :
		
		npm install express-generator -g

3) create Project file structure: 

		express shopping --hbs

4) go inside of project:
        
        cd shopping	

5) install npm:

        npm install

6)  DEBUG or Start server:
 
 		DEBUG=shopping:* npm start

7)  Set CSS, JS and Jquery in Views layout.hbs file

	set lattest CDN file ..

8)  create partial directory in views folder for includable file ..

	header, footer , any other view 	  		

9)  create express-handlebars for set link for including partials files..
	
	 npm install --save express-handlebars

10) set in app.js file for partial connection..
		
		add handlebar :
			var expressHbs = require('express-handlebars');

		set view on this statment place : 
						app.set('views', path.join(__dirname, 'views'));
 						app.set('view engine', 'hbs');
		
 		set of this : 
 						app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
						app.set('view engine', '.hbs');

		create partial directory in views folder and also move layout.hbs file on Layout directory				

11)  for CSRF Protection. we want some package :
		
		1) Passport package:
						npm install --save passport
		2) Incription package:
					   npm install --save bcrypt-nodejs
		3) flash masseges package
					    npm install --save connect-flash	

		Go to app.js file and do :
						var passport = require('passport');
						var flash = require('connect-flash');

		after session:
		                app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false }));
		D0 this
						app.use(flash());
						app.use(passport.initialize());
						app.use(passport.session());				
        
        and local passport :
        				npm install --save passport-local
12) validation :
	    npm install express-validator --save

*/