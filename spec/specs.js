describe('check reversed copy of word for palindromity', function() {
  it("will return true for a palindrome", function() {
    expect(palindrome("otto")).to.eql(true);
  });
  it("will return false for a non-palindrome", function() {
    expect(palindrome("auto")).to.eql(false);
  });
  it("will return false for a different non-palindrome", function() {
    expect(palindrome("allf")).to.eql(false);
  });
});
