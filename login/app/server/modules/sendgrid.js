var email   = {
  to      : 'rachelwang1994@gmail.com',
  from    : 'rswang@mit.edu',
  subject : '[Piplup] Reset Password',
  text    : 'This is my first email through SendGrid'
}
sendgrid.send(payload, function(err, json) {
  if (err) { console.error(err); }
  console.log(json);
});