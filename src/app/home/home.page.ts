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
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    })

    // Create DB if not there
    createDB() {
      this.sqlite.create({
        name: this.database_name,
        location: 'default'
      })
          .then((db: SQLiteObject) => {
            this.databaseObj = db;
            alert('freaky_datatable Database Created!');
          })
          .catch(e => {
            alert("error " + JSON.stringify(e))
          });
    }

  }

}
