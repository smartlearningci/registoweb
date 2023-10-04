module.exports = async function (context, req) {
    context.log('implementação do microserviço');

    try {
  
        context.bindings.tabelaregistosweb = [];
        context.bindings.tabelaregistosweb.push(req.body);

        context.res = {
            status: 200, /* Defaults to 200 */
            body: "Gravado com sucesso"
        };
    } catch (error){
        context.res = {
            status:400,
            body: "Algum erro ocorreu...."
        };
    }
}