var body = document.getElementsByTagName('body')[0]

var url = window.location.href
console.log(url)
if (url =="https://www.leonard-de-vinci.net/student/cours/"){
    body.classList.add('classImp')
}
if (url =="https://www.leonard-de-vinci.net/?my=marks"){
    body.classList.add('notesImp')
}
if (url=="https://www.leonard-de-vinci.net/"){
    body.classList.add('ficheImp')
}
