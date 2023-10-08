const langsElem = document.querySelector('.multilanguage');


if (langsElem) {
    const openBtn = langsElem.querySelector('button');
    const label = langsElem.querySelector('button label');
    const langs = langsElem.querySelectorAll('li a');

    openBtn.addEventListener('click', (е) => {
        langsElem.classList.toggle('_open');
    })


    if (langs.length)
        langs.forEach(lang => {
            lang.addEventListener('click', (e) => {
                e.preventDefault();

                label.textContent = lang.textContent
                langsElem.classList.remove('_open')

                langs.forEach(item => {
                    item.classList.remove('_selected')
                })

                lang.classList.add('_selected')
            })
        })
}
