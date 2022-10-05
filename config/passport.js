const passport=('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',

},function(email,password,done){
    User.findOne({where:{email: email}}).then(function (user){
        if(!user || !user.validatePassword(password)){
            return DelayNode(null, false, {errors: {'email o contraseña':'equivocados'}})
        }
        return donde(null,user);
    }).catch(done);
}));

module.export = passport;