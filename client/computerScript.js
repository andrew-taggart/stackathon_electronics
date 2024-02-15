// const { get } = require("mongoose")

let display_main = document.querySelector('.display-main')
let search_product_btn = document.querySelector('#search-product-btn')
let display_thumbnail =  document.querySelector('.display-thumbnail')
let input_product_name= document.querySelector('#input-product-name')
let image_1=document.querySelector('.image-1')
let display_full= document.querySelector('.display-full')

window.onload = () => {
    get_all_computers_thumbnail()
}



search_product_btn.addEventListener('click',() =>{

    //e.defaultPrevented()
    get_main_infor()
    //console.log('Testing')

})


async function get_main_infor(){
    try{


        //let response = await axios.get(`http://localhost:3001/computers/65cd8420a2b508d68765e5d8`)
        let response = await axios.get(`http://localhost:3001/computers/${input_product_name.value}`)
        // let response = await axios.get(`http://localhost:3001/computers/}`)
        console.log(response.data)
        let list_of_computers_1 = response.data
       // console.log(list_of_computers)

            display_main.innerHTML=    `<ul id="ul-long" style="background-color: #e0e0e0">
                                            <li class="li-long"> Name : ${list_of_computers_1.name}  </li><br>
                                            <li class="li-long"> Model : ${list_of_computers_1.category.model} </li><br>
                                            <li class="li-long"> Type : ${list_of_computers_1.category.type} </li><br>
                                            <li class="li-long"> Sales Price : CAD $ <span class="sale"> ${list_of_computers_1.prices.sale_price.$numberDecimal}<span> </li><br>
                                            <li class="li-long"> Regular Price : CAD $ ${list_of_computers_1.prices.regular_price.$numberDecimal} </li><br>
                                            <li class="li-long"> Quantity : ${list_of_computers_1.quantity} </li><br>
                                            <li class="li-long"> Rating : ${list_of_computers_1.rating} </li><br>
                                            <li class="li-long"> ${list_of_computers_1.description} </li>
                                        </ul>
            `

        
        image_1.innerHTML =  `<ul id="ul-long" style="background-color: #e0e0e0">
                                        <li class="li-long"> <img class="img-Size" src=${list_of_computers_1.images.image_1}> </li>
                                        <li class="li-long"> <img class="img-Size" src=${list_of_computers_1.images.image_2}>  </li>
                                        <li class="li-long"> <img class="img-Size" src=${list_of_computers_1.images.image_3}>  </li>
                                        <li class="li-long"> <img class="img-Size" src=${list_of_computers_1.images.image_4}>  </li>                                        
                            </ul>
                                `

        display_full.innerHTML =  `<ul id="ul-long" style="background-color: #white">
                                            <li class="li-long"> <span> Display </span> </li>
                                            <li class="li-long"> Graphic Card :${list_of_computers_1.display.graphics_card} </li>
                                            <li class="li-long"> Screen Size :${list_of_computers_1.display.size}  </li> <br>
                                            <li class="li-long"> <span> Operating System </span> </li>
                                            <li class="li-long"> OS : ${list_of_computers_1.operation_system}  </li>  <br>
                                            <li class="li-long"> <span> Processor </span> </li>
                                            <li class="li-long"> Speed : ${list_of_computers_1.processor.speed}  </li>  
                                            <li class="li-long"> Type : ${list_of_computers_1.processor.type}>  </li>  <br>                                      
                                            <li class="li-long"> <span> Storage </span> </li>
                                            <li class="li-long"> Disk : ${list_of_computers_1.storage.disk}  </li>  
                                            <li class="li-long"> Ram Size : ${list_of_computers_1.storage.ram_size}  </li>                                        
                                            <li class="li-long"> Ram Type : ${list_of_computers_1.storage.type}  </li> <br>
                                            <li class="li-long"> Release Year : ${new Date(list_of_computers_1.year_release).toDateString() } </li>                                         
                                    </ul>
                                    `
       // display_full.innerHTML = 'Testing'
    }catch(error){

    }
}


async function get_all_computers_thumbnail(){
    try{

        let response = await axios.get(`http://localhost:3001/computers`)
       // console.log(response.data[0].name)
        let list_of_computers =[response.data]
        // console.log(list_of_actors)
        let data_list =""
        list_of_computers[0].map((element) => {
            data_list +=    `<ul id="ul-long" style="background-color: #e0e0e0">
                            <li class="li-long"><img class="img-Size" src=${element.images.image_1}> </li>
                            <li class="li-long"> ${element.name} </li>
                            </ul>
            `
        })
        display_thumbnail.innerHTML = data_list
    }catch(error)
    {

    }
}

// document.getElementsByClassName('img-Size').addEventListener('click',function(e) {

//     let clciked_image = e.target

//     let product_id = clciked_image.getAttributed('data-custom-value')
//     console.log(product_id)

// })