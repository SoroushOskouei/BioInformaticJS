
// To Upper Case

function Upper(seq){
    return seq.toUpperCase()
}

// Validate - if all characters are nucleotides 

function Validate(seq){
    var temp = []
    var OK = true;
    for (let i=0;i<seq.length;i++){
        if (seq.toUpperCase()[i] == "A"){
            temp.push("A")}
        else if (seq.toUpperCase()[i] == "C"){
            temp.push("C")}
    
        else if (seq.toUpperCase()[i] == "T"){
            temp.push("T")}
    
        else if (seq.toUpperCase()[i] == "G"){
            temp.push("G")}

        else{
            console.log('wronginput')
            OK = false;
            break;

        }
    }

    if(OK){
        return seq.toUpperCase();
    }
    

} 


// Counting nucleotides in a string

function CountN(seq){
    tempJSON = {"A":0, "C":0, "G":0, "T":0,}
    
    for (let i=0;i<seq.length;i++){
        switch(Validate(seq)[i]) {
            case "A":
                tempJSON.A = tempJSON.A+1;
                break;
            case "T":
                tempJSON.T = tempJSON.T+1;
                break;
            case "C":
                tempJSON.C = tempJSON.C+1;
                break;
            case "G":
                tempJSON.G= tempJSON.G+1;
                break;
        }
    }
    return tempJSON;
}


// Transcript

function Transcript(seq){
    return seq = Validate(seq).replace(/T/g,"U");
}

// Reverse Complement

function RC(seq){
    seq1 = Validate(seq);

    rc = "";

    for (let i=0;i<seq.length;i++){
        if (seq.toUpperCase()[i] == "A"){
            rc = ("T").concat(rc);}

        else if (seq.toUpperCase()[i] == "C"){
            rc = ("G").concat(rc);}
    
        else if (seq.toUpperCase()[i] == "T"){
            rc = ("A").concat(rc);}
    
        else if (seq.toUpperCase()[i] == "G"){
            rc = ("C").concat(rc);}
    }

    return rc;
}

function Codons(seq){


    var codons1 = [];
    var codons2 = [];
    var codons3 = [];

    for(let i=0;i<seq.length-2;i=i+3){
        codons1.push(Validate(seq)[i]+Validate(seq)[i+1]+Validate(seq)[i+2])
    }
    for(let i=1;i<seq.length-2;i=i+3){
        codons2.push(Validate(seq)[i]+Validate(seq)[i+1]+Validate(seq)[i+2])
    }
    for(let i=2;i<seq.length-2;i=i+3){
        codons3.push(Validate(seq)[i]+Validate(seq)[i+1]+Validate(seq)[i+2])
    }

    var Allcodons = {"first":codons1,"second":codons2,"third":codons3};
    return Allcodons;



}

function Codons2(seq){

    var codons1 = [];
    var codons2 = [];
    var codons3 = [];
    var codons4 = [];
    var codons5 = [];
    var codons6 = [];
    

    for(let i=0;i<seq.length-2;i=i+3){
        codons1.push(Validate(seq)[i]+Validate(seq)[i+1]+Validate(seq)[i+2])
    }
    for(let i=1;i<seq.length-2;i=i+3){
        codons2.push(Validate(seq)[i]+Validate(seq)[i+1]+Validate(seq)[i+2])
    }
    for(let i=2;i<seq.length-2;i=i+3){
        codons3.push(Validate(seq)[i]+Validate(seq)[i+1]+Validate(seq)[i+2])
    }

    for(let i=0;i<seq.length-2;i=i+3){
        codons4.push(RC(seq)[i]+RC(seq)[i+1]+RC(seq)[i+2])
    }
    for(let i=1;i<seq.length-2;i=i+3){
        codons5.push(RC(seq)[i]+RC(seq)[i+1]+RC(seq)[i+2])
    }
    for(let i=2;i<seq.length-2;i=i+3){
        codons6.push(RC(seq)[i]+RC(seq)[i+1]+RC(seq)[i+2])
    }

    var Allcodons = {"first":codons1,"second":codons2,"third":codons3,
                     "fourth":codons4,"fifth":codons5,"sixth":codons6};

    return Allcodons;

}

function Translate(seq){
    tc = { 
        "GCT":"A", "GCC": "A", "GCA":"A", "GCG": "A",
        "TGT":"C", "TGC": "C",
        "GAT":"D", "GAC": "D",
        "GAA":"E", "GAG": "E",
        "TTT":"F", "TTC": "F",
        "GGT":"G", "GGC": "G", "GGA":"G", "GGG": "G",
        "CAT":"H", "CAC": "H",
        "ATA":"I", "ATT": "I", "ATC":"I",
        "AAA":"K", "AAG": "K",
        "TTA":"L", "TTG": "L", "CTT":"L", "CTC": "L", "CTA":"L", "CTG": "L",
        "ATG":"M", "AAT": "N", "AAC":"N",
        "CCT":"P", "CCC": "P", "CCA":"P", "CCG": "P",
        "CAA":"Q", "CAG": "Q",
        "CGT":"R", "CGC": "R", "CGA":"R", "CGG": "R", "AGA":"R", "AGG": "R",
        "TCT":"S", "TCC": "S", "TCA":"S", "TCG": "S", "AGT":"S", "AGC": "S",
        "ACT":"T", "ACC": "T", "ACA":"T", "ACG": "T",
        "GTT":"V", "GTC": "V", "GTA":"V", "GTG": "V",
        "TGG":"W",
        "TAT":"Y", "TAC": "Y",
        "TAA":"-", "TAG": "-", "TGA": "-"
    }
    var codons = Codons(seq);
    var trans1 = "";
    var trans2 = "";
    var trans3 = "";

    // First possible starting from zero

    for(let i=0;i<Codons(seq).first.length;i++){
        trans1 = trans1+tc[Codons(seq).first[i]];
    }

    // Second possible starting from one
    for(let i=0;i<Codons(seq).second.length;i++){
        trans2 = trans2+tc[Codons(seq).second[i]];
    }

    // Third possible starting from two
    for(let i=0;i<Codons(seq).third.length;i++){
        trans3 = trans3+tc[Codons(seq).third[i]];
    }
    var translations = {"first":trans1,"second":trans2,"third":trans3};

    return translations;

}

