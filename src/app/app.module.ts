import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { HeroComponent } from './hero/hero.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InfoCardComponent } from './statistics/info-card/info-card.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { FooterComponent } from './footer/footer.component';
import { LinkInputComponent } from './link-input/link-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HeroComponent,
    StatisticsComponent,
    InfoCardComponent,
    CtaSectionComponent,
    FooterComponent,
    LinkInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
