import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-modal-view',
  templateUrl: './head-modal-view.component.html',
  styleUrls: ['./head-modal-view.component.css']
})
export class HeadModalViewComponent implements OnInit {

  slide1: string = '../../assets/photos/TigerBand-02.png';
  slide2: string = '../../assets/photos/20201024_212559.jpg';
  slide3: string = '../../assets/photos/A7300695 (2).JPG';

  constructor() { }

  ngOnInit(): void {
  }

}
