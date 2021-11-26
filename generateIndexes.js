function generateIndexes(object, typeForFind) {
    const names = []
    const recGeneration = (object) => {
        if(object){
        object.forEach(item => {
            if(item.name === typeForFind) { 
                item.children.forEach((item1) => {names.push(item1.name)})
                return
            } else if(item.type ==='folder') {
                item.children.forEach((childIt) => {
                    recGeneration(childIt.children)
                })
            }
        })
    }
}
    recGeneration(object)
    return names.filter(item => item !== 'index.js')
}

module.exports = {
    generateIndexes
}