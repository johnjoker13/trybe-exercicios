const searchEmployee = require("./searchEmployee");

describe("Testa a função searchEmployee", () => {
  it("Testa se a função searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });
  it("Ao receber um id e detail, retorne o objeto", () => {
    expect(searchEmployee("9852-2-2", "lastName")).toEqual("Cook");
  });

  it("Ao receber um id e detail, retorne o objeto", () => {
    expect(searchEmployee("4678-2", "firstName")).toEqual("Paul");
  });

  it("Ao receber um id e detail, retorne o objeto", () => {
    expect(searchEmployee("1256-4", "specialities")).toEqual([
      "Hooks",
      "Context API",
      "Tailwind CSS",
    ]);
  });
});
