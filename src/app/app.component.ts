// tslint:disable object-literal-key-quotes
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

export class Car {
  public vin: any;
  public brand: string;
  public year: number;
  public color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];

  public title = 'p-table-responsive-scroll-app';

  public loading = false;

  public virtualCars: Car[];

  public totalRecords: number;

  public inmemoryData = [
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'},
    {'brand': 'VW', 'year': 2012, 'color': 'Orange'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red'}
  ];


  ngOnInit() {
    this.totalRecords = 250000;
    this.loading = true;
  }

  loadDataOnScroll(event: LazyLoadEvent) {
    this.loading = true;

    // for demo purposes keep loading the same dataset
    // in a real production application, this data should come from server by building the query with LazyLoadEvent options 
    setTimeout(() => {
        // last chunk
        if (event.first === 249980) {
            this.virtualCars = this.loadChunk(event.first, 20);
        } else {
          this.virtualCars = this.loadChunk(event.first, event.rows);
        }
        this.loading = false;
    }, 100);
  }

  loadChunk(index, length): Car[] {
    const chunk: Car[] = [];
    for (let i = 0; i < length; i++) {
        chunk[i] = {...this.inmemoryData[i], ...{vin: (index + i)}};
    }

    return chunk;
  }


}
