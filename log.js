firebase.auth().onAuthStateChanged(user => {
    const path = window.location.pathname;
    if (user && path.includes('cadUser.html')) {
        window.location.href = 'userLogado.html';
    }

    else if (user && path.includes('index.html')) {
        window.location.href = 'userLogado.html';
    }

    else if (!user && (
        path.includes('userLogado.html') ||
        path.includes('cadastro_denuncia.html') ||
        path.includes('cadastro_melhoria.html')
    )) {
        window.location.href = 'cadUser.html';
    }
});
