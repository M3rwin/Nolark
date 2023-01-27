window.addEventListener("load", function ()
{
    window.document.querySelector("#bouton").addEventListener("click", validEnvoi);
});

window.addEventListener("load", function () {
    window.document.querySelector("#btn_annuler").addEventListener("click", reinit);
});


function getId(id) {
    var valeur = window.document.querySelector(id).value;
    return valeur;
}

function validEnvoi() {
    if (window.document.querySelector("#km").value === "" || window.document.querySelector("#anciennete").value === "" || (window.document.querySelector("#accident").value === ""))
    {
        alert("Tout les champs doivent être rempli"); // On affiche un message
    } else
    {
        calculer();
    }
}
/**
 * Fonction qui renvoie une prime en fonction du nombre de kilomètres parcourus
 * @param {int} km
 * @returns {float}
 */
function distance(km) {
    const plafond = 900, primeKm = 0.01;
    var prime = primeKm * km;
    if (prime > plafond) {
        prime = plafond;
    } else {
        return prime;
    }
}

/**
 * Fonction qui renvoie une prime en fonction de l'ancienneté
 * @param {int} anne
 * @returns {float}
 */
function getAnciennete(anne) {
    const ancienMin = 4, primeBase = 300, primeSup = 30;
    var prime = 0.0;
    if (anne >= 4) {
        prime += primeBase;
    }
    for (i = 0; i < anne - 4; i++) {
        prime += primeSup;
    }
    return prime;
}


function penalite(accidents, prime) {
    if (accidents === 1) {
        return prime / 2;
    } else if (accidents === 2) {
        return prime / 3;
    } else if (accidents === 3) {
        return prime / 4;
    } else if (accidents === 0) {
        return prime;
    } else {
        console.warn("VOUS ÊTES VIRÉ");
        return 0;
    }
}

function reinit() {
    document.getElementById("reponse").remove();
}

/**
 * Fonction principale de calcul de prime
 * @returns {undefined}
 */
function calculer() {
    var kmParcouru = parseInt(getId("#km"));
    var nbAccident = parseInt(getId("#accident"));
    var anciennete = parseInt(getId("#anciennete"));
    var reponse = distance(kmParcouru) + getAnciennete(anciennete);
    
    
    reponse = penalite(nbAccident, reponse);
    
    
    let emplacement = window.document.createElement('h2');
    emplacement.id = "reponse";
    
    if (nbAccident > 3) {
        if (!!document.getElementById("reponse") === false) {
            emplacement.appendChild(window.document.createTextNode("Vous êtes viré noob"));
            window.document.querySelector('#formulaire').appendChild(emplacement);
        } else {
            document.querySelector('#reponse').innerHTML = "Vous êtes viré noob";
        }
        return null;
    }
    
    if (reponse === 0) {
        if (!!document.getElementById("reponse") === false) {
            emplacement.appendChild(window.document.createTextNode("Vous n'aurez pas de prime."));
            window.document.querySelector('#formulaire').appendChild(emplacement);
        } else {
            document.querySelector('#reponse').innerHTML = "Vous n'aurez pas de prime";
        }
    }
    
    if (nbAccident !== 0) {
        if (!!document.getElementById("reponse") === false) {
            emplacement.appendChild(window.document.createTextNode("Votre prime sera de " + reponse + "€, sans vos accidents vous auriez eu " + (distance(kmParcouru) + getAnciennete(anciennete)) + "€"));
            window.document.querySelector('#formulaire').appendChild(emplacement);
        } else {
            document.querySelector('#reponse').innerHTML = "Votre prime sera de " + reponse + "€, sans vos accidents vous auriez eu " + (distance(kmParcouru) + getAnciennete(anciennete)) + "€";
        }

    } else {
        if (!!document.getElementById("reponse") === false) {
            emplacement.appendChild(window.document.createTextNode("Votre prime sera de " + reponse + "€."));
            window.document.querySelector('#formulaire').appendChild(emplacement);
        } else {
            document.querySelector('#reponse').innerHTML = "Votre prime sera de " + reponse + "€.";
        }

    }

}