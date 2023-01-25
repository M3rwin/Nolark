window.addEventListener("load", function () 
{
    window.document.querySelector("#bouton").addEventListener("click", validEnvoi);
}
);




function getId(id){
    var valeur = window.document.querySelector(id).value;
    return valeur;
}

function validEnvoi() {
    if (window.document.querySelector("#km").value === "" || window.document.querySelector("#anciennete").value === "" || (window.document.querySelector("#accident").value === ""))
    {
        alert("Tout les champs doivent être rempli"); // On affiche un message
    } 
    else 
    {
        calculer(); 
    }
}
/**
 * Fonction qui renvoie une prime en fonction du nombre de kilomètres parcourus
 * @param {int} km
 * @returns {float}
 */
function distance(km){
    const plafond = 900, primeKm = 0.01;
    var prime=primeKm*km;
    if (prime>plafond){
        prime = plafond;
    }
    else{
        return prime;
    }
}

/**
 * Fonction qui renvoie une prime en fonction de l'ancienneté
 * @param {int} anne
 * @returns {float}
 */
function getAnciennete(anne){
    const ancienMin=4, primeBase=300, primeSup=30;
    var prime=0.0;
    if(anne>=4){
        prime+=primeBase;
    }
    for (i=0; i<anne-4; i++){
        prime+=primeSup;
    }
    return prime;
}


function penalite(accidents, prime){
    if(accidents===1){
        return prime/2;
    }
    else if(accidents===2){
        return prime/3;
    }
    else if(accidents===3){
        return prime/4;
    }
    else if(accidents===0){
        return null;
    }
    else{
        console.warn("VOUS ÊTES VIRÉ");
    }
}


function calculer(){
    var kmParcouru = parseInt(getId("#km"));
    var nbAccident = parseInt(getId("#accident"));
    var anciennete = parseInt(getId("#anciennete"));
    var reponse = distance(kmParcouru) + penalite(nbAccident) + getAnciennete(anciennete);
    alert(reponse);
}