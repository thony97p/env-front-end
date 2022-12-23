/***************************************************************************** #
#                                                                              #
#                                                                              #
#    Creator: Théau <theau.nicolas@cfanumeriqueoutremer.com>                   #
#                                                                              #
#    Created: 2013/11/18 13:37:42                                              #
#    Exercice1 : faire la moyenne de la classe                                 #
#    Exercice2 : faire la moyenne pour chaque élève et ajouter le résultat     #
#                dans l'objet, puis afficher l'objet                           #
#    Exercice3 : Trier les élèves du meilleur au moins bon                     #
#    Exercice4 : Afficher le top 3 des élèves avec une petite phrase           #
#    Exercice5 : Ajouter puis afficher dans le podium la pire et la meilleure  #
#                note                                                          #
#                                                                              #
#                                                                              #
# *****************************************************************************/

const students = [
  {
    name: "John",
    note: [1, 20, 13, 17, 4],
  },
  {
    name: "Jane",
    note: [17, 13, 12, 10, 9],
  },
  {
    name: "Sophie",
    note: [17, 12, 14, 15, 14],
  },
  {
    name: "Marc",
    note: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    note: [18, 17, 18, 19, 12],
  },
];

//Exercice 1
const average = (tab) => {
  var total = 0;
  var n = 0;
  var i = 0;
  while (i < tab.length) {
    var j = 0;
    while (j < tab[i].note.length) {
      total += tab[i].note[j];
      j++;
      n++;
    }
    i++;
  }
  return total / n;
};

console.log("\nExercice 1 : ");
console.log(average(students));

//Exercice 2

const averageStudent = (tab) => {
  var i = 0;
  while (i < tab.length) {
    var total = 0;
    var j = 0;
    while (j < tab[i].note.length) {
      total += tab[i].note[j];
      j++;
    }
    tab[i].moyenne = total / j;
    i++;
  }
  return tab;
};

console.log("\nExercice 2 : ");
console.log(averageStudent(students));

//Exercice 3

const sortAvg = (tab) => {
  tab.sort((a, b) => b.average - a.average);
  return tab;
};

console.log("\nExercice 3 : ");
console.log(sortAvg(averageStudent(students)));

//Exercice 4
const TopThree = (tab) => {
  return tab.splice(0, 3);
};
