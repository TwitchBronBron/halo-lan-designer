import { addDoc, collection, doc, getDocs, query, where, onSnapshot, type Firestore, type WhereFilterOp, QueryFieldFilterConstraint, FieldPath, documentId } from "firebase/firestore";
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

    private observe<T>(collectionName: CollectionName, filter: QueryFieldFilterConstraint, callback: (data: T[]) => void) {
        const eventsRef = collection(this.db, collectionName);
        const q = query(eventsRef, filter);
        return onSnapshot(q, (snapshot) => {
            callback(
                snapshot.docs.map(x => ({
                    id: x.id,
                    ...x.data() ?? {}
                } as any))
            );
        });
    }

    public observeEvent(id: string, callback: (data: GamingEvent) => void) {
        return this.observe<GamingEvent>('events', where(documentId(), '==', id), (events) => {
            callback(events[0]);
        });
    }

    public observeEvents(callback: (data: GamingEvent[]) => void) {
        return this.observe('events', where('ownerId', '==', this.authService.user?.uid), callback);
    }
}
export const db = new Db();

export type CollectionName = 'events';

export interface GamingEvent {
    /**
     * The id for this event
     */
    id: string;
    name: string,
    createdDate: Date,
    modifiedDate: Date,
    ownerId: string;
    //list of IDs of users who are allowed to edit this event
    contributorIds: string[];
}