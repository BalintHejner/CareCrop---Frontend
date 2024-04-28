import { fn } from "vitest";
import { render, fireEvent, screen, userEvent } from "@testing-library/react";
import UploadSection from "../pages/ProductUploadPage";
import React from "react";



describe("UploadSection", () => {
  it("should call handleNewProduct when form is submitted", () => {
    const handleNewProduct = fn();
    render(<UploadSection handleNewProduct={handleNewProduct} />);

    const submitButton = screen.getByText("Hírdetés feladása");
    userEvent.click(submitButton);

    expect(handleNewProduct).toHaveBeenCalledTimes(1);
  });

  it("should pass correct data to handleNewProduct on submit", () => {
    const handleNewProduct = fn();
    const { getByText, getByPlaceholderText } = render(
      <UploadSection handleNewProduct={handleNewProduct} />
    );

    fireEvent.change(getByPlaceholderText("Szezon"), {
      target: { value: "Nyár" },
    });
    fireEvent.change(getByPlaceholderText("Termény"), {
      target: { value: "Búza" },
    });
    fireEvent.change(getByPlaceholderText("Mennyiség"), {
      target: { value: "1000" },
    });
    fireEvent.change(getByPlaceholderText("Minőség"), {
      target: { value: "Malmi 1-es" },
    });
    fireEvent.change(getByPlaceholderText("Ár"), { target: { value: "2500" } });

    const submitButton = screen.getByText("Hírdetés feladása");
    userEvent.click(submitButton);

    expect(handleNewProduct).toHaveBeenCalledWith({
      season: "Nyár",
      crop: "Búza",
      amount: "1000",
      quality: "Malmi 1-es",
      price: "2500",
    });
  });

  it("should show error message on failed product upload", async () => {
    const mockNewProduct = fn(() => Promise.reject("Sikertelen feltöltés"));

    render(<UploadSection handleNewProduct={mockNewProduct} />);

    const submitButton = screen.getByText("Hírdetés feladása");
    userEvent.click(submitButton);

    const errorMessage = await screen.findByText("Sikertelen feltöltés");
    expect(errorMessage).toBeInTheDocument();
  });
});

export {}; 