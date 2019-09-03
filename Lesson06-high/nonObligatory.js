let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let tome in user) {
  // ключи
  console.log( tome );  // name, age, isAdmin
  // значения ключей
  console.log( user[tome] ); // John, 30, true
}