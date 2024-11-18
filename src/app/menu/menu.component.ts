import { Component } from '@angular/core';
import { CartItem, CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  coffees = [
    { name: 'Espresso', description: 'Forte e aromático.', price: 5, image: 'assets/images/expresso.jpg' },
    { name: 'Café com Leite', description: 'Suave e cremoso.', price: 6, image: 'assets/images/cafe-com-leite.jpg'  },
    { name: 'Cappuccino', description: 'Cremoso com um toque de canela.', price: 7, image: 'assets/images/capuccino.jpg'  },
    { name: 'Macchiato', description: 'Espresso com um toque de espuma de leite.', price: 6, image: 'assets/images/macchiato.jpg'  },
    { name: 'Mocha', description: 'Mistura de café, chocolate e leite.', price: 8, image: 'assets/images/Mocha.png'  },
    { name: 'Americano', description: 'Espresso diluído em água quente.', price: 4, image: 'assets/images/americano.jpg'  },
    { name: 'Café Gelado', description: 'Refrescante com cubos de gelo.', price: 6, image: 'assets/images/cafe-gelado.jpg'  },
    { name: 'Latte', description: 'Mistura suave de leite vaporizado e café.', price: 7, image: 'assets/images/latte.jpg'  },
    { name: 'Café Irlandês', description: 'Café com whisky e creme.', price: 12, image: 'assets/images/irlandes.jpg'  },
    { name: 'Café Cortado', description: 'Espresso com uma pequena quantidade de leite.', price: 5, image: 'assets/images/cortado.jpg'  },
  ];

  desserts = [
    { name: 'Torta de Limão', description: 'Base crocante com recheio de limão e merengue.', price: 8, image: 'assets/images/limao.jpg' },
    { name: 'Brownie de Chocolate', description: 'Servido quente com calda de chocolate.', price: 7, image: 'assets/images/brownie.jpg' },
    { name: 'Cheesecake', description: 'Tradicional cheesecake com calda de frutas vermelhas.', price: 9, image: 'assets/images/cheesecake.jpg'},
    { name: 'Petit Gâteau', description: 'Bolinho de chocolate quente com sorvete.', price: 10, image: 'assets/images/petit-gateau.jpg' },
    { name: 'Pavê de Doce de Leite', description: 'Camadas de biscoito e doce de leite.', price: 8, image: 'assets/images/doce-de-leite.jpg' },
    { name: 'Mousse de Maracujá', description: 'Leve e refrescante, com calda de maracujá.', price: 6, image: 'assets/images/maracuja.jpg' },
    { name: 'Churros', description: 'Recheado com doce de leite, polvilhado com açúcar e canela.', price: 7, image: 'assets/images/churros.jpg' },
    { name: 'Bolo de Cenoura', description: 'Com cobertura de chocolate.', price: 6, image: 'assets/images/cenoura.jpg' },
    { name: 'Mil-folhas', description: 'Massa folhada com creme de baunilha.', price: 9, image: 'assets/images/mil-folhas.jpg' },
    { name: 'Tiramisu', description: 'Sobremesa italiana com café e mascarpone.', price: 10, image: 'assets/images/tiramisujpg.jpg' },
  ];

  snacks = [
    { name: 'Pão de Queijo', description: 'Quentinho e crocante por fora.', price: 4, image: 'assets/images/pao-de-queijo.jpg' },
    { name: 'Coxinha', description: 'Tradicional com recheio de frango.', price: 5, image: 'assets/images/coxinha.jpg' },
    { name: 'Empada', description: 'Recheio de palmito, frango ou camarão.', price: 6, image: 'assets/images/empada.jpg' },
    { name: 'Sanduíche Natural', description: 'Peito de peru, alface, tomate e cream cheese.', price: 7, image: 'assets/images/natural.jpg' },
    { name: 'Croissant', description: 'Massa amanteigada com queijo e presunto.', price: 8, image: 'assets/images/croissant.jpg' },
    { name: 'Tostex', description: 'Queijo derretido e pão torrado.', price: 5, image: 'assets/images/tostex.jpg' },
    { name: 'Quiche', description: 'Recheio de queijo e bacon.', price: 9, image: 'assets/images/quiche.jpg' },
    { name: 'Wrap de Frango', description: 'Frango grelhado, salada e molho especial.', price: 10, image: 'assets/images/wrap.jpg' },
    { name: 'Salada de Frutas', description: 'Fresca e saudável.', price: 6, image: 'assets/images/frutas.jpg' },
    { name: 'Hambúrguer Gourmet', description: 'Pão artesanal, carne suculenta e queijo.', price: 12, image: 'assets/images/hamburguer.jpg' },
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    const cartItem: CartItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: 1,
    };
    this.cartService.addItem(cartItem);
    alert(`${item.name} foi adicionado ao carrinho!`);
  }
}
