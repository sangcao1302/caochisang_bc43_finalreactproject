import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const{token}=useSelector(state=>state.productReducer)
    console.log(token)
   
  return (
    
    <div>
         <div className='container p-0' style={{minHeight:"60.7vh"}}>
                <form className='row mt-5'>
                    <div className='col-12 col-sm-6 col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" defaultValue={token.content.email} />
                            <span className="text-danger mx-1 fs-6 mt-5">{}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" defaultValue={token.content.password} />
                            <span className="text-danger mx-1 fs-6 mt-5">{}</span>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" defaultValue={token.content.name} />
                            <span className="text-danger mx-1 fs-6 mt-5">{}</span>
                        </div>
                    </div>
                     
                    <div className='col-12 col-sm-6 col-md-6'>
                       
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder='(Ex:+84782350855)' defaultValue={token.content.phone} />
                            <span className="text-danger mx-1 fs-6 mt-5">{}</span>
                        </div>
                        <div>
                            <p>Gender</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input  border-primary" type="radio" name="inlineRadioOptions" id="male" value="true" defaultValue={token.content.gender}  />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input  border-primary" type="radio" name="inlineRadioOptions" id="female" value="false" defaultValue={token.content.gender}  />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 mb-2 rounded-pill"  style={{background: "#6200EE",border:"none"}} >Update</button>

                    </div>
                    </form>  
        </div>
    </div>
  )
}
