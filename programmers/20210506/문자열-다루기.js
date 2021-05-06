a = ["1234", "a234", "a", "1", "aq", "12", "as2", "123", "12345", "asd23", "asdf12", "123456", "1234567", "asd1234"]
for (let i = 0; i < a.length; i++) {
    console.log((!isNaN(a[i]) && (a[i].length === 4 || a[i].length === 6)))
}
