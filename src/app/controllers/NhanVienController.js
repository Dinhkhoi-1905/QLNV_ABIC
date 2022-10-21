//  const { response } = require("express");
// const Courses = require('../models/Courses');
//const NhanVien = require('../models/Nhanviens');
const { mongooseToObject } = require('../../until/mongoose');
const {multipleMongooseToObject} = require('../../until/mongoose')
const moment = require('moment'); // require
const Nhanvien = require('../models/Nhanviens');
const { json } = require('express');
class NhanVienController {
    list(req, res, next) {
        //         Nhanvien.find({}, function (err, nhanviens) {
        //     if (!err) {
        //         res.json(nhanviens);
        //     }
        //     else {
        //         res.status(500).json({ message: "Error" });
        //     }
        // });
        Nhanvien.find({})
            .then(nhanviens => {
                res.render('nhanviens/list', {
                    nhanviens: multipleMongooseToObject(nhanviens),
                });
            })
            .catch(next);
    }
    
    detail(req, res, next) {
        //         Nhanvien.find({}, function (err, nhanviens) {
        //     if (!err) {
        //         res.json(nhanviens);
        //     }
        //     else {
        //         res.status(500).json({ message: "Error" });
        //     }
        // });


        Nhanvien.findOne({ _id: req.params.id })
            .then(nhanvien =>
                res.render('nhanviens/detail', { nhanvien: mongooseToObject(nhanvien) })
            )
            .catch(next);
     }
     create(req, res, next) {
         res.render('nhanviens/create');
     }

     store(req, res, next) {
        const formData = req.body;
        const nhanvien = new Nhanvien(formData);
        nhanvien.save()
            //  .then(() => res.redirect('/'))
            //  .catch(error => {

            // });
            res.send('SAVED');
        //res.json(nhanvien);
    }

}
module.exports = new NhanVienController;
