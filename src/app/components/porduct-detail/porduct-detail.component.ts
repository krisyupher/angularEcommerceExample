import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-porduct-detail',
  templateUrl: './porduct-detail.component.html',
  styleUrls: ['./porduct-detail.component.scss'],
})
export class PorductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
  }
}
