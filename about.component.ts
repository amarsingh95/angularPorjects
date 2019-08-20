import { Component, OnInit } from '@angular/core';
import {insert} from '../insertmodel';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {

  constructor(private dataserve:DataserviceService) { }
  dynamicRowarray:Array<insert>=[];
  //declare array having datatype as of insert class

  dynamicinf:any={};
 //declare object type any
  ngOnInit() {
    this.dynamicinf={name:"",lastname:"",emailid:""};
    this.dynamicRowarray.push(this.dynamicinf);
    //On page load just one row with textfield
  }

  addRow()
  {
    if(this.dynamicRowarray.length>7)
    {
    return false;
    ////Adds only 7 rows 
    }else
    {
    this.dynamicinf={name:"",lastname:"",emailid:""};
    this.dynamicRowarray.push(this.dynamicinf);
    //console.log(this.dynamicRowarray);
    }
  }
  //add Rows in About page 
  //Warning Don't use form tag that refresh ur input value attribute to null

  DelRows(index)
  {
  if(this.dynamicRowarray.length===1)
    {
    return false;
    ///Row will not be deleted if there is only one row
    }else
   {console.log(index);
     this.dynamicRowarray.splice(index,1)
     ///Delete Row
    }
  }



  postData()
  {
    this.dataserve.postRow(this.dynamicRowarray).subscribe(data=>
      {
       console.log(data); 
      });
    
  }
  //Post added row data to backend 




}
