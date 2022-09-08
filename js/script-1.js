// HOME WORK 01 2022.08.08


// 01
// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:
// назва - рядок "Droid";
// ціна за штуку - число 2000.

// -----------------------------------------------------------
// Change code below this line

// const productName = 'Droid';
// console.log(productName);
// // 'Droid'

// const pricePerItem = 2000;
// console.log(pricePerItem);
// // 2000

// ************************************************************


// 02
// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// -----------------------------------------------------------
// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line

// pricePerItem += 1500;
// console.log(pricePerItem);

// productName = "Repair droid"
// console.log(productName);

// ************************************************************



// 03
// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// -----------------------------------------------------------
// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// ************************************************************


// 04
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// -----------------------------------------------------------
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// ************************************************************


// 05
// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <ім'я каталогу> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// -----------------------------------------------------------
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message);

// ************************************************************


// 06
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// -----------------------------------------------------------
// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// ************************************************************

// 07
// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// -----------------------------------------------------------
// // Change code below this line
// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

// ************************************************************


// 08
// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.
// -----------------------------------------------------------
// Change code below this line
// function add(a, b, c) {
//     console.log("Addition result equals " + (a + b + c));
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// ************************************************************


// 09
// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.
// -----------------------------------------------------------
// function add(a, b, c) {
//     // Change code below this line
//   return a + b + c
    
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// ************************************************************


// 10
// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.
// -----------------------------------------------------------
// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };

//   const message1 = makeMessage('Radar', 6150);
//   console.log(message1);
//   const message2 =  makeMessage('Scanner', 3500);
//   console.log(message2);
//   const message3 = makeMessage('Reactor', 8000);
//   console.log(message3);
//   const message4 = makeMessage('Engine', 4070);
//   console.log(message4);

// ************************************************************


// 11
// Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.
// -----------------------------------------------------------
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;
  
//     // Change code above this line
//     return totalPrice;
//   };

// ************************************************************


// 12
// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.
// -----------------------------------------------------------
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     // const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     // console.log(totalPrice);
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     // console.log(message);
//     // Change code above this line
//     return message;
//   }

//   const message1 = makeOrderMessage(2, 100, 50);
//   console.log(message1);
//   const message2 =  makeOrderMessage(4, 300, 100);
//   console.log(message2);
//   const message3 = makeOrderMessage(10, 70, 200);
//   console.log(message3);


// ************************************************************


// 13
// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.
// -----------------------------------------------------------
// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
  
//     // Change code above this line
//     return passed;
//   }

// ************************************************************


// 18

// -----------------------------------------------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//       message = "Insufficient funds!";
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//     // Change code above this line
//     return message;
//   }

//   console.log(makeTransaction(3000, 5, 23000));
// ************************************************************


// 28

// -----------------------------------------------------------
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
//     // if (password === null) {
//     //   message = "Canceled by user!";
//     // } else if (password === ADMIN_PASSWORD) {
//     //   message = "Welcome!";
//     // } else {
//     //   message = "Access denied, wrong password!";
//     // }
  
//     switch (password) {
//       case null:
//         message = "Canceled by user!";
//       break;
  
//       case ADMIN_PASSWORD:
//         message = "Welcome!";
//       break;
  
//       default:
//         message = "Access denied, wrong password!";
//     }
  
//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword('jqueryismyjam'));

// ************************************************************


// 36
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.
// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// -----------------------------------------------------------
// function checkForSpam(message) {
//     console.log(message.toLowerCase());
//     let result;
//     result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

//     // Change code below this line
//     // switch(message.toLowerCase()) {
//     //   case 'spam':
//     //     result = true;
//     //   break;
  
//     //   case 'sale':
//     //     result = true;
//     //   break;
  
//     //   default:
//     //     result = false;
//     // }


//     // Change code above this line
//     return result;
//   }

//   console.log(checkForSpam("Latest technology news"));
//   console.log(checkForSpam('Get best sale offers now!'));

// ************************************************************


// HOME WORK 02 2022.08.12

// 11
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// -----------------------------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
 
//     // console.log(message.split(' ').length);
//  return message.split(' ').length * pricePerWord;
 
//     // Change code above this line
//  }

// console.log( calculateEngravingPrice('JavaScript is in my blood', 10));
// ************************************************************


// 13
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// -----------------------------------------------------------
// function slugify(title) {
//     // Change code below this line
  
//   return title.split(' ').join('-').toLowerCase();
// //   toLowerCase
  
//     // Change code above this line
//   }
// console.log(slugify('Arrays for begginers'));
// ************************************************************


// 21
// Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.
// -----------------------------------------------------------
// function findLongestWord(string) {
//     // Change code below this line
//     let longestWord = '';
//     for (let word of string.split(' ')) {
//             if (word.length > longestWord.length) {
//         longestWord = word;
//       }    
//     }
//     return longestWord;
//     // Change code above this line
//   }
//   findLongestWord('The quick brown fox jumped over the lazy dog');
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ************************************************************


// 25
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.// -----------------------------------------------------------
// -----------------------------------------------------------
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonArray = [];
// for (let element of array1) {
//   for (let i = 0; i < array2.length; i += 1) {
//     if (element === array2[i]) {
//       commonArray.push(element);
//     }
//   }
// }
// return commonArray;

//  // Change code above this line
// }

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonArray = [];
// for (let element of array1) {
//     if (array2.includes(element)) {
//       commonArray.push(element);
//   }
// }
// return commonArray;

//  // Change code above this line
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// ************************************************************

// HOME WORK 03 2022.08.19

// 14
// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.
// -----------------------------------------------------------
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object)
  
//     for (const key of keys) {
//         propCount += 1;  
//     }
  
//     return propCount;
//     // Change code above this line
//   }

// countProps({})
// countProps({ name: 'Mango', age: 2 }) 
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })
// ************************************************************


// 19
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// -----------------------------------------------------------
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const props = [];
//     for (let product of products) {
//       if (Object.keys(product).includes(propName) === false) {
//         return props;
//       }
//       props.push(product[propName]);
//     }
//   return props;
  
  
//     // Change code above this line
//   }

//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));
//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("price"));
// ************************************************************


// 41
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.
// {name: "Dragon breath", price: 700}
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// -----------------------------------------------------------
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     // const {potions: [...{name, price}],} = atTheOldToad;
    
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//         for (this.potion of this.potions ) {
//             if (this.potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//               }
//         }
  
//       this.potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         for (let i=0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//               this.potions.splice(i, 1);
//               return
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },

//     updatePotionName(oldName, newName) {
//         for (let i=0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === oldName) {
//                 this.potions[i].name = newName;
//               return
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//   };
  

//   console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
//   console.log(atTheOldToad.removePotion('Dragon breath'));
//   console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// ************************************************************


// HOME WORK 04 2022.08.26

// 03 
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".
// -----------------------------------------------------------
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
//   });
// ************************************************************


// 25 
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
// -----------------------------------------------------------
// // Change code below this line
// const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// // Change code above this line

// const usersArr = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ]
  
//   console.log(getFriends(usersArr));
// ************************************************************


// HOME WORK 05 2022.09.02

// 20
// Додай класу Admin наступні властивості і методи.
// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
// -----------------------------------------------------------
// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get mail() {
//       return this.email;
//     }
  
//     set mail(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel}) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
//     blacklistedEmails = [];

//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//         // return email === this.blacklistedEmails.find(element => element === email);
//         return this.blacklistedEmails.includes(email);
//     }
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  
// ************************************************************

  