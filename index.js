//1. Converts radiant to degree
function radiantToDegree(r) {
    // validate
    if (r != null && r != undefined && !isNaN(r)) {
        return r * (180 / Math.PI);
    }
    else {
        return "Please provide a valid input";
    }
}
// console.log(radiantToDegree(544));
// console.log(radiantToDegree('DSFJH'));

//2. check the file is javascript or not
function isJavaScript(file) {
    return file.endsWith(".js");
}
// console.log(isJavaScript("app.ffd"));
// console.log(isJavaScript("app.js"));

//3. oilPrice
// Calculates the price of oil ( diesel = 114bdt , petrol=130 bdt , octane = 135bdt ) & return total price
function oilPrice(diesel, petrol, octane) {
    // validate
    if (diesel < 0 || petrol < 0 || octane < 0) {
        return "Invalid input";
    }
    return diesel * 114 + petrol * 130 + octane * 135;
}
// console.log(oilPrice(-1, 2, 3));
// console.log(oilPrice(1, 2, 3));

//4. 50 people can go on reserved bus ,on microbus 11 people can go & rest of the people will go on public bus , public bus fare is 230 bdt 
function publicBus(people) {
    if (people >= 61) {
        let reverseBusPeople = 50;
        let microBusPeople = 11;
        let publicBusPeople = people - reverseBusPeople - microBusPeople;
        let publicBusFare = publicBusPeople * 230;
        return publicBusFare;
    }
    else {
        return "Not enough people";
    }
}
// console.log(publicBus(61));

//5. {name:"Nahid", friend:"test"} & {name:"test", friend:"Nahid"} => return true if name & friend is same
function isBestFriend(obj1, obj2) {
    // if obj1,obj2 is not object return wrong input
    if (typeof obj1 != "object" || typeof obj2 != "object") {
        return "Wrong input";
    }
    else {
        if (obj1.name == obj2.friend && obj1.friend == obj2.name) {
            return true;
        }
        else {
            return false;
        }
    }
}
// console.log(isBestFriend({ name: "Nahid", friend: "test" }, { name: "test", friend: "Null" }));
// console.log(isBestFriend({ name: "Nahid", friend: "test" }, { name: "test", friend: "Nahid" }));
// console.log(isBestFriend("Nahid", { name: "test", friend: "Nahid" }));