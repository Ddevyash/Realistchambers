let read = document.querySelector('button');
read.addEventListener('click', function(){
    document.querySelector('.more').style.display='block';
    document.querySelector('button').style.display='none';
})


let toggle = document.querySelector('.hamburger');
toggle.addEventListener('click', function(){
    document.querySelector('.menu ul').style.display='block';
    document.querySelector('.cancel').style.display='block';
    this.style.display='none';

})

let cancel = document.querySelector('.cancel');
cancel.addEventListener('click', function(){
    document.querySelector('.menu ul').style.display='none';
    document.querySelector('.hamburger').style.display='block';
    this.style.display='none';
})