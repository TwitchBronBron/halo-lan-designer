import { Component } from 'angular-ts-decorators';
import { DataService, Map, Game, GameType } from '../dataService';

@Component({
    selector: 'haloApp',
    controllerAs: 'vm',
    template: require('./app.html')
})
export class AppComponent {
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

    public mapCount = 3;

    public generateMaps() {
        if (!this.selectedGameType) {
            return;
        }
        var indexes = <number[]>[];
        var maps = <Map[]>[];
        var iteration = 0;
        for (var i = 0; i < 10000; i++) {
            var idx = this.getRandomInt(0, this.selectedGameType.maps.length - 1);
            if (indexes.indexOf(idx) === -1) {
                indexes.push(idx);
                maps.push(this.selectedGame.maps[idx]);
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
