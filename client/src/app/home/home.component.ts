import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teste: string | any ;
  menus: Array<PoMenuItem> = [
    { label: 'Register user',  icon: 'po-icon-user', shortLabel: 'Register' },
    {
      label: 'Timekeeping',
      icon: 'po-icon-clock',
      shortLabel: 'Timekeeping',
      // badge: { value: 1 }
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.teste = '';
  }

}
