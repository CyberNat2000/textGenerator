const Znaki= new Object();
Znaki.normal= ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "N", "n", "M", "m", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", `"`, `!`, `?`, `,`, `(`, `)`];
Znaki.OldEnglish= ["𝔄", "𝔞", "𝔅", "𝔟", "ℭ", "𝔠", "𝔇", "𝔡", "𝔈", "𝔢", "𝔉", "𝔣", "𝔊", "𝔤", "ℌ", "𝔥", "ℑ", "𝔦", "𝔍", "𝔧", "𝔎", "𝔨", "𝔏", "𝔩", "𝔑", "𝔫", "𝔐", "𝔪", "𝔒", "𝔬", "𝔓", "𝔭", "𝔔", "𝔮", "ℜ", "𝔯", "𝔖", "𝔰", "𝔗", "𝔱", "𝔘", "𝔲", "𝔙", "𝔳", "𝔚", "𝔴", "𝔛", "𝔵", "𝔜", "𝔶", "ℨ", "𝔷"];
Znaki.BOldEnglish= [`𝕬`, `𝖆`, `𝕭`, `𝖇`, `𝕮`, `𝖈`, `𝕯`, `𝖉`, `𝕰`, `𝖊`, `𝕱`, `𝖋`, `𝕲`, `𝖌`, `𝕳`, `𝖍`, `𝕴`, `𝖎`, `𝕵`, `𝖏`, `𝕶`, `𝖐`, `𝕷`, `𝖑`,  `𝕹`, `𝖓`, `𝕸`, `𝖒`, `𝕺`, `𝖔`, `𝕻`, `𝖕`, `𝕼`, `𝖖`, `𝕽`, `𝖗`, `𝕾`, `𝖘`, `𝕿`, `𝖙`, `𝖀`, `𝖚`, `𝖁`, `𝖛`,  `𝖂`, `𝖜`, `𝖃`, `𝖝`, `𝖄`, `𝖞`, `𝖅`, `𝖟`];
function zamiana(rodzaj, tekst) {
    switch(rodzaj){
        case `1`:
            rodzaj=Znaki.OldEnglish;
            break;
        case `2`:
            rodzaj=Znaki.BOldEnglish;
            break;
    }
    let tekst2= "";
    for(let i=0;i<tekst.length;i++){
        if (Znaki.normal.indexOf(tekst[i]) !== -1)
        tekst2+= `${rodzaj[Znaki.normal.indexOf(tekst[i])]}`;
        else {tekst2+=tekst[i];}  
    }
    document.getElementById("odwrocony").innerHTML="<h2>"+tekst2+"</h2>";
}
