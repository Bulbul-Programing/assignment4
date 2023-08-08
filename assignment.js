function cubeNumber(number) {
    if(typeof number === 'number'){
        const cube = number * number * number;
        return cube;
    }
    else{
        const errorMessage = 'Please input a number';
        return errorMessage;
    }
}
// const result = cubeNumber(true);
// console.log(result)

function matchFinder(string1, string2) {
    if(typeof string1 === 'string' && typeof string2 === 'string'){
        if(string1.includes(string2)){
            return true;
        }
        else{
            return false
        }
    }
    else{
        const errorMessage = 'Please input a string';
        return errorMessage;
    }
}

// const string1 = 'John Doe';
// const string2 = 'ohn';
// const result = matchFinder(string1, string2);
// console.log(result)

function sortMaker(arr) {
    const firstNumber = arr[0];
    const secondNumber = arr[1];
    if(firstNumber >= 0 && secondNumber >= 0){
        if(firstNumber === secondNumber){
            const returnValue = 'equal';
            return returnValue;
        }
        else if(firstNumber < secondNumber){
            const largeToSmall = [secondNumber , firstNumber];
            return largeToSmall;
        }
        else{
            const defaultSequence = [firstNumber , secondNumber];
            return defaultSequence;
        }
    }
    else{
        const errorMessage = "Invalid Input";
        return errorMessage;
    }
}

// const numbers = [4, -2]
// const result = sortMaker(numbers);
// console.log(result);

function findAddress(obj) {
    if(obj.street === undefined && obj.house === undefined && obj.society === undefined){
        const street = '--' + ',' + '--' + ',' + '--';
        return street;
    }
    else if(obj.street == undefined && obj.house == undefined){
        const street = '--' + ',' + '--' + ','  + obj.society;
        return street;
    }
    else if(obj.house == undefined && obj.society == undefined){
        const street =obj.street + ',' + '--' + ',' + '--';
        return street;
    }
    else if(obj.street == undefined && obj.society == undefined){
        const street = '--' + ',' + obj.house + ',' + '--';
        return street;
    }
    else if(obj.street == undefined){
        const street = '--' + ',' + obj.house + ',' + obj.society;
        return street;
    }
    else if(obj.house == undefined){
        const street = obj.street + ',' + '--' + ',' + obj.society;
        return street;
    }
    else if(obj.society == undefined){
        const street = obj.street + ',' + obj.house + ',' + '--' ;
        return street;
    }
    else{
        const street = obj.street + ',' + obj.house + ',' + obj.society;
        return street;
    }
}

// const address = {street: 10, house:'15A', society: 'Earth Perfect'};
// const address = {street: 10, house:'15A', society: 'Earth Perfect'};
// const checkAddress = findAddress(address);
// console.log(checkAddress);

// const g = [];
// if(g.length === 0){
//     console.log('i am a pro')
// }

function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        const errorMessage = "Please input a valid array";
        return errorMessage;
    }
    else{
        let totalTaka = 0;
        for(let i = 0; i < changeArray.length; i++){
            const taka = changeArray[i];
            totalTaka += taka;
        }
        if(totalTaka >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}

const taka = [1,4,5];
const chipsPrice = 10;
const result = canPay(taka, chipsPrice);
console.log(result);