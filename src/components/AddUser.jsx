import React from 'react'

const AddUser = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Describe yourself</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Profile image</label>
                                <input type="file" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Experience level</label>
                                <select name="" id="" className="form-control">
                                    <option value="Beginner">Beginner</option>
                                    <option value="Pro">Pro</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser