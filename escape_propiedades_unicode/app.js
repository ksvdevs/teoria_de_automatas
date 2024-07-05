//Escapes de propiedades Unicode versus Clases de caracteres
//caracteres de la escritura latina: a z 09

//\p{Property}, \P{Property}
/*let texto = "abc123!@#";
let pattern = /\P{Alphabetic}/gu;
let matches = texto.match(pattern);
console.log(matches);*/

//Ejercicios
//Coincidencia de letras \p{L}
//Coincidencia de Numeros \p{N}
/*let texto1 = "abc123";
let pattern1 = /\p{N}/gu;
let matches1 = texto1.match(pattern1);
console.log(matches1);*/

//Ejercicio coincidencia emoji
/*let textoGeneral="abc123!@# A ticket to 大阪 costs ¥2000 👌."
const emoji = /\p{Emoji_Presentation}/gu;
console.log(textoGeneral.match(emoji));*/


// encontrar todas las letras de un texto
//let historia = "Es el gato de Cheshire: ahora tendré alguien con quien hablar";
//console.log(historia.match(/\p{General_Category=Letter}/gu));
//console.log(historia.match(/\p{L}/gu));
//console.log(historia.match(/\p{Letter}/gu));
//console.log(historia.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu));


const textoNoEs = "Приключения Алисы в Стране чудес";
//const regexpPalabraBMP = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
//console.table(textoNoEs.match(regexpPalabraBMP));

const regexpEPU = /\p{L}+/gu;
console.table(textoNoEs.match(regexpEPU));
