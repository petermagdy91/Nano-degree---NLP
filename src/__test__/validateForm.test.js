import { validateForm } from "../client/js/validateForm";

describe("Testing the submit functionality", () => {
  test("Testing the validateForm() function", () => {
    expect(validateForm).toBeDefined();
  });
});
