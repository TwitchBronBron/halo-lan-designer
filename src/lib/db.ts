import { addDoc, collection, doc, getDocs, query, where, onSnapshot, type Firestore, type WhereFilterOp } from "firebase/firestore";
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
                contributorIds: []
            }
        );
        return docRef;
    }

    private observe<T>(collectionName: CollectionName, filter: [string, WhereFilterOp, unknown], callback: (data: T[]) => void) {
        const eventsRef = collection(this.db, collectionName);
        const q = query(eventsRef, where(...filter));
        return onSnapshot(q, (snapshot) => {
            callback(
                snapshot.docs.map(x => ({
                    id: x.id,
                    ...x.data() ?? {}
                } as any))
            );
        });
    }

    public observeEvents(callback: (data: Event[]) => void) {
        return this.observe('events', ['ownerId', '==', this.authService.user?.uid], callback);
    }
}
export const db = new Db();

export type CollectionName = 'events';

export interface Event {
    name: string,
    createdDate: Date,
    modifiedDate: Date,
    ownerId: string;
    //list of IDs of users who are allowed to edit this event
    contributorIds: string[];
}