// code your solution here
function saturdayFun(param1 = "roller-skate") {
 return `This Saturday, I want to ${param1}!`
}

function mondayWork(param2 = "go to the office") {
    return `This Monday, I will ${param2}.`
}


function wrapAdjective(string = "*") {
    return function(param3 = "special") {
        return `You are ${string}${param3}${string}!`
    }
}

