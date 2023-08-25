let productList = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 }
]

function generateProductTable() {
    let tableHTML = '<table>';
    tableHTML += '<tr><th>ID</th><th>Name</th><th>Price</th><th>Action</th><th><button class ="add"  onclick="addProduct()"><img src="./assets/add.png" alt=""></button></th></tr>';
    productList.forEach(product => {
        tableHTML += `
            <tr id = "${product.id}">
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button class ="edit"
onclick="editProduct(${product.id})"><img src="./assets/edit-text.png" alt=""></button>
                    <button class = "bin"
onclick="deleteProduct(${product.id})"><img src="./assets/bin.png" alt=""></button>
</td> </tr>
`; });
    tableHTML += '</table>';
    document.querySelector('#product-table-container').innerHTML = tableHTML;
}
generateProductTable()

function idGenerator() {
    if (productList.length === 0) {
        return 1
    }
    else{return (productList[productList.length-1].id)+1}
}

function deleteProduct(productId) {
    let a = 0
    productList.map(product => {
        if(+(productId) == product.id){ a = productList.splice(a,1) }
        else{ ++a}
        
    })   
    generateProductTable()
}

function addProduct() {
    let newProduct = {}
    newProduct.id = idGenerator()
    newProduct.name = prompt('What is new product\'s name')
    while(newProduct.name == ''){
        alert('Enter new product\'s name correctly!')
        newProduct.name = prompt('What is new product\'s name')
    }
    newProduct.price = +(prompt('What is new product\'s price'))
    while (!newProduct.price || newProduct.price == 0) {
        alert('Enter new product\'s price correctly!')
        newProduct.price = +(prompt('What is new product\'s price'))
    }
    productList.push(newProduct)
    generateProductTable()
}
let index = 0
function editName(){
    productList[index].name =  prompt('Enter product\'s new name')
    while(productList[index].name == ''){
        alert('Enter new product\'s name correctly!')
        productList[index].name = prompt('What is new product\'s name')
    }
}
function editPrice(){
    productList[index].price = +(prompt('What is new product\'s price'))
    while (!productList[index].price || productList[index].price == 0) {
        alert('Enter new product\'s price correctly!')
        productList[index].price = +(prompt('What is new product\'s price'))
    }
}

function editProduct(productId) {
    index = 0
    productList.map(product => {
        
        if(+(productId) == product.id){
            console.log(index);
            let answer = prompt('What do you want to change (name or price or both or cancel)')
            console.log(answer);
            let cavab = ['name','price','both','cancel']
            while((cavab.includes(answer)) === false){
                alert('Please answer like "name","price","both","cancel" ')
                answer = prompt('What do you want to change (name or price or both or cancel)')
            }
                switch (answer) {
                    case 'name':
                        editName()
                        generateProductTable()
                        break;
                    case 'price':
                        editPrice()
                        generateProductTable()
                        break;
                    case 'both':
                        editName()
                        editPrice()
                        generateProductTable()
                        break;
                    default:
                        break;
                }
        }
        else{ ++index}
    })  
}