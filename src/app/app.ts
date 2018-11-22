import { Component } from 'angular-ts-decorators';
import { DataService, Map, Game, GameType } from '../dataService';
import { collapseSection, expandSection } from '../animations';

@Component({
    selector: 'haloApp',
    controllerAs: 'vm',
    template: require('./app.html')
})
export class AppComponent {
    static $inject = ['dataService']
    constructor(
        private dataService: DataService
    ) {
    }

    public get games() {
        return this.dataService.games;
    }


    public get isGamesHidden() {
        return this._isGamesHidden;
    }
    public set isGamesHidden(value) {
        this._isGamesHidden = value;
        let element = document.getElementById('games-body');
        if (value) {
            collapseSection(element);
        } else {
            expandSection(element);
        }
    }
    private _isGamesHidden = false;

    public get isGameTypesHidden() {
        return this._isGameTypesHidden;
    }
    public set isGameTypesHidden(value) {
        this._isGameTypesHidden = value;
        setTimeout(function () {
            let element = document.getElementById('games-type-body');
            if (value) {
                collapseSection(element);
            } else {
                expandSection(element);
            }
        });
    }
    private _isGameTypesHidden = false;

    public selectedGame: Game;

    public selectedGameType: GameType;

    public generatedMaps: Map[];

    public selectGame(game: Game, scroll = true) {
        this.selectedGame = game;
        this.isGamesHidden = true;
        this.isGameTypesHidden = false;
        this.selectedGameType = undefined;
        this.generatedMaps = undefined;
        // if (scroll) {
        //     document.querySelector('#pick-game-type').scrollIntoView({
        //         behavior: 'smooth'
        //     });
        // }
    }

    public selectGameType(gameType: GameType, scroll = true) {
        this.selectedGameType = gameType;
        this.isGameTypesHidden = true;
        this.generateMaps(scroll);
    }

    /**
     * Keeps track of the already used random variants (to prevent dupes)
     */
    private usedVariants: number[] = [];

    public randomize() {
        var allMapsIndexes = [];
        //get total number of options
        var count = 0;
        for (var game of this.games) {
            for (var gameType of game.gameTypes) {
                if (gameType.name === 'All Maps') {
                    allMapsIndexes.push(count);
                }
                count++;
            }
        }
        //if we have used up all of our variants, reset the variant counter
        if (this.usedVariants.length === count) {
            this.usedVariants = [];
        }

        //get a random variant index that we haven't used before
        var randomNumber = 0;
        for (var i = 0; i < 10000; i++) {
            randomNumber = this.getRandomInt(0, count);
            //don't use a number we already used, and skip the 'All Maps' items'
            if (this.usedVariants.indexOf(randomNumber) === -1 && allMapsIndexes.indexOf(randomNumber) === -1) {
                this.usedVariants.push(randomNumber);
                //keep this value
                break;
            }
        }

        //select the variant
        count = 0;
        outer: for (var game of this.games) {
            for (var gameType of game.gameTypes) {
                if (count === randomNumber) {
                    this.selectGame(game, false);
                    this.selectGameType(gameType, false);
                    break outer;
                }
                count++;
            }
        }
    }

    public reset() {
        this.selectedGame = undefined;
        this.selectedGameType = undefined;
    }

    public generateMaps(scroll = true) {
        if (!this.selectedGameType) {
            return;
        }
        var indexes = <number[]>[];
        var maps = <Map[]>[];
        var iteration = 0;
        for (var i = 0; i < 10000; i++) {
            var idx = this.getRandomInt(0, this.selectedGameType.mapNames.length - 1);
            if (indexes.indexOf(idx) === -1) {
                indexes.push(idx);
                let mapName = this.selectedGameType.mapNames[idx];
                let map = this.selectedGame.maps.filter(x => x.name === mapName)[0];
                if (!map) {
                    map = {
                        name: mapName,
                        url: null
                    };
                }
                maps.push(map);
            }
            if (indexes.length === this.selectedGameType.mapNames.length) {
                break;
            }
        }
        this.generatedMaps = maps;

        // if (scroll) {
        //     document.querySelector('#maps').scrollIntoView({
        //         behavior: 'smooth',
        //         block: 'start'
        //     });
        // }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
