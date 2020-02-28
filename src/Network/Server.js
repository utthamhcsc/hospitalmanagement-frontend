//const baseurl='http://192.168.0.121:8080/';
const baseurl='http://hospitalmanagemapp.gbfpue2n5p.us-east-1.elasticbeanstalk.com/';
const Getdata=async(url='')=>
{
 try
 {
  const response= await fetch(baseurl+url)      
  return await response.json();
  
  //return data;
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
            body: JSON.stringify(data)}); return await response.json();}

const PostFormdata=async(url = '', method='POST',data = {})=> 
{
  var formData = new FormData();
  Object.keys(data).map(item=>formData.append(item,data[item]));
  const response = await fetch(baseurl+url, {method:method,headers: 
  {
   // 'access-control-allow-origin':'*'
   },
  body: formData});
  return await response.json();
}
    
export  {Getdata,Postdata,PostFormdata}