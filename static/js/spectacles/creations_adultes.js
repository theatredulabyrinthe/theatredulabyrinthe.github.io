const SPECTACLES = [
    {
        'name': 'Liberté, Égalité, Olympe de Gouges',
        'date': '2023',
        'src': 'olympe3.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': ''
    },
    {
        'name': 'Liberté, Égalité, Olympe de Gouges',
        'date': '2023',
        'src': 'olympe2.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': ''
    },
    {
        'name': 'Liberté, Égalité, Olympe de Gouges',
        'date': '2022',
        'src': 'olympe.png',
        'auth': 'Gwenaëlle Anglade',
        'link': ''
    },
    {
        'name': 'Rouge Cerise - reprise',
        'date': '2022',
        'src': 'rouge-cerise-2022.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'rouge-cerise-2022'
    },
    {
        'name': 'Bleue Nuit',
        'date': '2018',
        'src': 'Bleue_Nuit_White.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'bleue-nuit'
    },
    {
        'name': 'Echec & Mat',
        'date': '2015',
        'src': 'Echec_Mat.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'echec-et-mat'
    },
    {
        'name': 'Green Paradise',
        'date': '2016',
        'src': 'Green_Paradise.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'green-paradise'
    },
    {
        'name': 'Les Caprices de Nina',
        'date': '2013',
        'src': 'Les_caprices_de_nina.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'les-caprices-de-nina'
    },
    {
        'name': 'Oui je le veux',
        'date': '2019',
        'src': 'Oui_V2_WEB.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'oui-je-le-veux'
    },
    {
        'name': 'Rouge Cerise',
        'date': '2017',
        'src': 'Rouge_cerise.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'rouge-cerise'
    },
    {
        'name': 'Un Pépin dans la Paille',
        'date': '2014',
        'src': 'Un_pepin_dans_la_paille.jpg',
        'auth': 'Gwenaëlle Anglade',
        'link': 'un-pepin-dans-la-paille'
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
        img.src = `dist/affiches/adultes/${e['src']}`;
        let over = document.createElement('div');
        over.classList.add('overlay');
        let txt = document.createElement('div');
        txt.classList.add('text-overlay');
        txt.textContent = e['name'] + ' - ' + 'Création ' + e['date'] + ' ' + e['auth'];
        let br1 = document.createElement('br');
        let br2 = document.createElement('br');
        let btn = document.createElement('a');
        btn.href = `${e['link']}.html`;


        btn.classList.add('clk');
        btn.textContent = "Plus d'informations";

        txt.appendChild(br1);
        txt.appendChild(br2);
        txt.appendChild(btn);
        over.appendChild(txt);
        div.appendChild(img);
        div.appendChild(over);

        cont.appendChild(div);
    }


}


loadSpectacle();
