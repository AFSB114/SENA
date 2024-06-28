const elementos = document.getElementsByClassName('elemento');

for (let elemento of elementos) {
    
    elemento.addEventListener('click', () => {
        let idElement = elemento.id;
        let idModal = 'modal-' + idElement;
        let idClose = 'close-' + idElement;

        let modal = document.getElementById(idModal);
        modal.style.display = 'block';

        let close = document.getElementById(idClose);
        close.onclick = () => {
            modal.style.display = 'none';
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
}
