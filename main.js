function openAnswer(question, answer, arrow){
    if(question.style.color == "rgb(30, 31, 54)"){
        question.style.color = "rgb(75, 76, 95)";
        question.style.fontWeight = "400";
        answer.style.display = "none";
        arrow.style.rotate = "360deg";

    }
    else{
        question.style.color = "rgb(30, 31, 54)";
        question.style.fontWeight = "700";
        answer.style.display = "block";
        arrow.style.rotate = "180deg";
    }

    
}