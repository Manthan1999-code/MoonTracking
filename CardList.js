 export const CardList = ({listObj})=>{
    console.log(listObj)
    return(
      <>
      <div className="card-div">
        <h1>{listObj.location}</h1>
        <h5 className="h5-tag">{listObj.timestamp}</h5>
        <h3 className="h3-tag">{listObj.moon_angle}</h3>
        <h3 className="h3-tag-visi">{listObj.visibility}</h3>
      </div>
      </>
    )
  }