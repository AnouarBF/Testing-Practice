const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const UpperCaseAlphabet = function(arr){
    let a = [];
    for(let i = 0; i < arr.length; i++){
        a.push(arr[i].toUpperCase());
    }
    return a;
}
const upperCase = UpperCaseAlphabet(alphabets);

const caesar = function(str, shift) {
    let arr = str.split("");
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(upperCase.indexOf(arr[i]) < 0 && alphabets.indexOf(arr[i]) < 0){
            newArr.push(arr[i]);
        }else{
            if(upperCase.includes(arr[i])){

                if((upperCase.indexOf(arr[i]) + shift) > arr.length){

                    arr[i] = upperCase[(upperCase.indexOf(arr[i]) + shift) % upperCase.length]
                    newArr.push(arr[i])

                }else if((upperCase.indexOf(arr[i]) + shift) < 0){

                    arr[i] = upperCase[upperCase.length + (upperCase.indexOf(arr[i]) + shift)]
                    newArr.push(arr[i]);

                }
                else{
                    arr[i] = upperCase[upperCase.indexOf(arr[i]) + shift];
                    newArr.push(arr[i]);
                }
            }else{
                if((alphabets.indexOf(arr[i]) + shift) > arr.length){
                    arr[i] = alphabets[(alphabets.indexOf(arr[i]) + shift) % alphabets.length]
                    newArr.push(arr[i]);
                }else if((alphabets.indexOf(arr[i]) + shift) < 0){

                    arr[i] = alphabets[alphabets.length + (alphabets.indexOf(arr[i]) +shift)];
                    newArr.push(arr[i]);

                }
                else{
                    arr[i] = alphabets[alphabets.indexOf(arr[i]) + shift];
                    newArr.push(arr[i]);
                }
            }
        }
    }
    return newArr.join("");
};

// Do not edit below this line
module.exports = caesar;
