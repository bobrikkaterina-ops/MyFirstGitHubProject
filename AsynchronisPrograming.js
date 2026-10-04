//function findlocator() {
    if (locator === "valid locator"){
        console.log("Element is found");
    }else{
        console.log("Element not found");
    }
//}

//function clicElement(locator) {
    //console.log("Clicking element:", locator);
//clicElement ("valid locator");
//console.log("END");


//option 2

function findlocator(locator) {
    return new Promise((resolve, reject) => {
        if (locator === "valid locator") {
            console.log("Element is found");
            resolve("element found");
        } else {
            console.log("Element not found");
            reject("element not found");
        }
    });
}

function clicElement(locator) {
    console.log("Clicking element:", locator);
    return findlocator(locator);
}

clicElement("valid locator")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

console.log("something else");

