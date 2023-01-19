function  primeAncien(nbAnne) {
    let result = new Number();
    if (nbAnne >= 5 && nbAnne < 10) {
        result = 1100 + (1100 * 0.03);
        return result;
    } else if (nbAnne >= 10) {
        result = 1100 + (1100 * 0.06);
        return result;
    } else {
        return 1100;
    }
}

function comS20(qteS20) {
    const prixS20 = 140;
    const comS20 = 0.02;
    return qteS20 * prixS20 * comS20;
}

function comXs(qteXs) {
    const prixXs = 350;
    const comXs = 0.06;
    if (qteXs > 50) {
        return (qteXs - 50) * prixXs * comXs;
    } else {
        return 0;
    }
}

function comMult(qteMult) {
    const prixMult = 180;
    if (qteMult <= 20) {
        return qteMult * prixMult * 0.04;
    } else if (qteMult > 20 && qteMult <= 50) {
        return ((qteMult - 20) * prixMult * 0.06) + 20 * (prixMult * 0.04);
    } else if (qteMult > 50) {
        return ((qteMult - 50) * prixMult * 0.1) + 30 * (prixMult * 0.06) + 20 * (prixMult * 0.04);
    }
}

function calculer() {
    if (window.document.querySelector("i_anciennete") !== "" && window.document.querySelector("i_s20") !== "" &&
            window.document.querySelector("i_xspirit") !== "" && window.document.querySelector("i_mult") !== "") {
        let ancien = parseInt(window.document.querySelector("i_anciennete").value);
        let qS20 = parseInt(window.document.querySelector("i_s20").value);
        let qXs = parseInt(window.document.querySelector("i_xspirit").value);
        let qMult = parseInt(window.document.querySelector("i_mult").value);

        let paie = primeAnciennete(ancien) + comS20(qS20) + comXs(qXs) + comMult(qMult);
        alert("La rémunération sera de " + paie + "€");
    } else {
        alert("Vous devez remplir toute les cases");
    }

}


document.getElementById('bouton').onclick = calculer();



