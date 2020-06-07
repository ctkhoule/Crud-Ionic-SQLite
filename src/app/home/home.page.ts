import { Component } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {platform} from "os";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Définition nom BD et table
  databaseObj: SQLiteObject;
  readonly database_name: string = "freaky_database.db";
  readonly table_name: string = "myfreakytable";

  name_modl: string = "";
  row_data: any = [];

  //Operation de MAJ
  updateActive: boolean;
  to_update_item:any;

  constructor(private platform: Platform, private sqlite: SQLite) {

  }

}
