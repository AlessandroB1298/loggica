import { getId } from "@/lib/helpers/nodeHelper";
import "@testing-library/jest-dom";

describe("Node Helper Functions", () => {
  it("should return string id", () => {
    const id = getId();
  });
});
