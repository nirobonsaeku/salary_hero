import { calculateEarning, toPrice } from "@utils";
import { it, describe, expect, jest } from "@jest/globals";

describe("toPrice", () => {
  it("should return 0 if input is null or undefined", () => {
    expect(toPrice(null)).toBe(0);
    expect(toPrice(undefined)).toBe(0);
  });

  it("should return 0 if input 0", () => {
    expect(toPrice(0)).toBe(0);
  });

  it("should handle string inputs", () => {
    expect(toPrice("1000")).toBe("1,000");
    expect(toPrice("1234.56")).toBe("1,234.56");
  });

  it("should handle number inputs", () => {
    expect(toPrice(1000)).toBe("1,000");
    expect(toPrice(1234.56)).toBe("1,234.56");
  });
});

describe("calculateEarning", () => {
  it("should return correct earnings based on current date", () => {
    const mockDate = new Date("2024-04-30T00:00:00.000Z"); // May 30, 2024
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const earnings = 30000;
    const expectedEarnings = 15000; // On day 30, half of the earnings
    expect(calculateEarning(earnings)).toBe(expectedEarnings);
    jest.spyOn(global, "Date").mockRestore(); // Restore the original Date implementation
  });
});
