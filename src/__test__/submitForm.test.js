import { submitForm } from "../client/js/formSubmission";

describe("Testing the submit functionality", () => {
  test("Testing the submitForm() function", () => {
    expect(submitForm).toBeDefined();
  });
});
