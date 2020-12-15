import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges  } from '@angular/core';
export interface TopMenu {
  title: string;
  link: string;

}
@Component({
  selector: 'app-scroll-tab',
  templateUrl: './scroll-tab.component.html',
  styleUrls: ['./scroll-tab.component.css']
})
export class ScrollTabComponent implements OnInit , OnChanges {
  formgroup: FormGroup;
  constructor() { }


  selectIndex = -1;
  @Output() tabSelected = new EventEmitter();
  @Input() activeColor = 'yellow';
  @Input() titleColor = '#fff';
  @Input() indicatorColor = 'brown'
  @Input() menus: TopMenu[] = [

  ];
  @Input() backgroundColor = '#fff';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变', changes)
  }
  ngOnInit(): void {
    this.formgroup = new FormGroup({
      first: new FormControl('', Validators.maxLength(6)),
    })
    console.log(this.formgroup);
  }
  handleSelection(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
    console.log('-----------');
  }
}
