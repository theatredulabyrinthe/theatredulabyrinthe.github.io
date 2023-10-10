const SPECTACLES = [
    {
        'name': '3 spectacles en 1 !',
        'date': '2023',
        'src': 'enfants-2023.png',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': '3 spectacles en 1 !',
        'date': '2022',
        'src': 'enfants-2022.png',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Conte à l\'endroit, un compte à l\'envers',
        'date': '2018',
        'src': 'Conte_a_l_endroit.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Les Aventures d\'arthur',
        'date': '2018',
        'src': 'Les_aventures_d_arthur.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Les Petits Fantomes de Joséphine',
        'date': '2017',
        'src': 'Fantomes.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'La Pêche aux reves',
        'date': '2015',
        'src': 'La_peche_aux_reves.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'CLAP',
        'date': '2017',
        'src': 'CLAP.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': '4 3 2 1, un compte à l\'envers',
        'date': '2016',
        'src': '4_3_2_1.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'La Fée du robinet',
        'date': '2015',
        'src': 'La_fee_du_robinet.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Blanche Neige',
        'date': '2016',
        'src': 'Blanche_Neige.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'HOP HIP ou la boussole qui déboussole',
        'date': '2017',
        'src': 'Boussole.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Le Coffre Magique et La Répétition',
        'date': '2018',
        'src': 'Coffre_Magique.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Miss Terre et Boule de gomme',
        'date': '2018',
        'src': 'Miss_terre.jpg',
        'auth': 'Gwenaëlle Anglade'
    },
    {
        'name': 'Silence ça tourne',
        'date': '2016',
        'src': 'Silence_ca_tourne.jpg',
        'auth': 'Gwenaëlle Anglade'
    }
];

function loadSpectacle() {
    if (!document.getElementById("affiches_big_container")) return;
    let cont = document.getElementById("affiches_big_container");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (const e of SPECTACLES) {
        let div = document.createElement('div');
        div.classList.add('aff-cont');
        let img = document.createElement('img');
        img.classList.add('affiche');
        img.src = `dist/affiches/enfants/${e['src']}`;
        let over = document.createElement('div');
        over.classList.add('overlay');
        let txt = document.createElement('div');
        txt.classList.add('text-overlay');
        txt.textContent = e['name'] + ' - ' + 'Création ' + e['date'] + ' ' + e['auth'];
        let br1 = document.createElement('br');
        let br2 = document.createElement('br');
        let btn = document.createElement('button');
        btn.classList.add('btn', 'btn-light');
        btn.textContent = "Plus d'informations";

        /*txt.appendChild(br1);
        txt.appendChild(br2);
        txt.appendChild(btn);*/
        over.appendChild(txt);
        div.appendChild(img);
        div.appendChild(over);

        cont.appendChild(div);
    }


}


loadSpectacle();
