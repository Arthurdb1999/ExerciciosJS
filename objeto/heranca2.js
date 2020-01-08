//Cadeia de protótipos
Object.prototype.attr0 = 'Z' //não fazer isso
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'A' }
const filho = { __proto__: pai, attr3: 'A' }
console.log(filho.attr1, filho.attr0)
