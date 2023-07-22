export function parsearErroresAPI(response:any): string[]{
    const resultado: string[] = []
    if(response.error){
        if(typeof response.error==='string'){
            resultado.push(response.error);
        }else{
            const mapaErrores = response.error.errors;
            const entradas = Object.entries(mapaErrores);
            entradas.forEach((arreglo: any[])=>{
                const campo = arreglo[0];
                arreglo[1].forEach(mensajeError =>{
                    resultado.push(`${campo}:${mensajeError}`);
                })
            });
        }
    }
    return resultado;
}


export enum TYPE {
    ERROR='error',
    SUCCESS='success',
    WARNING='warning',
    INFO='info',
    QUESTION='question'
  }