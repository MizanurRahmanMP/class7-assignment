


const devs = [
    {
        name        : 'Ashraful Hoque',
        age         : 30,
        skill       : 'MERN stack Developer',
        location    :'Dhaka',
        salary      : 1200,
    },
    {
        name        : 'Maruful Hoque',
        age         : 27,
        skill       : 'Laravel Developer',
        location    : 'Chittagong',
        salary      : 1500,
    },
    {
        name        : 'Jillur Rahman',
        age         : 25,
        skill       : 'Django Developer',
        location    : 'Dinajpur',
        salary      : 1600,
    },
    {
        name        : 'Mizanur Rahman',
        age         : 31,
        skill       : 'MERN stack Developer',
        location    : 'Noakhali',
        salary      : 2000
    },
    {
        name        : 'Nazmul Huda',
        age         : 40,
        skill       : 'java Developer',
        Location    : 'Dhaka',
        salary      : 800,
    },
    {
        name        : 'Sheik shihab',
        age         : 29,
        skill       : 'GoLang Developer',
        location    :'Chittagong',
        salary      : 1200,
    },
    {
        name        : 'Sabbir Hossain',
        age         : 23,
        skill       : 'WordPress Developer',
        location    : 'Rongpur',
        salary      : 2000,
    },
    {
        name        : 'Naimul Hasan',
        age         : 25,
        skill       : 'GoLang Developer',
        location    : 'Kustia',
        salary      : 1700
    },
    {
        name        : 'Rezwan Ahmed',
        age         : 40,
        skill       : 'java Developer',
        location    : 'Comilla',
        salary      : 1400
    },
    {
        name        : 'Mohammad Sujon',
        age         : 31,
        skill       : 'WordPress Developer',
        location    : 'Jashor', 
        salary      : 1000
    }
    
];



/**
 * Find specific Developer
 */



let total = 0;
devs.map( (data) =>{

    console.log(`

    Name     : ${ data.name }
    Age      : ${ data.age }
    Skill    : ${ data.skill }
    location : ${ data.location }
    Salary   : ${ data.salary } USD

    `);

    total += data.salary;
});
    


/**
 * Total income
 */


console.log(`Every Developer per month salary is $${ total } Dolar. `);



