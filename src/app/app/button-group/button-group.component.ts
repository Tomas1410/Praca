import { Component, OnInit } from '@angular/core';
import { faCaretSquareRight, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  faCaretSquareRight = faCaretSquareRight;
  faCaretSquareLeft = faCaretSquareLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
