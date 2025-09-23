export class VerificadorTriangulo {
  lado1: number;
  lado2: number;
  lado3: number;
  algunLadoEsString: any;

  constructor() {
    this.lado1 = 0;
    this.lado2 = 0;
    this.lado3 = 0;
  }

  public establecer_lados(
    lado1: number | string,
    lado2: number | string,
    lado3: number | string
  ) {
    this.lado1 = typeof lado1 === "number" ? lado1 : 0;
    this.lado2 = typeof lado2 === "number" ? lado2 : 0;
    this.lado3 = typeof lado3 === "number" ? lado3 : 0;
    this.algunLadoEsString =
      typeof lado1 !== "number" ||
      typeof lado2 !== "number" ||
      typeof lado3 !== "number";
  }

  private esLadoValido(lado: number): boolean {
    return lado > 0;
  }

  private validadorPropiedadLados(): boolean {
    return (
      this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1
    );
  }

  public verificarTipoTriangulo(): string {
    if (this.algunLadoEsString) {
      return "No es un triangulo por lados no numéricos";
    }
    if (
      !this.esLadoValido(this.lado1) ||
      !this.esLadoValido(this.lado2) ||
      !this.esLadoValido(this.lado3)
    ) {
      return "No es un triangulo por lados no validos";
    }
    if (this.validadorPropiedadLados()) {
      if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
        return "Equilatero";
      } else if (
        this.lado1 === this.lado2 ||
        this.lado1 === this.lado3 ||
        this.lado2 === this.lado3
      ) {
        return "Isoceles";
      } else {
        return "Escaleno";
      }
    }
    return "No es un triangulo por propiedad de lados";
  }
}
