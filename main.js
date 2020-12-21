const showall  = document.getElementById("showpara");
const copy  = document.getElementById("copy");
const passlength  = document.getElementById("passlength");
const uppercase  = document.getElementById("uppercase");
const lowercase  = document.getElementById("lowercase");
const number  = document.getElementById("number");
const symbol  = document.getElementById("symbol");
const generte  = document.getElementById("generate");



const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sym = "!@#$%^&*_-+*()="

function getupperelement(){
    return upper[Math.floor(Math.random() * upper.length)];
}
function getlowerelement(){
    return lower[Math.floor(Math.random() * lower.length)];
}
function getnumber(){
    return num[Math.floor(Math.random() * num.length)];

}
function getsymbol(){
    return sym[Math.floor(Math.random() * sym.length)];

}

function genpass(){

    


    const len = passlength.value;
    let pass = "";

    if(uppercase.checked){
        pass += getupperelement();
    }
    if(lowercase.checked){
        pass += getlowerelement();
    }
    if(number.checked){
        pass += getnumber();
    }
    if(symbol.checked){
        pass += getsymbol();
    }

    for( let i=pass.length  ; i<len; i++){
        const y = gene();
        pass += y;
    }
    showall.innerHTML =pass;



    
}

function gene(){
    const genearray  = [];
    if(uppercase.checked){
        genearray.push(getupperelement());
    }
    if(lowercase.checked){
        genearray.push(getlowerelement());
    }
    if(number.checked){
        genearray.push(getnumber());
    }
    if(symbol.checked){
        genearray.push(getsymbol());
    }

    

    return genearray[Math.floor(Math.random() * genearray.length)];
}

generte.addEventListener("click", ()=>{
 genpass();
});

copy.addEventListener("click" ,()=>{
    const textarea = document.createElement('textarea');
    const passs = showall.innerHTML;
    if(!passs){
        return;
    }
    textarea.value = passs;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("copy");
})