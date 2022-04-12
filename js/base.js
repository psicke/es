/* --- Responsive menu ---*/
const menu = document.querySelector(".menu")
const menuBar = document.querySelector(".menu-bars")
const header = document.querySelector("header")

const Base = {
    menu: () => {
        menuBar.addEventListener("click", () => {
            menu.classList.toggle("show-menu")
            menuBar.classList.toggle("menu-toggled")
            if (window.scrollY < 200){
                header.classList.toggle("show-colors")
            }
        })
    },
    scroll: () => {
        window.addEventListener("scroll", () => {
            header.classList.toggle("show-colors", window.scrollY > 200)
        })
    },
    lazzy: () => {
        const images = document.querySelectorAll('[data-src]');

        function preloadImage(img) {
            const srcs = img.getAttribute("data-src");
            const srcsets = img.getAttribute("data-srcset");
            if (!srcs || !srcsets) {
                return
            }

            img.src = srcs;
            img.srcset = srcsets;
            img.onload = () => { img.removeAttribute('data-src'); img.removeAttribute('data-srcset') };
        }

        const imgOptions = {
            threshold: 0,
            rootMargin: '0px 0px 400px 0px',
        };

        const imgObserver = new IntersectionObserver(
            (entries, imgObserver) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        preloadImage(entry.target);
                        imgObserver.unobserve(entry.target);
                    }
                })
            }, imgOptions);

        images.forEach(image => {
            imgObserver.observe(image);
        })
    },
    footer: () => {
        const footer = document.querySelector("footer");
        const jeddevcenter = "https://jedlarios.github.io/jeddevcenter/index-es.html";
        let update = document.lastModified;

        footer.innerHTML = `

            <ul>
                <li><a href="">Términos y <br>Condiciones</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contáctanos</a></li>
            </ul>
            <div class="socials"></div>
            <div class="bottom">
                <span>&copy Copyright 2022 | <a href="${jeddevcenter}">Made By Jared Larios</a> | Actualizado: ${update} </span> 
            </div>
        `;
    },
}

export default Base