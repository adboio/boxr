import { BoxService } from "../api/generated/api/resources/box/service/BoxService";

export default new BoxService({
  createBox: (req, res) => {
    return res.send(1)
  },

  getBox: (req, res) => {
    return res.send({
      title: "da biggest box"
    })
  }
})