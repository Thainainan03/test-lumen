import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { LumenService } from './lumen.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results
  constructor(private lumenService : LumenService){
    
  }
  ngOnInit(){
    this.getAccount()
  }
  getAccount() {
    var result=[];
    var that = this
    this.lumenService.getUsers()
    .map(res => res.json())
      .subscribe(data => {
        this.results=data
        console.log(this.results)

      });
    console.log('test');
    console.log(this.results) 
  }
}
