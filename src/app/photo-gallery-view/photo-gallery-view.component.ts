import { Component, OnInit} from '@angular/core';
import { Photo } from '../model/photo';


@Component({
selector: 'photo-gallery-view',
templateUrl: 'photo-gallery-view.component.html'
})

export class PhotoGalleryViewComponent implements OnInit{
  photos: Photo[] = [];

  constructor() {  }

  ngOnInit() {
    this.photos = [
      {url: '../../assets/photos/20201024_212559.jpg'},
      {url: '../../assets/photos/A7300695 (2).JPG'},
      {url: '../../assets/photos/File_001.jpeg'},
      {url: '../../assets/photos/20201024_212559.jpg'},
      {url: '../../assets/photos/A7300695 (2).JPG'},
      {url: '../../assets/photos/File_001.jpeg'},
      {url: '../../assets/photos/20201024_212559.jpg'},
      {url: '../../assets/photos/A7300695 (2).JPG'},

    ];
  }

}
