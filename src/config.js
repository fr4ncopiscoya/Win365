
const Configuration = ( ()=>{
    const dev={
        CLIENTID: "34",
        GAMEAPI_URL:"https://prod-nd.apiusoft.com/api",
        API:"https://lobby-bff.apiusoft.com",
        CLIENT_AUTH:"BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE:"BTAR",
        LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        ASSETS:"https://assets.apiusoft.com",
        WS_URL:"wss://lobby-bff.apiusoft.com/lobbybff",
        country:"+56",
        operatorId:"123",
        domain:"http://ar.bets365.club/",
        API_GAMES_NODE: "https://prod-nd.apiusoft.com",
        org:"BTAR",
        platform: "Bets365",
        currency:7,//ARS
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }
    
    const local={
        CLIENTID: "34",
        GAMEAPI_URL:"https://prod-nd.apiusoft.com/api",
        //API:"http://192.168.1.35:5000",
        API:"https://lobby-bff.apiusoft.com",
        CLIENT_AUTH:"BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE:"BTAR",
        LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        ASSETS:"https://assets.apiusoft.com",
        WS_URL:"wss://lobby-bff.apiusoft.com/lobbybff",
        country:"+56",
        operatorId:"123",
        platform: "Bets365",
        domain:"http://ar.bets365.club/",
        API_GAMES_NODE: "https://prod-nd.apiusoft.com",
        org:"BTAR",
        currency:7,//ARS

        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }

    }
    
    const prod={
        CLIENTID: "34",
        GAMEAPI_URL:"https://prod-nd.apiusoft.com/api",
        API:"https://lobby-bff.apiusoft.com",
        CLIENT_AUTH:"BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE:"BTAR",
        LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        ASSETS:"https://assets.apiusoft.com",
        WS_URL:"wss://lobby-bff.apiusoft.com/lobbybff",
        country:"+56",
        platform: "Bets365",
        operatorId:"123",
        domain:"http://ar.bets365.club/",
        API_GAMES_NODE: "https://prod-nd.apiusoft.com",
        org:"BTAR",
        currency:7,//ARS

        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }
    const local_CO = {
        CLIENT_AUTH: "BTCOBETS365CO2024BETS365CO123",
        CLIENT_CODE: "BTCO",
        country: "CO",
        org: "BTCO",
        domain:"http://co.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Bogota',//for movementes
            activePromotions: false,
        }
    }
    const dev_CO = {
        CLIENT_AUTH: "BTCOBETS365CO2024BETS365CO123",
        CLIENT_CODE: "BTCO",
        country: "CO",
        org: "BTCO",
        domain:"http://co.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Bogota',//for movementes
            activePromotions: false,
        }
    }
    const prod_CO = {
        CLIENT_AUTH: "BTCOBETS365CO2024BETS365CO123",
        CLIENT_CODE: "BTCO",
        country: "CO",
        org: "BTCO",
        domain:"http://co.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Bogota',//for movementes
            activePromotions: false,
        }
    }

    const local_PE = {
        CLIENT_AUTH: "BPENBETS365PEN024BETS365PEN123",
        CLIENT_CODE: "BPEN",
        country: "PE",
        org: "BPEN",
        domain:"http://pe.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Lima',//for movementes
            activePromotions: false,
        }
    }
    const dev_PE = {
        CLIENT_AUTH: "BPENBETS365PEN024BETS365PEN123",
        CLIENT_CODE: "BPEN",
        country: "PE",
        org: "BPEN",
        domain:"http://pe.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Lima',//for movementes
            activePromotions: false,
        }
    }
    const prod_PE = {
        CLIENT_AUTH: "BPENBETS365PEN024BETS365PEN123",
        CLIENT_CODE: "BPEN",
        country: "PE",
        org: "BPEN",
        domain:"http://pe.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Lima',//for movementes
            activePromotions: false,
        }
    }

    const local_AR = {
        CLIENT_AUTH: "BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE: "BTAR",
        country: "AR",
        org: "BTAR",
        domain:"http://ar.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }
    const dev_AR = {
        CLIENT_AUTH: "BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE: "BTAR",
        country: "AR",
        org: "BTAR",
        domain:"http://ar.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }
    const prod_AR = {
        CLIENT_AUTH: "BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE: "BTAR",
        country: "AR",
        org: "BTAR",
        domain:"http://ar.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }
    const local_EC = {
        CLIENT_AUTH: "BTUSBETS365US2024BETS365US123",
        CLIENT_CODE: "BTUS",
        country: "EC",
        org: "BTUS",
        domain:"http://ec.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Guayaquil',//for movementes
            activePromotions: false,
        }
    }
    const dev_EC = {
        CLIENT_AUTH: "BTUSBETS365US2024BETS365US123",
        CLIENT_CODE: "BTUS",
        country: "EC",
        org: "BTUS",
        domain:"http://ec.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Guayaquil',//for movementes
            activePromotions: false,
        }
    }
    const prod_EC = {
        CLIENT_AUTH: "BTUSBETS365US2024BETS365US123",
        CLIENT_CODE: "BTUS",
        country: "EC",
        org: "BTUS",
        domain:"http://ec.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Guayaquil',//for movementes
            activePromotions: false,
        }
    }

    const local_US = {
        CLIENT_AUTH: "BUSDBUSDSOLOUSAUsBUSDSOLOUSANOEC123",
        CLIENT_CODE: "BUSD",
        country: "US",
        org: "BUSD",
        domain:"http://us.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/New_York',//for movementes
            activePromotions: false,
        }
    }
    const dev_US = {
        CLIENT_AUTH: "BUSDBUSDSOLOUSAUsBUSDSOLOUSANOEC123",
        CLIENT_CODE: "BUSD",
        country: "US",
        org: "BUSD",
        domain:"http://us.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/New_York',//for movementes
            activePromotions: false,
        }
    }
    const prod_US = {
        CLIENT_AUTH: "BUSDBUSDSOLOUSAUsBUSDSOLOUSANOEC123",
        CLIENT_CODE: "BUSD",
        country: "US",
        org: "BUSD",
        domain:"http://us.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/New_York',//for movementes
            activePromotions: false,
        }
    }


    const local_VE = {
        CLIENT_AUTH: "BTVEBETS365VE2024BETS365VENEZUELA2024123",
        CLIENT_CODE: "BTVE",
        country: "VE",
        org: "BTVE",
        domain:"http://ve.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Caracas',//for movementes
            activePromotions: false,
        }
    }
    const dev_VE = {
        CLIENT_AUTH: "BTVEBETS365VE2024BETS365VENEZUELA2024123",
        CLIENT_CODE: "BTVE",
        country: "VE",
        org: "BTVE",
        domain:"http://ve.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Caracas',//for movementes
            activePromotions: false,
        }
    }
    const prod_VE = {
        CLIENT_AUTH: "BTVEBETS365VE2024BETS365VENEZUELA2024123",
        CLIENT_CODE: "BTVE",
        country: "VE",
        org: "BTVE",
        domain:"http://ve.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Caracas',//for movementes
            activePromotions: false,
        }
    }



    const local_UY = {
        CLIENT_AUTH: "BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE: "BUYU",
        country: "UY",
        org: "BUYU",
        domain:"http://uy.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Montevideo',//for movementes
            activePromotions: false,
        }
    }
    const dev_UY = {
        CLIENT_AUTH: "BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE: "BUYU",
        country: "UY",
        org: "BUYU",
        domain:"http://uy.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Montevideo',//for movementes
            activePromotions: false,
        }
    }
    const prod_UY = {
        CLIENT_AUTH: "BTARBETS365AR2024BETS365AR123",
        CLIENT_CODE: "BUYU",
        country: "UY",
        org: "BUYU",
        domain:"http://uy.bets365.club/",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Montevideo',//for movementes
            activePromotions: false,
        }
    }

    const local_CL = {
        CLIENT_AUTH: "BTCLBETS365CL2024BETS365CL123",
        CLIENT_CODE: "BTCL",
        country: "CL",
        org: "BTCL",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Santiago',//for movementes
            activePromotions: false,
        }
    }
    const dev_CL = {
        CLIENT_AUTH: "BTCLBETS365CL2024BETS365CL123",
        CLIENT_CODE: "BTCL",
        country: "CL",
        org: "BTCL",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Santiago',//for movementes
            activePromotions: false,
        }
    }
    const prod_CL = {
        CLIENT_AUTH: "BTCLBETS365CL2024BETS365CL123",
        CLIENT_CODE: "BTCL",
        country: "CL",
        org: "BTCL",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Santiago',//for movementes
            activePromotions: false,
        }
    }


    const configMap=new Map()
    configMap.set("local",local)
    configMap.set("dev",dev)
    configMap.set("prod",prod)

    configMap.set("local_CO", local_CO)
    configMap.set("dev_CO", dev_CO)
    configMap.set("prod_CO", prod_CO)

    configMap.set("local_PE", local_PE)
    configMap.set("dev_PE", dev_PE)
    configMap.set("prod_PE", prod_PE)

    configMap.set("local_AR", local_AR)
    configMap.set("dev_AR", dev_AR)
    configMap.set("prod_AR", prod_AR)

    configMap.set("local_EC", local_EC)
    configMap.set("dev_EC", dev_EC)
    configMap.set("prod_EC", prod_EC)

    configMap.set("local_VE", local_VE)
    configMap.set("dev_VE", dev_VE)
    configMap.set("prod_VE", prod_VE)

    configMap.set("local_UY", local_UY)
    configMap.set("dev_UY", dev_UY)
    configMap.set("prod_UY", prod_UY)

    configMap.set("local_US", local_US)
    configMap.set("dev_US", dev_US)
    configMap.set("prod_US", prod_US)

    configMap.set("local_CL", local_CL)
    configMap.set("dev_CL", dev_CL)
    configMap.set("prod_CL", prod_CL)

    const getEnv=()=>{
        const host=window.location.toString()
        const env = /localhost|127.0.0.1/.test(host) ? 'local' : /dev/.test(host) ? 'dev' : 'prod';
        return env;
    }

    const getConfiguration=()=>{
        const host = window.location.toString()
        const env = getEnv()
        let country = null;
        //console.log("host", host);
        
        if (/co./.test(host)){
            country = "CO";
        }
        else if (/pe./.test(host)){
            country = "PE";
        }
        else if (/ar./.test(host)){
            country = "AR";
        }
        else if (/ec./.test(host)){
            country = "EC";
        }
        else if (/us./.test(host)){
            country = "US";
        }
        else if (/uy./.test(host)){
            country = "UY";
        }
        else if (/ve./.test(host)){
            country = "VE";
        }
        else if (/cl./.test(host)){
            country = "CL";
        }
        const defaultConfig = configMap.get(env)
        let customConfig = {};
        if (country) customConfig = configMap.get(env + '_' + country);
        //console.log("customConfig", customConfig);
        const config = { ...defaultConfig, ...customConfig };
        //console.log(country,config);
        return config;
    }
    return {getConfiguration, getEnv}
}) (  )

export default Configuration