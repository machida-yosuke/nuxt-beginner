import Cookies from "universal-cookie";
export default ({req, route,redirect})=>{  
  // if(['/'].includes(route.path)){
  //   return
  // } 

  const cookie = req? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookie.get('credential')
  // console.log(credential);
  

  if(!credential){
    redirect('/login')
  }

  if(credential && route.path ==='/login'){
    redirect('/')
  }

  if(!credential && route.path !=='/login'){
    redirect('/login')
  }

  // if(process.browser){
  //   console.log('browser');
  // }
  // else{
  //   console.log('ssr');
  // }
}