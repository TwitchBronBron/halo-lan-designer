import { signInWithPopup, GoogleAuthProvider, type User, type Auth, type AuthProvider, signOut, signInWithRedirect } from "firebase/auth";
import { writable } from 'svelte/store';

export class AuthService {

    constructor(

    ) {

    }

    private cache = {} as any;

    private auth!: Auth;
    private authProvider!: AuthProvider;

    public store = {
        user: writable<User | null>(null),
        isLoggedIn: writable(false),
        token: writable<string | null>(null)
    }

    public get user() {
        return this.cache.user;
    }
    public set user(value: User | null) {
        this.cache.user = value;
        this.store.user.set(value);
        this.store.isLoggedIn.set(!!value);
    }

    public get token() {
        return this.cache.token;
    }
    public set token(value: string | null) {
        this.cache.token = value;
        this.store.token.set(value);
    }

    public get isLoggedIn() {
        return this.cache.isLoggedIn;
    }

    init(auth: Auth, authProvider: AuthProvider) {
        this.auth = auth;
        this.authProvider = authProvider;
        //init firebase auth
        this.auth.onAuthStateChanged((user) => {
            this.user = user;
        });
    }

    public async signOut() {
        await signOut(this.auth);
        this.user = null;
    }

    public signIn() {
        signInWithPopup(this.auth, this.authProvider)
        // try {
        //     const result = await signInWithPopup(this.auth, this.authProvider);
        //     // // This gives you a Google Access Token. You can use it to access the Google API.
        //     // const credential = GoogleAuthProvider.credentialFromResult(result);
        //     // const token = credential!.accessToken;
        //     // // The signed-in user info.
        //     // //this.setUser(result.user);
        //     // this.setToken
        //     // ...
        // } catch (error) {
        //     console.error(error);
        //     // debugger;
        //     // // Handle Errors here.
        //     // const errorCode = error.code;
        //     // const errorMessage = error.message;
        //     // // The email of the user's account used.
        //     // const email = error.customData.email;
        //     // // The AuthCredential type that was used.
        //     // const credential = GoogleAuthProvider.credentialFromError(error);
        //     // ...
        // }
    }
}

export const authService = new AuthService();
