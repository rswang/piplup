
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!' });
};

exports.restaurantlist = function(db) {
    return function(req, res) {
        var collection = db.get('restaurantcollection');
        collection.find({},{},function(e,docs){
            res.render('restaurantlist', {
                "restaurantlist" : docs
            });
        });
    };
};

exports.newrestaurant = function(req, res){
  res.render('newrestaurant', { title: 'Add New Restaurant' });
};

/*exports.menu = function(req, res){
  res.render('menu', { title: 'Your Menu' });
};
*/
exports.addrestaurant = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var userName = req.body.username;
        var password = req.body.password;
        var userEmail = req.body.useremail;

        // Set our collection
        var collection = db.get('restaurantcollection');

        // Submit to the DB
        collection.insert({
            "username" : userName,
            "password" : password,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("menu");
                // And forward to success page
                res.redirect("menu");
            }
        });

    }
}

exports.menu = function(req, res){
  res.render('menu', { title: 'Menu!' });
};