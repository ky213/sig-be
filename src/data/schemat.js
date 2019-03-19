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
      "topo": "Polygon",
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
  };
