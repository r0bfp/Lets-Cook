import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SearchBoxComponent } from "./searchbox/searchbox.component";
import { HighlightsComponent } from './highlights/highlights.component';

@NgModule({
    declarations: [ 
        ToolbarComponent,
        SearchBoxComponent,
        HighlightsComponent        
    ],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatCardModule, 
        MatDividerModule
    ],
    exports: [
        ToolbarComponent,
        SearchBoxComponent,
        HighlightsComponent
    ]
})

export class HomepageModule{

}