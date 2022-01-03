let memberObject = {
    manager:'a',
    deverloper:'b',
    designer:'c'
}
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']",memberObject['designer']);

memberObject.designer = "subin";
delete memberObject.manager

console.log("after",memberObject.designer)
console.log("after",memberObject.manager)