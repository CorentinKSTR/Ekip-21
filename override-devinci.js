var note = document.getElementsByClassName('badge')[0];


var body = document.getElementsByTagName('body')[0];
body.classList.add('important');

for(i=0;i<note.length;i++){
    note.classList.add('note')
}