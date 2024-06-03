import Cachorro from "./model/Cachorro";
import Cavalo from "./model/Cavalo";
import Circulo from "./model/Circulo";
import Gato from "./model/Gato";
import Item from "./model/Item";
import Pedido from "./model/Pedido";
import Retangulo from "./model/Retangulo";

const item1 = new Item(50, "pneu", "pneu aro 26 bicileta");
const item2 = new Item(30, "eixo", "eixo traseiro bicicleta");
const pedido1 = new Pedido([item1, item2], 80);
const retangulo1 = new Retangulo(15, 20);
const circulo1 = new Circulo(30);
const cachorro = new Cachorro();
const gato = new Gato();
const cavalo = new Cavalo();

retangulo1.desenhar();
retangulo1.redimensionar();
circulo1.desenhar();
circulo1.desenhar();
cachorro.andar();
cachorro.comer();
cachorro.latir();
gato.andar();
gato.comer();
gato.miar();
cavalo.andar();
cavalo.comer();
cavalo.relinchar();

