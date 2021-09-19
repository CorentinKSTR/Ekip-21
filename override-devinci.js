var note = document.getElementsByClassName('badge');


var body = document.getElementsByTagName('body')[0]
var body = document.getElementsByTagName('body')[0];
body.classList.add('important');


var url = window.location.href
console.log(url)
if (url =="https://www.leonard-de-vinci.net/student/cours/"){
    body.classList.add('classImp')

for(i=0;i<note.length;i++){
    note[i].classList.add('note')
}
if (url =="https://www.leonard-de-vinci.net/?my=marks"){
    body.classList.add('notesImp')
}
if (url=="https://www.leonard-de-vinci.net/"){
    body.classList.add('ficheImp')
}

