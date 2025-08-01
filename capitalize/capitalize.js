function capitalize(s   ){
    let charArray = s.split('');
    charArray[0]=charArray[0].toUpperCase();
    return charArray.join('');
}

module.exports=capitalize;