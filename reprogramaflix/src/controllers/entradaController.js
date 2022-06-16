// IMPORTAR BANCO DE DADOS
const  dbConfig  =  require ( "../models/dbConfig" ) ;


// CHAMANDO BANCO DE DADOS - CONDICIONAL "ASSISTIR"
 função  assíncrona dbConnect ( )  {
    return  await  dbConfig . bancoDeDados ( "assistir" ) ;
} ;

// MENSAGEM DE ENTRADA
const  getMessage  =  async  ( solicitação ,  resposta )  =>  {
    deixe  mensagem  =  aguarde  dbConnect ( ) ;
    resposta . estado ( 200 ) . enviar ( mensagem ) ;

} ;

// EXPORTAR FUNÇÕES
módulo . exportações  =  {
    getMensagem
} ;