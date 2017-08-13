import {LogService} from './log.service';
import {Injectable} from '@angular/core';

@Injectable()
export class StarWarsService {
  private characters = [
    {name: 'Yoda', side: ''},
    {name: 'Palpatine', side: ''}
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog(`Character ${charInfo.name} switched to ${charInfo.side} side.`);
    }

  addCharacter(name, side) {
    const newCharacter = {name: name, side: side};
    this.characters.push(newCharacter);
  }
}
