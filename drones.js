/*
Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.
Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones
takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations.
When the drone comes back and lands, the ID is again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back
from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
To track them down, we need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were
received, and some deliveries get cancelled before takeoff.
*/
// thoughts: finding one unique integer in an array - is there a data structure that makes finding dupes easier?
// Set does not accept duplicates

let deliveryIdConfirmations = [9, 8, 6, 45, 100, 34, 36, 29, 75, 50, 70, 9, 75, 8, 50, 45, 100, 34, 36, 29, 6]

function findMissingDrone(ids) {
  var idsToOccurrences = new Map()

  ids.forEach(function(deliveryId) {
    if (idsToOccurrences.has(deliveryId)) {
      var newCount = idsToOccurrences.get(deliveryId) + 1
      idsToOccurrences.set(deliveryId, newCount)
    } else {
      idsToOccurrences.set(deliveryId, 1)
    }
    console.log(idsToOccurrences)
  })

  for (var [id, count] of idsToOccurrences) {
    if (count === 1) return console.log('missing: ', id)
  }
}

findMissingDrone(deliveryIdConfirmations) // returns 70


function findUniqueDeliveryId(deliveryIds) {
  var uniqueId = 0;

  deliveryIds.forEach(function(id) {
    uniqueId ^= id
  })
  console.log('missing, take 2: ', parseInt(uniqueId))
}

findUniqueDeliveryId(deliveryIdConfirmations) // returns 13 ??
