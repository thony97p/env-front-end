import axios from "axios";

export function getRestaurants() {
  return new Promise((resolve, reject) => {
    const datas = axios.get(
      "https://frozen-reef-84613.herokuapp.com/api/restaurants?populate=*"
    );
    datas
      .then((res) => {
        // en cas de réussite de la requête
        // console.log(response.data.data.flat());
        resolve(res.data.data.flat());
      })
      .catch((err) => {
        // en cas d’échec de la requête
        reject(err);
      });
  });
}

export function getAll() {
  return new Promise((resolve, reject) => {
    resolve(4);
    reject("Message d'erreur");
  });
}

export async function asyncGetRestaurants() {
  const res = await axios.get(
    "https://frozen-reef-84613.herokuapp.com/api/restaurants?populate=*"
  );
  return res.data.data.flat();
}

export async function getRestaurant(id) {
  const res = await axios.get(
    "https://frozen-reef-84613.herokuapp.com/api/restaurants/" + id +"?populate=*"
  );
  return res.data;
}
