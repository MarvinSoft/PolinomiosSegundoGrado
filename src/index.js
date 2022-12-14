validNumber = (num,coeficiente) => {
    if(isFinite(num) && typeof num == "number"){
        if(coeficiente === "A"){
            return (num != 0)
        }
        return true
    }

    else
        return false
};

discriminanteMayor0 = (a,b,c,discriminante) =>{
    let raiz1,raiz2
    raiz1 = ((b*-1) - Math.sqrt(discriminante))/(2*a);
    raiz2 = ((b*-1) + Math.sqrt(discriminante))/(2*a);

    return "[" + raiz1.toPrecision(2) + "," + raiz2.toPrecision(2)+"]"
}

discriminanteIgual0 = (a,b,c) =>{
    return ("" + ((b*-1)/(2*a)).toPrecision(2))
}

discriminanteMenor0 = (a,b,c,discriminante) =>{
    let raiz1,raiz2
    raiz1 = "(" + (b*-1) + "-" + Math.sqrt((discriminante*-1)) + "i)/" + (2*a)
    raiz2 = "(" + (b*-1) + "+" + Math.sqrt((discriminante*-1)) + "i)/" + (2*a)

    console.log(raiz1)
    console.log(raiz2)

    return ("[" + raiz1 + "," + raiz2 +"]" )
}

polinomio = (a,b,c) => {
    if(validNumber(a,"A") && validNumber(b,"B") && validNumber(c,"C")){
        let discriminante = (b*b) - (4*a*c)
        console.log(discriminante)

        if(discriminante > 0)
            return discriminanteMayor0(a,b,c,discriminante)
        else if(discriminante < 0)
            return discriminanteMenor0(a,b,c,discriminante)
        else
            return discriminanteIgual0(a,b,c)

    }
    else
        return "No se pudo resolver el polinomio"
}


console.log(polinomio(2,-8,8))