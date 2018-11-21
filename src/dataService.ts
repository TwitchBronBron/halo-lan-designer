import { Injectable } from 'angular-ts-decorators';

@Injectable('dataService')
export class DataService {
    constructor() {
        for (let game of this.games) {
            game.gameTypes = game.gameTypes ? game.gameTypes : [];
            game.gameTypes.splice(0, 0, {
                name: 'All Maps',
                maps: game.maps.map(x => x.name)
            });
        }
    }
    public games = <Game[]>[
        {
            name: 'Halo CE',
            maps: [
                {
                    name: 'Battle Creek',
                    url: require('../images/Halo CE/Battle Creek.jpg')
                }, {
                    name: 'Blood Gulch',
                    url: require('../images/Halo CE/Blood Gulch.jpg')
                }, {
                    name: 'Boarding Action',
                    url: require('../images/Halo CE/Boarding Action.jpg')
                }, {
                    name: 'Chill Out',
                    url: require('../images/Halo CE/Chill Out.jpg')
                }, {
                    name: 'Chiron TL-34',
                    url: require('../images/Halo CE/Chiron TL-34.jpg')
                }, {
                    name: 'Damnation',
                    url: require('../images/Halo CE/Damnation.jpg')
                }, {
                    name: 'Danger Canyon',
                    url: require('../images/Halo CE/Danger Canyon.jpg')
                }, {
                    name: 'Death Island',
                    url: require('../images/Halo CE/Death Island.jpg')
                }, {
                    name: 'Derelict',
                    url: require('../images/Halo CE/Derelict.jpg')
                }, {
                    name: 'Gephyrophobia',
                    url: require('../images/Halo CE/Gephyrophobia.jpg')
                }, {
                    name: 'Hang \'Em High',
                    url: require('../images/Halo CE/Hang \'Em High.jpg')
                }, {
                    name: 'Ice Fields',
                    url: require('../images/Halo CE/Ice Fields.jpg')
                }, {
                    name: 'Infinity',
                    url: require('../images/Halo CE/Infinity.jpg')
                }, {
                    name: 'Longest',
                    url: require('../images/Halo CE/Longest.jpg')
                }, {
                    name: 'Prisoner',
                    url: require('../images/Halo CE/Prisoner.jpg')
                }, {
                    name: 'Rat Race',
                    url: require('../images/Halo CE/Rat Race.jpg')
                }, {
                    name: 'Timberland',
                    url: require('../images/Halo CE/Timberland.jpg')
                }, {
                    name: 'Wizard',
                    url: require('../images/Halo CE/Wizard.jpg')
                },
            ]
        },
        {
            name: 'Halo 2',
            gameTypes: [{
                name: 'Team Slayer/SWAT',
                maps: [
                    'Gemini',
                    'Lockout',
                    'Sanctuary',
                    'Ascension',
                    'Ivory Tower',
                    'Tombstone',
                    'Turf'
                ],
            }, {
                name: 'Oddball/Fiestaball',
                maps: [
                    'Midship',
                    'Warlock',
                    'Lockout',
                    'Desolation',
                    'Ivory Tower',
                    'Ascension'
                ],
            },
            {
                name: 'Capture The Flag',
                maps: [
                    'Beaver Creek',
                    'Midship',
                    'Sanctuary',
                    'Zanzibar',
                    'Containment'
                ]
            }, {
                name: 'King of the Hill',
                maps: [
                    'Lockout',
                    'Beaver Creek',
                    'Warlock',
                    'Midship',
                    'Ascension',
                    'Sanctuary',
                    'Uplift'
                ]
            }],
            maps: [
                {
                    name: 'Ascension',
                    url: require('../images/Halo 2/Ascension.jpg')
                }, {
                    name: 'Backwash',
                    url: require('../images/Halo 2/Backwash.jpg')
                }, {
                    name: 'Beaver Creek',
                    url: require('../images/Halo 2/Beaver Creek.jpg')
                }, {
                    name: 'Burial Mounds',
                    url: require('../images/Halo 2/Burial Mounds.jpg')
                }, {
                    name: 'Coagulation',
                    url: require('../images/Halo 2/Coagulation.jpg')
                }, {
                    name: 'Colossus',
                    url: require('../images/Halo 2/Colossus.jpg')
                }, {
                    name: 'Containment',
                    url: require('../images/Halo 2/Containment.jpg')
                }, {
                    name: 'Desolation',
                    url: require('../images/Halo 2/Desolation.jpg')
                }, {
                    name: 'Elongation',
                    url: require('../images/Halo 2/Elongation.jpg')
                }, {
                    name: 'Foundation',
                    url: require('../images/Halo 2/Foundation.jpg')
                }, {
                    name: 'Gemini',
                    url: require('../images/Halo 2/Gemini.jpg')
                }, {
                    name: 'Headlong',
                    url: require('../images/Halo 2/Headlong.jpg')
                }, {
                    name: 'Ivory Tower',
                    url: require('../images/Halo 2/Ivory Tower.jpg')
                }, {
                    name: 'Lockout',
                    url: require('../images/Halo 2/Lockout.jpg')
                }, {
                    name: 'Midship',
                    url: require('../images/Halo 2/Midship.jpg')
                }, {
                    name: 'Relic',
                    url: require('../images/Halo 2/Relic.jpg')
                }, {
                    name: 'Sanctuary',
                    url: require('../images/Halo 2/Sanctuary.jpg')
                }, {
                    name: 'Terminal',
                    url: require('../images/Halo 2/Terminal.jpg')
                }, {
                    name: 'Tombstone',
                    url: require('../images/Halo 2/Tombstone.jpg')
                }, {
                    name: 'Turf',
                    url: require('../images/Halo 2/Turf.jpg')
                }, {
                    name: 'Warlock',
                    url: require('../images/Halo 2/Warlock.jpg')
                }, {
                    name: 'Waterworks',
                    url: require('../images/Halo 2/Waterworks.jpg')
                }, {
                    name: 'Zanzibar',
                    url: require('../images/Halo 2/Zanzibar.jpg')
                },
            ]
        },
        {
            name: 'Halo 3',
            maps: [
                {
                    name: 'Assembly',
                    url: require('../images/Halo 3/Assembly.jpg')
                }, {
                    name: 'Avalanche',
                    url: require('../images/Halo 3/Avalanche.jpg')
                }, {
                    name: 'Blackout',
                    url: require('../images/Halo 3/Blackout.jpg')
                }, {
                    name: 'Citadel',
                    url: require('../images/Halo 3/Citadel.jpg')
                }, {
                    name: 'Cold Storage',
                    url: require('../images/Halo 3/Cold Storage.jpg')
                }, {
                    name: 'Construct',
                    url: require('../images/Halo 3/Construct.jpg')
                }, {
                    name: 'Epitaph',
                    url: require('../images/Halo 3/Epitaph.jpg')
                }, {
                    name: 'Foundry',
                    url: require('../images/Halo 3/Foundry.jpg')
                }, {
                    name: 'Ghost Town',
                    url: require('../images/Halo 3/Ghost Town.jpg')
                }, {
                    name: 'Guardian',
                    url: require('../images/Halo 3/Guardian.jpg')
                }, {
                    name: 'Heretic',
                    url: require('../images/Halo 3/Heretic.jpg')
                }, {
                    name: 'High Ground',
                    url: require('../images/Halo 3/High Ground.jpg')
                }, {
                    name: 'Isolation',
                    url: require('../images/Halo 3/Isolation.jpg')
                }, {
                    name: 'Last Resort',
                    url: require('../images/Halo 3/Last Resort.jpg')
                }, {
                    name: 'Longshore',
                    url: require('../images/Halo 3/Longshore.jpg')
                }, {
                    name: 'Narrows',
                    url: require('../images/Halo 3/Narrows.jpg')
                }, {
                    name: 'Orbital',
                    url: require('../images/Halo 3/Orbital.jpg')
                }, {
                    name: 'Rat\'s Nest',
                    url: require('../images/Halo 3/Rat\'s Nest.jpg')
                }, {
                    name: 'Sandbox',
                    url: require('../images/Halo 3/Sandbox.jpg')
                }, {
                    name: 'Sandtrap',
                    url: require('../images/Halo 3/Sandtrap.jpg')
                }, {
                    name: 'Snowbound',
                    url: require('../images/Halo 3/Snowbound.jpg')
                }, {
                    name: 'Standoff',
                    url: require('../images/Halo 3/Standoff.jpg')
                }, {
                    name: 'The Pit',
                    url: require('../images/Halo 3/The Pit.jpg')
                }, {
                    name: 'Valhalla',
                    url: require('../images/Halo 3/Valhalla.jpg')
                },
            ]

        }
    ];

}

export interface Map {
    name: string;
    url: string;
}

export interface Game {
    name: string;
    maps: Map[];
    gameTypes: GameType[]
}

export interface GameType {
    name: string;
    maps: string[];
}