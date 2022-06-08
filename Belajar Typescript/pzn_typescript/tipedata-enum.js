var Gender;
(function (Gender) {
    Gender[Gender["Pria"] = 0] = "Pria";
    Gender[Gender["Wanita"] = 1] = "Wanita";
    Gender[Gender["unknown"] = 2] = "unknown";
})(Gender || (Gender = {}));
var jenisKelamin = Gender.Pria;
console.log(jenisKelamin);
var Category;
(function (Category) {
    Category["Grocery"] = "GROCERY";
    Category["Electronic"] = "ELECTRONIC";
    Category["Handphone"] = "HANDPHONE";
})(Category || (Category = {}));
var kategori = Category.Electronic;
console.log(kategori);
