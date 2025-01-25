import React from "react";
import Child1 from './Child1'

function Parent(){
    const data = 'Hello this is from parent!'
    return(
            <div>
                <child1 data={data}></child1>
            </div>
    )
}

export default Parent