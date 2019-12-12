const pink = {
    capacity: 5,
    feature: "Wheelchair accessable",
    feature1:"projector",
    toJSON(){
        return `This room is ${this.feature} and has a ${this.feature1} with a ${this.capacity} capacity`;
    }
}
const dataObj = {
    data: pink
};

console.log(JSON.stringify(dataObj))

const orange = {
    capacity: 10,
    feature: "phone",
    feature1:"TV screen",
    toJSON(){
        return `This room has a ${this.feature} and has a ${this.feature1} with a ${this.capacity} person capacity`;
    }
}
const dataObj1 = {
    data: orange
};

console.log(JSON.stringify(dataObj1))

const blue = {
    capacity: 2,
    feature: "phone",
    feature1:"Wheelchair accessable",
    toJSON(){
        return `This room has a ${this.feature} and is ${this.feature1} with only a ${this.capacity} person capacity`;
    }
}
const dataObj2 = {
    data: blue
};

console.log(JSON.stringify(dataObj2))







// const orange = {
//     capacity = 10,
//     feature = "Phone",
//     feature1 = "TV screen"
// }
// const blue = {
//     capacity = 2,
//     feature = "phone",
//     feature1 = "Wheelchair accessable"
// }
