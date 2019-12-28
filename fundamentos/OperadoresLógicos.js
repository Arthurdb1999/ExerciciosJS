/* v e v = v
 * v e f = f
 * f e ? = f
 * 
 * v ou ? = v
 * f ou v = v
 * f ou f = f
 * 
 * v xor v = f
 * v xor f = v
 * f xor v = v
 * f xor f = f
 * 
 * !v = f
 * !f = v
 */

 function compras(t1, t2) {
     const comprarSorvete = t1 || t2
     const comprarTv50 = t1 && t2
     //const comprarTv32 = !!(t1 ^ t2) //bitwise xor
     const comprarTv32 = t1 != t2
     const manterSaudavel = !comprarSorvete

     return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
 }

 console.log(compras(true, true))
 console.log()
 console.log(compras(true, false))
 console.log()
 console.log(compras(false, true))
 console.log()
 console.log(compras(false, false))
 console.log()

 //Operadores unários
 let num1 = 1
 let num2 = 2
 num1++
 num1--

 console.log(++num1 === num2--) //depois da comparação que num2 é decrementado, pq o -- vem depois
 console.log()
 
 //Operadores ternários
 const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //Analágo ao ifelse

 console.log(resultado(7.1))
 console.log(resultado(6.7))

