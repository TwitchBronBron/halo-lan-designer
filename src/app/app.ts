import { Component } from 'angular-ts-decorators';
import { DataService, Map, Game, GameType } from '../dataService';

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

    public selectedGame: Game;

    public selectedGameType: GameType;

    public generatedMaps: Map[];

    public showAll() {
        var maps = [];
        for (var map of this.selectedGame.maps) {
            if (this.selectedGameType.mapNames.indexOf(map.name) > -1) {
                maps.push(map);
            }
        }
        this.generatedMaps = maps;
    }

    public reset() {
        this.selectedGame = undefined;
        this.selectedGameType = undefined;
    }

    public generateMaps() {
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
                        portraitUrl: null
                    };
                }
                maps.push(map);
            }
            if (maps.length >= this.mapCount) {
                break;
            }
        }
        this.generatedMaps = maps;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
