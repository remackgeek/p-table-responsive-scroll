# p-table-responsive-scroll

This project provides a directive to address this issue with the primeng p-table:

[#5235 - Table (TurboTable) does not adjust scrollHeight after parent height change](https://github.com/primefaces/primeng/issues/5235)

This is partially based on the solution here:

[primeng TurboTable (p-table) does not work properly with scrollHeight='100%'](https://stackoverflow.com/questions/54200024/primeng-turbotable-p-table-does-not-work-properly-with-scrollheight-100)

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
