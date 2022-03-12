import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinkShortenProcess } from '../models/link-shorten-process-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  linkShortenProcess: LinkShortenProcess = new LinkShortenProcess();
  constructor(private http:HttpClient) { }

  getLinkProcess(urlToShorten: string) : Observable<any>{
    const fullUrl = "https://api.shrtco.de/v2/shorten?url=";

    return this.http.get(fullUrl + urlToShorten);
  }
}
