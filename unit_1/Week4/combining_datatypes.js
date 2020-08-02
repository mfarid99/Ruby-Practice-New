//Section 2 Combining Datatypes
//1-Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayonNames : ['name1', 'name2', 'name3']
};
console.log(crayonBox.crayonNames[1]);
//name2

//2-Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap : {
        properties: 'metal',
        color: 'blue',
    }
}
console.log(bottle.cap.color)
//blue