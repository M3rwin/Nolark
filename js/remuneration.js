window.addEventListener("load", function () 
{
    window.document.querySelector("#bouton").addEventListener("click", validEnvoi);
}
);

const fixe = 1100;
nfixe = 0;

function validEnvoi() {
    if (window.document.querySelector("#i_s20").value === "" || window.document.querySelector("#i_multitec").value === "" || (window.document.querySelector("#i_xspirit").value === ""))
    {
        alert("Le nombre de casques vendus doivent être saisis"); // On affiche un message
    } 
    else if (document.getElementById("ans_0").checked === false && document.getElementById("ans_5").checked === false && document.getElementById("ans_10").checked === false ) 
    {
        alert("Veuillez préciser votre ancienneté"); // On affiche un message
    } 
    else 
    {
        calculRemun(); 
    }
}

/**
 * 
 * @returns {undefined}
 */
function calculAnc()
{
    const anc510 = 0.03;
    const anc10 = 0.06;
    if (document.getElementById("ans_0").checked)
    {
        nfixe = fixe;
    }
    else if (document.getElementById("ans_5").checked)
    {
        nfixe = fixe + anc510 * fixe;
    }
    else
    {
        nfixe = fixe + anc10 * fixe;
    };
}

function calculRemun()
{
    calculAnc();
    calculMulti();
    calculXspirit();
    calculS20();
    alert("Votre rémunération est de : " + nfixe + "€");
}

function calculMulti()
{
    const multitec = 180;
    const caMulti020 = 0.04;
    const caMulti2050 = 0.06;
    const caMulti50 = 0.1;
    if (window.document.querySelector("#i_multitec").value > 50)
    {
        nfixe = nfixe + (caMulti020 * (20 * multitec));
        nfixe = nfixe + (caMulti2050 * (30 * multitec));
        nfixe = nfixe + (caMulti50 * ((window.document.querySelector("#i_multitec").value - 50) * multitec));
    }
    else if ((20 < window.document.querySelector("#i_multitec").value) && (window.document.querySelector("#i_multitec").value <= 50))
    {
        nfixe = nfixe + (caMulti020 * (20 * multitec));
        nfixe = nfixe + (caMulti2050 * ((window.document.querySelector("#i_multitec").value - 20) * multitec));
    }
    else
    {
        nfixe = nfixe + (caMulti020 * (window.document.querySelector("#i_multitec").value * multitec));
    };
    }
    
function calculXspirit()
{
    const xspirit = 350;
    const caXspirit = 0.06;
    if (window.document.querySelector("#i_xspirit").value > 50)
    {
        nfixe = nfixe + caXspirit * ((window.document.querySelector("#i_xspirit").value - 50) * xspirit);
    }
    
}

function calculS20()
{
    const s20 = 140;
    const caS20 = 0.02;
    if (window.document.querySelector("#i_s20").value  > 0)
    {
        nfixe = nfixe + (caS20 * (window.document.querySelector("#i_s20").value * s20));
    }
}
