var localStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function(passport){

    passport.serializeUser(function(user,done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });

    passport.use('local-registro',new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback:true
    },
    function(req,email,password,done){
        User.findOne({'local.email':email},function(err,user){
            if(err){return done(err);}
            if(user){
                return done(null,false,req.flash('registerMessage','El correo ya se encuentra registrado'));
            } else {
                var newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function(err){
                    if(err){throw err;}
                    return done(null,newUser);
                })
            }
        })
    })
    
    );

    passport.use('local-login',new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback:true
    },
    function(req,email,password,done){
        User.findOne({'local.email':email},function(err,user){
            if(err){return done(err);}
            if(!user){
                return done(null,false,req.flash('loginMessage','User does not exist'));
            }
            if(!user.validPassword(password)) {
                return done(null,false,req.flash('loginMessage','Please check your password'));
            }
            return done(null,user);
        })
    })
)}
