//const baseurl='http://192.168.0.121:8080/';
//const baseurl='http://hospitalapp.eba-pp3qspjy.ap-southeast-1.elasticbeanstalk.com/';
const baseurl='http://localhost:9090/hospitalmanagement/'

const Getdata=async(url='')=>
{
 try
 {
  const response= await fetch(baseurl+url)      
  console.log(response)
  return await response.json();
  }catch(err){
  console.log(err);
 }
}

const Postdata=async(url = '', mymethod='POST',data = {})=> {
//alert(JSON.stringify(data));
console.log(mymethod)
const response = await fetch(baseurl+url, {
method:mymethod,
headers:
{ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'},
            body: JSON.stringify(data)}); 
             return await response.json();}

const PostFormdata=async(url = '', method='POST',data = {})=> 
{
  var formData = new FormData();
  Object.keys(data).map(item=>formData.append(item,data[item]));
  const response = await fetch(baseurl+url, {method:method,headers: 
  {
    'Access-Control-Allow-Origin':'*'
   },
  body: formData});
  return await response.json();
}
    
export  {Getdata,Postdata,PostFormdata}