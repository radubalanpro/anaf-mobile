import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoDetailPage } from './info-detail/info-detail.component';
import { IRssCategoryListItem, RssCategoryListItem } from '../../models/index';

/**
 * Master page for info tab
 * 
 * @export
 * @class InfoPage
 * @implements {OnInit}
 */
@Component({
  selector: 'page-notificari',
  templateUrl: 'info.component.html'
})
export class InfoPage implements OnInit {

  private listItems: Array<IRssCategoryListItem>;
  private listName: string;
  /**
   * Creates an instance of InfoPage.
   * 
   * @param {NavController} navCtrl
   * 
   * @memberOf InfoPage
   */
  constructor(private navCtrl: NavController) {

    this.listName = "Info";

    this.listItems = new Array<IRssCategoryListItem>();
    this.listItems.push(new RssCategoryListItem(this.listItems.length, "Anunturi", { filterBy: "channelGroups", filterValue: ["ACHIZITII", "ACTE", "CONCURSURI", "INTERESGEN"] }));
    this.listItems.push(new RssCategoryListItem(this.listItems.length, "Calendar obligatii fiscale", {filterBy:"tag",filterValue:"CALENDAR_OBLIGATII_FISCALE_IAN"}));
    this.listItems.push(new RssCategoryListItem(this.listItems.length, "Comunicate de presa", {filterBy:"channelGroup", filterValue:{name: "COMUNICATE_PRESA",description: "Comunicate de presa"}}));
    this.listItems.push(new RssCategoryListItem(this.listItems.length, "Noutati legislative", {filterBy:"tag",filterValue:"NOUTATI_LEGISLATIVE"}));
    this.listItems.push(new RssCategoryListItem(this.listItems.length, "Valorificare bunuri", {filterBy:"channelGroups",filterValue:["BUNURI_STAT","BUNURI_SECHESTRATE","BUNURI_SECHESTRATE_VANZARE_DIRECTA"]}));


  }

  /**
   * 
   * 
   * 
   * @memberOf InfoPage
   */
  ngOnInit() {


  }

  /**
   * Event listener for click events from rss-feed-category-list
   * 
   * @param {any} event
   * 
   * @memberOf InfoPage
   */
  itemSelectedListener(event) {
    let listItem = this.listItems[event.value];
    this.updateListItems(listItem);
  }



  /**
   * Creates a new instance of info-detail component
   * 
   * @private
   * @param {IRssCategoryListItem} selectedItem
   * 
   * @memberOf InfoPage
   */
  private updateListItems(selectedItem: IRssCategoryListItem): void {

    this.navCtrl.push(InfoDetailPage, { options: selectedItem });

  }

}
