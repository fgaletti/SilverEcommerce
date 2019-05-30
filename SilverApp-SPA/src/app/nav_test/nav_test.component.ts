import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-test',
  templateUrl: './nav_test.component.html',
  styleUrls: ['./nav_test.component.css']
})
export class Nav_testComponent implements OnInit {

  public navbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
