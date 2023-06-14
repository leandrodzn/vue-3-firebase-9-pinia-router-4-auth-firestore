import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth } from '../firebase-config';
import router from '../router';


export const useUserStore = defineStore('user', {
    state: () => ({
            userData: null,
            loadingUser: false,
            loadingSession: false,
        }
    ),

    actions:{
        async registerUser(email, password){
            this.loadingUser = true;
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid};
                console.log(this.userData);
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async loginUser(email, password){
            this.loadingUser = true;
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid};
                console.log(this.userData);
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async logoutUser(){
            try {
                await signOut(auth);
                this.userData = null;
                console.log(this.userData);
                router.push('/login');
            } catch (error) {
                console.log(error);
            }
        },
        currentUser(){
            return new Promise((resolve, reject) => {
                const onsuscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.userData = {email: user.email, uid: user.uid};
                    }else{
                        this.userData = null;
                    }
                    resolve(user);
                }, error => reject(error));
                onsuscribe();
            });
        },
    }
});

