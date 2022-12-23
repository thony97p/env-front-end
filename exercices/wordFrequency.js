/***************************************************************************** #
#                                                                              #
#                                                                              #
#    Creator: Théau <theau.nicolas@cfanumeriqueoutremer.com>                   #
#                                                                              #
#    Created: 2013/11/18 13:37:42                                              #
#    Exercice1 : créer une fonction qui vérifie le nombre d'occurence d'un mot #
#               dans une phrase. Le programme ne doit pas être sensible à la   #
#               casse (il ne doit pas prendre en compte les majuscules)        #
#    Exercice2 : faire le top3 des mots les plus utilisés et l'afficher        #
#                                                                              #
#                                                                              #
# *****************************************************************************/

const phrase =
  "Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi.";

//Exercice 1

function formate(str) {
  str = str.toLowerCase().replaceAll(/[.+,;!?-]/g, "");
  str = str.replaceAll(/\s+/g, " ");
  //console.log(str);
  var tab = str.split(" ");
  return tab;
}

function compteMot(phrase) {
  var tab = formate(phrase);
  var res = {};
  for (let i = 0; i < tab.length; i++) {
    const mot = tab[i];
    if (res[mot] === undefined) res[mot] = 0;
    res[mot] += 1;
  }
  return res;
}

function topThree(phrase) {
  var obj = compteMot(phrase);
  let tab = [];
  for (const key in obj) {
    let toto = {};
    toto.word = key;
    toto.frequency = obj[key];
    //console.log(toto);
    tab.push(toto);
  }
  tab.sort((a, b) => b.frequency - a.frequency);
  ;
  console.log(tab.slice(0, 3));
}

console.log(compteMot(phrase));
console.log(topThree(phrase));
