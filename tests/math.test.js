const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} = require("../src/math");

test("Total tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Default total with tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12);
});

test("Convert 32 F to 0 C", () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("Convert 0 C to 32 F", () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});
