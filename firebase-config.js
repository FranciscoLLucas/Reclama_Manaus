const firebaseConfig = {
    apiKey: "AIzaSyAq7ZSY9zJSIAHkhollNVHobntjfmMjdD4",
    authDomain: "reclamamanaus-f23fa.firebaseapp.com",
    projectId: "reclamamanaus-f23fa",
    storageBucket: "reclamamanaus-f23fa.firebasestorage.app",
    messagingSenderId: "735372483202",
    appId: "1:735372483202:web:09da0010bd8da53645729b"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");

    
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            
            nomeInput.value = user.displayName || "Usuário sem nome";
            emailInput.value = user.email || "Email não disponível";
        } else {
            
            window.location.href = "CadUser.html";
        }
    });