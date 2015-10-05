'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];
function intToRoman(number){
    if(number == 0){
        return 'N';
    }
    var resultString = '';
    var i = reference.length - 2;
    while(number > 0){
        if (number >= reference[i]){
            resultString += reference[i+1];
            number -= reference[i];
        }else{
            i -= 2;
        }
    }
    return resultString;
}
if (hours > 23 || minutes > 59 || hours < 0 || minutes < 0){
    console.log('Время указано не верно');
} else{
    var reference = [1, 'I', 4, 'IV', 5, 'V', 9, 'IX', 10, 'X', 40, 'XL', 50, 'L'];
    var resultString = intToRoman(hours)+ ':' + intToRoman(minutes);
    console.log(resultString);
    var asciiResult = '';
    var asciiDots =
        ['      ',
        ' _    ',
        '(_)   ',
        ' _    ',
        '(_)   ',
        '      '];
    var asciiN =
        [' ____  _____    ',
        '|_   \\|_   _|   ',
        '  |   \\ | |     ',
        '  | |\\ \\| |     ',
        ' _| |_\\   |_    ',
        '|_____|\\____|   '];
    var asciiI =
        [' _____    ',
        '|_   _|   ',
        '  | |     ',
        '  | |     ',
        ' _| |_    ',
        '|_____|   '];
    var asciiV =
        [' ____   ____    ',
        '|_  _| |_  _|   ',
        '  \\ \\   / /     ',
        '   \\ \\ / /      ',
        '    \\ \' /       ',
        '     \\_/        '];
    var asciiX =
        [' ____  ____    ',
        '|_  _||_  _|   ',
        '  \\ \\  / /     ',
        '   > `\' <      ',
        ' _/ /\'`\\ \\_    ',
        '|____||____|   '];
    var asciiL =
        [' _____       ',
        '|_   _|      ',
        '  | |        ',
        '  | |   _    ',
        ' _| |__/ |   ',
        '|________|   '];
    for (var j = 0; j < asciiI.length; j++){
        asciiResult = '';
        for (var i = 0; i < resultString.length; i++) {
            switch (resultString[i]) {
                case ':':
                    asciiResult += asciiDots[j];
                    break;
                case 'N':
                    asciiResult += asciiN[j];
                    break;
                case 'I':
                    asciiResult += asciiI[j];
                    break;
                case 'V':
                    asciiResult += asciiV[j];
                    break;
                case 'X':
                    asciiResult += asciiX[j];
                    break;
                case 'L':
                    asciiResult += asciiL[j];
                    break;
            }
        }
        console.log(asciiResult);
    }
}