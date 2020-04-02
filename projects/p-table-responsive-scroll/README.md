# p-table-responsive-scroll

This project provides a directive for a primeng p-table that allows it to work correctly when scrollHeight="100%". It is packaged as a directive and based on the solution here: [primeng TurboTable (p-table) does not work properly with scrollHeight='100%'](https://stackoverflow.com/questions/54200024/primeng-turbotable-p-table-does-not-work-properly-with-scrollheight-100)

![license](https://img.shields.io/npm/l/p-table-responsive-scroll.svg) ![downloads](https://img.shields.io/npm/dt/p-table-responsive-scroll.svg)

## Usage

install the package:

    npm install --save p-table-responsive-scroll

import the ResponsiveScrollModule into your module:

    import { ResponsiveScrollModule } from 'p-table-responsive-scroll';

    imports: [BrowserModule, TableModule, ResponsiveScrollModule]

use the responsive-scrolling directive in your component:

    <p-table responsive-scrolling [columns]="cols" [value]="shortList" [scrollable]="true" scrollHeight="100%">

## Versions

use version 9.x with angular Angular 9
use version 8.x with angular Angular 8
