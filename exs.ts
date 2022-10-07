// Ex 1:

// console.log(PalavraMaisLonga("O meu nome é Thiago."))

// function PalavraMaisLonga(frase : string) : string{
//     let palavraMaisLonga : string = ""
//     let arrayFrase : string[] = frase.split(' ')
//     arrayFrase.forEach(x => {
//         x = TirarCaracteresEspeciais(x)
//         if(x.length > palavraMaisLonga.length){
//             palavraMaisLonga = x
//         }
//     })
//     return palavraMaisLonga
// }

// function TirarCaracteresEspeciais(frase : string) : string{
//     let re : RegExp = /[a-zA-Z\u00C0-\u00FF\d ]+/i
//     let stringNovo : string = frase.match(re).join('')
//     return stringNovo
// }

// Ex 2:

// console.log(ValidarNomeDeUsuario("_SeniorDev2"))

// function ValidarNomeDeUsuario(nome : string) : boolean{
//     let arrayNumeros : string[] = ["1","2","3","4","5","6","7","8","9","0"] 
//     let re : RegExp = /\w/g 
//     let validacao : boolean = true
//     if(nome != nome.match(re).join('')){
//         console.log("Presença de caracteres inválidos.")
//         validacao = false
//     }

//     if(nome.length < 4 || nome.length > 25){
//         validacao = false
//     }
//     arrayNumeros.forEach(x => {
//         if(x == nome.charAt(0)){
//             validacao = false
//             return
//         }
//     })
//     if(nome.charAt(0) == "_")
//     validacao = false
//     if(nome.charAt(nome.length - 1) == "_"){
//         validacao = false
//     }
//     return validacao
// }

// Ex 3:

let array : string[] = ["2, 4, 5, 8, 14", "2, 3, 5, 14, 16"]

console.log(MostrarElementosEmComum(array))

function MostrarElementosEmComum(arrayString : string[]) : string{
    let primeiroArray : string[] = []
    let segundoArray : string[] = []
    let arrayFinal : string[] = []
    let mensagem : boolean = false

    primeiroArray = arrayString[0].split(",") 
    console.log(primeiroArray)

    segundoArray = arrayString[1].split(",")
    console.log(segundoArray)

    primeiroArray.forEach(x => {
        segundoArray.forEach(y => {
            if(x == y){
                console.log(arrayFinal)
                arrayFinal.push(x)
                mensagem = true
            }
        })
    })
    if(mensagem == false){
        return "false"
    }else{
        return arrayFinal.join(", ")
    }
}
