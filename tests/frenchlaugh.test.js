const {expect} = require("chai");
const {frenchlaugh} = require("../index.js")

describe("frenchlaugh", function () {
    it("Should return an error if the input is not string", () => {
        const invalidFrenchLaugh = frenchlaugh(1234);
        const validFrenchLaugh = frenchlaugh("Hello");
        expect(invalidFrenchLaugh).to.throw();
        expect(validFrenchLaugh).to.not.throw();
      });

    it("Should put 'hon hon hon' before each dot in a sentence", () => {
        const dotFrenchLaugh = frenchlaugh("The weather is nice today.");
        expect(dotFrenchLaugh).to.equal("The weather is nice today hon hon hon.");
    });
  
    it("Should put 'hon hon hon' before each exclamation mark in a sentence", () => {
        const angryFrenchLaugh = frenchlaugh("Sacrebleu!");
        expect(angryFrenchLaugh).to.equal("Sacrebleu hon hon hon!");
    });

    it("Should put 'hon hon hon' before each dot in a sentence", () => {
        const niceFrenchLaugh = frenchlaugh("Would you like a croissant?");
        expect(niceFrenchLaugh).to.equal("Would you like a croissant hon hon hon?");
    });
});