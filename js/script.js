$(function(){
    $(".accordion").click(function(){
        $(this).find(".card-body").toggle("hide");
    });

    $('lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.single-item').slick();


    var eleves = [
        {
            "nom" : "Rip",
            "prenom": "Julien",
            "ville": "Lyon"
        },
        {
            "nom" : "Dupont",
            "prenom": "Sarah",
            "ville": "Marseille"
        },
        {
            "nom" : "Pony",
            "prenom": "Theo",
            "ville": "Montpellier"
        },
        {
            "nom" : "Aucun",
            "prenom": "noPrenom",
            "ville": "noVille"
        },
        {
            "nom" : "Batman",
            "prenom": "BatmanII",
            "ville": "Gotham"
        }
    ];

    $.each(eleves, function( index, value ) {


        var tpl = $("#mondivamoi").html();
        var generatedHTML = Mustache.render(tpl, value);

        //cibler l'endroit de l'ajout et on ajoute
        $("#listeEleve .container").append(generatedHTML);
    });

    //Portée des variables
    //
    // Selon l'endroit où la variable est déclarée, celle-ci pourra être accessible de partout ou
    // bien uniquement que dans la fonction dans laquel elle a été déclaré, on parle de « portée » d'une variable.
    // Lorsque la variable est déclarée sans le mot clé var, cad de façon implicite,
    // elle est accessible de partout (n'importe quelle fonction du script peut faire appel à cette variable). On parle
    // alors de variable globale

});