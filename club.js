







    



/**
 * Start array of all the members of a club
 */



 const member = [

    {
        name        : 'Mizan Rahman',
        age         : 31,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Rahim',
        age         : 17,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Masud Rana',
        age         : 30,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Karim',
        age         : 45,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Khalilur Rahman',
        age         : 35,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Alamin',
        age         : 15,
        club_name   : 'LFWF Academy' 
    }, 
    {
        name        : 'Jubaier',
        age         : 38,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Monjurul Islam',
        age         : 27,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Jahirul',
        age         : 300,
        club_name   : 'LFWF Academy'
    },
    {
        name        : 'Ismeail',
        age         : 34,
        club_name   : 'LFWF Academy'
    }


]


/**
 * Greeting message
 */


member.map( (data) =>{

    if( data.age >= 18 && data.age <= 40 ){

        console.log(`
        Name            : ${ data.name }
        Age             : ${ data.age } years old
        club name     : ${ data.club_name }
        
        Welcome to lfwf Academy !!!
        --------------------
        
        `);

    }else{
        console.log(`
        
        Name            : ${ data.name }
        Age             : ${ data.age } years
        club name       : ${ data.club_name }

        
        Sorry, please wait 18 years old !!!
        --------------------
        `);
    }

});









