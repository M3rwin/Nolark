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


function calculer(anciennete, qteS20, qteXs, qteMult) {
    let anciennete = parseInt(window.document.querySelector("i_anciennete").value);
    let qteS20 = parseInt(window.document.querySelector("i_s20").value);
    let qteXs = parseInt(window.document.querySelector("i_xspirit").value);
    let qteMult = parseInt(window.document.querySelector("i_mult").value);
    
    let paie = primeAnciennete(anciennete) + comS20(qteS20) + comXs(qteXs) + comMult(qteMult);
    window.document.querySelector("result").innetHTML = "La rémunération sera de " + paie + "€";
    
}



window.addEventListener("load", function () {
    window.document.querySelector("#btn_calculer").addEventListener("click", caluler());
});

