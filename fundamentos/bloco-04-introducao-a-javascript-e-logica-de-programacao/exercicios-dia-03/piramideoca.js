function reserveTriangle(tamanho) {
    for (let i = 0; i < tamanho; i++) {
      let aux = " ";
      for (let j = 0; j < tamanho; j++) {
        if (j >= tamanho - i - 1) {
          aux += " *";
        }
        
        else {
          aux += " ";
        }
      }
      console.log(aux);
    }
  }
  
  reserveTriangle(5);