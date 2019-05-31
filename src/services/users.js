// import getAllWorkorders from "./workOrders";
import http from "./httpService" ;

// const allWorkOrders = getAllWorkorders();

// const users = [
//   {
//     userId: 1,
//     firstName: "dj bog",
//     lastName: "kralj",
//     mail: "dj@gmail.com",
//     password: "12345",
//     region: "California",
//     workOrderIds: [2, 3]
//   },
//   {
//     userId: 2,
//     firstName: "Jao",
//     lastName: "Pakao",
//     mail: "ghdgd@gmail.com",
//     password: "123456789",
//     region: "Denver",
//     workOrderIds: [1, 4]
//   }
// ];

// export function getUserWorkOrders(userId) {
//   let userObj = users.find(e => {
//     return e.userId === userId;
//   });

//   let workOrderList = [];

//   userObj.workOrderIds.forEach(element => {
//     let workOrder = allWorkOrders.filter(order => {
//       return order.id === element;
//     });

//     workOrderList.push(workOrder[0]);
//   });

//   return workOrderList;
// }

export function getUser(id) {
  return http.get(`http://localhost:3500/admin/users/${id}`)
}

export default function getAllUsers() {
  return http.get("http://localhost:3500/admin/users")
}
