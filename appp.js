const randomMonth = () => Math.floor(Math.random() * 12);
const randomYear = () => Math.floor(Math.random() * 9) + 2022;
for (let i = 0; i < 20; i++) {
    console.log(randomMonth() + "-" + randomYear());
}
