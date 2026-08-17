
// =========================================================
// NAVEGAÇÃO SUAVE
// =========================================================

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {

    link.addEventListener('click', () => {

        const menu = document.querySelector('#mainMenu');

        // Fecha o menu do Bootstrap no celular
        if (menu.classList.contains('show')) {

            const bootstrapMenu =
                bootstrap.Collapse.getInstance(menu);

            if (bootstrapMenu) {
                bootstrapMenu.hide();
            }

        }

    });

});


// =========================================================
// ANIMAÇÃO DAS SEÇÕES
// =========================================================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('section-visible');

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {
    observer.observe(section);
});


// =========================================================
// ANO AUTOMÁTICO DO FOOTER
// =========================================================

// Cria o ano automaticamente caso exista
// um elemento com a classe .current-year

const currentYear =
    document.querySelector('.current-year');

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


// =========================================================
// EFEITO NO HEADER AO ROLAR
// =========================================================

const header =
    document.querySelector('.site-header');


window.addEventListener('scroll', () => {

    if (window.scrollY > 30) {

        header.classList.add('header-scrolled');

    } else {

        header.classList.remove('header-scrolled');

    }

});