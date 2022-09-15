function capitalize(string){
    let new_str = string.split('');
    let cap = new_str[0].toUpperCase()
    new_str.shift();
    let capitalized = cap + new_str.join('');
    // console.log(capitalized, typeof(capitalized))
    return capitalized;
}

// capitalize('hello')
module.exports = capitalize