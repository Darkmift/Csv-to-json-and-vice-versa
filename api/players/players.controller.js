import { parsePlayerCsv, objectToCsv } from './players.service.js';

export const postPlayerCsv = async (req, res) => {
  try {
    const { files } = req;
    const playerFile = files.players;

    const [output, error] = await parsePlayerCsv(playerFile.tempFilePath);
    if (error) throw new Error(error);

    res.json({ players: output });
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
export const objectTocsv = async (req, res) => {
  try {
    const objectPlayers = [{ id: 4, player: 'Sam' }, { id: 5, player: 'Jane' }]

    const [output, error] = await objectToCsv(objectPlayers);
    if (error) throw new Error(error);

    console.log("🚀 ~ file: players.controller.js ~ line 18 ~ objectTocsv ~ output", output)
    res.attachment(`players_${Date.now()}.csv`).send(output)
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}