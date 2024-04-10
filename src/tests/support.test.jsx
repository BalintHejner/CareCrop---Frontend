describe("FeedbackSection", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FeedbackSection />, div);
  });

  it("should call handleSupport when form is submitted", () => {
    const handleSupport = jest.fn();
    const { getByText } = render(
      <FeedbackSection handleSupport={handleSupport} />
    );
    fireEvent.click(getByText("Küldés"));
    expect(handleSupport).toHaveBeenCalledTimes(1);
  });

  it("should pass correct data to handleSupport on submit", () => {
    const handleSupport = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <FeedbackSection handleSupport={handleSupport} />
    );

    fireEvent.change(getByPlaceholderText("Visszajelzés"), {
      target: { value: "Test message" },
    });
    fireEvent.click(getByText("Küldés"));

    expect(handleSupport).toHaveBeenCalledWith({
      type: "",
      message: "Test message",
    });
  });

  it("should show error if handleSupport rejects", async () => {
    const handleSupport = jest.fn(() => Promise.reject());
    const { getByText, findByText } = render(
      <FeedbackSection handleSupport={handleSupport} />
    );

    fireEvent.click(getByText("Küldés"));

    const error = await findByText("Error submitting feedback");
    expect(error).toBeInTheDocument();
  });
});
