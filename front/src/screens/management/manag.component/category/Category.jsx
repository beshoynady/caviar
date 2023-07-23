import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import './Category.css'


const Category = () => {
  const [categoryname, setcategoryname] = useState('')
  const [showAddCateg, setshowAddCateg] = useState(false)
  const [showDeleteCateg, setshowDeleteCateg] = useState(false)
  const [showEditCateg, setshowEditCateg] = useState(false)
  const [categoryId, setcategoryId] = useState('')

  const openEditcate = (id) => {
    setshowEditCateg(!showEditCateg);
    setcategoryId(id);
  }
  const openDeletecate = (id) => {
    setshowDeleteCateg(!showDeleteCateg);
    setcategoryId(id);
  }

  const [allCategory, setallCategory] = useState([])

  const getallCategory = async () => {
    const res = await axios.get("http://localhost:8000/api/category/allcategory");
    setallCategory(res.data)
  }


  const createCategory = async (e) => {
    e.preventDefault();
    const send = await axios.post("http://localhost:8000/api/category/create", { name: categoryname });
    setshowAddCateg(!showAddCateg)
  }


  const editCategory = async (e) => {
    e.preventDefault();
    const edit = await axios.put('http://localhost:8000/api/category/updatecategory/' + categoryId, { name: categoryname })
    setshowEditCateg(!showEditCateg)
  }
  const deleteCategory = async (e) => {
    e.preventDefault();
    const deleted = await axios.delete('http://localhost:8000/api/category/deletecategory/' + categoryId)
    setshowDeleteCateg(!showDeleteCateg);

  }

  const [pagination, setpagination] = useState(5)
  const showpagination = (e) => {
    if (e.target.innerHTML == 'Next') {
      setpagination(pagination + 5)
    } else if (e.target.innerHTML == 'Previous') {
      if (pagination <= 5) {
        setpagination(5)
      } else {
        setpagination(pagination - 5)
      }
    } else {
      setpagination(e.target.innerHTML * 5)
    }
  }
  useEffect(() => {
    getallCategory()
  }, [showAddCateg, showDeleteCateg, showEditCateg])

  return (
    <div className='category-manag'>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Category</b></h2>
                </div>
                <div className="col-sm-6">
                  <Link to="create" className="btn btn-success" onClick={(e) => { e.preventDefault(); setshowAddCateg(!showAddCateg) }} ><i className="material-icons">&#xE147;</i> <span>اضافة منتج جديد</span></Link>
                  <a href="#deleteEmployeeModal" className="btn btn-danger" onClick={() => setshowDeleteCateg(!showDeleteCateg)} ><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll"></label>
                    </span>
                  </th>
                  <th>id</th>
                  <th>الاسم</th>
                  <th>عدد المنتجات</th>
                  <th>عدد المبيعات</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allCategory.map((category, i) => {
                  if (i < pagination & i >= pagination - 5) {
                    return (
                      <tr key={i}>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                            <label htmlFor="checkbox1"></label>
                          </span>
                        </td>
                        <td>{i + 1}</td>
                        <td>{category.name}</td>
                        <td></td>
                        <td></td>
                        <td>
                          <Link className="edit" onClick={() => openEditcate(category._id)}><i className="material-icons" title="Edit">&#xE254;</i>
                          </Link>
                          <a href="#deleteEmployeeModal" className="delete" data-toggle="modal" onClick={() => openDeletecate(category._id)}><i className="material-icons" title="Delete">&#xE872;</i></a>
                        </td>
                      </tr>

                    )
                  }
                }
                )
                }
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>Previous</a></li>
                <li className="page-item active"><a href="#" className="page-link" onClick={showpagination}>1</a></li>
                <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>2</a></li>
                <li className="page-item "><a href="#" className="page-link" onClick={showpagination}>3</a></li>
                <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>4</a></li>
                <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>5</a></li>
                <li className="page-item"><a href="#" className="page-link" onClick={showpagination}>Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showAddCateg && <div id="addEmployeeModal" className="modal-box">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">اضافة تصنيف جديد</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => setshowAddCateg(!showAddCateg)}>&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>الاسم</label>
                  <input type="text" name='categoryname' className="form-control" required onChange={(e) => setcategoryname(e.target.value)} />
                </div>

              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                <input type="submit" className="btn btn-success" value="Add" onClick={createCategory} />
              </div>
            </form>
          </div>
        </div>
      </div>
      }

      {showEditCateg && <div id="editEmployeeModal" className="modal-box">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">تعديل التصنيفات</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => setshowEditCateg(!showEditCateg)}>&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" required onChange={(e) => setcategoryname(e.target.value)} />
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" onClick={() => setshowEditCateg(!showEditCateg)} />
                <input type="submit" className="btn btn-info" value="Save" onClick={editCategory} />
              </div>
            </form>
          </div>
        </div>
      </div>
      }

      {showDeleteCateg && <div id="deleteEmployeeModal" className="modal-box">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => setshowDeleteCateg(!showDeleteCateg)}>&times;</button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning"><small>This action cannot be undone.</small></p>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" onClick={() => setshowDeleteCateg(!showDeleteCateg)} />
                <input type="submit" className="btn btn-danger" value="Delete" onClick={deleteCategory} />
              </div>
            </form>
          </div>
        </div>
      </div>
      }
    </div>
  )

}

export default Category