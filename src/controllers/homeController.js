import db from '../models/index'


const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        res.render("homePage", { dataUser: JSON.stringify(data) });
    } catch (e) {
        console.log(e)
    }


}

module.exports = {
    getHomePage
}