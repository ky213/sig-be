module.exports =
  {
    ap: {
      "name": "ap",
      "topo": "Point",
      "properties": {
        "name": "String",
        "classe": "String",
        "Population": "Number",
        "densitePostal": "Number",
        "NombreGuichetsExistant": "Number",
        "NombreGuichetsTenus": "Number",
        "NombreVisuTotal": "Number",
        "NombreVisuFrontOffice": "Number",
        "NombreGAB": "Number",
        "adresse": "String",
        "description": "String",
        "codeCommune": "Number",
        "image": "String"
      },
      "type": "String"
    },
    msan: {
      "name": "msan",
      "topo": "Point",
      "properties": {
        "name": "String",
        "capacite": "Number",
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
        "image": "String"
      },
      "type": "String"
    },
    lfo: {
      "name": "lfo",
      "topo": "LineString",
      "properties": {
        "name": "String",
        "liaison_fo": [{
          "trans": "String",
          "distanceKM": "Number"
        }],
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
        "image": "String"
      },
      "type": "String"
    },
    lte: {
      "name": "lte",
      "topo": "Point",
      "properties": {
        "name": "String",
        "capacite": "Number",
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
        "image": "String"
      },
      "type": "String"
    },
    djezzy: {
      "name": "djezzy",
      "topo": "Point",
      "properties": {
        "name": "String",
        "capacite": "Number",
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
        "image": "String"
      },
      "type": "String"
    },
    ooredoo: {
      "name": "ooredoo",
      "topo": "Point",
      "properties": {
        "name": "String",
        "capacite": "Number",
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
        "image": "String"
      },
      "type": "String"
    }
    ,
    mobilis: {
      "name": "mobilis",
      "topo": "Point",
      "properties": {
        "name": "String",
        "capacite": "Number",
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
        "image": "String"
      },
      "type": "String"
    }
    ,
    actel: {
      "name": "actel",
      "topo": "Point",
      "properties": {
        "name": "String"
      },
      "type": "String"
    }
    ,
    agence_djezzy: {
      "name": "agence_djezzy",
      "topo": "Point",
      "properties": {
        "name": "String",
        "Adresse": "String",
        "Capacite": "Number"
      },
      "type": "String"
    }
    ,
    agence_mobilis: {
      "name": "agence_mobilis",
      "topo": "Point",
      "properties": {
        "name": "String",
        "Adresse": "String",
        "Capacite": "Number"
      },
      "type": "String"
    }
    ,
    agence_ooredoo: {
      "name": "agence_ooredoo",
      "topo": "Point",
      "properties": {
        "name": "String",
        "Adresse": "String",
        "Capacite": "Number"
      },
      "type": "String"
    },
    ats: {
      "name": "ats",
      "topo": "Point",
      "properties": {
        "name": "String",
        "adresse": "String",
        "description": "String",
        "codeCommune": "String",
      },
      "type": "String"
    }
    ,
    complexe_telecom: {
      "name": "complexe_telecom",
      "topo": "Point",
      "properties": {
        "name": "String",
        "type": "String",
        "codeCommune": "String",
      },
      "type": "String"
    }
    ,
    dw_pttn: {
      "name": "dw_pttn",
      "topo": "Point",
      "properties": {
        "name": "String",
        "codeCommune": "String",
      },
      "type": "String"
    }
    ,
    station_atterissement: {
      "name": "station_atterissement",
      "topo": "Point",
      "properties": {
        "name": "String",
        "codeCommune": "String",
      },
      "type": "String"
    }
  };
