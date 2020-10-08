export default {
    update_state(state, {
        propertie,
        value
    }) {
        state[propertie] = value
    }
}