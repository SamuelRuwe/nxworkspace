import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsDirective } from './tabs.directive';
import { TabInterface } from '../tab';

@Component({
  selector: 'pg-layout-tabs [tabs]',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  @Input() tabs!: TabInterface[];

  @ViewChild(TabsDirective, {static: true}) tabsHost!: TabsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if (this.tabs?.length) this.loadTabComponent(0);
  }

  loadTabComponent(eventData: number) {

    const currentTab = eventData ? this.tabs[eventData] : this.tabs[0];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentTab.component);
    const viewContainerRef = this.tabsHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent<TabInterface>(componentFactory);
  }

}
