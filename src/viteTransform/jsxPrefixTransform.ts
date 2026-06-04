export const jsxPrefixTransform = (code: string) => {
  console.log("found className:", code);
  const matches = Array.from(code.matchAll(findClassNameRegex));
  return matches.reduce((acc, match) => {
    const originalClassNames = match[1];
    const transformedClassNames = replacePrefixes(originalClassNames);
    return acc.replace(originalClassNames, transformedClassNames);
  }, code);
};

export const findClassNameRegex = /className\s*[:=]\s*["'`]([^"']*)["'`]/g;

export const replacePrefixes = (classNames: string) => {
  return classNames
    .split(/\s+/)
    .map((className) => {
      return className.replace(/^(utrecht|ams|rhc|basis)-/, "nlds-");
    })
    .join(" ");
};
