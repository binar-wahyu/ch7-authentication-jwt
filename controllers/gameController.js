const wait = {};

const data = {}; // Ini ceritanya model disimpen ke database

function waitEnemyResponse(id) {
  return new Promise((resolve) => {
    wait[id] = { resolve };
  });
}

module.exports = {
  playGame: async (req, res) => {
    const id = req.params.id;

    if (!data[id]) {
      // Player 1 memilih
      data[id] = {
        player1: req.body.choose,
        player2: null,
      };
    } else {
      // Player 2 memilih
      data[id].player2 = req.body.choose;
    }

    if (!wait[id]) {
      // Player 1 menunggu respons player 2
      await waitEnemyResponse(id);
    } else {
      // Player 2 merespons ke player 1 untuk selesai menunggu
      wait[id].resolve();
      delete wait[id];
    }

    res.json(data[id]);
  },
};
