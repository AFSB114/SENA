function saludo() {
    let saludar = document.getElementById('txtSaludo')
    document.getElementById('saludo').innerHTML = '<strong>' + saludar.value + '</strong>';
    return false;
}