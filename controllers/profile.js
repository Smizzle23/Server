const fetchProfile = (req, res, db, knex) => {
	const { id } = req.params;
	let found = false;
	db.select('*').from('users').where({id: id})
	.then(user => {
		if (user.length) {
		  res.json(user[0]);
		} else {
		  res.status(400).json('Error getting user')
		}
	})
}

module.exports= {
	fetchProfile: fetchProfile
}