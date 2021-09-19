var note = document.getElementsByClassName('badge');

var body = document.getElementsByTagName('body')[0];
body.classList.add('important');


for(i=0;i<note.length;i++){
    note[i].classList.add('note')
}