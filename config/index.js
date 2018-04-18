module.exports={

    dbUri:'mongodb://localhost/HC81',

    PLC:{
        rack:0,
        ip:'10.0.1.220',
        slot:2,
        port:102},

    PLC_Variables:{
        OIL_TEMPERATURE: 'DB220,REAL84',
        WIGHT: 'DB700,REAL0',
        WIGHT_SPEED: 'DB700,REAL12'
    },
    PLC_Variables_Name:{
        OIL_TEMPERATURE: 'Температура масла.',
        WIGHT: 'Текущий вес кг.',
        WIGHT_SPEED: 'Скорость кг/сек'
    }

};