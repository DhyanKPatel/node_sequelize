const db = require('../model/db');
const {GeneralError} = require('../utils/error');
const {GeneralResponse} = require('../utils/response');
const config = require('../utils/config');
const logger = require('../helper/loggin');
const addressBook = db.addressBookModel

exports.createAddressBook = async (req, res, next) => {
    try {

        const data = [req.body];
        console.log("n nn kjn",req.body);
        if (data) {
            for (const values in data) {
                await addressBook.bulkCreate(data[values]);
            }
            await next(
                new GeneralResponse(
                    "address books are successfully created",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "address book not created!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("Book creation failed!"));
    }
}

// exports.getAddress = async (req,res,next) => {
//     const email =req.addressbook.email;
//     try {
//         const addressbooks = await addressBook.findAll();
//         if(addressbooks){
//             res.send(addressbooks)
//         }else{
//             await next(
//                 new GeneralError(
//                     "Can not get addressData!",
//                     undefined,
//                     config.HTTP_ACCEPTED
//                 )
//             );
//         }
//     } catch (error) {
//         logger.error("err", err);
//         next(new GeneralError("failed to get addressData!"));
//     }
// }

exports.readAddressBook = async (req, res, next) => {
    try {
        const data = await addressBook.findAll();
        if (data) {
            res.send(data);
        }
        else {
            await next(
                new GeneralError(
                    "address book not read!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }

    } catch (err) {
        logger.error("err", err);
        next(new GeneralError("Read Book failed!"));
    }
}

exports.updateAddressBook = async (req, res, next) => {
    try {
        let id = req.params.id
        const updateData = {
            title: req.body.title,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            pinCode: req.body.pinCode,
        }
        const updatedData = await addressBook.update(updateData, {
            where: { id: id }
        });
        if (updatedData) {
            await next(
                new GeneralResponse(
                    "address books are successfully updated",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        }
        else {
            await next(
                new GeneralError(
                    "address book not update!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    } catch (err) {
        logger.error("err", err);
        next(new GeneralError("update Book failed!"));
    }
}

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