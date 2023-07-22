export interface pedidoDTO{
    id_Pedidos: number;
    fechaRegistro:Date;
    usuario:string;
    fechaLimiteEntrega:Date;
    estatus:string;
    codigo:string;
    ordenSuministro:string;
}

export interface propuestaDTO{
    id : number;
    //COMPANIA : number;
    CLAVE : string;
        MEDICAMENTO : string;
        //ALMACEN : string;
        //MAXIMO_ALMACEN : number;
        EXISTENCIAS_ALMACEN : number;
        EXISTENCIAS_FARMACIA : number;
        //MAXIMO_FARMACIA : number;
        //EXISTENCIAS_AGAVE : number;
        //CONSUMO_ENVASES : number;
        //TOTAL : number;
        //MAXIMOCONSUMO_MES : number;
        //FALTANTE_MAXIMO : number;
        //PROPUESTA : number;
        //PRECIOADJUDICADO : number;
        //CANTIDADMAXADJUDICADO : number;
        NUMPEDIDOCONTRATO : string;
        REMANENTE : number;
        //CANTIDAD_A_SOLICITAR_PORCENTAJE : number;
        //FALTANTE : number;
        CANTIDAD_PEDIR : number;
        //FECHA_REGISTRO : Date;
}

export interface editaCantidadDTO{
    id: number;
    compania: number;
    cantidaD_PEDIR: number;
    
}