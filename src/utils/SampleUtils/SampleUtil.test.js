import { add } from ".";
describe("add  tests", () => {
    it("should return sum of two numbers", () => {
        expect(add(1, 2)).toBe(3)
    });
    it("should not add strings", () => {
        expect(add("1", 2)).toBe(null)

    })
    it("should not add arrays", () => {
        expect(add("1", 2)).toBe(null)

    })
});
