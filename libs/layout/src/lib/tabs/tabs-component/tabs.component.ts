import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsDirective } from './tabs.directive';
import { TabData, TabInterface } from '../tab';

@Component({
  selector: 'pg-layout-tabs [tabs]',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent<T> implements OnInit {

  @Input() tabs!: Array<TabInterface<T>>;

  @ViewChild(TabsDirective, {static: true}) tabsHost!: TabsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if (this.tabs?.length) this.loadTabComponent(0);
  }

  loadTabComponent(eventData: number) {

    if (eventData >= this.tabs.length || eventData < 0) return;
    const currentTab = this.tabs[eventData];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentTab.component);
    const viewContainerRef = this.tabsHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<TabData<T>>(componentFactory);

    if (!currentTab.data || !componentRef.instance) return;

    for (const [key, value] of Object.entries(currentTab.data)) {
      componentRef.instance[key] = value;
    }
  }

}
