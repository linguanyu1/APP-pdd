import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { TopMenu } from './component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'APP-pdd';
  TopMenu: TopMenu[] = [
    {
      title: '热门',
      link: '#'
    },
    {
      title: '手机',
      link: '#'
    },
    {
      title: '电脑',
      link: '#'
    },
    {
      title: '手机',
      link: '#'
    },
    {
      title: '哈哈',
      link: '#'
    },
  ];
  TopMenu2: TopMenu[] = [
    {
      title: '随便',
      link: '#'
    },
    {
      title: '手机',
      link: '#'
    },
    {
      title: '电脑',
      link: '#'
    },
    {
      title: '手机',
      link: '#'
    },
    {
      title: '哈哈',
      link: '#'
    },
  ];
  handleTabSelect(e: TopMenu) {
    console.log(e)
  }
}

