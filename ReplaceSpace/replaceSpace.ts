let sentence: String = new String("We are happy.");

let token: string = "%20";


function replaceWithToken(sentence: String, token: string) {
    //scan sentence and calculate new length.
    let newlength = sentence.length;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') { // equals space.
            newlength += token.length - 1;
        }

    }

    let p1 = sentence.length - 1;
    let p2 = newlength - 1;

    while ( p1 >= 0) {
        if (sentence[p1] === ' ') {
            //p2--;
            for (let i = token.length -1; i >= 0; i--) {
                sentence[p2] = token[i];
                p2--;
            }
            p1--;
            if (p1 < 0) {break};
        }
        sentence[p2] = sentence[p1];
        p1--;
        p2--;
    }




}

replaceWithToken(sentence, token);
console.log(sentence);
