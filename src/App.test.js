import { render, screen } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  jest.restoreAllMocks();
});

test("loads and displays users from the backend", async () => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: async () => [
      {
        id: 1,
        userName: "Asha Patil",
        role: "ADMIN",
        authorities: ["READ_STUDENT"],
      },
    ],
  });

  render(<App />);
  expect(screen.getByText(/loading users/i)).toBeInTheDocument();
  expect(await screen.findByText("Asha Patil")).toBeInTheDocument();
  expect(screen.getByText("ADMIN")).toBeInTheDocument();
  expect(screen.getByText("READ_STUDENT")).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith("http://localhost:8080/users");
});

test("shows an error when the backend cannot be reached", async () => {
  jest.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));
  render(<App />);
  expect(await screen.findByRole("alert")).toHaveTextContent(
    /could not load users/i,
  );
});
