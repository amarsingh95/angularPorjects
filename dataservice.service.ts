import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';
import{insert} from 'src/app/insertmodel';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost/Api/testApi";

  postRow(dynamicRowarray:Array<insert>):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/test.php`,{data:dynamicRowarray});
  }
  //to post Dynamic Row Data to Backend test.php

  getData()
  {
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getDataComp():Observable<any>
  {
   return this.http.get("http://localhost/test.php"); 
  }

  getState()
  {
   return this.http.get("http://localhost/state.php"); 
  }

  
}
