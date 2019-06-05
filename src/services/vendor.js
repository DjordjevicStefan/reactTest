import http from "./httpService" ;
import qs from "qs"


export function getAllVendors() {
  return http.get("http://localhost:3500/admin/vendors")
}

export function getVendor(vendorId) {
  return http.get(`http://localhost:3500/admin/vendors/${vendorId}`)
}

export function deleteVendor(vendorId) { 
  
  return http.post(`http://localhost:3500/admin/vendors/${vendorId}` ) ;

}

