import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Componentes
import { HeaderComponent } from '../../componentes/header/header.component';
import { KnowledgeComponent } from '../../componentes/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../componentes/experiences/experiences.component';
import { ProjectsComponent } from '../../componentes/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent,KnowledgeComponent,ExperiencesComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
