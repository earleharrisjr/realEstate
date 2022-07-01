import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "Id":1,
    "Name":"Pine Street",
    "Type": "House",
    "Price": 120000,
    "Status": "Pending"
  },
  {
    "Id":2,
    "Name":"Dickenson",
    "Type": "House",
    "Price": 250000,
    "Status": "Just Listed"
  },
  {
    "Id":3,
    "Name":"Broad",
    "Type": "Apartment",
    "Price": 1500 +" per month",
    "Status": "For Rent"
  },
  {
    "Id":4,
    "Name":"Basket",
    "Type": "House",
    "Price": 250000,
    "Status": "For Sale"
  },
  {
    "Id":5,
    "Name":"Lemon",
    "Type": "House",
    "Price": 30000,
    "Status": "For Sale"
  },
  {
    "Id":6,
    "Name":"Bainbridge",
    "Type": "House",
    "Price": 234234,
    "Status": "For Sale"
  },
]


  constructor() { }

  ngOnInit(): void {
  }

}
