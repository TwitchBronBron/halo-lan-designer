import battleCreek from '../images/Halo 1/Battle Creek.jpg';
export const data = {
    games: [{
        name: 'Halo: CE',
        imageUrl: new URL('../images/covers/Halo 1 portrait.jpg', import.meta.url).href,
        maps: [{
            name: 'Battle Creek',
            imageUrl: new URL('../images/Halo 1/Battle Creek.jpg', import.meta.url).href,
            minPlayers: 2,
            maxPlayers: 8
        }, {
            name: 'Blood Gulch',
            imageUrl: new URL('../images/Halo 1/Blood Gulch.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Boarding Action',
            imageUrl: new URL('../images/Halo 1/Boarding Action.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Chill Out',
            imageUrl: new URL('../images/Halo 1/Chill Out.jpg', import.meta.url).href,
            minPlayers: 2,
            maxPlayers: 8
        }, {
            name: 'Chiron TL-34',
            imageUrl: new URL('../images/Halo 1/Chiron TL-34.jpg', import.meta.url).href,
            minPlayers: 3,
            maxPlayers: 6
        }, {
            name: 'Damnation',
            imageUrl: new URL('../images/Halo 1/Damnation.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 8
        }, {
            name: 'Danger Canyon',
            imageUrl: new URL('../images/Halo 1/Danger Canyon.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Death Island',
            imageUrl: new URL('../images/Halo 1/Death Island.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Derelict',
            imageUrl: new URL('../images/Halo 1/Derelict.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 8
        }, {
            name: 'Gephyrophobia',
            imageUrl: new URL('../images/Halo 1/Gephyrophobia.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 12
        }, {
            name: 'Hang \'Em High',
            imageUrl: new URL('../images/Halo 1/Hang \'Em High.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Ice Fields',
            imageUrl: new URL('../images/Halo 1/Ice Fields.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Infinity',
            imageUrl: new URL('../images/Halo 1/Infinity.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Longest',
            imageUrl: new URL('../images/Halo 1/Longest.jpg', import.meta.url).href,
            minPlayers: 2,
            maxPlayers: 8
        }, {
            name: 'Prisoner',
            imageUrl: new URL('../images/Halo 1/Prisoner.jpg', import.meta.url).href,
            minPlayers: 2,
            maxPlayers: 8
        }, {
            name: 'Rat Race',
            imageUrl: new URL('../images/Halo 1/Rat Race.jpg', import.meta.url).href,
            minPlayers: 2,
            maxPlayers: 6
        }, {
            name: 'Timberland',
            imageUrl: new URL('../images/Halo 1/Timberland.jpg', import.meta.url).href,
            minPlayers: 4,
            maxPlayers: 16
        }, {
            name: 'Wizard',
            imageUrl: new URL('../images/Halo 1/Wizard.jpg', import.meta.url).href,
            minPlayers: 2,
            maxPlayers: 8
        }]
    }, {
        name: 'Halo 2',
        imageUrl: new URL('../images/covers/Halo 2 portrait.jpg', import.meta.url).href,
        maps: []
    }, {
        name: 'Halo 2:A',
        imageUrl: new URL('../images/covers/Halo 2 Anniversary portrait.jpg', import.meta.url).href,
        maps: []
    }, {
        name: 'Halo 3',
        imageUrl: new URL('../images/covers/Halo 3 portrait.jpg', import.meta.url).href,
        maps: []
    }, {
        name: 'Halo 4',
        imageUrl: new URL('../images/covers/Halo 4 portrait.jpg', import.meta.url).href,
        maps: []
    }] as Game[]
};

export interface Game {
    name: string;
    imageUrl: string;
    maps: Map[];
    gameTypes: GameType[]
}

export interface Map {
    name: string;
    imageUrl: string;
    minPlayers: number;
    maxPlayers: number;
}


export interface GameType {
    name: string;
    mapNames: string[];
}