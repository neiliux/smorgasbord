/*global define, describe, it, console */
define(["jquery"], function ($) {
    "use strict";
    
    describe("Infrastructure", function () {
        it("has smorgasbord CSS loaded", function () {
            var body = $("body"),
                linkRef = $("link[href=\"/base/test/smorgasbord-build.css\"]", body);
            
            // TODO: Replace with assertion library.
            if (linkRef.length !== 1) {
                throw new Error("Smorgasbord CSS is not on the test page.");
            }
        });
    });
});