import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsDirective } from './tabs.directive';
import { Tab } from './tab';
import { TabComponent } from './tab.component';
import { AComponent } from './testcomponents/a.component';
import { BComponent } from './testcomponents/b.component';

@Component({
  selector: 'pg-layout-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TabsComponent implements OnInit {

  @Input() tabs: Tab[] = [
    new Tab("tAb", AComponent),
    new Tab("taB", BComponent)
  ];
  
  @ViewChild(TabsDirective, {static: true}) tabsHost!: TabsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadTabComponent();
  }

  loadTabComponent(eventData?: number) {

    let currentTab;
    
    if (eventData) {
      currentTab = this.tabs[eventData];
      
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentTab.component);
      
      const viewContainerRef = this.tabsHost.viewContainerRef;
      viewContainerRef.clear();
      
      const componentRef = viewContainerRef.createComponent<TabComponent>(componentFactory);
      componentRef.instance.label = currentTab.label;
      componentRef.instance.component = currentTab.component;
    }
  }

}