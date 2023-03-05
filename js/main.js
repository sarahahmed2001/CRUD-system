var productname = document.getElementById("productName");
var productprice = document.getElementById("productPrice");
var productcategor = document.getElementById("productCategory");
var productdescription = document.getElementById("productDescription");
var searchinput=document.getElementById("search");
var productlist;

if (localStorage.getItem("list") == null) {
    productlist = [];
}
else {
    productlist = JSON.parse(localStorage.getItem("list"));
    display()
}

function clearform(){
    productname.value="";
    productprice.value="";
    productdescription.value="";
 
}
function addProduct() {
    console.log("asss")
    var product = {
        name: productname.value,
        price: productprice.value,
        category: productcategor.value,
        description: productdescription.value
        
    }

    productlist.push(product);
    display()
    localStorage.setItem("list", JSON.stringify(productlist))
   

}
function deleteitem (index) {

productlist.splice(index,1);
display();
localStorage.setItem("list", JSON.stringify(productlist))
   
}
function display() {
    var temp = "";
    for (var i = 0; i < productlist.length; i++) {
        temp += `  <tr>
<td>`+ i + `</td>
<td>`+ productlist[i].name + `</td>
<td>`+ productlist[i].price + `</td>
<td>`+ productlist[i].category + `</td>
<td>`+ productlist[i].description + `</td>
<td>

<button class="btn btn-warning" onclick="edititem(`+i+`)">Update</button>

</td>
<td>
<button class="btn btn-danger"  onclick="deleteitem(`+i+`)">Delete</button>
   
</td>
</tr>
`

    }
    document.getElementById("tableBody").innerHTML = temp;
}
 function search(){
var temp="";
var value=searchinput.value.toLowerCase();
for (var i = 0; i < productlist.length; i++) {
if (productlist[i].name.toLowerCase().includes( value)
||productlist[i].category.toLowerCase().includes( value))
{
    temp += `  <tr>
    <td>`+ i + `</td>
    <td>`+ productlist[i].name.replace(value,"<Span class='text-danger fw-bold'>"+value+"</span>") + `</td>
    <td>`+ productlist[i].price + `</td>
    <td>`+ productlist[i].category.replace(value,"<Span class='text-danger fw-bold'>"+value+"</span>") + `</td>
    <td>`+ productlist[i].description + `</td>
    <td>
    
    <button class="btn btn-warning" onclick="edititem(`+i+`)">Update</button>
    
    </td>
    <td>
    <button class="btn btn-danger"  onclick="deleteitem(`+i+`)">Delete</button>
       
    </td>
    </tr>
    `
    
        
      
}
}
document.getElementById("tableBody").innerHTML = temp;
}

function edititem(index){
document.getElementById("add").style.display="none";
document.getElementById("edit").style.display="inline-block";
productname.value=productlist[index].name;
productprice.value=productlist[index].price;
productcategor.value=productlist[index].category;
productdescription.value=productlist[index].description;
localStorage.setItem("index",index);
}
function update(){
    var index=Number(localStorage.getItem("index"));
    productlist[index].name=productname.value;
    productlist[index].price=productprice.value;
    productlist[index].category=productcategor.value;
    productlist[index].description=productdescription.value;
    localStorage.setItem("list",JSON.stringify(productlist))
    display();
}
