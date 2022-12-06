function squares(){

    const classeElemento = document.createElement('div');
    classeElemento.classList.add('box')
    return classeElemento
}

let contentboxes = document.getElementById('content-box')

for(let i = 1; i<=100 ; i++){

    
    const createboxes= squares();
    contentboxes.appendChild(createboxes);
    createboxes.addEventListener('click', function(){
        this.classList.add('pulsante')
    })
}