function table(){
    let from =parseInt(document.getElementById("n1") .value)
    let to =parseInt(document.getElementById("n2") .value)
    let table=""
    if(from>to){
        alert("please enter number in valid order")
    }else {
        for(from;from<=to;from++){
            table+="<table border='2'>"
            for(let i=1;i<=10;i++){
                table+="<tr>"
                table+="<td>"+from+" x "+i+" = "+from*i+"</td>"
                table+="</tr>"
            }
             table+="</table>"
        }
    }
    document.getElementById("display").innerHTML=table
}