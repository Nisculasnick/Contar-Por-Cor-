# Contador de Células por Cor no Google Sheets
Descrição
Este repositório contém um script JavaScript para Google Apps Script que permite contar células em um intervalo específico de uma planilha do Google Sheets com base em suas cores de fundo.

# Funcionalidades
- `contarPorCor(cor, intervalo)`: Função principal que conta quantas células em um determinado intervalo possuem uma cor de fundo específica.

  - `cor`: Código hexadecimal da cor a ser verificada (ex: `'#73d9ed'`).

  - `intervalo`: Intervalo de células no formato A1 (ex: `'A1:M100'`).

- Funções específicas para cores pré-definidas:

  - `contarAzul()`: Conta células com a cor azul `(#73d9ed)` no intervalo `A1:M100`.

  - `contarRosa()`: Conta células com a cor rosa `(#e7b9da)` no intervalo `A1:M100`.

  - `contarAmarelo()`: Conta células com a cor amarela `(#ebf6aa)` no intervalo `A1:M100`.

# Como Usar
1. Copie o código para o editor de scripts do seu Google Sheets (Extensões > Apps Script).

2. Salve o projeto e autorize as permissões necessárias.

3. Use as funções diretamente em sua planilha como fórmulas personalizadas:

`=contarAzul()`

`=contarRosa()`

`=contarAmarelo()`

# Personalização
Você pode facilmente:

- Adicionar novas funções para outras cores modificando os códigos hexadecimais.

- Alterar os intervalos padrão conforme necessário.

- Expandir a funcionalidade para outras operações baseadas em cores.

# Observações
- O script é sensível a maiúsculas/minúsculas nos códigos hexadecimais.

- Para melhor desempenho, evite intervalos muito grandes desnecessariamente.

Este script é útil para automatizar a contagem visual em planilhas coloridas, substituindo processos manuais propensos a erros.
