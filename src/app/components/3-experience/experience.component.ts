import { Component } from '@angular/core';
import { technologies } from 'src/app/pages/details/database';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  items = technologies;

  downloadPDF (value: string) {
    const link = document.createElement('a');

    if (value == "en"){
      link.href = 'assets/cv/CV_EN.pdf';
    }else{
      link.href = 'assets/cv/CV_ES.pdf';

    }
    link.download = 'MyCV.pdf';
    link.click();
  }

}
