//Given the following code, can you tell the order of the console logs without running the code?

let mealCount = 0;
let workedHours = 0;

wakeUp(9);

function wakeUp(time) {
  console.log("⏰ good morning!"); //1- this is the first function and it will be called and logs good morning
  if (time < 8) {
    eatBreakfast(); // wakeup time is 9 so this function will not be called
  }
  commute(); // 2- this function will be called and logs reaching the office
}

function commute() {
  console.log("🚴 reaching the office...");
  pretendToWork(); // 3- this function will be called and logs being busy
}

function goHome() {
  console.log("🚴 going back home...");
  if (mealCount === 2) {
    goToGym(); // mealcount is equals to 0 so it will be not called
  } else {
    watchTV(); // 7- this will be clled and logs let's call it a day bcz mealcount is not 2..it equals to 0
  }
}

function eatBreakfast() {
  console.log("☕ nice way to start the day!");
  mealCount++;
}

function eatLunch() {
  console.log("🥪 lunch with colleagues!");
  mealCount++;
}

function pretendToWork() {
  console.log("🛠️ being busy");
  workedHours = workedHours + 4;
  if (workedHours === 4) {
    eatLunch(); // 4- now this function will be called and logs lunch with colleages!
    pretendToWork(); //5- then it is time to go back work and logs being busy
  } else {
    goHome(); // 6- now this function will be called and logs going back home
  }
}

function goToGym() {
  console.log("🏃‍♀️ keeping it fit");
}

function watchTV() {
  console.log("📺 let's call it a day");
}
