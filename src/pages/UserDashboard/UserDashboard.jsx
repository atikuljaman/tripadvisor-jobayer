import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
    const location = useLocation();

    console.log(location);
    return (
        <>

            <div className="userDashboard-section">


                {/* <div className="container">
                    <div className="link-wrapper">
                        <NavLink className={`${location.pathname == '/user-dashboard' ? "active" : ''}`} to="add-user">Add User</NavLink>
                        <NavLink to="edit-profile">Edit Profile</NavLink>
                    </div>


                    <div className="outlet-div mt-5">


                        {
                            location.pathname == '/user-dashboard' ? <AddUser></AddUser> :
                                <Outlet></Outlet>}
                    </div>
                    
                </div> */}


                <div className="cover-photo">

                    <img src="" alt="" />

                </div>

                <div className="container">
                    <div className="wrapper-profile">
                        <div className="profile-section">

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className='d-flex flex-column'>
                                        <div className="profile-media">
                                            <img className='img-fluid' src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />

                                        </div>
                                        <div>
                                            <div className="user-about">
                                                <h4>Mr.Jobayer</h4>
                                                <p>@joba8</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="user-about">
                                        <h3 className='mb-3'>Intro</h3>

                                        <div className='d-flex mb-2'>
                                            <div><i class="fa-solid fa-user"></i></div>
                                            <div><p className='ms-2'>
                                                Hello,I am jobayer and i'm a full stack developer</p></div>
                                        </div>
                                        <div className='d-flex mb-2'>
                                            <div><i class="fa-solid fa-location-dot"></i></div>
                                            <div><p className='ms-2'>Dhaka,Bangladesh</p></div>
                                        </div>
                                        <div className='d-flex mb-2'>
                                            <div><i class="fa-solid fa-envelope"></i></div>
                                            <div><p className='ms-2'>jobayer@gmail.com</p></div>
                                        </div>
                                        <div className='d-flex'>
                                            <div><i class="fa-brands fa-weebly"></i></div>
                                            <div><p className='ms-2'>www.jambyte.com</p></div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-5">

                                    <div className="edit-area ">

                                        <div className='d-flex justify-content-end'>
                                            <div className="editProfile-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >
                                                <p>Edit Profile</p>
                                            </div>
                                            <div className=''>
                                                <div className="setting-icon">
                                                    <i class="fa-solid fa-gear"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    {/* modal */}
                                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">User Update</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="row py-3">
                                                        <div className="col-lg-3">
                                                            <div className="modal-img">
                                                                <img className='img-fluid' src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <div className="change-details">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">Profile photo </label>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="profile photo " />
                                                                        </div>


                                                                    </div>


                                                                    <div className="col-lg-6">

                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">Cover photo </label>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="cover photo" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                                                        </div>
                                                                    </div>


                                                                    <div className="col-lg-6">
                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">

                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">Cureent city </label>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Cureent city" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">

                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                                                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">

                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">Website</label>
                                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Website" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">

                                                                        <div class="mb-2">
                                                                            <label for="exampleFormControlInput1" class="form-label">About </label>
                                                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="About yourself " />
                                                                        </div>
                                                                    </div>






                                                                </div>



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserDashboard;