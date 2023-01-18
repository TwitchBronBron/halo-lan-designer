import { addDoc, collection, doc, getDocs, query, where, onSnapshot, type Firestore, type WhereFilterOp, QueryFieldFilterConstraint, FieldPath, documentId, arrayUnion, updateDoc } from "firebase/firestore";
import { type Game, type GameMode, type GameMap, library } from "./library";
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

    async createMatch(eventId: string, match: { game: Game, mode: GameMode, map: GameMap }) {
        await updateDoc(
            doc(this.db, 'events', eventId),
            {
                matches: arrayUnion({
                    gameId: match.game.id,
                    modeId: match.mode.id,
                    mapId: match.map.id
                } as GameMatchRaw)
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
            this.hydrateMatches(events);
            callback(events[0]);
        });
    }

    public observeEvents(callback: (data: GamingEvent[]) => void) {
        return this.observe<GamingEvent>('events', where('ownerId', '==', this.authService.user?.uid), (events) => {
            this.hydrateMatches(events);
            callback(events);
        });
    }

    private hydrateMatches(events: any[]) {
        //hydrate match info
        for (const event of events ?? []) {
            event.matches = ((event.matches ?? []) as unknown as GameMatchRaw[]).map((match) => ({
                game: library.getGame(match.gameId),
                mode: library.getMode(match.modeId),
                map: library.getMap(match.mapId)
            }));
        }
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
    game: Game;
    mode: GameMode;
    map: GameMap;
}

interface GameMatchRaw {
    gameId: string;
    modeId: string;
    mapId: string;
}