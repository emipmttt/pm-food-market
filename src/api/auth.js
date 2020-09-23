import firebase from "./firebase"

export default {

    async sign_up(email, password) {

        try {
            return await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    },

    async sign_in(email, password) {
        try {
            return await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    },

    async google_auth() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'es';

        try {
            var result = await firebase.auth().signInWithPopup(provider)

            return {
                success: true,
                data: {
                    token: result.credential.accessToken,
                    user: result.user
                }

            }

        } catch (error) {

            return {
                success: false,
                error
            }

        }
    },

    async facebook_auth() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().languageCode = 'es';

        try {
            var result = await firebase.auth().signInWithPopup(provider)

            return {
                success: true,
                data: {
                    token: result.credential.accessToken,
                    user: result.user
                }
            }

        } catch (error) {

            return {
                success: false,
                error
            }

        }
    }

}