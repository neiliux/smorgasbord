/*global define, describe, it, require */
define(["jquery"], function ($) {
    "use strict";
    var expect = require("chai").expect;
    
    describe("Infrastructure", function () {
        it("has smorgasbord CSS loaded", function () {
            var body = $("body"),
                linkRef = $("link[href=\"/base/test/smorgasbord-build.css\"]", body);
            
            expect(linkRef).to.have.lengthOf(1);
        });
    });
});