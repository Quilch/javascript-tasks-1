'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];
if (hours > 23 || minutes > 59){
    console.log('Время указано не верно');
} else{
    var romanHours = '';
    var romanMinutes = '';
    var firstDigit = hours / 10 - hours / 10 % 1;
    var secondDigit = hours % 10;
    switch (firstDigit) {
        case 2:
            romanHours = 'XX';
            break;
        case 1:
            romanHours = 'X';
            break;
        default :
            if (secondDigit == 0) {
                romanHours = 'N';
            }
            break;
    }
    switch (secondDigit){
        case 9:
            romanHours += 'IX';
            break;
        case 4:
            romanHours +='IV';
            break;
        default:
            if (secondDigit >= 5){
                romanHours +='V';
                secondDigit -= 5;
            }
            while(secondDigit != 0){
                romanHours +='I';
                secondDigit--;
            }
            break;
    }
    firstDigit = minutes / 10 - minutes / 10 % 1;
    secondDigit = minutes % 10;
    switch (firstDigit){
        case 5:
            romanMinutes +='L';
            break;
        case 4:
            romanMinutes +='XL';
            break;
        case 0:
            if(secondDigit == 0){
                romanMinutes +='N';
            }
            break;
        default :
            while(firstDigit != 0){
                romanMinutes += 'X';
                firstDigit--;
            }
            break;

    }
    switch (secondDigit){
        case 9:
            romanMinutes += 'IX';
            break;
        case 4:
            romanMinutes +='IV';
            break;
        default:
            if (secondDigit >= 5){
                romanMinutes +='V';
                secondDigit -= 5;
            }
            while(secondDigit != 0){
                romanMinutes +='I';
                secondDigit--;
            }
            break;
    }
    var resultString = romanHours + ':' + romanMinutes;
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
    for (var j = 0; j < 6; j++){
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
/*
 ____  ____ 123 _____    123 ____   ____ 123 _____ 123   123 ____  _____ 1
|_  _||_  _|123|_   _|   123|_  _| |_  _|123|_   _|123 _ 123|_   \|_   _|
  \ \  / /  123  | |     123  \ \   / /  123  | |  123(_)123  |   \ | |  1
   > `' <   123  | |   _ 123   \ \ / /   123  | |  123 _ 123  | |\ \| |  1
 _/ /'`\ \_ 123 _| |__/ |123    \ ' /    123 _| |_ 123(_)123 _| |_\   |_ 1
|____||____|123|________|123     \_/     123|_____|123   123|_____|\____|

 */
