var nameofstudent=[];
function submit(){
var name1=document.getElementById("name_of_student_1").value;
var name2=document.getElementById("name_of_student_2").value;
var name3=document.getElementById("name_of_student_3").value;
var name4=document.getElementById("name_of_student_4").value;
nameofstudent.push(name1);
nameofstudent.push(name2);
nameofstudent.push(name3);
nameofstudent.push(name4);
console.log(nameofstudent);
document.getElementById("output").innerHTML=nameofstudent;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}


function sort(){
    nameofstudent.sort();
    console.log(nameofstudent);
    document.getElementById("output").innerHTML=nameofstudent;
    document.getElementById("sort").style.display="none";
    document.getElementById("reset").style.display="inline-block";

    
}

function reset(){
    nameofstudent=[];
    document.getElementById("name_of_student_1").value=""
    document.getElementById("name_of_student_2").value=""
    document.getElementById("name_of_student_3").value=""
    document.getElementById("name_of_student_4").value=""
    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("output").innerHTML="";
    
}