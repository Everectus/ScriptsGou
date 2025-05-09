/**
 * Este script de JavaScript se encarga de leer parámetros de la URL y, si están presentes,
 * los utiliza para pre-llenar campos de un formulario en la página actual.
 */
(function () {
  // Obtiene los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const valor = urlParams.get('valor'); // Obtiene el valor del parámetro 'valor'
  const ref = urlParams.get('ref'); // Obtiene el valor del parámetro 'ref'

  /**
   * Verifica si el parámetro 'valor' existe en la URL.
   * Si existe, busca un elemento HTML con el ID 'amount' y establece su valor
   * al valor del parámetro 'valor'. Además, marca el campo como de solo lectura
   * para evitar que el usuario lo modifique.
   */
  if (valor != null) {
    const inputValor = document.getElementById('amount'); // Obtiene el elemento con ID 'amount'
    inputValor.value = valor; // Establece el valor del elemento
    inputValor.readOnly = true; // Marca el campo como de solo lectura
  }

  /**
   * Verifica si el parámetro 'ref' existe en la URL.
   * Si existe, busca un elemento HTML con el ID 'reference' y establece su valor
   * al valor del parámetro 'ref'. De manera similar al parámetro 'valor', marca este campo como de solo lectura.
   */
  if (ref != null) {
    const inputRef = document.getElementById('reference'); // Obtiene el elemento con ID 'reference'
    inputRef.value = ref; // Establece el valor del elemento
    inputRef.readOnly = true; // Marca el campo como de solo lectura
  }
})();
