import { VerificadorTriangulo } from "./index";

describe("VerificadorTriangulo", () => {
  let verificador = new VerificadorTriangulo();
  it("Deberia ser equilatero", () => {
    verificador.establecer_lados(3, 3, 3);
    expect(verificador.verificarTipoTriangulo()).toBe("Equilatero");
  });

  it("Deberia ser isoceles", () => {
    verificador.establecer_lados(3, 3, 2);
    expect(verificador.verificarTipoTriangulo()).toBe("Isoceles");
  });

  it("Deberia ser escaleno", () => {
    verificador.establecer_lados(3, 4, 5);
    expect(verificador.verificarTipoTriangulo()).toBe("Escaleno");
  });

  it("No deberia ser un triangulo", () => {
    verificador.establecer_lados(1, 2, 3);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por propiedad de lados"
    );
  });

  it("No deberia ser un triangulo", () => {
    verificador.establecer_lados(-1, 10, 12);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por lados no validos"
    );
  });

  it("No deberia ser un triangulo por lados no numéricos", () => {
    verificador.establecer_lados("a", 10, 12);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por lados no numéricos"
    );
  });

  // VALORES LIMITES

  //REGLA 4
  it("No deberia ser un triangulo por lados no validos", () => {
    verificador.establecer_lados(0, 10, 12);
    expect(verificador.verificarTipoTriangulo()).toBe(
      "No es un triangulo por lados no validos"
    );
  });
  it("No deberia ser un triangulo por propiedad de lados", () => {
    verificador.establecer_lados(0.1, 0.15, 0.1);
    expect(verificador.verificarTipoTriangulo()).toBe("Isoceles");
  });

  //REGLA 5

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
