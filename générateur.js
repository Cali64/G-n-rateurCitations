console.log("hello");

let newcitation = document.querySelector('button')
console.log(newcitation);

let spaceCitation = document.getElementById('space-citation');
console.log(spaceCitation);



var citations = [
    "Réfléchissez avant d'encenser les uns en leur vouant une admiration sans bornes et de mépriser les autres en priant pour ne jamais leur ressembler",
    "Le jamais assez est destructeur est fera courir à la perte.",
    "La meilleure façon pour accéder au bonheur est de placer la barre très bas.",
    "Les habitudes sont les intérets composés de l'amélioration de soi.",
    "Le temps amplifie la marge enter réuissite et échec.",
    "La vraie liberté c'est quand personne ne vous attend, la vraie solitude, c'est quand vous attendez n'importe qui",
    "La folie c'est de refaire la meme chose et d'en attendre un résultat différent.",
    "Si vous n'établissez pas vos priorités, quelqu'un le fera pour vous.",
    "Si ce n'est pas clairement oui, alors c'est non. ",
    "Chez un hommme intelligent, la routine est un signe d'ambition.",
    "Ecoutez ce que le marché dit aux autres, pas ce que les autres disent du marché.",
    "Tout le monde à un plan jusqu'au moment où ils reçoivent une droite au visage.",
    "La sagesse dans la vie consisite à enlever ce qui n'est pas essentiel.",
    "Focalisez-vous sur le moment présent, il n'y a que ça qui compte.",
    "Le pauvre n'est pas celui qui a peu, mais celui qui veut toujours plus."
];

console.log(citations);

function nouvelleCitation(){
    const index= Math.floor(Math.random() * citations.length);
    return citations[index];
};

newcitation.addEventListener('click', function(){
    var citations = nouvelleCitation();
    spaceCitation.textContent = citations;

});







