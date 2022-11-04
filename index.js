function verificaNumero(){

    console.log("teste")
    var num = document.getElementById("parImpar").value;

    if(num == ""){
        alert("Preencha o campo!");
        document.frmParImpar.txtParImpar.focus();
        return false
    }

    if (isNaN(num)){
        alert('"'+num+'"' + " Não é um número válido");
        document.getElementById("parImpar").value = ""
        return false;
    }

    if(num%2 == 0){
        alert("O número " + num + " é par");
        document.getElementById("parImpar").value = ""
    }else{
        alert("O número " + num + " é impar");
        document.getElementById("parImpar").value = ""
    }

}


function exibirNumerosPares(){
    var numeros = "";

    for(let i = 0; i <= 50; i++){
        if(i%2 == 0){
            numeros += ""+i+" ";
        }
    }
    var numerosDiv = document.getElementById("numerosBox");
    var texto = document.createTextNode(numeros)

    numerosDiv.innerHTML = "";
    numerosDiv.appendChild(texto);
}

function mostraEstacao(){
    
    var mes = document.getElementById("mes").value

    var estacao;

    var meses = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    }   

    if(mes <= 3 || mes == 12){
        estacao = "Verão";
    }
    else if(mes >3 && mes <=6 ){
        estacao = "Outono";
    }
    else if(mes > 6 && mes <= 9){
        estacao = "Inverno";
    }
    else{
        estacao = "Primavera";
    }

    var mensagem = document.createTextNode("No mes de " +meses[mes]+ " a estação é " +estacao);

    var div = document.getElementById("mensagemEstacaoBox")
    div.innerHTML = "";
    div.appendChild(mensagem);
}

function exibeTabuada(){
    var num = document.getElementById("tabuada").value

    if(num == ""){
        alert("Preencha o campo!");
        document.txtTabuada.focus();
        return false
    }

    if (isNaN(num)){
        alert('"'+num+'"' + " Não é um número válido");
        document.getElementById("tabuada").value = ""
        return false;
    }

    var msg = "";

    for(let i = 1; i <=10; i++){
        let resultado = num * i;

        msg += i + " X " + num + " = " + resultado + "<br>";
    }

    

    var div = document.getElementById("msgTabuada");

    div.innerHTML = msg;

  


}
