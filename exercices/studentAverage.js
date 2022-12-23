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

console.log("\n Exercice 1 :");
function moyenneClasse(classe) {
  //On crée un tableau contenant les moyennes de chaque élève
  var moy_eleves = [];
  var nb_eleves = 0;

  //On parcourt l'objet "classe"
  classe.forEach((element) => {
    //On calcule la moyenne de chaque élève grâce au tableau de notes de l'objet "classe"
    let notes_eleve = element.note;
    moyenne = calculMoyenne(notes_eleve);
    console.log(`La moyenne de ${element.name} est de : ${moyenne}`);
    //On ajoute la moyenne de chaque élève au tableau
    moy_eleves.push(moyenne);
    nb_eleves++;
  });

  //Les moyennes des élèves sont :
  console.log(`Les moyennes des élèves sont : ${moy_eleves}`);

  //On calcule la moyenne de la classe
  moyenne = calculMoyenne(moy_eleves).toFixed(2);
  console.log(`La moyenne de la classe est de : ${moyenne}`);
}

function calculMoyenne(notes) {
  let moyenne = 0;
  let nb_notes = 0;
  //On parcourt le tableau de notes de chaque élève
  notes.forEach((element) => {
    moyenne += element;
    nb_notes++;
  });
  moyenne = moyenne / nb_notes;
  return moyenne;
}
moyenneClasse(students);

//Exercice 2

console.log("\n Exercice 2 :");
function ajouteMoyenne(students) {
  var students_new = students;
  students.forEach((element) => {
    element.moyenne = calculMoyenne(element.note);
  });
  return students_new;
}

console.log(ajouteMoyenne(students));

//Exercices 3 et 4

console.log("\n Exercice 3 :");
function permute(tab, i) {
  [tab[i], tab[i + 1]] = [tab[i + 1], tab[i]];
  return tab;
}

function triClasse() {
  let cl = ajouteMoyenne(students);
  i = 0;
  while (i < cl.length - 1) {
    if (cl[i].moyenne > cl[i + 1].moyenne) {
      permute(cl, i);
      i = 0;
    } else i++;
  }
  return cl;
}
console.log(triClasse());

console.log("\n Exercice 4 :");
function affichePhrase() {
  tab = triClasse().reverse();

  for (const [index, element] of tab.entries()) {
    switch (index) {
      case 0:
        console.log(
          `${element.name} est à la ${index + 1}re place. Félicitations !`
        );
        break;
      case 1:
        console.log(`${element.name} est à la ${index + 1}e place. Bravo !`);
        break;
      case 2:
        console.log(
          `${element.name} est à la ${index + 1}e place. C'est bien !`
        );
        break;
      default:
        console.log(
          `${element.name} est à la ${index + 1}e place. Continue tes efforts !`
        );
        break;
    }
  }
}

affichePhrase();
