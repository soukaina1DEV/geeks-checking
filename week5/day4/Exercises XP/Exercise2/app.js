import { data } from "./data.js";

function Calculavg() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / data.length;
  console.log(`Average Age: ${averageAge}`);
}

Calculavg();
