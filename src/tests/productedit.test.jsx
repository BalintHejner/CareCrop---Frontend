describe("EditSection", () => {
  it("should update product data when form is submitted", async () => {
    const mockPut = jest.fn();
    axios.put = mockPut;

    const { getByText, getByPlaceholderText } = render(<EditSection />);

    fireEvent.change(getByPlaceholderText("Hírdetés címe"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(getByPlaceholderText("Szezon"), {
      target: { value: "Nyár" },
    });
    fireEvent.change(getByPlaceholderText("Termény"), {
      target: { value: "Búza" },
    });
    fireEvent.change(getByPlaceholderText("Mennyiség"), {
      target: { value: "100" },
    });
    fireEvent.change(getByPlaceholderText("Minőség"), {
      target: { value: "Malmi 1-es" },
    });
    fireEvent.change(getByPlaceholderText("Ár"), {
      target: { value: "10000" },
    });

    fireEvent.click(getByText("Hírdetés módosítása"));

    expect(mockPut).toHaveBeenCalledWith(
      "products.php?season=Nyár&name=Búza&quality=Malmi 1-es&price=10000",
      {
        season: "Nyár",
        name: "Búza",
        quality: "Malmi 1-es",
        price: "10000",
      }
    );
  });

  it("should handle error from API call", async () => {
    axios.put.mockRejectedValueOnce("Error");

    const { findByText } = render(<EditSection />);

    fireEvent.click(getByText("Hírdetés módosítása"));

    const error = await findByText("Error submitting form");
    expect(error).toBeInTheDocument();
  });

  it("should store other product data in localStorage on submit", async () => {
    axios.put.mockResolvedValueOnce();

    const { getByText, getByPlaceholderText } = render(<EditSection />);

    fireEvent.change(getByPlaceholderText("Hírdetés címe"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(getByPlaceholderText("Mennyiség"), {
      target: { value: "100" },
    });
    fireEvent.change(getByPlaceholderText("Ár"), {
      target: { value: "10000" },
    });
    fireEvent.change(getByPlaceholderText("Leírás"), {
      target: { value: "Test Description" },
    });

    fireEvent.click(getByText("Hírdetés módosítása"));

    expect(localStorage.getItem("otherProductData")).toEqual(
      JSON.stringify({
        title: "Test Title",
        amount: "100",
        price: "10000",
        description: "Test Description",
      })
    );
  });
});
