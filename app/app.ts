import {Nav, Platform, ionicBootstrap} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {HomePage} from "./pages/home/home";
import {Component, ViewChild} from "@angular/core";

@Component({
  templateUrl: "build/app.html",
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(private platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: "Home", component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
