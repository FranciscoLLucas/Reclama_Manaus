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
        if (window.VLibras && window.VLibras.Widget) {
            try {
                window.VLibras.Widget.update();
            } catch (e) {
                console.warn("VLibras não conseguiu atualizar:", e);
            }
        }
    };
};

document.body.appendChild(script);

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
const body = document.body;

if (toggleBtn) {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        toggleBtn.textContent = '☀️';
        toggleBtn.setAttribute('aria-label', 'Ativar modo claro');
    } else {
        toggleBtn.textContent = '🌙';
        toggleBtn.setAttribute('aria-label', 'Ativar modo noturno');
    }

    toggleBtn.addEventListener('click', () => {
        const current = body.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        toggleBtn.setAttribute(
            'aria-label',
            newTheme === 'dark' ? 'Ativar modo claro' : 'Ativar modo noturno'
        );
        if (window.updateVLibras) updateVLibras();
    });
}

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

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
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

function mostrar(){
    var inputPass = document.getElementById('sppassword');
    var btnShowpass = document.getElementById('toque');

    if (inputPass.type === 'password'){
        inputPass.setAttribute('type','text');
        btnShowpass.classList.replace('bi-eye','bi-eye-slash');
    } else {
        inputPass.setAttribute('type','password');
        btnShowpass.classList.replace('bi-eye-slash','bi-eye');
    }
}

function mostrarsi(){
    var inputPasssi = document.getElementById('sipassword');
    var btnShowpasssi = document.getElementById('toquesi');

    if (inputPasssi.type === 'password'){
        inputPasssi.setAttribute('type','text');
        btnShowpasssi.classList.replace('bi-eye','bi-eye-slash');
    } else {
        inputPasssi.setAttribute('type','password');
        btnShowpasssi.classList.replace('bi-eye-slash','bi-eye');
    }
}

const reportForm = document.getElementById('reportForm');

if (reportForm) {
    reportForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Denúncia enviada com sucesso!");
        reportForm.reset();
    });
}
firebase.auth().onAuthStateChanged((user) => {
    const authBtn = document.getElementById('auth-btn');

    if (authBtn) {
        if (user) {
            console.log("Usuário logado: ", user.email);
            authBtn.textContent = "Perfil";
            authBtn.onclick = () => window.location.href = 'perfil.html';
        } else {
            console.log("Usuário não logado");
            authBtn.textContent = "Entrar";
            authBtn.onclick = () => window.location.href = 'cadUser.html';
        }
        if (window.updateVLibras) updateVLibras();
    }
});
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar .menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        if (menu.style.left === "0px") {
            menu.style.left = "-100%"; // fechar
        } else {
            menu.style.left = "0px"; // abrir
        }
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll(".navbar .menu li a").forEach(link => {
    link.addEventListener("click", () => {
        menu.style.left = "-100%"; // fecha corretamente
    });
});