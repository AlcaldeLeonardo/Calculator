export function captureKeys(domElement, nameBase, amount){
    for (let index = 0; index < amount; index++) {
        domElement.push(document.getElementById(`${nameBase}${index}`))
    }
}