const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === 'asim'){
      req.user = { name: 'asim', id: 3}
      next()
    }
    else {
        res.status(401).send('unauthrize')
    }
}

module.exports = authorize