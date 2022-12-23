/***************************************************************************** #
#                                                                              #
#                                                                              #
#    Creator: Théau <theau.nicolas@cfanumeriqueoutremer.com>                   #
#                                                                              #
#    Created: 2013/11/18 13:37:42                                              #
#    Exercice : faire un algorytme de recherche de ville                       #
#               (en pensant à tout les cas)                                    #
#                                                                              #
#                                                                              #
# *****************************************************************************/

const cities = require("./resource/cities.json")
const entry = process.argv[2]

console.log(entry)

//executer : node cities.js "<nom de la ville>"