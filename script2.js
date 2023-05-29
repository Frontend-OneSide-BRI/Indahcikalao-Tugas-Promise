const user = [
  {
    id: 1,
    username: "lala",
    adress: "jakarta",
  },
  {
    id: 2,
    username: "lala2",
    adress: "Surabaya",
  },
];

const transaction = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "Sedang Dikirim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "Dibatalkan" },
    ],
  },
];

const detailTransaction = [
  {
    id: 1,
    productName: "Kopi Hitam",
    qty: 3,
    totalAmount: 3000,
  },
  {
    id: 2,
    productName: "Kopi susu",
    qty: 4,
    totalAmount: 4000,
  },
];

///////////////////// ==================== > CALLBACK
// function login(username, callback) {
//   setTimeout(() => {
//     let filterData = user.filter((e) => e.username === username);
//     callback(filterData[0]);
//   }, 1000);
// }

// function getTransaction(userId, callback) {
//   setTimeout(() => {
//     let filterData = transaction.filter((e) => e.user_id === userId);
//     return callback(filterData[0]);
//   }, 1000);
// }

// function getDetailTransaction(transactionId) {
//   setTimeout(() => {
//     let filterData = detailTransaction.filter((e) => e.id === transactionId);
//     console.log(filterData[0]);
//   }, 1000);
// }

// login("lala", (res) => {
//   console.log(res);
//   getTransaction(res.id, (transaction) => {
//     console.log(transaction);
//     const transactionId = transaction.transaction[0].id;
//     getDetailTransaction(transactionId);
//   });
// });

///////////////////// ==================== > END OF CALLBACK

//////////////////// ==================== > PROMISE
// function login(username) {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let filterData = user.filter((e) => e.username === username);
//       resolve(filterData[0]);
//     }, 1000);
//   });
//   return p;
// }

// function getTransaction(userId) {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let filterData = transaction.filter((e) => e.user_id === userId);
//       resolve(filterData[0]);
//     }, 1000);
//   });
//   return p;
// }

// function getDetailTransaction(transactionId) {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let filterData = detailTransaction.filter((e) => e.id === transactionId);
//       resolve(filterData[0]);
//     }, 1000);
//   });
//   return p;
// }

// login("lala")
//   .then((val) => {
//     console.log(val);
//     return getTransaction(val.id);
//   })
//   .then((val) => {
//     console.log(val);
//     const transactionId = val.transaction[0].id;
//     return getDetailTransaction(transactionId);
//   })
//   .then((val) => console.log(val));

///////////////////// ==================== > END OF PROMISE

///////////////////// ==================== > ASYNC / AWAIT
function login(username) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let filterData = user.filter((e) => e.username === username);
      resolve(filterData[0]);
    }, 1000);
  });
  return p;
}

function getTransaction(userId) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let filterData = transaction.filter((e) => e.user_id === userId);
      resolve(filterData[0]);
    }, 1000);
  });
  return p;
}

function getDetailTransaction(transactionId) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let filterData = detailTransaction.filter((e) => e.id === transactionId);
      resolve(filterData[0]);
    }, 1000);
  });
  return p;
}

async function getAllData() {
  const loginUser = await login("lala");
  console.log(loginUser);

  const transactionData = await getTransaction(loginUser.id);
  console.log(transactionData);

  const detailIndex = transactionData.transaction[0].id;
  const detailTransaction = await getDetailTransaction(detailIndex);
  console.log(detailTransaction);
}

getAllData();

///////////////////// ==================== > END OF ASYNC / AWAIT
