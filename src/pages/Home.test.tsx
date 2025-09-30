import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it('muestra el título "Nuestros Productos"', () => {
    render(<Home />);
    const h1 = screen.getByRole("heading", { name: /nuestros productos/i });
    expect(h1).toBeTruthy();
  });

  it('renderiza las tarjetas de los 6 productos y sus botones "Añadir"', () => {
    render(<Home />);
    const titulos = [
      "Bombones de chocolate",
      "Pastel de chocolate",
      "Pie de limón",
      "Bombones de chocolate 2",
      "Pastel de chocolate 2",
      "Pie de limón 2",
    ];
    for (const t of titulos) {
      expect(screen.getByText(t)).toBeTruthy();
    }
    const botones = screen.getAllByRole("button", { name: /añadir/i });
    expect(botones.length).toBe(6);
    fireEvent.click(botones[0]); // interacción mínima
  });

  it("carga imágenes (al menos 3)", () => {
    render(<Home />);
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBeGreaterThanOrEqual(3);
  });
});
