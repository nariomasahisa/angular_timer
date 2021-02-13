import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations'
 

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private nowTime: string
  public now =new Date()
  public hour: any;
  public minute: string;
  public second: string;
  public day: string;
  public month: string;


  constructor(
    public datePipe: DatePipe
  ){ }

  ngOnInit(): void {
    setInterval(() => {
      var date = new Date();
      this.updateDate(date);
    }, 1000);
  }

  private updateDate(date: Date){
    const hours = date.getHours();
    this.hour = this.hour ? this.hour :hours;
    this.hour = hours < 10 ? '0' + this.hour : this.hour;
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds()
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  };
}
