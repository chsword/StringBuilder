/// <reference path="../src/StringBuilder.js" />


test("simple", function () {
    var sb = new StringBuilder();
    sb.append("a");
    sb.append("b");
    ok(sb.toString()=="ab");
});

test("serial", function () {
    var sb = new StringBuilder();
    sb.append("a").append("b");
    ok(sb.toString() == "ab");
    sb.clear();
    ok(sb.toString() == "");
});

test("params", function () {
    var sb = new StringBuilder();
    sb.appends("a","b");
    ok(sb.toString() == "ab", sb.toString());
});