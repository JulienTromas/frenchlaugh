module.exports = function frenchlaugh(string) {
    if (typeof string !== "string") throw new TypeError("You need a string to add a french laugh!");
    let lastCharacter = string.slice(-1);
    switch (lastCharacter){
      case ".":
        return string.replace(/\./g, " hon hon hon.");
        break;

      case "!":
        return string.replace(/\!/g, " hon hon hon!");
        break;

      case "?":
          return string.replace(/\?/g, " hon hon hon?");
          break;

    }
    return string;
  };