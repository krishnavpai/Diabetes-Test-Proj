export default function handler(req, res) {
  if (req.method === "POST") {
    let pregnancies = req.body.pregnancies;
    let glucose = req.body.glucose;
    let bp = req.body.bp;
    let insulin = req.body.insulin;
    let bmi = req.body.bmi;
    let dpf = req.body.dpf;
    let age = req.body.age;

    if (dpf > 0.5) {
      res.status(200).json({ result: "You don't have diabetes" });
    } else if (dpf < 0.46) {
      res.status(200).json({ result: "You might have diabetes" });
    } else {
      res.status(200).json({ result: "cant predict" });
    }
  }
}
