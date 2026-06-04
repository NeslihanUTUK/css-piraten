import { describe, expect, it } from "vitest";
import { jsxPrefixTransform } from "./jsxPrefixTransform";

describe("jsxPrefixTransform", () => {
  it("should transform classname prefixes to nlds-", () => {
    const input = `
                <div className="utrecht-button ams-card rhc-header basis-footer">
                    <span className="utrecht-text">Hello World</span>
                </div>`;

    const expectedOutput = `
                <div className="nlds-button nlds-card nlds-header nlds-footer">
                    <span className="nlds-text">Hello World</span>
                </div>`;

    const output = jsxPrefixTransform(input);

    expect(output).toBe(expectedOutput);
  });
});
