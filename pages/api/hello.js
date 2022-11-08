async function handler(req, res) {
  const input = req.body;
  const user = input.user;
  const lat = input.latitude;
  const long = input.longitude;
  const firebase = `link` //put in your firebase link here


    const send = await fetch(
      `${firebase}/${user}.json`,
      {
        method: "POST",
        body: JSON.stringify({ lat, long }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const sent = await send.json();
    console.log(send);

    res.status(200).json(sent);
  }


export default handler;