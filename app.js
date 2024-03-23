"use strict";
//18. seeing the world: think of at least five places in the world you whould like to visit
//. store the location in the array . make sure the array is not in alphabetical order.
//. print your array in its original  order.
let places = ['South Korea', 'Egipt', 'japan', 'America', 'india'];
console.log('original :' + places);
// print your array in alphabatical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//. show that your array is still in the original order by printing it.
console.log('original :' + places);
// .print your array in reverse alphabatical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// .show that your array is still in its original order by printing it again.
console.log('copy' + [...places].sort().reverse());
// . reverse the order of your list . print the array to show that its order has changed'
console.log('original ' + places.sort());
// . reverse the order of your list again . print the list to show it's back to its original list'
console.log('original :' + places.sort().reverse());
