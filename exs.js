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
console.log(ValidarNomeDeUsuario("_SeniorDev2"));
function ValidarNomeDeUsuario(nome) {
    var arrayNumeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var re = /\w/g;
    var validacao = true;
    if (nome != nome.match(re).join('')) {
        console.log("Presença de caracteres inválidos.");
        validacao = false;
    }
    if (nome.length < 4 || nome.length > 25) {
        validacao = false;
    }
    arrayNumeros.forEach(function (x) {
        if (x == nome.charAt(0)) {
            validacao = false;
            return;
        }
    });
    if (nome.charAt(0) == "_")
        validacao = false;
    if (nome.charAt(nome.length - 1) == "_") {
        validacao = false;
    }
    return validacao;
}
