


const initialState=0;

const changeNum=(state=initialState, action)=>{

    switch (action.type){
        case "ADDNUM":return state+action.payload;

        case "SUBNUM": return state-action.payload;

        default : return state;
    }
}

export default changeNum;