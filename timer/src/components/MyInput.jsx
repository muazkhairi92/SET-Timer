
function MyInput({digit}){
    // logic for sizing, then return height & fontSize
    let holder;
    let maxNum;
    switch (digit) {
        case "Hours":
            holder = "Hours"
            maxNum = "100"
            break;
        case "Min":
            holder = "Minutes"
            maxNum = "59"
            break;
        case "Sec":
            holder = "Seconds"
            maxNum = "59"
            break;
        default:
            holder = "Numbers"
            maxNum = "100"
            break;
    }
    
    return(
        <input type="number" min="0" max={maxNum} placeholder={holder}/>


        );
}
export default MyInput;