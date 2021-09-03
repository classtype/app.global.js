## Что это?

**App.global.js** — содержит набор полезных инструментов для повседневной разработки.

## Подключение

```html
<script src="//cdn.jsdelivr.net/npm/app.global.js"></script>
```

## Пример

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<script src="//cdn.jsdelivr.net/npm/app.global.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    $.id('content').innerHTML = 'Hello world!\n';
    $.id('content').innerHTML += 'Случайное число от 1 до 100 = ' + $.rand(1,100);
});
</script>
</head>
<body>
    <pre id="content"></pre>
    <div onMouseDown="$.remove(this)">Кликните, чтобы удалить этот элемент со страницы</div>
</body>
</html>
```