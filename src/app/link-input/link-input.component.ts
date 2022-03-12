import { Component, OnInit } from '@angular/core';
import { LinkShortenProcess } from '../models/link-shorten-process-model';
import { UrlShortenerService } from '../services/url-shortener.service';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.scss']
})
export class LinkInputComponent implements OnInit {
  urlToShorten: string = "";
  shortenedUrls: Array<LinkShortenProcess> = [];
  linkShortenProcess: LinkShortenProcess = new LinkShortenProcess();

  constructor(private urlShortener: UrlShortenerService) { }

  ngOnInit(): void {}

  shortenLink() {
    this.urlShortener.getLinkProcess(this.urlToShorten).subscribe((data) => {
      this.linkShortenProcess = new LinkShortenProcess();
      console.log(data.result.original_link);
      this.linkShortenProcess.urlOriginal = data.result.original_link;
      this.linkShortenProcess.urlShortened = data.result.full_short_link;
      console.log(this.linkShortenProcess);

      this.addToResultList(this.linkShortenProcess);
      
    });
    
    
    
    
    this.urlToShorten = "";
  }
  
  addToResultList(linkProcess: LinkShortenProcess){
    this.shortenedUrls.push(linkProcess);
    console.log(this.shortenedUrls);
  }

}
