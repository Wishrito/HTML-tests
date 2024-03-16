let TitreOnglet = document.title;
let IframeChangeSRC = document.getElementById('IframeChangeSrc');

function SwitchIframeSrc(variable) {
    switch (variable) {
        case 1:
            IframeChangeSRC.src = "./pages/fichier1.html"; // Modification de l'attribut src de l'iframe
            TitreOnglet = "Fichier 1";
            break;
        case 2:
            IframeChangeSRC.src = "./pages/fichier2.html";
            TitreOnglet = "Fichier 2";
            break;
        case 3:
            IframeChangeSRC.src = "./pages/fichier3.html";
            TitreOnglet = "Fichier 3";
            break;
        case 4:
            IframeChangeSRC.src = "./pages/fichier4.html";
            TitreOnglet = "Fichier 4";
            break;
    }
    document.title = TitreOnglet; // Modification du titre de la page
    console.log(IframeChangeSRC.src);
}
