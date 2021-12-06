

/**
 * This data for picnic
 */




const picnic = [

    {
        name    : 'Abu Bakar',
        phone   : '01716765498',
        paid    : 1500,
        address : 'Uttara'
    },
    {
        name    : 'Omar',
        phone   : '01618635480',
        paid    : 800,
        address : 'Mirpur'
    },
    {
        name    : 'Usman',
        phone   : '01929004783',
        paid    : 1500,
        address : 'Banani'
    },
    {
        name    : 'Ali',
        phone   :'01761084726',
        paid    : 500,
        address : 'Gulshan'
    },
    {
        name    : 'Hujaifa',
        phone   : '01850281622',
        paid    : 1500,
        address : 'Baridhara'
    },
    {
        name    : 'Abu Hurayra',
        phone   : '01398587262',
        paid    : 1500,
        address : 'Bashundhara'
    },
    {
        name    : 'Khalid Saifullah',
        phone   : '01798739801',
        paid    : 1500,
        address : 'Niketon'
    },
    {
        name    : 'Ibn Abbas',
        phone   : '01909763981',
        paid    : 1500,
        address : 'Mohakhali'
    },
    {
        name    : 'Musaib Bin Umair',
        phone   : '01714986765',
        paid    : 1500,
        address : 'Rampura'
    },
    {
        name    : 'saad Bin Muaz',
        phone   : '01718320980',
        paid    : 1000,
        address : 'Motijhil'
    }
]



/**
 * Pament sumarry
 */




picnic.map( (pic) =>{
    
        if( pic.paid >= 1500 ){

            console.log(`

            You money has been paid, so you are welcome with us. 

            Name        : ${ pic.name }
            Phone       : ${ pic.phone }
            Paid Amount : ${ pic.paid } Taka
            Address     : ${ pic.address }


            `);



        }else if( pic.paid < 1500 ){

            console.log(`
                
            You still have money left, So pay immediately ${ 1500-pic.paid } Taka

            Name        : ${ pic.name }
            Phone       : ${ pic.phone }
            Paid Amount : ${ pic.paid } Taka
            Address     : ${ pic.address }


            `);


        }


    
});






