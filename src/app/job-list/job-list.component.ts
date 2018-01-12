import { Component, OnInit } from '@angular/core';
import Job from '../job/Job';
import { JobService } from '../services/job.service';

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
  jobListJson = [];
  currentFilter = 'All';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getList().subscribe(
      data => {
        this.jobListJson = data;
        this.mappingJson(data);
      },
      err => console.error(err)
    );
  }

  mappingJson(data) {
    this.jobList = data.forEach(element => {
      console.log(element);
    });
  }

  onFilter(value) {
    this.currentFilter = value;
  }

  onDetail(job: Job) {
    console.log(job);
  }

}
