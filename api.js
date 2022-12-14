
var products = fetch("https://fakestoreapi.com/products");

products.then((data)=>{
    console.log(data);
    return data.json();
}).then((newdata)=>{
    console.log(newdata);
    let table_data = "";

    newdata.map((values)=>{
        table_data += `
        <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td>${values.category}</td>
            <td> <img src= ${values.image}></td>
        </tr>
        `;
    });
    document.getElementById("tableData").innerHTML = table_data
}).catch((err)=>{
    console.log(err);
});
