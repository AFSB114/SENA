document.addEventListener('DOMContentLoaded', function () {
    let screen = ''

    for (let index1 = 1; index1 <= 5; index1++) {
        screen += `
                <div class="col">
                    <div class="card">
                        <h5 class="card-header text-center">
                            Tabla del ${index1}
                        </h5>
                        <ul class="list-group list-group-flush">
                    `
        for (let index2 = 1; index2 <= 10; index2++) {
            screen += `
                <li class="list-group-item">${index1} X ${index2} = ${index1 * index2}</li>
                `
        }
        screen += `
                        </ul>
                    </div>
                </div>
                `
    }

    document.getElementById('tablas').innerHTML = screen
})