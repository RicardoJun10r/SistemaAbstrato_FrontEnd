export const inventario = [
    {
        nome: 'tomate',
        preco: 12,
        quantidade: 10,
        categoria: 'molho'
    },
    {
        nome: 'mateiga',
        preco: 12,
        quantidade: 54,
        categoria: 'cozinha'
    },
    {
        nome: 'alface',
        preco: 12,
        quantidade: 87,
        categoria: 'legume'
    },
    {
        nome: 'batata',
        preco: 12,
        quantidade: 44,
        categoria: 'legume'
    },
    {
        nome: 'linguica',
        preco: 12,
        quantidade: 13,
        categoria: 'comida'
    },
    {
        nome: 'aspargos',
        preco: 12,
        quantidade: 2,
        categoria: 'legume'
    },
    {
        nome: 'feijao',
        preco: 12,
        quantidade: 3,
        categoria: 'legume'
    },
    {
        nome: 'arroz',
        preco: 12,
        quantidade: 4,
        categoria: 'comida'
    }
]

export const estoque = [
    {
        nome: 'estoque do jorge',
        quantidade: 4,
        endereco: 'Rua das dores',
        stock: [
            {
                nome: 'camisa',
                preco: 50,
                quantidade: 12,
                categoria: 'roupa'
            },
            {
                nome: 'calca',
                preco: 40,
                quantidade: 20,
                categoria: 'roupa'
            },
            {
                nome: 'relogio',
                preco: 120,
                quantidade: 5,
                categoria: 'acessorio'
            }
        ]
    }
]

export const estoque_vazio = []

export const adicionar_estoque_vazio = (objeto) => {
    estoque_vazio.push(objeto);
    console.log("Rapais");
    console.log(objeto.nome + " " + objeto.localizacao + " " + objeto.tipo)
}