function mnsj_a(){
  console.log('Metodo A dentro de modulo local A');
};

function mnsj_b(){
  console.log('Metodo B dentro de modulo local A');
};

//mnsj_a();
//mnsj_b();
module.exports ={
  mnsj_a : mnsj_a,
  mnsj_b : mnsj_b
};
