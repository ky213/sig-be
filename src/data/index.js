const algeriePosteGeojson = require("../data/algeriePoste");
const algeriePoste_oranGeojson = require("../data/algeriePoste.json");
const MSANGeojson = require("../data/MSAN");
const fibreObtiqueGeojson = require("../data/fibreObtique");
const fibreObtique_oranGeojson = require("../data/fibreObtique_oran.json");
const reseau4GLteGeojson = require("../data/reseau4GLte");
const reseau4GLte_oranGeojson = require("../data/reseau4GLte_oran.json");
const djezzyGeojson = require("../data/djezzy");
const djezzy_oranGeojson = require("../data/djezzy_oran");
const ooredooGeojson = require("../data/ooredoo");
const ooredoo_oranGeojson = require("../data/ooredoo_oran");
const Mobilis_oran = require("../data/Mobilis_oran.json");
const actelGeojson = require("../data/actel");
const Agence_Djezzy_oran = require("../data/Agence_Djezzy_oran.json");
const Agence_Mobilis_oran = require("../data/Agence_Mobilis_oran.json");
const Agence_Ooredoo_oran = require("../data/Agence_Ooredoo_oran.json");
const ATS_oran = require("../data/ATS_oran.json");
const Complexe_telecom_oran = require("../data/Complexe_telecom_oran.json");
const DW_PTTN_oran = require("../data/DW_PTTN_oran.json");
const Station_Atterissement_oran = require("../data/Station_Atterissement_oran.json");

module.exports = {
  ap: [algeriePosteGeojson, algeriePoste_oranGeojson],
  msan: [MSANGeojson],
  lfo: [fibreObtiqueGeojson, fibreObtique_oranGeojson],
  lte: [reseau4GLteGeojson, reseau4GLte_oranGeojson],
  djezzy: [djezzyGeojson, djezzy_oranGeojson],
  ooredoo: [ooredooGeojson, ooredoo_oranGeojson],
  actel: [actelGeojson],
  agence_djezzy: [Agence_Djezzy_oran],
  agence_mobilis: [Agence_Mobilis_oran],
  agence_ooredoo: [Agence_Ooredoo_oran],
  mobilis: [Mobilis_oran],
  ats: [ATS_oran],
  complexe_telecom: [Complexe_telecom_oran],
  dw_pttn: [DW_PTTN_oran],
  station_atterissement: [Station_Atterissement_oran]
};
