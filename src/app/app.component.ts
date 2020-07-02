import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
  title = 0;


 dataList=[
  {feature:"Single user",id:1},{feature:"5GB Storage",id:2},{feature:"Unlimited Public Projects",id:3},{feature:"Community Access",id:4},
  {feature:"Unlimited Private Projects",id:5},{feature:"Dedicated Phone Support",id:6},{feature:"Free Subdomain",id:7}
  ,{feature:"Monthly Status Reports",id:8}
]
 dataList1=[
  {feature:"5 Users",id:1},
  {feature:"50GB Storage",id:2},
  {feature:"Unlimited Public Project",id:3},
  {feature:"Community Access",id:4},
  {feature: "Unlimited Private Projects",id:5},
  {feature:"Dedicated Phone Support",id:6},{feature:"Free Subdomain",id:7},{feature:
  "Monthly Status Reports",id:8}
]
 dataList2=[
  {feature:"Unlimited Users",id:1},{feature:"150GB Storage",id:2},{feature:"Unlimited Public Projects",id:3},{feature:
  "Community Access",id:4},{feature:"Unlimited Private Projects",id:5},{feature:"Dedicated Phone Support",id:6},
  {feature:"Unlimited Free Subdomains",id:7},{feature:"Monthly Status Reports",id:8}
]



}
