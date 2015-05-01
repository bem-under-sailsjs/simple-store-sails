require("sails-test-helper");

describe("IndexPageController", function() {

    describe("#HTTP", function() {
        describe("GET /", function() {
            it("should be successful", function(done) {
                request.get("/")
                    .expect(200)
                    .end(done);
            });
        });
    });
});
