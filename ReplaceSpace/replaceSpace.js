var MyString = (function () {
    function MyString(text) {
        this.text = new Array(text.length);
        for (var i = 0; i < text.length; i++) {
            this.text[i] = text[i];
        }
    }
    MyString.prototype.setItem = function (index, char) {
        this.text[index] = char;
    };
    MyString.prototype.getItem = function (index) {
        return this.text[index];
    };
    MyString.prototype.toString = function () {
        return this.text.join('');
    };
    Object.defineProperty(MyString.prototype, "length", {
        get: function () {
            return this.text.length;
        },
        enumerable: true,
        configurable: true
    });
    return MyString;
}());
var sentence = new MyString("We are happy.");
var token = new MyString("%20");
function replaceWithToken(sentence, token) {
    //scan sentence and calculate new length.
    // The token.length should not < 2;
    var newlength = sentence.length;
    for (var i = 0; i < sentence.length; i++) {
        if (sentence.getItem(i) === ' ') {
            newlength += token.length - 1;
        }
    }
    var p1 = sentence.length - 1;
    var p2 = newlength - 1;
    while (p1 >= 0) {
        if (sentence.getItem(p1) === ' ') {
            //p2--;
            for (var i = token.length - 1; i >= 0; i--) {
                sentence.setItem(p2, token.getItem(i));
                p2--;
            }
            p1--;
            if (p1 < 0) {
                break;
            }
            ;
        }
        sentence.setItem(p2, sentence.getItem(p1));
        p1--;
        p2--;
    }
}
replaceWithToken(sentence, token);
console.log(sentence.toString());
//# sourceMappingURL=replaceSpace.js.map