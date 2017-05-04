let productpage = require('../local_module/local_module_a')
let categorypage = require('../local_module/local_module_b')

const funcion_a =   productpage
const funcion_b = categorypage

// function moduleMsj_a(){
//   productpage.mnsj_a()
//   productpage.mnsj_b()
//   categorypage.mnsj_a()
//   categorypage.mnsj_b()
//   console.log('LLamado desde modulo A');
// };
//
// moduleMsj_a()

module.exports ={
  funcion_a : funcion_a,
  funcion_b : funcion_b
}
