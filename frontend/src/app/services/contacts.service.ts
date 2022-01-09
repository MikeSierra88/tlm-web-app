import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faDiscord, faFacebook, faInstagram, faTiktok, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Observable, of} from 'rxjs';

export interface ContactMethod {
  name: string;
  icon: IconDefinition;
  username: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactMethodList: ContactMethod[] = [
    {
      name: 'Discord',
      icon: faDiscord,
      username: 'TylerLevsMusic#0949'
    },
    {
      name: 'Twitch',
      icon: faTwitch,
      url: 'https://twitch.tv/tylerlevsmusic',
      username: 'TylerLevsMusic'
    },
    {
      name: 'Tiktok',
      icon: faTiktok,
      url: 'https://www.tiktok.com/@tylerlevsmusic',
      username: '@tylerlevsmusic'
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/tyler_levs',
      username: '@Tyler_Levs'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/tylerlevs/',
      username: 'tylerlevs'
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://www.facebook.com/tylerlevs',
      username: 'tylerlevs'
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:tylerlevsmusic@gmail.com',
      username: 'tylerlevsmusic@gmail.com'
    }
  ];

  constructor() { }

  getContactMethods(): Observable<ContactMethod[]> {
    return of(this.contactMethodList);
  }
}
