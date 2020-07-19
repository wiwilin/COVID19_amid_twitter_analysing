export function monthFromStr(date){
    var month= Number(date.slice(0,1))
    if(date.charAt(0)==='0')
        month= Number(date.charAt(1))
    return month
}

export function dayFromStr(date) {
    var day= parseInt(date.slice(2,3))
    if(date.charAt(2)==='0')
        day= Number(date.charAt(3))
    return day
}

export function dayFromValue(value){
    var day=0
    if(value<31)//1
        day=value+1
    else if(value<60)//2
        day=value-30 //-1
    else if(value<91)//3
        day=value-59 //-2
    else if(value<121)//4
        day=value-90//-3
    else if(value<152)//5
        day=value-120//-4
    return day
}

export function monthFromValue(value){
    var month=1
    if(value>121)//5
        month=5
    else if(value>91)//4
        month=4
    else if(value>60)//3
        month=3
    else if(value>31)
        month=2
    return month
}

export function strFromDate(month,day){
    var monthstr=month.toString()
    if(monthstr.length<2)
        monthstr='0'+monthstr
    var daystr=day.toString()
    if(daystr.length<2)
        daystr='0'+daystr
    return monthstr+daystr
}





