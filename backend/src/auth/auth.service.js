const User = require('../users/user.entity');
const { Unauthorized } = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const { ADMIN_ROLE } = require('../commons/util');

class AuthService {
    async validate(username, password) {
        const user = await User.findOne({ username });
        if(user && user.isLocked) {     //checks if there's user AND isLocked
            throw new Error('The user is locked!');
        }
        
        if (!user || !bcrypt.compareSync(password, user.password)) {    //checks if there's NO user OR wrong pw
            
            if(user) {                                                  //however if there's user
                const attemptCount = user.loginAttempts +1; 
                user.loginAttempts = attemptCount;

                if(attemptCount >= 3) {                    //if attempt is >3,
                    user.isLocked = true;                       //set isLocked to true
                    
                }
                await user.save();

                if(user.isLocked) {
                    throw new Error('The user is locked!');     //and throw Error message
                }
            }

            throw new Unauthorized();
        }

        if (user.loginAttempts < 3) {
            user.loginAttempts = 0;
            await user.save();
        }
        
        return user;
    }

    async validate(username, password) {
        const user = await User.findOne({ username });
        if (user && user.isLocked) {
            throw new Error('The user is locked!');
        }

        if (!user || !bcrypt.compareSync(password, user.password)) {

            if (user) {
                const attemptCount = user.loginAttempts +1;
                user.loginAttempts = attemptCount;

                if(attemptCount === 3) {
                    user.isLocked = true;
                }
                await user.save();

                if (user.isLocked) {
                    throw new Error('The user is locked!');
                }
            }

            throw new Unauthorized();
        }

        if (user.loginAttempts < 3) {
            user.loginAttempts = 0;
            await user.save();
        }
        return user;
    }


    async login(username, password) {
        const user = await this.validate(username, password);
        const token = jwt.sign({ userId: user._id, username: user.username }, 
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })

        return token;
    }

    validateToken(token) {
        const obj = jwt.verify(token, process.env.JWT_SECRET, {
            ignoreExpiration: false
        })

        return { userId: obj.userId, username: obj.username };
    }
}

module.exports = new AuthService();