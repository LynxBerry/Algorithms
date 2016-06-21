class MyString {
    private text: string[];
    constructor(text: string) {
        this.text = new Array(text.length);
        for (let i = 0; i < text.length; i++) {
            this.text[i] = text[i]; 
        }
    }

    public setItem(index: number, char: string):void {
        this.text[index] = char; 
    }

    public getItem(index: number): string {
        return this.text[index];
    }

    public toString() {
        return this.text.join('');
    }

    get length(): number {
        return this.text.length;

    }
}


let sentence = new MyString("We are happy.");

let token = new MyString("%20");


function replaceWithToken(sentence: MyString, token: MyString) {
    //scan sentence and calculate new length.
    // The token.length should not < 2;
    let newlength = sentence.length;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.getItem(i) === ' ') { // equals space.
            newlength += token.length - 1;
        }

    }

    let p1 = sentence.length - 1;
    let p2 = newlength - 1;

    while ( p1 >= 0) {
        if (sentence.getItem(p1) === ' ') {
            //p2--;
            for (let i = token.length -1; i >= 0; i--) {
                sentence.setItem(p2,token.getItem(i));
                p2--;
            }
            p1--;
            if (p1 < 0) {break};
        }
        sentence.setItem(p2, sentence.getItem(p1));
        p1--;
        p2--;
    }




}

replaceWithToken(sentence, token);
console.log(sentence.toString());
