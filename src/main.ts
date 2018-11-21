import { NgModule } from 'angular-ts-decorators';
import { AppComponent } from './app/app';
import { DataService } from './dataService';
import './styles.scss';
import './**/*.scss';

@NgModule({
    id: 'app',
    declarations: [AppComponent],
    providers: [DataService]
})
export class AppModule { }