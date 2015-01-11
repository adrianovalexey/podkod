Экспорт данных по подкодам в CSV

Команда 
./mongoexport -h localhost:3001 --db meteor --collection foo --csv --fieldFile fields.txt --out c.csv

fields.txt - файл описания полей для экспорта, содержание смотри в папке проекта. Изначально файл должен присутствовать в директории ./mongoexport
Файл c.csv появится в той же директории.


Экспортв данных по подкодам в JSON 

./mongoexport -h localhost:3001 --db meteor --collection foo  --out c.json



Описание скрипта

lastElem = Foo.find().fetch().length-1; - находим индекс последнего объекта


Далее проверяем условие для начала расчета подкода - на случай пустого массива
        if (lastElem<1) {
            podkod = init;  // подкод изначально задан в переменной init
            }

        else {

              objArr = Foo.find({},{sort:{"createdAt":1}}).fetch(); // представляем коллекцию данных в виде упорядоченного по дате добавления объектов массива (от старых к новым) для упрощенного доступа к данным
              //console.log("obj array = ", objArr);

              podkod = objArr[lastElem].podkod; // находим последний элемент массива - он будет самым новым по дате добавления с учетом сортировки данных на предыдущем шаге.
              podkod = podkod+1; // инкреминтируем счетчик
              //console.log("now podkod = ", podkod);

              }


Вычисляем значение итогового подкода
     var podkodFin = parseInt(podkod.toString().concat(rand.toString()));    // сначала преобразуем числа в строки, потом проводим конкатенацию строк и затем преобразуем все обратно в число.



 Создаем переменную объекта для коллекции

     var data = {
      filial: filial.value,
      client: client.value,
      dog: dog.value,
      podkod: podkod,
      podkodFin: podkodFin,
      createdAt: new Date(),
    };


 Помещаем объект в коллекцию
 
 Foo.insert(data, function(err) { /* handle error */ });
    


Очищаем поля формы 
    filial.value="";
    client.value="";
    dog.value="";




