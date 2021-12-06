
/**
 * family phone book
 */


const phonebook =[
    {
        name        : "Ashraful Hoque",
        phone       : '01716765498',
        profession  : 'Businessman'
    },
    {
        name        : 'Maruful Hoque',
        phone       : '01618635480',
        profession  : 'Job Holder'
    },
    {
        name        : 'Jillur Rahmn',
        phone       : '01929004783',
        profession  : 'Businessman'
    },
    {
        name        : 'Mizanur Rahmna',
        phone       :'01761084726',
        profession  : 'Job Holder'
    },
    {
        name        : 'Ismeail Hossain',
        phone       : '01850281622',
        profession  : 'Teacher'
    },
    {
        name        : 'Nurul Abser',
        phone       : '01398587262',
        profession  : 'Student'
    },
    {
        name        : 'Atique Ullah',
        phone       : '01798739801',
        profession  : 'Teacher'
    },
    {
        name        : 'Tahmina Akter',
        phone       : '01909763981',
        profession  : 'House Wife'
    },
    {
        name        : 'Mamunur Rashid',
        phone       : '01714986765',
        profession  : 'Job Holder'
    },
    {
        name        : 'Fatema Khatun',
        phone       : '01718320980',
        profession  : 'House Wife'
    }
]

/**
 * family data
 */


phonebook.map( (phn) =>{

    console.log(`

    Name        : ${ phn.name }
    Phone       : ${ phn.phone }
    profession  : ${ phn.profession }

    
    `);
});





