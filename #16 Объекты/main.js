const phoneBook = {
    list: {
        "Darina" : 89773323277,
    "Marina" : 89337772323,
    "Mama" : 89883893815,
    "Papa" : 89182700110 },
    add(name, number) {
        this.list[name] = number;
    }
};


phoneBook.add('adel', 777332232);
phoneBook.add('anatoli', 111111111);
delete phoneBook.list["Darina"];

for (const name in phoneBook.list) {
    console.log(`{${name}} - {${phoneBook.list[name]}}`);
}