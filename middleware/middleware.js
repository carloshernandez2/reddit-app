 
 module.exports = {

    checkSession(req, res, next) {
		if (req.user) return next()
        const err = new Error('Unauthorized')
		res.status(401).send(err)
	}
 }