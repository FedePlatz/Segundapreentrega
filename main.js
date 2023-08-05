const interesesPorCuotas = [
    { cuotas: [1, 2, 3], interesMensual: 0.2 },
    { cuotas: [4, 5, 6], interesMensual: 0.1 },
    { cuotas: [7, 8, 9], interesMensual: 0.08 },
    { cuotas: [10, 11, 12], interesMensual: 0.05 },
  ];
  
  class CreditoCalculator {
    constructor() {
      this.montoCredito = this.obtenerNumeroValido("Ingrese el monto que desea de crédito");
      this.numCuotas = this.obtenerCuotasValidas();
    }
  
    calcularInteres(montoTotal, interes) {
      return montoTotal * interes;
    }
  
    calcularCredito(monto, cuotas) {
      const interesMensual = interesesPorCuotas.find(
        (intervalo) => cuotas >= intervalo.cuotas[0] && cuotas <= intervalo.cuotas[2]
      ).interesMensual;
  
      return monto + cuotas * this.calcularInteres(monto, interesMensual);
    }
  
    validarNumero(valor) {
      return !isNaN(valor);
    }
  
    obtenerNumeroValido(mensaje) {
      let valor = parseInt(prompt(mensaje));
      while (!this.validarNumero(valor)) {
        valor = parseInt(prompt("El valor ingresado no es numérico. " + mensaje));
      }
      return valor;
    }
  
    obtenerCuotasValidas() {
      let cuotas = this.obtenerNumeroValido("Ingrese el número de cuotas (Max. 12)");
      while (cuotas < 1 || cuotas > 12) {
        cuotas = this.obtenerNumeroValido(
          "El valor ingresado no corresponde a una cuota válida. Ingrese nuevamente el número de cuotas (Max. 12)"
        );
      }
      return cuotas;
    }
  
    calcularCostoCredito() {
      const resultado = this.calcularCredito(this.montoCredito, this.numCuotas);
      if (!isNaN(resultado)) {
        const resultadoRedondeado = Math.round(resultado);
        alert(
          `El costo financiero a pagar por el crédito de ${this.montoCredito} pesos (Arg) a ${this.numCuotas} cuotas es de ${resultadoRedondeado} pesos (Arg)`
        );
      } else {
        alert("Ocurrió un error al calcular el costo del crédito. Por favor, inténtelo nuevamente.");
      }
    }
  }
  
  const creditoCalculator = new CreditoCalculator();
  creditoCalculator.calcularCostoCredito();
  