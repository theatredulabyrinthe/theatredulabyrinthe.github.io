const N = 5;

function loadHome() {
    if (!document.getElementById("home-carousel")) return;

    let cont = document.getElementById("home-carousel");

    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    let ol = document.createElement('ol');
    ol.classList.add("carousel-indicators");

    for (let i = 1; i < N + 1; i++) {
        let li = document.createElement('li');
        li.setAttribute('data-target', '#carouselExampleIndicators');
        li.setAttribute('data-slide-to', `${i}`);

        if (i == 1) {
            li.classList.add('active');
        }
        ol.appendChild(li);
    }

    cont.appendChild(ol);
    let div = document.createElement('div');
    div.classList.add('carousel-inner');

    for (let i = 1; i < N + 1; i++) {
        let item = document.createElement('item');
        item.classList.add('carousel-item');

        if (i == 1) {
            item.classList.add('active');
        }

        let img = document.createElement('img');
        img.classList.add('d-block', 'w-100');
        img.src = `dist/home/${i}.jpg`;

        let label_cont = document.createElement('div');
        label_cont.classList.add("carousel-caption", "d-none", "d-md-block");
        label_cont.style.color = 'rgb(196,49,0)';
        label_cont.style.backgroundColor = 'rgba(0, 0, 0, 100)';
        let label_p = document.createElement('p');
        label_p.textContent = 'Dernière Création';
        let label_H3 = document.createElement('h3');
        label_H3.textContent = 'Liberté, Égalité, Olympe de Gouges';

        label_cont.appendChild(label_p);
        label_cont.appendChild(label_H3);
        item.appendChild(img);
        item.appendChild(label_cont);
        div.appendChild(item);
    }
    cont.appendChild(div)

    let gtleft = document.createElement('a');
    gtleft.classList.add('carousel-control-prev');
    gtleft.href = '#carouselExampleIndicators';
    gtleft.setAttribute('role', 'button');
    gtleft.setAttribute('data-slide', 'prev');

    let span11 = document.createElement('span');
    span11.classList.add('carousel-control-prev-icon');
    span11.setAttribute('aria-hidden', 'true');

    let span12 = document.createElement('span');
    span12.classList.add('sr-only');
    span12.textContent = "Previous";

    gtleft.appendChild(span11);
    gtleft.appendChild(span12);

    // cont.appendChild(gtleft);

    let gtright = document.createElement('a');
    gtright.classList.add('carousel-control-next');
    gtright.href = '#carouselExampleIndicators';
    gtright.setAttribute('role', 'button');
    gtright.setAttribute('data-slide', 'next');

    let span21 = document.createElement('span');
    span21.classList.add('carousel-control-next-icon');
    span21.setAttribute('aria-hidden', 'true');

    let span22 = document.createElement('span');
    span22.classList.add('sr-only');
    span22.textContent = "Next";

    gtright.appendChild(span21);
    gtright.appendChild(span22);

    // cont.appendChild(gtright);
}


window.onload = () => {
    loadHome();
    let modal = document.getElementById("bts-modal-btn");
    if (modal) {
        modal.click();
    }
}
