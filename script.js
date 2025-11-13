(function() {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Se tem tema salvo no localStorage, aplica
        body.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não tem salvo, checa a preferência do sistema
        body.setAttribute('data-theme', 'dark');
    }
})();

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Transparência!", "Melhorias!", "Eficiência!"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
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
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

if (toggleBtn) {
    
    // Define o ícone inicial do botão (baseado no tema que já foi aplicado)
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        toggleBtn.textContent = '☀️';
        toggleBtn.setAttribute('aria-label', 'Ativar modo claro');
    } else {
        toggleBtn.textContent = '🌙';
        toggleBtn.setAttribute('aria-label', 'Ativar modo noturno');
    }

    // Adiciona o evento de clique
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
    });
}
// ======== MODO DALTÔNICO ========
const colorblindSelect = document.getElementById('colorblind-mode');

if (colorblindSelect) {
    // Carrega o modo salvo
    const savedMode = localStorage.getItem('colorblind-mode') || 'none';
    document.body.setAttribute('data-colorblind', savedMode);
    colorblindSelect.value = savedMode;

    // Muda o modo ao selecionar
    colorblindSelect.addEventListener('change', (e) => {
        const mode = e.target.value;
        document.body.setAttribute('data-colorblind', mode);
        localStorage.setItem('colorblind-mode', mode);
    });
}



// Função mostrar/esconder senha
function mostrar(){
    var inputPass = document.getElementById('sppassword')
    var btnShowpass = document.getElementById('toque')
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowpass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowpass.classList.replace('bi-eye-slash','bi-eye')
    }

}

function mostrarsi(){
    var inputPasssi = document.getElementById('sipassword')
    var btnShowpasssi = document.getElementById('toquesi')
    if(inputPasssi.type === 'password'){
        inputPasssi.setAttribute('type','text')
        btnShowpasssi.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPasssi.setAttribute('type','password')
        btnShowpasssi.classList.replace('bi-eye-slash','bi-eye')
    }

}
// script.js

// Referência para o formulário
const reportForm = document.getElementById('reportForm');

// Adiciona evento de envio ao formulário
reportForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulação de envio de formulário
    alert("Denúncia enviada com sucesso!");
    
    // Limpa o formulário após o envio
    reportForm.reset();
});
// Verificação de Autenticação
firebase.auth().onAuthStateChanged((user) => {
    const authBtn = document.getElementById('auth-btn');

    if (user) {
        // --- USUÁRIO LOGADO ---
        console.log("Usuário está logado:", user.email);
        authBtn.textContent = "Perfil"; // Muda o texto do botão
        
        // Quando clicar, vai para o perfil
        authBtn.onclick = function() {
            window.location.href = 'perfil.html';
        };
    } else {
        // --- USUÁRIO NÃO LOGADO ---
        console.log("Nenhum usuário logado.");
        authBtn.textContent = "Entrar"; // Garante que o texto seja Entrar
        
        // Quando clicar, vai para o cadastro/login
        authBtn.onclick = function() {
            window.location.href = 'cadUser.html';
        };
    }
});
