let definetlyNotAString: any = 'I am a string';


// strlength doesn't act on "any" type so we have to explicitly type convert it string..
//Both of the type casting work fine 
let strLength1 = (definetlyNotAString as string).length;

let strLength2 = (<string> definetlyNotAString).length;