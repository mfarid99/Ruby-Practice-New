//Section 2 Combining Datatypes
//1-Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayonNames : ['name1', 'name2', 'name3']
};
console.log(crayonBox.crayonNames[1]);
//logs name2

//2-Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap : {
        properties: 'metal',
        color: 'blue',
    }
}
console.log(bottle.cap.color)
//logs blue

//3-Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    {
        shirt: 'Van Heusen',
        price: 25,
    }, 
    
    {
        dress: 'fancy brand',
        price: 120,
    }
]

console.log(receipt[1].dress)
//logs fancy brand

//4-Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    [ {name: 'Michael'},{name: 'Larry'}, {name: 'Laura'} ],
    [{unitA: 'vacant'}, {unitC: 'ocuupied'}, {unitB: 'damaged'}],
]
console.log(apartmentBuilding[1][2].unitB)
//logs damaged