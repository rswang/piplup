
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
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
                res.location("restaurantprofile");
                // And forward to success page
                res.redirect("restaurantprofile");
            }
        });

    }
};


exports.menu = function(req, res){
  res.render('menu', { title: 'Menu!' });
};

exports.restaurantprofile = function(req, res){
  res.render('restaurantprofile', { title: 'Edit Restaurant Profile' });
};

exports.editprofile = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var username = req.body.username;
        var restaurant = req.body.restaurant;
        var address = req.body.address;
        var city = req.body.city;
        var state = req.body.state;
        var zip = req.body.zip;


        // Set our collection
        var collection = db.get('restaurantcollection');

        // Submit to the DB
        collection.update({
            "username" : username },
            { '$set':{
            "restaurant name" : restaurant,
            "address" : address,
            "city" : city,
            "state": state,
            "zip": zip
            }
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
};