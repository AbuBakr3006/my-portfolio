let elOpenModal = document.getElementById('btn')
let elCloseModal = document.getElementById('close')
let elModal = document.getElementById('md')

elOpenModal.addEventListener('click', function(){
    elModal.classList.add('show');
})

elCloseModal.addEventListener('click', function (){
    elModal.classList.remove('show');
} )