



function loadStudents (){

fetch("js/data.json")
.then(res => res.json())
.then(students => {

    document.querySelector("section").innerHTML = students.map((student) =>  `<div><h2> ${student.name}</h2><p>The age is : ${student.age}</p> <button> ${student.career}</button></div> ` ).join(" ");


})

}

function changeStyles(){

document.body.classList.add('dark')



}



document.querySelector('.btn').addEventListener('click',loadStudents)
document.querySelector('.btn_style').addEventListener('click',changeStyles)