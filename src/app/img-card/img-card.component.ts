import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  @Input()  imgId: number;
  imgUrl = '';

  constructor() { }

  ngOnInit() {
    this.imgUrl = 'https://source.unsplash.com/collection/190727?sig=1' + this.imgId;
  }

}
