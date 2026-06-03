import { SelectorComponent, Visitor } from "lightningcss";

export const cssTransform: { visitor: Visitor<{}> } = {
  visitor: {
    DashedIdent(dashedIdent) {
      console.log(dashedIdent);
      return dashedIdent.replace(
        /^--(_?)(utrecht|amsterdam|rhc)-/,
        "--$1nlds-",
      );
    },
    Selector(selector) {
      return selector.map((component) => {
        if (component.type === "pseudo-class") {
          component.selectors
            ?.flat()
            .map((pseudoSelector: SelectorComponent) => {
              if (pseudoSelector.type === "class") {
                pseudoSelector.name = pseudoSelector.name.replace(
                  /^(utrecht|amsterdam|rhc)-/,
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
          name: component.name.replace(/^(utrecht|amsterdam|rhc)-/, "nlds-"),
        };
      });
    },
  },
};
