const date = new Date();

let currentYear: number = date.getFullYear();
let currentMonth: number = date.getMonth();
let currentDay: number = date.getDate();

console.log(currentDay,"/", currentMonth, "/", currentYear);

let hours: number = date.getHours();
let amPm: string;
if(hours > 12){
    amPm = "PM" 
} else {
    amPm = "AM"
}

let minutes: number = date.getMinutes();

console.log(hours,":", minutes, "", amPm)

interface globalTime {
    America: any,
    UK: any,
    Russia: any,
    Germany: any
    China: any,
    Japan: any
}

function global(): void {
    let differentZones: globalTime = {
        America: hours - 10,
        UK: hours -5,
        Russia: hours - 2,
        Germany: hours - 4,
        China: hours + 2,
        Japan: hours + 3
    }
    console.log("Global Time:",differentZones)
}

global();