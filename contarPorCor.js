function contarPorCor(cor, intervalo) {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var intervalo = planilha.getRange(intervalo);
    var cores = intervalo.getBackgrounds();
    var contador = 0;
  
    // Itera sobre cada célula do intervalo e verifica a cor
    for (var i = 0; i < cores.length; i++) {
      for (var j = 0; j < cores[i].length; j++) {
        if (cores[i][j] == cor) {
          contador++;
        }
      }
    }
  
    return contador;
  }
  
  function contarAzul() {
    return contarPorCor('#73d9ed', 'A1:M100'); 
  }
  
  function contarRosa() {
    return contarPorCor('#e7b9da', 'A1:M100'); 
  }
  
  function contarAmarelo() {
    return contarPorCor('#ebf6aa', 'A1:M100'); 
  }
  