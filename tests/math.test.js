const { calculateTip } = require("../src/math");

test("Total tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});
