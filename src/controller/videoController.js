export const videoHome = (req, res) => res.send("video!");
export const view = (req, res) => res.send(`VIEW #${req.params.id}`);