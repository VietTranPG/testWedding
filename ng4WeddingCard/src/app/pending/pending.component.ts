import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/card']);

    },3700)
  }

}
