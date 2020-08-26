import firebase from "./firebase";

export default {

    async add(collection, data) {
        try {
            var response = await firebase.firestore().collection(collection).add(data);
            return {
                success: true,
                id: response.id
            }
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    },

    async get(collection, id) {
        try {
            var response = await firebase.firestore().collection(collection).doc(id).get()

            if (response.exists) {

                return {
                    succes: true,
                    data: {
                        ...response.data(),
                        id: response.id
                    }
                }

            } else {
                return {
                    success: false,
                    error: {
                        message: "No se encontró ningún resultado para su consulta"
                    }
                }
            }

        } catch (error) {

            return { success: false, error }

        }

    },

    async update(collection, id, data) {

        try {
            await firebase.firestore().collection(collection).doc(id).update(data)
            return {
                success: true,
            }
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    },

    async delete(collection, id) {
        try {
            await firebase.firestore().collection(collection).doc(id).delete();
            return {
                success: true
            }
        } catch (error) {
            return { success: false, error }
        }
    }

}