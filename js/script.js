function squares(){

    const classeElemento = document.createElement('div');
    classeElemento.classList.add('box')
    return classeElemento

}


let bottone = document.getElementById('spawn')
let contentboxes = document.getElementById('content-box')
bottone.addEventListener('click', function(){
contentboxes.innerHTML= " "


    for(let i = 1; i<=100 ; i++){
        const numeri = i
        const createboxes= squares();
        createboxes.innerText += numeri
        contentboxes.appendChild(createboxes);
        createboxes.addEventListener('click', function(){
        console.log(this.innerText)
        this.classList.toggle('pulsante')
        })
    }
})




