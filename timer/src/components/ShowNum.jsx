
function ShowNum({children = '0',remain,text}){
    // logic for sizing, then return height & fontSize
    let color;

    switch (remain) {
        case "tensec":
            color = "red"
            break;
        default:
            color = "white"
            break;
    }
    
    return(
        <div 
        style={{
            display:"flex",
            alignItems:"center",
            height:"60px",
            padding:"5px 10px",
            borderRadius:"4px",
            color:color,
            backgroundColor:"gray",
            fontSize:"40px"
        }}

        >
       
        {/* {props.children || "default"} */}
        {children}
        <h3>{text}</h3>
        </div>

        );
}
export default ShowNum;