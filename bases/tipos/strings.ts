(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro:string = `Volcán Negro`;

    console.log(`I'm ${ batman }`);
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'No está batman.' );


})()