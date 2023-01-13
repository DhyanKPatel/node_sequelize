const passportjwt = require('passport-jwt');
const ExtractJwt = passportjwt.ExtractJwt;
const StrategyJwt = passportjwt.Strategy;
const db = require('../model/db');
const users = db.userModel;

module.exports = (passport) => {
    passport.use(
        new StrategyJwt({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.PRIVATEKEY
        },
            async (jwtPayload, cb) => {
                await users.findOne({ where: { email: jwtPayload.email } }).then((user) => {
                    return cb(null, user);
                }).catch((error) => {
                    return cb(error);
                })
            })
    );
}

exports.updateProfile = async (req, res, next) => {
    try {
        const email = req.user.email;
        const findUser = await users.findOne({ where: { email: email } });
        if (findUser) {
            const updateUser = {
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
            }
            if (req.file) {
                updateUser.profile
                    = req.file.filename
            }
            const updatedUser = await users.update(updateUser, {
                where: { email: email }
            });
            if (updatedUser) {
                await next(
                    new GeneralResponse(
                        "User Updated...",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            }
        } else {
            await next(
                new GeneralError(
                    "User not found!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to update user details!"));
    }
};

exports.deleteAddressBook = async (req, res, next) => {
    try {
        let id = req.params.id

        const deleteData = await addressBook.destroy({
            where: { id: id }
        });
        if (deleteData) {
            await next(
                new GeneralResponse(
                    "address books are successfully deleted",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        }
        else {
            await next(
                new GeneralError(
                    "address book not delete!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    } catch (err) {
        logger.error("err", err);
        next(new GeneralError("Delete Book failed!"));
    }
}