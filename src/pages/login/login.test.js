import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from ".";
import UserProvider from "../../context/user";

const mockedGet = jest.fn();

jest.mock("../../services/api.js", () => ({
  __esModule: true,
  default: {
    get: () => mockedGet(),
  },
}));

const wrapper = ({ children }) => <UserProvider>{children}</UserProvider>;

describe("Login", () => {
  it("should be able to type an username, click on button and call api function", async () => {
    mockedGet.mockResolvedValue({ data: { login: "carlos-cne" } });
    render(<Login />, { wrapper });
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    userEvent.type(input, "user-test");

    userEvent.click(button);

    await waitFor(() => expect(mockedGet).toHaveBeenCalled());
  });
});
