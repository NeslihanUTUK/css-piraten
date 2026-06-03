import { SelectorComponent, Visitor } from "lightningcss";

export const cssTransform: { visitor: Visitor<{}> } = {
  visitor: {
    DashedIdent(dashedIdent) {
      console.log(dashedIdent);
      return dashedIdent.replace(
        /^--(_?)(utrecht|ams|rhc|basis)-/,
        "--$1nlds-",
      );
    },
    Rule: {
      keyframes(keyframe) {
        console.log(keyframe);
      },
    },
    Selector(selector) {
      return selector.map((component) => {
        if (component.type === "pseudo-class") {
          component.selectors
            ?.flat()
            .map((pseudoSelector: SelectorComponent) => {
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
