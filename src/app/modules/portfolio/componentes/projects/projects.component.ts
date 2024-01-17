import { Component, Signal, inject, signal } from '@angular/core';
//Interface
import { IProjects } from '../../interface/IProjects';

//Material
import {MatDialog, MatDialogModule,} from '@angular/material/dialog';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
       src:`assets/vfull.png`,
       alt:`Projeto Vida FullStack`,
       title:`Vida FullStack`,
       with:`100px`,
       height:`51px`,
       description:`<p>Projeto desenvolvido para o curso de Angular </p>`,
       links:[
        {
          name:`Conheça o Blog`,
          href:`https://vidafullstack.com.br/`,
        },
       ],
    },

    {
      src:`assets/vfull.png`,
      alt:`Projeto Vida FullStack`,
      title:`Vida FullStack 2`,
      with:`100px`,
      height:`51px`,
      description:`<p>Projeto desenvolvido para o curso de Angular </p>`,
      links:[
       {
         name:`Conheça o Blog`,
         href:`https://vidafullstack.com.br/`,
       },
      ],
   },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, { // Add a comma after DialogProjectsComponent
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
};
