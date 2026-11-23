const passport = require('passport');
const { getPrisma } = require('../lib/prisma.js');
const prisma = getPrisma();
const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt');

function configurePassport(secret) {
    passport.use(
        new JwtStrategy({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: secret
            },
            async (payload, done) => {
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            id : payload.user.id
                        }
                    });

                    if (!user) {
                        return done(null, false);
                    }
                    return done(null, user);
                } catch (err) {
                    return done(err, false);
                }
            })
    )
}

module.exports = configurePassport;
