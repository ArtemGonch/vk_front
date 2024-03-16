# Задание для стажировки

## Как запустить проект

1. Выполнить в директории проекта

```bash
npm install
```

2. Для запуска в режиме разработки выполнить

```bash
npm run dev
```

## Результат

- реализовано 2 компонента: CatFactComponent(отправка запроса на `https://catfact.ninja/fact` для получения факта) и AgePredictionComponent(для ввода имени и поиска возраста), для выполнения запросов реализован компонент api_service.

## Внешний вид стартовой страницы

 ![Внешний вид](https://sun9-35.userapi.com/impg/feZW3EhU_7XnLSq4RvsPq9b2LpT4MUBGvtm0sA/pVm5ruMwvuU.jpg?size=1832x801&quality=96&sign=6e33a63f554c33d68d5532cea7ef4304&type=album)

## Вывод результата

- для первого задания отправляется запрос по адресу, а потом возвращается текст, который отображается в поле
 ![Внешний вид](https://sun9-68.userapi.com/impg/yeQ-jdEmqydRAnFg-RcKIc4d7ai-zi6udX_maA/JsKCANRPzn8.jpg?size=1820x846&quality=96&sign=f020b74b7996ca327cc1e5ab73350fad&type=album)

- для 2 задания делается запрос к api и возвращается возраст по введенному имени
 ![Внешний вид](https://sun9-69.userapi.com/impg/ENML5VzwbTBP9xG4AtAN9FgWVKJUwdNlceJgmg/gztbZHs76ac.jpg?size=1767x881&quality=96&sign=966a4d51068013179731869f38586fd7&type=album)
## Вывод результата, когда введено пустое имя

- сообщение об ошибке

 ![Внешний вид](https://sun9-53.userapi.com/impg/BdQCueFHWxnTUmaNVtkg04uIYe5rueuc3s7AIg/gnVyq1zQP5Q.jpg?size=1790x848&quality=96&sign=4d2d7f06a71831d590f6fb8c7cd98fc7&type=album)

## Вывод результата, когда имя введено повторно

- ксообщение об ошибке
 ![Внешний вид](https://sun9-19.userapi.com/impg/a-2cXKbKDKRmnlbebuTxVi5HdRywsx958cZ5sA/uDE2TPwSOzM.jpg?size=1790x823&quality=96&sign=8c88c178cba6880b4c73b3be6d5563b5&type=album)

## Обработка ошибки, когда пользоатель ввел не только буквы(валидация поля ввода имени)

- сообщение об ошибке
- ![Внешний вид](https://sun9-17.userapi.com/impg/dgp1wb1y7fNm_-fZgqsSagicxX1reUdfvp0NhQ/9B8wcvKRx88.jpg?size=1733x816&quality=96&sign=972f7b99ec36c64b738fca75b9645b09&type=album)
