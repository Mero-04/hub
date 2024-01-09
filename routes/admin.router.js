const express = require("express");
const router = express.Router();
const { House, Contact } = require("../models/model");
const multer = require("multer");
const ImageUpload = require("../helpers/image-upload")
const upload = multer({ dest: './public/uploads/' })


router.get("/", (req, res) => {
    res.render("admin/dashboard")
})

router.get("/house", async (req, res) => {
    const houses = await House.findAll();
    res.render("admin/house", {
        oyler: houses
    })
})

router.get("/house-add", (req, res) => {
    res.render("admin/house-add")
})

router.post("/house-add", ImageUpload.upload.single("house_img"), async (req, res) => {
    const salgy = req.body.address;
    const baha = req.body.price;
    const banya = req.body.bathroom;
    const kravat = req.body.bedroom;
    const meydan = req.body.area;
    const img = req.file.filename;

    const houses = await House.create({
        address: salgy,
        price: baha,
        bedroom: kravat,
        bathroom: banya,
        area: meydan,
        house_img: img
    })
    res.redirect("/admin/house")
})

router.get("/contact", async (req, res) => {
    const smsler = await Contact.findAll();
    res.render("admin/contact", {
        messages: smsler
    })
})

router.get("/contact/:messageId", async (req, res) => {
    const id = req.params.messageId;
    const contact = await Contact.findByPk(id);
    res.render("admin/contact-view", {
        contact: contact
    })
})

router.get("/contact/delete/:messageId", async (req, res) => {
    const id = req.params.messageId;
    const contact = await Contact.findByPk(id);
    res.render("admin/contact-delete", {
        contact: contact
    })
})

router.post("/contact/delete/:messageId", async (req, res) => {
    const id = req.params.messageId;
    try {
        const contact = await Contact.findByPk(id);
        if (contact) {
            await contact.destroy();
            res.redirect("/admin/contact")
        }
    } catch (err) {
        console.log(err)
    }
})



module.exports = router;