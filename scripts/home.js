const btnLogout = document.getElementById('logout');



btnLogout.onclick = e => {//Cierre de sesion
    e.preventDefault();
    console.log('xd');
    window.location = '../index.html';
}