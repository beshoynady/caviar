import React, { useState, useEffect } from 'react'
import './Products.css'
// import { Link } from "react-router-dom"
// import axios from 'axios'

const Products = () => {
  //   const [showCreatePro, setshowCreatePro] = useState(false)
  //   const [showDeletePro, setshowDeletePro] = useState(false)
  //   const [editemployee, seteditemployee] = useState(false)

  //   const [productId, setproductId] = useState()
  //   const opendelete=(e)=>{
  //     e.preventDefault();
  //     setshowDeletePro(!showDeletePro);
  //     setproductId(e.product._id)
  //     console.log(e.product._id)
  //   }

  //   const [pagination, setpagination] = useState(5)
  //   const showpagination = (e)=> {
  //   if(e.target.innerHTML== 'Next'){
  //     setpagination(pagination + 5)
  //   }else if(e.target.innerHTML=='Previous'){
  //     if(pagination <= 5){
  //       setpagination(5)
  //     }else{setpagination(pagination - 5)
  //       }
  //   }else{
  //   setpagination(e.target.innerHTML* 5)
  // }
  // }

  // const [allCategory, setallCategory] = useState([])

  // const getallCategory =async ()=>{
  //   const res = await axios.get("http://localhost:8000/api/category/allcategory");
  //   setallCategory(res.data)
  // }


  // const [productname, setproductname] = useState(null);
  // const [productprice, setproductprice] = useState(null);
  //   const [productdescription, setproductdescription] = useState(null);
  //   const [categoryid, setcategoryid] = useState(null);
  //   const [productimg, setproductimg] = useState(null);



  //   const [allproducts, setallproducts] = useState([])

  //   const allProducts = async()=>{
  //     const Products = await axios.get('http://localhost:8000/api/product/allproducts')
  //     setallproducts(Products.data)
  //   }

  //   const createProduct=async(e)=>{
  //     e.preventDefault();
  //     console.log(productname)
  //     // console.log(productdescription)
  //   // console.log(productprice)
  //   // console.log(categoryid)
  //   // console.log(productimg)
  //   const formData = new FormData()
  //   formData.append('productname', productname)
  //   formData.append('productprice', productprice)
  //   formData.append('productdescription', productdescription)
  //   formData.append('categoryid', categoryid)
  //   formData.append('image', productimg)

  //   // {productname:productname, productprice:productprice,productdescription:productdescription, categoryid:categoryid, image:productimg}


  //   const newproduct = await axios.post('http://localhost:8000/api/product/create',formData
  //   )
  //   console.log(newproduct.headers)
  // }

  // const deleteProduct = async(e)=>{
  //   e.preventDefault();
  //   const deleted = await axios.delete('http://localhost:8000/api/product/delete/'+productId)
  //   setshowDeleteCateg(!showDeleteCateg);

  // }

  //   useEffect(() => {
  //     getallCategory()
  //     allProducts()
  //   }, [showCreatePro])

  return (
    <></>
    // <div className='product-manag'>
    //   <div className="container-xl">
    //     <div className="table-responsive">
    //       <div className="table-wrapper">
    //         <div className="table-title">
    //           <div className="row">
    //             <div className="col-sm-6">
    //               <h2>Manage <b>Products</b></h2>
    //             </div>
    //             <div className="col-sm-6">
    //               <Link className="btn btn-success" onClick={()=>setshowCreatePro(!showCreatePro)} ><i className="material-icons">&#xE147;</i> <span>اضافة منتج جديد</span></Link>
    //               <Link className="btn btn-danger"onClick={opendelete} ><i className="material-icons">&#xE15C;</i> <span>Delete</span></Link>						
    //             </div>
    //           </div>
    //         </div>
    //         <table className="table table-striped table-hover">
    //           <thead>
    //             <tr>
    //               <th>
    //                 <span className="custom-checkbox">
    //                   <input type="checkbox" id="selectAll"/>
    //                   <label htmlFor="selectAll"></label>
    //                 </span>
    //               </th>
    //               <th>id</th>
    //               <th>الاسم</th>
    //               <th>الصوره</th>
    //               <th>الصنف</th>
    //               <th>الوصف</th>
    //               <th>السعر</th>
    //               <th>Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {allproducts.map((product, i)=>{
    //               if(i < pagination & i >=pagination-5 ){
    //                 return(
    //                   <tr key={i}>
    //                     <td>
    //                       <span className="custom-checkbox">
    //                         <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
    //                         <label htmlFor="checkbox1"></label>
    //                       </span>
    //                     </td>
    //                     <td>{i+1}</td>
    //                     <td>{product.name}</td>
    //                     <td><img src={require(`../../../../../../../../${product.image}`)} style={{width:2, height:2}}/></td>
    //                     <td>{allCategory.find(category=>category._id == product.category).name}</td>
    //                     <td>{product.description}</td>
    //                     <td>{product.price}</td>
    //                     <td>
    //                       <a className="edit" data-toggle="modal" onClick={()=>seteditemployee(!editemployee)}><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
    //                       <a  className="delete" data-toggle="modal"onClick={()=>setshowDeletePro(!showDeletePro)}><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
    //                     </td>
    //                   </tr>
    //                 )
    //               }
    //             }
    //             )}
    //           </tbody>
    //         </table>
    //         <div className="clearfix">
    //           <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
    //           <ul className="pagination">
    //             <li className="page-item"><a href="#" className="page-link"onClick={showpagination}>Previous</a></li>
    //             <li className="page-item active"><a href="#" className="page-link" onClick={showpagination}>1</a></li>
    //             <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>2</a></li>
    //             <li className="page-item "><a href="#" className="page-link" onClick={showpagination}>3</a></li>
    //             <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>4</a></li>
    //             <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>5</a></li>
    //             <li className="page-item"><a href="#" className="page-link"onClick={showpagination}>Next</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>        
    //   </div>
    //   {showCreatePro && <div id="showCreateProModal" className="modal-box">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <form method='Post'>
    //           <div className="modal-header">						
    //             <h4 className="modal-title">اضافة منتج جديد</h4>
    //             <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={()=>setshowCreatePro(!showCreatePro)}>&times;</button>
    //           </div>
    //           <div className="modal-body">					
    //             <div className="form-group">
    //               <label>الاسم</label>
    //               <input type="text" name='name' className="form-control" required onChange={(e)=>setproductname(e.target.value)}/>
    //             </div>
    //             <div className="form-group">
    //               <label>الوصف</label>
    //               <textarea className="form-control" required onChange={(e)=>setproductdescription(e.target.value)}></textarea>
    //             </div>
    //             <div className="form-group">
    //               <label htmlFor='category'>التصنف</label>
    //               <select name="category" id="category" form="carform" onChange={(e)=>setcategoryid(e.target.value)}>
    //                 {allCategory.map((category, i) =>{
    //                   return <option value={category._id} key={i} >{category.name}</option>})
    //                 }
    //               </select>
    //             </div>
    //             <div className="form-group">
    //               <label>السعر</label>
    //               <input type="number" className="form-control" required onChange={(e)=>setproductprice(e.target.value)}/>
    //             </div>
    //             <div className="form-group">
    //               <label>الصورة</label>
    //               <input type="file" name='image' className="form-control" required onChange={(e)=>{setproductimg(e.target.files[0])}}/>
    //             </div>					
    //           </div>
    //           <div className="modal-footer">
    //             <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
    //             <input type="submit" className="btn btn-success" value="Add" onClick={createProduct}/>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   }

    //   {editemployee && <div id="editEmployeeModal" className="modal-box">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <form>
    //           <div className="modal-header">						
    //             <h4 className="modal-title">Edit Employee</h4>
    //             <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={()=>seteditemployee(!editemployee)}>&times;</button>
    //           </div>
    //           <div className="modal-body">					
    //             <div className="form-group">
    //               <label>Name</label>
    //               <input type="text" className="form-control" required/>
    //             </div>
    //             <div className="form-group">
    //               <label>Email</label>
    //               <input type="email" className="form-control" required/>
    //             </div>
    //             <div className="form-group">
    //               <label>Address</label>
    //               <textarea className="form-control" required></textarea>
    //             </div>
    //             <div className="form-group">
    //               <label>Phone</label>
    //               <input type="text" className="form-control" required/>
    //             </div>					
    //           </div>
    //           <div className="modal-footer">
    //             <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" onClick={()=>seteditemployee(!editemployee)} />
    //             <input type="submit" className="btn btn-info" value="Save"/>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>}
    //   {showDeletePro && <div id="showDeleteProModal" className="modal-box">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <form>
    //           <div className="modal-header">						
    //             <h4 className="modal-title">Delete Employee</h4>
    //             <button type="button" className="close" data-dismiss="modal" aria-hidden="true"onClick={()=>setshowDeletePro(!showDeletePro)}>&times;</button>
    //           </div>
    //           <div className="modal-body">					
    //             <p>Are you sure you want to delete these Records?</p>
    //             <p className="text-warning"><small>This action cannot be undone.</small></p>
    //           </div>
    //           <div className="modal-footer">
    //             <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" onClick={()=>setshowDeletePro(!showDeletePro)} />
    //             <input type="submit" className="btn btn-danger" value="Delete"/>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>}
    // </div>
  )
}

export default Products