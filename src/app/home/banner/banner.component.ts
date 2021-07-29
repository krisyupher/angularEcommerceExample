import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper = new Swiper('');
  images = [
    'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg',
    'https://www.ecestaticos.com/image/clipping/557/418/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
  ];
  constructor() {}

  ngOnInit(): void {
    let a = '';
  }
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }
}
