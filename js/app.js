let totalGeral = 0;
limpar();

function adicionar(){
    //recuperar valores: nome do protudo, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço: subtotal
    let preco = quantidade * valorUnitario;
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;

    //atualizar o valor total
    totalGeral += preco;
    let totalDaCompra = document.getElementById('valor-total');
    totalDaCompra.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}