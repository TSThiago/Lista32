// Ex 1:
console.log(PalavraMaisLonga("O meu nome é Thiago."));
function PalavraMaisLonga(frase) {
    var palavraMaisLonga = "";
    var arrayFrase = frase.split(' ');
    arrayFrase.forEach(function (x) {
        x = TirarCaracteresEspeciais(x);
        if (x.length > palavraMaisLonga.length) {
            palavraMaisLonga = x;
        }
    });
    return palavraMaisLonga;
}
function TirarCaracteresEspeciais(frase) {
    var re = /[a-zA-Z\u00C0-\u00FF\d ]+/i;
    var stringNovo = frase.match(re).join('');
    return stringNovo;
}
// Ex 2:
// function ValidarNomeDeUsuario(nome : string) : boolean{
//     let re : RegExp = /\D/g 
//     let validacao : boolean = true
//     if(nome.length < 4 || nome.length > 25){
//         validacao = false
//     }
// }
