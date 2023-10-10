const ATELIERS = [
    {
        'niveau': 'Enfants',
        'scolaire': 'Primaires',
        'jour': 'Mercredi',
        'depart': '10h30',
        'fin': '12h',
        'lieu': 'Chapelle Saint Julien, 1 rue Saint Julien',
        'tarif': '260',
        'date-rentree': '6 Septembre 2023',
        'img-src': 'dist/front/enfants.jpg'
    },
    {
        'niveau': 'Ados',
        'scolaire': 'Collège',
        'jour': 'Mercredi',
        'depart': '14h',
        'fin': '15h30',
        'lieu': 'Chapelle Saint Julien, 1 rue Saint Julien',
        'tarif': '260',
        'date-rentree': '6 Septembre 2023',
        'img-src': 'dist/front/ado1.jpg'
    },
    {
        'niveau': 'Adultes',
        'scolaire': '',
        'jour': 'Mercredi',
        'depart': '20h30',
        'fin': '22h30',
        'lieu': 'Chapelle Saint Julien, 1 rue Saint Julien',
        'tarif': '330',
        'date-rentree': '6 Septembre 2023',
        'img-src': 'dist/front/master.jpg'
    },
    {
        'niveau': 'Ados Confirmés',
        'scolaire': 'Collège - Lycée',
        'jour': 'Mardi',
        'depart': '18h30',
        'fin': '20h',
        'lieu': 'Maison pour tous de la Cité, 52 impasse Huysmans Rechèvres',
        'tarif': '270',
        'date-rentree': '6 Septembre 2023',
        'img-src': 'dist/front/conf.jpg'
    },
    {
        'niveau': 'Adultes',
        'scolaire': '',
        'jour': 'Mardi',
        'depart': '20h30',
        'fin': '22h30',
        'lieu': 'Maison pour tous de la Cité, 52 impasse Huysmans Rechèvres',
        'tarif': '330',
        'date-rentree': '5 Septembre 2023',
        'img-src': 'dist/front/adultes2.jpg'
    }
];

function loadAteliers() {
    if (!document.getElementById("ateliers_container")) return;
    let cont = document.getElementById("ateliers_container");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (const elt of ATELIERS) {
        let card = document.createElement('div');
        card.classList.add('flip-box', 'card')
        card.style.width = '18rem';
        card.style.marginRight = '1.3%';
        let inner = document.createElement('div');
        inner.classList.add('flip-box-inner');
        let front = document.createElement('div');
        front.classList.add('flip-box-front', 'card');
        let img = document.createElement('input');
        img.type = "image";
        img.style.height = "100%";
        img.style.opacity = "0.9";
        img.style.borderRadius = "4px";
        img.src = elt['img-src'];
        let h5 = document.createElement('h5');
        h5.classList.add('img-title');
        let back = document.createElement('div');
        back.classList.add('flip-box-back', 'card');
        let body = document.createElement('div');
        body.classList.add('card-body');
        let title = document.createElement('h5');
        title.classList.add('card-title');
        let txt = document.createElement('p');

        h5.textContent = `atelier ${elt['niveau']}`.toUpperCase();
        title.textContent = `Atelier ${elt['niveau']}`;
        const jour = `Le <span style="font-weight: bold;">${elt['jour']}</span>`;
        const horaire = `de <span style="font-weight: bold;">${elt['depart']} à ${elt['fin']}</span>`;
        const lieu = `à la <span style="font-style: italic;">${elt['lieu']}</span>`;
        txt.innerHTML = `${jour} ${horaire} <br> ${lieu}`;

        if (elt['scolaire'] != '') {
            txt.innerHTML = `Niveau ${elt['scolaire']} <br>` + txt.innerHTML;
        }

        front.appendChild(img);
        front.appendChild(h5);
        body.appendChild(title);
        body.appendChild(txt);
        back.appendChild(body);
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        cont.appendChild(card);
    }
}
loadAteliers();


function loadRentree() {
    if (!document.getElementById("rentree_container")) return;
    let cont = document.getElementById("rentree_container");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (const elt of ATELIERS) {
        let card = document.createElement('div');
        card.classList.add('flip-box', 'card')
        card.style.width = '18rem';
        card.style.marginRight = '1.3%';
        let inner = document.createElement('div');
        inner.classList.add('flip-box-inner');
        let front = document.createElement('div');
        front.classList.add('flip-box-front', 'card');
        let img = document.createElement('input');
        img.type = "image";
        img.style.height = "100%";
        img.style.opacity = "0.9";
        img.style.borderRadius = "4px";
        img.src = elt['img-src'];
        let h5 = document.createElement('h5');
        h5.classList.add('img-title');
        let back = document.createElement('div');
        back.classList.add('flip-box-back', 'card');
        let body = document.createElement('div');
        body.classList.add('card-body');
        let title = document.createElement('h5');
        title.classList.add('card-title');
        let txt = document.createElement('p');

        h5.textContent = `atelier ${elt['niveau']}`.toUpperCase();
        title.textContent = `Atelier ${elt['niveau']}`;
        const date = `<span style="font-weight: bold;">${elt['date-rentree']}</span>`;
        const intro = `<span style="font-style: italic;">Cours d'essai + inscription : </span>`;
        const horaire = `de ${elt['depart']} à ${elt['fin']}`;
        txt.innerHTML = `<br> ${intro} ${date} <br> (${horaire})`;

        if (elt['scolaire'] != '') {
            txt.innerHTML = `Niveau ${elt['scolaire']} <br>` + txt.innerHTML;
        }

        front.appendChild(img);
        front.appendChild(h5);
        body.appendChild(title);
        body.appendChild(txt);
        back.appendChild(body);
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        cont.appendChild(card);
    }
}
loadRentree();


function loadTarifs() {
    if (!document.getElementById("tarifs_container")) return;
    let cont = document.getElementById("tarifs_container");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (const elt of ATELIERS) {
        let card = document.createElement('div');
        card.classList.add('flip-box', 'card')
        card.style.width = '18rem';
        card.style.marginRight = '1.3%';
        let inner = document.createElement('div');
        inner.classList.add('flip-box-inner');
        let front = document.createElement('div');
        front.classList.add('flip-box-front', 'card');
        let img = document.createElement('input');
        img.type = "image";
        img.style.height = "100%";
        img.style.opacity = "0.9";
        img.style.borderRadius = "4px";
        img.src = elt['img-src'];
        let h5 = document.createElement('h5');
        h5.classList.add('img-title');
        let back = document.createElement('div');
        back.classList.add('flip-box-back', 'card');
        let body = document.createElement('div');
        body.classList.add('card-body');
        let title = document.createElement('h5');
        title.classList.add('card-title');
        let txt = document.createElement('p');

        h5.textContent = `atelier ${elt['niveau']}`.toUpperCase();
        title.textContent = `Atelier ${elt['niveau']}`;
        const tarif = `<span style="font-weight: bold;">${elt['tarif']} €/an</span>`
        const adhesion = `<span style="font-weight: bold;">+20 €</span> d'adhésion à l'association`
        const x3 = `<span style="font-style: italic;">payable en 3 fois sur 3 mois</span>`;
        txt.innerHTML = `${tarif}<br>${adhesion}<br>${x3}`;

        if (elt['scolaire'] != '') {
            txt.innerHTML = `Niveau ${elt['scolaire']} <br>` + txt.innerHTML;
        }

        front.appendChild(img);
        front.appendChild(h5);
        body.appendChild(title);
        body.appendChild(txt);
        back.appendChild(body);
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        cont.appendChild(card);
    }
}
loadTarifs();
