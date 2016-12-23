var expect = require("chai").expect;
var accentFold = require("../index");

describe("#accentFold", function () {

    it("should recognize simple accents", function () {
        expect(accentFold("Fulanilo López", "lo")).to.equal("Fulani<b>lo</b> <b>Ló</b>pez");
        expect(accentFold("Erik Lørgensen", "lo")).to.equal("Erik <b>Lø</b>rgensen");
        expect(accentFold("James Lö", "lo")).to.equal("James <b>Lö</b>");
    });

    it("should wrap matched fragment with custom tag added in second parameter '<strong>'", function () {
        expect(accentFold("Fulanilo López", "lo", "strong")).to.equal("Fulani<strong>lo</strong> <strong>Ló</strong>pez");
    });

});