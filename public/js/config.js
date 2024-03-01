const pastel = (()=>{

    const mostrar = () =>{
        return "pastelaso"
    }

    const mostrarSegunda = () =>{
        return "segundo pastelaso"
    }
    return {
        mostrar,mostrarSegunda
    }
})();

const bichikid = (()=>{
    const mostrar = () =>{
        return "muestra bichikid";
    }

    const jejeje = () =>{
        return "muestra mas variables";
    }
    return {
        mostrar,jejeje
    }
})();


console.log(bichikid.mostrar()+ "asdasd" );
module.exports = {
    pastel, 
    bichikid
};

