import { Component, VERSION } from "@angular/core";
import { Car } from "./car";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  prefix = "I am a ";
  name = "Teste";

  speak() {
    const sentence = this.prefix + this.name;
    return sentence;
  }

  colors: string[] = ["red", "blue", "green", "purple"];

  fruits: string[] = ["apple", "orange", "pear", "peach"];

  subaru: Car = { make: "Subaru", model: "Outback", miles: 58232 };
  honda: Car = { make: "Honda", model: "Accord", miles: 39393 };
  bmw: Car = { make: "BMW", model: "X3", miles: 4400 };

  cars: Car[] = [this.subaru, this.honda, this.bmw];
}
