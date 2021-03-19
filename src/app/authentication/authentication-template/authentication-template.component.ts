import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-template',
  templateUrl: './authentication-template.component.html',
  styleUrls: ['./authentication-template.component.scss']
})
export class AuthenticationTemplateComponent implements OnInit {
  applicationName = 'E-Cours';

  constructor() { }

  ngOnInit(): void {
  }

}
