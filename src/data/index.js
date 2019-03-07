const algeriePosteGeojson = require("../data/algeriePoste");
const MSANGeojson = require("../data/MSAN");
const fibreObtiqueGeojson = require("../data/fibreObtique");
const reseau4GLteGeojson = require("../data/reseau4GLte");
const djezzyGeojson = require("../data/djezzy");
const ooredooGeojson = require("../data/ooredoo");


module.exports =
    {
        ap: algeriePosteGeojson,
        msan: MSANGeojson,
        lfo: fibreObtiqueGeojson,
        lte: reseau4GLteGeojson,
        djezzy: djezzyGeojson,
        ooredoo: ooredooGeojson
    }


