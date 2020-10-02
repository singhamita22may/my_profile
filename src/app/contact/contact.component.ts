import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=100006334357012',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Skype',
        url: 'live:singhamita22may',
        iconUrl: './assets/icons/skype.svg'
      },
      {
        name: 'Instagram',
        //url: 'https://www.instagram.com/ritwickdey/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        //url: 'https://www.linkedin.com/in/ritwickdey',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
       // url: 'https://github.com/ritwickdey',
        iconUrl: './assets/icons/github.svg'
      }
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:singhamita22may@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

  vscodeMarketplace = {
    name: 'VSCode Extension Publisher',
    url: 'https://marketplace.visualstudio.com/publishers/ritwickdey',
    iconUrl: './assets/icons/vscode.svg'
  };
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
