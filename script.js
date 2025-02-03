// Código JavaScript
function desenhar() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);

    if (base < 20 || altura<20){
        var nbase = base*10
        var naltura = altura*10
    }else if (base,altura > 200){
        var nbase = base/2
        var naltura = altura/2
    }else if(base,altura > 1000){
        var nbase = base/20
        var naltura = altura/20
    }else{ var nbase = base; var naltura = altura}

    const canvas = document.getElementById("meuCanvas");
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Definindo a cor do retângulo
    ctx.fillStyle = "gray";
    
    // Desenhando o retângulo (x, y, largura, altura)
    ctx.fillRect(10, 10, nbase, naltura);

    var resultado = base*altura

    document.getElementById("result1").innerHTML = ("Resultado: "+ resultado+" m²")



    const canvas2 = document.getElementById("meuCanvas2");
    const ctx2 = canvas2.getContext("2d");

    ctx2.clearRect(0,0, canvas2.height, canvas2.width)

    ctx2.strokeStyle = "white";
    ctx2.strokeRect(10, 10, nbase, naltura);

    var resultado2 = (base + altura)*2

    document.getElementById("result2").innerHTML = ("Resultado: "+ resultado2+" m")

};