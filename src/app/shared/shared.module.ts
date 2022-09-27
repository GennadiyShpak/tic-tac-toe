import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLinkWithHref } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ToGameBtnComponent } from './components/to-game-btn/to-game-btn.component';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { GameCellComponent } from './components/game-field/game-cell/game-cell.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { StatisticComponent } from './components/statistic/statistic.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    GameFieldComponent,
    GameCellComponent,
    FooterComponent,
    NavComponent,
    ToGameBtnComponent,
    UpButtonComponent,
    StatisticComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],
  exports: [
    GameFieldComponent,
    FooterComponent,
    NavComponent,
    ToGameBtnComponent,
    UpButtonComponent,
    StatisticComponent
  ]
})
export class SharedModule { }
