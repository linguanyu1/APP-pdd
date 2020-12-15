import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
public msg = "我是自主阿金"
  ngOnInit(): void {
  }
test(){
  alert(4567)
}
}
