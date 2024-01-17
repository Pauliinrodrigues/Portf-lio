import { Component, signal } from '@angular/core';
//Interface
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal <IExperiences[]>([
    {
      summary: {
      strong:'Estudante em Programação',
      p:'Outubro|2023',
      },
      text:'Desde  Janeiro atuo como estudande, onde estou aprendendo diversas linguagens de programação.<p>Atualmente estou estudando Angular, JavaScript, TypeScript, HTML, CSS</p>'

    }

  ])
}
