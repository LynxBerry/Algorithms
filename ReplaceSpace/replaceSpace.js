var sentence = new String("We are happy.");
var token = "%20";
function replaceWithToken(sentence, token) {
    //scan sentence and calculate new length.
    var newlength = sentence.length;
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            newlength += token.length - 1;
        }
    }
    var p1 = sentence.length - 1;
    var p2 = newlength - 1;
    while (p1 >= 0) {
        if (sentence[p1] === ' ') {
            //p2--;
            for (var i = token.length - 1; i >= 0; i--) {
                sentence[p2] = token[i];
                p2--;
            }
            p1--;
            if (p1 < 0) {
                break;
            }
            ;
        }
        sentence[p2] = sentence[p1];
        p1--;
        p2--;
    }
}
replaceWithToken(sentence, token);
console.log(sentence);
//# sourceMappingURL=replaceSpace.js.map