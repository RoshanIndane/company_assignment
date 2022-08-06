export const addNum=(num)=>{
    return{
        type:"ADDNUM",
payload:num
    }
}


export const subNum=(num)=>{
    return{
        type:"SUBNUM",
        payload:num
    }
}