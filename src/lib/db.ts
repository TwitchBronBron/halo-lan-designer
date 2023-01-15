import { addDoc, collection, doc, getDocs, query, where, type Firestore } from "firebase/firestore";
import type { AuthService } from "./services/authService";

export class Db {
    private db!: Firestore;
    private authService!: AuthService;

    init(db: Firestore, authService: AuthService) {
        this.db = db;
        this.authService = authService;
    }

    async createEvent(name: string) {
        const docRef = await addDoc(
            collection(this.db, 'events'),
            {
                name: name,
                createdDate: new Date(),
                modifiedDate: new Date(),
                ownerId: this.authService.user?.uid,
                //list of users who are allowed to edit this event
                contributors: []
            }
        );
        return docRef;
    }

    async getEvents() {
        const eventsRef = collection(this.db, 'events');
        const q = query(eventsRef, where('ownerId', '==', this.authService.user?.uid));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(x => {
            return {
                id: x.id,
                ...x.data() ?? {}
            };
        });
    }
}
export const db = new Db();