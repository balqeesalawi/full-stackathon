const mongoose = require('mongoose')
const Game = require('../models/Game')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createPosts = async () => {
  let games = [
    {
      name: 'Bumper Cars',
      code: '4A59KQ',
      points: 60,
      img: 'https://imgs.search.brave.com/jub8AwnhdSISfE7TfPd1gyPdkyHhktnz_xrQ2S_V7fY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvc2Ix/MDA2ODczOGItMDAx/L3Bob3RvL2J1bXBl/ci1jYXJzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Tck14/elB5MGprMHZ0Y3R6/dExZLXYzVkdseHFT/aExMeVM3NURud0gw/dEhJPQ'
    },
    {
      name: 'Rollercoaster',
      code: '6QF37M',
      points: 100,
      img: 'https://imgs.search.brave.com/hbsH5B7RobB3CsJI0Ptn-2ABJ2aRwJNLczTnyCX2KiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjcwMzU5ODM2NTUt/MGNlZWM2MWJiNzMz/P2l4bGliPXJiLTQu/MS4wJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGNtOXNiR1Z5SlRJ/d1kyOWhjM1JsY254/bGJud3dmSHd3Zkh4/OE1BPT0mZm09anBn/JnE9NjAmdz0zMDAw'
    },
    {
      name: 'Big Wheel',
      code: '8H5TK9',
      points: 80,
      img: 'https://imgs.search.brave.com/iAL92n-0zSy2JJsXjSUFoOk1v12USnF4VNOi-NdMz9I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/ZXJyaXMtd2hlZWwt/dGhlbWUtcGFya181/Mzg3Ni0zMTEwMC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw'
    },
    {
      name: 'Hunted Mansion',
      code: '3G49SK',
      points: 90,
      img: 'https://imgs.search.brave.com/lN0KAFg3Fudll41p59Zn7gWru1eeEj_5vAhJZkwiX-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzbmV5dG91cmlz/dGJsb2cuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA2/L2hhdW50ZWQtbWFu/c2lvbi1ob2xpZGF5/LWRpc25leWxhbmQt/bmlnaHQuanBn'
    },
    {
      name: 'Ring Toss',
      code: '6R8G21',
      points: 50,
      img: 'https://imgs.search.brave.com/xZ5eCWfQ9r6bMdlgUnZhPt8ZFv_LXqevyNxIcrU0Y6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc1/NTYwOTQ4Mi9waG90/by9yaW5nLXRvc3Mt/Z2FtZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d0dadFdH/aUVpMWc2MUd0RF9O/ZVExOXNXNDBtallv/TDBUWmhHMVdyV05P/WT0'
    },
    {
      name: 'Ballon Dart',
      code: '4QK61M',
      points: 50,
      img: 'https://imgs.search.brave.com/Zkr1qJjpKh7pmApa_xTHPIMfd5SY40yk0j9C0l6W4PA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/OTkyNzAyNC9waG90/by9iYWxsb29ucy1h/bmQtcHJpemVzLWF0/LWEtZGFydC10aHJv/d2luZy1nYW1lLWJv/b3RoLWF0LWEtY2Fy/bml2YWwtZmFpci1v/ci1hbXVzZW1lbnQt/cGFyay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9XzVNeElP/ME1DcTVJTFk1YzYz/WTRtVGJFTFBJZV84/LUpHLTNuZHNZS3NZ/MD0'
    },
    {
      name: 'Bowling',
      code: '7TC41B',
      points: 70,
      img: 'https://play-lh.googleusercontent.com/hgGL7YZZFTPFDMo6RWvXfELQC9mSu9Zn0cPKYQJdnhY9VFUAr3oP2TUoRBlNcST2-a7Q'
    }
  ]
  await Game.deleteMany({})
  console.log('Creating posts . . .')
  await Game.insertMany(games)
  console.log('games created!')

  mongoose.connection.close()
}

createPosts()
