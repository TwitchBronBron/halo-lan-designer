import { Injectable } from 'angular-ts-decorators';

@Injectable('dataService')
export class DataService {
    constructor() {
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
                    url: require('../images/Halo 1/Battle Creek.jpg')
                }, {
                    name: 'Blood Gulch',
                    url: require('../images/Halo 1/Blood Gulch.jpg')
                }, {
                    name: 'Boarding Action',
                    url: require('../images/Halo 1/Boarding Action.jpg')
                }, {
                    name: 'Chill Out',
                    url: require('../images/Halo 1/Chill Out.jpg')
                }, {
                    name: 'Chiron TL-34',
                    url: require('../images/Halo 1/Chiron TL-34.jpg')
                }, {
                    name: 'Damnation',
                    url: require('../images/Halo 1/Damnation.jpg')
                }, {
                    name: 'Danger Canyon',
                    url: require('../images/Halo 1/Danger Canyon.jpg')
                }, {
                    name: 'Death Island',
                    url: require('../images/Halo 1/Death Island.jpg')
                }, {
                    name: 'Derelict',
                    url: require('../images/Halo 1/Derelict.jpg')
                }, {
                    name: 'Gephyrophobia',
                    url: require('../images/Halo 1/Gephyrophobia.jpg')
                }, {
                    name: 'Hang \'Em High',
                    url: require('../images/Halo 1/Hang \'Em High.jpg')
                }, {
                    name: 'Ice Fields',
                    url: require('../images/Halo 1/Ice Fields.jpg')
                }, {
                    name: 'Infinity',
                    url: require('../images/Halo 1/Infinity.jpg')
                }, {
                    name: 'Longest',
                    url: require('../images/Halo 1/Longest.jpg')
                }, {
                    name: 'Prisoner',
                    url: require('../images/Halo 1/Prisoner.jpg')
                }, {
                    name: 'Rat Race',
                    url: require('../images/Halo 1/Rat Race.jpg')
                }, {
                    name: 'Timberland',
                    url: require('../images/Halo 1/Timberland.jpg')
                }, {
                    name: 'Wizard',
                    url: require('../images/Halo 1/Wizard.jpg')
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
                    name: 'District',
                    url: require('../images/Halo 2/District.jpg')
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
                    name: 'Uplift',
                    url: require('../images/Halo 2/Uplift.jpg')
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
            }],
            maps: [
                {
                    name: 'Lockdown',
                    url: require('../images/Halo 2A/Lockdown.jpg')
                }, {
                    name: 'Zenith',
                    url: require('../images/Halo 2A/Zenith.jpg')
                },
                {
                    name: 'Stonetown',
                    url: require('../images/Halo 2A/Stonetown.jpg')
                },
                {
                    name: 'Bloodline',
                    url: require('../images/Halo 2A/Bloodline.jpg')
                }, {
                    name: 'Warlord',
                    url: require('../images/Halo 2A/Warlord.jpg')
                },
                {
                    name: 'Shrine',
                    url: require('../images/Halo 2A/Shrine.jpg')
                },
                {
                    name: 'Remnant',
                    url: require('../images/Halo 2A/Remnant.jpg')
                }
            ]
        },
        {
            name: 'Halo 3',
            portraitUrl: require('../images/covers/Halo 3 portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 3 landscape.jpg'),
            gameTypes: [{
                name: 'Slayer (Team & Slayer Duel)',
                mapNames: ['Cold Storage', 'Epitaph', 'Construct', 'Narrows', 'Heretic', 'Assembly', 'Sandtrap']
            }, {
                name: 'Capture the Flag',
                mapNames: ['Citadel', 'The Pit', 'Narrows', 'Snowbound', 'High Ground', 'Last Resort', 'Valhalla']
            }, {
                name: 'King of the Hill',
                mapNames: ['Construct', 'Guardian', 'Citadel', 'Snowbound', 'The Pit', 'Blackout', 'Isolation']
            }, {
                name: 'Oddball',
                mapNames: ['Guardian', 'Heretic', 'The Pit', 'Assembly', 'Blackout', 'Citadel', 'Ghost Town']
            }, {
                name: 'Infection',
                mapNames: ['Epitaph', 'Cold Storage', 'Guardian', 'Isolation', 'Ghost Town', 'Last Resort', 'Vahalla']
            }],
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

        }, {
            name: 'Halo 4',
            portraitUrl: require('../images/covers/Halo 4 portrait.jpg'),
            landscapeUrl: require('../images/covers/Halo 4 landscape.jpg'),
            gameTypes: [{
                name: 'Slayer (FFA & Team)',
                mapNames: ['Adrift', 'Haven', 'Impact', 'Skyline', 'Abandon', 'Solace', 'Complex', 'Exile']
            }, {
                name: 'Capture the Flag',
                mapNames: ['Haven', 'Pitfall', 'Adrift', 'Harvest', 'Longbow', 'Exile', 'Meltdown', 'Ragnarok']
            }, {
                name: 'King of the Hill',
                mapNames: ['Pitfall', 'Adrift', 'Impact', 'Monolith', 'Complex', 'Wreckage', 'Vertigo']
            }, {
                name: 'Flood',
                mapNames: ['Abandon', 'Solace', 'Daybreak', 'Complex', 'Perdition']
            }],
            maps: [
                {
                    name: 'Abandon',
                    url: require('../images/Halo 4/Abandon.jpg')
                }, {
                    name: 'Adrift',
                    url: require('../images/Halo 4/Adrift.jpg')
                }, {
                    name: 'Complex',
                    url: require('../images/Halo 4/Complex.jpg')
                }, {
                    name: 'Daybreak',
                    url: require('../images/Halo 4/Daybreak.jpg')
                }, {
                    name: 'Erosion',
                    url: require('../images/Halo 4/Erosion.jpg')
                }, {
                    name: 'Exile',
                    url: require('../images/Halo 4/Exile.jpg')
                }, {
                    name: 'Forge Island',
                    url: require('../images/Halo 4/Forge Island.jpg')
                }, {
                    name: 'Harvest',
                    url: require('../images/Halo 4/Harvest.jpg')
                }, {
                    name: 'Haven',
                    url: require('../images/Halo 4/Haven.jpg')
                }, {
                    name: 'Impact',
                    url: require('../images/Halo 4/Impact.jpg')
                }, {
                    name: 'Landfall',
                    url: require('../images/Halo 4/Landfall.jpg')
                }, {
                    name: 'Longbow',
                    url: require('../images/Halo 4/Longbow.jpg')
                }, {
                    name: 'Meltdown',
                    url: require('../images/Halo 4/Meltdown.jpg')
                }, {
                    name: 'Monolith',
                    url: require('../images/Halo 4/Monolith.jpg')
                }, {
                    name: 'Outcast',
                    url: require('../images/Halo 4/Outcast.jpg')
                }, {
                    name: 'Perdition',
                    url: require('../images/Halo 4/Perdition.jpg')
                }, {
                    name: 'Pitfall',
                    url: require('../images/Halo 4/Pitfall.jpg')
                }, {
                    name: 'Ragnarok',
                    url: require('../images/Halo 4/Ragnarok.jpg')
                }, {
                    name: 'Ravine',
                    url: require('../images/Halo 4/Ravine.jpg')
                }, {
                    name: 'Shatter',
                    url: require('../images/Halo 4/Shatter.jpg')
                }, {
                    name: 'Skyline',
                    url: require('../images/Halo 4/Skyline.jpg')
                }, {
                    name: 'Solace',
                    url: require('../images/Halo 4/Solace.jpg')
                }, {
                    name: 'Vertigo',
                    url: require('../images/Halo 4/Vertigo.jpg')
                }, {
                    name: 'Vortex',
                    url: require('../images/Halo 4/Vortex.jpg')
                }, {
                    name: 'Wreckage',
                    url: require('../images/Halo 4/Wreckage.jpg')
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
    portraitUrl: string;
    landscapeUrl: string;
    maps: Map[];
    gameTypes: GameType[]
}

export interface GameType {
    name: string;
    mapNames: string[];
}