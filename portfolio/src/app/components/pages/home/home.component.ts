import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from 'src/app/services/connections/connections.service';
import { DataService } from 'src/app/services/data/data.service';
import { Experience, Project } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
