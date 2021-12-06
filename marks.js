

/**
 * Publish CGPA and final grade in the final result
 */




const std = [

    {
        roll            : 101,
        name            : 'Mizan Rahman',
        fathers_name    : 'Mofizaul Islam',
        mothers_name    : 'Bibi kawchara',
        location        : 'Noakhali',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 102,
        name            : 'Rahim',
        fathers_name    : 'Shofique', 
        mothers_name    : 'Fatema',
        location        : 'chittagong',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 103,
        name            : 'Masud Rana',
        fathers_name    : 'Mostafizaur', 
        mothers_name    : 'Momena Begum',
        location        : 'Dhaka',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 104,
        name            : 'Karim',
        fathers_name    : 'Kamal',
        mothers_name    : 'Monora Begum',
        location        : 'Noakhali',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 105,
        name            : 'Khalilur Rahman',
        fathers_name    : 'Khorshed Alom',
        mothers_name    : 'Khadija',
        location        : 'Dhaka',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 106,
        name            : 'Alamin', 
        fathers_name    : 'Shikder',
        mothers_name    : 'Rekha',
        location        : 'Dhaka',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 107,
        name            : 'Jubaier', 
        fathers_name    : 'Neamot Ullah',
        mothers_name    : 'Sahana',
        location        : 'Chittagong',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 108,
        name            : 'Monjurul Islam',
        fathers_name    : 'Monirul islam',
        mothers_name    : 'Monora',
        location        : 'Noakhali',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 109,
        name            : 'Jahirul',
        fathers_name    : 'Iqbal',
        mothers_name    : 'Momana',
        location        : 'Dhaka',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    {
        roll            : 110,
        name            : 'Ismeail',
        fathers_name    : 'Siraj',
        mothers_name    : 'Johura',
        location        : 'Noakhali',
        bn              : 70,
        en              : 75,
        mt              : 80,
        s               : 68,
        ss              : 74,
        rel             : 86

    },
    

    
]

/**
 * Publish CGPA and final grade
 */



std.map( ( data ) => {
    let total_mark = ( data.bn+data.en+data.mt+data.s+data.ss+data.rel );

    let result = new Result();

    console.log(`

    Roll            : ${ data.roll }
    Name            : ${ data.name }
    Fathers Name    : ${ data.fathers_name }
    Mothers Name    : ${ data.mothers_name }
    Location        : ${ data.location }
    

    ----------------------------------------
      SUBJECT                    Marks                      GPA                             GRADE
       
       Bangla                    ${ data.bn }                  ${ result.gpa( data.bn )}                ${ result.grade( data.bn )}  
       English                   ${ data.en }                  ${ result.gpa( data.en )}                ${ result.grade( data.en )}
       Math                      ${ data.mt }                  ${ result.gpa( data.mt )}                ${ result.grade( data.mt )}
       Science                   ${ data.s }                   ${result.gpa( data.s )}                 ${ result.grade( data.s )}
       Social Science            ${ data.ss }                  ${result.gpa( data.ss )}                ${ result.grade( data.ss )}
       Religion                  ${ data.rel }                 ${result.gpa( data.rel )}               ${ result.grade( data.rel )}

     -------------------------------------------------------------------------------------------------------------  
         Your Total Mark : ${ total_mark } & ${ result.cgpa( result.gpa( data.bn ),result.gpa( data.en ),result.gpa( data.mt ),result.gpa( data.s ),result.gpa( data.ss ),result.gpa( data.rel ))}   
    `);

});




