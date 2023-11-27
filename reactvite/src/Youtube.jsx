function Youtube(){
    let count = 10;
    let addvalue=()=>{
        console.log(count);
        count = count + 1;
    }
    return(
        <>
        <h1>Likes:{count}</h1>
        <button onClick={addvalue} >Add</button>
        <button>Remove</button>
        </>
    )
}
export default Youtube;