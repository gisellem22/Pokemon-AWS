import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
}

}
