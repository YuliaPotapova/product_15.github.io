#### Проектная работа №15
по программе обучения WEB-разработке на Яндекс.Практикум

# Проект по теме: подготовка и деплой бэкенда
#### ***URL: <https://github.com/YuliaPotapova/product_15.github.io>***
#### ***публичный IP-адрес сервера: 84.201.161.212***
#### ***домен: jslife.tk***
#### ***Версия: 0.0.1***

***
*Автор проекта: Юлия Потапова*
***

В рамках данного проекта:
* организована централизованная обработка ошибок;
* запросы валидируется по определённым схемам (celebrate);
* запросы и ответы записываются в файл request.log;
* все ошибки записываются в файл error.log;
* на платформе Яндекс Облако создан сервер, к которому можно обратиться по публичному IP-адресу 84.201.161.212;
* зарегистрирован домен jslife.tk, и прикреплен к указанному IP-адресу;
* выпущен и подключен сертификат, позволяющий обратиться к серверу не только по http, но и по https;
* секретный ключ для создания и верификации JWT хранится на сервере в .env файле и не добавляется в репозиторий;
* в режиме разработки код запускается и работает без наличия .env файла;
* приложение запускается с помощью менеджера процессов pm2, в результате чего происходит автоматическое восстановление работы приложения в случае падения;
* раздача статических файлов организована посредством http-сервера nginx;

***
Чтобы развернуть проект (в части бэкенда) локально необходимо:
* установить MongoDB (инструкция для ОС Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mdb-edition, для macOS: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/, для Linux: https://docs.mongodb.com/manual/administration/install-on-linux/);
* создать директорию для базы данных: C:\data\db;
* установить графический интерфейс для взаимодействия с MongoDB: https://www.mongodb.com/download-center/compass;
* запустить сервер MongoDB на локальной машине;
* создать новую базу данных с именем mestodb;
* создать в ней 2 коллекции: users и cards;
* установить node.js;
* клонировать репозиторий на свой компьютер;
* из библиотеки пакетов NPM установить модули, перечисленные в зависимостях в файле package.json;
* запустить файл app.js на выполнение в node.js.
