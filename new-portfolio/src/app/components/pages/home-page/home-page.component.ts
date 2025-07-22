import { Component, OnInit } from '@angular/core';
import { GetSiteDataService } from 'src/app/services/getSiteData/get-site-data.service';
import { SiteData } from 'src/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public siteData: SiteData|null = null
  public sitePromise: Promise<SiteData>

  constructor(private siteDataService: GetSiteDataService) { }

  ngOnInit(): void {
    this.sitePromise = this.siteDataService.getSiteData()

    this.sitePromise.then((data)=>{
      this.siteData = data
      console.log(data)
    })
  }

}
