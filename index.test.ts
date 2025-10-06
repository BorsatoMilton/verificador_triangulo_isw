import { VerificadorTriangulo } from "./index";

describe("VerificadorTriangulo", () => {
  let verificador = new VerificadorTriangulo();
  //REGLA 1
  it("Deberia ser equilatero", () => {
    verificador.establecer_lados(3, 3, 3);
    expect(verificador.verificarTipoTriangulo()).toBe("Equilatero");
  });
  
  //REGLA 2
  it("Deberia ser isoceles", () => {
    verificador.establecer_lados(3, 3, 2);
    expect(verificador.verificarTipoTriangulo()).toBe("Isoceles");
  });

  //REGLA 3
  it("Deberia ser escaleno", () => {
    verificador.establecer_lados(3, 4, 5);
    expect(verificador.verificarTipoTriangulo()).toBe("Escaleno");
  });

  // REGLA 5 - Propiedad triangular
  it("No deberia ser un triangulo", () => {
    verificador.establecer_lados(1, 2, 3);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por propiedad de lados"
    );
  });

  // REGLA 4 - Lados válidos
  it("No deberia ser un triangulo", () => {
    verificador.establecer_lados(-1, 10, 12);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por lados no validos"
    );
  });

  //REGLA 6 - Lados numéricos
  it("Deberia asignar 0 cuando lado1 no es número", () => {
    verificador.establecer_lados("a", 2, 3);
    expect(verificador.lado1).toBe(0);
    expect(verificador.verificarTipoTriangulo()).toBe("No es un triangulo por lados no numéricos");
  });

  it("Deberia asignar 0 cuando lado2 no es número", () => {
    verificador.establecer_lados(1, "b", 3);
    expect(verificador.lado2).toBe(0);
    expect(verificador.verificarTipoTriangulo()).toBe("No es un triangulo por lados no numéricos");
  });

  it("Deberia asignar 0 cuando lado3 no es número", () => {
    verificador.establecer_lados(1, 2, "c");
    expect(verificador.lado3).toBe(0);
    expect(verificador.verificarTipoTriangulo()).toBe("No es un triangulo por lados no numéricos");
  });

  // VALORES LÍMITE - REGLA 4
  it("No deberia ser un triangulo por lados no validos", () => {
    verificador.establecer_lados(0, 10, 12);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por lados no validos"
    );
  });
  it("Deberia ser isoceles", () => {
    verificador.establecer_lados(0.1, 0.15, 0.1);
    expect(verificador.verificarTipoTriangulo()).toBe("Isoceles");
  });

  // VALORES LÍMITE - REGLA 5

  it("No deberia ser un triangulo por propiedad de lados", () => {
    verificador.establecer_lados(10, 5, 15);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por propiedad de lados"
    );
  });

  it("Deberia ser un triangulo escaleno", () => {
    verificador.establecer_lados(10, 5, 14.99);
    expect(verificador.verificarTipoTriangulo()).toBe("Escaleno");
  });
});
