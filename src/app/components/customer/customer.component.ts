import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit , OnDestroy{

  constructor(private activatedRoute : ActivatedRoute){}

  param$ !: Subscription;
  queryParam$!: Subscription;
  customerId : string = "";
  fids : string[] = [];
  joinedFids : string = "";

  ngOnInit(): void {

    //Spring Boot path variable
    this.param$ = this.activatedRoute.params.subscribe(
      (params)=>{
        this.customerId = params['custId'];
        console.log(this.customerId);
    })


    //Spring Boot queryparam
    this.queryParam$ = this.activatedRoute.queryParams.subscribe(
      (queryParams)=>{
        this.fids = queryParams['fids'].split('|');
      }
    )    
      
  }

  ngOnDestroy(): void {
    this.param$.unsubscribe()
    this.queryParam$.unsubscribe()
  }

  concat(val: any){
    console.log(val);
    this.joinedFids= this.joinedFids + val + '|';
    console.log(this.joinedFids);
  }

}
