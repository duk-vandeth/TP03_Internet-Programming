var books = JSON.parse(localStorage.getItem("books"));

//listing
function listing(){
    // var books = JSON.parse(localStorage.getItem("books"));
    //index for delete or update function and it must in listing funtion because it is represent to index ot array
    var index = 0;
    //clear the display on list_book div so it not display overloading when call listing again
    document.getElementById('list_book').innerHTML = "";
    //list all objects that exist in json array 
    books.forEach(book => {
        // console.log(book);
        document.getElementById('list_book').innerHTML += 
            `<div class="item">
                <div class="button" >
                    <button onclick="deleteBook(${index});">Delete</button>
                    <button onclick="updateBook(${index});">Change name</button>
                </div>
                <div class="image">
                    <img src="./book.png" alt="Book-logo" width="50%">
                </div>
                <div class="book_info">
                    <span>Name: ${book?.name}</span><br>
                    <span>Price: ${book?.price} riels</span><br>
                    <span>Category: ${book?.category}</span>
                </div>
            </div>`;
            // console.log(index);
        index++;
    })
}

//add book
function addBook(){
    //add new object to json array
    let id = books.length;
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let book = {
        'name'      :   name,
        'category'  :   category,
        'price'     :   price
    };
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books));
    //list all object in array again 
    listing();
    // console.log(books);
}

//update book
function updateBook(index){
    //popup dialog box

}

//delete book
function deleteBook(index){
    books.splice(index,1);
    localStorage.setItem("books",JSON.stringify(books));
    listing();
}
