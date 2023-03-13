const Redis = require('ioredis');
const redis = new Redis({
    host: 'redis-10559.c10.us-east-1-3.ec2.cloud.redislabs.com',
    port: 10559,
    password: '5fsJsWdtuvDEcuRCld5CtPXGRagXBYbt'
});

module.exports

const loadDataset = async () => {
  let database = await redis.call("JSON.GET","dataset","$");
  console.log(database);
};

loadDataset();
/* 
let database = {
    "data": [
      {
        "title": "Producto A",
        "category": "web",
        "labels": [2,4,5],
        "description":"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        "title": "Producto B",
        "category": "webos",
        "labels": [1,3,8],
        "description":"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        "title": "Producto C",
        "category": "webotes",
        "labels": [4,6,9],
        "description":"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
    ]
  }; */