function Translate2(seq){
    tc = { 
        "GCT":"A", "GCC": "A", "GCA":"A", "GCG": "A",
        "TGT":"C", "TGC": "C",
        "GAT":"D", "GAC": "D",
        "GAA":"E", "GAG": "E",
        "TTT":"F", "TTC": "F",
        "GGT":"G", "GGC": "G", "GGA":"G", "GGG": "G",
        "CAT":"H", "CAC": "H",
        "ATA":"I", "ATT": "I", "ATC":"I",
        "AAA":"K", "AAG": "K",
        "TTA":"L", "TTG": "L", "CTT":"L", "CTC": "L", "CTA":"L", "CTG": "L",
        "ATG":"M", "AAT": "N", "AAC":"N",
        "CCT":"P", "CCC": "P", "CCA":"P", "CCG": "P",
        "CAA":"Q", "CAG": "Q",
        "CGT":"R", "CGC": "R", "CGA":"R", "CGG": "R", "AGA":"R", "AGG": "R",
        "TCT":"S", "TCC": "S", "TCA":"S", "TCG": "S", "AGT":"S", "AGC": "S",
        "ACT":"T", "ACC": "T", "ACA":"T", "ACG": "T",
        "GTT":"V", "GTC": "V", "GTA":"V", "GTG": "V",
        "TGG":"W",
        "TAT":"Y", "TAC": "Y",
        "TAA":"-", "TAG": "-", "TGA": "-"
    }
    var trans1 = "";
    var trans2 = "";
    var trans3 = "";
    var trans4 = "";
    var trans5 = "";
    var trans6 = "";

    // First possible starting from zero

    for(let i=0;i<Codons2(seq).first.length;i++){
        trans1 = trans1+tc[Codons2(seq).first[i]];
    }

    // Second possible starting from one
    for(let i=0;i<Codons2(seq).second.length;i++){
        trans2 = trans2+tc[Codons2(seq).second[i]];
    }

    // Third possible starting from two
    for(let i=0;i<Codons2(seq).third.length;i++){
        trans3 = trans3+tc[Codons2(seq).third[i]];
    }

    // First possible reverse starting from zero
    for(let i=0;i<Codons2(seq).fourth.length;i++){
        trans4 = trans4+tc[Codons2(seq).fourth[i]];
    }

    // Second possible reverse starting from one
    for(let i=0;i<Codons2(seq).fifth.length;i++){
        trans5 = trans5+tc[Codons2(seq).fifth[i]];
    }

    // Third possible reverse starting from two
    for(let i=0;i<Codons2(seq).sixth.length;i++){
        trans6 = trans6+tc[Codons2(seq).sixth[i]];
    }

    var translations = {"first":trans1,"second":trans2,"third":trans3, "fourth":trans4,"fifth":trans5,"sixth":trans6};

    return translations;

}

var data1=[]

function chartcg(seq){
    data1 = [
  {
    
    x: ['A', 'T', 'C','G'],
    y: [CountN(seq).A, CountN(seq).T, CountN(seq).C,CountN(seq).G],
    type: 'bar'
  }
];
    Plotly.newPlot('myDiv', data1);
}


function GivePrimers(seq){
    fwdpr="";
    rvspr="";
    for(let i=0;i<20;i++){
        fwdpr=fwdpr.concat(seq[i])
        rvspr=rvspr.concat(seq[seq.length-20+i])
    }
    rvspr=RC(rvspr);
    return {'forward':Validate(fwdpr),'Reverse':rvspr}
}

function sbsqcCnfrm(seq1,seq2){
    included = false;
    for(let i=0; i<seq2.length-seq1.length+1; i++){
        tempseq2cut = "";
        for(let j=0; j<seq1.length; j++){
            tempseq2cut = tempseq2cut + seq2[i+j];
            
        }
        // console.log(tempseq2cut)
        if(tempseq2cut == seq1){
            included = true;
            
        }
    }
    console.log(included);
}


function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}


function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function myalgor(seq1,seq2){
    var included = false;
    var match = [];
    var tester =  new Array(seq1.length).fill(1);
    var positions = getIndicesOf(seq1[seq1.length-1],seq2);
    for(let j = 0; j < positions.length; j++){
        for(let i = 0; i < seq1.length;i++){
            if(seq2[positions[j] - i] == seq1[seq1.length-1-i]){
                match.push(1);
                // console.log(seq2[positions[j] - i] , seq1[seq1.length-1-i])
            } 
            
        }

        if(arrayEquals(match,tester)){
            included = true;
            
            
        }
        match = [];

        // console.log(match)
        // if( match == tester){
        //     console.log(match)
        //     match = [];
        //     included = true;
        //     console.log(included);
        // }
    }
    console.log(included);
}
