// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ 
    Name: 'Tiago Carmo Santos', 
    Email: `tiagocarmosantos@gmail.com`, 
    GitHub: `https://github.com/tiagocarmosantos`,
    LinkedIn: `https://www.linkedin.com/in/tiagocarmosantos`
  })
}
