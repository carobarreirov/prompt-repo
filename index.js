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
