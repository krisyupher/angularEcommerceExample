import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/models/product.model';
import { TableDataSource, TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;
  products: Product[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'precio', 'Acciones'];

  constructor(private productsServices: ProductsService) {
    this.dataSource = new TableDataSource();
  }
  ngOnInit() {
    this.productsServices.getAllProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteProduct(id: string): void {
    this.productsServices.DeleteProduct(id).subscribe((rst) => {
      if (rst) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
