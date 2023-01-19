class Library {

    /**
     * Get the game with the specified ID
     */
    public getGame(gameId: string): Game {
        return this.games.find(x => x.id === gameId)!;
    }

    /**
     * Get the map with the specified ID
     */
    public getMap(mapId: string): GameMap {
        for (const game of this.games) {
            for (const map of game.maps) {
                if (map.id === mapId) {
                    return map;
                }
            }
        }
        return undefined as unknown as GameMap;
    }

    /**
     * Get the game mode with the specified ID
     */
    public getMode(modeId: string): GameMode {
        for (const game of this.games) {
            for (const mode of game.modes) {
                if (mode.id === modeId) {
                    return mode;
                }
            }
        }
        return undefined as unknown as GameMode;
    }

    public games = [
        {
            name: 'Halo: CE',
            id: 'H:CE',
            shortName: 'H:CE',
            url: 'https://www.halopedia.org/Halo:_Combat_Evolved',
            imageUrl: new URL('../images/covers/Halo 1 portrait.jpg', import.meta.url).href,
            maps: [{
                name: 'Battle Creek',
                url: 'https://www.halopedia.org/Battle_Creek',
                imageUrl: new URL('../images/Halo 1/Battle Creek.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8,
            }, {
                name: 'Blood Gulch',
                url: 'https://www.halopedia.org/Blood_Gulch',
                imageUrl: new URL('../images/Halo 1/Blood Gulch.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Boarding Action',
                url: 'https://www.halopedia.org/Boarding_Action',
                imageUrl: new URL('../images/Halo 1/Boarding Action.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Chill Out',
                url: 'https://www.halopedia.org/Chill_Out',
                imageUrl: new URL('../images/Halo 1/Chill Out.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Chiron TL-34',
                url: 'https://www.halopedia.org/Chiron_TL-34',
                imageUrl: new URL('../images/Halo 1/Chiron TL-34.jpg', import.meta.url).href,
                minPlayers: 3,
                maxPlayers: 6
            }, {
                name: 'Damnation',
                url: 'https://www.halopedia.org/Damnation',
                imageUrl: new URL('../images/Halo 1/Damnation.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 8
            }, {
                name: 'Danger Canyon',
                url: 'https://www.halopedia.org/Danger_Canyon',
                imageUrl: new URL('../images/Halo 1/Danger Canyon.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Death Island',
                url: 'https://www.halopedia.org/Death_Island',
                imageUrl: new URL('../images/Halo 1/Death Island.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Derelict',
                url: 'https://www.halopedia.org/Derelict',
                imageUrl: new URL('../images/Halo 1/Derelict.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 8
            }, {
                name: 'Gephyrophobia',
                url: 'https://www.halopedia.org/Gephyrophobia',
                imageUrl: new URL('../images/Halo 1/Gephyrophobia.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 12
            }, {
                name: 'Hang \'Em High',
                url: 'https://www.halopedia.org/Hang_%27Em_High',
                imageUrl: new URL('../images/Halo 1/Hang Em High.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Ice Fields',
                url: 'https://www.halopedia.org/Ice_Fields',
                imageUrl: new URL('../images/Halo 1/Ice Fields.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Infinity',
                url: 'https://www.halopedia.org/Infinity_(Halo:_Combat_Evolved_map)',
                imageUrl: new URL('../images/Halo 1/Infinity.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Longest',
                url: 'https://www.halopedia.org/Longest',
                imageUrl: new URL('../images/Halo 1/Longest.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Prisoner',
                url: 'https://www.halopedia.org/Prisoner',
                imageUrl: new URL('../images/Halo 1/Prisoner.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Rat Race',
                url: 'https://www.halopedia.org/Rat_Race',
                imageUrl: new URL('../images/Halo 1/Rat Race.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 6
            }, {
                name: 'Sidewinder',
                url: 'https://www.halopedia.org/Sidewinder',
                imageUrl: new URL('../images/Halo 1/Sidewinder.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Timberland',
                url: 'https://www.halopedia.org/Timberland',
                imageUrl: new URL('../images/Halo 1/Timberland.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Wizard',
                url: 'https://www.halopedia.org/Wizard',
                imageUrl: new URL('../images/Halo 1/Wizard.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }],
            modes: [{
                name: 'FFA Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Team Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Phantom Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Elimination',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'CTF 2 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'Assault',
                imageUrl: new URL('../images/modes/assault.png', import.meta.url).href
            }, {
                name: 'FFA Oddball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'Team Oddball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'King Of The Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }]
        }, {
            name: 'Halo 2',
            id: 'H2',
            shortName: 'H2',
            url: 'https://www.halopedia.org/Halo_2',
            imageUrl: new URL('../images/covers/Halo 2 portrait.jpg', import.meta.url).href,
            maps: [{
                name: 'Ascension',
                url: 'https://www.halopedia.org/Ascension',
                imageUrl: new URL('../images/Halo 2/Ascension.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 12
            }, {
                name: 'Backwash',
                url: 'https://www.halopedia.org/Backwash',
                imageUrl: new URL('../images/Halo 2/Backwash.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 10
            }, {
                name: 'Beaver Creek',
                url: 'https://www.halopedia.org/Beaver_Creek',
                imageUrl: new URL('../images/Halo 2/Beaver Creek.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Burial Mounds',
                url: 'https://www.halopedia.org/Burial_Mounds',
                imageUrl: new URL('../images/Halo 2/Burial Mounds.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Coagulation',
                url: 'https://www.halopedia.org/Coagulation',
                imageUrl: new URL('../images/Halo 2/Coagulation.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Colossus',
                url: 'https://www.halopedia.org/Colossus_(map)',
                imageUrl: new URL('../images/Halo 2/Colossus.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 14
            }, {
                name: 'Containment',
                url: 'https://www.halopedia.org/Containment',
                imageUrl: new URL('../images/Halo 2/Containment.jpg', import.meta.url).href,
                minPlayers: 6,
                maxPlayers: 16
            }, {
                name: 'Desolation',
                url: 'https://www.halopedia.org/Desolation',
                imageUrl: new URL('../images/Halo 2/Desolation.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'District',
                url: 'https://www.halopedia.org/District',
                imageUrl: new URL('../images/Halo 2/District.jpg', import.meta.url).href,
                minPlayers: 8,
                maxPlayers: 16
            }, {
                name: 'Elongation',
                url: 'https://www.halopedia.org/Elongation',
                imageUrl: new URL('../images/Halo 2/Elongation.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 6
            }, {
                name: 'Foundation',
                url: 'https://www.halopedia.org/Foundation',
                imageUrl: new URL('../images/Halo 2/Foundation.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Gemini',
                url: 'https://www.halopedia.org/Gemini',
                imageUrl: new URL('../images/Halo 2/Gemini.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 6
            }, {
                name: 'Headlong',
                url: 'https://www.halopedia.org/Headlong',
                imageUrl: new URL('../images/Halo 2/Headlong.jpg', import.meta.url).href,
                minPlayers: 6,
                maxPlayers: 16
            }, {
                name: 'Ivory Tower',
                url: 'https://www.halopedia.org/Ivory_Tower',
                imageUrl: new URL('../images/Halo 2/Ivory Tower.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 12
            }, {
                name: 'Lockout',
                url: 'https://www.halopedia.org/Lockout',
                imageUrl: new URL('../images/Halo 2/Lockout.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Midship',
                url: 'https://www.halopedia.org/Midship',
                imageUrl: new URL('../images/Halo 2/Midship.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Relic',
                url: 'https://www.halopedia.org/Relic',
                imageUrl: new URL('../images/Halo 2/Relic.jpg', import.meta.url).href,
                minPlayers: 6,
                maxPlayers: 16
            }, {
                name: 'Sanctuary',
                url: 'https://www.halopedia.org/Sanctuary',
                imageUrl: new URL('../images/Halo 2/Sanctuary.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 10
            }, {
                name: 'Terminal',
                url: 'https://www.halopedia.org/Terminal',
                imageUrl: new URL('../images/Halo 2/Terminal.jpg', import.meta.url).href,
                minPlayers: 6,
                maxPlayers: 16
            }, {
                name: 'Tombstone',
                url: 'https://www.halopedia.org/Tombstone',
                imageUrl: new URL('../images/Halo 2/Tombstone.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Turf',
                url: 'https://www.halopedia.org/Turf',
                imageUrl: new URL('../images/Halo 2/Turf.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 10
            }, {
                name: 'Uplift',
                url: 'https://www.halopedia.org/Uplift',
                imageUrl: new URL('../images/Halo 2/Uplift.jpg', import.meta.url).href,
                minPlayers: 6,
                maxPlayers: 16
            }, {
                name: 'Warlock',
                url: 'https://www.halopedia.org/Warlock',
                imageUrl: new URL('../images/Halo 2/Warlock.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Waterworks',
                url: 'https://www.halopedia.org/Waterworks',
                imageUrl: new URL('../images/Halo 2/Waterworks.jpg', import.meta.url).href,
                minPlayers: 6,
                maxPlayers: 16
            }, {
                name: 'Zanzibar',
                url: 'https://www.halopedia.org/Zanzibar',
                imageUrl: new URL('../images/Halo 2/Zanzibar.jpg', import.meta.url).href,
                minPlayers: 16,
                maxPlayers: 2
            },
            ],
            modes: [{
                name: 'FFA Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Team Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Elimination',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'SWAT',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Team Oddball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'Team Fiestaball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'CTF 2 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'CTF 1 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'FFA King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Team King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'FFA Crazy King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Team Crazy King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Juggernaut',
                imageUrl: new URL('../images/modes/juggernaut.png', import.meta.url).href
            }]
        }, {
            name: 'Halo 2:A',
            id: 'H2:A',
            shortName: 'H2:A',
            url: 'https://www.halopedia.org/Halo_2:_Anniversary',
            imageUrl: new URL('../images/covers/Halo 2 Anniversary portrait.jpg', import.meta.url).href,
            maps: [{
                name: 'Lockdown',
                url: 'https://www.halopedia.org/Lockdown',
                imageUrl: new URL('../images/Halo 2A/Lockdown.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            }, {
                name: 'Zenith',
                url: 'https://www.halopedia.org/Zenith',
                imageUrl: new URL('../images/Halo 2A/Zenith.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 12
            },
            {
                name: 'Stonetown',
                url: 'https://www.halopedia.org/Stonetown',
                imageUrl: new URL('../images/Halo 2A/Stonetown.jpg', import.meta.url).href,
                minPlayers: 12,
                maxPlayers: 16
            },
            {
                name: 'Bloodline',
                url: 'https://www.halopedia.org/Bloodline',
                imageUrl: new URL('../images/Halo 2A/Bloodline.jpg', import.meta.url).href,
                minPlayers: 4,
                maxPlayers: 16
            }, {
                name: 'Warlord',
                url: 'https://www.halopedia.org/Warlord',
                imageUrl: new URL('../images/Halo 2A/Warlord.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 8
            },
            {
                name: 'Shrine',
                url: 'https://www.halopedia.org/Shrine',
                imageUrl: new URL('../images/Halo 2A/Shrine.jpg', import.meta.url).href,
                minPlayers: 2,
                maxPlayers: 10
            },
            {
                name: 'Remnant',
                url: 'https://www.halopedia.org/Remnant',
                imageUrl: new URL('../images/Halo 2A/Remnant.jpg', import.meta.url).href,
                minPlayers: 12,
                maxPlayers: 16
            }],
            modes: [{
                name: 'Team Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Team SWAT',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Team Oddball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'Team Fiestaball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'CTF 2 Flags',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'CTF 1 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'Team King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Crazy King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Ricochet',
                imageUrl: new URL('../images/modes/ricochet.png', import.meta.url).href
            }]
        }, {
            name: 'Halo 3',
            id: 'H3',
            shortName: 'H3',
            url: 'https://www.halopedia.org/Halo_3',
            imageUrl: new URL('../images/covers/Halo 3 portrait.jpg', import.meta.url).href,
            maps: [
                {
                    name: 'Assembly',
                    url: 'https://www.halopedia.org/Assembly',
                    imageUrl: new URL('../images/Halo 3/Assembly.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 8
                }, {
                    name: 'Avalanche',
                    url: 'https://www.halopedia.org/Avalanche',
                    imageUrl: new URL('../images/Halo 3/Avalanche.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Blackout',
                    url: 'https://www.halopedia.org/Blackout',
                    imageUrl: new URL('../images/Halo 3/Blackout.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Citadel',
                    url: 'https://www.halopedia.org/Citadel',
                    imageUrl: new URL('../images/Halo 3/Citadel.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 6
                }, {
                    name: 'Cold Storage',
                    url: 'https://www.halopedia.org/Cold_Storage',
                    imageUrl: new URL('../images/Halo 3/Cold Storage.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 6
                }, {
                    name: 'Construct',
                    url: 'https://www.halopedia.org/Construct',
                    imageUrl: new URL('../images/Halo 3/Construct.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 8
                }, {
                    name: 'Epitaph',
                    url: 'https://www.halopedia.org/Epitaph',
                    imageUrl: new URL('../images/Halo 3/Epitaph.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 6
                }, {
                    name: 'Foundry',
                    url: 'https://www.halopedia.org/Foundry',
                    imageUrl: new URL('../images/Halo 3/Foundry.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Ghost Town',
                    url: 'https://www.halopedia.org/Ghost_Town',
                    imageUrl: new URL('../images/Halo 3/Ghost Town.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Guardian',
                    url: 'https://www.halopedia.org/Guardian_(map)',
                    imageUrl: new URL('../images/Halo 3/Guardian.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 6
                }, {
                    name: 'Heretic',
                    url: 'https://www.halopedia.org/Heretic',
                    imageUrl: new URL('../images/Halo 3/Heretic.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 8
                }, {
                    name: 'High Ground',
                    url: 'https://www.halopedia.org/High_Ground',
                    imageUrl: new URL('../images/Halo 3/High Ground.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Isolation',
                    url: 'https://www.halopedia.org/Isolation',
                    imageUrl: new URL('../images/Halo 3/Isolation.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 10
                }, {
                    name: 'Last Resort',
                    url: 'https://www.halopedia.org/Last_Resort',
                    imageUrl: new URL('../images/Halo 3/Last Resort.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Longshore',
                    url: 'https://www.halopedia.org/Longshore',
                    imageUrl: new URL('../images/Halo 3/Longshore.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Narrows',
                    url: 'https://www.halopedia.org/Narrows',
                    imageUrl: new URL('../images/Halo 3/Narrows.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 8
                }, {
                    name: 'Orbital',
                    url: 'https://www.halopedia.org/Orbital',
                    imageUrl: new URL('../images/Halo 3/Orbital.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Rat\'s Nest',
                    url: 'https://www.halopedia.org/Rats_Nest',
                    imageUrl: new URL('../images/Halo 3/Rats Nest.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Sandbox',
                    url: 'https://www.halopedia.org/Sandbox',
                    imageUrl: new URL('../images/Halo 3/Sandbox.jpg', import.meta.url).href,
                    minPlayers: 12,
                    maxPlayers: 4
                }, {
                    name: 'Sandtrap',
                    url: 'https://www.halopedia.org/Sandtrap',
                    imageUrl: new URL('../images/Halo 3/Sandtrap.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Snowbound',
                    url: 'https://www.halopedia.org/Snowbound',
                    imageUrl: new URL('../images/Halo 3/Snowbound.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 8
                }, {
                    name: 'Standoff',
                    url: 'https://www.halopedia.org/Standoff',
                    imageUrl: new URL('../images/Halo 3/Standoff.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'The Pit',
                    url: 'https://www.halopedia.org/The_Pit',
                    imageUrl: new URL('../images/Halo 3/The Pit.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 10
                }, {
                    name: 'Valhalla',
                    url: 'https://www.halopedia.org/Valhalla',
                    imageUrl: new URL('../images/Halo 3/Valhalla.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                },
            ],
            modes: [{
                name: 'Team Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Slayer Duel',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'CTF 2 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'CTF 1 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'Team King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Crazy King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Team Oddball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'Ninjaball',
                imageUrl: new URL('../images/modes/oddball.png', import.meta.url).href
            }, {
                name: 'Infection Classic',
                imageUrl: new URL('../images/modes/infection.png', import.meta.url).href
            }, {
                name: 'Infection Alpha Zombie',
                imageUrl: new URL('../images/modes/infection.png', import.meta.url).href
            }],
        }, {
            name: 'Halo 4',
            id: 'H4',
            shortName: 'H4',
            url: 'https://www.halopedia.org/Halo_4',
            imageUrl: new URL('../images/covers/Halo 4 portrait.jpg', import.meta.url).href,
            maps: [
                {
                    name: 'Abandon',
                    url: 'https://www.halopedia.org/Abandon',
                    imageUrl: new URL('../images/Halo 4/Abandon.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Adrift',
                    url: 'https://www.halopedia.org/Adrift',
                    imageUrl: new URL('../images/Halo 4/Adrift.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 14
                }, {
                    name: 'Complex',
                    url: 'https://www.halopedia.org/Complex',
                    imageUrl: new URL('../images/Halo 4/Complex.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Daybreak',
                    url: 'https://www.halopedia.org/Daybreak',
                    imageUrl: new URL('../images/Halo 4/Daybreak.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Erosion',
                    url: 'https://www.halopedia.org/Erosion',
                    imageUrl: new URL('../images/Halo 4/Erosion.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 12
                }, {
                    name: 'Exile',
                    url: 'https://www.halopedia.org/Exile',
                    imageUrl: new URL('../images/Halo 4/Exile.jpg', import.meta.url).href,
                    minPlayers: 8,
                    maxPlayers: 16
                }, {
                    name: 'Forge Island',
                    url: 'https://www.halopedia.org/Forge_Island',
                    imageUrl: new URL('../images/Halo 4/Forge Island.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 16
                }, {
                    name: 'Harvest',
                    url: 'https://www.halopedia.org/Harvest_(map)',
                    imageUrl: new URL('../images/Halo 4/Harvest.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 16
                }, {
                    name: 'Haven',
                    url: 'https://www.halopedia.org/Haven',
                    imageUrl: new URL('../images/Halo 4/Haven.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Impact',
                    url: 'https://www.halopedia.org/Impact',
                    imageUrl: new URL('../images/Halo 4/Impact.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 12
                }, {
                    name: 'Landfall',
                    url: 'https://www.halopedia.org/Landfall',
                    imageUrl: new URL('../images/Halo 4/Landfall.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 10
                }, {
                    name: 'Longbow',
                    url: 'https://www.halopedia.org/Longbow',
                    imageUrl: new URL('../images/Halo 4/Longbow.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Meltdown',
                    url: 'https://www.halopedia.org/Meltdown',
                    imageUrl: new URL('../images/Halo 4/Meltdown.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Monolith',
                    url: 'https://www.halopedia.org/Monolith',
                    imageUrl: new URL('../images/Halo 4/Monolith.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 12
                }, {
                    name: 'Outcast',
                    url: 'https://www.halopedia.org/Outcast',
                    imageUrl: new URL('../images/Halo 4/Outcast.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Perdition',
                    url: 'https://www.halopedia.org/Perdition',
                    imageUrl: new URL('../images/Halo 4/Perdition.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Pitfall',
                    url: 'https://www.halopedia.org/Pitfall',
                    imageUrl: new URL('../images/Halo 4/Pitfall.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 10
                }, {
                    name: 'Ragnarok',
                    url: 'https://www.halopedia.org/Ragnarok',
                    imageUrl: new URL('../images/Halo 4/Ragnarok.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Ravine',
                    url: 'https://www.halopedia.org/Ravine',
                    imageUrl: new URL('../images/Halo 4/Ravine.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 12
                }, {
                    name: 'Shatter',
                    url: 'https://www.halopedia.org/Shatter',
                    imageUrl: new URL('../images/Halo 4/Shatter.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Skyline',
                    url: 'https://www.halopedia.org/Skyline_(level)',
                    imageUrl: new URL('../images/Halo 4/Skyline.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 14
                }, {
                    name: 'Solace',
                    url: 'https://www.halopedia.org/Solace',
                    imageUrl: new URL('../images/Halo 4/Solace.jpg', import.meta.url).href,
                    minPlayers: 2,
                    maxPlayers: 8
                }, {
                    name: 'Vertigo',
                    url: 'https://www.halopedia.org/Vertigo',
                    imageUrl: new URL('../images/Halo 4/Vertigo.jpg', import.meta.url).href,
                    minPlayers: 10,
                    maxPlayers: 8
                }, {
                    name: 'Vortex',
                    url: 'https://www.halopedia.org/Vortex',
                    imageUrl: new URL('../images/Halo 4/Vortex.jpg', import.meta.url).href,
                    minPlayers: 6,
                    maxPlayers: 16
                }, {
                    name: 'Wreckage',
                    url: 'https://www.halopedia.org/Wreckage',
                    imageUrl: new URL('../images/Halo 4/Wreckage.jpg', import.meta.url).href,
                    minPlayers: 4,
                    maxPlayers: 16
                },
            ],
            modes: [{
                name: 'Slayer Free For All',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'Team Slayer',
                imageUrl: new URL('../images/modes/slayer.png', import.meta.url).href
            }, {
                name: 'CTF 2 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'CTF 1 Flag',
                imageUrl: new URL('../images/modes/ctf.png', import.meta.url).href
            }, {
                name: 'Team King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Crazy King of the Hill',
                imageUrl: new URL('../images/modes/king-of-the-hill.png', import.meta.url).href
            }, {
                name: 'Flood',
                imageUrl: new URL('../images/modes/infection.png', import.meta.url).href
            }],
        }] as Game[]
};
export const library = new Library();

for (const game of library.games) {
    for (const map of game.maps) {
        map.game = game;
        //generate a unique map id for each map, based on the game and the map title
        map.id = `${game.id}-${map.name.replace(/[^a-z0-9]/gi, '_')}`;
    }
    for (const mode of game.modes) {
        //generate a unique map id for each map, based on the game and the map title
        mode.id = `${game.id}-${mode.name.replace(/[^a-z0-9]/gi, '_')}`;
    }
}

export interface Game {
    name: string;
    /**
     * A unique identifier for this game
     */
    id: string;
    /**
     * The short abbreviated name for this game
     */
    shortName: string;
    /**
     * URL to the halopedia page for this game
     */
    url: string;
    /**
     * URL to the image for this game
     */
    imageUrl: string;
    maps: GameMap[];
    modes: GameMode[]
}

export interface GameMap {
    /**
     * A unique identifier for this map
     */
    id: string;
    /**
     * A reference to the game this map belongs to
     */
    game: Game;
    /**
     * The name of this map
     */
    name: string;
    /**
     * URL to the halopedia page for this map
     */
    url: string;
    /**
     * URL to the image for this map
     */
    imageUrl: string;
    minPlayers: number;
    maxPlayers: number;
}

export interface GameMode {
    /**
     * A unique identifier for this game
     */
    id: string;
    name: string;
    imageUrl: string;
}
