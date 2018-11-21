import { Injectable } from 'angular-ts-decorators';

@Injectable('dataService')
export class DataService {
    constructor() {
        //copy the maps from halo 2 -> halo 2 anniversary
        var halo2 = this.games[1];
        var halo2A = this.games[2];
        halo2A.maps = halo2.maps;

        for (let game of this.games) {
            game.gameTypes = game.gameTypes ? game.gameTypes : [];
            game.gameTypes.splice(0, 0, {
                name: 'All Maps',
                mapNames: game.maps.map(x => x.name)
            });
        }
    }
    public games = <Game[]>[
        {
            name: 'Halo: CE',
            portraitUrl: require('../images/covers/Halo 1 portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 1 landscape.jpg'),
            maps: [
                {
                    name: 'Battle Creek',
                    portraitUrl: require('../images/Halo 1/Battle Creek.jpg')
                }, {
                    name: 'Blood Gulch',
                    portraitUrl: require('../images/Halo 1/Blood Gulch.jpg')
                }, {
                    name: 'Boarding Action',
                    portraitUrl: require('../images/Halo 1/Boarding Action.jpg')
                }, {
                    name: 'Chill Out',
                    portraitUrl: require('../images/Halo 1/Chill Out.jpg')
                }, {
                    name: 'Chiron TL-34',
                    portraitUrl: require('../images/Halo 1/Chiron TL-34.jpg')
                }, {
                    name: 'Damnation',
                    portraitUrl: require('../images/Halo 1/Damnation.jpg')
                }, {
                    name: 'Danger Canyon',
                    portraitUrl: require('../images/Halo 1/Danger Canyon.jpg')
                }, {
                    name: 'Death Island',
                    portraitUrl: require('../images/Halo 1/Death Island.jpg')
                }, {
                    name: 'Derelict',
                    portraitUrl: require('../images/Halo 1/Derelict.jpg')
                }, {
                    name: 'Gephyrophobia',
                    portraitUrl: require('../images/Halo 1/Gephyrophobia.jpg')
                }, {
                    name: 'Hang \'Em High',
                    portraitUrl: require('../images/Halo 1/Hang \'Em High.jpg')
                }, {
                    name: 'Ice Fields',
                    portraitUrl: require('../images/Halo 1/Ice Fields.jpg')
                }, {
                    name: 'Infinity',
                    portraitUrl: require('../images/Halo 1/Infinity.jpg')
                }, {
                    name: 'Longest',
                    portraitUrl: require('../images/Halo 1/Longest.jpg')
                }, {
                    name: 'Prisoner',
                    portraitUrl: require('../images/Halo 1/Prisoner.jpg')
                }, {
                    name: 'Rat Race',
                    portraitUrl: require('../images/Halo 1/Rat Race.jpg')
                }, {
                    name: 'Timberland',
                    portraitUrl: require('../images/Halo 1/Timberland.jpg')
                }, {
                    name: 'Wizard',
                    portraitUrl: require('../images/Halo 1/Wizard.jpg')
                },
            ]
        },
        {
            name: 'Halo 2',
            portraitUrl: require('../images/covers/Halo 2 portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 2 landscape.jpg'),
            gameTypes: [{
                name: 'Team Slayer/SWAT',
                mapNames: [
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
                mapNames: [
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
                mapNames: [
                    'Beaver Creek',
                    'Midship',
                    'Sanctuary',
                    'Zanzibar',
                    'Containment'
                ]
            }, {
                name: 'King of the Hill',
                mapNames: [
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
                    portraitUrl: require('../images/Halo 2/Ascension.jpg')
                }, {
                    name: 'Backwash',
                    portraitUrl: require('../images/Halo 2/Backwash.jpg')
                }, {
                    name: 'Beaver Creek',
                    portraitUrl: require('../images/Halo 2/Beaver Creek.jpg')
                }, {
                    name: 'Burial Mounds',
                    portraitUrl: require('../images/Halo 2/Burial Mounds.jpg')
                }, {
                    name: 'Coagulation',
                    portraitUrl: require('../images/Halo 2/Coagulation.jpg')
                }, {
                    name: 'Colossus',
                    portraitUrl: require('../images/Halo 2/Colossus.jpg')
                }, {
                    name: 'Containment',
                    portraitUrl: require('../images/Halo 2/Containment.jpg')
                }, {
                    name: 'Desolation',
                    portraitUrl: require('../images/Halo 2/Desolation.jpg')
                }, {
                    name: 'Elongation',
                    portraitUrl: require('../images/Halo 2/Elongation.jpg')
                }, {
                    name: 'Foundation',
                    portraitUrl: require('../images/Halo 2/Foundation.jpg')
                }, {
                    name: 'Gemini',
                    portraitUrl: require('../images/Halo 2/Gemini.jpg')
                }, {
                    name: 'Headlong',
                    portraitUrl: require('../images/Halo 2/Headlong.jpg')
                }, {
                    name: 'Ivory Tower',
                    portraitUrl: require('../images/Halo 2/Ivory Tower.jpg')
                }, {
                    name: 'Lockout',
                    portraitUrl: require('../images/Halo 2/Lockout.jpg')
                }, {
                    name: 'Midship',
                    portraitUrl: require('../images/Halo 2/Midship.jpg')
                }, {
                    name: 'Relic',
                    portraitUrl: require('../images/Halo 2/Relic.jpg')
                }, {
                    name: 'Sanctuary',
                    portraitUrl: require('../images/Halo 2/Sanctuary.jpg')
                }, {
                    name: 'Terminal',
                    portraitUrl: require('../images/Halo 2/Terminal.jpg')
                }, {
                    name: 'Tombstone',
                    portraitUrl: require('../images/Halo 2/Tombstone.jpg')
                }, {
                    name: 'Turf',
                    portraitUrl: require('../images/Halo 2/Turf.jpg')
                }, {
                    name: 'Warlock',
                    portraitUrl: require('../images/Halo 2/Warlock.jpg')
                }, {
                    name: 'Waterworks',
                    portraitUrl: require('../images/Halo 2/Waterworks.jpg')
                }, {
                    name: 'Zanzibar',
                    portraitUrl: require('../images/Halo 2/Zanzibar.jpg')
                },
            ]
        }, {
            name: 'Halo 2:A',
            portraitUrl: require('../images/covers/Halo 2 Anniversary portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 2 Anniversary landscape.jpg'),
            gameTypes: [{
                name: 'Slayer (Team & SWAT)',
                mapNames: ['Lockdown', 'Zenith', 'Remnant']
            }, {
                name: 'Oddball (Team & Fiestaball)',
                mapNames: ['Shrine', 'Lockdown', 'Warlord']
            }, {
                name: 'Capture The Flag',
                mapNames: ['Warlord', 'Shrine', 'Stonetown']
            }, {
                name: 'King of the Hill',
                mapNames: ['Zenith', 'Lockdown', 'Shrine']
            }]
        },
        {
            name: 'Halo 3',
            portraitUrl: require('../images/covers/Halo 3 portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 3 landscape.jpg'),
            maps: [
                {
                    name: 'Assembly',
                    portraitUrl: require('../images/Halo 3/Assembly.jpg')
                }, {
                    name: 'Avalanche',
                    portraitUrl: require('../images/Halo 3/Avalanche.jpg')
                }, {
                    name: 'Blackout',
                    portraitUrl: require('../images/Halo 3/Blackout.jpg')
                }, {
                    name: 'Citadel',
                    portraitUrl: require('../images/Halo 3/Citadel.jpg')
                }, {
                    name: 'Cold Storage',
                    portraitUrl: require('../images/Halo 3/Cold Storage.jpg')
                }, {
                    name: 'Construct',
                    portraitUrl: require('../images/Halo 3/Construct.jpg')
                }, {
                    name: 'Epitaph',
                    portraitUrl: require('../images/Halo 3/Epitaph.jpg')
                }, {
                    name: 'Foundry',
                    portraitUrl: require('../images/Halo 3/Foundry.jpg')
                }, {
                    name: 'Ghost Town',
                    portraitUrl: require('../images/Halo 3/Ghost Town.jpg')
                }, {
                    name: 'Guardian',
                    portraitUrl: require('../images/Halo 3/Guardian.jpg')
                }, {
                    name: 'Heretic',
                    portraitUrl: require('../images/Halo 3/Heretic.jpg')
                }, {
                    name: 'High Ground',
                    portraitUrl: require('../images/Halo 3/High Ground.jpg')
                }, {
                    name: 'Isolation',
                    portraitUrl: require('../images/Halo 3/Isolation.jpg')
                }, {
                    name: 'Last Resort',
                    portraitUrl: require('../images/Halo 3/Last Resort.jpg')
                }, {
                    name: 'Longshore',
                    portraitUrl: require('../images/Halo 3/Longshore.jpg')
                }, {
                    name: 'Narrows',
                    portraitUrl: require('../images/Halo 3/Narrows.jpg')
                }, {
                    name: 'Orbital',
                    portraitUrl: require('../images/Halo 3/Orbital.jpg')
                }, {
                    name: 'Rat\'s Nest',
                    portraitUrl: require('../images/Halo 3/Rat\'s Nest.jpg')
                }, {
                    name: 'Sandbox',
                    portraitUrl: require('../images/Halo 3/Sandbox.jpg')
                }, {
                    name: 'Sandtrap',
                    portraitUrl: require('../images/Halo 3/Sandtrap.jpg')
                }, {
                    name: 'Snowbound',
                    portraitUrl: require('../images/Halo 3/Snowbound.jpg')
                }, {
                    name: 'Standoff',
                    portraitUrl: require('../images/Halo 3/Standoff.jpg')
                }, {
                    name: 'The Pit',
                    portraitUrl: require('../images/Halo 3/The Pit.jpg')
                }, {
                    name: 'Valhalla',
                    portraitUrl: require('../images/Halo 3/Valhalla.jpg')
                },
            ]

        }, {
            name: 'Halo 4',
            portraitUrl: require('../images/covers/Halo 4 portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 4 landscape.jpg'),
            maps: []
        }
    ];

}

export interface Map {
    name: string;
    portraitUrl: string;
    landscapeUrl: string;
}

export interface Game {
    name: string;
    url: string;
    maps: Map[];
    gameTypes: GameType[]
}

export interface GameType {
    name: string;
    mapNames: string[];
}