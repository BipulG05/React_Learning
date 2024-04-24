import { MdDelete } from "react-icons/md";



const EmpityPost = () =>{
    return  <>
    <div className="card post-card" >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill Empity-button">
            <MdDelete />
          </span>
        </h5>
        <p className="card-text Empity-body"></p>
          <span className="badge Empity-hashtags">   </span>
          <span className="badge  Empity-hashtags">   </span>
          <span className="badge Empity-hashtags">   </span>
        <div className="alert alert-dark post-reaction" role="alert">
          
        </div>

        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  </>
}

export default EmpityPost;