const GREEN_PARADISE = [[1, 2, 3, 4], [5, 6, 13], [8, 9, 10, 11], [12, 7, 14]];
const OUI_JE_LE_VEUX = [[1, 2, 3, 4, 5, 6, 7], [9, 10, 11, 12, 13, 14, 15], [18, 19, 20, 21, 22, 23, 24], [26, 27, 28, 29, 30, 25, 16, 17, 8]];
const BLEUE_NUIT = [[1, 2, 3, 4, 5, 6, 7, 8, 17], [9, 10, 11, 12, 13, 14, 15, 16], [18, 19, 20, 21, 22, 23, 24, 25, 33], [26, 27, 28, 29, 30, 31, 32, 34]];
const ROUGE_CERISE = [[1, 2, 3, 4, 5, 6, 7], [9, 10, 11, 12, 13, 14, 15, 8], [18, 19, 20, 21, 22, 23, 24, 17], [26, 27, 28, 29, 30, 25, 16, 31]];
const ROUGE_CERISE_2022 = [[1, 2,  3, 4,  5,  6, 7, 32], [9, 10, 11, 12, 13, 14, 15, 8], [18, 19, 20, 21, 22, 23, 24, 17], [26, 27, 28, 29, 30, 25, 16, 31]];
const PEPIN = [[1, 2, 5], [3, 4], [6, 7, 8], [9, 10]];

function loadGalerie(name, arr, cont) {

    while (cont.firstChild) { cont.removeChild(cont.firstChild); }

    for (const elt of arr) {
        let col = document.createElement('div');
        col.classList.add('column');
        for (const n of elt) {
            const src = `dist/galerie/${name}/${n}.avif`; //`../resources/articles/${n}.jpg`;
            const id = `modal_${n}`;

            let img = document.createElement('img');
            img.src = src;
            img.style.width = "100%";
            img.setAttribute('data-toggle', 'modal');
            img.setAttribute('data-target', `#${id}`);


            let modal = document.createElement('div');
            modal.classList.add('modal', 'fade');
            modal.id = id;
            modal.tabIndex = "-1";
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-labelledby', `${id}Title`);
            modal.setAttribute('aria-hidden', 'true');

            let content = document.createElement('div');
            content.classList.add('modal-dialog', 'modal-dialog-centered');
            content.setAttribute('role', 'document');

            let img_content = document.createElement('img');
            img_content.src = src;
            img_content.style.width = "100%";

            content.appendChild(img_content);
            modal.appendChild(content);
            col.appendChild(img);
            col.appendChild(modal);
        }
        cont.appendChild(col);
    }
}

cont = 0
name_ = 0
arr = 0

if (document.getElementById("green_container")) {
    cont = document.getElementById("green_container")
    name_ = "Green_paradise";
    arr = GREEN_PARADISE;
} else if (document.getElementById("bleu_container")) {
    cont = document.getElementById("bleu_container")
    name_ = "Bleue_nuit";
    arr = BLEUE_NUIT;
} else if (document.getElementById("oui_container")) {
    cont = document.getElementById("oui_container")
    name_ = "Oui_je_le_veux";
    arr = OUI_JE_LE_VEUX;
} else if (document.getElementById("rouge_container")) {
    cont = document.getElementById("rouge_container")
    name_ = "Rouge_cerise";
    arr = ROUGE_CERISE;
} else if (document.getElementById("rouge_2022_container")) {
    cont = document.getElementById("rouge_2022_container")
    name_ = "Rouge_cerise_2022";
    arr = ROUGE_CERISE_2022;
} else if (document.getElementById("pepin_container")) {
    cont = document.getElementById("pepin_container")
    name_ = "Un_Pepin_dans_la_paille";
    arr = PEPIN;
}

loadGalerie(name_, arr, cont);
