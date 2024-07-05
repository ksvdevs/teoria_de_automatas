//1 expresion 1
//2 /\p{N}/gu;
//3 /\p{N}/gu;
let texto = "abc123"; 
let expresion = /\p{N}/gu;
console.log(texto.match(expresion))