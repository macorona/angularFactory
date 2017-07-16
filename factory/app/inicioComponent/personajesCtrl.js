(function () {
      'use strict';

      angular
        .module('myApp')
        .component('personajesComponent', {
            templateUrl: 'app/inicioComponent/personajesComponent.html',
            controller: personajesCtrl,
            controllerAs: 'vm'

        });

      function personajesCtrl() {
         var vm = this;
         $('.carousel').carousel({
              duration: 100,
              indicators: true,
              onCycleTo: function(data) {
                //console.log(data.attr('id'));
                personaje(data.attr('id'))
             }
         });
         //$('.carousel').carousel();
      }

      function personaje(id) {
          if(id == 1) {
            document.getElementById("nombrePersonaje").innerHTML = "Pegaso"
            document.getElementById("descripPersonaje").innerHTML = descripcion(id);
          }else if (id == 2) {
            document.getElementById("nombrePersonaje").innerHTML = "Cisne"
            document.getElementById("descripPersonaje").innerHTML = descripcion(id);
            //$('nombrePersonaje').text("Cisne");
          }else if (id == 3) {
            document.getElementById("nombrePersonaje").innerHTML = "Dragón"
            document.getElementById("descripPersonaje").innerHTML = descripcion(id);
            //$('nombrePersonaje').text("Fenix");
          }else if (id == 4) {
            document.getElementById("nombrePersonaje").innerHTML = "Fénix"
            document.getElementById("descripPersonaje").innerHTML = descripcion(id);
            //$('nombrePersonaje').text("Dragon");
          } else {
            document.getElementById("nombrePersonaje").innerHTML = "Andrómeda"
            document.getElementById("descripPersonaje").innerHTML = descripcion(id);
            //$('nombrePersonaje').text("Andromeda");
          }

      }

      function descripcion(id) {
        var desc = "";
        if(id == 1) {
          desc = "Seiya es el personaje principal del manga y anime Saint Seiya " +
          "conocido como Los Caballeros del Zodiaco, creado por el mangaka Masami Kurumada. " +
          "En un principio, Kurumada le dio el nombre a Seiya de Rin, ya que iba a nombrar a su manga " +
          "Ginga no Rin (Rin de la Galaxia) pero se decidió por Seiya.";
        }else if (id == 3) {
          desc = "Shiryū es uno de los personajes principales del manga y anime Saint Seiya conocido como Los Caballeros del Zodiaco. Es el Santo de bronce del Dragón. Es también un personaje de manga Saint Seiya Next Dimension.";

        }else if (id == 4) {
          desc = "Ikki es el Santo de la constelación de Phoenix. Se caracteriza por tener el cosmos más agresivo y violento entre los Santos. Acostumbra andar separado del resto de los Santos de Bronce, sin embargo siempre aparece oportunamente en los momentos de necesidad. Se considera a sí mismo un lobo solitario que no le interesa andar en grupos. A pesar de que se introdujo más tarde que los otros cuatro Santos de Bronce principales, el rol de Ikki en la historia es bastante significativo.";

        }else if (id == 2) {
          desc = "Hyōga es uno de los personajes principales del manga y anime Saint Seiya, conocido como Los Caballeros del Zodiaco. Es el Santo de bronce del Cisne, y su constelación protectora es la de Cygnus. Además se caracteriza por ser el más triste entre todos los los Santos de bronce, porque siempre mantiene vivo el recuerdo de su madre muerta.";

        } else {
          desc = "Shun es uno de los personajes principales de la serie de manga y anime Saint Seiya, conocido como Los Caballeros del Zodiaco. Es el santo de bronce de Andrómeda, y se caracteriza por ser gentil, inocente y detestar la violencia, ya sea en las batallas o al herir a los demás. Es también un personaje de manga Saint Seiya Next Dimension.";

        }

        return desc;
      }

})();
