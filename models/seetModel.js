export default class SeetsModel {
    constructor() {
        this.seets = []
    }

    getSeets() {
        return this.seets
    }

    addSeet(id, seetName) {
        this.seets.push({id: id, seetName: seetName})
    }
}
