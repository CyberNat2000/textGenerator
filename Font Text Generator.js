const Znaki= new Object();
Znaki.normal= ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "N", "n", "M", "m", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", `"`, `!`, `?`, `,`, `(`, `)`];
Znaki.OldEnglish= ["𝔄", "𝔞", "𝔅", "𝔟", "ℭ", "𝔠", "𝔇", "𝔡", "𝔈", "𝔢", "𝔉", "𝔣", "𝔊", "𝔤", "ℌ", "𝔥", "ℑ", "𝔦", "𝔍", "𝔧", "𝔎", "𝔨", "𝔏", "𝔩", "𝔐", "𝔪", "𝔑", "𝔫", "𝔒", "𝔬", "𝔓", "𝔭", "𝔔", "𝔮", "ℜ", "𝔯", "𝔖", "𝔰", "𝔗", "𝔱", "𝔘", "𝔲", "𝔙", "𝔳", "𝔚", "𝔴", "𝔛", "𝔵", "𝔜", "𝔶", "ℨ", "𝔷"];
function zamiana(rodzaj, tekst) {
    let tekst2= "";
    for(let i=0;i<tekst.length;i++){
        if (Znaki.normal.indexOf(tekst[i]) !== -1)
        tekst2+= `${Znaki.OldEnglish[Znaki.normal.indexOf(tekst[i])]}`;
        else {tekst2+=tekst[i];}  
    }
    console.log(tekst2);
}