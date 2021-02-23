// Sélection par élément
$("p").html("Merci de votre suggestion!");

// Sélection par "class"
var maClasse = ".feedback-error";
$(maClasse).html("Il a neigé aujourd'hui");

// Sélection par id
var nombre = "first";
// On veut obtenir "#first-error"
console.log("#" + nombre + "-error");
$("#" + nombre + "-error").html("Bonsoir");
