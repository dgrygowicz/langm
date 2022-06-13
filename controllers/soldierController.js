exports.getAllSoldiers = (req, res) => {
  res.render('soldier/index', {
    pageTitle: 'Langrisser Mobile - Soldiers',
  });
};
