import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../../service/main/main-service.service';
import { PagerService } from '../../service/pagination/pager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];
  pager: any = {};

  pagedItems: any = [];
  deletedItems: any = [];
  searchText: any;

  constructor(private _service: MainServiceService, private pagerService: PagerService) {
    this.loadPocList();
  }
  ngOnInit(): void {
    
  }

  loadPocList() {
    this._service.loadData().subscribe((res: any) => {
      
      this.users = res.data;
      if (res.data.length > 0) {
        this.setPage(res.meta.pagination.page,res.meta.pagination.total);
      }
      else {
        this.pagedItems = res;
      }
    },
      err => console.log(err)
    )
  }

  setPage(page: number, total:number) {
    
    // get pager object from service
    this.pager = this.pagerService.getPager(total, page);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  nextRecord(page:number)
  {
    this._service.loadDataPaging(page).subscribe((res: any) => {
      
      this.users = res.data;
      if (res.data.length > 0) {
        this.setPage(res.meta.pagination.page,res.meta.pagination.total);
      }
      else {
        this.pagedItems = res;
      }
    },
      err => console.log(err)
    )

  }
}
