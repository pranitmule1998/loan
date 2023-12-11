import { NavLink } from "react-router-dom";
import "./a.css";
const Add = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <h3>Regional Executive</h3>
                        <NavLink to={"/add"}><button className="btn btn-primary col-5">Enquiry</button></NavLink>  <br /> <br />

                        <NavLink to={"/show"}><button className="btn btn-primary col-5">Show List</button></NavLink>  <br /> <br />


                        <NavLink to={"/login"}><button className="btn btn-primary col-5">Logout</button></NavLink>  <br />
                    </div>

                        <div className="col-6" >
                           
                        </div>

                </div>



            </div>
        </>
    )
}
export default Add;