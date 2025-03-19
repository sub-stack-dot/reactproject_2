import React, {useState} from 'react';
import axios from 'axios';

function Registration(){
    const [formData,setFormData]= useState({fullName:"", email:"", password:""});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:3001/register",formData);
            console.log('Registration Successful:',response.data);
            alert('Registration Successful!');
        }
        catch(error){
            console.error('Error:',error.response?.data|| error.messege);
            alert('Registration faild.Please try again.');
        }
    };



    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary text-white text-center">
                  <h3>Register</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
      
                    {/* Email Field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
      
                    {/* Password Field */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
      
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Registration