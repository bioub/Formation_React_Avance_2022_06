function closure(open) {
  return () => {
    console.log(open);
  };
}


const fct1 = closure(false);
const fct2 = closure(true);
fct1();
fct2();
