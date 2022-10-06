// Ex 1:

console.log(PalavraMaisLonga("O meu nome é Thiago."))

function PalavraMaisLonga(frase : string) : string{
    let palavraMaisLonga : string = ""
    let arrayFrase : string[] = frase.split(' ')
    arrayFrase.forEach(x => {
        x = TirarCaracteresEspeciais(x)
        if(x.length > palavraMaisLonga.length){
            palavraMaisLonga = x
        }
    })
    return palavraMaisLonga
}

function TirarCaracteresEspeciais(frase : string) : string{
    let re : RegExp = /[a-zA-Z\u00C0-\u00FF\d ]+/i
    let stringNovo : string = frase.match(re).join('')
    return stringNovo
}

// Ex 2:

// function ValidarNomeDeUsuario(nome : string) : boolean{
//     let re : RegExp = /\D/g 
//     let validacao : boolean = true
//     if(nome.length < 4 || nome.length > 25){
//         validacao = false
//     }
// }