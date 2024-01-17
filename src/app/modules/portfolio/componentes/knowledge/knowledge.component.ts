import { Component, signal } from '@angular/core';
//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
    src:`assets/Ícons/Knowledge/html5.svg`,
    alt:`Ícone de conhecimento de html5`,
  },

  {
    src:`assets/Ícons/Knowledge/javascript.svg`,
    alt:`Ícone de conhecimento de javascript`,
  },

  {
    src:`assets/Ícons/Knowledge/css.svg`,
    alt:`Ícone de conhecimento de css`,
  },
  ])
}
