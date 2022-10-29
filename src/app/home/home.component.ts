import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoList!: Video[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPopularVideos().subscribe((data) => {
      this.videoList = data;
    })
  }

}