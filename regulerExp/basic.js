let pattern = 'pw';
let regExone = new RegExp(pattern);
let flag = 'gi';
let regExTwo = new RegExp(pattern,flag);

let regExThree = /pw/gi;
const strToCheck = "PW is growing at a rapid speed and recently the are working on pw skills to create skills based Pwcontent ";

let result =regExThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regExTwo)
console.log(anotherResult);


const oneMoreResult = strToCheck.replace(regExThree,'p-w');
console.log(oneMoreResult);


const webUrl = 'https://pwskills.com/avadhesh%20chauhan';

const useableUrl = webUrl.replace(/%20/gi,'-');
console.log(useableUrl);




const webUrl1 = 'https://pwskills.com/avadhesh%90chauhan';

const useableUrl1 = webUrl1.replace(/%\d0/gi,'-');
console.log(useableUrl1);
