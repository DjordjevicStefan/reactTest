import http from "./httpService" ;
  

export default function  getAllWorkorders(){
    return http.get("http://localhost:3500/admin")
}
