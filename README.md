# Визуализация данных

- Git: https://github.com/consultapp/data-visualizer-t
- Макет: https://data-visualizer-t.netlify.app/

## ТЗ

Система состоит из трех компонент (front, back и db) и устанавливается на три инстанса (dev, test и prod).
На каждом инстансе запускаются тестов и собирается статистика на каждом инстансе, по каждой компоненте
Требуется визуализировать сводные данные по результатам тестирования по макету

https://www.figma.com/file/VloHlbLMb1qCId7tgb9GVh/%D1%82%D0%B5%D1%81%D1%82?node-id=8%3A194

- Столбики показывают количество пройденных тестов по каждому компоненту системы на трех инстансах.
- Инстансы отображаются вдоль горизонтальной оси и имеют подписи.
- Высота столбика должна быть пропорциональна данным, которые этот столбик отображает.
- Четвертый столбик показывает специально заданное значение “Норматив”.
- От инстанса “dev” инстансу “test”, и от инстанса “test” к инстансу “prod” идут стрелочки. На стрелочке записано отклонение, которое показывает разницу между суммарными значениями.

Данные предоставляются в виде JSON. По кажому из трех инстансов и по каждой компоненте есть значение, и дополнительно, норматив.
Веб приложение должно скачивать файл с сервера.

### Есть 5 примеров данных, по ссылкам:

- https://rcslabs.ru/ttrp1.json
- https://rcslabs.ru/ttrp2.json
- https://rcslabs.ru/ttrp3.json
- https://rcslabs.ru/ttrp4.json
- https://rcslabs.ru/ttrp5.json

## Формат данных:

```
{
// Заголовок
// Данные по инстансу “dev”
// - Кол-во тестов по “Клиентской части” на “dev” // - по “Серверной части” на “dev”
// - по “Базе данных” на “dev”
// Данные по инстансу “test”
// - по “Клиентской части” на “test” // - по “Серверной части” на “test” // - по “Базе данных” на “test”
// Данные по инстансу “prod”
// - по “Клиентской части” на “prod” // - по “Серверной части” на “prod”
     "title": "OS Doors",
"dev": {
  "front": 66,
  "back": 100,
  "db": 31
}, "test": {
  "front": 60,
  "back": 80,
  "db": 31
}, "prod": {
  "front": 66,
  "back": 83,

"db": 31 // - по “Базе данных” на “prod” },
"norm": 150 // Норматив }
```

Для верстки визуализации требуется использовать HTML, CSS и SVG. Можно использовать фреймворки и библиотеки для организации приложения (например, React.js, Vue, JQuery, Backbone), но нельзя использовать библиотеки для построения графиков.
Желательно использовать “резиновую” верстку.
Don’t Panic
