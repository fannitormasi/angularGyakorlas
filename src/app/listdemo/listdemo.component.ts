import { Component} from '@angular/core';

export class EventModel {
  id: number;
  name: string;
  pic?: string;

  constructor(name, id = 0, pic = '') {
    // Object.assign
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {

  events: EventModel[];
  modifyEvent: EventModel;

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'https://s3-eu-west-1.amazonaws.com/skiddlecdn-images-listings/festivals/7212_1544111091_fest.jpg'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'https://www.fezen.hu/storage/Logo/19/FEZEN_2019_LOGO.png'
      },
      {
        id: 3,
        name: 'sound',
        pic: 'https://pbs.twimg.com/profile_images/1070704138898628608/E2qNlAw5.jpg'
      }
    ];
    console.log('megjött a listdemo');
/*    const puf = this.events.reduce((x: EventModel, y: EventModel) => {
      return x.id > y.id ? x : y;
      if (x.id > y.id) {
        return x;
      } else {
        return y;
      }
    }).id;
    console.log(puf);*/

    this.modifyEvent = new EventModel('');
  }

  save(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel (newEventNameInput.value, maxId + 1, newEventPicInput.value)];
    } else {
      this.events = this.events.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventPicInput.value
          };
        } else {
          return ev;
        }
      });
      this.modifyEvent = new EventModel('');
    }
    newEventNameInput.value = '';
    newEventPicInput.value = '';
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  edit(id: number) {
    // HA biztos, hogy van ilyen
    // HA tudom, hogy csak egy ilyen van
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }
}
