const SPECTACLES = [
    {
        'name': 'Rouge Cerise (2022)',
        'date': '2022',
        'src': 'Rouge Cerise 2022.JPG',
        'auth': 'Gwenaëlle Anglade',
        'link': 'rouge-cerise-2022'
    },
    {
        'name': 'Bleue Nuit',
        'date': '2018',
        'src': 'Bleue Nuit.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'bleue-nuit'
    },
    /* {
        'name': 'Echec & Mat',
        'date': '2015',
        'src': 'Echec et Mat.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'echec-et-mat'
    }, */
    {
        'name': 'Green Paradise',
        'date': '2016',
        'src': 'Green Paradise.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'green-paradise'
    },
    {
        'name': 'Les Caprices de Nina',
        'date': '2013',
        'src': 'Les Caprices de Nina.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'les-caprices-de-nina'
    },
    {
        'name': 'Oui je le veux',
        'date': '2019',
        'src': 'Oui Je Le Veux.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'oui-je-le-veux'
    },
    {
        'name': 'Rouge Cerise',
        'date': '2017',
        'src': 'Rouge Cerise.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'rouge-cerise'
    },
    {
        'name': 'Un Pépin dans la Paille',
        'date': '2014',
        'src': 'Un Pepin dans la Paille.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'un-pepin-dans-la-paille'
    },
    {
        'name': 'Planête Terra',
        'date': '2014',
        'src': 'Planete Terra.png',
        'auth': 'Gwenaëlle Anglade',
        'link': 'planete-terra'
    }
];



/* 
<div class="galerie-item">
    <div class="galerie-overlay">
        Cliquez pour plus de photos
        </div>
    <img src="../static/resources/Galerie-Front/Bleue Nuit.png" style="width: 150px;height: 150px;">
    <div class="galerie-label">
        Bleue Nuit
    </div>
</div>
 */
function loadGalerie() {
    if (!document.getElementById("galerie_big_container")) return;
    let cont = document.getElementById("galerie_big_container");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (const e of SPECTACLES) {
        let div = document.createElement('div');
        div.classList.add('galerie-item');

        let over = document.createElement('div');
        over.classList.add('galerie-overlay');
        over.textContent = "Cliquez pour plus de photos";

        let img = document.createElement('img');
        img.src = `dist/Galerie-Front/${e['src']}`;
        img.style.width = "200px";
        img.style.height = "200px";


        let link = document.createElement('a');
        link.href = `galerie-${e['link']}.html`;


        let label = document.createElement('div');
        label.classList.add('galerie-label');
        label.textContent = e["name"]

        link.appendChild(over)
        link.appendChild(img)

        div.appendChild(link);
        //div.appendChild(over);
        div.appendChild(label);

        cont.appendChild(div);
    }


}


loadGalerie();
