import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'traduction';
  user = {
    name: 'Arthur',
    age: 42
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt-BR');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
