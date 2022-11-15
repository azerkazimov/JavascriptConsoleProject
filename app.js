let manual = `
1. Qeydiyyat üçün 1 daxil edin
2. Istifadəçilər haqqinda məllumat
3. Sistemnən çixmaq üçün 3 daxil edin
`;

console.log(manual);

class User {
  constructor(name, surname, age, email, password) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  showName() {
    console.log(this.name);
  }

  showUserDetail() {
    console.log(
      `Ad: ${this.name}, Soyad: ${this.surname}, yaş: ${this.age}, email: ${this.email}`
    );
  }
}

let users = [];
function registerUser() {
  let name = prompt(`Adinizi daxil edin`);
  let surname = prompt(`Soyadinizi daxil edin`);
  let age = prompt(`Yaşinizi qeyd edin`);
  let email = prompt(`Elektron unvanivizi daxil edin`);
  let password = prompt(`Sifrənizi daxil edin`);
  let user = new User(name, surname, age, email, password);
  users.push(user);
}

while (true) {
  let input = prompt(`Zehmet olmasa secim edin: `);
  if (input == "1") {
    registerUser();
  } else if (input == "2") {
    showUser();
  } else if (input == "3") {
    console.log(`istifadəcilər haqqinda məllumat`);
    break;
  } else {
    console.log(`yalniş seçim etmisiniz`);
  }
}


