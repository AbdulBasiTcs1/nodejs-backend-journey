const { nanoId } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req,res) {
    const shortId = nanoId(8);
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