//_____1st task_______//

let x = 0;
if ((x === 0)) {
    console.log('Невiрно')
}
else{
    console.log('Вiрно')
}

//_____2nd task_______//

let y = 10; //time
if ((y>=0 && y<=15)) {
    console.log('1st quarter')
}
else if ((y>15 && y<=30)) {
    console.log('2nd quarter')
}
else if ((y>30 && y<=45)) {
    console.log('3rd quarter')
}
else{
    console.log('4th quarter')
}


//________3rd task____________//

let z = 14; //day
if ((z>=1 && z<=10)) {
    console.log('1st part of the day')
}
else if ((z>10 && z<=20)) {
    console.log('2nd part of the day')
}
else{
    console.log('3rd part of the day')
}

//_________4th task___________//

let day_of_the_week;
switch ('Tuesday') { //type any day

case 'Monday':
console.log('go_for_a_walk');
break;

case 'Tuesday':
console.log('groceries');
 break;

case 'Wednesday':
console.log('library');
break;

case 'Thursday':
console.log('university');
break;

case 'Friday':
console.log('football');
break;

case 'Saturday':
console.log('have_a_nap');
break;

case 'Sunday':
console.log('sleep');
break;

default:
console.log('Not_a_Day');

}

//__________5th task___________//

let r = 15;
let m = 16;

if(r>m){
    console.log('1st_number_is_bigger')
}
else if(r<m){
    console.log('2nd_number_is_bigger')
}
else{
    console.log('numbers_are_even')
}

//__________6th task____________//

let f = ''; //please print any statement

if((f == null) || (f == undefined) || (f == false)){
    console.log('default')
}

//__________7th task____________//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if((coursesAndDurationArray[0].monthDuration)> 5) {
   console.log('Супер')
}
if((coursesAndDurationArray[1].monthDuration)> 5) {
    console.log('Супер')
}
if((coursesAndDurationArray[2].monthDuration)> 5) {
    console.log('Супер')
}
if((coursesAndDurationArray[3].monthDuration)> 5) {
    console.log('Супер')
}
if((coursesAndDurationArray[4].monthDuration)> 5) {
    console.log('Супер')
}
if((coursesAndDurationArray[5].monthDuration)> 5) {
    console.log('Супер')
}
