import { SelectorComponent, Visitor } from "lightningcss";

export const cssTransform: { visitor: Visitor<{}> } = {
  visitor: {
    DashedIdent(dashedIdent) {
      return dashedIdent.replace(
        /^--(_?)(utrecht|ams|rhc|basis)-/,
        "--$1nlds-",
      );
    },
    Rule: {
      keyframes(keyframe) {
        // todo: handle keyframes
      },
    },
    Selector(selector) {
      return selector.map((component) => {
        if (component.type === "pseudo-class" && "selectors" in component) {
          component.selectors
            ?.flat()
            .forEach((pseudoSelector: SelectorComponent) => {
              if (pseudoSelector.type === "class") {
                pseudoSelector.name = pseudoSelector.name.replace(
                  /^(utrecht|ams|rhc|basis)-/,
                  "nlds-",
                );
              }
            });

          return component;
        }

        if (component.type !== "class") {
          return component;
        }

        return {
          ...component,
          name: component.name.replace(/^(utrecht|ams|rhc|basis)-/, "nlds-"),
        };
      });
    },
  },
};
