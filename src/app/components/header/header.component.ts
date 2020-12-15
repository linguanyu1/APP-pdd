import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = "我是一个表套图"
@ViewChild('footer') footer:any;
  constructor() { }

  ngOnInit(): void {

  }
  getDtat(){
    alert(this.footer.msg)
  }
}
