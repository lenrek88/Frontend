import data from './data.json' assert {type: "json"};

let qwes = JSON.stringify(data);
let qwes2 = JSON.parse(qwes);

console.log('FirstName:');
for (let q of qwes2.users) {
        console.log(`  ${q.firstName}`);

}