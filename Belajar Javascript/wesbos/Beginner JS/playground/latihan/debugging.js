const people = [
  { name: 'Ariz', cool: true, country: 'indonesia' },
  { name: 'Hasya', cool: false, country: 'Kuvukiland' },
  { name: 'Luisa', cool: true, country: 'South Catrica' },
];

console.table(people);

people.forEach((person, index) => {
  debugger;
  console.log(person.name);
});

// function lakukanBanyakPekerjaan() {
//   console.group('Sedang melakukan pekerjaan');
//   console.log('hallo');
//   console.warn('hello');
//   console.error('heyoww');
//   console.groupEnd('Sedang melakukan pekerjaan');
// }

// function doctorize(name) {
//   console.count('running doctorize');
//   return `Dr. $(name)`;
// }
