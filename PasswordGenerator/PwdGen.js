var candidateChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@';
function genPwd(candidateChars, length, path) {
    if (length === 0) {
        console.log(path);
        return;
    }
    for (var i = 0; i < candidateChars.length; i++) {
        genPwd(candidateChars, length - 1, path + candidateChars[i]);
    }
}
genPwd(candidateChars, 32, "");
//# sourceMappingURL=PwdGen.js.map