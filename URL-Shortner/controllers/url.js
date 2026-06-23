// const shortid = require("shortid");
const URL = require("../models/url");
const shortid = require("shortId");

async function handleGenerateNewShortUrl(req,res) {
    const shortId = shortid(8);
    const body = req.body
    if(!body.URL) return res.status(400).json({error:"url is required"})

    await URL.create({
        shortId : shortId,
        redirectUrl = body.URL,
        visitHistory : []
    });

    return res.json({id : shortId});
}

module.exports  = {
    handleGenerateNewShortUrl,
}