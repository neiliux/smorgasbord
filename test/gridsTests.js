/*global document, window, define, describe, it, console, beforeEach, afterEach, require */
define(["jquery", "quasiExcerpt"], function ($, quasiExcerpt) {
    "use strict";
    var expect = require("chai").expect;

    describe("Grids", function () {
        beforeEach(function () {
            var gridContainer = $('<div class="grid"></div>');
            gridContainer.append('<div class="grid-h-1-3"></div>');
            $("body").append(gridContainer);
        });

        afterEach(function () {
            $("div.grid").remove();
        });

        describe('Grid container', function () {
            var selector = "div.grid",
                propertyKey = "display",
                expectedDisplayPropertyValue = "table";

            describe(":before", function () {
                var pseudoSelector = ":before";

                it("has clear fix display property applied", function () {
                    var propertyValue = quasiExcerpt.getPseudoStylePropertyValue(selector, pseudoSelector, propertyKey);
                    expect(propertyValue).to.equal(expectedDisplayPropertyValue);
                });
            });

            describe(":after", function () {
                var psuedoSelector = ":after";

                it("has clear fix display property", function () {
                    var propertyValue = quasiExcerpt.getPseudoStylePropertyValue(selector, psuedoSelector, propertyKey);
                    expect(propertyValue).to.equal(expectedDisplayPropertyValue);
                });
            });
        });
    });
});
