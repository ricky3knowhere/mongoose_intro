const getDataFomServer = (cb) => {
  const data = [
    { id: 1, name: 'Spongebob'},
    { id: 2, name: 'Patrick'}
  ]
  setTimeout(() => cb(data), 6000)
}

const getNameOnlyCb = (data, cb) => cb(data.map((i) => i.name))

//get name only without Callback

const getNameOnly = (data) => cb(data.map((i) => i.name))

const logger = console.log(data)

getDataFomServer((data) => getNameOnlyCb(data, logger))

//CONVERT TO A PROMISE

const getDataFomServerPromise = () => {
  return new Promise(resolve => {
    getDataFomServer(resolve)
  })
}

getDataFomServerPromise()
  .then(getNameOnly)
  .then(logger)

// Async Await

const getDataFomServerAsync = async () => {
  let data = await getDataFomServerPromise()
  data = getNameOnly(data)
  logger(data)
}
