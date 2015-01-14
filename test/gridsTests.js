/*global define, describe, it, console, beforeEach, afterEach */
define(["jquery"], function ($) {
    "use strict";
    
    // TODO: Move this to helpers.
    function getPseudoStylePropertyValue (selector, pseudoStyle, property) {
        return window.getComputedStyle(
	                   document.querySelector(selector), pseudoStyle)
                        .getPropertyValue(property);
    }
    
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
            it("has clear fix display property applied", function () {
                var selector = "div.grid";
                var propertyValue = getPseudoStylePropertyValue('div.grid', ':after', 'display');
                // TODO: Replace with assertion library.
                if (propertyValue !== "table") {
                    throw new Error("Invalid display property");
                }
            });
        });
        
    });
});