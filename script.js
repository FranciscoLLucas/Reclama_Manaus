/* ==========================
   VLibras
========================== */
const vlibraContainer = document.createElement("div");
vlibraContainer.innerHTML = `
  <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
  </div>
`;
document.body.appendChild(vlibraContainer);

const script = document.createElement("script");
script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";

script.onload = () => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');

    window.updateVLibras = () => {
        if (window.VLibras?.Widget) {
            try {
                window.VLibras.Widget.update();
            } catch (e) {
                console.warn("VLibras atualização falhou:", e);
            }
        }
    };
};

document.body.appendChild(script);


/* ==========================
   Tema Escuro / Claro
========================== */
(function() {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute('data-theme', 'dark');
    }
})();

const toggleBtn = document.getElementById('toggle-theme');
const bodyEl = document.body;

if (toggleBtn) {
    const currentTheme = bodyEl.getAttribute('data-theme');
    toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    toggleBtn.addEventListener('click', () => {
        const current = bodyEl.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';

        bodyEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';

        if (window.updateVLibras) updateVLibras();
    });
}


/* ==========================
   Daltonismo
========================== */
const colorblindSelect = document.getElementById('colorblind-mode');

if (colorblindSelect) {
    const savedMode = localStorage.getItem('colorblind-mode') || 'none';
    document.body.setAttribute('data-colorblind', savedMode);
    colorblindSelect.value = savedMode;

    colorblindSelect.addEventListener('change', (e) => {
        const mode = e.target.value;
        document.body.setAttribute('data-colorblind', mode);
        localStorage.setItem('colorblind-mode', mode);

        if (window.updateVLibras) updateVLibras();
    });
}


/* ==========================
   jQuery: Navbar e animações
========================== */
$(document).ready(function(){
    $(window).scroll(function(){
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    new Typed(".typing", {
        strings:["Transparência!", "Melhorias!", "Eficiência!"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    new Typed(".typing-2", {
        strings:["Transparência!", "Melhorias!", "Eficiência!"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{ items:1, nav:false },
            600:{ items:2, nav:false },
            1000:{ items:3, nav:false }
        }
    });
});


/* ==========================
   Mostrar senha
========================== */
function mostrar(){
    const input = document.getElementById('sppassword');
    const btn = document.getElementById('toque');
    const isPass = input.type === 'password';

    input.type = isPass ? 'text' : 'password';
    btn.classList.replace(isPass ? 'bi-eye' : 'bi-eye-slash', isPass ? 'bi-eye-slash' : 'bi-eye');
}

function mostrarsi(){
    const input = document.getElementById('sipassword');
    const btn = document.getElementById('toquesi');
    const isPass = input.type === 'password';

    input.type = isPass ? 'text' : 'password';
    btn.classList.replace(isPass ? 'bi-eye' : 'bi-eye-slash', isPass ? 'bi-eye-slash' : 'bi-eye');
}


/* ==========================
   Formulário de denúncia
========================== */
const reportForm = document.getElementById('reportForm');

if (reportForm) {
    reportForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Denúncia enviada com sucesso!");
        reportForm.reset();
    });
}


/* ==========================
   LOGIN / PERFIL — BOTÃO
========================== */
firebase.auth().onAuthStateChanged(user => {
    const authBtn = document.getElementById("auth-btn");
    if (!authBtn) return;

    if (user) {
        authBtn.textContent = "Perfil";
    } else {
        authBtn.textContent = "Entrar";
    }

    if (window.updateVLibras) updateVLibras();
});

// redirecionamento fixo e confiável
document.getElementById("auth-btn")?.addEventListener("click", (event) => {
    event.preventDefault();

    const user = firebase.auth().currentUser;

    window.location.href = user ? "perfil.html" : "cadUser.html";
});


/* ==========================
   Menu Mobile
========================== */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar .menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.style.left = (menu.style.left === "0px") ? "-100%" : "0px";
    });
}

document.querySelectorAll(".navbar .menu li a").forEach(link => {
    link.addEventListener("click", () => {
        menu.style.left = "-100%";
    });
});
