// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(longCourses)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesWithId = longCourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(coursesWithId)
