
const fulltoDay = () => {
    let today = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    return today.toLocaleDateString('en-US', options)
}
const toDay = () => {
    let today = new Date()
    let options = { weekday: 'long' }
    return today.toLocaleDateString('en-US', options)
}

module.exports = { fulltoDay, toDay }