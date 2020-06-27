function givenNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearGivenNumber(){
    var result = document.getElementById("result");
    result.value = "";
}

function backSpace(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,-1);
}


function result(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}