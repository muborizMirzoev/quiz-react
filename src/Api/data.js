export const data = [
   {
      id: 1,
      question: 'Чему равна сумма [] + 1 + 2?',
      answers: [
         {
            value: '1.',
            status: false,
            id: 1
         },
         {
            value: 'NaN.',
            status: false,
            id: 2
         },
         {
            value: 'undefined',
            status: false,
            id: 3
         },
         {
            value: '12',
            status: true,
            id: 4
         },
         {
            value: 'Другое.',
            status: false,
            id: 5
         }
      ]
   },
   {
      id: 2,
      question: 'Что такое ECMAScript?',
      answers: [
         {
            value: 'Новый язык программирования.',
            status: false,
            id: 1
         },
         {
            value: 'Переработанная реализация Javascript.',
            status: false,
            id: 2
         },
         {
            value: 'Спецификация языка Javascript.',
            status: true,
            id: 3
         }
      ]
   },
   {
      id: 3,
      question: 'Чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?',
      answers: [
         {
            value: '345',
            status: false,
            id: 1
         },
         {
            value: '3.45',
            status: false,
            id: 2
         },
         {
            value: '3,45',
            status: false,
            id: 3
         },
         {
            value: 'Ни один из вариантов выше.',
            status: true,
            id: 4
         }
      ]
   },
   {
      id: 4,
      question: 'Где верно указан вывод данных?',
      answers: [
         {
            value: 'print(Hello)',
            status: false,
            id: 1
         },
         {
            value: 'prompt("Hello")',
            status: false,
            id: 2
         },
         {
            value: 'write("Hello")',
            status: false,
            id: 3
         },
         {
            value: 'console.log("Hello")',
            status: true,
            id: 4
         }
      ]
   },
   {
      id: 5,
      question: 'Где верно указан запуск всплывающего окна?',
      answers: [
         {
            value: 'new alert ("Hi")',
            status: false,
            id: 1
         },
         {
            value: 'info ("Hi")',
            status: false,
            id: 2
         },
         {
            value: 'Нет верных вариантов',
            status: false,
            id: 3
         },
         {
            value: 'alert ("Hi")',
            status: true,
            id: 4
         }
      ]
   },
   {
      id: 6,
      question: 'Какие циклы есть в языке JavaScript?',
      answers: [
         {
            value: 'for, forMap, foreach, while',
            status: false,
            id: 1
         },
         {
            value: 'for, forMap, foreach, while, do while',
            status: false,
            id: 2
         },
         {
            value: 'for, while, do while, foreach',
            status: false,
            id: 3
         },
         {
            value: 'for, while, do while',
            status: true,
            id: 4
         }
      ]
   },
   {
      id: 7,
      question: 'Что такое условный оператор?',
      answers: [
         {
            value: 'Конструкция, что выполняет код несколько раз',
            status: false,
            id: 1
         },
         {
            value: 'Конструкция для создания определенной переменной',
            status: false,
            id: 2
         },
         {
            value: 'Оператор сравнения значений',
            status: true,
            id: 3
         }
      ]
   },
   {
      id: 8,
      question: 'Какая переменная записана неверно?',
      answers: [
         {
            value: 'var num = "STRING";',
            status: false,
            id: 1
         },
         {
            value: 'var isDone = 0;',
            status: false,
            id: 2
         },
         {
            value: 'var b = false;',
            status: false,
            id: 3
         },
         {
            value: 'var number = 12,5;',
            status: true,
            id: 4
         }
      ]
   },
   {
      id: 9,
      question: 'В чем отличие между локальной и глобальной переменной?',
      answers: [
         {
            value: 'Отличий нет',
            status: false,
            id: 1
         },
         {
            value: 'Локальные видны повсюду, глобальные только в функциях',
            status: false,
            id: 2
         },
         {
            value: 'Глобальные можно переопределять, локальные нельзя',
            status: false,
            id: 3
         },
         {
            value: 'Локальные можно переопределять, глобальные нельзя',
            status: false,
            id: 4
         },
         {
            value: 'Глобальные видны повсюду, локальные только в функциях',
            status: true,
            id: 5
         }
      ]
   },
   {
      id: 10,
      question: 'Где можно использовать JavaScript?',
      answers: [
         {
            value: 'Мобильные приложения',
            status: false,
            id: 1
         },
         {
            value: 'Веб-приложения',
            status: false,
            id: 2
         },
         {
            value: 'Серверные приложения',
            status: false,
            id: 3
         },
         {
            value: 'Прикладное программное обеспечение',
            status: false,
            id: 4
         },
         {
            value: 'Можно во всех перечисленных',
            status: true,
            id: 5
         }
      ]
   },

];
