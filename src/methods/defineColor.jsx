export const colorOnConfirmed=(cases)=>{
    let color = "#ffebee"
    if(cases>1)
        color="#ffcdd2"
    if(cases>3)
        color="#ef9a9a"
    if(cases>10)
        color = "#e57373"
    if (cases > 20)
        color = "#ef5350"
    if (cases > 50)
        color = "#f44336"
    if (cases > 100)
        color = "#e53935"
    if (cases > 200)
        color = "#d32f2f"
    if (cases > 500)
        color = "#c62828"
    if (cases > 1000)
        color = "#b71c1c"
    return color;

}


