angular.module('eventos.services', [])

.factory('EventosService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var defEvents = [
  {
    id: 0,
    nome:"21º Congresso Brasileiro de Apicultura",
    descricao:"Apicultura é a ciência, ou arte, da criação de abelhas com ferrão.",
    foto:"http://www.pronatec2015.org/wp-content/uploads/2015/02/apicultura.jpg",
    data:"03-07/05/2016",
    local:"Avenida Washington Soares, 999"
  },{
    id: 1,
    nome:"XIX Congresso Brasileiro de Transplante de Medula Óssea",
    descricao:"A medula óssea, também conhecida como tutano, é um tecido gelatinoso que preenche a cavidade interna de vários ossos e fabrica os elementos figurados do sangue periférico como: hemácias, leucócitos e plaquetas.",
    foto:"http://www.alpharad.com.br/produtos/agulha_ossea/perfectus.jpg",
    data:"02-05/08/2016",
    local:"Avenida Washington Soares, 999"
  },{
    id: 2,
    nome:"Iron Maiden",
    descricao:"Iron Maiden é uma banda britânica de heavy metal, formada em 1975 pelo baixista Steve Harris, ex-integrante das bandas Gypsy's Kiss e Smiler.",
    foto:"http://3.bp.blogspot.com/-_-QbcvDMy4I/UW7MuFdMEnI/AAAAAAAABnk/_PetSSaoL2s/s1600/20-04encontro.jpg",
    data:"24/03/2016",
    local:"Av. Alberto Craveiro, 2901"
  },{
    id: 3,
    nome:"Natiruts Réveillon Fortaleza 2015",
    descricao:"Lançamento do DVD Natiruts Raggae Brasil",
    foto:"http://www.deeprodutora.com.br/wp-content/uploads/sites/2/2015/11/eventos-site.jpg",
    data:"26/12/2015",
    local:"Av. Zeze Diogo, 4111"
  },{
    id: 4,
    nome:"Lançamento de \"Independence Day: O Ressurgimento\"",
    descricao:"O planeta Terra volta a ser objeto de um ataque alienígena aproximadamente de 20 anos após o retratado em Independence Day (1996).",
    foto:"http://cinemaadois.com.br/wp-content/uploads/2015/12/confira-o-trailer-de-independenc.jpg",
    data:"24/06/2016 (EUA)",
    local:"Every blood dawm Cinema :D"
  }];

  var eventos = JSON.parse(localStorage.eventos || "[]");

  function getNovoId(){
    return eventos.length ? eventos[eventos.length-1].id + 1 : 0;
  }

  return {
    defEvents: function() {
      return defEvents;
    },
    todos: function() {
      return eventos;
    },
    salvar: function(evento){
      evento.id = getNovoId();
      eventos.push({
        id: evento.id,
        nome: evento.nome,
        descricao: evento.descricao,
        foto: evento.foto,
        data: evento.data,
        local: evento.local
      });
      localStorage.eventos = JSON.stringify(eventos);
    },
    deletar: function($index){
      eventos.splice($index, 1);
      localStorage.eventos = JSON.stringify(eventos);
    },
    get: function(eventoId) {
      for (var i = 0; i < eventos.length; i++) {
        if(eventos[i].id == parseInt(eventoId)) {
          return eventos[i];
        }
      }

      return null;
    }
  };
});
