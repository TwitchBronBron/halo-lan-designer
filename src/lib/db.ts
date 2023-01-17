import { addDoc, collection, doc, getDocs, query, where, onSnapshot, type Firestore, type WhereFilterOp, QueryFieldFilterConstraint, FieldPath, documentId, arrayUnion, updateDoc } from "firebase/firestore";
import type { Game, GameMode, GameMap } from "./library";
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
                contributorIds: [],
                //list of matches for this event
                matches: []
            }
        );
        return docRef;
    }

    async createMatch(eventId: string, match: { gameId: string; modeId: string; mapId: string }) {
        await updateDoc(
            doc(this.db, 'events', eventId),
            {
                matches: arrayUnion(match)
            }
        );
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
    matches: GameMatch[];
}

export interface GameMatch {
    gameId: string;
    modeId: string;
    mapId: string;
}