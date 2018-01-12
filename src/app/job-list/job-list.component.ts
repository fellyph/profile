import { Component, OnInit } from '@angular/core';
import Job from '../job/Job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobList = [
    new Job(1, 'Conexao Paris',
    'WordPress',
    'Job realizado em parceiria com studio cosmo',
    'images/conexao.jpg'),
    new Job(2, 'Steel Formed Section',
    'WordPress',
    'Job realizar com a equipe da inspiration marketing, Ux Jack French',
    'images/foto2.jpg'),
    new Job(3, 'Trulife',
    'WordPress',
    'Desenvolvimento site',
    'images/foto.jpg')
  ];

  currentFilter = 'All';

  constructor() { }

  ngOnInit() {
  }

  onFilter(value) {
    this.currentFilter = value;
  }

  onDetail(job: Job) {
    console.log(job);
  }

}
