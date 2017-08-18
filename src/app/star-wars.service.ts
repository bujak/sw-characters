import {LogService} from './log.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';

@Injectable()
export class StarWarsService {
  private characters = [
    {name: 'Yoda', side: ''},
    {name: 'Palpatine', side: ''}
  ];
  private logService: LogService;
  private http: Http;
  charactersChanged = new Subject<void>();

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  fetchCharacters() {
    this.http.get('http://swapi.co/api/people/').subscribe(
      (response: Response) => {
        this.logService.writeLog(response);
      }
    );
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(`Character ${charInfo.name} switched to ${charInfo.side} side.`);
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newCharacter = {name: name, side: side};
    this.characters.push(newCharacter);
  }
}
