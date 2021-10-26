import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsDirective } from './tabs.directive';
import { Tab } from './tab';
import { TabComponent } from './tab.component';
import { AComponent } from './test-components/a.component';
import { BComponent } from './test-components/b.component';

@Component({
  selector: 'pg-layout-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TabsComponent implements OnInit {

  @Input() tabs: Tab[] = [
    new Tab("A", AComponent),
    new Tab("B", BComponent)
  ];
  
  @ViewChild(TabsDirective, {static: true}) tabsHost!: TabsDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if (this.tabs.length) this.loadTabComponent();
  }


  loadTabComponent(eventData?: number) {

    const currentTab = eventData ? this.tabs[eventData] : this.tabs[0];
    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentTab.component);  
    const viewContainerRef = this.tabsHost.viewContainerRef;
    viewContainerRef.clear();
    
    const componentRef = viewContainerRef.createComponent<TabComponent>(componentFactory);
    componentRef.instance.label = currentTab.label;
    componentRef.instance.component = currentTab.component;
    
  }

}