export default function filter(val){
    const currentdate=new Date()
    let fromDate=''
    let toDate=''
switch(val){
    case 'today':{
        fromDate=currentdate
        toDate=currentdate
        break;
    }
    case 'this_week':{
        const currentWeekNo=currentdate.getDay()
      // console.log(new Date(currentdate.setDate(currentdate.getDate()-currentWeekNo)))
        fromDate=new Date(currentdate.setDate(currentdate.getDate()-currentWeekNo))
        toDate=new Date(currentdate.setDate(fromDate.getDate()+6))
       break; 
    }
    case 'last_week':{
        const currentWeekNo=currentdate.getDay()+7
        // console.log(new Date(currentdate.setDate(currentdate.getDate()-currentWeekNo)))
          fromDate=new Date(currentdate.setDate(currentdate.getDate()-currentWeekNo))
          toDate=new Date(currentdate.setDate(fromDate.getDate()+6))
          break;
    }
    case 'this_month':{
       // const currentMonth=currentdate.getMonth()
       // alert(currentdate.getMonth()+'/01/'+currentdate.getFullYear())
        // console.log(new Date(currentdate.setDate(currentdate.getDate()-currentWeekNo)))
          fromDate=new Date(currentdate.getFullYear(),currentdate.getMonth(),1)
         // console.log(fromDate)
          toDate=new Date(currentdate.getFullYear(),currentdate.getMonth()+1,0)
          break; 
        
    }
    case 'last_month':{
        fromDate=new Date(currentdate.getFullYear(),currentdate.getMonth()-1,1)
        console.log(fromDate)
         toDate=new Date(currentdate.getFullYear(),currentdate.getMonth(),0)
        console.log(toDate)
         break; 
        
    }
    case 'last_3_month':{
        fromDate=new Date(currentdate.getFullYear(),currentdate.getMonth()-3,1)
        console.log(fromDate)
         toDate=new Date(currentdate.getFullYear(),currentdate.getMonth(),0)
        console.log(toDate)
         break; 
    }
    case 'last_6_month':{
        fromDate=new Date(currentdate.getFullYear(),currentdate.getMonth()-6,1)
        console.log(fromDate)
         toDate=new Date(currentdate.getFullYear(),currentdate.getMonth(),0)
        console.log(toDate)
         break; 
        
    }
    case 'last_12_month':{
        fromDate=new Date(currentdate.getFullYear(),currentdate.getMonth()-12,1)
        console.log(fromDate)
         toDate=new Date(currentdate.getFullYear(),currentdate.getMonth(),0)
        console.log(toDate)
         break; 
        
    }
    case 'this_year':{
        fromDate=new Date(currentdate.getFullYear(),0,1)
        console.log(fromDate)
         toDate=new Date(currentdate.getFullYear()+1,0,0)
        console.log(toDate)
         break; 
        
    }
    case 'last_year':{
        fromDate=new Date(currentdate.getFullYear()-1,0,1)
        console.log(fromDate)
         toDate=new Date(currentdate.getFullYear(),0,0)
        console.log(toDate)
         break; 
        
    }

}
return {fromDate,toDate}
}




