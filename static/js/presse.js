const NUM_ART = [[1, 2, 3, 4, 5], [21, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];


function loadArticle() {
    if (!document.getElementById("presse_container")) return;
    let cont = document.getElementById("presse_container");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    for (const elt of NUM_ART) {
        let col = document.createElement('div');
        col.classList.add('column');
        for (const n of elt) {
            const src = `dist/articles/${n}.jpg`;
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


loadArticle();
