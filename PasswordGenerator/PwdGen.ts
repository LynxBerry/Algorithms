let candidateChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@';


function genPwd(candidateChars: string, length: number, path: string): void {
        if (length === 0) {
            console.log(path);
            return;
        }

        for(let i = 0; i < candidateChars.length; i++ ) {
            genPwd(candidateChars, length - 1, path + candidateChars[i]);
        }

}

genPwd(candidateChars, 32, "");