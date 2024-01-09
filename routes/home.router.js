const express = require("express");
const { House, Contact } = require("../models/model");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("frontend/home", {
        title: "home"
    })
});

router.get("/properties", async (req, res) => {
    const houses = await House.findAll();
    res.render("frontend/properties", {
        title: "properties",
        oyler:houses
    })
});

router.get("/property-detail/:propertyId", async (req, res) => {
    const id = req.params.propertyId;
    const house = await House.findByPk(id)
    res.render("frontend/property-detail", {
        title: "details",
        house:house
    })
});

router.get("/contact", (req, res) => {
    res.render("frontend/contact", {
        title: "contact"
    })
});

router.post("/contact", async (req,res)=>{
    await Contact.create({
        name: req.body.name,
        email:req.body.email,
        subject: req.body.subject,
        message:req.body.message
    })
    res.redirect("/")
})

module.exports = router;