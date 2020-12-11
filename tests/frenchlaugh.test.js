const {expect} = require("chai");
const frenchlaugh = require("../index.js")

describe("frenchlaugh", function () {

    it("Should put 'hon hon hon' before the last dot in a sentence", () => {
        const dotFrenchLaugh = frenchlaugh("The weather is nice today.");
        expect(dotFrenchLaugh).to.equal("The weather is nice today hon hon hon.");
    });
  
    it("Should put 'hon hon hon' before the last exclamation mark in a sentence", () => {
        const angryFrenchLaugh = frenchlaugh("Sacrebleu!");
        expect(angryFrenchLaugh).to.equal("Sacrebleu hon hon hon!");
    });

    it("Should put 'hon hon hon' before the last question mark in a sentence", () => {
        const niceFrenchLaugh = frenchlaugh("Would you like a croissant?");
        expect(niceFrenchLaugh).to.equal("Would you like a croissant hon hon hon?");
    });
});