//Control de flujo (if/else)
function comprar(producto){
    if (producto==='Alfajor'){
        console.log('$28')
    } else if (producto==='Jugo'){
        console.log('$35')
    }  else{
        console.log('No tenemos')
}
}
comprar('COca');

//otro ejemplo
function soyMayorDeEdad(edad){
    if (edad>=18){
        console.log(true)
    } else{
        console.log(false)
    }
}
soyMayorDeEdad();

//y otro
function g(x){
    if (x===3){
        console.log('tres')
    }
    else if (x>3){
        console.log('mas que tres')
    }
    else{
        console.log('menos que tres')
    }
}
g('2');