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

    async set(collection, doc, data) {
        try {
            var response = await firebase.firestore().collection(collection).doc(doc).set(data);
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

    async get(collection, doc) {
        try {
            var response = await firebase.firestore().collection(collection).doc(doc).get()

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

    async update(collection, doc, data) {

        try {
            await firebase.firestore().collection(collection).doc(doc).update(data)
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

    async delete(collection, doc) {
        try {
            await firebase.firestore().collection(collection).doc(doc).delete();
            return {
                success: true
            }
        } catch (error) {
            return { success: false, error }
        }
    }

}