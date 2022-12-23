/***************************************************************************** #
#                                                                              #
#                                                                              #
#    Creator: Théau <theau.nicolas@cfanumeriqueoutremer.com>                   #
#                                                                              #
#    Created: 2013/11/18 13:37:42                                              #
#    Exercice1 :                                              #
#                                                                              #
#                                                                              #
# *****************************************************************************/

import prompts from "prompts";
import { sutom } from "./resource/sutom.js";

const word = sutom;

const getFromUser = async (word) => {
  const response = await prompts({
    type: "text",
    name: "value",
    message: "essai",
    validate: (value) =>
      value.length !== word.length ? `La taille du mot est incorrect` : true,
  });
  return response;
};

const game = async (word) => {
  console.log("Le mot a " + word.length + " lettres");
  for (let i = 0; i < 5; i++) {
    const temp = await getFromUser(word);
    //Ton code
    const splitedWord = word.split("");
    const splitedAnswr = temp.value.split("");
    console.log(temp);
  }
};

game(word);
