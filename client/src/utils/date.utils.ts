export const getHourAndMinuteFromDate=(stringDate:string)=>{
    const date=new Date(stringDate)
    let hour=('0' + date.getHours()).slice(-2);
    let min=('0' + date.getMinutes()).slice(-2);
    return hour+":"+min
}